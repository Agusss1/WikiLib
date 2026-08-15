import type { Level } from "./schema";

export type Author = {
  id: string;
  name: string;
  years: string;
  country: string;
  current: string;
  /** Una frase: por qué importa. */
  hook: string;
  bio: string[];
  ideas: { title: string; text: string }[];
  works: { title: string; year: string; sourceId?: string; note?: string }[];
  concepts: string[];
  quotes?: { text: string; cite: string; sourceId: string }[];
  influence: string;
  critiques: string[];
  startHere: { what: string; why: string; level: Level };
  /** Para el buscador "¿qué autor leer según lo que te interesa?" */
  interests: string[];
  relatedArticles: string[];
};

export const AUTHORS: Author[] = [
  {
    id: "locke",
    name: "John Locke",
    years: "1632–1704",
    country: "Inglaterra",
    current: "Liberalismo clásico",
    hook: "Formuló la idea de que los derechos existen antes que el gobierno, y que por eso el gobierno tiene límites.",
    bio: [
      "Médico y filósofo inglés, escribió en el contexto de los conflictos entre la Corona y el Parlamento que culminaron en la Revolución Gloriosa de 1688.",
      "Sus Dos tratados sobre el gobierno civil se publicaron en 1689, aunque fueron escritos antes. El primero refuta la defensa del derecho divino de los reyes; el segundo construye la teoría positiva.",
    ],
    ideas: [
      { title: "Estado de naturaleza", text: "Antes del gobierno las personas ya tienen derechos a la vida, la libertad y la propiedad. El gobierno no los crea." },
      { title: "Propiedad por el trabajo", text: "Cada uno es dueño de su persona y de su trabajo; al mezclar el trabajo con algo no apropiado, lo hace propio. Con la condición de que quede suficiente y tan bueno para los demás." },
      { title: "Gobierno por consentimiento", text: "El poder político surge de un acuerdo para resolver la falta de juez imparcial, de ley común y de fuerza para ejecutar." },
      { title: "Derecho de resistencia", text: "Si el gobierno viola sistemáticamente los derechos que debía proteger, pierde su legitimidad." },
    ],
    works: [
      { title: "Dos tratados sobre el gobierno civil", year: "1689", sourceId: "locke-two-treatises", note: "El Segundo Tratado es el texto relevante. El capítulo V, sobre la propiedad, es el más influyente." },
      { title: "Carta sobre la tolerancia", year: "1689", note: "Argumento a favor de separar la autoridad civil de la religiosa." },
      { title: "Ensayo sobre el entendimiento humano", year: "1690", note: "Su obra de teoría del conocimiento, no política." },
    ],
    concepts: ["derechos naturales", "estado de naturaleza", "propiedad", "consentimiento", "tolerancia religiosa"],
    influence:
      "Influyó directamente sobre la Declaración de Independencia de Estados Unidos y, a través de ella, sobre el constitucionalismo del siglo XIX, incluida la tradición argentina.",
    critiques: [
      "Su teoría de la apropiación original tiene dificultades cuando ya no queda «suficiente y tan bueno» para los demás.",
      "Locke tuvo participación en la administración colonial y sus escritos sobre tierras americanas son objeto de crítica histórica seria.",
      "El «consentimiento tácito» al gobierno, por el mero hecho de residir en un territorio, es una noción débil que sus propios sucesores cuestionaron.",
    ],
    startHere: { what: "Segundo Tratado, capítulos II, V y IX", why: "Estado de naturaleza, propiedad y fines del gobierno. Unas cincuenta páginas.", level: "intermedio" },
    interests: ["libertad", "derechos", "propiedad", "estado", "filosofía política"],
    relatedArticles: ["libertad", "propiedad-privada", "estado", "que-es-el-liberalismo"],
  },
  {
    id: "smith",
    name: "Adam Smith",
    years: "1723–1790",
    country: "Escocia",
    current: "Liberalismo clásico / economía política",
    hook: "Explicó cómo millones de personas que no se conocen terminan cooperando sin que nadie lo organice.",
    bio: [
      "Profesor de filosofía moral en Glasgow. Suele presentárselo como economista, pero se consideraba a sí mismo un filósofo moral, y La riqueza de las naciones es sólo una parte de su proyecto.",
      "Su primera obra, La teoría de los sentimientos morales (1759), estudia la simpatía y el juicio moral. Leerla corrige la caricatura del «egoísmo smithiano».",
    ],
    ideas: [
      { title: "División del trabajo", text: "La fuente de la productividad. Su alcance está limitado por la extensión del mercado: cuanto más grande el mercado, más fina la especialización posible." },
      { title: "Interés propio y cooperación", text: "En una sociedad extendida se coopera con desconocidos sin necesidad de benevolencia mutua. Es un logro institucional, no una virtud." },
      { title: "La «mano invisible»", text: "Metáfora que aparece muy pocas veces en su obra. Describe resultados agregados no buscados por nadie, no una providencia que garantice que todo salga bien." },
      { title: "Crítica al mercantilismo y a los empresarios", text: "Smith desconfiaba de los comerciantes establecidos: advirtió que rara vez se reúnen sin conspirar contra el público, y criticó los privilegios y monopolios que solicitaban al Estado." },
    ],
    works: [
      { title: "La teoría de los sentimientos morales", year: "1759", sourceId: "smith-tms" },
      { title: "La riqueza de las naciones", year: "1776", sourceId: "smith-wn", note: "Se cita por libro y capítulo, porque la paginación varía entre ediciones." },
    ],
    concepts: ["división del trabajo", "mano invisible", "extensión del mercado", "valor", "simpatía"],
    quotes: [
      {
        text: "No es de la benevolencia del carnicero, del cervecero o del panadero de donde obtenemos nuestra cena, sino de su consideración por su propio interés.",
        cite: "La riqueza de las naciones, Libro I, capítulo II",
        sourceId: "smith-wn",
      },
    ],
    influence: "Fundó la economía política como disciplina y estableció el marco dentro del cual se discutió durante el siglo siguiente, incluido por sus críticos.",
    critiques: [
      "Su teoría del valor basada en el trabajo fue superada por la revolución marginalista de la década de 1870.",
      "Subestimó el papel del cambio tecnológico en el crecimiento de largo plazo.",
      "Es citado con frecuencia por gente que no lo leyó, para defender posiciones que él criticaba explícitamente.",
    ],
    startHere: { what: "La riqueza de las naciones, Libro I, capítulos I a III", why: "División del trabajo, origen del intercambio y límite del mercado. Treinta páginas que explican casi todo.", level: "intermedio" },
    interests: ["economía", "mercado", "comercio", "productividad"],
    relatedArticles: ["mercado", "division-del-trabajo", "competencia", "capitalismo"],
  },
  {
    id: "hume",
    name: "David Hume",
    years: "1711–1776",
    country: "Escocia",
    current: "Ilustración escocesa",
    hook: "Fundó la defensa liberal de las instituciones sin apelar a derechos naturales: importan porque funcionan.",
    bio: [
      "Filósofo, historiador y ensayista. Amigo de Adam Smith. Su escepticismo religioso le costó cargos académicos.",
      "Su aporte al liberalismo es menos conocido que el de Locke pero igual de importante: ofrece un fundamento alternativo, basado en la utilidad y la convención en lugar de en la naturaleza.",
    ],
    ideas: [
      { title: "Origen convencional de la justicia", text: "Las reglas de propiedad y contrato no derivan de un derecho natural sino que surgen porque resuelven problemas de coordinación y todos ganan con ellas." },
      { title: "Ley de Hume", text: "De lo que «es» no se sigue lo que «debe ser». Un hecho no implica por sí solo una obligación. Es la base de la distinción entre hechos y valores." },
      { title: "Límites de la razón", text: "La razón es esclava de las pasiones. Advertencia contra el racionalismo constructivista que Hayek retomaría dos siglos después." },
      { title: "Orden espontáneo", text: "Muchas instituciones valiosas —lenguaje, moneda, derecho— son resultado de la acción humana pero no del diseño humano." },
    ],
    works: [
      { title: "Tratado de la naturaleza humana", year: "1739–1740", sourceId: "hume-tratado" },
      { title: "Ensayos morales, políticos y literarios", year: "1741–1777", note: "Contiene sus ensayos económicos, incluidos los que anticipan la teoría cuantitativa del dinero." },
      { title: "Investigación sobre los principios de la moral", year: "1751" },
    ],
    concepts: ["convención", "ley de Hume", "orden espontáneo", "escepticismo", "utilidad"],
    influence: "Es el antecedente directo de la línea consecuencialista del liberalismo, que va de Smith a Hayek y Friedman.",
    critiques: [
      "Fundar la justicia en la convención expone a la objeción de que una convención injusta y estable seguiría siendo justificable.",
      "Sus escritos contienen pasajes con juicios racistas que la crítica contemporánea señala y que no deben omitirse.",
    ],
    startHere: { what: "Ensayos políticos y económicos", why: "Más accesibles que el Tratado y directamente relevantes para el liberalismo.", level: "avanzado" },
    interests: ["filosofía", "instituciones", "método", "moneda"],
    relatedArticles: ["instituciones", "como-debatir", "propiedad-privada"],
  },
  {
    id: "bastiat",
    name: "Frédéric Bastiat",
    years: "1801–1850",
    country: "Francia",
    current: "Liberalismo clásico",
    hook: "El mejor divulgador que tuvo el liberalismo. Enseñó a buscar los costos que no se ven.",
    bio: [
      "Economista y político francés, diputado tras la revolución de 1848. Escribió casi toda su obra en los últimos seis años de su vida, mientras se moría de tuberculosis.",
      "Su estilo es irónico, breve y accesible. Es probablemente el mejor punto de entrada a la tradición para alguien que empieza.",
    ],
    ideas: [
      { title: "Lo que se ve y lo que no se ve", text: "Toda política tiene efectos visibles y efectos invisibles. El mal economista ve sólo los primeros. Es el método liberal en una frase." },
      { title: "La parábola de la ventana rota", text: "Romper una ventana da trabajo al vidriero, pero el dueño ya no podrá comprar zapatos. La destrucción no crea riqueza." },
      { title: "El expolio legal", text: "Cuando la ley deja de proteger la propiedad y pasa a transferirla de unos a otros, se convierte en el instrumento del saqueo que debía impedir." },
      { title: "Petición de los fabricantes de velas", text: "Sátira donde los fabricantes piden que se bloquee el sol por competencia desleal. Demuele el proteccionismo por reducción al absurdo." },
    ],
    works: [
      { title: "La Ley", year: "1850", sourceId: "bastiat-ley" },
      { title: "Lo que se ve y lo que no se ve", year: "1850", sourceId: "bastiat-ve" },
      { title: "Sofismas económicos", year: "1845", note: "Contiene la Petición de los fabricantes de velas." },
    ],
    concepts: ["costo de oportunidad", "expolio legal", "proteccionismo", "ventana rota"],
    influence: "Influyó sobre Hazlitt, sobre la divulgación económica del siglo XX y sobre buena parte del liberalismo latinoamericano contemporáneo.",
    critiques: [
      "Su fuerza es retórica antes que analítica: convence pero no siempre demuestra.",
      "Su tratamiento de los casos donde el mercado falla es superficial comparado con la economía posterior.",
    ],
    startHere: { what: "La Ley", why: "Cien páginas, lenguaje directo, sin tecnicismos. El mejor primer libro liberal que existe.", level: "inicial" },
    interests: ["empezar", "economía", "comercio", "método", "argumentos"],
    relatedArticles: ["que-significa-ser-liberal", "division-del-trabajo", "escasez-e-incentivos", "estado"],
  },
  {
    id: "tocqueville",
    name: "Alexis de Tocqueville",
    years: "1805–1859",
    country: "Francia",
    current: "Liberalismo político",
    hook: "Vio antes que nadie que la democracia puede producir una forma nueva y suave de despotismo.",
    bio: [
      "Aristócrata francés que viajó a Estados Unidos en 1831 con el pretexto de estudiar el sistema penitenciario, y escribió el mejor libro sobre la democracia moderna.",
      "Fue diputado y ministro de Asuntos Exteriores durante la Segunda República francesa.",
    ],
    ideas: [
      { title: "Asociaciones voluntarias", text: "Atribuyó el funcionamiento de la democracia estadounidense a la densidad de asociaciones civiles, no principalmente a sus leyes." },
      { title: "Tiranía de la mayoría", text: "El peligro no es sólo legal sino social: la presión de la opinión puede imponer conformidad sin necesidad de ley." },
      { title: "Despotismo blando", text: "Anticipó un poder tutelar, no violento sino protector, que trata a los ciudadanos como menores perpetuos a cambio de seguridad." },
      { title: "Igualdad y libertad", text: "Observó que la pasión por la igualdad es más fuerte que la pasión por la libertad, y que puede llevar a resignar la segunda." },
    ],
    works: [
      { title: "La democracia en América", year: "1835 y 1840", sourceId: "tocqueville-democracia" },
      { title: "El Antiguo Régimen y la Revolución", year: "1856", note: "Sobre cómo la centralización del absolutismo preparó el terreno para la Revolución." },
    ],
    concepts: ["asociacionismo", "tiranía de la mayoría", "despotismo blando", "centralización", "hábitos del corazón"],
    influence: "Es referencia central tanto para liberales como para republicanos y comunitaristas. Su análisis de la sociedad civil atraviesa el pensamiento político contemporáneo.",
    critiques: [
      "Su descripción de Estados Unidos idealiza aspectos de la sociedad que observó y trata la esclavitud y la situación de los pueblos originarios con menos centralidad de la que merecían.",
      "Sus generalizaciones sobre «la democracia» derivan de un solo caso nacional.",
    ],
    startHere: { what: "La democracia en América, tomo II, cuarta parte", why: "Donde describe el despotismo blando. Cincuenta páginas escritas en 1840 que parecen sobre el presente.", level: "intermedio" },
    interests: ["democracia", "sociedad", "cultura", "instituciones"],
    relatedArticles: ["democracia-y-liberalismo", "cultura-liberal", "libertad"],
  },
  {
    id: "mill",
    name: "John Stuart Mill",
    years: "1806–1873",
    country: "Inglaterra",
    current: "Liberalismo clásico y social",
    hook: "Formuló el criterio más citado para decidir cuándo el Estado puede interferir con la libertad de alguien.",
    bio: [
      "Educado por su padre en un programa intelectual extremo desde los tres años, con griego, latín y economía política antes de la adolescencia. A los veinte tuvo una crisis nerviosa que lo llevó a revisar el utilitarismo estricto de su formación.",
      "Fue diputado y defendió el sufragio femenino cuando era una posición marginal. Su obra tardía se acerca a posiciones socialistas en cuestiones económicas, sin abandonar el liberalismo político.",
    ],
    ideas: [
      { title: "Principio del daño", text: "El único fin que justifica interferir con la libertad de un adulto es evitar el daño a terceros. No basta su propio bien." },
      { title: "Libertad de pensamiento y discusión", text: "Aun una opinión falsa debe poder expresarse: silenciarla priva de la oportunidad de corregir un error, o de entender mejor por qué la propia es verdadera." },
      { title: "Individualidad", text: "La diversidad de formas de vida es valiosa en sí misma, porque nadie sabe de antemano qué modo de vivir es el mejor." },
      { title: "Igualdad de las mujeres", text: "En El sometimiento de las mujeres (1869) argumentó que la subordinación legal de un sexo al otro es un obstáculo al progreso humano." },
    ],
    works: [
      { title: "Sobre la libertad", year: "1859", sourceId: "mill-on-liberty" },
      { title: "El utilitarismo", year: "1863" },
      { title: "El sometimiento de las mujeres", year: "1869" },
      { title: "Principios de economía política", year: "1848" },
    ],
    concepts: ["principio del daño", "libertad de expresión", "individualidad", "utilitarismo"],
    quotes: [
      {
        text: "Quien sólo conoce su propio lado de la cuestión, sabe poco de ella.",
        cite: "On Liberty, capítulo II",
        sourceId: "mill-on-liberty",
      },
    ],
    influence: "Sobre la libertad es probablemente el texto liberal más leído del mundo y sigue siendo el punto de partida de toda discusión sobre límites a la libertad.",
    critiques: [
      "El principio del daño es difícil de aplicar porque casi toda acción afecta de algún modo a terceros.",
      "Su fundamento utilitarista implica que las libertades podrían sacrificarse si produjeran mayor utilidad agregada, algo que él intentó evitar sin lograrlo del todo.",
      "Su defensa del gobierno colonial británico en la India, donde trabajó durante décadas, es incompatible con sus propios principios.",
    ],
    startHere: { what: "Sobre la libertad, capítulos I y II", why: "El principio del daño y la defensa de la libertad de expresión. Es corto y sigue siendo actual.", level: "intermedio" },
    interests: ["libertad", "expresión", "filosofía", "democracia"],
    relatedArticles: ["libertad", "cultura-liberal", "como-debatir", "democracia-y-liberalismo"],
  },
  {
    id: "hayek",
    name: "Friedrich A. Hayek",
    years: "1899–1992",
    country: "Austria / Reino Unido",
    current: "Escuela austriaca / liberalismo clásico",
    hook: "Explicó por qué ningún planificador puede reunir el conocimiento que los precios coordinan sin que nadie lo sepa.",
    bio: [
      "Economista y filósofo austriaco, discípulo de Mises. Enseñó en la London School of Economics, en Chicago y en Friburgo.",
      "Recibió el Premio Nobel de Economía en 1974. Su obra abarca teoría del ciclo económico, teoría del conocimiento, filosofía del derecho y psicología teórica.",
    ],
    ideas: [
      { title: "El problema del conocimiento", text: "El conocimiento económico relevante está disperso, es local, cambiante y muchas veces tácito. Ningún planificador puede reunirlo. Los precios lo resumen y transmiten." },
      { title: "Orden espontáneo", text: "Instituciones como el lenguaje, el derecho consuetudinario, la moneda y el mercado son resultado de la acción humana pero no del diseño humano." },
      { title: "Imperio de la ley", text: "La libertad requiere normas generales, abstractas, conocidas de antemano y aplicadas por igual, en oposición a mandatos particulares." },
      { title: "Crítica al constructivismo", text: "El error de creer que las instituciones sociales pueden rediseñarse desde cero según un plan racional." },
    ],
    works: [
      { title: "Camino de servidumbre", year: "1944", sourceId: "hayek-camino", note: "Su libro más leído y también el más malinterpretado." },
      { title: "The Use of Knowledge in Society", year: "1945", sourceId: "hayek-knowledge", note: "Doce páginas. Su aporte más importante." },
      { title: "Los fundamentos de la libertad", year: "1960", sourceId: "hayek-constitution" },
      { title: "Derecho, legislación y libertad", year: "1973–1979" },
    ],
    concepts: ["conocimiento disperso", "orden espontáneo", "imperio de la ley", "constructivismo", "catalaxia"],
    influence: "Su argumento del conocimiento reorientó el debate sobre planificación económica y sigue siendo el aporte teórico más citado del liberalismo del siglo XX.",
    critiques: [
      "Camino de servidumbre predice que la planificación lleva al totalitarismo; las socialdemocracias europeas son el contraejemplo más citado. Hayek matizó luego que se refería a la planificación integral.",
      "Su rechazo del concepto de «justicia social» como carente de sentido es rechazado por buena parte de la filosofía política contemporánea.",
      "Sus declaraciones sobre el régimen chileno de Pinochet en los años 70 y 80 son objeto de crítica severa y difíciles de conciliar con su propia obra.",
    ],
    startHere: { what: "The Use of Knowledge in Society (1945)", why: "Doce páginas que contienen su idea central. Está disponible en línea.", level: "intermedio" },
    interests: ["economía", "conocimiento", "instituciones", "derecho", "estado"],
    relatedArticles: ["mercado", "oferta-y-demanda", "estado-de-derecho", "instituciones", "corrientes-del-liberalismo"],
  },
  {
    id: "mises",
    name: "Ludwig von Mises",
    years: "1881–1973",
    country: "Austria / Estados Unidos",
    current: "Escuela austriaca",
    hook: "Demostró en 1920 que sin propiedad privada no hay precios, y sin precios no hay forma de calcular.",
    bio: [
      "Economista austriaco, figura central de la escuela austriaca. Debió emigrar de Europa en 1940 por su origen judío y su oposición al nazismo.",
      "Enseñó en Viena, Ginebra y Nueva York. Su seminario privado formó a varias generaciones de economistas, entre ellos Hayek.",
    ],
    ideas: [
      { title: "Debate del cálculo económico", text: "Sin propiedad privada de los medios de producción no hay compraventa de esos medios; sin compraventa no hay precios; sin precios no hay manera de comparar la eficiencia de métodos alternativos." },
      { title: "Praxeología", text: "La economía como ciencia deductiva de la acción humana, partiendo del axioma de que las personas actúan con propósito." },
      { title: "Teoría del ciclo económico", text: "La expansión artificial del crédito genera inversiones que no se sostienen y provoca una crisis inevitable de reajuste." },
      { title: "Teoría del dinero", text: "Integró el dinero a la teoría del valor marginal, explicando su poder de compra a partir de la demanda de saldos monetarios." },
    ],
    works: [
      { title: "La teoría del dinero y del crédito", year: "1912" },
      { title: "El socialismo", year: "1922", sourceId: "mises-socialismo" },
      { title: "La acción humana", year: "1949", sourceId: "mises-accion", note: "Su tratado sistemático. Extenso y exigente." },
    ],
    concepts: ["cálculo económico", "praxeología", "ciclo económico", "intervencionismo"],
    influence: "El argumento del cálculo económico es el aporte más duradero. Su influencia sobre el libertarismo contemporáneo, especialmente en Argentina, es enorme.",
    critiques: [
      "El método praxeológico, deductivo y no falsable empíricamente, es rechazado por la mayoría de la profesión económica.",
      "Su posición de que toda intervención necesariamente conduce a más intervención es una predicción categórica que la evidencia no confirma de manera unívoca.",
      "El argumento del cálculo fue respondido por Lange y Lerner con modelos de socialismo de mercado; Hayek reformuló la crítica en términos de conocimiento y no de imposibilidad lógica.",
    ],
    startHere: { what: "El socialismo, parte II", why: "Donde desarrolla el argumento del cálculo. Más accesible que La acción humana.", level: "avanzado" },
    interests: ["economía", "socialismo", "moneda", "método"],
    relatedArticles: ["propiedad-privada", "mercado", "dinero", "corrientes-del-liberalismo"],
  },
  {
    id: "friedman",
    name: "Milton Friedman",
    years: "1912–2006",
    country: "Estados Unidos",
    current: "Monetarismo / Escuela de Chicago",
    hook: "Llevó el liberalismo económico a la discusión pública y estableció el origen monetario de la inflación.",
    bio: [
      "Economista estadounidense, profesor en la Universidad de Chicago. Premio Nobel de Economía en 1976.",
      "Combinó trabajo técnico riguroso con una capacidad de divulgación excepcional: su serie televisiva Free to Choose (1980) llevó estas ideas a millones de personas.",
    ],
    ideas: [
      { title: "Inflación como fenómeno monetario", text: "La inflación sostenida se produce cuando la cantidad de dinero crece más rápido que la producción." },
      { title: "Reglas por sobre discreción", text: "Propuso una regla de crecimiento constante de la cantidad de dinero, para evitar los errores de la política discrecional." },
      { title: "Vouchers educativos", text: "Separar financiamiento de provisión: que el Estado financie y la familia elija la escuela." },
      { title: "Impuesto negativo a la renta", text: "Reemplazar el aparato asistencial por una transferencia automática a quien gana por debajo de un umbral." },
      { title: "Tasa natural de desempleo", text: "Junto con Phelps, mostró que no existe un intercambio permanente entre inflación y desempleo. La predicción se confirmó con la estanflación de los años 70." },
    ],
    works: [
      { title: "Capitalismo y libertad", year: "1962", sourceId: "friedman-capitalismo" },
      { title: "A Monetary History of the United States", year: "1963", sourceId: "friedman-schwartz", note: "Con Anna Schwartz. Su obra técnica principal." },
      { title: "The Counter-Revolution in Monetary Theory", year: "1970", sourceId: "friedman-counter" },
      { title: "Libertad de elegir", year: "1980", sourceId: "friedman-elegir", note: "Con Rose Friedman. El más accesible." },
    ],
    concepts: ["monetarismo", "tasa natural de desempleo", "vouchers", "impuesto negativo", "reglas versus discreción"],
    quotes: [
      {
        text: "La inflación es siempre y en todo lugar un fenómeno monetario, en el sentido de que es y sólo puede ser producida por un aumento más rápido de la cantidad de dinero que de la producción.",
        cite: "The Counter-Revolution in Monetary Theory (1970)",
        sourceId: "friedman-counter",
      },
    ],
    influence: "Transformó la política monetaria mundial. Los bancos centrales con mandato de estabilidad de precios son en buena medida herederos de su programa.",
    critiques: [
      "La regla monetaria estricta fue abandonada en la práctica porque la relación entre agregados monetarios e inflación resultó menos estable de lo previsto.",
      "Su asesoramiento a Chile bajo Pinochet es objeto de crítica severa y de un debate que él nunca resolvió satisfactoriamente.",
      "Su tesis de que la única responsabilidad social de la empresa es aumentar sus ganancias es discutida incluso dentro del liberalismo.",
    ],
    startHere: { what: "Libertad de elegir", why: "Escrito para el público general, con ejemplos concretos. El mejor punto de entrada a la economía liberal aplicada.", level: "inicial" },
    interests: ["economía", "inflación", "moneda", "políticas públicas", "educación"],
    relatedArticles: ["inflacion", "emision-monetaria", "banco-central", "educacion-y-liberalismo", "impuestos"],
  },
  {
    id: "rothbard",
    name: "Murray N. Rothbard",
    years: "1926–1995",
    country: "Estados Unidos",
    current: "Anarcocapitalismo / Escuela austriaca",
    hook: "Llevó el principio de no agresión hasta su conclusión más radical: ningún Estado es legítimo.",
    bio: [
      "Economista e historiador estadounidense, discípulo de Mises. Fundó el anarcocapitalismo como posición sistemática.",
      "Escribió sobre teoría económica, ética, historia económica e historia del pensamiento. Fue una figura polémica dentro del propio movimiento libertario.",
    ],
    ideas: [
      { title: "Principio de no agresión", text: "Es ilegítimo iniciar el uso de la fuerza contra una persona o su propiedad. De ahí deduce todo lo demás." },
      { title: "Autopropiedad", text: "Cada persona es propietaria absoluta de su cuerpo, y por extensión de lo que produce y adquiere voluntariamente." },
      { title: "Impuesto como robo", text: "Si el impuesto es una apropiación sin consentimiento, no hay diferencia moral relevante con el robo." },
      { title: "Justicia y seguridad privadas", text: "Sostuvo que arbitraje y protección pueden proveerse en competencia, sin monopolio estatal." },
    ],
    works: [
      { title: "El hombre, la economía y el Estado", year: "1962" },
      { title: "Hacia una nueva libertad", year: "1973", sourceId: "rothbard-nueva-libertad" },
      { title: "La ética de la libertad", year: "1982", sourceId: "rothbard-etica" },
      { title: "América's Great Depression", year: "1963", note: "Aplicación de la teoría austriaca del ciclo a la crisis de 1929." },
    ],
    concepts: ["principio de no agresión", "autopropiedad", "anarcocapitalismo", "agencias de protección"],
    influence: "Es la referencia intelectual principal del libertarismo contemporáneo, y particularmente influyente en el crecimiento del movimiento libertario argentino.",
    critiques: [
      "No hay evidencia histórica de sociedades grandes y complejas que hayan funcionado sin monopolio de la fuerza de manera sostenida.",
      "Su método deductivo, heredado de Mises, deriva conclusiones políticas fuertes de axiomas que no todos aceptan.",
      "Sus alianzas políticas tácticas de los años 90 con sectores paleoconservadores son criticadas incluso por libertarios.",
    ],
    startHere: { what: "Hacia una nueva libertad", why: "La exposición más directa del anarcocapitalismo, escrita para convencer.", level: "intermedio" },
    interests: ["libertarismo", "estado", "ética", "economía"],
    relatedArticles: ["corrientes-del-liberalismo", "estado", "impuestos"],
  },
  {
    id: "nozick",
    name: "Robert Nozick",
    years: "1938–2002",
    country: "Estados Unidos",
    current: "Libertarismo / minarquismo",
    hook: "Construyó el argumento filosófico más riguroso a favor del Estado mínimo, discutiendo a la vez con anarquistas y con igualitaristas.",
    bio: [
      "Filósofo estadounidense, profesor en Harvard. Anarquía, Estado y utopía (1974) fue escrito en buena medida como respuesta a Teoría de la justicia de su colega John Rawls.",
      "En obras posteriores se apartó de algunas de sus posiciones libertarias, aunque no las abandonó del todo.",
    ],
    ideas: [
      { title: "Teoría de la justicia en las pertenencias", text: "Una distribución es justa si resulta de adquisiciones y transferencias justas, sin importar el patrón que produzca. El proceso, no el resultado." },
      { title: "El argumento de Wilt Chamberlain", text: "Si se parte de una distribución justa y todos eligen voluntariamente pagar para ver jugar a alguien, el resultado es desigual pero nadie fue perjudicado. Mantener el patrón exigiría interferir permanentemente en decisiones voluntarias." },
      { title: "Estado mínimo", text: "Un Estado limitado a protección y cumplimiento de contratos puede surgir de un proceso sin violación de derechos; uno más extenso, no." },
      { title: "Principio de rectificación", text: "Reconoció que su teoría necesita corregir injusticias históricas, y admitió no saber cómo formularlo." },
    ],
    works: [
      { title: "Anarquía, Estado y utopía", year: "1974", sourceId: "nozick-anarquia" },
      { title: "Meditaciones sobre la vida", year: "1989", note: "Donde revisa parte de sus posiciones anteriores." },
    ],
    concepts: ["justicia en las pertenencias", "estado mínimo", "utopía de utopías", "principio de rectificación"],
    influence: "Es el interlocutor filosófico obligado de Rawls y el texto de referencia del minarquismo. Se lo estudia en toda facultad de filosofía política.",
    critiques: [
      "El principio de rectificación queda sin desarrollar, y sin él la teoría convalida distribuciones originadas en despojos históricos.",
      "La cláusula lockeana que acepta es tan débil que casi no restringe nada.",
      "Su punto de partida —derechos individuales como restricciones absolutas— es afirmado más que argumentado.",
    ],
    startHere: { what: "Anarquía, Estado y utopía, parte II", why: "Donde está el argumento de Wilt Chamberlain y la crítica a las teorías pautadas de justicia.", level: "avanzado" },
    interests: ["filosofía", "estado", "justicia", "libertarismo"],
    relatedArticles: ["estado", "corrientes-del-liberalismo", "propiedad-privada"],
  },
  {
    id: "alberdi",
    name: "Juan Bautista Alberdi",
    years: "1810–1884",
    country: "Argentina",
    current: "Liberalismo clásico",
    hook: "Escribió el programa de país sobre el que se construyó la Constitución argentina.",
    bio: [
      "Nació en Tucumán en 1810. Abogado, escritor y diplomático. Pasó buena parte de su vida en el exilio, en Montevideo, Chile y Europa.",
      "Integró la Generación del 37 junto con Echeverría, Sarmiento y Gutiérrez. Publicó las Bases en 1852, meses después de la caída de Rosas.",
      "Se opuso a la Guerra del Paraguay, posición que le costó aislamiento político durante años.",
    ],
    ideas: [
      { title: "Gobernar es poblar", text: "No sólo traer gente: traer trabajo, capital y hábitos de industria. Para eso hacía falta un marco de derechos que los hiciera venir y quedarse." },
      { title: "Derechos civiles para todos los habitantes", text: "Extendió los derechos civiles a los extranjeros sin exigirles naturalización. Es el artículo 20 de la Constitución." },
      { title: "La Constitución como programa económico", text: "En el Sistema económico y rentístico sostiene que la Constitución contiene una política económica implícita, y que las leyes que la contradigan son inconstitucionales." },
      { title: "Límites al poder de imponer", text: "El impuesto excesivo o arbitrario destruye la riqueza que pretende gravar. Anticipó en 1854 el argumento que se popularizaría un siglo después." },
    ],
    works: [
      { title: "Bases y puntos de partida para la organización política de la República Argentina", year: "1852", sourceId: "alberdi-bases" },
      { title: "Sistema económico y rentístico de la Confederación Argentina", year: "1854", sourceId: "alberdi-sistema" },
      { title: "El crimen de la guerra", year: "escrito hacia 1870, publicado póstumamente", note: "Su alegato antibelicista." },
    ],
    concepts: ["gobernar es poblar", "constitución económica", "inmigración", "límites al poder de imponer"],
    influence: "Su influencia sobre la Constitución de 1853 es directa y reconocida. Es el autor liberal argentino más importante y sigue siendo referencia obligada.",
    critiques: [
      "Su preferencia explícita por la inmigración del norte de Europa contiene juicios sobre poblaciones que hoy resultan inaceptables.",
      "Postergó deliberadamente los derechos políticos apostando a que la prosperidad los generaría; el sistema restringido no evolucionó solo y hubo que forzarlo con la Ley Sáenz Peña de 1912.",
      "Es citado con frecuencia por quienes no lo leyeron, para respaldar posiciones que él no sostuvo.",
    ],
    startHere: { what: "Bases, capítulos sobre inmigración y el proyecto de constitución", why: "El núcleo de su programa, y el texto que más influyó sobre la Constitución.", level: "intermedio" },
    interests: ["argentina", "constitución", "instituciones", "historia"],
    relatedArticles: ["alberdi", "constitucion-1853", "liberalismo-en-argentina", "impuestos"],
  },
];

export const AUTHORS_BY_ID: Record<string, Author> = Object.fromEntries(
  AUTHORS.map((a) => [a.id, a]),
);

/** "¿Qué autor leer según lo que te interesa?" */
export const INTEREST_GUIDE: { interest: string; label: string; authors: string[] }[] = [
  { interest: "libertad", label: "Quiero entender qué es la libertad", authors: ["mill", "locke", "hayek"] },
  { interest: "economia", label: "Quiero entender economía", authors: ["bastiat", "smith", "friedman", "hayek", "mises"] },
  { interest: "argentina", label: "Quiero entender Argentina", authors: ["alberdi"] },
  { interest: "estado", label: "Quiero entender el Estado mínimo", authors: ["nozick", "rothbard"] },
  { interest: "democracia", label: "Quiero entender la democracia y sus riesgos", authors: ["tocqueville", "mill"] },
  { interest: "instituciones", label: "Quiero entender por qué unos países prosperan", authors: ["hayek", "hume", "smith"] },
  { interest: "empezar", label: "No sé nada y quiero empezar por algo simple", authors: ["bastiat", "friedman"] },
  { interest: "libertarismo", label: "Quiero entender el libertarismo", authors: ["rothbard", "nozick", "mises"] },
];
