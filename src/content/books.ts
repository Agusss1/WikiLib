import type { Level } from "./schema";

export type BookCategory =
  | "primeros"
  | "economia"
  | "filosofia"
  | "politica"
  | "argentina"
  | "libertarismo"
  | "clasico"
  | "avanzadas"
  | "criticas";

export const BOOK_CATEGORY_LABEL: Record<BookCategory, string> = {
  primeros: "Primeros libros",
  economia: "Economía",
  filosofia: "Filosofía",
  politica: "Política",
  argentina: "Argentina",
  libertarismo: "Libertarismo",
  clasico: "Liberalismo clásico",
  avanzadas: "Lecturas avanzadas",
  criticas: "Críticas al liberalismo",
};

export type Book = {
  id: string;
  title: string;
  author: string;
  year: string;
  /** Páginas aproximadas. Varía mucho entre ediciones; es orientativo. */
  pages: number;
  difficulty: Level;
  categories: BookCategory[];
  summary: string;
  keyIdeas: string[];
  concepts: string[];
  forWhom: string;
  /** Dónde conseguirlo legalmente. Sólo dominio público o ediciones oficiales. */
  availability?: string;
  sourceId?: string;
  relatedArticles: string[];
};

export const BOOKS: Book[] = [
  {
    id: "la-ley",
    title: "La Ley",
    author: "Frédéric Bastiat",
    year: "1850",
    pages: 90,
    difficulty: "inicial",
    categories: ["primeros", "clasico", "politica"],
    summary:
      "Un ensayo breve sobre qué pasa cuando la ley deja de proteger la vida, la libertad y la propiedad, y se convierte en un instrumento para transferir recursos de unos a otros.",
    keyIdeas: [
      "La ley es la organización del derecho individual de legítima defensa.",
      "El «expolio legal» ocurre cuando la ley hace lo que sería delito si lo hiciera un particular.",
      "Confundir Estado con sociedad lleva a creer que sin Estado no hay educación, religión ni caridad.",
    ],
    concepts: ["expolio legal", "función de la ley", "filantropía forzada"],
    forWhom: "El primer libro liberal que conviene leer. No requiere ningún conocimiento previo.",
    availability: "En dominio público. Disponible libremente en múltiples ediciones digitales.",
    sourceId: "bastiat-ley",
    relatedArticles: ["que-es-el-liberalismo", "estado", "igualdad-ante-la-ley"],
  },
  {
    id: "lo-que-se-ve",
    title: "Lo que se ve y lo que no se ve",
    author: "Frédéric Bastiat",
    year: "1850",
    pages: 70,
    difficulty: "inicial",
    categories: ["primeros", "economia"],
    summary:
      "Doce ejemplos cortos que enseñan a buscar los efectos que una política produce y que nadie ve, porque son las cosas que dejaron de pasar.",
    keyIdeas: [
      "La parábola de la ventana rota: la destrucción no crea riqueza.",
      "Todo gasto público desplaza un gasto privado que no llegamos a ver.",
      "El proteccionismo salva empleos visibles y destruye empleos invisibles.",
    ],
    concepts: ["costo de oportunidad", "ventana rota", "proteccionismo"],
    forWhom: "Cualquiera que quiera aprender a analizar políticas públicas. Se lee en una tarde.",
    availability: "En dominio público.",
    sourceId: "bastiat-ve",
    relatedArticles: ["escasez-e-incentivos", "division-del-trabajo", "gasto-publico"],
  },
  {
    id: "libertad-de-elegir",
    title: "Libertad de elegir",
    author: "Milton y Rose Friedman",
    year: "1980",
    pages: 340,
    difficulty: "inicial",
    categories: ["primeros", "economia", "politica"],
    summary:
      "Aplicación del marco liberal a problemas concretos: educación, protección al consumidor, inflación, desigualdad y regulación, con ejemplos históricos.",
    keyIdeas: [
      "El poder del mercado para coordinar sin coerción, ilustrado con la fabricación de un lápiz.",
      "Los programas públicos suelen beneficiar a los grupos organizados más que a los destinatarios declarados.",
      "La inflación es un fenómeno monetario y sus costos recaen sobre quien no puede cubrirse.",
    ],
    concepts: ["vouchers", "regulación", "inflación", "libertad económica"],
    forWhom: "Quien quiere ver el liberalismo aplicado a políticas concretas sin tecnicismos.",
    sourceId: "friedman-elegir",
    relatedArticles: ["inflacion", "educacion-y-liberalismo", "competencia"],
  },
  {
    id: "economia-una-leccion",
    title: "La economía en una lección",
    author: "Henry Hazlitt",
    year: "1946",
    pages: 220,
    difficulty: "inicial",
    categories: ["primeros", "economia"],
    summary:
      "Extiende el método de Bastiat a la política económica del siglo XX: obra pública, aranceles, salario mínimo, control de alquileres, salvataje de industrias.",
    keyIdeas: [
      "La lección: considerar los efectos de largo plazo sobre todos los grupos, no los de corto plazo sobre uno.",
      "Casi todas las falacias económicas provienen de ignorar esa regla.",
    ],
    concepts: ["falacias económicas", "costo de oportunidad", "efectos no vistos"],
    forWhom: "Después de Bastiat. Es el mismo método aplicado a debates modernos.",
    sourceId: "hazlitt-leccion",
    relatedArticles: ["escasez-e-incentivos", "oferta-y-demanda", "gasto-publico"],
  },
  {
    id: "riqueza-naciones",
    title: "La riqueza de las naciones",
    author: "Adam Smith",
    year: "1776",
    pages: 1100,
    difficulty: "intermedio",
    categories: ["economia", "clasico", "avanzadas"],
    summary:
      "La obra que fundó la economía política. Explica de dónde viene la riqueza de un país: división del trabajo, intercambio, acumulación de capital y comercio.",
    keyIdeas: [
      "La productividad viene de la división del trabajo, limitada por la extensión del mercado.",
      "El interés propio produce cooperación en una sociedad extendida.",
      "Crítica del mercantilismo y de los privilegios que las empresas solicitan al Estado.",
    ],
    concepts: ["división del trabajo", "mano invisible", "valor", "mercantilismo"],
    forWhom: "No hace falta leerlo entero. Los tres primeros capítulos del Libro I valen por sí solos.",
    availability: "En dominio público.",
    sourceId: "smith-wn",
    relatedArticles: ["mercado", "division-del-trabajo", "capitalismo"],
  },
  {
    id: "sobre-la-libertad",
    title: "Sobre la libertad",
    author: "John Stuart Mill",
    year: "1859",
    pages: 180,
    difficulty: "intermedio",
    categories: ["filosofia", "clasico", "politica"],
    summary:
      "Dónde termina la libertad de un individuo y empieza la autoridad legítima de la sociedad. Contiene la formulación del principio del daño.",
    keyIdeas: [
      "El único fin que justifica interferir en la libertad de un adulto es evitar daño a terceros.",
      "Silenciar una opinión priva de corregir un error o de entender por qué la propia es verdadera.",
      "La presión social puede ser tan opresiva como la ley.",
    ],
    concepts: ["principio del daño", "libertad de expresión", "individualidad"],
    forWhom: "Quien quiera entender por qué la libertad de expresión se defiende también para las ideas que uno detesta.",
    availability: "En dominio público.",
    sourceId: "mill-on-liberty",
    relatedArticles: ["libertad", "cultura-liberal", "como-debatir"],
  },
  {
    id: "camino-servidumbre",
    title: "Camino de servidumbre",
    author: "Friedrich A. Hayek",
    year: "1944",
    pages: 280,
    difficulty: "intermedio",
    categories: ["politica", "clasico", "economia"],
    summary:
      "Escrito durante la Segunda Guerra, argumenta que la planificación económica integral conduce a la concentración de poder político, incluso partiendo de buenas intenciones.",
    keyIdeas: [
      "La planificación requiere acuerdo sobre fines que una sociedad plural no tiene.",
      "El planificador termina necesitando poder discrecional creciente.",
      "El imperio de la ley es incompatible con la asignación discrecional de recursos.",
    ],
    concepts: ["planificación", "imperio de la ley", "totalitarismo"],
    forWhom: "Quien quiera entender el argumento político —no económico— contra la planificación central.",
    sourceId: "hayek-camino",
    relatedArticles: ["estado-de-derecho", "mercado", "democracia-y-liberalismo"],
  },
  {
    id: "capitalismo-y-libertad",
    title: "Capitalismo y libertad",
    author: "Milton Friedman",
    year: "1962",
    pages: 250,
    difficulty: "intermedio",
    categories: ["economia", "politica", "clasico"],
    summary:
      "Un capítulo por problema: política monetaria, comercio internacional, educación, licencias profesionales, distribución del ingreso y pobreza.",
    keyIdeas: [
      "La libertad económica es condición de la libertad política, no sólo un fin en sí mismo.",
      "Vouchers educativos: separar financiamiento de provisión.",
      "Impuesto negativo a la renta como alternativa al aparato asistencial.",
    ],
    concepts: ["vouchers", "impuesto negativo", "licencias profesionales", "política monetaria"],
    forWhom: "Quien quiera propuestas concretas de política pública desde una perspectiva liberal.",
    sourceId: "friedman-capitalismo",
    relatedArticles: ["educacion-y-liberalismo", "impuestos", "banco-central"],
  },
  {
    id: "bases",
    title: "Bases y puntos de partida para la organización política de la República Argentina",
    author: "Juan Bautista Alberdi",
    year: "1852",
    pages: 300,
    difficulty: "intermedio",
    categories: ["argentina", "politica", "clasico"],
    summary:
      "El programa de país sobre el que se construyó la Constitución de 1853: inmigración, libertad económica, instituciones y límites al poder.",
    keyIdeas: [
      "Poblar el territorio como condición del desarrollo, atrayendo trabajo y capital con derechos.",
      "Adaptar las instituciones a las condiciones locales en lugar de copiarlas.",
      "Derechos civiles amplios para todos los habitantes, incluidos los extranjeros.",
    ],
    concepts: ["gobernar es poblar", "inmigración", "constitución"],
    forWhom: "Cualquier argentino que quiera entender por qué su Constitución dice lo que dice.",
    availability: "En dominio público. Disponible en repositorios de bibliotecas públicas argentinas.",
    sourceId: "alberdi-bases",
    relatedArticles: ["alberdi", "constitucion-1853", "liberalismo-en-argentina"],
  },
  {
    id: "sistema-rentistico",
    title: "Sistema económico y rentístico de la Confederación Argentina",
    author: "Juan Bautista Alberdi",
    year: "1854",
    pages: 400,
    difficulty: "avanzado",
    categories: ["argentina", "economia", "avanzadas"],
    summary:
      "La teoría económica de la Constitución de 1853, organizada en producción, distribución y consumo de la riqueza, con una tercera parte sobre rentas públicas e impuestos.",
    keyIdeas: [
      "La Constitución contiene una política económica implícita, y las leyes que la contradigan son inconstitucionales.",
      "El impuesto excesivo destruye la riqueza que pretende gravar.",
      "El crédito público es legítimo pero condicionado a su destino y a la capacidad de repago.",
    ],
    concepts: ["constitución económica", "límites al impuesto", "crédito público"],
    forWhom: "El texto liberal argentino más importante y el menos leído. Para quien ya conoce las Bases.",
    availability: "En dominio público.",
    sourceId: "alberdi-sistema",
    relatedArticles: ["alberdi", "impuestos", "deuda-publica", "constitucion-1853"],
  },
  {
    id: "anarquia-estado-utopia",
    title: "Anarquía, Estado y utopía",
    author: "Robert Nozick",
    year: "1974",
    pages: 400,
    difficulty: "avanzado",
    categories: ["filosofia", "libertarismo", "avanzadas"],
    summary:
      "Argumenta que un Estado mínimo puede surgir sin violar derechos, que uno más extenso no puede justificarse, y que el Estado mínimo es además atractivo.",
    keyIdeas: [
      "Justicia en las pertenencias: importa el proceso, no el patrón resultante.",
      "El argumento de Wilt Chamberlain contra las teorías pautadas de justicia.",
      "Reconoce que su teoría necesita un principio de rectificación que no logra formular.",
    ],
    concepts: ["estado mínimo", "justicia en las pertenencias", "rectificación"],
    forWhom: "Quien quiera el argumento filosófico riguroso, no la versión divulgativa.",
    sourceId: "nozick-anarquia",
    relatedArticles: ["estado", "corrientes-del-liberalismo", "propiedad-privada"],
  },
  {
    id: "hacia-nueva-libertad",
    title: "Hacia una nueva libertad: el manifiesto libertario",
    author: "Murray N. Rothbard",
    year: "1973",
    pages: 400,
    difficulty: "intermedio",
    categories: ["libertarismo", "politica"],
    summary:
      "Exposición sistemática del anarcocapitalismo: del principio de no agresión a la provisión privada de justicia, seguridad, calles y educación.",
    keyIdeas: [
      "Principio de no agresión y autopropiedad como axiomas.",
      "El impuesto como apropiación sin consentimiento.",
      "Propuestas concretas de provisión privada de servicios hoy estatales.",
    ],
    concepts: ["principio de no agresión", "anarcocapitalismo", "agencias de protección"],
    forWhom: "Quien quiera entender el libertarismo radical en su propia formulación, no en la de sus críticos.",
    sourceId: "rothbard-nueva-libertad",
    relatedArticles: ["corrientes-del-liberalismo", "estado", "impuestos"],
  },
  {
    id: "socialismo-mises",
    title: "El socialismo",
    author: "Ludwig von Mises",
    year: "1922",
    pages: 600,
    difficulty: "avanzado",
    categories: ["economia", "avanzadas"],
    summary:
      "Análisis del socialismo como sistema económico. Contiene el argumento del cálculo económico: sin propiedad privada de los medios de producción no hay precios para ellos y no hay forma de calcular.",
    keyIdeas: [
      "El problema del socialismo no es de incentivos ni de moral: es de imposibilidad de cálculo.",
      "Los precios de los bienes de capital sólo surgen de su compraventa.",
    ],
    concepts: ["cálculo económico", "propiedad de los medios de producción"],
    forWhom: "Lectura avanzada. La parte II es la relevante.",
    sourceId: "mises-socialismo",
    relatedArticles: ["propiedad-privada", "mercado", "corrientes-del-liberalismo"],
  },
  {
    id: "democracia-en-america",
    title: "La democracia en América",
    author: "Alexis de Tocqueville",
    year: "1835 y 1840",
    pages: 900,
    difficulty: "intermedio",
    categories: ["politica", "filosofia", "clasico"],
    summary:
      "El estudio más influyente sobre la democracia moderna: sus fortalezas, sus riesgos y las costumbres que la sostienen.",
    keyIdeas: [
      "Las asociaciones voluntarias sostienen la democracia más que las leyes.",
      "La tiranía de la mayoría opera también por presión social, no sólo por ley.",
      "El «despotismo blando»: un poder tutelar que trata a los ciudadanos como menores.",
    ],
    concepts: ["asociacionismo", "tiranía de la mayoría", "despotismo blando"],
    forWhom: "El tomo II, cuarta parte, se puede leer por separado y es el más relevante.",
    availability: "En dominio público.",
    sourceId: "tocqueville-democracia",
    relatedArticles: ["democracia-y-liberalismo", "cultura-liberal"],
  },
  {
    id: "fundamentos-libertad",
    title: "Los fundamentos de la libertad",
    author: "Friedrich A. Hayek",
    year: "1960",
    pages: 600,
    difficulty: "avanzado",
    categories: ["filosofia", "politica", "avanzadas"],
    summary:
      "Reconstrucción sistemática de la libertad como ausencia de coerción arbitraria, y del imperio de la ley como su condición institucional.",
    keyIdeas: [
      "Libertad es ausencia de coerción arbitraria, no ausencia de todo obstáculo.",
      "El imperio de la ley exige normas generales, abstractas y conocidas de antemano.",
      "Responsabilidad y libertad son inseparables.",
    ],
    concepts: ["coerción", "imperio de la ley", "responsabilidad"],
    forWhom: "La obra madura de Hayek. Densa pero organizada en capítulos independientes.",
    sourceId: "hayek-constitution",
    relatedArticles: ["libertad", "estado-de-derecho", "responsabilidad-individual"],
  },
  {
    id: "por-que-fracasan",
    title: "Por qué fracasan los países",
    author: "Daron Acemoglu y James A. Robinson",
    year: "2012",
    pages: 590,
    difficulty: "intermedio",
    categories: ["economia", "politica"],
    summary:
      "La tesis institucional del desarrollo: las diferencias de riqueza entre países se explican por instituciones inclusivas o extractivas, más que por geografía o cultura.",
    keyIdeas: [
      "Instituciones inclusivas: propiedad segura, entrada libre, ley pareja.",
      "Instituciones extractivas: el éxito depende de acceder al poder.",
      "Las coyunturas críticas determinan qué camino toma un país.",
    ],
    concepts: ["instituciones inclusivas", "instituciones extractivas", "coyuntura crítica"],
    forWhom: "Quien se pregunte por qué Argentina dejó de ser rica. Léase sabiendo que es una tesis discutida.",
    sourceId: "acemoglu-robinson",
    relatedArticles: ["instituciones", "liberalismo-en-argentina", "capitalismo"],
  },
  {
    id: "teoria-justicia",
    title: "Teoría de la justicia",
    author: "John Rawls",
    year: "1971",
    pages: 600,
    difficulty: "avanzado",
    categories: ["criticas", "filosofia", "avanzadas"],
    summary:
      "La obra de filosofía política más influyente del siglo XX. No es liberal en el sentido de este sitio, pero es el interlocutor crítico central del liberalismo clásico.",
    keyIdeas: [
      "La posición original y el velo de ignorancia como método para elegir principios de justicia.",
      "Principio de diferencia: las desigualdades se justifican sólo si benefician a los más desfavorecidos.",
      "La distribución de talentos naturales es moralmente arbitraria.",
    ],
    concepts: ["velo de ignorancia", "principio de diferencia", "justicia distributiva"],
    forWhom: "Indispensable para discutir en serio con el liberalismo igualitario. Nozick escribió contra este libro.",
    sourceId: "rawls-justicia",
    relatedArticles: ["por-que-hay-pobres-si-el-mercado-funciona", "responsabilidad-individual", "corrientes-del-liberalismo"],
  },
  {
    id: "desarrollo-y-libertad",
    title: "Desarrollo y libertad",
    author: "Amartya Sen",
    year: "1999",
    pages: 440,
    difficulty: "intermedio",
    categories: ["criticas", "economia"],
    summary:
      "Propone medir el desarrollo por las libertades reales que las personas tienen para elegir la vida que valoran, no sólo por el ingreso.",
    keyIdeas: [
      "El enfoque de las capacidades como alternativa a la medición por ingresos.",
      "La libertad es a la vez el fin y el principal medio del desarrollo.",
      "Ninguna hambruna sustancial ocurrió en una democracia con prensa libre.",
    ],
    concepts: ["capacidades", "libertad como desarrollo", "hambrunas"],
    forWhom: "La crítica más seria a la concepción puramente negativa de la libertad, desde dentro de la tradición liberal amplia.",
    sourceId: "sen-desarrollo",
    relatedArticles: ["libertad", "por-que-hay-pobres-si-el-mercado-funciona"],
  },
  {
    id: "gobierno-bienes-comunes",
    title: "El gobierno de los bienes comunes",
    author: "Elinor Ostrom",
    year: "1990",
    pages: 320,
    difficulty: "avanzado",
    categories: ["economia", "avanzadas", "criticas"],
    summary:
      "Documenta comunidades que gestionaron recursos comunes de manera sostenible sin privatizarlos ni estatizarlos, mediante reglas propias y monitoreo mutuo.",
    keyIdeas: [
      "El dilema «privatizar o estatizar» es más pobre que la realidad observada.",
      "Ocho principios de diseño que caracterizan a los arreglos comunitarios exitosos.",
    ],
    concepts: ["bienes comunes", "acción colectiva", "reglas locales"],
    forWhom: "Quien quiera complejizar el debate sobre propiedad y bienes públicos con evidencia empírica.",
    sourceId: "ostrom-commons",
    relatedArticles: ["propiedad-privada", "mercado", "estado"],
  },
];

export const BOOKS_BY_ID: Record<string, Book> = Object.fromEntries(
  BOOKS.map((b) => [b.id, b]),
);
