/**
 * Argentina en datos.
 *
 * REGLA DEL PROYECTO: no se inventan estadísticas.
 *
 * Por eso este módulo distingue dos cosas:
 *
 *  - `Indicator`: la ficha de un indicador — qué mide, quién lo publica, con
 *    qué metodología, dónde consultarlo y qué advertencias tiene. Esto es
 *    información estable y verificable, y es lo que este sitio puede sostener.
 *
 *  - `DataPoint`: un valor concreto. Sólo se cargan valores históricos
 *    ampliamente documentados, y cada uno lleva fecha, fuente y una nota de
 *    verificación. Los indicadores de coyuntura NO se cargan con números:
 *    se enlaza la serie oficial, que es siempre más actual que este sitio.
 *
 * Si en el futuro se conectan las APIs del INDEC y del BCRA, los DataPoint
 * pasan a poblarse automáticamente y esta separación sigue funcionando.
 */

export type Frequency = "diaria" | "semanal" | "mensual" | "trimestral" | "semestral" | "anual";

export type Indicator = {
  id: string;
  name: string;
  question: string;
  /** Qué mide exactamente. Precisión antes que brevedad. */
  measures: string;
  frequency: Frequency;
  /** Id de la fuente en el registro de fuentes. */
  sourceId: string;
  /** Advertencias metodológicas. Se muestran siempre junto al indicador. */
  caveats: string[];
  /** Errores frecuentes al citar este indicador. */
  commonMistakes?: string[];
  relatedArticles: string[];
  category: "precios" | "monetario" | "fiscal" | "actividad" | "social" | "externo";
};

export const INDICATORS: Indicator[] = [
  {
    id: "ipc",
    name: "Índice de Precios al Consumidor (IPC)",
    question: "¿Cuánto subieron los precios?",
    measures:
      "Variación del costo de una canasta de bienes y servicios representativa del consumo de los hogares, ponderada según la Encuesta Nacional de Gastos de los Hogares.",
    frequency: "mensual",
    sourceId: "indec-ipc",
    caveats: [
      "La serie tiene cortes metodológicos: el IPC actual con cobertura nacional comenzó a publicarse en diciembre de 2016.",
      "El período 2007–2015 está cuestionado. El FMI aplicó una declaración de censura a la Argentina en 2013 por la calidad de los datos de IPC y PIB.",
      "Para ese tramo, muchos análisis usan índices provinciales (San Luis, CABA) o privados. Cualquiera sea la elección, debe explicitarse.",
      "La canasta se actualiza periódicamente: comparar variaciones de largo plazo requiere empalmar series con criterio.",
    ],
    commonMistakes: [
      "Comparar la inflación de un mes con la de otro sin considerar estacionalidad.",
      "Usar la variación acumulada del año en curso como si fuera anual.",
      "Presentar el IPC de un rubro (por ejemplo alimentos) como «la inflación».",
    ],
    relatedArticles: ["inflacion", "ciclos-inflacionarios-argentinos"],
    category: "precios",
  },
  {
    id: "base-monetaria",
    name: "Base monetaria",
    question: "¿Cuánto dinero hay?",
    measures:
      "Circulación monetaria (billetes y monedas en poder del público y en entidades) más los depósitos de las entidades financieras en cuenta corriente en el BCRA.",
    frequency: "diaria",
    sourceId: "bcra",
    caveats: [
      "La base monetaria no es toda la oferta de dinero: los agregados M1, M2 y M3 incluyen depósitos y son más amplios.",
      "Los pasivos remunerados del BCRA no forman parte de la base monetaria, pero constituyen una expansión potencial: es lo que suele llamarse «deuda cuasifiscal».",
      "Comparar la base monetaria entre países sin ajustar por tamaño de la economía y por grado de monetización no dice nada.",
    ],
    relatedArticles: ["emision-monetaria", "inflacion", "banco-central"],
    category: "monetario",
  },
  {
    id: "reservas",
    name: "Reservas internacionales",
    question: "¿Cuántos dólares tiene el Banco Central?",
    measures:
      "Activos externos del BCRA: divisas, oro, derechos especiales de giro y otros activos en moneda extranjera.",
    frequency: "diaria",
    sourceId: "bcra",
    caveats: [
      "La distinción entre reservas **brutas** y **netas** es decisiva: las brutas incluyen encajes de depósitos en dólares y swaps que no son de libre disponibilidad.",
      "No existe una definición única y oficial de «reservas netas»: distintos analistas usan criterios distintos, y por eso los números difieren.",
      "Citar reservas sin aclarar cuál de las dos se está usando es la fuente más frecuente de discusiones sin sentido.",
    ],
    relatedArticles: ["tipo-de-cambio", "cepo-cambiario", "banco-central"],
    category: "monetario",
  },
  {
    id: "tipo-cambio",
    name: "Tipo de cambio",
    question: "¿A cuánto está el dólar?",
    measures:
      "Precio del dólar estadounidense en pesos. El BCRA publica el tipo de cambio de referencia (Comunicación A 3500) y el minorista.",
    frequency: "diaria",
    sourceId: "bcra",
    caveats: [
      "Existen múltiples tipos de cambio simultáneos según el régimen vigente: oficial, MEP, contado con liquidación, informal, y variantes con percepciones impositivas.",
      "No son monedas distintas: son precios distintos para lo mismo, producto de restricciones al acceso al mercado oficial.",
      "El tipo de cambio **real** —ajustado por inflación relativa— es más informativo que el nominal para evaluar competitividad.",
    ],
    relatedArticles: ["tipo-de-cambio", "cepo-cambiario"],
    category: "monetario",
  },
  {
    id: "resultado-fiscal",
    name: "Resultado fiscal del Sector Público Nacional",
    question: "¿El Estado gasta más de lo que recauda?",
    measures:
      "Ingresos menos gastos del Sector Público Nacional no financiero. Se informan el resultado primario (sin intereses) y el financiero (con intereses).",
    frequency: "mensual",
    sourceId: "minecon",
    caveats: [
      "Corresponde al Sector Público **Nacional**. No incluye provincias ni municipios, que en un país federal manejan una porción muy grande del gasto.",
      "Tampoco incluye el resultado cuasifiscal del BCRA.",
      "Comparar el resultado nominal entre meses de un año con inflación alta es engañoso: hay que mirar valores reales o porcentaje del PIB.",
    ],
    commonMistakes: [
      "Comparar el gasto nacional argentino con el gasto total de un país unitario.",
      "Presentar superávit primario como si fuera equilibrio: si los intereses lo superan, la deuda sigue creciendo.",
    ],
    relatedArticles: ["deficit-fiscal", "gasto-publico", "deuda-publica"],
    category: "fiscal",
  },
  {
    id: "gasto-por-finalidad",
    name: "Gasto público por finalidad y función",
    question: "¿En qué gasta el Estado?",
    measures:
      "Ejecución presupuestaria desagregada por finalidad, función, jurisdicción y programa.",
    frequency: "mensual",
    sourceId: "presupuesto-abierto",
    caveats: [
      "Sólo cubre la Administración Pública Nacional.",
      "La clasificación por finalidad agrupa partidas heterogéneas: conviene bajar a nivel de programa antes de sacar conclusiones.",
    ],
    relatedArticles: ["gasto-publico", "deficit-fiscal"],
    category: "fiscal",
  },
  {
    id: "recaudacion",
    name: "Recaudación tributaria",
    question: "¿Cuánto se recauda y de qué impuestos?",
    measures: "Recaudación bruta por tributo del organismo recaudador nacional.",
    frequency: "mensual",
    sourceId: "afip-arca",
    caveats: [
      "Sólo tributos nacionales: no incluye Ingresos Brutos, sellos ni impuestos municipales.",
      "Para presión tributaria consolidada hay que sumar los tres niveles de gobierno y la seguridad social.",
      "Para comparación internacional con metodología homogénea, usar las Estadísticas Tributarias de OCDE/CEPAL/BID/CIAT.",
    ],
    relatedArticles: ["impuestos", "deficit-fiscal"],
    category: "fiscal",
  },
  {
    id: "pobreza",
    name: "Incidencia de la pobreza e indigencia",
    question: "¿Cuánta gente es pobre?",
    measures:
      "Porcentaje de personas y hogares cuyo ingreso está por debajo de la Canasta Básica Total (pobreza) o de la Canasta Básica Alimentaria (indigencia), según la Encuesta Permanente de Hogares.",
    frequency: "semestral",
    sourceId: "indec",
    caveats: [
      "Se mide **por ingresos**, no por condiciones de vida. Un enfoque multidimensional (acceso a servicios, vivienda, educación) da resultados distintos, y ninguno es «el verdadero».",
      "La EPH cubre aglomerados urbanos, no la totalidad del país.",
      "Los resultados son muy sensibles a la evolución de los precios de los alimentos, porque determinan el valor de las canastas.",
      "Comparaciones internacionales requieren líneas homogéneas: las líneas nacionales no son comparables entre países.",
    ],
    relatedArticles: ["por-que-hay-pobres-si-el-mercado-funciona", "inflacion"],
    category: "social",
  },
  {
    id: "empleo",
    name: "Empleo, desempleo e informalidad",
    question: "¿Cuánta gente trabaja y en qué condiciones?",
    measures:
      "Tasas de actividad, empleo, desocupación y subocupación, y proporción de asalariados sin descuento jubilatorio, según la EPH.",
    frequency: "trimestral",
    sourceId: "indec",
    caveats: [
      "La tasa de desocupación mide a quienes buscan activamente trabajo: no incluye a quienes dejaron de buscar.",
      "Una tasa de desocupación baja con informalidad alta describe un mercado laboral muy distinto del que sugiere el número aislado.",
      "La informalidad medida por la EPH capta el empleo asalariado no registrado; el cuentapropismo informal se mide aparte.",
    ],
    relatedArticles: ["por-que-hay-pobres-si-el-mercado-funciona", "capitalismo"],
    category: "social",
  },
  {
    id: "pib",
    name: "Producto Interno Bruto",
    question: "¿Cuánto produce el país?",
    measures:
      "Valor agregado de todos los bienes y servicios finales producidos en el territorio en un período.",
    frequency: "trimestral",
    sourceId: "indec",
    caveats: [
      "El PIB mide producción, no bienestar: no capta distribución, trabajo no remunerado ni deterioro ambiental.",
      "Las series del período 2007–2015 están cuestionadas junto con las de precios.",
      "Comparaciones internacionales requieren ajustar por paridad de poder adquisitivo.",
      "Los cambios de año base modifican la serie: comparar con cuidado a través de revisiones metodológicas.",
    ],
    relatedArticles: ["capitalismo", "instituciones"],
    category: "actividad",
  },
  {
    id: "balanza",
    name: "Intercambio comercial argentino",
    question: "¿Cuánto se exporta e importa?",
    measures: "Valor de exportaciones e importaciones de bienes, por rubro y destino.",
    frequency: "mensual",
    sourceId: "indec",
    caveats: [
      "Es comercio de **bienes**: el comercio de servicios (turismo, software) se informa por separado y en Argentina es relevante.",
      "Un superávit comercial no es en sí mismo un indicador de salud: puede reflejar una recesión que deprime importaciones.",
    ],
    relatedArticles: ["division-del-trabajo", "tipo-de-cambio"],
    category: "externo",
  },
];

export const INDICATORS_BY_ID: Record<string, Indicator> = Object.fromEntries(
  INDICATORS.map((i) => [i.id, i]),
);

/**
 * Valores concretos. Sólo hechos históricos ampliamente documentados.
 * Cada uno debe poder verificarse en la fuente citada.
 */
export type DataPoint = {
  indicatorId?: string;
  label: string;
  value: string;
  asOf: string;
  sourceId: string;
  note: string;
  /** true mientras no se haya verificado contra la fuente primaria. */
  needsVerification?: boolean;
};

export const HISTORICAL_DATA: DataPoint[] = [
  {
    indicatorId: "ipc",
    label: "Variación anual del IPC en 1989 (hiperinflación)",
    value: "Aproximadamente 3.080%",
    asOf: "1989",
    sourceId: "indec-ipc",
    note: "IPC Gran Buenos Aires. El orden de magnitud es sólido y ampliamente citado; verificar el valor exacto en la serie oficial antes de reproducirlo.",
    needsVerification: true,
  },
  {
    label: "Sanción de la Constitución Nacional",
    value: "1º de mayo de 1853",
    asOf: "1853",
    sourceId: "cn-argentina",
    note: "Congreso General Constituyente reunido en Santa Fe. Reformas posteriores: 1860, 1866, 1898, 1957 y 1994.",
  },
  {
    label: "Ley de Convertibilidad",
    value: "Ley 23.928, vigente desde abril de 1991",
    asOf: "1991",
    sourceId: "ley-23928",
    note: "Estableció la paridad fija y la obligación de respaldo de la base monetaria en reservas.",
  },
  {
    label: "Fin de la convertibilidad",
    value: "Ley 25.561 de Emergencia Pública, enero de 2002",
    asOf: "2002",
    sourceId: "ley-25561",
    note: "Derogó la paridad fija y habilitó la pesificación de contratos.",
  },
  {
    label: "Declaración de censura del FMI por la calidad de las estadísticas argentinas",
    value: "1 de febrero de 2013",
    asOf: "2013",
    sourceId: "fmi-censura-2013",
    note: "Relativa a los datos de IPC y PIB. Es el antecedente central para tratar con cautela la serie 2007–2015.",
  },
  {
    label: "Sufragio universal masculino, secreto y obligatorio",
    value: "Ley 8.871 (Ley Sáenz Peña), 1912",
    asOf: "1912",
    sourceId: "ley-saenz-pena",
    note: "Antes de esta ley el sistema electoral argentino era restringido y con fraude sistemático.",
  },
];

export const DATA_CATEGORIES: Record<Indicator["category"], string> = {
  precios: "Precios",
  monetario: "Monetario y cambiario",
  fiscal: "Fiscal",
  actividad: "Actividad",
  social: "Social",
  externo: "Sector externo",
};
