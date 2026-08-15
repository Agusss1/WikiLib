// ---------------------------------------------------------------------------
// "¿Qué haría un liberal?" — escenarios de decisión
// ---------------------------------------------------------------------------

/**
 * El objetivo NO es que el usuario acierte la respuesta liberal. Es que
 * aprenda a razonar en términos de incentivos, consecuencias, trade-offs e
 * instituciones. Por eso ninguna opción se marca como "correcta": cada una
 * tiene su análisis, incluidas las que un liberal elegiría.
 */
export type Option = {
  id: string;
  label: string;
  /** Qué pasaría. */
  consequences: string[];
  /** Qué conducta induce. */
  incentives: string;
  /** Qué se resigna a cambio. */
  tradeoff: string;
  /** Quién gana y quién pierde, explícitamente. */
  whoWinsLoses: string;
};

export type Scenario = {
  id: string;
  title: string;
  situation: string;
  /** Contexto adicional que el usuario debería considerar. */
  context: string[];
  options: Option[];
  /** Qué defenderían las distintas corrientes. */
  currents: { current: string; would: string }[];
  /** La lección de método, no la conclusión política. */
  lesson: string;
  relatedArticles: string[];
};

export const SCENARIOS: Scenario[] = [
  {
    id: "precio-de-un-producto",
    title: "El precio de un alimento básico sube 40% en dos meses",
    situation:
      "Sos funcionario. Un alimento de consumo masivo aumentó 40% en dos meses. Hay presión social y política para hacer algo ya.",
    context: [
      "La inflación general del período fue del 25%: el producto subió por encima del promedio.",
      "El insumo principal es importado y su precio internacional aumentó.",
      "Hay tres empresas que concentran la mayor parte de la producción local.",
      "El producto pesa más en la canasta de los hogares de menores ingresos.",
    ],
    options: [
      {
        id: "control",
        label: "Fijar un precio máximo por decreto",
        consequences: [
          "El precio de lista baja de inmediato y el índice de precios del rubro se desacelera.",
          "Al precio tope la cantidad demandada sube y la ofrecida baja: aparece faltante.",
          "Se reduce el tamaño del envase o cae la calidad, formas de bajar el precio real sin tocar el nominal.",
          "Parte del producto se desvía a canales no controlados.",
        ],
        incentives:
          "Al productor le conviene producir menos, vender por fuera del canal controlado o cambiar la presentación. Al comerciante, guardar stock.",
        tradeoff:
          "Se gana visibilidad política inmediata y se pierde oferta. El costo aparece con retraso, cuando ya no se asocia a la medida.",
        whoWinsLoses:
          "Ganan quienes logran comprar al precio controlado, típicamente los que tienen tiempo para buscar. Pierden los que llegan tarde y los que dependen del canal formal.",
      },
      {
        id: "subsidio",
        label: "Subsidiar al productor para que no traslade el aumento",
        consequences: [
          "El precio al consumidor se mantiene sin generar faltante inmediato.",
          "Aparece un costo fiscal que hay que financiar con impuestos, deuda o emisión.",
          "El subsidio tiende a volverse permanente: quitarlo produce el salto de precios que se quería evitar.",
          "Beneficia en términos absolutos más a quien más consume.",
        ],
        incentives:
          "Al productor le conviene mantener el subsidio y negociar su monto. Al consumidor, no ajustar su consumo pese a que el bien se volvió más escaso.",
        tradeoff:
          "Se evita el faltante y se traslada el costo a los contribuyentes, incluidos los que no consumen el producto.",
        whoWinsLoses:
          "Ganan los consumidores del bien y el productor. Pierden los contribuyentes y, si se financia con emisión, quienes tienen pesos.",
      },
      {
        id: "impuestos",
        label: "Eliminar los impuestos que gravan ese producto",
        consequences: [
          "El precio final baja en la proporción del impuesto quitado, si hay competencia suficiente para que se traslade.",
          "Si el mercado está concentrado y la demanda es inelástica, parte de la baja puede quedar en el margen del vendedor.",
          "Se pierde recaudación, que hay que compensar o recortar en otro lado.",
          "No genera faltantes ni distorsiona la señal de escasez.",
        ],
        incentives:
          "No cambia el incentivo a producir en contra: mantiene la señal de que el bien está escaso. Puede generar presión de otros sectores para obtener el mismo tratamiento.",
        tradeoff:
          "Se resigna recaudación a cambio de no distorsionar cantidades. Y se abre un régimen de excepción que erosiona la generalidad del sistema tributario.",
        whoWinsLoses:
          "Ganan los consumidores del bien, en proporción a cuánto consuman. Pierde el fisco, y por lo tanto quien dependa del gasto que esa recaudación financiaba.",
      },
      {
        id: "transferencia",
        label: "No tocar el precio y transferir dinero a los hogares de menores ingresos",
        consequences: [
          "El precio sigue reflejando la escasez, de modo que no aparecen faltantes ni cae la oferta.",
          "Los hogares asistidos mantienen su capacidad de compra.",
          "Tiene costo fiscal, pero focalizado: mucho menor que un subsidio generalizado.",
          "Requiere un sistema de identificación de beneficiarios que funcione.",
        ],
        incentives:
          "El productor sigue teniendo incentivo a producir más. El consumidor asistido decide libremente si compra ese bien u otro.",
        tradeoff:
          "Se acepta que el precio suba —costo político alto— a cambio de no romper la señal que hace que el bien exista.",
        whoWinsLoses:
          "Ganan los hogares asistidos y quienes valoran mucho el producto. Pierden los hogares de ingresos medios que no califican para la transferencia y sí enfrentan el precio nuevo.",
      },
      {
        id: "abrir-importacion",
        label: "Reducir barreras a la importación del producto",
        consequences: [
          "Aumenta la oferta disponible y baja la presión sobre el precio, si hay oferta internacional accesible.",
          "Aumenta la competencia sobre las tres empresas locales.",
          "Requiere divisas disponibles: con restricciones cambiarias puede ser inviable.",
          "Afecta a los productores locales, que pueden reducir producción o empleo.",
        ],
        incentives:
          "Las empresas locales tienen incentivo a bajar precios o mejorar. También a hacer lobby para revertir la medida.",
        tradeoff:
          "Se gana oferta y competencia; se resigna protección al productor local y se depende de la disponibilidad de divisas.",
        whoWinsLoses:
          "Ganan los consumidores. Pierden productores y trabajadores del sector local, de manera concentrada y visible.",
      },
    ],
    currents: [
      { current: "Liberalismo clásico", would: "Descartaría el control de precios. Priorizaría abrir la importación y quitar impuestos distorsivos; aceptaría transferencias focalizadas si el impacto social lo justifica." },
      { current: "Libertarismo", would: "No haría nada respecto del precio. Quitaría impuestos y barreras, y rechazaría tanto el subsidio como la transferencia por implicar redistribución forzada." },
      { current: "Ordoliberalismo", would: "Miraría primero la concentración del mercado: revisaría si las tres empresas tienen prácticas anticompetitivas y actuaría sobre las barreras de entrada." },
      { current: "Liberalismo social", would: "Combinaría apertura y quita de impuestos con transferencias focalizadas más generosas, aceptando el costo fiscal." },
    ],
    lesson:
      "Ninguna opción es gratis. La pregunta útil no es «¿esto está bien o mal?» sino «¿qué conducta induce, quién paga y cuándo aparece el costo?». Notá que las opciones cuyo costo aparece más tarde son políticamente más atractivas, y eso mismo es un problema de incentivos —sólo que del funcionario, no del mercado.",
    relatedArticles: ["oferta-y-demanda", "impuestos", "competencia", "gasto-publico"],
  },
  {
    id: "empresa-quiebra",
    title: "Una empresa grande está por quebrar y emplea a 3.000 personas",
    situation:
      "Una fábrica con 3.000 empleados en una ciudad de 40.000 habitantes está por cerrar. Pide asistencia estatal para no hacerlo.",
    context: [
      "La empresa perdió competitividad frente a productos importados.",
      "Es el principal empleador de la ciudad.",
      "Ya recibió asistencia dos veces en los últimos diez años.",
      "El costo de la asistencia solicitada equivale al presupuesto anual de salud de la provincia.",
    ],
    options: [
      {
        id: "salvataje",
        label: "Asistir a la empresa para que no cierre",
        consequences: [
          "Se preservan 3.000 empleos visibles y una ciudad no entra en crisis.",
          "El costo se financia con recursos que salen de otros usos, incluidos usos sociales.",
          "La empresa no resuelve su problema de competitividad: es probable que vuelva a pedir asistencia.",
          "Otras empresas observan que pedir asistencia funciona.",
        ],
        incentives:
          "A la empresa le conviene no invertir en productividad y sí en capacidad de lobby. A otras empresas, imitarla.",
        tradeoff: "Se preserva empleo visible hoy a costa de empleo invisible en otros sectores y de recursos con usos alternativos.",
        whoWinsLoses:
          "Ganan los trabajadores y los dueños de la empresa. Pierden los contribuyentes y quienes habrían recibido esos recursos: un costo real pero disperso y sin cara.",
      },
      {
        id: "cierre",
        label: "Dejar que cierre",
        consequences: [
          "3.000 personas pierden el trabajo de manera concentrada y visible.",
          "Los recursos y las personas quedan disponibles para otros usos, pero la reasignación puede tardar años.",
          "La literatura sobre shocks importadores muestra que el ajuste local es más lento y doloroso de lo que los modelos suponen.",
          "No se genera precedente de asistencia.",
        ],
        incentives:
          "Todas las empresas aprenden que la asistencia no está disponible, y ajustan su comportamiento en consecuencia.",
        tradeoff: "Se resigna el bienestar concreto de una comunidad a cambio de no distorsionar la asignación de recursos.",
        whoWinsLoses:
          "Pierden los trabajadores y la ciudad, de manera severa y concentrada. Ganan los contribuyentes y los sectores que reciben los recursos liberados, de manera difusa.",
      },
      {
        id: "asistir-personas",
        label: "No asistir a la empresa, sí a las personas",
        consequences: [
          "La empresa cierra, pero los trabajadores reciben una transferencia transitoria y acceso a capacitación.",
          "El costo fiscal es sensiblemente menor al del salvataje.",
          "No se genera precedente de rescate empresario.",
          "La eficacia depende críticamente de que exista demanda de trabajo en la zona.",
        ],
        incentives:
          "La empresa no aprende que puede ser rescatada. Los trabajadores tienen incentivo a buscar reinserción, aunque una transferencia mal diseñada puede desalentarla.",
        tradeoff:
          "Se asume un costo fiscal para amortiguar el ajuste, sin sostener una actividad que no se sostiene sola.",
        whoWinsLoses:
          "Ganan los trabajadores en el corto plazo; pierden los dueños. El costo recae sobre los contribuyentes, pero es acotado y temporal.",
      },
      {
        id: "revisar-causas",
        label: "Investigar por qué perdió competitividad antes de decidir",
        consequences: [
          "Puede revelar que el problema es regulatorio, impositivo o logístico, y no de la empresa.",
          "Si es así, la solución beneficia a todo el sector y no sólo a esta empresa.",
          "Toma tiempo, y la empresa puede cerrar mientras tanto.",
          "Si el problema es que la empresa es simplemente menos eficiente, no cambia nada.",
        ],
        incentives:
          "Desplaza el debate de «rescatar o no» a «por qué no puede competir», que es la pregunta más útil.",
        tradeoff: "Se gana información y se pierde tiempo, que en una situación de quiebra puede ser decisivo.",
        whoWinsLoses:
          "Si el diagnóstico revela un problema general, gana todo el sector. Si no, se perdieron semanas.",
      },
    ],
    currents: [
      { current: "Liberalismo clásico", would: "Descartaría el salvataje. Investigaría causas regulatorias y aceptaría asistencia transitoria a las personas." },
      { current: "Libertarismo", would: "Dejaría que cierre, sin asistencia a la empresa ni a los trabajadores. La caridad privada y el ahorro previo serían los mecanismos." },
      { current: "Liberalismo social", would: "Asistencia a las personas más generosa y prolongada, con programas activos de reinserción." },
    ],
    lesson:
      "Este caso enseña la asimetría entre lo visible y lo invisible. Los 3.000 empleos tienen nombre y aparecen en televisión; los empleos que no se crean porque esos recursos se usaron acá no existen todavía y no reclaman. Bastiat construyó todo su método sobre esta asimetría, y explica por qué los salvatajes son políticamente atractivos con independencia de su mérito económico.",
    relatedArticles: ["division-del-trabajo", "responsabilidad-individual", "gasto-publico", "competencia"],
  },
  {
    id: "faltan-dolares",
    title: "El Banco Central está perdiendo reservas rápidamente",
    situation:
      "Las reservas caen a un ritmo que las agotaría en pocos meses. La demanda de dólares supera ampliamente la oferta al tipo de cambio oficial.",
    context: [
      "Hay déficit fiscal financiado en parte con emisión.",
      "El tipo de cambio oficial está por debajo del que surge de los mercados paralelos.",
      "El país no tiene acceso al crédito internacional a tasas razonables.",
      "Una devaluación fuerte se trasladaría rápido a precios de alimentos.",
    ],
    options: [
      {
        id: "cepo",
        label: "Restringir el acceso a la compra de dólares",
        consequences: [
          "Se frena la pérdida de reservas en lo inmediato.",
          "Aparece o se amplía la brecha entre el oficial y los paralelos.",
          "El exportador demora la liquidación y el importador la adelanta: entran menos dólares y salen más.",
          "Se necesitan controles adicionales para cerrar cada vía de arbitraje.",
          "Se convierte una decisión de mercado en una decisión administrativa, con espacio para la discrecionalidad.",
        ],
        incentives:
          "A todos los actores les conviene arbitrar entre mercados: subfacturar exportaciones, sobrefacturar importaciones, adelantar o demorar pagos.",
        tradeoff:
          "Se gana tiempo a costa de acumular distorsiones. Cuanto más se prolonga, más costoso es salir.",
        whoWinsLoses:
          "Ganan quienes acceden al dólar oficial. Pierden los exportadores, quienes necesitan insumos importados y quienes deben ir al paralelo.",
      },
      {
        id: "devaluar",
        label: "Devaluar de una vez",
        consequences: [
          "El tipo de cambio se acerca al que equilibra oferta y demanda; se frena la pérdida de reservas.",
          "Salto de precios, especialmente en alimentos, con caída del salario real.",
          "Si no se corrige el déficit, el atraso se reconstruye en meses y hay que devaluar otra vez.",
          "Mejora la competitividad exportadora, aunque el efecto se diluye con el traslado a precios.",
        ],
        incentives:
          "El exportador liquida; el importador deja de adelantar. Desaparece el incentivo a arbitrar entre mercados.",
        tradeoff: "Se resigna el salario real en el corto plazo a cambio de eliminar la distorsión cambiaria.",
        whoWinsLoses:
          "Ganan exportadores y quienes tienen dólares. Pierden asalariados e importadores, de forma inmediata y visible.",
      },
      {
        id: "subir-tasa",
        label: "Subir fuertemente la tasa de interés en pesos",
        consequences: [
          "Hace más atractivo quedarse en pesos y reduce la demanda de dólares.",
          "Encarece el crédito y frena la actividad económica.",
          "Aumenta el costo de los pasivos remunerados del Banco Central, que se paga emitiendo.",
          "Es una medida de contención transitoria: no resuelve la causa.",
        ],
        incentives:
          "Al ahorrista le conviene quedarse en pesos mientras la tasa supere la expectativa de devaluación. Si esa expectativa cambia, el efecto se revierte de golpe.",
        tradeoff: "Se compra tiempo a cambio de actividad económica y de un stock de pasivos que crece.",
        whoWinsLoses:
          "Ganan los ahorristas en pesos. Pierden quienes necesitan crédito y, eventualmente, todos si el stock de pasivos se vuelve inmanejable.",
      },
      {
        id: "corregir-fiscal",
        label: "Anunciar y ejecutar un ajuste fiscal creíble",
        consequences: [
          "Ataca la causa: menos déficit implica menos emisión y menos presión sobre el dólar.",
          "Si el anuncio es creíble, las expectativas se ajustan y puede reducirse la demanda de cobertura.",
          "El efecto no es inmediato: la credibilidad se construye con ejecución, no con anuncios.",
          "Tiene costo político y recesivo en el corto plazo.",
        ],
        incentives:
          "Cambia la expectativa sobre el futuro fiscal, que es lo que sostiene la demanda de dólares como cobertura.",
        tradeoff:
          "Se resigna actividad y capital político en el corto plazo a cambio de resolver la causa en lugar del síntoma.",
        whoWinsLoses:
          "Pierden en el corto plazo quienes dependen del gasto recortado. Ganan, difusamente y con retraso, todos los que tienen ingresos en pesos.",
      },
    ],
    currents: [
      { current: "Liberalismo clásico", would: "Corrección fiscal como eje, con unificación cambiaria en una secuencia que evite un salto descontrolado." },
      { current: "Libertarismo", would: "Eliminación inmediata de restricciones cambiarias y, para muchos, dolarización para eliminar el problema de raíz." },
      { current: "Casi todos", would: "Coinciden en que el cepo prolongado es la peor opción, y discrepan sobre si un control transitorio en medio de una corrida es un mal menor." },
    ],
    lesson:
      "La distinción clave acá es entre causa y síntoma. El cepo y la tasa actúan sobre la manifestación; el ajuste fiscal, sobre la causa. Notá también que las opciones que atacan la causa tienen costo político inmediato y beneficio diferido, mientras que las que atacan el síntoma tienen el patrón inverso. Eso explica bastante de la historia económica argentina.",
    relatedArticles: ["cepo-cambiario", "tipo-de-cambio", "deficit-fiscal", "emision-monetaria", "banco-central"],
  },
  {
    id: "escuela-mal-resultado",
    title: "Las escuelas de una provincia tienen resultados muy bajos",
    situation:
      "Una evaluación estandarizada muestra que la mitad de los alumnos de sexto grado no comprende un texto simple. Sos ministro provincial de educación.",
    context: [
      "El presupuesto educativo provincial creció en términos reales en la última década.",
      "Los resultados no mejoraron.",
      "Hay diferencias grandes entre escuelas dentro de la misma provincia.",
      "La educación es competencia provincial: no dependés del gobierno nacional para actuar.",
    ],
    options: [
      {
        id: "mas-presupuesto",
        label: "Aumentar el presupuesto educativo",
        consequences: [
          "Permite mejorar salarios docentes e infraestructura.",
          "La evidencia internacional muestra que más gasto sin cambios de gestión tiene efectos pequeños sobre aprendizajes.",
          "Requiere recursos que salen de otros usos o de más impuestos.",
        ],
        incentives: "No cambia el incentivo de ningún actor a mejorar resultados: el financiamiento no depende de ellos.",
        tradeoff: "Se gana capacidad instalada; no se garantiza que se traduzca en aprendizaje.",
        whoWinsLoses: "Ganan docentes y proveedores. El efecto sobre los alumnos depende enteramente de cómo se use.",
      },
      {
        id: "evaluar-publicar",
        label: "Evaluar todas las escuelas y publicar los resultados",
        consequences: [
          "Genera información que hoy no existe para las familias ni para la gestión.",
          "Permite identificar escuelas que funcionan bien en contextos difíciles y aprender de ellas.",
          "Riesgo: comparar sin controlar por nivel socioeconómico produce rankings engañosos y estigmatiza escuelas.",
          "Puede inducir a enseñar para la prueba en lugar de enseñar.",
        ],
        incentives:
          "Directores y docentes enfrentan por primera vez una consecuencia reputacional. Eso puede mejorar la gestión o distorsionar la enseñanza, según cómo se diseñe.",
        tradeoff: "Se gana información y transparencia a costa de riesgos de mala interpretación.",
        whoWinsLoses: "Ganan las familias informadas. Pierden las escuelas con alumnado desfavorecido si la comparación no se ajusta.",
      },
      {
        id: "autonomia",
        label: "Dar autonomía a los directores para gestionar su escuela",
        consequences: [
          "Permite adaptar la enseñanza a las condiciones locales.",
          "Requiere directores capacitados y algún mecanismo de rendición de cuentas.",
          "Sin evaluación, la autonomía no produce mejora: sólo variabilidad.",
          "Choca con estructuras administrativas y con convenios laborales existentes.",
        ],
        incentives: "El director pasa a poder actuar sobre los problemas que ve, en lugar de derivarlos hacia arriba.",
        tradeoff: "Se gana capacidad de adaptación y se resigna uniformidad y control central.",
        whoWinsLoses: "Ganan las escuelas con buena conducción. Pueden empeorar las que no la tienen.",
      },
      {
        id: "eleccion",
        label: "Permitir que las familias elijan escuela con financiamiento por alumno",
        consequences: [
          "Introduce competencia entre escuelas por atraer alumnos.",
          "Da poder de elección a familias que hoy no lo tienen.",
          "En zonas con una sola escuela no hay elección posible: la competencia supone alternativas.",
          "Riesgo de segregación si las escuelas pueden seleccionar alumnos.",
          "La evidencia internacional es mixta y depende mucho del diseño.",
        ],
        incentives: "Las escuelas enfrentan la consecuencia de perder alumnos. Las familias tienen incentivo a informarse.",
        tradeoff: "Se gana presión competitiva a costa de riesgo de segregación y de dependencia de la capacidad de las familias para evaluar calidad.",
        whoWinsLoses:
          "Ganan las familias con capacidad de informarse y con alternativas cerca. Pueden perder las que no tienen ninguna de las dos cosas.",
      },
    ],
    currents: [
      { current: "Liberalismo clásico", would: "Evaluación pública con ajuste socioeconómico, autonomía de gestión con rendición de cuentas, y elección donde haya alternativas reales." },
      { current: "Libertarismo", would: "Financiamiento directo a las familias y salida del Estado de la provisión." },
      { current: "Liberalismo social", would: "Más presupuesto focalizado en las escuelas más desfavorecidas, con evaluación y estándares comunes." },
    ],
    lesson:
      "Notá que ninguna opción funciona sola. La evaluación sin autonomía genera información que nadie puede usar; la autonomía sin evaluación genera variabilidad sin aprendizaje; la elección sin alternativas cercanas no es elección. Los diseños institucionales se sostienen o caen como paquete, y ese es un punto que las discusiones de campaña casi siempre pierden.",
    relatedArticles: ["educacion-y-liberalismo", "instituciones", "competencia", "gasto-publico"],
  },
];

export const SCENARIOS_BY_ID: Record<string, Scenario> = Object.fromEntries(
  SCENARIOS.map((s) => [s.id, s]),
);

// ---------------------------------------------------------------------------
// Mapa conceptual
// ---------------------------------------------------------------------------

export type MapNode = {
  id: string;
  label: string;
  /** Artículo al que enlaza. */
  article?: string;
  /** Términos del diccionario si no hay artículo. */
  term?: string;
};

export type ConceptMap = {
  id: string;
  title: string;
  description: string;
  root: string;
  nodes: MapNode[];
  /** Aristas dirigidas: [desde, hacia, etiqueta]. */
  edges: [string, string, string][];
};

export const CONCEPT_MAPS: ConceptMap[] = [
  {
    id: "libertad",
    title: "Cómo se encadena la libertad con la prosperidad",
    description:
      "La secuencia que el liberalismo sostiene: de la libertad individual a la prosperidad, pasando por propiedad, contrato, mercado y precios. Cada eslabón es discutible y cada uno tiene su artículo.",
    root: "libertad",
    nodes: [
      { id: "libertad", label: "Libertad", article: "libertad" },
      { id: "propiedad", label: "Propiedad", article: "propiedad-privada" },
      { id: "contrato", label: "Contrato", article: "estado-de-derecho" },
      { id: "mercado", label: "Mercado", article: "mercado" },
      { id: "competencia", label: "Competencia", article: "competencia" },
      { id: "precios", label: "Precios", article: "oferta-y-demanda" },
      { id: "incentivos", label: "Incentivos", article: "escasez-e-incentivos" },
      { id: "division", label: "División del trabajo", article: "division-del-trabajo" },
      { id: "productividad", label: "Productividad", article: "capitalismo" },
      { id: "prosperidad", label: "Prosperidad", article: "por-que-hay-pobres-si-el-mercado-funciona" },
      { id: "instituciones", label: "Instituciones", article: "instituciones" },
    ],
    edges: [
      ["libertad", "propiedad", "requiere disponer de lo propio"],
      ["libertad", "contrato", "permite acordar"],
      ["propiedad", "mercado", "hace posible intercambiar"],
      ["contrato", "mercado", "hace creíble el intercambio"],
      ["mercado", "competencia", "si hay entrada libre"],
      ["mercado", "precios", "los genera"],
      ["competencia", "precios", "los disciplina"],
      ["precios", "incentivos", "los transmite"],
      ["incentivos", "division", "orientan la especialización"],
      ["division", "productividad", "la aumenta"],
      ["productividad", "prosperidad", "la sostiene"],
      ["instituciones", "propiedad", "la hacen segura"],
      ["instituciones", "contrato", "lo hacen exigible"],
    ],
  },
  {
    id: "estado",
    title: "Cómo se encadena el gasto con la inflación",
    description:
      "La cadena que explica buena parte de la macroeconomía argentina: del gasto público a la inflación y la crisis cambiaria. Es el recorrido inverso al del mapa anterior.",
    root: "estado",
    nodes: [
      { id: "estado", label: "Estado", article: "estado" },
      { id: "gasto", label: "Gasto público", article: "gasto-publico" },
      { id: "impuestos", label: "Impuestos", article: "impuestos" },
      { id: "deficit", label: "Déficit fiscal", article: "deficit-fiscal" },
      { id: "deuda", label: "Deuda pública", article: "deuda-publica" },
      { id: "emision", label: "Emisión monetaria", article: "emision-monetaria" },
      { id: "inflacion", label: "Inflación", article: "inflacion" },
      { id: "tipocambio", label: "Tipo de cambio", article: "tipo-de-cambio" },
      { id: "cepo", label: "Cepo cambiario", article: "cepo-cambiario" },
      { id: "crisis", label: "Crisis", article: "ciclos-inflacionarios-argentinos" },
      { id: "bcra", label: "Banco Central", article: "banco-central" },
    ],
    edges: [
      ["estado", "gasto", "eroga"],
      ["gasto", "impuestos", "hay que financiarlo"],
      ["gasto", "deficit", "si supera a la recaudación"],
      ["deficit", "deuda", "una vía de financiamiento"],
      ["deficit", "emision", "otra vía, si no hay crédito"],
      ["bcra", "emision", "la ejecuta"],
      ["emision", "inflacion", "si crece más que la producción"],
      ["inflacion", "tipocambio", "presiona sobre el peso"],
      ["tipocambio", "cepo", "se restringe el acceso"],
      ["cepo", "crisis", "acumula distorsiones"],
      ["deuda", "crisis", "si deja de refinanciarse"],
    ],
  },
];

export const CONCEPT_MAPS_BY_ID: Record<string, ConceptMap> = Object.fromEntries(
  CONCEPT_MAPS.map((m) => [m.id, m]),
);
