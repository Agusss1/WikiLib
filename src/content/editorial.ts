/**
 * Principios editoriales y estados de contribución.
 * Se muestran en el panel de administración y en la página pública de
 * estándares, porque la credibilidad sólo funciona si es verificable.
 */

export type Principle = {
  id: string;
  title: string;
  rule: string;
  /** Cómo se verifica que se está cumpliendo. Sin esto, un principio es una consigna. */
  howWeCheck: string;
  /** Si el chequeo está automatizado en `npm run content:check`. */
  automated: boolean;
};

export const PRINCIPLES: Principle[] = [
  {
    id: "hechos-opiniones",
    title: "Distinguir hechos de opiniones",
    rule: "Todo bloque que exprese una interpretación se marca como tal. El lector nunca debería tener que adivinar si está leyendo un dato o una posición.",
    howWeCheck:
      "Las secciones «Argumento liberal» y «Posiciones» se renderizan con un rótulo visible de interpretación. Los llamados de tipo «opinión» llevan marca propia.",
    automated: false,
  },
  {
    id: "citar-fuentes",
    title: "Citar fuentes",
    rule: "Toda afirmación factual relevante debe poder rastrearse a una fuente. Prioridad: fuente primaria, documento oficial, paper académico, libro, universidad, organismo internacional, medio periodístico.",
    howWeCheck:
      "Cada artículo declara sus fuentes por id. El validador falla si un id no existe en el registro. La página de fuentes lista todo el corpus ordenado por prioridad.",
    automated: true,
  },
  {
    id: "no-inventar-citas",
    title: "No inventar citas",
    rule: "Una cita textual sin fuente identificada no se publica. Nunca.",
    howWeCheck:
      "El tipo `quote` exige `sourceId` obligatorio. Es imposible escribir una cita sin fuente sin que el proyecto deje de compilar.",
    automated: true,
  },
  {
    id: "no-inventar-datos",
    title: "No inventar estadísticas",
    rule: "Ningún número sin valor, fecha y fuente. Los indicadores de coyuntura se enlazan a la serie oficial en lugar de copiarse, porque la fuente siempre está más actualizada que este sitio.",
    howWeCheck:
      "El tipo `figure` exige valor, fecha y fuente. Los datos pendientes de verificación se marcan de manera visible.",
    automated: true,
  },
  {
    id: "steelman",
    title: "Presentar el argumento contrario en su mejor versión",
    rule: "Las objeciones se escriben en la formulación más fuerte disponible, no en la más fácil de refutar. Si la objeción es más débil que la respuesta, el artículo está mal escrito.",
    howWeCheck:
      "Revisión editorial. El validador exige que todo artículo de nivel intermedio o avanzado tenga al menos una crítica.",
    automated: true,
  },
  {
    id: "debates-internos",
    title: "Reconocer los desacuerdos internos del liberalismo",
    rule: "El liberalismo no es homogéneo. Cuando las corrientes discrepan, se muestran las posiciones en lugar de presentar una como «la» liberal.",
    howWeCheck: "Campo `positions` en los artículos donde corresponde, y sección de corrientes en cada debate.",
    automated: false,
  },
  {
    id: "incertidumbre",
    title: "Indicar cuándo hay incertidumbre",
    rule: "Cuando la evidencia es débil, mixta o disputada, se dice. Presentar como establecido algo que no lo está daña más la credibilidad que admitir que no se sabe.",
    howWeCheck: "Campo `uncertainty` en los artículos, y marca `unresolved` en las críticas que el equipo considera no saldadas.",
    automated: false,
  },
  {
    id: "clasico-vs-libertario",
    title: "Distinguir liberalismo clásico de libertarismo",
    rule: "Son familias distintas con desacuerdos reales. Confundirlas produce discusiones imposibles.",
    howWeCheck: "Artículo de corrientes, campo `positions`, y sección de corrientes en cada escenario interactivo.",
    automated: false,
  },
  {
    id: "hechos-vs-interpretacion-historica",
    title: "Distinguir hechos históricos de interpretaciones",
    rule: "Las fechas y los sucesos son verificables; las explicaciones causales son interpretaciones. En historia argentina esta distinción es especialmente importante.",
    howWeCheck: "Llamados de tipo «ojo» y «debate» en los artículos históricos, más el campo `uncertainty`.",
    automated: false,
  },
  {
    id: "fecha-actualizacion",
    title: "Indicar fecha de actualización",
    rule: "Todo artículo muestra cuándo fue revisado por última vez. La información económica envejece rápido.",
    howWeCheck: "Campo `updated` obligatorio, validado en formato ISO. Se muestra al pie de cada artículo.",
    automated: true,
  },
  {
    id: "no-propaganda",
    title: "No convertir un artículo en propaganda",
    rule: "El objetivo es que el lector pueda pensar por su cuenta, no que repita consignas. Si un artículo no incomoda en ninguna parte a quien ya está de acuerdo, probablemente esté mal escrito.",
    howWeCheck: "Revisión editorial. Es el principio menos automatizable y el más importante.",
    automated: false,
  },
  {
    id: "separar-wiki-comunidad",
    title: "Separar contenido de la Wiki del contenido de la comunidad",
    rule: "La Wiki tiene estándares editoriales. La comunidad puede debatir libremente. Nunca se mezclan sin señalización clara.",
    howWeCheck: "Rutas y componentes distintos, con etiqueta visible en todo contenido generado por usuarios.",
    automated: false,
  },
];

// ---------------------------------------------------------------------------
// Sistema de contribuciones
// ---------------------------------------------------------------------------

export const CONTRIBUTION_STATES = [
  {
    id: "borrador",
    label: "Borrador",
    description: "En redacción. Sólo lo ve quien lo escribe.",
    color: "neutral",
  },
  {
    id: "pendiente-de-revision",
    label: "Pendiente de revisión",
    description: "Enviado. Espera que un editor lo lea.",
    color: "info",
  },
  {
    id: "necesita-fuentes",
    label: "Necesita fuentes",
    description: "El contenido es prometedor pero hay afirmaciones sin respaldo.",
    color: "warn",
  },
  {
    id: "aprobado",
    label: "Aprobado",
    description: "Cumple los estándares editoriales y está publicado.",
    color: "ok",
  },
  {
    id: "rechazado",
    label: "Rechazado",
    description: "Con motivo explícito. Se puede reenviar corregido.",
    color: "danger",
  },
] as const;

export const CONTRIBUTION_TYPES = [
  { id: "articulo", label: "Artículo nuevo", note: "Propone un tema que la Wiki no cubre." },
  { id: "correccion", label: "Corrección", note: "Error de hecho, de fecha o de atribución." },
  { id: "fuente", label: "Fuente", note: "Aporta respaldo para una afirmación existente." },
  { id: "dato", label: "Dato", note: "Actualiza o corrige una cifra, con su fuente." },
  { id: "mejora", label: "Mejora de redacción", note: "Claridad, ejemplos, estructura." },
  { id: "objecion", label: "Objeción faltante", note: "Una crítica fuerte que el artículo no contempla. Especialmente bienvenida." },
] as const;
