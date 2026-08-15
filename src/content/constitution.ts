/**
 * La Constitución argentina, artículo por artículo.
 *
 * Cada entrada separa tres cosas que la discusión pública mezcla todo el tiempo:
 *   `text`     — lo que dice la norma (verificable, no opinable)
 *   `simple`   — qué significa, explicado como si tuvieras 15 años
 *   `deep`     — interpretación jurídica y doctrina
 *   `liberal`  — lectura liberal, marcada como opinión
 *
 * Esa separación es el criterio editorial de toda la sección.
 */
export type ConstitutionArticle = {
  n: string;
  title: string;
  /** Texto literal o extracto. Si es extracto, se indica con corchetes. */
  text: string;
  /** true si el texto está abreviado. */
  excerpt?: boolean;
  simple: string;
  deep: string[];
  /** Lectura liberal. Se renderiza marcada como interpretación. */
  liberal?: string;
  /** Debates jurídicos abiertos sobre este artículo. */
  debate?: string;
  topics: string[];
  relatedArticles: string[];
};

export const CONSTITUTION: ConstitutionArticle[] = [
  {
    n: "14",
    title: "Derechos civiles",
    text:
      "Todos los habitantes de la Nación gozan de los siguientes derechos conforme a las leyes que reglamenten su ejercicio; a saber: de trabajar y ejercer toda industria lícita; de navegar y comerciar; de peticionar a las autoridades; de entrar, permanecer, transitar y salir del territorio argentino; de publicar sus ideas por la prensa sin censura previa; de usar y disponer de su propiedad; de asociarse con fines útiles; de profesar libremente su culto; de enseñar y aprender.",
    simple:
      "Es la lista de cosas que podés hacer y que nadie te puede prohibir: trabajar, comerciar, moverte por el país, decir lo que pensás sin que te censuren antes, usar tus cosas, juntarte con quien quieras, tener la religión que quieras y enseñar o estudiar. Dice «todos los habitantes», no «todos los ciudadanos»: alcanza también a los extranjeros.",
    deep: [
      "La fórmula «conforme a las leyes que reglamenten su ejercicio» admite reglamentación. Ese es el punto de partida de casi toda la discusión constitucional argentina.",
      "El límite de esa reglamentación está en el artículo 28: no puede alterar el derecho. De la tensión entre ambos surgió la doctrina de la razonabilidad, según la cual debe existir proporción entre el medio elegido y el fin perseguido.",
      "La prohibición de censura previa es específica: no impide la responsabilidad ulterior por lo publicado, pero sí impedir la publicación de antemano.",
    ],
    liberal:
      "Es el corazón liberal del texto. La lectura liberal enfatiza que estos derechos son reconocidos, no otorgados: preexisten a la ley, que sólo reglamenta su ejercicio.",
    debate:
      "Dónde termina reglamentar y empieza suprimir es una discusión permanente, particularmente en materia de legislación de emergencia.",
    topics: ["derechos", "libertad"],
    relatedArticles: ["libertad", "constitucion-1853", "propiedad-privada"],
  },
  {
    n: "14 bis",
    title: "Derechos del trabajador y seguridad social",
    text:
      "El trabajo en sus diversas formas gozará de la protección de las leyes, las que asegurarán al trabajador: condiciones dignas y equitativas de labor; jornada limitada; descanso y vacaciones pagados; retribución justa; salario mínimo vital móvil; igual remuneración por igual tarea; participación en las ganancias de las empresas [...]. El Estado otorgará los beneficios de la seguridad social, que tendrá carácter de integral e irrenunciable.",
    excerpt: true,
    simple:
      "Incorporado en 1957. Establece derechos laborales: jornada limitada, vacaciones pagas, salario mínimo, igual pago por igual tarea, derecho a agremiarse y a huelga. También establece que el Estado debe dar seguridad social.",
    deep: [
      "Fue incorporado por la reforma de 1957, convocada por un gobierno de facto. Su legitimidad de origen fue discutida, aunque su vigencia no se cuestiona en la práctica.",
      "A diferencia del artículo 14, contiene derechos que requieren prestaciones activas del Estado y de terceros, no sólo abstención.",
      "Buena parte de sus cláusulas fueron reglamentadas por ley; otras, como la participación en las ganancias de las empresas, nunca tuvieron desarrollo legislativo efectivo.",
    ],
    liberal:
      "Para algunos liberales, la incorporación de derechos prestacionales tensiona el esquema de derechos negativos de 1853. Para otros juristas, es compatible y responde a una evolución común a casi todas las constituciones del siglo XX. Es un desacuerdo genuino.",
    topics: ["trabajo", "derechos sociales"],
    relatedArticles: ["constitucion-1853", "por-que-hay-pobres-si-el-mercado-funciona"],
  },
  {
    n: "16",
    title: "Igualdad ante la ley",
    text:
      "La Nación Argentina no admite prerrogativas de sangre, ni de nacimiento: no hay en ella fueros personales ni títulos de nobleza. Todos sus habitantes son iguales ante la ley, y admisibles en los empleos sin otra condición que la idoneidad. La igualdad es la base del impuesto y de las cargas públicas.",
    simple:
      "Nadie tiene privilegios por su apellido o por dónde nació. Para un cargo público sólo importa si sos idóneo. Y los impuestos también tienen que ser iguales para todos: no puede haber un régimen especial arbitrario.",
    deep: [
      "«Iguales ante la ley» significa igualdad de trato en igualdad de circunstancias. La jurisprudencia admite distinciones cuando son razonables y guardan relación con el fin de la norma.",
      "La última oración es el fundamento constitucional de la igualdad tributaria, y sostiene tanto la validez de la progresividad (por capacidad contributiva) como el rechazo de exenciones arbitrarias.",
      "El contexto histórico explica la redacción: se escribió contra el sistema de privilegios coloniales y nobiliarios.",
    ],
    liberal:
      "Es el artículo que los liberales invocan contra regímenes de excepción impositiva, promociones sectoriales y privilegios corporativos.",
    topics: ["igualdad", "impuestos"],
    relatedArticles: ["igualdad-ante-la-ley", "impuestos"],
  },
  {
    n: "17",
    title: "Propiedad",
    text:
      "La propiedad es inviolable, y ningún habitante de la Nación puede ser privado de ella, sino en virtud de sentencia fundada en ley. La expropiación por causa de utilidad pública, debe ser calificada por ley y previamente indemnizada. Sólo el Congreso impone las contribuciones que se expresan en el artículo 4º. [...] La confiscación de bienes queda borrada para siempre del Código Penal argentino. Ningún cuerpo armado puede hacer requisiciones, ni exigir auxilios de ninguna especie.",
    excerpt: true,
    simple:
      "Lo tuyo es tuyo. El Estado sólo te lo puede sacar si hay una ley que diga que es por utilidad pública **y** te paga antes. No puede confiscar. Y sólo el Congreso puede crear impuestos: no el Presidente por decreto.",
    deep: [
      "Los tres requisitos para expropiar son acumulativos: ley que declare la utilidad pública, calificación por esa ley, e indemnización **previa**. Falta uno y la expropiación es inconstitucional.",
      "La Corte Suprema desarrolló la doctrina de la **confiscatoriedad**: un tributo puede ser inconstitucional si absorbe una parte sustancial de la renta o del capital.",
      "«Sólo el Congreso impone las contribuciones» es el principio de legalidad tributaria: no hay tributo sin ley. Se complementa con el artículo 99 inciso 3, que prohíbe los decretos de necesidad y urgencia en materia tributaria.",
      "La prohibición de requisiciones por cuerpos armados responde a las prácticas de las guerras civiles del siglo XIX.",
    ],
    liberal:
      "Los liberales suelen invocar el principio de legalidad tributaria de este artículo para objetar la inflación como forma de financiamiento estatal: produce el efecto económico de un tributo sin ley que lo establezca.",
    debate:
      "Qué proporción de la renta o del capital vuelve confiscatorio un impuesto no tiene una regla fija: la Corte lo resolvió caso por caso.",
    topics: ["propiedad", "impuestos"],
    relatedArticles: ["propiedad-privada", "impuestos", "inflacion"],
  },
  {
    n: "18",
    title: "Debido proceso y garantías penales",
    text:
      "Ningún habitante de la Nación puede ser penado sin juicio previo fundado en ley anterior al hecho del proceso, ni juzgado por comisiones especiales, o sacado de los jueces designados por la ley antes del hecho de la causa. Nadie puede ser obligado a declarar contra sí mismo; ni arrestado sino en virtud de orden escrita de autoridad competente. Es inviolable la defensa en juicio de la persona y de los derechos. El domicilio es inviolable, como también la correspondencia epistolar y los papeles privados [...]",
    excerpt: true,
    simple:
      "No te pueden castigar sin un juicio, y la ley que te aplican tiene que existir desde antes de lo que hiciste. No te pueden obligar a declarar contra vos mismo ni detenerte sin orden escrita. Tenés derecho a defenderte. Y no pueden entrar a tu casa ni leer tus cosas sin orden.",
    deep: [
      "Contiene el principio de legalidad penal (no hay delito ni pena sin ley previa) y el de juez natural.",
      "La inviolabilidad del domicilio y de la correspondencia es la base constitucional del derecho a la privacidad, extendido por la jurisprudencia a comunicaciones electrónicas.",
      "El artículo también establece que las cárceles serán sanas y limpias, para seguridad y no para castigo de los detenidos.",
    ],
    liberal:
      "El debido proceso es una garantía liberal clásica: limita el poder punitivo del Estado, que es su expresión más peligrosa.",
    topics: ["justicia", "garantías"],
    relatedArticles: ["estado-de-derecho", "libertad"],
  },
  {
    n: "19",
    title: "Principio de reserva y de legalidad",
    text:
      "Las acciones privadas de los hombres que de ningún modo ofendan al orden y a la moral pública, ni perjudiquen a un tercero, están sólo reservadas a Dios, y exentas de la autoridad de los magistrados. Ningún habitante de la Nación será obligado a hacer lo que no manda la ley, ni privado de lo que ella no prohíbe.",
    simple:
      "Lo que hacés en tu vida privada, si no le hacés daño a nadie, no es asunto del Estado. Y nadie puede obligarte a hacer algo que la ley no exige, ni impedirte algo que la ley no prohíbe.",
    deep: [
      "La primera parte es el **principio de reserva**: define una esfera de autonomía personal que la autoridad no puede alcanzar. Es una de las formulaciones más amplias del constitucionalismo comparado.",
      "La segunda es el **principio de legalidad**: la libertad es la regla y la restricción, la excepción, que debe estar establecida por ley.",
      "Es el fundamento de la jurisprudencia argentina sobre autonomía personal. La Corte lo aplicó, entre otros casos, en «Bazterrica» (1986) y «Arriola» (2009) sobre tenencia de estupefacientes para consumo personal.",
    ],
    liberal:
      "Es la formulación constitucional más cercana al principio del daño de Mill que existe en una constitución de 1853. Los liberales suelen considerarlo el artículo más importante del texto.",
    debate:
      "Qué constituye «orden y moral pública» y qué cuenta como «perjuicio a un tercero» es objeto de discusión permanente, y de ello dependen posiciones sobre drogas, expresión y actividades riesgosas.",
    topics: ["libertad", "autonomía"],
    relatedArticles: ["libertad", "que-es-el-liberalismo", "constitucion-1853"],
  },
  {
    n: "20",
    title: "Derechos de los extranjeros",
    text:
      "Los extranjeros gozan en el territorio de la Nación de todos los derechos civiles del ciudadano; pueden ejercer su industria, comercio y profesión; poseer bienes raíces, comprarlos y enajenarlos; navegar los ríos y costas; ejercer libremente su culto; testar y casarse conforme a las leyes. No están obligados a admitir la ciudadanía, ni a pagar contribuciones forzosas extraordinarias.",
    simple:
      "Un extranjero que vive acá tiene exactamente los mismos derechos civiles que un argentino: trabajar, comprar propiedades, casarse, tener su religión. No está obligado a hacerse ciudadano ni a pagar impuestos especiales por ser extranjero.",
    deep: [
      "Es notablemente amplio para una constitución de 1853 y responde directamente al proyecto inmigratorio de Alberdi.",
      "Distingue derechos **civiles** (plenos para extranjeros) de derechos **políticos** (votar, ser elegido), que sí requieren ciudadanía.",
      "La prohibición de contribuciones forzosas extraordinarias es una garantía específica contra tratos discriminatorios en materia fiscal.",
    ],
    liberal:
      "Es coherente con la idea de que los derechos derivan de la condición de persona y no de la pertenencia nacional. Es el fundamento constitucional de la apertura migratoria argentina.",
    topics: ["extranjeros", "inmigración"],
    relatedArticles: ["alberdi", "igualdad-ante-la-ley", "liberalismo-en-argentina"],
  },
  {
    n: "28",
    title: "Límite a la reglamentación de derechos",
    text:
      "Los principios, garantías y derechos reconocidos en los anteriores artículos, no podrán ser alterados por las leyes que reglamenten su ejercicio.",
    simple:
      "Una sola oración, y es de las más importantes: el Congreso puede reglamentar cómo se ejercen tus derechos, pero no puede vaciarlos de contenido con la excusa de reglamentarlos.",
    deep: [
      "Es la contracara del artículo 14. Sin el 28, la fórmula «conforme a las leyes que reglamenten su ejercicio» permitiría que la ley anulara el derecho.",
      "De acá surge el **control de razonabilidad**: una reglamentación es válida si el medio guarda proporción con el fin; es inválida si desnaturaliza el derecho.",
      "Es una de las herramientas más usadas por la jurisprudencia constitucional argentina para invalidar normas.",
    ],
    liberal:
      "Los liberales lo invocan sistemáticamente contra la legislación de emergencia prolongada, argumentando que una restricción que dura décadas dejó de ser reglamentación.",
    topics: ["derechos", "límites"],
    relatedArticles: ["libertad", "constitucion-1853", "estado-de-derecho"],
  },
  {
    n: "29",
    title: "Prohibición de la suma del poder público",
    text:
      "El Congreso no puede conceder al Ejecutivo nacional, ni las Legislaturas provinciales a los gobernadores de provincia, facultades extraordinarias, ni la suma del poder público, ni otorgarles sumisiones o supremacías por las que la vida, el honor o las fortunas de los argentinos queden a merced de gobiernos o persona alguna. Actos de esta naturaleza llevan consigo una nulidad insanable, y sujetarán a los que los formulen, consientan o firmen, a la responsabilidad y pena de los infames traidores a la patria.",
    simple:
      "Ni el Congreso puede darle todo el poder al Presidente, ni una legislatura provincial a un gobernador. Y si lo hacen, ese acto es nulo y quienes lo firmaron cometen traición a la patria.",
    deep: [
      "Es una cláusula excepcional en el constitucionalismo comparado: prohíbe una decisión **aunque la tome el órgano representativo**.",
      "Responde a la experiencia histórica de las facultades extraordinarias y la suma del poder público otorgadas en el siglo XIX.",
      "La nulidad es «insanable»: no puede convalidarse después ni por consentimiento posterior.",
    ],
    liberal:
      "Es liberalismo puro incrustado en el texto: reconoce que ni siquiera una mayoría legítima puede disponer de todo. Es el artículo que mejor expresa la diferencia entre democracia y liberalismo.",
    topics: ["límites al poder", "división de poderes"],
    relatedArticles: ["estado", "democracia-y-liberalismo", "estado-de-derecho"],
  },
  {
    n: "76",
    title: "Prohibición de la delegación legislativa",
    text:
      "Se prohíbe la delegación legislativa en el Poder Ejecutivo, salvo en materias determinadas de administración o de emergencia pública, con plazo fijado para su ejercicio y dentro de las bases de la delegación que el Congreso establezca.",
    simple:
      "El Congreso no puede pasarle su trabajo de legislar al Presidente. Hay una excepción acotada —temas de administración o emergencia— pero tiene que tener plazo y límites definidos por el Congreso.",
    deep: [
      "Incorporado por la reforma de 1994. Su objetivo declarado fue limitar una práctica que ya existía de hecho.",
      "Los tres requisitos son acumulativos: materia determinada, plazo fijado y bases establecidas por el Congreso.",
      "La discusión práctica gira en torno a qué constituye «emergencia pública» y si una emergencia que se prorroga durante décadas sigue siéndolo.",
    ],
    liberal:
      "Los liberales lo invocan contra las delegaciones amplias y prorrogadas, argumentando que vacían la función legislativa del Congreso.",
    topics: ["división de poderes", "delegación"],
    relatedArticles: ["estado-de-derecho", "estado"],
  },
  {
    n: "99 inc. 3",
    title: "Decretos de necesidad y urgencia",
    text:
      "El Poder Ejecutivo no podrá en ningún caso bajo pena de nulidad absoluta e insanable, emitir disposiciones de carácter legislativo. Solamente cuando circunstancias excepcionales hicieran imposible seguir los trámites ordinarios previstos por esta Constitución para la sanción de las leyes, y no se trate de normas que regulen materia penal, tributaria, electoral o de régimen de los partidos políticos, podrá dictar decretos por razones de necesidad y urgencia [...]",
    excerpt: true,
    simple:
      "El Presidente no puede legislar. La única excepción es cuando pasa algo tan urgente que no se puede esperar al Congreso, y aun así hay cuatro temas absolutamente prohibidos: penal, impuestos, elecciones y partidos políticos.",
    deep: [
      "La regla es la prohibición absoluta, con nulidad insanable. La excepción es de interpretación restrictiva.",
      "La exclusión de la materia tributaria refuerza el principio del artículo 17: no hay tributo sin ley del Congreso.",
      "El procedimiento de control está regulado por ley: los decretos deben ser remitidos a una comisión bicameral permanente.",
      "Una crítica frecuente al régimen de control es que un decreto mantiene vigencia mientras no sea rechazado por **ambas** cámaras.",
    ],
    liberal:
      "El uso extendido de este instrumento por gobiernos de distinto signo es uno de los puntos de crítica institucional más recurrentes desde una perspectiva liberal.",
    debate:
      "Qué constituye una circunstancia excepcional que hace imposible el trámite ordinario es objeto de discusión judicial y política permanente.",
    topics: ["división de poderes", "decretos"],
    relatedArticles: ["estado-de-derecho", "estado", "impuestos"],
  },
  {
    n: "121",
    title: "Poderes no delegados",
    text:
      "Las provincias conservan todo el poder no delegado por esta Constitución al Gobierno federal, y el que expresamente se hayan reservado por pactos especiales al tiempo de su incorporación.",
    simple:
      "Las provincias son anteriores a la Nación y le delegaron ciertos poderes. Todo lo que no delegaron expresamente, sigue siendo de ellas.",
    deep: [
      "Es la base del federalismo argentino y establece una presunción a favor de la competencia provincial.",
      "Por eso educación, salud, seguridad, código procesal y régimen municipal son fundamentalmente provinciales.",
      "Tiene consecuencias prácticas enormes para cualquier análisis de gasto público: comparar sólo el gasto nacional con el de un país unitario es un error de método.",
    ],
    liberal:
      "El federalismo es un mecanismo liberal de límite al poder: lo dispersa territorialmente y permite comparar y elegir entre jurisdicciones.",
    debate:
      "Cuánto federalismo real existe cuando la mayor parte de la recaudación es nacional y se redistribuye por coparticipación es una discusión central de la política argentina.",
    topics: ["federalismo"],
    relatedArticles: ["estado", "impuestos", "instituciones"],
  },
];

export const CONSTITUTION_BY_N: Record<string, ConstitutionArticle> = Object.fromEntries(
  CONSTITUTION.map((a) => [a.n, a]),
);
