import {
  type Article,
  callout,
  compare,
  h,
  ol,
  p,
  quote,
  steps,
  ul,
} from "../schema";

export const vidaReal: Article[] = [
  {
    slug: "por-que-hay-pobres-si-el-mercado-funciona",
    title: "Si el mercado funciona, ¿por qué hay pobres?",
    question: "¿Por qué hay pobreza? ¿Qué propone el liberalismo al respecto?",
    summary:
      "La pregunta más difícil que se le puede hacer a un liberal, y la que más merece una respuesta honesta en lugar de una consigna.",
    category: "debates",
    level: "intermedio",
    topics: ["pobreza", "debates"],
    tags: ["pobreza", "desigualdad", "debate", "argentina"],
    updated: "2026-08-15",
    status: "publicado",

    simple: [
      p(
        "Empecemos por dar vuelta la pregunta, porque así se entiende mejor. Durante casi toda la historia humana **casi todo el mundo fue pobre**. Lo normal era la pobreza; lo raro es la riqueza.",
      ),
      p(
        "Entonces la pregunta interesante no es «¿por qué hay pobres?» sino **«¿por qué algunos dejaron de serlo?»**. Y la respuesta tiene que ver con producir más por hora trabajada: herramientas, máquinas, conocimiento, organización, comercio.",
      ),
      p(
        "Ahora bien, eso no responde la pregunta original, y sería deshonesto pretender que sí. Que la pobreza haya bajado en el mundo no consuela a nadie que hoy no llega a fin de mes. Vamos a la respuesta completa.",
      ),
    ],

    technical: [
      h("Las causas de la pobreza"),
      p(
        "La pobreza tiene causas distintas según de qué tipo se hable, y confundirlas lleva a políticas equivocadas:",
      ),
      ol(
        "**Baja productividad.** Si una hora de trabajo produce poco valor, el salario no puede ser alto de manera sostenible. Es la causa estructural principal.",
        "**Falta de capital humano.** Educación deficiente, salud precaria, ausencia de habilidades demandadas.",
        "**Instituciones que impiden producir.** Barreras de entrada, informalidad forzada, imposibilidad de acceder al crédito por falta de título de propiedad, justicia que no funciona.",
        "**Inestabilidad macroeconómica.** La inflación golpea con más fuerza a quien cobra en moneda local y no puede cubrirse. Ver [[inflacion]].",
        "**Circunstancias individuales.** Enfermedad, discapacidad, edad, cuidado de familiares, mala suerte.",
        "**Discriminación y exclusión.** Barreras que no dependen del esfuerzo ni de la capacidad.",
      ),
      callout(
        "ojo",
        "Por qué la lista importa",
        "Cada causa exige una respuesta distinta. Una transferencia monetaria ayuda con la 5 pero no resuelve la 1. Mejorar la educación ataca la 2 pero tarda una generación. Estabilizar la moneda ataca la 4 y no ayuda a quien no puede trabajar. Cualquiera que ofrezca una sola solución para todo está simplificando.",
      ),
      h("El hecho que suele omitirse en las dos direcciones"),
      p(
        "La proporción de población mundial en pobreza extrema cayó de manera sostenida y muy pronunciada en las últimas décadas, con el mayor descenso concentrado en países que abrieron sus economías y expandieron mercados —notablemente China, India y buena parte del sudeste asiático.",
      ),
      p(
        "Ese hecho está documentado por el Banco Mundial y es uno de los argumentos empíricos más fuertes a favor del crecimiento como herramienta antipobreza. **Y también tiene matices que un liberal honesto no debería omitir**: buena parte del descenso se concentra en un país que no adoptó instituciones liberales en sentido pleno, y las líneas de pobreza extrema son umbrales muy bajos que no capturan la pobreza en países de ingreso medio como Argentina.",
      ),
    ],

    argentina: [
      p(
        "El caso argentino es incómodo para las explicaciones simples de cualquier signo, y por eso vale la pena mirarlo de frente.",
      ),
      p(
        "Argentina no es un país pobre en recursos ni en capital humano: tiene alfabetización alta, universidades, tierra fértil, energía y una población urbanizada. Y sin embargo la pobreza medida por ingresos se mantuvo en niveles altos durante décadas, con oscilaciones ligadas al ciclo económico.",
      ),
      p(
        "Los factores que la mayoría de los análisis técnicos —de distintas orientaciones— identifican:",
      ),
      ul(
        "**Estancamiento de la productividad** durante décadas.",
        "**Inflación crónica**, que erosiona salarios reales e impide el ahorro de los hogares de menores ingresos.",
        "**Alta informalidad laboral**, que deja a una parte grande de los trabajadores fuera de la protección y del crédito.",
        "**Baja inversión** por inestabilidad de reglas.",
        "**Deterioro de la calidad educativa**, que reduce las oportunidades de la generación siguiente.",
      ),
      callout(
        "dato",
        "Cómo mirar los datos de pobreza",
        "El INDEC publica la incidencia de la pobreza e indigencia a partir de la Encuesta Permanente de Hogares, con periodicidad semestral y metodología de línea de ingresos. Es importante saber que se mide por ingresos y no por condiciones de vida: son enfoques distintos que dan resultados distintos, y ninguno es «el verdadero». Consultar siempre la serie oficial y su nota metodológica.",
      ),
    ],

    liberalArgument: [
      p("La posición liberal, formulada sin consignas, tiene tres partes:"),
      steps(
        {
          title: "1. La pobreza se resuelve produciendo, no repartiendo",
          text: "Redistribuir lo existente puede aliviar, pero el ingreso disponible por persona sólo sube de manera sostenida si sube la productividad. Ningún país salió de la pobreza redistribuyendo.",
        },
        {
          title: "2. Muchas barreras las pone el propio Estado",
          text: "Costos de registrar un trabajador, trámites para abrir un comercio, imposibilidad de usar la vivienda como garantía por falta de título, inflación que destruye el ahorro. Removerlas no cuesta dinero fiscal.",
        },
        {
          title: "3. Asistir a quien no puede trabajar es compatible con el liberalismo",
          text: "Salvo en la versión anarcocapitalista, la mayoría de las corrientes acepta una red de contención. La discusión es sobre su forma: transferencias directas antes que subsidios generalizados o controles de precios.",
        },
      ),
      p(
        "Sobre el instrumento, hay una preferencia bastante compartida entre economistas liberales: **transferir dinero antes que intervenir precios**. Un control de precios distorsiona toda la economía para ayudar a algunos; una transferencia focalizada ayuda a quien lo necesita sin romper las señales del mercado. Friedman propuso el impuesto negativo a la renta con esta lógica.",
      ),
    ],

    critiques: [
      {
        objection:
          "Decir «que crezca la economía» no le sirve a alguien que hoy no come. El crecimiento tarda años y la gente tiene hambre ahora.",
        response: [
          p(
            "Es una objeción justa y la respuesta liberal seria no la esquiva: por eso la mayoría de las corrientes acepta asistencia inmediata. Crecimiento y asistencia no son alternativas excluyentes.",
          ),
          p(
            "Lo que el liberalismo sí sostiene es que la asistencia no puede ser la estrategia de salida, porque sin crecimiento la base para financiarla se achica año a año. Argentina ilustra el punto: décadas de programas sociales crecientes sin reducción sostenida de la pobreza.",
          ),
        ],
      },
      {
        objection:
          "El derrame no existe. Hubo crecimiento en muchos períodos sin que la pobreza bajara proporcionalmente.",
        response: [
          p(
            "La observación es correcta y conviene conceder que la versión ingenua del «derrame» no se sostiene empíricamente. El crecimiento no reduce la pobreza automáticamente ni en la misma proporción.",
          ),
          p(
            "La formulación defendible es más modesta: el crecimiento es **condición necesaria pero no suficiente**. Sin crecimiento la pobreza no baja de manera sostenida; con crecimiento puede bajar o no, según cómo se distribuya el aumento de productividad y si hay acceso a educación, crédito y empleo formal.",
          ),
          p(
            "Presentar el crecimiento como suficiente es un error que debilita el argumento liberal frente a la evidencia.",
          ),
        ],
        unresolved: true,
      },
      {
        objection:
          "La pobreza no es sólo falta de ingresos: es falta de acceso a salud, educación, vivienda digna y participación. Reducir todo a productividad es empobrecer el problema.",
        from: "Enfoque de capacidades, Amartya Sen",
        response: [
          p(
            "Es una crítica potente y viene de dentro de la tradición liberal amplia. Sen sostiene que el desarrollo debe medirse por las libertades reales que las personas tienen para elegir la vida que valoran.",
          ),
          p(
            "Muchos liberales contemporáneos aceptan el marco y discuten el instrumento: si esas capacidades se generan mejor mediante provisión estatal directa o mediante financiamiento público con provisión en competencia.",
          ),
        ],
        unresolved: true,
      },
    ],

    openDebate: [
      ul(
        "Renta básica universal versus transferencias focalizadas versus impuesto negativo a la renta.",
        "Si la asistencia debe ser condicionada a contraprestaciones y de qué tipo.",
        "Cómo evitar que un programa social genere desincentivos a la formalización laboral.",
        "Cuánto de la pobreza argentina es macroeconómica y cuánto estructural.",
      ),
    ],

    uncertainty:
      "La relación entre crecimiento y reducción de pobreza está bien documentada en términos generales, pero su magnitud varía mucho entre países y períodos. Las afirmaciones categóricas en cualquier dirección no están respaldadas por la evidencia.",

    keyIdeas: [
      "La pregunta útil es por qué algunos dejaron de ser pobres, no por qué hay pobres.",
      "La pobreza tiene causas distintas y cada una exige una respuesta distinta.",
      "El crecimiento es condición necesaria pero no suficiente: la versión ingenua del derrame no se sostiene.",
      "Casi todas las corrientes liberales aceptan una red de contención; discuten su forma.",
    ],
    related: ["capitalismo", "mercado", "instituciones", "inflacion", "impuestos", "division-del-trabajo"],
    glossary: ["pobreza", "productividad", "impuesto-negativo", "informalidad", "capacidades"],
    sources: ["banco-mundial", "indec", "sen-desarrollo", "friedman-capitalismo", "acemoglu-robinson", "rawls-justicia"],
    furtherReading: [
      {
        title: "Desarrollo y libertad",
        author: "Amartya Sen",
        why: "La mejor crítica al enfoque puramente económico de la pobreza, sin abandonar el marco liberal.",
        sourceId: "sen-desarrollo",
        level: "avanzado",
      },
      {
        title: "Capitalismo y libertad, capítulo XII",
        author: "Milton Friedman",
        why: "Donde propone el impuesto negativo a la renta como alternativa al aparato asistencial.",
        sourceId: "friedman-capitalismo",
        level: "intermedio",
      },
    ],
  },

  {
    slug: "como-debatir",
    title: "Cómo debatir bien",
    question: "¿Cómo se discute en serio? ¿Cómo distingo un argumento bueno de uno malo?",
    summary:
      "Herramientas para pensar y discutir: distinguir hechos de opiniones, detectar falacias, construir el mejor argumento del otro y saber cuándo la evidencia obliga a cambiar de opinión.",
    category: "debates",
    level: "inicial",
    topics: ["método", "pensamiento crítico"],
    tags: ["debate", "falacias", "método", "pensamiento crítico"],
    updated: "2026-08-15",
    status: "publicado",

    simple: [
      p(
        "Discutir bien no es ganar. Es entender mejor el problema al final de la conversación que al principio —incluso si eso significa descubrir que estabas equivocado.",
      ),
      p("Hay tres cosas que cambian por completo la calidad de una discusión:"),
      steps(
        {
          title: "Entender antes de responder",
          text: "Si no podés explicar la posición del otro de manera que él diga «sí, eso es lo que pienso», todavía no estás discutiendo con su posición sino con tu versión de ella.",
        },
        {
          title: "Separar hechos de valores",
          text: "«La inflación fue del X%» es un hecho verificable. «Ese nivel es inaceptable» es un juicio de valor. Mezclarlos hace imposible avanzar.",
        },
        {
          title: "Decir qué te haría cambiar de opinión",
          text: "Si no existe ningún dato que pudiera hacerte cambiar de posición, no estás sosteniendo una posición sobre el mundo: estás sosteniendo una identidad.",
        },
      ),
    ],

    technical: [
      h("El steelman"),
      p(
        "El *hombre de paja* (straw man) consiste en atacar una versión debilitada del argumento contrario. El *hombre de acero* (steelman) es lo opuesto: reconstruir la posición del otro en su versión **más fuerte**, incluso mejor de como él la formuló, y recién entonces responderla.",
      ),
      p(
        "Es el criterio editorial de este sitio: en la sección de críticas de cada artículo, las objeciones se escriben en su mejor versión, no en la más fácil de refutar. Una posición que sólo puede sostenerse contra su versión débil no está sostenida.",
      ),
      h("Falacias frecuentes"),
      ul(
        "**Ad hominem** — atacar a la persona en lugar del argumento. «Eso lo decís porque sos rico» no responde nada.",
        "**Falso dilema** — presentar dos opciones como si fueran las únicas. «O mercado libre o comunismo».",
        "**Pendiente resbaladiza** — afirmar que A lleva inevitablemente a Z sin mostrar los pasos.",
        "**Apelación a la autoridad** — «lo dijo X» no es un argumento, aunque X sepa mucho. La autoridad puede orientar, no demostrar.",
        "**Generalización apresurada** — sacar conclusiones de pocos casos.",
        "**Falacia del nirvana** — comparar una opción real con una ideal en lugar de con la otra opción real. Es la más común en política: el mercado real contra el Estado ideal, o al revés.",
        "**Falacia de la ventana rota** — contar los beneficios visibles de una política e ignorar los costos no visibles. Ver [[bastiat]].",
        "**Petición de principio** — dar por supuesto lo que se quiere probar.",
      ),
      h("Estadística: cuatro trampas"),
      ol(
        "**Correlación no es causalidad.** Dos cosas pueden moverse juntas por casualidad, por causalidad inversa o por una tercera variable que las causa a ambas.",
        "**Sesgo de selección.** Si la muestra no es representativa, el resultado no dice nada del total. Estudiar sólo a las empresas que sobrevivieron da una imagen falsa del riesgo de emprender.",
        "**Promedio versus mediana.** El promedio se distorsiona con valores extremos. En distribuciones de ingreso, la mediana suele informar mejor.",
        "**Base de comparación.** «Aumentó 100%» no dice nada sin saber desde qué nivel, ni si el período elegido es representativo o fue elegido para que dé ese resultado.",
      ),
      h("Cómo evaluar una fuente"),
      p("En orden de preferencia, y siempre prefiriendo el original sobre quien lo comenta:"),
      ol(
        "La **fuente primaria**: la norma, el documento, la serie estadística.",
        "El **organismo oficial** que produce el dato.",
        "El **paper académico** con revisión por pares.",
        "El **libro** de un autor reconocido en la materia.",
        "El **medio periodístico**, que en el mejor caso reporta alguna de las anteriores.",
      ),
      callout(
        "ojo",
        "La pregunta que evita el 90% de los errores",
        "«¿De dónde sale ese dato?» Si la respuesta es un gráfico sin fuente, una captura de pantalla o «lo leí en algún lado», el dato no existe hasta que aparezca su origen. Esto vale también, y sobre todo, para los datos que confirman lo que ya pensabas.",
      ),
    ],

    argentina: [
      p("Cuatro discusiones argentinas donde estas herramientas cambian el resultado:"),
      compare(
        {
          title: "Discusión mal planteada",
          items: [
            "«La inflación es culpa de los empresarios.»",
            "«En los 90 se destruyó todo.»",
            "«Con el peronismo se vivía mejor.»",
            "«El Estado no sirve para nada.»",
          ],
        },
        {
          title: "La misma discusión, bien planteada",
          items: [
            "¿Qué mecanismo concreto hace que remarquen más acá que en otros países? ¿Qué predice esa hipótesis que podríamos verificar?",
            "¿Qué indicadores, en qué años, comparados contra qué escenario alternativo?",
            "¿Qué variable, en qué período, medida cómo? ¿El período elegido es representativo?",
            "¿Qué función específica, comparada contra qué alternativa concreta y con qué evidencia?",
          ],
        },
      ),
      callout(
        "dato",
        "Un ejercicio útil",
        "Antes de discutir un tema argentino, escribí en una hoja: (1) qué dato me haría cambiar de opinión, y (2) cuál es el mejor argumento del otro lado. Si no podés completar las dos, todavía no estudiaste el tema lo suficiente para discutirlo.",
      ),
    ],

    liberalArgument: [
      p(
        "Hay una razón por la que estas herramientas son parte del liberalismo y no un agregado. Si se sostiene que nadie tiene el conocimiento suficiente para planificar la vida de los demás, esa modestia epistémica **también se aplica a uno mismo**.",
      ),
      p(
        "Mill formuló el argumento en *Sobre la libertad*: la razón principal para tolerar opiniones falsas es que la opinión propia sólo se sostiene racionalmente si sobrevive al contraste con la mejor objeción disponible. Una creencia que nunca fue discutida se sostiene como prejuicio, aunque sea verdadera.",
      ),
      quote(
        "Quien sólo conoce su propio lado de la cuestión, sabe poco de ella.",
        "John Stuart Mill, On Liberty, capítulo II",
        "mill-on-liberty",
      ),
    ],

    critiques: [
      {
        objection:
          "Pedir «debatir con datos» suele ser una forma de bloquear reclamos legítimos de gente que no tiene acceso a papers ni tiempo para estudiar econometría.",
        response: [
          p(
            "La objeción es válida contra un uso concreto y frecuente: exigir credenciales técnicas para descalificar una experiencia vivida.",
          ),
          p(
            "La distinción que conviene sostener: la experiencia es evidencia legítima sobre **qué está pasando**; no es suficiente para determinar **por qué** pasa ni **qué lo resolvería**. Ambas cosas importan y ninguna reemplaza a la otra.",
          ),
        ],
      },
    ],

    keyIdeas: [
      "Steelman: responder a la mejor versión del argumento contrario, no a la más débil.",
      "Separar hechos verificables de juicios de valor.",
      "Si nada podría hacerte cambiar de opinión, no es una posición sobre el mundo.",
      "Siempre preguntar de dónde sale el dato, sobre todo cuando confirma lo que ya pensabas.",
    ],
    related: ["que-significa-ser-liberal", "instituciones", "por-que-hay-pobres-si-el-mercado-funciona", "cultura-liberal"],
    glossary: ["steelman", "falacia", "correlacion-causalidad", "sesgo-de-seleccion", "falacia-del-nirvana"],
    sources: ["mill-on-liberty", "bastiat-ve", "hazlitt-leccion", "hayek-knowledge"],
    furtherReading: [
      {
        title: "Sobre la libertad, capítulo II",
        author: "John Stuart Mill",
        why: "«De la libertad de pensamiento y discusión». La mejor defensa que existe de escuchar al que piensa distinto.",
        sourceId: "mill-on-liberty",
        level: "intermedio",
      },
    ],
  },

  {
    slug: "cultura-liberal",
    title: "¿Cómo es vivir una cultura de la libertad?",
    question: "¿Qué significa el liberalismo más allá de la política?",
    summary:
      "Hábitos y disposiciones que hacen posible una sociedad libre: autonomía, responsabilidad, curiosidad, tolerancia al desacuerdo y respeto por proyectos de vida distintos del propio.",
    category: "cultura",
    level: "inicial",
    topics: ["cultura liberal", "ética"],
    tags: ["cultura", "tolerancia", "pluralismo", "autonomía"],
    updated: "2026-08-15",
    status: "publicado",

    simple: [
      p(
        "El liberalismo no es sólo una posición sobre impuestos. Es también una manera de vivir con otros que piensan distinto, y eso se juega en cosas cotidianas mucho antes que en una elección.",
      ),
      p("Algunas disposiciones que la tradición liberal valora:"),
      ul(
        "**Autonomía** — decidir tu vida vos, y aceptar que otros decidan la suya aunque te parezca un error.",
        "**Responsabilidad** — hacerte cargo de lo que está bajo tu control.",
        "**Curiosidad** — preferir entender antes que tener razón.",
        "**Tolerancia al desacuerdo** — poder ser amigo de alguien que vota distinto.",
        "**Pluralismo** — asumir que no hay una única forma correcta de vivir bien.",
        "**Cooperación voluntaria** — resolver cosas de común acuerdo antes que exigiendo que alguien obligue.",
      ),
      callout(
        "ojo",
        "Lo que esto no es",
        "No es un manual de cómo tiene que vivir un liberal. Sería contradictorio: el pluralismo implica que hay muchas formas válidas de vivir. Es una descripción de qué hábitos hacen posible convivir sin imponerse.",
      ),
    ],

    technical: [
      h("Por qué la cultura importa tanto como las leyes"),
      p(
        "Una constitución liberal en una sociedad que no tolera el desacuerdo no funciona. Las instituciones formales dependen de instituciones informales que las sostienen: expectativas compartidas, confianza, costumbre de cumplir la palabra. Ver [[instituciones]].",
      ),
      p(
        "Tocqueville fue quien más insistió en este punto. Al observar Estados Unidos en la década de 1830, atribuyó el funcionamiento de la democracia no principalmente a sus leyes sino a lo que llamó «hábitos del corazón»: la densidad de asociaciones voluntarias, la costumbre de resolver problemas localmente, la participación en la vida comunitaria.",
      ),
      h("Tolerancia: qué es y qué no"),
      p(
        "Tolerar no es aprobar ni ser indiferente. Es precisamente lo contrario: sólo se tolera aquello con lo que se está en desacuerdo. Si algo te da igual, no lo estás tolerando.",
      ),
      p(
        "Esto tiene una consecuencia práctica: la tolerancia liberal es compatible con criticar duramente una idea. Lo que excluye es **impedirla por la fuerza**. Se puede decir que alguien está profundamente equivocado y defender a la vez su derecho a estarlo.",
      ),
      h("Pluralismo y el problema del conflicto de valores"),
      p(
        "Isaiah Berlin sostuvo que los valores humanos son múltiples y **genuinamente incompatibles** entre sí: libertad e igualdad, justicia y misericordia, seguridad y aventura. No hay una jerarquía única que los ordene, y elegir uno significa sacrificar algo del otro.",
      ),
      p(
        "Si eso es cierto, el proyecto de organizar la sociedad alrededor de un único ideal de vida buena no es sólo difícil: es imposible sin coerción. El liberalismo saca de ahí una conclusión práctica: en lugar de acordar sobre los fines, acordar sobre **las reglas** que permiten a cada uno perseguir los suyos.",
      ),
      h("Libertad de expresión"),
      p(
        "El argumento liberal a favor no es que todas las opiniones valgan lo mismo. Es que **nadie puede ser el árbitro confiable de cuáles son las verdaderas**, porque quien tenga ese poder lo va a usar para proteger sus propias creencias.",
      ),
      p("Los tres argumentos de Mill:"),
      ol(
        "Si la opinión silenciada es verdadera, se pierde la oportunidad de corregir un error.",
        "Si es falsa, se pierde la comprensión más viva de por qué la propia es verdadera.",
        "Lo más frecuente: cada posición contiene parte de la verdad, y sólo el choque entre ellas la completa.",
      ),
    ],

    argentina: [
      p(
        "La discusión pública argentina tiene un rasgo que dificulta esta cultura: la política tiende a organizarse en identidades cerradas donde la posición sobre un tema predice la posición sobre todos los demás.",
      ),
      p(
        "Cuando eso pasa, discutir un tema concreto se vuelve imposible: cualquier acuerdo parcial se percibe como una traición al bando. Y una sociedad donde no se puede acordar en nada puntual no puede construir instituciones estables, porque toda regla se vuelve reversible con el próximo cambio de gobierno.",
      ),
      callout(
        "debate",
        "Una autocrítica pertinente",
        "El liberalismo argentino contemporáneo no es inmune a esto. Buena parte del crecimiento reciente ocurrió en redes sociales, cuyo diseño premia la confrontación y la pertenencia identitaria por encima del matiz. Una comunidad liberal que reproduce esa lógica contradice en la práctica lo que sostiene en la teoría.",
      ),
      p(
        "Este sitio existe en parte por eso: la sección de críticas de cada artículo y el compromiso de presentar objeciones en su versión más fuerte son un intento deliberado de no ser una cámara de eco. Ver [[como-debatir]].",
      ),
    ],

    critiques: [
      {
        objection:
          "La «tolerancia liberal» es tolerante hasta que aparece algo que amenaza sus intereses. Y además exige neutralidad, que es imposible: toda cultura transmite valores.",
        response: [
          p(
            "La segunda parte es correcta y muchos liberales contemporáneos la aceptan: el liberalismo **no es neutral**. Presupone que la autonomía individual es valiosa, y esa es una posición sustantiva que no todas las culturas comparten.",
          ),
          p(
            "La formulación más honesta no es «el liberalismo no impone valores» sino «impone menos, y los que impone son los mínimos necesarios para que convivan personas que discrepan sobre el resto».",
          ),
          p(
            "Sobre la primera parte: la acusación de tolerancia selectiva es empíricamente verificable caso por caso, y en varios casos históricos tuvo razón.",
          ),
        ],
        unresolved: true,
      },
      {
        objection:
          "La paradoja de la tolerancia: si se tolera a los intolerantes, terminan destruyendo la sociedad tolerante.",
        from: "Karl Popper",
        response: [
          p(
            "Popper formuló la paradoja con un matiz que suele omitirse al citarla: sostuvo que no se debe suprimir la expresión de doctrinas intolerantes mientras puedan ser combatidas con argumentos y mantenidas a raya por la opinión pública, y que la supresión sólo se justifica cuando esas doctrinas rechazan el debate racional y responden con la violencia.",
          ),
          p(
            "La posición liberal estándar está cerca de eso: el límite no es la opinión sino la acción —la incitación concreta a la violencia—, porque un criterio basado en el contenido de las ideas requiere que alguien decida cuáles son inaceptables, y ese poder es exactamente el peligro.",
          ),
        ],
        unresolved: true,
      },
    ],

    keyIdeas: [
      "Las instituciones formales dependen de hábitos informales que las sostienen.",
      "Tolerar no es aprobar: sólo se tolera aquello con lo que se está en desacuerdo.",
      "Si los valores son múltiples e incompatibles, hay que acordar reglas y no fines.",
      "El liberalismo no es neutral: presupone que la autonomía vale. Conviene decirlo.",
    ],
    related: ["libertad", "responsabilidad-individual", "como-debatir", "democracia-y-liberalismo", "que-es-el-liberalismo"],
    glossary: ["tolerancia", "pluralismo", "autonomia", "sociedad-civil"],
    sources: ["tocqueville-democracia", "mill-on-liberty", "hayek-constitution", "smith-tms"],
    furtherReading: [
      {
        title: "La democracia en América",
        author: "Alexis de Tocqueville",
        why: "Sobre las asociaciones voluntarias y los hábitos que sostienen una sociedad libre.",
        sourceId: "tocqueville-democracia",
        level: "intermedio",
      },
      {
        title: "La teoría de los sentimientos morales",
        author: "Adam Smith",
        why: "El otro libro de Smith: sobre simpatía, empatía y el «espectador imparcial». Corrige la caricatura del egoísmo.",
        sourceId: "smith-tms",
        level: "avanzado",
      },
    ],
  },

  {
    slug: "como-piensa-un-liberal-la-tecnologia",
    title: "Tecnología, plataformas e inteligencia artificial",
    question: "¿Cómo piensa un liberal la tecnología y la IA?",
    summary:
      "Un terreno donde los liberales están genuinamente divididos: efectos de red, moderación de contenidos, propiedad de los datos y regulación de la inteligencia artificial no tienen una respuesta liberal única.",
    category: "vida-real",
    level: "intermedio",
    topics: ["tecnología", "vida real"],
    tags: ["tecnología", "IA", "plataformas", "regulación"],
    updated: "2026-08-15",
    status: "publicado",

    simple: [
      p(
        "La primera reacción liberal ante una tecnología nueva suele ser: **dejala crecer y mirá qué pasa**. No porque toda innovación sea buena, sino porque nadie —ni la empresa, ni el regulador— sabe de antemano para qué va a servir.",
      ),
      p(
        "El argumento es histórico. Casi todas las tecnologías importantes fueron mal pronosticadas: se prohibieron, se subestimaron o se les temió por razones que resultaron equivocadas. Regular antes de entender suele congelar el error del momento.",
      ),
      callout(
        "ojo",
        "Pero acá el liberalismo no habla con una sola voz",
        "Este es de los temas donde las corrientes discrepan más. Y hay razones buenas de ambos lados, no sólo pereza intelectual.",
      ),
    ],

    technical: [
      h("El problema de las plataformas"),
      p(
        "Los **efectos de red** hacen que un servicio valga más cuanto más gente lo usa. Eso genera una tendencia a la concentración que no depende de que la empresa haga algo indebido: es una propiedad del bien.",
      ),
      compare(
        {
          title: "Posición liberal escéptica de intervenir",
          items: [
            "Los mercados digitales siguen siendo disputables: MySpace, Yahoo, Nokia, Internet Explorer dominaron y cayeron.",
            "El costo de cambiar de plataforma es bajo comparado con industrias tradicionales.",
            "La regulación antimonopolio suele proteger competidores, no consumidores.",
            "El regulador no tiene el conocimiento para anticipar dónde estará el mercado en cinco años.",
          ],
        },
        {
          title: "Posición liberal abierta a intervenir",
          items: [
            "Los efectos de red combinados con datos acumulados crean barreras cualitativamente nuevas.",
            "Cuando la plataforma es el mercado y también compite dentro de él, hay conflicto de interés estructural.",
            "La portabilidad de datos y la interoperabilidad obligatoria reducen barreras sin fijar precios.",
            "Es una posición ordoliberal: intervenir sobre las reglas, no sobre los resultados.",
          ],
        },
      ),
      h("Moderación de contenidos"),
      p(
        "El dilema es genuino. Una plataforma privada tiene derecho a decidir qué se publica en su servicio: es su propiedad. Pero cuando concentra buena parte del debate público, esa decisión privada tiene efectos que se parecen a la censura.",
      ),
      p("Las tres posiciones liberales principales:"),
      ol(
        "**Propiedad plena.** Es un servicio privado; si no te gusta, usá otro o creá el tuyo. Cualquier obligación estatal sobre qué debe publicar es una violación de la libertad de asociación.",
        "**Foro público de hecho.** Cuando una plataforma alcanza cierta escala, debería regir un estándar más cercano al de la libertad de expresión, porque es donde ocurre el debate.",
        "**Salida por competencia.** El problema no es la moderación sino la falta de alternativas. La respuesta correcta es interoperabilidad y portabilidad, no reglas de contenido.",
      ),
      h("Inteligencia artificial"),
      p("Los cuatro problemas que la discusión liberal enfrenta, y ninguno tiene respuesta consensuada:"),
      ul(
        "**Responsabilidad.** Si un sistema autónomo causa un daño, ¿quién responde? El marco liberal de responsabilidad supone un agente identificable, y acá la cadena es difusa.",
        "**Propiedad intelectual.** El entrenamiento con obras protegidas reabre una discusión donde los liberales ya estaban divididos. Ver [[propiedad-privada]].",
        "**Regulación ex ante versus ex post.** ¿Autorizar previamente los modelos, o dejar operar y responsabilizar por los daños? La tradición liberal prefiere lo segundo, pero eso supone que el daño sea reversible y atribuible.",
        "**Concentración.** Entrenar modelos de frontera requiere capital y cómputo que muy pocos actores tienen. Si es una barrera estructural, el mercado no se corrige solo.",
      ),
      callout(
        "incertidumbre",
        "Acá hay incertidumbre genuina",
        "La IA es lo bastante nueva como para que las posiciones se estén formando. Cualquiera que afirme conocer «la posición liberal sobre la IA» está proyectando su propia posición sobre una tradición que todavía está discutiendo el tema.",
      ),
      h("El principio precautorio y su problema"),
      p(
        "El principio precautorio sostiene que ante un riesgo grave no hay que esperar certeza científica para actuar. Los liberales suelen objetarlo por una razón específica: **es asimétrico**. Considera los riesgos de actuar pero no los de no actuar.",
      ),
      p(
        "Retrasar una tecnología médica también tiene víctimas; sólo que son estadísticas y no identificables. Es una aplicación directa de la lógica de [[bastiat]]: lo que se ve y lo que no se ve.",
      ),
    ],

    argentina: [
      p(
        "Para Argentina la discusión tiene un ángulo propio. El sector de servicios basados en conocimiento es uno de los pocos donde el país compite internacionalmente sin necesitar protección, exportando servicios de software y profesionales.",
      ),
      p("Los obstáculos que se señalan con más frecuencia son regulatorios y macroeconómicos antes que tecnológicos:"),
      ul(
        "Restricciones cambiarias que dificultan cobrar del exterior. Ver [[cepo-cambiario]].",
        "Carga tributaria y costos de contratación que empujan a facturar desde el exterior.",
        "Inestabilidad de reglas, que desalienta radicar operaciones en el país.",
        "Infraestructura energética y de conectividad.",
      ),
      p(
        "Es un caso interesante porque muestra que la política tecnológica más efectiva puede no ser una política tecnológica: quitar las trabas generales rinde más que crear un régimen de promoción específico, que además genera los problemas de captura descritos en [[competencia]].",
      ),
    ],

    positions: [
      {
        current: "Libertarismo",
        stance:
          "Ninguna regulación previa. Responsabilidad ex post por daños concretos y competencia abierta.",
      },
      {
        current: "Liberalismo clásico",
        stance:
          "Marco general de responsabilidad, transparencia y defensa de la competencia. Regulación sectorial sólo con evidencia de daño.",
      },
      {
        current: "Ordoliberalismo",
        stance:
          "Intervención activa sobre las reglas: interoperabilidad, portabilidad de datos y separación estructural donde haya conflicto de interés.",
      },
    ],

    keyIdeas: [
      "El reflejo liberal es dejar experimentar, porque nadie anticipa para qué sirve una tecnología nueva.",
      "Los efectos de red generan concentración sin que nadie haga nada indebido: ahí está el desacuerdo.",
      "La moderación de contenidos enfrenta propiedad privada contra debate público, y no hay respuesta única.",
      "El principio precautorio es asimétrico: ignora los costos de no actuar.",
    ],
    related: ["competencia", "propiedad-privada", "libertad", "mercado", "cultura-liberal"],
    glossary: ["efecto-de-red", "principio-precautorio", "interoperabilidad", "externalidad"],
    sources: ["hayek-knowledge", "bastiat-ve", "coase-social-cost", "friedman-capitalismo", "ostrom-commons"],
    furtherReading: [
      {
        title: "Lo que se ve y lo que no se ve",
        author: "Frédéric Bastiat",
        why: "Aplicable directamente al debate sobre regulación preventiva de tecnologías.",
        sourceId: "bastiat-ve",
        level: "inicial",
      },
    ],
  },

  {
    slug: "educacion-y-liberalismo",
    title: "¿Cómo piensa un liberal la educación?",
    question: "¿El Estado debe financiar la educación? ¿Debe además proveerla?",
    summary:
      "Casi todos los liberales aceptan el financiamiento público de la educación. Lo que discuten es quién debe prestarla y quién debe elegir la escuela.",
    category: "vida-real",
    level: "intermedio",
    topics: ["educación", "vida real"],
    tags: ["educación", "vouchers", "vida real", "argentina"],
    updated: "2026-08-15",
    status: "publicado",

    simple: [
      p(
        "Hay una confusión que arruina esta discusión y conviene despejarla antes que nada: **financiar** y **proveer** no son lo mismo.",
      ),
      compare(
        {
          title: "Financiar",
          items: [
            "Quién pone la plata.",
            "Puede ser el Estado, con impuestos.",
            "Casi todos los liberales lo aceptan.",
          ],
        },
        {
          title: "Proveer",
          items: [
            "Quién gestiona la escuela y contrata a los docentes.",
            "Puede ser el Estado, una cooperativa, una fundación, una empresa.",
            "Acá está el desacuerdo.",
          ],
        },
      ),
      p(
        "Que el Estado pague no obliga a que el Estado administre. Es la misma distinción que existe con los medicamentos: el Estado puede financiar un remedio sin fabricarlo.",
      ),
    ],

    technical: [
      h("Por qué financiar educación es compatible con el liberalismo"),
      p("Hay tres argumentos, y sólo uno depende de la caridad:"),
      ol(
        "**Externalidades positivas.** Una población educada beneficia a terceros: menos delito, más productividad agregada, mejor funcionamiento democrático. Quien decide sobre la educación de un chico no captura todos esos beneficios, de modo que la inversión privada tendería a ser menor a la socialmente óptima.",
        "**Los chicos no eligen.** El liberalismo se basa en el consentimiento de adultos. Un menor no consiente ni puede evaluar el costo de no ser educado. Es uno de los pocos casos donde casi todos los liberales aceptan una excepción al principio general.",
        "**Igualdad de oportunidades.** Si el punto de partida define el resultado, la competencia no es entre personas sino entre familias.",
      ),
      p(
        "Friedman, que difícilmente pueda acusarse de estatista, defendió el financiamiento público de la educación por las razones 1 y 2 en *Capitalismo y libertad*, y propuso separarlo de la provisión mediante **vouchers**: el Estado entrega a la familia el equivalente al costo por alumno y la familia elige la escuela.",
      ),
      h("El argumento del voucher, y sus objeciones"),
      compare(
        {
          title: "A favor",
          items: [
            "Introduce competencia entre escuelas por atraer alumnos.",
            "Le da poder de elección a familias que hoy no lo tienen.",
            "El financiamiento sigue al alumno, no a la estructura.",
            "Permite diversidad de proyectos pedagógicos.",
          ],
        },
        {
          title: "Objeciones",
          items: [
            "Requiere información que las familias no siempre tienen para evaluar calidad.",
            "En zonas con una sola escuela, no hay elección posible: la competencia supone alternativas.",
            "Puede generar segregación si las escuelas seleccionan alumnos.",
            "La evidencia empírica internacional es mixta y depende mucho del diseño concreto.",
          ],
        },
      ),
      callout(
        "debate",
        "Sobre la evidencia",
        "Existen evaluaciones de programas de elección escolar en varios países con resultados que van desde mejoras moderadas hasta efectos nulos o negativos, según el diseño, la regulación de admisiones y el contexto. Presentar la evidencia como concluyente en cualquier dirección sería incorrecto.",
      ),
    ],

    argentina: [
      p(
        "La educación argentina tiene una particularidad institucional decisiva: **es competencia provincial**. Las escuelas dependen de las 24 jurisdicciones, no del Estado nacional, que tiene funciones de coordinación y financiamiento parcial. Cualquier propuesta que ignore esto es inaplicable.",
      ),
      p(
        "Existe además un sistema de escuelas de gestión privada con aporte estatal al salario docente, en proporciones variables. Es decir: **Argentina ya tiene un sistema mixto de financiamiento y provisión**, aunque no funcione como un esquema de vouchers ni la familia elija con un presupuesto asignado.",
      ),
      p("Los datos que conviene mirar antes de opinar, todos de fuentes oficiales:"),
      ul(
        "Resultados de las pruebas Aprender, que evalúan aprendizajes a nivel nacional.",
        "Participación argentina en PISA (OCDE), que permite comparación internacional.",
        "Estadísticas educativas del Ministerio de Capital Humano / Educación: matrícula, repitencia, egreso y días de clase efectivos.",
      ),
      callout(
        "ojo",
        "Una precisión metodológica importante",
        "Comparar resultados entre escuelas o países sin controlar por nivel socioeconómico produce conclusiones falsas. Buena parte de la diferencia bruta entre escuelas de gestión estatal y privada en Argentina se explica por la composición del alumnado, no por la gestión. Los estudios serios controlan por esto; los titulares periodísticos, casi nunca.",
      ),
    ],

    positions: [
      {
        current: "Liberalismo clásico",
        stance:
          "Financiamiento público, provisión mixta, libertad de elección de las familias y evaluación pública de resultados.",
      },
      {
        current: "Libertarismo",
        stance:
          "Educación enteramente privada y voluntaria. El financiamiento estatal implica impuestos y por tanto coerción.",
      },
      {
        current: "Liberalismo social",
        stance:
          "Educación pública fuerte y gratuita como igualador de oportunidades, con estándares y evaluación.",
      },
    ],

    critiques: [
      {
        objection:
          "La competencia entre escuelas convierte la educación en un mercado, y los chicos no son clientes. Las familias con más capital cultural van a elegir mejor, y eso amplía la desigualdad.",
        response: [
          p(
            "La preocupación sobre el capital cultural desigual es empíricamente fundada y es la objeción más seria al esquema de elección.",
          ),
          p(
            "Las respuestas que se han propuesto dentro del liberalismo: vouchers de monto mayor para alumnos de menores ingresos, prohibición de que las escuelas financiadas seleccionen alumnos, e información pública comparable sobre resultados. Ninguna elimina el problema del todo.",
          ),
          p(
            "Punto que conviene conceder: la ausencia de elección tampoco es neutral. Hoy las familias con recursos ya eligen —pagando o mudándose de barrio—, y quien no puede queda con la escuela que le toca. La discusión no es «elección o no elección», sino quién tiene acceso a ella.",
          ),
        ],
        unresolved: true,
      },
    ],

    keyIdeas: [
      "Financiar y proveer son cosas distintas: el desacuerdo liberal está en la segunda.",
      "Casi todos los liberales aceptan el financiamiento por externalidades y porque los chicos no consienten.",
      "En Argentina la educación es competencia provincial: cualquier propuesta debe partir de ahí.",
      "Comparar escuelas sin controlar por nivel socioeconómico produce conclusiones falsas.",
    ],
    related: ["por-que-hay-pobres-si-el-mercado-funciona", "estado", "competencia", "instituciones", "impuestos"],
    glossary: ["voucher", "externalidad", "capital-humano", "subsidiariedad"],
    sources: ["friedman-capitalismo", "friedman-elegir", "cn-argentina", "banco-mundial", "sen-desarrollo"],
    furtherReading: [
      {
        title: "Capitalismo y libertad, capítulo VI",
        author: "Milton Friedman",
        why: "«El papel del gobierno en la educación»: donde formula la propuesta de vouchers y sus límites.",
        sourceId: "friedman-capitalismo",
        level: "intermedio",
      },
    ],
  },
];
