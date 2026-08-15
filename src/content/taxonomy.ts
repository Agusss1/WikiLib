import type { Category, Level } from "./schema";

export type CategoryMeta = {
  id: Category;
  title: string;
  short: string;
  description: string;
  /** Emoji/marca visual usada en tarjetas y navegación. */
  glyph: string;
  order: number;
};

export const CATEGORY_META: Record<Category, CategoryMeta> = {
  "empeza-aca": {
    id: "empeza-aca",
    title: "Empezá acá",
    short: "Empezá acá",
    description:
      "Si nunca leíste nada de liberalismo, este es el lugar. Cero conocimientos previos.",
    glyph: "◆",
    order: 1,
  },
  conceptos: {
    id: "conceptos",
    title: "Conceptos fundamentales",
    short: "Conceptos",
    description:
      "Las ideas que se usan en todo el resto del sitio: libertad, propiedad, Estado, derecho, instituciones.",
    glyph: "◈",
    order: 2,
  },
  economia: {
    id: "economia",
    title: "Economía",
    short: "Economía",
    description:
      "Desde escasez e incentivos hasta inflación, déficit y tipo de cambio. Explicado sin fórmulas innecesarias.",
    glyph: "▲",
    order: 3,
  },
  argentina: {
    id: "argentina",
    title: "Argentina",
    short: "Argentina",
    description:
      "Historia de las ideas liberales en el país y de la economía argentina, separando hechos de interpretaciones.",
    glyph: "★",
    order: 4,
  },
  alberdi: {
    id: "alberdi",
    title: "Alberdi",
    short: "Alberdi",
    description:
      "El autor que más influyó sobre el diseño institucional argentino, leído en serio.",
    glyph: "✦",
    order: 5,
  },
  corrientes: {
    id: "corrientes",
    title: "Corrientes",
    short: "Corrientes",
    description:
      "El liberalismo no es una sola cosa. Acá están sus familias y en qué se pelean entre sí.",
    glyph: "❖",
    order: 6,
  },
  "vida-real": {
    id: "vida-real",
    title: "Liberalismo en la vida real",
    short: "Vida real",
    description:
      "Cómo se traducen estas ideas a decisiones concretas: trabajar, alquilar, estudiar, emprender, jubilarse.",
    glyph: "●",
    order: 7,
  },
  debates: {
    id: "debates",
    title: "Debates",
    short: "Debates",
    description:
      "Afirmaciones difíciles, con el mejor argumento de cada lado. No es un argumentario para ganar peleas.",
    glyph: "⇄",
    order: 8,
  },
  constitucion: {
    id: "constitucion",
    title: "Constitución",
    short: "Constitución",
    description:
      "Qué dice realmente la Constitución argentina sobre libertad, propiedad, comercio y límites del poder.",
    glyph: "§",
    order: 9,
  },
  cultura: {
    id: "cultura",
    title: "Cultura liberal",
    short: "Cultura",
    description:
      "Más allá de la política: autonomía, responsabilidad, pluralismo, tolerancia al desacuerdo.",
    glyph: "◇",
    order: 10,
  },
};

export const CATEGORY_LIST: CategoryMeta[] = Object.values(CATEGORY_META).sort(
  (a, b) => a.order - b.order,
);

export const LEVEL_META: Record<
  Level,
  { label: string; description: string; order: number }
> = {
  inicial: {
    label: "Inicial",
    description: "No hace falta saber nada previo.",
    order: 1,
  },
  intermedio: {
    label: "Intermedio",
    description: "Conviene haber leído los conceptos básicos.",
    order: 2,
  },
  avanzado: {
    label: "Avanzado",
    description: "Supone familiaridad con los debates del tema.",
    order: 3,
  },
};

/**
 * Sinónimos y formas coloquiales para el buscador.
 * Cubre el caso del proyecto: "porque sube el dolar" debe encontrar
 * tipo de cambio, inflación, emisión, reservas y cepo.
 */
export const SEARCH_SYNONYMS: Record<string, string[]> = {
  dolar: ["tipo de cambio", "divisa", "cambiario", "devaluacion", "cepo", "reservas", "blue"],
  blue: ["tipo de cambio", "brecha", "cepo", "dolar"],
  subir: ["aumento", "suba", "devaluacion"],
  plata: ["dinero", "moneda", "pesos"],
  guita: ["dinero", "moneda"],
  imprimir: ["emision", "monetaria", "base monetaria"],
  emitir: ["emision", "monetaria", "base monetaria"],
  maquinita: ["emision", "monetaria", "inflacion"],
  precios: ["inflacion", "ipc", "control de precios"],
  carestia: ["inflacion"],
  sueldo: ["salario", "trabajo", "mercado laboral"],
  laburo: ["trabajo", "empleo", "mercado laboral"],
  jubilacion: ["previsional", "reparto", "capitalizacion", "anses"],
  impuesto: ["tributo", "presion tributaria", "recaudacion", "iva", "ganancias"],
  gasto: ["gasto publico", "deficit", "presupuesto"],
  deuda: ["default", "bonos", "riesgo pais"],
  banco: ["bcra", "banco central", "politica monetaria"],
  bcra: ["banco central", "emision", "reservas"],
  alberdi: ["bases", "constitucion", "sistema economico y rentistico", "liberalismo argentino"],
  constitucion: ["1853", "alberdi", "derechos", "articulo 14", "articulo 17"],
  libertario: ["libertarismo", "anarcocapitalismo", "minarquismo", "rothbard"],
  anarcocapitalismo: ["rothbard", "libertarismo", "estado minimo"],
  ancap: ["anarcocapitalismo", "rothbard"],
  peronismo: ["populismo", "historia argentina", "peron"],
  kirchnerismo: ["populismo", "historia argentina", "cepo", "indec"],
  milei: ["libertarismo", "historia argentina", "liberalismo argentino"],
  pobreza: ["pobreza", "desigualdad", "crecimiento", "indec"],
  desigualdad: ["pobreza", "distribucion", "gini"],
  salud: ["salud", "vida real", "seguro"],
  educacion: ["educacion", "vouchers", "vida real"],
  rutas: ["bienes publicos", "infraestructura", "obra publica"],
  monopolio: ["competencia", "mercado", "regulacion"],
  cepo: ["control de cambios", "tipo de cambio", "reservas", "brecha"],
  retenciones: ["derechos de exportacion", "comercio exterior", "campo"],
  campo: ["retenciones", "agroexportador", "comercio exterior"],
};
