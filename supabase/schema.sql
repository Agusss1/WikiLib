-- ============================================================================
-- WikiLib — esquema de comunidad
--
-- Ejecutar una sola vez en Supabase: SQL Editor -> New query -> pegar -> Run.
--
-- Principio de diseño: la regla "sólo las cuentas verificadas pueden publicar"
-- se aplica en la BASE DE DATOS, no en la interfaz. Ocultar un botón no protege
-- nada: cualquiera puede llamar a la API directamente. Estas políticas hacen
-- que el rechazo ocurra en Postgres.
-- ============================================================================

-- ---------------------------------------------------------------------------
-- Perfiles
-- ---------------------------------------------------------------------------
create table if not exists public.profiles (
  id          uuid primary key references auth.users(id) on delete cascade,
  apodo       text not null unique
                check (char_length(apodo) between 3 and 24
                       and apodo ~ '^[A-Za-z0-9_ áéíóúñÁÉÍÓÚÑ.-]+$'),
  bio         text check (char_length(bio) <= 280),
  created_at  timestamptz not null default now()
);

comment on table public.profiles is
  'Datos públicos de cada cuenta. El email vive en auth.users y nunca se expone.';

-- ---------------------------------------------------------------------------
-- ¿Está verificada la cuenta que hace esta petición?
--
-- Se marca stable + security definer para poder leer auth.users desde las
-- políticas sin darle acceso directo a esa tabla a nadie.
-- ---------------------------------------------------------------------------
create or replace function public.esta_verificado()
returns boolean
language sql
stable
security definer
set search_path = public, auth
as $$
  select exists (
    select 1 from auth.users u
    where u.id = auth.uid()
      and u.email_confirmed_at is not null
  );
$$;

comment on function public.esta_verificado is
  'true si quien hace la petición confirmó su email. Google OAuth ya llega confirmado.';

-- ---------------------------------------------------------------------------
-- Alta automática del perfil al crearse la cuenta
--
-- El apodo viene en los metadatos del registro. Con Google, se deriva del
-- nombre de la cuenta. Si ya está tomado, se le agrega un sufijo en lugar de
-- fallar, porque un error acá dejaría la cuenta creada y sin perfil.
-- ---------------------------------------------------------------------------
create or replace function public.crear_perfil()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  base   text;
  final  text;
  n      int := 0;
begin
  base := coalesce(
    nullif(trim(new.raw_user_meta_data ->> 'apodo'), ''),
    nullif(trim(new.raw_user_meta_data ->> 'full_name'), ''),
    nullif(trim(new.raw_user_meta_data ->> 'name'), ''),
    split_part(coalesce(new.email, 'lector'), '@', 1)
  );
  base := regexp_replace(base, '[^A-Za-z0-9_ áéíóúñÁÉÍÓÚÑ.-]', '', 'g');
  base := left(nullif(trim(base), ''), 24);
  if base is null or char_length(base) < 3 then
    base := 'lector';
  end if;

  final := base;
  while exists (select 1 from public.profiles p where lower(p.apodo) = lower(final)) loop
    n := n + 1;
    final := left(base, 20) || n::text;
  end loop;

  insert into public.profiles (id, apodo) values (new.id, final)
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.crear_perfil();

-- ---------------------------------------------------------------------------
-- Hilos y respuestas
-- ---------------------------------------------------------------------------
create table if not exists public.threads (
  id          uuid primary key default gen_random_uuid(),
  author_id   uuid not null references public.profiles(id) on delete cascade,
  title       text not null check (char_length(title) between 8 and 160),
  body        text not null check (char_length(body) between 20 and 8000),
  topic       text not null default 'general',
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now(),
  hidden      boolean not null default false
);

create table if not exists public.posts (
  id          uuid primary key default gen_random_uuid(),
  thread_id   uuid not null references public.threads(id) on delete cascade,
  author_id   uuid not null references public.profiles(id) on delete cascade,
  body        text not null check (char_length(body) between 2 and 8000),
  created_at  timestamptz not null default now(),
  hidden      boolean not null default false
);

create index if not exists posts_thread_idx  on public.posts (thread_id, created_at);
create index if not exists threads_recent_idx on public.threads (created_at desc);

create table if not exists public.reports (
  id           uuid primary key default gen_random_uuid(),
  reporter_id  uuid not null references public.profiles(id) on delete cascade,
  target_type  text not null check (target_type in ('thread', 'post')),
  target_id    uuid not null,
  reason       text not null check (char_length(reason) between 5 and 500),
  status       text not null default 'pendiente'
                 check (status in ('pendiente', 'revisado', 'descartado')),
  created_at   timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Row Level Security
-- ---------------------------------------------------------------------------
alter table public.profiles enable row level security;
alter table public.threads  enable row level security;
alter table public.posts    enable row level security;
alter table public.reports  enable row level security;

-- Perfiles: los lee cualquiera; cada uno edita el suyo.
drop policy if exists "perfiles visibles" on public.profiles;
create policy "perfiles visibles" on public.profiles
  for select using (true);

drop policy if exists "editar mi perfil" on public.profiles;
create policy "editar mi perfil" on public.profiles
  for update using (auth.uid() = id) with check (auth.uid() = id);

-- Hilos: los lee cualquiera, incluso sin cuenta.
drop policy if exists "hilos visibles" on public.threads;
create policy "hilos visibles" on public.threads
  for select using (hidden = false);

-- Publicar exige cuenta VERIFICADA. Esta es la regla que pidió el proyecto.
drop policy if exists "publicar hilo requiere verificacion" on public.threads;
create policy "publicar hilo requiere verificacion" on public.threads
  for insert with check (auth.uid() = author_id and public.esta_verificado());

drop policy if exists "editar mi hilo" on public.threads;
create policy "editar mi hilo" on public.threads
  for update using (auth.uid() = author_id) with check (auth.uid() = author_id);

drop policy if exists "borrar mi hilo" on public.threads;
create policy "borrar mi hilo" on public.threads
  for delete using (auth.uid() = author_id);

-- Respuestas: mismo criterio.
drop policy if exists "respuestas visibles" on public.posts;
create policy "respuestas visibles" on public.posts
  for select using (hidden = false);

drop policy if exists "responder requiere verificacion" on public.posts;
create policy "responder requiere verificacion" on public.posts
  for insert with check (auth.uid() = author_id and public.esta_verificado());

drop policy if exists "editar mi respuesta" on public.posts;
create policy "editar mi respuesta" on public.posts
  for update using (auth.uid() = author_id) with check (auth.uid() = author_id);

drop policy if exists "borrar mi respuesta" on public.posts;
create policy "borrar mi respuesta" on public.posts
  for delete using (auth.uid() = author_id);

-- Reportes: los crea cualquier persona con cuenta; sólo ve los suyos.
drop policy if exists "reportar" on public.reports;
create policy "reportar" on public.reports
  for insert with check (auth.uid() = reporter_id);

drop policy if exists "ver mis reportes" on public.reports;
create policy "ver mis reportes" on public.reports
  for select using (auth.uid() = reporter_id);

-- ---------------------------------------------------------------------------
-- Vistas: hilos y respuestas con el apodo del autor ya resuelto
-- ---------------------------------------------------------------------------
create or replace view public.threads_with_author
with (security_invoker = true) as
  select t.id, t.title, t.body, t.topic, t.created_at, t.author_id,
         p.apodo as author_apodo,
         (select count(*) from public.posts po
           where po.thread_id = t.id and po.hidden = false) as reply_count
  from public.threads t
  join public.profiles p on p.id = t.author_id
  where t.hidden = false;

create or replace view public.posts_with_author
with (security_invoker = true) as
  select po.id, po.thread_id, po.body, po.created_at, po.author_id,
         p.apodo as author_apodo
  from public.posts po
  join public.profiles p on p.id = po.author_id
  where po.hidden = false;
