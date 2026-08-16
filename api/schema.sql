-- ============================================================================
-- WikiLib — base de datos de la comunidad (MySQL / MariaDB)
--
-- Ejecutar una vez en hPanel -> Bases de datos -> phpMyAdmin -> pestaña SQL.
-- ============================================================================

CREATE TABLE IF NOT EXISTS usuarios (
  id            INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  email         VARCHAR(190) NOT NULL UNIQUE,
  -- NULL cuando la cuenta entra sólo con Google y nunca fijó contraseña.
  clave_hash    VARCHAR(255) NULL,
  apodo         VARCHAR(24)  NOT NULL UNIQUE,
  verificado    TINYINT(1)   NOT NULL DEFAULT 0,
  google_id     VARCHAR(64)  NULL UNIQUE,
  creado_en     DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Los códigos se guardan hasheados: si alguien lee la base, no puede
-- verificar cuentas ajenas con lo que encuentre ahí.
CREATE TABLE IF NOT EXISTS codigos (
  id          INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  usuario_id  INT UNSIGNED NOT NULL,
  codigo_hash VARCHAR(255) NOT NULL,
  intentos    TINYINT UNSIGNED NOT NULL DEFAULT 0,
  vence_en    DATETIME NOT NULL,
  creado_en   DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_codigos_usuario FOREIGN KEY (usuario_id)
    REFERENCES usuarios(id) ON DELETE CASCADE,
  INDEX idx_codigos_usuario (usuario_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS hilos (
  id          INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  usuario_id  INT UNSIGNED NOT NULL,
  titulo      VARCHAR(160) NOT NULL,
  cuerpo      TEXT NOT NULL,
  tema        VARCHAR(32) NOT NULL DEFAULT 'general',
  oculto      TINYINT(1) NOT NULL DEFAULT 0,
  creado_en   DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_hilos_usuario FOREIGN KEY (usuario_id)
    REFERENCES usuarios(id) ON DELETE CASCADE,
  INDEX idx_hilos_recientes (oculto, creado_en),
  INDEX idx_hilos_tema (tema, creado_en)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS respuestas (
  id          INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  hilo_id     INT UNSIGNED NOT NULL,
  usuario_id  INT UNSIGNED NOT NULL,
  cuerpo      TEXT NOT NULL,
  oculto      TINYINT(1) NOT NULL DEFAULT 0,
  creado_en   DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_resp_hilo FOREIGN KEY (hilo_id)
    REFERENCES hilos(id) ON DELETE CASCADE,
  CONSTRAINT fk_resp_usuario FOREIGN KEY (usuario_id)
    REFERENCES usuarios(id) ON DELETE CASCADE,
  INDEX idx_resp_hilo (hilo_id, creado_en)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS reportes (
  id           INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  usuario_id   INT UNSIGNED NOT NULL,
  tipo         ENUM('hilo','respuesta') NOT NULL,
  objetivo_id  INT UNSIGNED NOT NULL,
  motivo       VARCHAR(500) NOT NULL,
  estado       ENUM('pendiente','revisado','descartado') NOT NULL DEFAULT 'pendiente',
  creado_en    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_rep_usuario FOREIGN KEY (usuario_id)
    REFERENCES usuarios(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Control de fuerza bruta y de abuso del envío de correos.
CREATE TABLE IF NOT EXISTS intentos (
  id         INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  accion     VARCHAR(32) NOT NULL,
  ip         VARCHAR(45) NOT NULL,
  creado_en  DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_intentos (accion, ip, creado_en)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
