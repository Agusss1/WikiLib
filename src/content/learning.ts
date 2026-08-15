import type { Level } from "./schema";

// ---------------------------------------------------------------------------
// Rutas de aprendizaje
// ---------------------------------------------------------------------------

export type Module = {
  n: number;
  title: string;
  /** Qué vas a entender al terminar este módulo. */
  goal: string;
  article: string;
  /** Preguntas para pensar antes o después de leer. */
  questions: string[];
  quizId?: string;
};

export type LearningPath = {
  id: string;
  title: string;
  subtitle: string;
  level: Level;
  /** Minutos estimados de lectura de toda la ruta. */
  minutes: number;
  forWhom: string;
  modules: Module[];
};

export const PATHS: LearningPath[] = [
  {
    id: "descubri-el-liberalismo",
    title: "Tu primer recorrido liberal",
    subtitle: "De cero a entender por qué se discute lo que se discute en Argentina.",
    level: "inicial",
    minutes: 180,
    forWhom:
      "Si nunca leíste nada de esto y querés empezar por algún lado. No hace falta saber nada previo.",
    modules: [
      { n: 1, title: "¿Qué es la libertad?", goal: "Distinguir los dos sentidos de «libertad» que hacen que la gente discuta sin entenderse.", article: "libertad", questions: ["¿Sos libre de viajar a Japón si no tenés plata para el pasaje?", "¿Dónde ponés vos el límite de la libertad de otro?"], quizId: "libertad" },
      { n: 2, title: "¿Qué es el Estado?", goal: "Entender qué diferencia al Estado de cualquier otra organización.", article: "estado", questions: ["¿Cuál es la diferencia entre un impuesto y un robo?", "¿Qué funciones creés que sólo puede hacer el Estado?"], quizId: "estado" },
      { n: 3, title: "¿Qué es la propiedad privada?", goal: "Ver que propiedad no es «tener cosas» sino un conjunto de derechos separables.", article: "propiedad-privada", questions: ["Si no podés vender algo, ¿seguís siendo su dueño?", "¿Arreglarías el techo de una casa que te pueden sacar el año que viene?"] },
      { n: 4, title: "¿Qué es el mercado?", goal: "Entender cómo se coordinan millones de personas sin que nadie dé la orden.", article: "mercado", questions: ["¿Quién organiza que haya pan en tu barrio mañana?", "¿Ganan los dos en un intercambio voluntario?"], quizId: "mercado" },
      { n: 5, title: "¿Qué es el capitalismo?", goal: "Separar capitalismo de liberalismo, y capital de dinero.", article: "capitalismo", questions: ["¿Por qué un país es rico: por tener billetes o por tener capital?", "¿Es lo mismo estar a favor del mercado que a favor de las empresas?"] },
      { n: 6, title: "¿Qué es el dinero?", goal: "Entender por qué un papel tiene valor y por qué puede perderlo.", article: "dinero", questions: ["¿Por qué los argentinos ahorran en dólares?", "¿Qué pasaría si todos tuviéramos el doble de billetes?"], quizId: "dinero" },
      { n: 7, title: "¿Qué son los impuestos?", goal: "Descubrir cuántos impuestos pagás sin verlos, y quién los paga realmente.", article: "impuestos", questions: ["¿Quién paga las contribuciones patronales?", "¿Cuántos impuestos pagaste hoy sin darte cuenta?"], quizId: "impuestos" },
      { n: 8, title: "¿Qué es la inflación?", goal: "Entender que no es que las cosas valgan más, sino que tu plata vale menos.", article: "inflacion", questions: ["¿Por qué suben todos los precios a la vez y no sólo algunos?", "¿Por qué se dice que la inflación es un impuesto que nadie votó?"], quizId: "inflacion" },
      { n: 9, title: "¿Qué es el déficit?", goal: "Ver cómo se conectan déficit, emisión, inflación y crisis.", article: "deficit-fiscal", questions: ["¿Cuáles son las tres formas de financiar un déficit y qué cuesta cada una?", "¿Por qué en Argentina el déficit termina en inflación?"] },
      { n: 10, title: "¿Cómo se aplica todo esto a Argentina?", goal: "Poner las nueve piezas anteriores en la historia argentina real.", article: "liberalismo-en-argentina", questions: ["¿Por qué un país con Constitución liberal tuvo prácticas que la contradecían?", "¿Qué te convenció y qué no de lo que leíste hasta acá?"] },
    ],
  },
  {
    id: "economia-desde-cero",
    title: "Economía desde cero",
    subtitle: "Las herramientas para entender cualquier discusión económica argentina.",
    level: "inicial",
    minutes: 240,
    forWhom: "Si querés dejar de perderte cuando se habla de emisión, déficit, cepo o tipo de cambio.",
    modules: [
      { n: 1, title: "Escasez, incentivos y costo de oportunidad", goal: "Las tres ideas que están detrás de todo lo demás.", article: "escasez-e-incentivos", questions: ["¿Qué es «gratis» realmente?", "¿Cómo predecirías el efecto de una ley nueva?"], quizId: "economia-basica" },
      { n: 2, title: "Oferta, demanda y precios", goal: "Entender qué información contiene un precio y qué pasa si lo fijás por decreto.", article: "oferta-y-demanda", questions: ["¿Qué pasa cuando el precio no puede subir?", "¿Quién paga un impuesto puesto sobre el vendedor?"] },
      { n: 3, title: "El mercado", goal: "Qué instituciones necesita un mercado para existir.", article: "mercado", questions: ["¿Qué hace falta además de gente comprando y vendiendo?"] },
      { n: 4, title: "Competencia y monopolios", goal: "Distinguir barreras económicas de barreras legales.", article: "competencia", questions: ["¿Qué monopolios duran más y por qué?", "¿A quién beneficia una regulación nueva?"] },
      { n: 5, title: "División del trabajo y comercio", goal: "Por qué conviene comerciar aunque seas mejor en todo.", article: "division-del-trabajo", questions: ["¿Por qué el cirujano contrata una secretaria peor que él archivando?"] },
      { n: 6, title: "Capitalismo y productividad", goal: "De dónde sale la riqueza antes de repartirla.", article: "capitalismo", questions: ["¿Por qué la productividad determina el salario sostenible?"] },
      { n: 7, title: "El dinero", goal: "Sus tres funciones y cuál destruye la inflación primero.", article: "dinero", questions: ["¿Qué función del dinero perdió el peso?"] },
      { n: 8, title: "Inflación", goal: "Causas, mecanismo y daños.", article: "inflacion", questions: ["¿Por qué la inflación no baja apenas se frena la emisión?"], quizId: "inflacion" },
      { n: 9, title: "Emisión monetaria", goal: "Qué se emite, cómo y a costa de quién.", article: "emision-monetaria", questions: ["¿Quién gana y quién pierde con la emisión?"] },
      { n: 10, title: "El Banco Central", goal: "Qué hace y por qué su independencia es un problema de diseño.", article: "banco-central", questions: ["¿Por qué un gobierno querría atarse las manos?"] },
      { n: 11, title: "Impuestos", goal: "Tipos, incidencia y cómo evaluarlos.", article: "impuestos", questions: ["¿Un impuesto a las empresas lo paga la empresa?"], quizId: "impuestos" },
      { n: 12, title: "Gasto público", goal: "Composición, rigidez y por qué tiende a crecer.", article: "gasto-publico", questions: ["¿Por qué el ajuste cae siempre sobre lo mismo?"] },
      { n: 13, title: "Déficit fiscal", goal: "Las tres formas de financiarlo y qué cuesta cada una.", article: "deficit-fiscal", questions: ["¿Qué es la sostenibilidad de la deuda?"] },
      { n: 14, title: "Deuda pública", goal: "Cuándo endeudarse es razonable y cuándo no.", article: "deuda-publica", questions: ["¿Por qué importa en qué moneda está la deuda?"] },
      { n: 15, title: "Tipo de cambio y cepo", goal: "Por qué sube el dólar y qué provoca restringirlo.", article: "tipo-de-cambio", questions: ["¿Por qué aparece la brecha cambiaria?"], quizId: "cambiario" },
    ],
  },
  {
    id: "historia-liberal-argentina",
    title: "Historia del liberalismo argentino",
    subtitle: "Doscientos años en los que «liberal» significó cosas muy distintas.",
    level: "intermedio",
    minutes: 150,
    forWhom: "Si querés entender por qué en Argentina esta palabra genera las reacciones que genera.",
    modules: [
      { n: 1, title: "Panorama general", goal: "Ubicar las cinco etapas de la historia de la idea en el país.", article: "liberalismo-en-argentina", questions: ["¿Cuál de las cinco etapas conocías mejor?"] },
      { n: 2, title: "Alberdi", goal: "Conocer al autor que diseñó el programa.", article: "alberdi", questions: ["¿Qué significaba realmente «gobernar es poblar»?"], quizId: "alberdi" },
      { n: 3, title: "La Constitución de 1853", goal: "Leer los artículos que definen el diseño institucional argentino.", article: "constitucion-1853", questions: ["¿Qué exige la Constitución para expropiar?"], quizId: "constitucion" },
      { n: 4, title: "Instituciones y desarrollo", goal: "Por qué Argentina es un caso estudiado en el mundo.", article: "instituciones", questions: ["¿Por qué copiar leyes de otro país no alcanza?"] },
      { n: 5, title: "Estado de derecho", goal: "La diferencia entre tener leyes y estar sometido a ellas.", article: "estado-de-derecho", questions: ["¿Puede una persona común ganarle un juicio al Estado?"] },
      { n: 6, title: "Democracia y liberalismo", goal: "Qué pasa cuando la mayoría vota algo antiliberal.", article: "democracia-y-liberalismo", questions: ["¿Qué temas deberían quedar fuera del voto?"] },
      { n: 7, title: "Las crisis argentinas", goal: "El patrón que se repite desde hace décadas.", article: "ciclos-inflacionarios-argentinos", questions: ["¿Por qué funcionó y por qué se rompió la convertibilidad?"] },
      { n: 8, title: "Cepo y controles", goal: "Cómo una restricción genera los problemas que quería evitar.", article: "cepo-cambiario", questions: ["¿Qué le conviene hacer a un exportador con cepo?"] },
      { n: 9, title: "Las corrientes hoy", goal: "Ubicar liberalismo clásico y libertarismo en el debate actual.", article: "corrientes-del-liberalismo", questions: ["¿Dónde te ubicás vos y por qué?"] },
      { n: 10, title: "Cómo discutir esto sin repetir consignas", goal: "Herramientas para debatir historia sin caer en propaganda.", article: "como-debatir", questions: ["¿Qué dato te haría cambiar de opinión sobre los años 90?"] },
    ],
  },
  {
    id: "alberdi-ruta",
    title: "Alberdi en profundidad",
    subtitle: "El autor argentino que hay que leer, y por qué.",
    level: "intermedio",
    minutes: 100,
    forWhom: "Si querés ir a las fuentes del diseño institucional argentino.",
    modules: [
      { n: 1, title: "Quién fue", goal: "Biografía, contexto y por qué importa.", article: "alberdi", questions: ["¿Por qué su oposición a la Guerra del Paraguay dice algo sobre su liberalismo?"] },
      { n: 2, title: "Las Bases", goal: "El programa: población, derechos, instituciones.", article: "alberdi", questions: ["¿Qué proponía atraer además de gente?"] },
      { n: 3, title: "La Constitución que salió de ahí", goal: "Qué artículos son directamente alberdianos.", article: "constitucion-1853", questions: ["¿Qué dice el artículo 20 sobre los extranjeros?"], quizId: "constitucion" },
      { n: 4, title: "Propiedad en el diseño alberdiano", goal: "Por qué la propiedad segura es central en su programa.", article: "propiedad-privada", questions: ["¿Qué requisitos exige el artículo 17?"] },
      { n: 5, title: "El Sistema económico y rentístico", goal: "Su teoría del impuesto y de las rentas públicas.", article: "impuestos", questions: ["¿Cómo anticipó el argumento del límite al impuesto?"] },
      { n: 6, title: "Crédito público", goal: "Qué decía sobre endeudarse.", article: "deuda-publica", questions: ["¿Bajo qué condiciones consideraba legítimo el crédito público?"] },
      { n: 7, title: "Alberdi y el liberalismo contemporáneo", goal: "Qué queda vigente y qué no.", article: "liberalismo-en-argentina", questions: ["¿Qué de Alberdi no envejeció bien?"] },
      { n: 8, title: "Leerlo en serio", goal: "Cómo abordar las fuentes originales.", article: "como-debatir", questions: ["¿Cómo se distingue citar de usar a un autor?"] },
    ],
  },
  {
    id: "libertarismo",
    title: "Entender el libertarismo",
    subtitle: "Qué sostiene, en qué se diferencia del liberalismo clásico y cuáles son sus objeciones más fuertes.",
    level: "intermedio",
    minutes: 130,
    forWhom: "Si escuchás hablar de minarquismo y anarcocapitalismo y querés saber de qué se trata.",
    modules: [
      { n: 1, title: "El mapa de corrientes", goal: "Ubicar cada familia y sus desacuerdos reales.", article: "corrientes-del-liberalismo", questions: ["¿Cuáles son los dos ejes que separan a las corrientes?"], quizId: "corrientes" },
      { n: 2, title: "El Estado en discusión", goal: "Qué funciones se aceptan y cuáles se discuten.", article: "estado", questions: ["¿Qué es un bien público en sentido técnico?"] },
      { n: 3, title: "Propiedad y autopropiedad", goal: "El fundamento del principio de no agresión.", article: "propiedad-privada", questions: ["¿Cómo se justifica la apropiación original?"] },
      { n: 4, title: "Impuestos: ¿legítimos o no?", goal: "El desacuerdo más nítido entre corrientes.", article: "impuestos", questions: ["¿Es el impuesto la condición de la propiedad o su violación?"] },
      { n: 5, title: "Moneda: banco central, dolarización o banca libre", goal: "Las cuatro posiciones liberales sobre política monetaria.", article: "banco-central", questions: ["¿Qué problema resuelve la independencia del banco central?"] },
      { n: 6, title: "Libertad y sus límites", goal: "Cómo el libertarismo aplica el principio del daño.", article: "libertad", questions: ["¿Se puede renunciar voluntariamente a la propia libertad?"] },
      { n: 7, title: "Responsabilidad individual", goal: "Qué implica y hasta dónde llega.", article: "responsabilidad-individual", questions: ["¿Dónde termina la responsabilidad y empieza la mala suerte?"] },
      { n: 8, title: "La objeción de la pobreza", goal: "La pregunta más difícil, respondida en serio.", article: "por-que-hay-pobres-si-el-mercado-funciona", questions: ["¿Es suficiente el crecimiento para reducir la pobreza?"] },
      { n: 9, title: "Tecnología: donde no hay respuesta única", goal: "Ver un terreno donde los liberales están divididos.", article: "como-piensa-un-liberal-la-tecnologia", questions: ["¿Los efectos de red justifican intervenir?"] },
      { n: 10, title: "Discutirlo bien", goal: "Cómo sostener estas posiciones sin caer en consignas.", article: "como-debatir", questions: ["¿Podés formular el mejor argumento en contra de tu propia posición?"] },
    ],
  },
  {
    id: "como-debatir-ruta",
    title: "Cómo debatir",
    subtitle: "Pensar mejor antes que ganar discusiones.",
    level: "inicial",
    minutes: 90,
    forWhom: "Si querés discutir con argumentos en lugar de repetir lo que viste en un video.",
    modules: [
      { n: 1, title: "El método", goal: "Steelman, falacias, hechos y valores.", article: "como-debatir", questions: ["¿Podés explicar la posición contraria de forma que el otro la reconozca?"], quizId: "debate" },
      { n: 2, title: "Incentivos, no intenciones", goal: "Predecir efectos en lugar de evaluar propósitos.", article: "escasez-e-incentivos", questions: ["¿Qué le conviene hacer a cada parte con esta norma?"] },
      { n: 3, title: "Lo que no se ve", goal: "Buscar los costos ocultos de cualquier política.", article: "gasto-publico", questions: ["¿Qué dejó de hacerse con estos recursos?"] },
      { n: 4, title: "Comparar instituciones reales", goal: "Evitar la falacia del nirvana.", article: "mercado", questions: ["¿Estoy comparando el mercado real con un Estado ideal?"] },
      { n: 5, title: "Usar fuentes", goal: "Jerarquía de fuentes y cómo verificar un dato.", article: "instituciones", questions: ["¿De dónde sale ese dato?"] },
      { n: 6, title: "Admitir incertidumbre", goal: "Distinguir lo que se sabe de lo que se discute.", article: "ciclos-inflacionarios-argentinos", questions: ["¿Qué parte de esto es hecho y qué parte interpretación?"] },
      { n: 7, title: "Tolerar el desacuerdo", goal: "Convivir con quien piensa distinto.", article: "cultura-liberal", questions: ["¿Podés ser amigo de alguien que vota distinto?"] },
      { n: 8, title: "Cambiar de opinión", goal: "Cuándo la evidencia obliga a revisar una posición.", article: "que-significa-ser-liberal", questions: ["¿Cuándo fue la última vez que cambiaste de opinión sobre algo importante?"] },
    ],
  },
];

export const PATHS_BY_ID: Record<string, LearningPath> = Object.fromEntries(
  PATHS.map((p) => [p.id, p]),
);

// ---------------------------------------------------------------------------
// Quizzes
// ---------------------------------------------------------------------------

export type Question = {
  q: string;
  options: string[];
  correct: number;
  /** Explicación que se muestra SIEMPRE después de responder, acierte o no. */
  explain: string;
  article?: string;
};

export type Quiz = {
  id: string;
  title: string;
  description: string;
  level: Level;
  questions: Question[];
};

export const QUIZZES: Quiz[] = [
  {
    id: "general",
    title: "¿Cuánto sabés de liberalismo?",
    description: "Diez preguntas para ubicar tu punto de partida. No es un examen.",
    level: "inicial",
    questions: [
      { q: "¿Qué define al Estado según la definición más usada?", options: ["Que presta servicios públicos", "Que tiene el monopolio del uso legítimo de la fuerza en un territorio", "Que fue elegido democráticamente", "Que recauda impuestos"], correct: 1, explain: "La definición de Weber se centra en el monopolio de la fuerza. Los servicios también los pueden prestar otros; lo que sólo el Estado hace es coaccionar legítimamente.", article: "estado" },
      { q: "La inflación es principalmente...", options: ["Que los productos valen más", "Que los empresarios remarcan por codicia", "Que el dinero pierde poder de compra", "Que los salarios suben mucho"], correct: 2, explain: "Es el valor del dinero el que cae. Por eso suben todos los precios a la vez y no sólo algunos.", article: "inflacion" },
      { q: "En un intercambio voluntario...", options: ["Gana uno y pierde el otro", "Ganan los dos, porque cada uno valora más lo que recibe", "Gana siempre el que tiene más plata", "No gana nadie, sólo se mueven cosas"], correct: 1, explain: "Si una de las partes no ganara, no aceptaría. El comercio no es un juego de suma cero: esa es una de las ideas más contraintuitivas y más importantes de la economía.", article: "mercado" },
      { q: "«Bien público» en sentido económico significa...", options: ["Un bien que el Estado provee", "Un bien importante para la sociedad", "Un bien no rival y no excluible", "Un bien gratuito"], correct: 2, explain: "Tiene un sentido técnico preciso. La salud y la educación NO son bienes públicos: son rivales y excluibles. Se puede defender su financiamiento público por otras razones.", article: "estado" },
      { q: "Si se fija un precio máximo por debajo del de mercado, lo esperable es...", options: ["Que baje la inflación", "Que aparezcan faltantes", "Que aumente la producción", "Que mejore la calidad"], correct: 1, explain: "Al precio tope la gente quiere comprar más y los productores quieren vender menos. La diferencia es el faltante. El racionamiento no desaparece: cambia de mecanismo.", article: "oferta-y-demanda" },
      { q: "Un impuesto legalmente a cargo del empleador...", options: ["Siempre lo paga el empleador", "Puede terminar afectando el salario del trabajador", "Es inconstitucional", "No afecta el mercado laboral"], correct: 1, explain: "Es el concepto de incidencia tributaria. Quién ingresa el impuesto al fisco no determina quién soporta la carga: eso depende de las elasticidades del mercado.", article: "impuestos" },
      { q: "La diferencia entre liberalismo y democracia es que...", options: ["Son sinónimos", "El liberalismo responde quién decide y la democracia qué se decide", "La democracia responde quién decide y el liberalismo qué se puede decidir", "El liberalismo rechaza el voto"], correct: 2, explain: "Democracia: quién decide (la mayoría). Liberalismo: qué se puede decidir (no todo). Una mayoría puede votar algo antiliberal, y eso sería democrático y a la vez contrario al liberalismo.", article: "democracia-y-liberalismo" },
      { q: "El artículo 17 de la Constitución argentina exige, para expropiar...", options: ["Sólo una ley", "Sólo pagar una indemnización", "Ley que califique la utilidad pública e indemnización previa", "Autorización judicial únicamente"], correct: 2, explain: "Los requisitos son acumulativos: ley, calificación de utilidad pública e indemnización PREVIA. Además, el mismo artículo prohíbe expresamente la confiscación.", article: "propiedad-privada" },
      { q: "El costo de oportunidad de una decisión es...", options: ["Lo que pagaste", "El valor de la mejor alternativa que descartaste", "El costo de producción", "El precio de mercado"], correct: 1, explain: "Por eso «gratis» casi nunca significa que no cuesta: significa que lo paga otro, o que se paga en tiempo, calidad o en lo que dejó de hacerse.", article: "escasez-e-incentivos" },
      { q: "¿Cuál de estas afirmaciones describe mejor al liberalismo?", options: ["Es una doctrina única con posiciones definidas para cada tema", "Es una familia de corrientes con desacuerdos internos reales", "Es sinónimo de capitalismo", "Es una posición exclusivamente económica"], correct: 1, explain: "Liberalismo clásico, minarquismo, anarcocapitalismo y liberalismo social discrepan en cosas grandes. Presentarlo como homogéneo es inexacto y además hace imposible discutir en serio.", article: "corrientes-del-liberalismo" },
    ],
  },
  {
    id: "inflacion",
    title: "Inflación",
    description: "Seis preguntas sobre la causa, el mecanismo y los daños.",
    level: "intermedio",
    questions: [
      { q: "¿Cuál es la causa dominante de la inflación alta y persistente?", options: ["La codicia empresarial", "Un aumento de la cantidad de dinero mayor que el de la producción", "Los aumentos de salarios", "La devaluación"], correct: 1, explain: "Es la formulación de Friedman. Los otros factores explican la dinámica de corto plazo o son síntomas de la misma causa subyacente, pero no producen inflación sostenida de dos o tres dígitos sin acomodación monetaria.", article: "inflacion" },
      { q: "¿Por qué la inflación no baja inmediatamente al frenar la emisión?", options: ["Porque los empresarios se resisten", "Por la inercia y las expectativas ya formadas", "Porque hace falta subir la tasa", "Porque no es cierto que dependa de la emisión"], correct: 1, explain: "Las expectativas y los contratos indexados generan inercia. Por eso los planes de estabilización necesitan credibilidad además de aritmética.", article: "inflacion" },
      { q: "¿Por qué se dice que la inflación es un impuesto regresivo?", options: ["Porque la fija el Congreso", "Porque golpea más a quien cobra en pesos y no puede cubrirse", "Porque grava más a los ricos", "Porque se cobra en las facturas"], correct: 1, explain: "Quien puede comprar dólares, invertir o adelantar consumo se defiende. Quien cobra un sueldo fijo en pesos, no. Y a diferencia de cualquier otro impuesto, no requiere ley.", article: "inflacion" },
      { q: "La demanda de dinero cae cuando...", options: ["Sube la tasa de interés", "Se espera más inflación", "Aumenta la producción", "Baja el tipo de cambio"], correct: 1, explain: "Nadie quiere quedarse con algo que se derrite. Ese es el mecanismo que puede acelerar la inflación aun sin nueva emisión, y es lo que ocurre en una hiperinflación.", article: "dinero" },
      { q: "El efecto Cantillon describe que...", options: ["La inflación afecta a todos por igual", "Quien recibe el dinero nuevo primero gana a costa de quien lo recibe último", "La emisión no genera inflación", "Los precios suben todos al mismo tiempo"], correct: 1, explain: "El dinero nuevo no llega a todos a la vez. El primero compra a precios viejos; los sueldos y las jubilaciones llegan cuando los precios ya subieron.", article: "emision-monetaria" },
      { q: "Estados Unidos emitió mucho después de 2008 sin hiperinflación. ¿Por qué?", options: ["Porque la emisión no causa inflación", "Porque aumentó la demanda de dinero y el dólar tiene demanda internacional", "Porque los precios están controlados", "Porque no emitió realmente"], correct: 1, explain: "La demanda de dinero creció fuertemente y buena parte quedó como reservas. Además el dólar es reserva de valor mundial. Y sí hubo inflación con rezago: en 2021-2023 fue la más alta en cuarenta años.", article: "emision-monetaria" },
    ],
  },
  {
    id: "constitucion",
    title: "Constitución argentina",
    description: "Seis preguntas sobre los artículos que más importan.",
    level: "intermedio",
    questions: [
      { q: "¿Qué artículo establece que las acciones privadas que no dañan a terceros están exentas de la autoridad de los magistrados?", options: ["Artículo 14", "Artículo 16", "Artículo 19", "Artículo 28"], correct: 2, explain: "El artículo 19 consagra el principio de reserva y el de legalidad. Es una de las formulaciones más amplias de protección de la esfera privada en el constitucionalismo comparado.", article: "constitucion-1853" },
      { q: "El artículo 28 dice que las leyes que reglamentan derechos...", options: ["Pueden restringirlos si hay emergencia", "No pueden alterarlos", "Sólo las dicta el Ejecutivo", "Requieren mayoría especial"], correct: 1, explain: "De la tensión entre el artículo 14 («conforme a las leyes que reglamenten su ejercicio») y el 28 surgió la doctrina de la razonabilidad: hay proporción entre medio y fin, o hay desnaturalización.", article: "constitucion-1853" },
      { q: "¿Qué establece el artículo 16 sobre los impuestos?", options: ["Que deben ser progresivos", "Que la igualdad es su base", "Que los fija el Ejecutivo", "Que no pueden superar el 30%"], correct: 1, explain: "«La igualdad es la base del impuesto y de las cargas públicas». El mismo artículo prohíbe fueros personales y títulos de nobleza.", article: "igualdad-ante-la-ley" },
      { q: "¿Qué prohíbe el artículo 29?", options: ["La reelección presidencial", "Los partidos políticos", "Conceder al Ejecutivo la suma del poder público", "Los impuestos a las exportaciones"], correct: 2, explain: "Es una cláusula notable: prohíbe esa concesión incluso si la hiciera el propio Congreso, y la califica de traición a la patria. Es liberalismo puro incrustado en el texto.", article: "estado" },
      { q: "Según el artículo 121, las provincias...", options: ["Dependen del gobierno nacional", "Conservan todo el poder no delegado a la Nación", "No pueden dictar sus constituciones", "Sólo administran justicia"], correct: 1, explain: "Es la base del federalismo argentino. Por eso educación, salud y seguridad son mayoritariamente competencias provinciales, dato imprescindible para comparar gasto público.", article: "estado" },
      { q: "¿En qué año se incorporó el artículo 14 bis?", options: ["1853", "1949", "1957", "1994"], correct: 2, explain: "La reforma de 1957, convocada por un gobierno de facto, incorporó los derechos del trabajador y de la seguridad social. Su legitimidad de origen fue discutida.", article: "constitucion-1853" },
    ],
  },
  {
    id: "economia-basica",
    title: "Economía básica",
    description: "Cinco preguntas sobre escasez, incentivos y precios.",
    level: "inicial",
    questions: [
      { q: "La escasez significa que...", options: ["La gente es pobre", "Los recursos son limitados respecto de los usos posibles", "Faltan productos en las góndolas", "Hay poca producción"], correct: 1, explain: "Existe incluso en países ricos. Por eso toda sociedad necesita algún mecanismo para decidir quién obtiene qué: precios, colas, autoridad, sorteo o fuerza.", article: "escasez-e-incentivos" },
      { q: "Eliminar los precios de un bien...", options: ["Elimina el racionamiento", "Cambia el mecanismo de racionamiento", "Aumenta la producción", "Baja el costo de producir"], correct: 1, explain: "Si el precio no raciona, lo hacen las colas, las listas de espera, la discrecionalidad o el mercado informal. El costo se paga en tiempo o en influencia en lugar de en dinero.", article: "oferta-y-demanda" },
      { q: "Un incentivo es...", options: ["Un premio en dinero", "Cualquier cosa que cambie el costo o beneficio de una conducta", "Una motivación personal", "Un subsidio estatal"], correct: 1, explain: "Por eso para predecir el efecto de una norma no hay que leer su exposición de motivos sino preguntar qué le conviene hacer a cada parte una vez que la norma existe.", article: "escasez-e-incentivos" },
      { q: "La ventaja comparativa explica que...", options: ["Conviene producir todo localmente", "Conviene comerciar aunque un país sea mejor en todo", "Sólo conviene exportar materias primas", "Los países ricos no ganan con el comercio"], correct: 1, explain: "Lo que importa no es ser mejor en términos absolutos sino tener menor costo de oportunidad. Es lo que Ricardo mostró en 1817 y sigue siendo contraintuitivo.", article: "division-del-trabajo" },
      { q: "Lo que disciplina a una empresa es...", options: ["La cantidad de competidores que tiene hoy", "La posibilidad de que aparezca uno nuevo", "La regulación estatal", "El tamaño de su mercado"], correct: 1, explain: "Por eso las barreras legales de entrada preocupan más que la concentración en sí. Una empresa sola en un mercado abierto se comporta mejor que tres protegidas por ley.", article: "competencia" },
    ],
  },
  {
    id: "corrientes",
    title: "Corrientes del liberalismo",
    description: "Cinco preguntas para distinguir las familias.",
    level: "intermedio",
    questions: [
      { q: "El minarquismo sostiene que el Estado debe limitarse a...", options: ["Justicia, seguridad y defensa", "Justicia, seguridad, defensa y educación", "Nada: debe desaparecer", "Todo lo que la mayoría vote"], correct: 0, explain: "Nozick es su formulador más riguroso. Argumenta a la vez contra los anarcocapitalistas (un Estado mínimo puede surgir sin violar derechos) y contra Rawls (uno mayor no se justifica).", article: "corrientes-del-liberalismo" },
      { q: "El ordoliberalismo se distingue por sostener que...", options: ["El Estado debe desaparecer", "La competencia no se sostiene sola y hay que defenderla activamente", "Los precios deben fijarse", "El mercado no funciona"], correct: 1, explain: "Corriente alemana de posguerra. El Estado ordoliberal interviene sobre las reglas, no sobre los resultados. Es la base de la «economía social de mercado».", article: "corrientes-del-liberalismo" },
      { q: "Además del «cuánto Estado», ¿qué otro eje separa a las corrientes?", options: ["Su posición sobre el dólar", "El fundamento: derechos naturales o consecuencias", "Su partido político", "Su país de origen"], correct: 1, explain: "Locke y Rothbard parten de derechos previos a toda institución; Hume y Friedman evalúan consecuencias. Dos personas pueden coincidir en la política y discrepar completamente en la razón.", article: "corrientes-del-liberalismo" },
      { q: "«Neoliberalismo» como categoría histórica designa...", options: ["Las políticas de los años 90", "Un movimiento intelectual de mediados del siglo XX", "Cualquier política de mercado", "El anarcocapitalismo"], correct: 1, explain: "Coloquio Walter Lippmann (1938) y Sociedad Mont Pelerin (1947): buscaban refundar el liberalismo reconociendo que el mercado necesita un marco institucional. El uso polémico contemporáneo es distinto.", article: "corrientes-del-liberalismo" },
      { q: "El liberalismo social sostiene que...", options: ["El mercado debe eliminarse", "Ciertas condiciones materiales mínimas son precondición de la autonomía", "Los derechos no existen", "El Estado debe planificar la economía"], correct: 1, explain: "No es una contradicción con el liberalismo sino una lectura distinta de qué requiere la autonomía real. Mill tardío, Hobhouse y, en el debate contemporáneo, Sen.", article: "corrientes-del-liberalismo" },
    ],
  },
  {
    id: "libertad",
    title: "Libertad",
    description: "Cuatro preguntas sobre el concepto central.",
    level: "inicial",
    questions: [
      { q: "La libertad negativa es...", options: ["La libertad de hacer cosas malas", "La ausencia de interferencia de otras personas", "Tener recursos para actuar", "Lo mismo que la libertad positiva"], correct: 1, explain: "Se viola por coerción: violencia, amenaza, prohibición, fraude. No la limita la naturaleza: no poder volar no es una falta de libertad.", article: "libertad" },
      { q: "El principio del daño de Mill dice que se puede interferir en la libertad de alguien...", options: ["Cuando se equivoca", "Cuando daña a terceros", "Cuando la mayoría lo decide", "Cuando es por su propio bien"], correct: 1, explain: "Explícitamente NO basta su propio bien. Aplicarlo es más difícil de lo que parece: la discusión sobre qué cuenta como «daño» sigue abierta.", article: "libertad" },
      { q: "Para el liberalismo, la relación entre ley y libertad es que...", options: ["La ley siempre limita la libertad", "Sin ley general no hay libertad, porque gobierna el más fuerte", "La libertad exige ausencia de reglas", "Son conceptos independientes"], correct: 1, explain: "Locke lo dice directamente. Lo que amenaza la libertad no es la ley general y previsible sino el mandato arbitrario y particular.", article: "libertad" },
      { q: "¿Por qué el liberalismo prioriza la libertad negativa?", options: ["Porque la positiva no importa", "Entre otras razones, porque la de todos es simultáneamente realizable", "Porque es más fácil de conseguir", "Porque lo dijo Mill"], correct: 1, explain: "Que nadie te obligue no requiere que otro haga algo por vos. En cambio si mi libertad exige que otros me provean recursos, las libertades chocan entre sí.", article: "libertad" },
    ],
  },
  {
    id: "estado",
    title: "El Estado",
    description: "Cuatro preguntas sobre funciones y límites.",
    level: "inicial",
    questions: [
      { q: "El problema del free rider justifica la provisión estatal de...", options: ["Cualquier servicio", "Bienes no rivales y no excluibles", "Salud y educación", "Alimentos básicos"], correct: 1, explain: "Si nadie puede ser excluido, a cada uno le conviene no pagar y usarlo igual. Es el argumento económico más sólido a favor del Estado, y los liberales clásicos lo aceptan.", article: "estado" },
      { q: "Para el liberalismo, el Estado existe para...", options: ["Otorgar derechos a los ciudadanos", "Proteger derechos que ya existían", "Distribuir la riqueza", "Representar la voluntad nacional"], correct: 1, explain: "Si los derechos son anteriores al poder, éste los reconoce pero no los crea. De ahí se sigue su límite: violarlos sistemáticamente le quita justificación.", article: "estado" },
      { q: "Un Estado «fuerte en poco» significa...", options: ["Un Estado autoritario", "Que haga bien las pocas cosas que sólo él puede hacer", "Un Estado grande", "Un Estado militarizado"], correct: 1, explain: "Un Estado que no garantiza justicia rápida ni seguridad no es un Estado chico: falla en lo único que sólo él puede hacer. Muchos liberales argentinos plantean el problema local en estos términos.", article: "estado" },
      { q: "¿Cuál de estos NO es un mecanismo liberal de límite al poder?", options: ["División de poderes", "Federalismo", "Constitución rígida", "Delegación amplia de facultades al Ejecutivo"], correct: 3, explain: "La delegación amplia va en dirección contraria. La Constitución argentina la prohíbe en su artículo 76, salvo en materias determinadas de administración o emergencia, con plazo y bases fijadas por el Congreso.", article: "estado" },
    ],
  },
  {
    id: "impuestos",
    title: "Impuestos",
    description: "Cuatro preguntas sobre quién paga qué.",
    level: "intermedio",
    questions: [
      { q: "La incidencia tributaria describe...", options: ["Quién ingresa el impuesto al fisco", "Quién soporta realmente la carga", "La alícuota aplicable", "La base imponible"], correct: 1, explain: "Ambas cosas no coinciden necesariamente. El lado más inelástico del mercado soporta la mayor parte de la carga, independientemente de lo que diga la ley.", article: "impuestos" },
      { q: "La curva de Laffer muestra que...", options: ["Bajar impuestos siempre aumenta la recaudación", "La relación entre alícuota y recaudación no es lineal", "Los impuestos deben ser del 20%", "Subir impuestos siempre reduce la recaudación"], correct: 1, explain: "Con 0% y con 100% no se recauda nada, así que existe un máximo intermedio. Dónde está ese punto es una pregunta empírica distinta para cada impuesto. Afirmar que bajar siempre recauda más es un abuso del argumento.", article: "impuestos" },
      { q: "El «efecto cascada» de Ingresos Brutos significa que...", options: ["Se cobra una sola vez", "Se acumula en cada etapa de la cadena productiva", "Es progresivo", "Sólo lo pagan las empresas grandes"], correct: 1, explain: "Castiga más a los productos con muchas etapas de elaboración, penalizando la integración productiva. Es uno de los rasgos del sistema tributario argentino que más consenso técnico crítico genera.", article: "impuestos" },
      { q: "La falta de correspondencia fiscal significa que...", options: ["No se pagan impuestos", "Quien decide el gasto no es quien cobra el impuesto", "Los impuestos son bajos", "Hay evasión"], correct: 1, explain: "Es un problema de incentivos: gastar recursos que otro recaudó no tiene costo político. La coparticipación argentina es el caso paradigmático.", article: "impuestos" },
    ],
  },
  {
    id: "mercado",
    title: "Mercado y competencia",
    description: "Cuatro preguntas sobre coordinación y precios.",
    level: "inicial",
    questions: [
      { q: "¿Qué NO necesita un mercado para funcionar?", options: ["Derechos de propiedad seguros", "Contratos exigibles", "Que todos los participantes se conozcan", "Moneda razonablemente estable"], correct: 2, explain: "Justamente lo notable del mercado es que permite cooperar con desconocidos. Lo que sí necesita es un marco institucional que no aparece solo.", article: "mercado" },
      { q: "El aporte de Hayek sobre los precios fue mostrar que...", options: ["Son injustos", "Resuelven un problema de conocimiento disperso", "Deben fijarse centralmente", "Reflejan el trabajo incorporado"], correct: 1, explain: "Nadie necesita saber POR QUÉ subió algo para reaccionar correctamente: el precio ya resume el motivo. Por eso el cálculo centralizado es tan difícil.", article: "oferta-y-demanda" },
      { q: "«Capitalismo de amigos» describe...", options: ["Un mercado competitivo", "Un sistema donde el éxito depende del favor político", "Una cooperativa", "La economía informal"], correct: 1, explain: "Es lo opuesto a un mercado abierto y es lo que el liberalismo combate. La confusión entre defender el mercado y defender a las empresas establecidas es un error frecuente.", article: "mercado" },
      { q: "Ante una falla de mercado, el argumento liberal sostiene que...", options: ["No existen las fallas de mercado", "Hay que mostrar que la intervención fallará menos", "Siempre hay que intervenir", "Nunca hay que intervenir"], correct: 1, explain: "Es la comparación institucional. Mostrar que el mercado falla no alcanza: hay que considerar los problemas de información e incentivos del regulador. Evitar la «falacia del nirvana».", article: "mercado" },
    ],
  },
  {
    id: "dinero",
    title: "Dinero",
    description: "Cuatro preguntas sobre qué es y por qué vale.",
    level: "inicial",
    questions: [
      { q: "¿Cuál de estas NO es una función del dinero?", options: ["Medio de intercambio", "Unidad de cuenta", "Reserva de valor", "Fuente de riqueza"], correct: 3, explain: "El dinero no es riqueza. Si todos tuviéramos el doble de billetes habría los mismos bienes y el doble de papeles: los precios se duplicarían.", article: "dinero" },
      { q: "¿Qué función del dinero destruye primero la inflación?", options: ["Medio de intercambio", "Unidad de cuenta", "Reserva de valor", "Curso legal"], correct: 2, explain: "Por eso los argentinos ahorran en dólares: no es irracionalidad ni antipatriotismo, es una respuesta a que el peso perdió sistemáticamente esa función.", article: "dinero" },
      { q: "El «curso legal» de una moneda garantiza...", options: ["Su valor", "Que la ley obliga a aceptarla para cancelar deudas", "Su respaldo en oro", "Su estabilidad"], correct: 1, explain: "Puede sostener su uso un tiempo, pero no su valor. La historia monetaria está llena de monedas de curso legal que la gente dejó de usar de hecho.", article: "dinero" },
      { q: "Sin moneda confiable, la principal consecuencia estructural es...", options: ["Que suben los precios", "Que no hay crédito de largo plazo", "Que falta efectivo", "Que baja el consumo"], correct: 1, explain: "Nadie presta a 20 años en una moneda cuyo valor futuro es imposible de estimar. Es la razón por la que el crédito hipotecario argentino fue históricamente muy pequeño.", article: "dinero" },
    ],
  },
  {
    id: "cambiario",
    title: "Dólar y cepo",
    description: "Cuatro preguntas sobre el mercado cambiario argentino.",
    level: "intermedio",
    questions: [
      { q: "Cuando «sube el dólar» en Argentina, en general significa que...", options: ["El dólar se fortaleció en el mundo", "El peso se debilitó", "Hay menos dólares en el mundo", "Subieron las tasas en EE.UU."], correct: 1, explain: "El tipo de cambio es un precio relativo. Que suba persistentemente indica que la gente prefiere no tener pesos, y eso remite a emisión y confianza.", article: "tipo-de-cambio" },
      { q: "El atraso cambiario ocurre cuando...", options: ["Sube el dólar muy rápido", "El tipo nominal se mantiene mientras los precios internos suben", "Bajan las reservas", "Aumenta la brecha"], correct: 1, explain: "El país se encarece en dólares sin que el número del dólar se mueva. Suele terminar con una corrección brusca.", article: "tipo-de-cambio" },
      { q: "Con cepo, ¿qué le conviene hacer a un exportador?", options: ["Adelantar la liquidación", "Demorar la liquidación", "Exportar más", "Nada cambia"], correct: 1, explain: "Si le pagan al oficial y el dólar real vale más, conviene esperar. Entran menos dólares: el control agrava el problema que quería resolver.", article: "cepo-cambiario" },
      { q: "El trilema de Mundell-Fleming establece que no se puede tener a la vez...", options: ["Inflación baja, crecimiento y empleo", "Tipo fijo, libre movilidad de capitales y política monetaria autónoma", "Superávit fiscal, comercial y de reservas", "Deuda baja, gasto alto e impuestos bajos"], correct: 1, explain: "Hay que resignar una de las tres. La convertibilidad resignó la política monetaria; el cepo resigna la libre movilidad de capitales.", article: "tipo-de-cambio" },
    ],
  },
  {
    id: "alberdi",
    title: "Alberdi",
    description: "Cuatro preguntas sobre el autor y su programa.",
    level: "intermedio",
    questions: [
      { q: "Las Bases se publicaron en...", options: ["1810", "1852", "1853", "1854"], correct: 1, explain: "En 1852, meses después de la caída de Rosas. La Constitución se sancionó al año siguiente, el 1º de mayo de 1853, con influencia directa de ese texto.", article: "alberdi" },
      { q: "«Gobernar es poblar» significaba, para Alberdi...", options: ["Traer la mayor cantidad de gente posible", "Traer trabajo, capital y hábitos de industria mediante un marco de derechos", "Aumentar la natalidad", "Fundar ciudades"], correct: 1, explain: "Es la frase más citada y más malinterpretada de la política argentina. Sin derechos que hicieran venir y quedarse a la gente, poblar no producía desarrollo.", article: "alberdi" },
      { q: "El Sistema económico y rentístico sostiene que...", options: ["La economía es independiente de la Constitución", "La Constitución contiene una política económica implícita", "Los impuestos deben ser altos", "El Estado debe planificar"], correct: 1, explain: "Y que las leyes que la contradigan son inconstitucionales aunque estén formalmente sancionadas. Es su aporte más original y el menos leído.", article: "alberdi" },
      { q: "¿Cuál de estas posiciones de Alberdi es menos conocida?", options: ["Su defensa de la inmigración", "Su oposición a la Guerra del Paraguay", "Su influencia sobre la Constitución", "Su defensa de la libertad de comercio"], correct: 1, explain: "Se opuso a la guerra que impulsaban Mitre y Sarmiento, y eso le costó aislamiento político durante años. Es un dato importante: su liberalismo era también antimilitarista.", article: "alberdi" },
    ],
  },
  {
    id: "debate",
    title: "Cómo debatir",
    description: "Cuatro preguntas sobre método y falacias.",
    level: "inicial",
    questions: [
      { q: "Hacer «steelman» de un argumento significa...", options: ["Refutarlo con datos", "Reconstruirlo en su versión más fuerte antes de responder", "Ignorarlo", "Atacar a quien lo sostiene"], correct: 1, explain: "Es lo opuesto al hombre de paja. Una posición que sólo puede sostenerse contra la versión débil del argumento contrario no está sostenida.", article: "como-debatir" },
      { q: "La «falacia del nirvana» consiste en...", options: ["Idealizar el pasado", "Comparar una opción real con una ideal en lugar de con la otra opción real", "Usar datos falsos", "Apelar a la emoción"], correct: 1, explain: "Es la más común en política: comparar el mercado real con un Estado ideal, o el Estado real con un mercado ideal. Ambas versiones son igual de tramposas.", article: "como-debatir" },
      { q: "Que dos variables estén correlacionadas...", options: ["Prueba que una causa la otra", "No prueba causalidad", "Prueba que son independientes", "Siempre es casualidad"], correct: 1, explain: "Puede haber causalidad inversa, casualidad, o una tercera variable que cause ambas. Es el error estadístico más frecuente en la discusión pública.", article: "como-debatir" },
      { q: "Ante un dato que confirma lo que ya pensabas, conviene...", options: ["Compartirlo rápido", "Preguntar de dónde sale, con más rigor que de costumbre", "Aceptarlo", "Buscar más datos iguales"], correct: 1, explain: "El sesgo de confirmación es más fuerte justamente cuando el dato nos gusta. La pregunta «¿de dónde sale?» evita la mayoría de los errores.", article: "como-debatir" },
    ],
  },
];

export const QUIZZES_BY_ID: Record<string, Quiz> = Object.fromEntries(
  QUIZZES.map((q) => [q.id, q]),
);
