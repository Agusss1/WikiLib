import {
  type Article,
  callout,
  compare,
  h,
  ol,
  p,
  quote,
  ul,
} from "../schema";

export const instituciones: Article[] = [
  {
    slug: "igualdad-ante-la-ley",
    title: "Igualdad ante la ley",
    question: "¿Qué significa igualdad ante la ley y en qué se diferencia de otras igualdades?",
    summary:
      "Las mismas reglas para todos, sin privilegios ni excepciones por cargo, apellido o cercanía al poder. Es una igualdad de trato, no de resultado, y ahí empieza el desacuerdo.",
    category: "conceptos",
    level: "inicial",
    topics: ["fundamentos", "derecho"],
    tags: ["igualdad", "derecho", "privilegio"],
    updated: "2026-08-15",
    status: "publicado",

    simple: [
      p(
        "Igualdad ante la ley significa que la ley te trata igual sin importar quién sos: si sos rico o pobre, si tenés apellido conocido, si sos amigo del intendente o si votaste al gobierno.",
      ),
      p(
        "Suena obvio y no lo es. Durante casi toda la historia humana **no fue así**: los nobles tenían tribunales propios, había cargos reservados por nacimiento y algunos delitos se castigaban distinto según la clase del acusado. El liberalismo nació peleando contra eso.",
      ),
      callout(
        "ojo",
        "Tres igualdades que no son lo mismo",
        "**Ante la ley**: mismas reglas para todos. **De oportunidades**: que el punto de partida no dependa de dónde naciste. **De resultados**: que todos terminen igual. El liberalismo defiende firmemente la primera, discute cuánto puede hacerse por la segunda y en general rechaza la tercera como objetivo.",
      ),
    ],

    technical: [
      h("Qué exige exactamente"),
      ol(
        "**Generalidad**: las leyes se dirigen a categorías, no a personas determinadas.",
        "**Ausencia de privilegios**: ningún grupo tiene fueros ni exenciones por su condición.",
        "**Aplicación imparcial**: el juez decide por la regla, no por quién es la parte.",
        "**Acceso efectivo**: un derecho que sólo puede hacer valer quien paga abogados caros es un derecho desigual en la práctica.",
      ),
      p(
        "El punto 4 es el que más suelen subestimar los liberales y el que más señalan los críticos. La igualdad formal sin acceso efectivo a la justicia es incompleta, y esto no es una objeción externa al liberalismo: es una exigencia de su propio principio.",
      ),
      h("Qué no exige"),
      p(
        "La igualdad ante la ley **no** prohíbe todo trato diferenciado. Prohíbe la diferenciación arbitraria. La doctrina jurídica estándar admite distinciones si son razonables y guardan relación con el fin de la norma: un impuesto progresivo distingue por capacidad contributiva, no por apellido.",
      ),
      p(
        "Dónde está el límite entre distinción razonable y privilegio es exactamente lo que se discute en cada caso concreto, y no hay fórmula automática.",
      ),
    ],

    argentina: [
      p("El artículo 16 de la Constitución es notablemente explícito, y su contexto histórico explica su redacción:"),
      quote(
        "La Nación Argentina no admite prerrogativas de sangre, ni de nacimiento: no hay en ella fueros personales ni títulos de nobleza. Todos sus habitantes son iguales ante la ley, y admisibles en los empleos sin otra condición que la idoneidad. La igualdad es la base del impuesto y de las cargas públicas.",
        "Constitución Nacional, artículo 16",
        "cn-argentina",
      ),
      p(
        "Y el artículo 20 extiende los derechos civiles a los extranjeros en igualdad con los ciudadanos, algo poco frecuente en las constituciones de la época y directamente vinculado al proyecto inmigratorio de [[alberdi]].",
      ),
      h("Dónde se tensiona hoy"),
      ul(
        "**Regímenes de excepción impositiva y promocional** para sectores o provincias determinadas.",
        "**Fueros parlamentarios**: previstos en la Constitución (artículos 68 a 70) con alcance acotado a opiniones y arresto, y frecuentemente discutidos en su aplicación.",
        "**Duración de los procesos**: cuando resolver un caso lleva una década, quien puede esperar tiene ventaja sobre quien no.",
        "**Regímenes jubilatorios especiales** para determinadas actividades.",
      ),
      callout(
        "debate",
        "Distinguir el principio del reclamo",
        "Señalar un privilegio no equivale a demostrar que lo es. La discusión seria requiere mostrar por qué la distinción no guarda relación razonable con el fin de la norma, no simplemente que existe una diferencia.",
      ),
    ],

    liberalArgument: [
      p(
        "Hayek sostuvo que el imperio de la ley exige que las normas sean **generales, abstractas, conocidas de antemano y aplicadas por igual**. Cuando la ley se convierte en un instrumento para beneficiar o perjudicar grupos identificables, deja de ser ley en sentido estricto y se vuelve un acto de poder disfrazado de norma.",
      ),
      p(
        "El argumento tiene una consecuencia práctica fuerte: la mejor defensa contra el privilegio no es tener buenos funcionarios sino **reducir la discrecionalidad**. Una norma que exige que alguien decida caso por caso quién obtiene un beneficio es una fábrica de privilegios, independientemente de la honestidad de quien la aplique.",
      ),
    ],

    critiques: [
      {
        objection:
          "Tratar igual a los desiguales perpetúa la desigualdad. Aplicar la misma regla a quien tiene todo y a quien no tiene nada produce resultados injustos.",
        from: "Crítica igualitarista clásica",
        response: [
          p(
            "La objeción es potente y buena parte del derecho moderno la incorporó: existen categorías de protección especial y acciones afirmativas.",
          ),
          p(
            "La respuesta liberal habitual distingue entre corregir el **punto de partida** y alterar la **regla del juego**. Aceptar lo primero (educación, salud básica, remoción de barreras) es compatible con el liberalismo; aceptar lo segundo abre la puerta a que la ley vuelva a diferenciar por categorías, que es exactamente contra lo que se construyó el principio.",
          ),
          p(
            "Los críticos responden que esa distinción es más borrosa de lo que parece. Es un desacuerdo real.",
          ),
        ],
        unresolved: true,
      },
    ],

    keyIdeas: [
      "Igualdad ante la ley es igualdad de trato, no de resultado.",
      "No prohíbe toda distinción: prohíbe la distinción arbitraria.",
      "Sin acceso efectivo a la justicia, la igualdad formal queda incompleta.",
      "La mejor defensa contra el privilegio es reducir la discrecionalidad, no confiar en la virtud del funcionario.",
    ],
    related: ["estado-de-derecho", "constitucion-1853", "libertad", "instituciones", "que-es-el-liberalismo"],
    glossary: ["igualdad-ante-la-ley", "privilegio", "fuero", "discrecionalidad"],
    sources: ["cn-argentina", "hayek-constitution", "alberdi-bases", "bastiat-ley"],
    furtherReading: [
      {
        title: "La Ley",
        author: "Frédéric Bastiat",
        why: "Sobre el «expolio legal»: qué pasa cuando la ley se usa para transferir en lugar de proteger.",
        sourceId: "bastiat-ley",
        level: "inicial",
      },
    ],
  },

  {
    slug: "estado-de-derecho",
    title: "Estado de derecho",
    question: "¿Qué es el Estado de derecho? ¿Alcanza con que haya leyes?",
    summary:
      "No es que haya leyes: es que el poder también esté sometido a ellas. La diferencia entre gobernar *con* la ley y gobernar *bajo* la ley es todo el concepto.",
    category: "conceptos",
    level: "intermedio",
    topics: ["fundamentos", "derecho", "instituciones"],
    tags: ["estado de derecho", "instituciones", "límites al poder"],
    updated: "2026-08-15",
    status: "publicado",

    simple: [
      p(
        "Un país puede tener miles de leyes y no tener Estado de derecho. La Unión Soviética tenía leyes. Lo que define el concepto es otra cosa: **que el que manda también tenga que obedecer**.",
      ),
      p("Se nota en cosas muy concretas:"),
      ul(
        "Que un juez pueda fallar contra el gobierno y no le pase nada.",
        "Que las reglas se conozcan antes y no cambien retroactivamente.",
        "Que el mismo trámite tenga el mismo resultado sin importar a quién conocés.",
        "Que si el Estado te perjudica, tengas dónde reclamar y ganar.",
      ),
      callout(
        "ejemplo",
        "La prueba práctica",
        "Preguntate: ¿puede una persona común ganarle un juicio al Estado, y cobrar? Si la respuesta es «depende de a quién conozca», no hay Estado de derecho, por más códigos que existan.",
      ),
    ],

    technical: [
      h("Los requisitos"),
      p(
        "Hay un núcleo bastante compartido entre juristas, más allá de la ideología, sobre qué exige el Estado de derecho:",
      ),
      ol(
        "**Legalidad**: el poder actúa sólo con habilitación normativa.",
        "**Publicidad y claridad**: las normas se conocen y se entienden.",
        "**Irretroactividad**: no se sanciona por lo que era lícito cuando se hizo.",
        "**Estabilidad**: no cambian tan rápido que nadie pueda planificar.",
        "**Generalidad**: se dirigen a categorías, no a personas.",
        "**Independencia judicial**: quien juzga no depende de quien es juzgado.",
        "**Control de constitucionalidad**: existe un mecanismo para invalidar normas contrarias a la Constitución.",
        "**Debido proceso**: derecho a ser oído, a defenderse y a una decisión fundada.",
      ),
      h("Rule of law versus rule by law"),
      compare(
        {
          title: "Imperio de la ley",
          subtitle: "El poder está sometido a la norma",
          items: [
            "La ley limita al gobernante.",
            "Los jueces pueden invalidar actos del Ejecutivo.",
            "Las reglas son previsibles.",
            "El ciudadano puede planificar su vida.",
          ],
        },
        {
          title: "Gobierno mediante la ley",
          subtitle: "La norma es una herramienta del poder",
          items: [
            "La ley limita a los gobernados, no al gobernante.",
            "Los jueces aplican pero no controlan.",
            "Las reglas cambian según la necesidad política.",
            "El ciudadano depende de la voluntad del que decide.",
          ],
        },
      ),
      p(
        "Un régimen autoritario puede tener un sistema legal impecablemente ordenado. Lo que no tiene es el primer elemento: nadie puede usar la ley **contra** el poder.",
      ),
      h("Por qué importa económicamente"),
      p(
        "La previsibilidad no es un lujo institucional: es la condición de la inversión de largo plazo. Nadie construye una fábrica que se amortiza en quince años si las reglas pueden cambiar en dos. Esta conexión entre seguridad jurídica y desarrollo es una de las tesis centrales de [[instituciones|la literatura institucional]].",
      ),
    ],

    argentina: [
      p(
        "La Constitución argentina establece los elementos formales: división de poderes, debido proceso (artículo 18), control judicial de constitucionalidad desarrollado por la jurisprudencia de la Corte Suprema desde el caso «Sojo» (1887) y «Elortondo» (1888), y la acción de amparo incorporada al texto en 1994 (artículo 43).",
      ),
      p("Los puntos donde el debate argentino se concentra:"),
      ul(
        "**Duración de los procesos**: la demora judicial afecta desproporcionadamente a quien tiene menos recursos para esperar.",
        "**Uso de decretos de necesidad y urgencia**: previstos como excepcionales en el artículo 99 inciso 3, con requisitos estrictos y prohibición de materia penal, tributaria, electoral y de partidos políticos.",
        "**Delegación legislativa**: el artículo 76 la prohíbe salvo en materias determinadas de administración o emergencia pública, con plazo fijado y dentro de las bases que el Congreso establezca.",
        "**Emergencia permanente**: la utilización sostenida de legislación de emergencia durante décadas, que por definición debería ser transitoria.",
        "**Independencia judicial**: mecanismos de designación, remoción y traslado de jueces.",
      ),
      callout(
        "ojo",
        "Un punto de honestidad intelectual",
        "Todos los gobiernos argentinos de las últimas décadas, de distinto signo, usaron decretos de necesidad y urgencia y legislación de emergencia. Presentar esto como un problema de un partido en particular es análisis partidario, no institucional.",
      ),
    ],

    liberalArgument: [
      p(
        "Para el liberalismo el Estado de derecho es más fundamental que la democracia, en un sentido preciso: **una mayoría sin límites puede votar la supresión de derechos**, y entonces el voto deja de ser una garantía.",
      ),
      p(
        "Hayek desarrolló la distinción entre **ley** (normas generales y abstractas, que descubren y ordenan) y **legislación** (mandatos particulares del poder). Su tesis es que la expansión de la segunda a costa de la primera erosiona la libertad aunque el procedimiento sea democrático.",
      ),
      p(
        "La consecuencia práctica más importante: los liberales privilegian **reglas por sobre discreción** incluso cuando la discreción produciría un mejor resultado en un caso concreto, porque el valor de la regla está en su previsibilidad agregada.",
      ),
    ],

    critiques: [
      {
        objection:
          "El Estado de derecho puede consagrar injusticias: si las reglas son injustas, aplicarlas rigurosamente empeora las cosas. La legalidad formal fue usada para sostener la esclavitud y el apartheid.",
        response: [
          p(
            "Correcto, y es la principal limitación del concepto en su versión puramente formal. El Estado de derecho es una condición **necesaria pero no suficiente** para un orden justo.",
          ),
          p(
            "Por eso las concepciones contemporáneas incorporan un contenido sustantivo: derechos fundamentales indisponibles incluso para el legislador. En Argentina ese contenido está en la parte dogmática de la Constitución y en los tratados de derechos humanos con jerarquía constitucional (artículo 75 inciso 22).",
          ),
        ],
      },
    ],

    keyIdeas: [
      "Estado de derecho no es que haya leyes: es que el poder esté sometido a ellas.",
      "Requiere legalidad, publicidad, irretroactividad, generalidad e independencia judicial.",
      "Es condición de la inversión de largo plazo, no sólo un valor jurídico.",
      "Es necesario pero no suficiente: reglas injustas aplicadas con rigor siguen siendo injustas.",
    ],
    related: ["igualdad-ante-la-ley", "estado", "instituciones", "democracia-y-liberalismo", "constitucion-1853"],
    glossary: ["estado-de-derecho", "debido-proceso", "seguridad-juridica", "dnu", "control-de-constitucionalidad"],
    sources: ["cn-argentina", "hayek-constitution", "locke-two-treatises", "acemoglu-robinson"],
    furtherReading: [
      {
        title: "Los fundamentos de la libertad, parte II",
        author: "Friedrich A. Hayek",
        why: "La reconstrucción histórica y conceptual del imperio de la ley.",
        sourceId: "hayek-constitution",
        level: "avanzado",
      },
    ],
  },

  {
    slug: "instituciones",
    title: "¿Qué son las instituciones y por qué explican tanto?",
    question: "¿Por qué algunos países son ricos y otros pobres?",
    summary:
      "Las reglas del juego de una sociedad, formales e informales. La hipótesis institucional sostiene que explican mejor las diferencias de desarrollo que la geografía o los recursos, y es la explicación dominante aunque no la única.",
    category: "conceptos",
    level: "intermedio",
    topics: ["instituciones", "desarrollo"],
    tags: ["instituciones", "desarrollo", "pobreza"],
    updated: "2026-08-15",
    status: "publicado",

    simple: [
      p(
        "¿Por qué Corea del Sur es rica y Corea del Norte pobre? Misma gente, misma historia, misma geografía, mismo idioma, mismos recursos. Lo único distinto son **las reglas** con las que vivieron desde 1948.",
      ),
      p(
        "Ese es el ejemplo más limpio que existe de por qué las instituciones importan. Las instituciones son las reglas del juego de una sociedad: qué podés hacer, qué te van a respetar, con qué podés contar.",
      ),
      p("Y no son sólo las leyes escritas. También son:"),
      ul(
        "Si la gente cumple los contratos aunque no la obliguen.",
        "Si podés confiar en un desconocido.",
        "Si tener éxito se logra produciendo o consiguiendo un favor del gobierno.",
        "Si perder una elección significa entregar el poder.",
      ),
    ],

    technical: [
      h("Definición"),
      p(
        "Douglass North, Nobel de Economía en 1993, las definió como «las reglas del juego en una sociedad; las limitaciones ideadas por el hombre que dan forma a la interacción humana». Se dividen en:",
      ),
      ul(
        "**Formales**: constituciones, leyes, contratos, regulaciones. Se cambian por decisión.",
        "**Informales**: normas sociales, costumbres, confianza, expectativas de comportamiento. Cambian mucho más lento.",
        "**Mecanismos de cumplimiento**: de qué sirve una regla si nadie la hace cumplir.",
      ),
      p(
        "La distinción es crucial para entender por qué **copiar leyes de otro país no funciona**. Argentina copió buena parte de su Constitución del modelo estadounidense y obtuvo resultados institucionales muy distintos: las reglas informales y los mecanismos de cumplimiento eran otros.",
      ),
      h("Instituciones inclusivas y extractivas"),
      p(
        "Acemoglu y Robinson —Nobel 2024, junto con Simon Johnson— popularizaron esta distinción:",
      ),
      compare(
        {
          title: "Inclusivas",
          items: [
            "Derechos de propiedad seguros y ampliamente distribuidos.",
            "Entrada libre a mercados y actividades.",
            "Estado de derecho parejo.",
            "El éxito depende de producir valor.",
            "Generan incentivos a invertir e innovar.",
          ],
        },
        {
          title: "Extractivas",
          items: [
            "Propiedad segura sólo para la élite.",
            "Barreras de entrada que protegen a los que ya están.",
            "Ley aplicada de manera desigual.",
            "El éxito depende de acceder al poder.",
            "Generan incentivos a capturar rentas, no a crear.",
          ],
        },
      ),
      h("Rentismo"),
      p(
        "El concepto de **búsqueda de rentas** (rent-seeking), formalizado por Gordon Tullock y Anne Krueger, describe el esfuerzo dedicado a obtener una transferencia en lugar de a producir: conseguir un arancel protector, una licencia exclusiva, un subsidio.",
      ),
      p(
        "El costo social no es sólo la transferencia: es que talento, tiempo y capital se dedican a pelear por una porción en lugar de a agrandar la torta. En sociedades donde el rentismo rinde más que producir, los mejores se dedican a eso, y es perfectamente racional que lo hagan.",
      ),
    ],

    argentina: [
      p(
        "Argentina es uno de los casos más estudiados del mundo en economía del desarrollo, por una razón simple: **es de los pocos países que dejaron de ser ricos**.",
      ),
      p(
        "Hacia comienzos del siglo XX el país se ubicaba entre los de mayor ingreso por habitante del mundo, y a lo largo del siglo XX su posición relativa cayó de manera sostenida. Ese hecho es sólido; su explicación está genuinamente disputada.",
      ),
      p("Las hipótesis institucionales que más se discuten:"),
      ul(
        "**Inestabilidad de las reglas.** Entre 1930 y 1983 hubo seis golpes de Estado exitosos. La regla más básica —cómo se accede al poder y cómo se lo entrega— no estuvo establecida durante medio siglo.",
        "**Cambios de régimen económico.** Sucesivas modificaciones de reglas tributarias, cambiarias y de comercio exterior desalentaron la planificación de largo plazo.",
        "**Emergencia como estado permanente.** Legislación excepcional utilizada de manera continua.",
        "**Debilidad de la correspondencia fiscal.** Quien gasta no es quien cobra el impuesto. Ver [[impuestos]].",
        "**Rentismo estructurado.** Regímenes de promoción, protección arancelaria y acceso diferencial a divisas crearon rentabilidad ligada a la decisión estatal.",
      ),
      callout(
        "debate",
        "Qué es hecho y qué es interpretación",
        "**Hechos:** la caída relativa del ingreso, la inestabilidad política, la recurrencia de crisis. **Interpretación:** que la causa principal sean las instituciones. Historiadores económicos serios ponderan también los shocks externos (1930, precios de commodities), la estructura productiva y decisiones de política puntuales. La tesis institucional es la más aceptada, no la única defendible.",
      ),
    ],

    liberalArgument: [
      p(
        "La lectura liberal extrae tres conclusiones prácticas de la literatura institucional:",
      ),
      ol(
        "**Las personas no cambian; las reglas sí.** No hace falta un pueblo virtuoso: hace falta un sistema donde convenga producir más que capturar. Culpar a «la idiosincrasia argentina» es tanto un error analítico como una excusa.",
        "**La estabilidad vale más que la perfección.** Una regla mediocre y previsible puede rendir más que una regla óptima que cambia cada dos años.",
        "**Las reformas necesitan sostener las reglas informales.** Una ley que la sociedad no considera legítima no se cumple, y el resultado es peor que no haberla dictado.",
      ),
    ],

    critiques: [
      {
        objection:
          "La tesis institucional es circular: se define «instituciones inclusivas» como las que producen desarrollo, y después se explica el desarrollo por ellas.",
        response: [
          p(
            "Es una crítica metodológica seria que se le ha hecho a Acemoglu y Robinson. La respuesta de los autores es usar estrategias de identificación —como la tasa de mortalidad de los colonos europeos como variable instrumental— para separar el efecto de las instituciones del efecto inverso.",
          ),
          p(
            "Esa estrategia también fue criticada. El debate econométrico continúa y no está cerrado.",
          ),
        ],
        unresolved: true,
      },
      {
        objection:
          "China creció enormemente sin instituciones inclusivas en el sentido de la teoría.",
        response: [
          p(
            "Es el contraejemplo más citado y no tiene una respuesta cómoda. Acemoglu y Robinson sostienen que el crecimiento bajo instituciones extractivas es posible pero no sostenible en el largo plazo, porque requiere innovación que esas instituciones desalientan.",
          ),
          p(
            "Es una predicción, no una observación: puede confirmarse o refutarse en las próximas décadas. Presentarla como un hecho establecido sería incorrecto.",
          ),
        ],
        unresolved: true,
      },
    ],

    uncertainty:
      "La hipótesis institucional es dominante en economía del desarrollo pero no es un consenso cerrado. Existen explicaciones alternativas serias basadas en geografía (Diamond, Sachs), cultura (Weber, Landes) y acumulación de capital humano.",

    keyIdeas: [
      "Instituciones son las reglas del juego: formales, informales y sus mecanismos de cumplimiento.",
      "Copiar leyes no basta: las reglas informales y el cumplimiento no se importan.",
      "Instituciones extractivas premian capturar rentas; las inclusivas, producir valor.",
      "Argentina es un caso estudiado por ser de los pocos países que dejaron de ser ricos.",
    ],
    related: ["estado-de-derecho", "igualdad-ante-la-ley", "liberalismo-en-argentina", "propiedad-privada", "capitalismo"],
    glossary: ["institucion", "rent-seeking", "instituciones-extractivas", "correspondencia-fiscal", "seguridad-juridica"],
    sources: ["acemoglu-robinson", "hayek-constitution", "cn-argentina", "banco-mundial", "alberdi-bases"],
    furtherReading: [
      {
        title: "Por qué fracasan los países",
        author: "Daron Acemoglu y James A. Robinson",
        why: "La exposición más accesible de la tesis institucional. Léase sabiendo que es una tesis discutida.",
        sourceId: "acemoglu-robinson",
        level: "intermedio",
      },
    ],
  },

  {
    slug: "democracia-y-liberalismo",
    title: "Democracia y liberalismo",
    question: "¿Es lo mismo democracia que liberalismo? ¿Qué pasa si la mayoría vota algo antiliberal?",
    summary:
      "No son sinónimos y a veces entran en tensión. La democracia responde a *quién decide*; el liberalismo, a *qué se puede decidir*. La democracia liberal es la combinación de ambas respuestas.",
    category: "conceptos",
    level: "intermedio",
    topics: ["fundamentos", "filosofía política"],
    tags: ["democracia", "mayorías", "constitución"],
    updated: "2026-08-15",
    status: "publicado",

    simple: [
      p("Son dos preguntas distintas y conviene no mezclarlas:"),
      ul(
        "**Democracia** responde: *¿quién decide?* Respuesta: la mayoría, a través del voto.",
        "**Liberalismo** responde: *¿qué se puede decidir?* Respuesta: no todo. Hay cosas que ninguna mayoría puede votar.",
      ),
      p(
        "Por eso pueden entrar en conflicto. Si el 90% vota que el 10% restante no puede practicar su religión, eso es perfectamente democrático y absolutamente antiliberal.",
      ),
      callout(
        "ejemplo",
        "La frase que resume la diferencia",
        "La democracia dice cómo se toman las decisiones. El liberalismo dice qué queda fuera de la mesa. Un sistema con las dos cosas se llama **democracia liberal** o **democracia constitucional**.",
      ),
    ],

    technical: [
      h("Tiranía de la mayoría"),
      p(
        "El concepto es antiguo y fue desarrollado por [[tocqueville|Tocqueville]] y [[mill|Mill]] en el siglo XIX. Su preocupación no era sólo el poder legal de la mayoría, sino la presión social: Tocqueville observó que en una democracia la conformidad puede imponerse sin necesidad de ley, por la fuerza del clima de opinión.",
      ),
      p("Los mecanismos que las democracias liberales usan para contener este riesgo:"),
      ol(
        "**Constitución rígida**: reformarla exige mayorías especiales y procedimientos agravados.",
        "**Derechos fundamentales**: se sustraen de la decisión mayoritaria ordinaria.",
        "**Control judicial de constitucionalidad**: un juez puede invalidar una ley aprobada por mayoría.",
        "**División de poderes**: distintas ramas con legitimidades y tiempos distintos.",
        "**Federalismo**: el poder se distribuye territorialmente.",
        "**Mayorías calificadas** para ciertas decisiones.",
      ),
      h("El problema de la legitimidad contramayoritaria"),
      p(
        "Estos mecanismos tienen un costo democrático real que conviene no minimizar: jueces no electos pueden invalidar decisiones de representantes electos. La literatura constitucional llama a esto «dificultad contramayoritaria» y es una discusión abierta y seria.",
      ),
      p(
        "La justificación estándar: los jueces no imponen su preferencia sino que hacen cumplir una decisión democrática **anterior y más exigente** —la Constitución, sancionada con mayorías especiales—. La objeción: en la práctica los jueces interpretan textos ambiguos, y esa interpretación tiene contenido político.",
      ),
    ],

    argentina: [
      p(
        "La Constitución establece en el artículo 22 que el pueblo no delibera ni gobierna sino por medio de sus representantes, y que toda fuerza armada o reunión de personas que se atribuya los derechos del pueblo comete delito de sedición.",
      ),
      p(
        "Y en el artículo 29 prohíbe expresamente la concentración del poder, aun cuando fuera concedida voluntariamente por el Congreso. Es una cláusula notable: **prohíbe una decisión aunque sea tomada por el órgano representativo**. Es liberalismo puro incrustado en el texto.",
      ),
      p(
        "La historia argentina del siglo XX ofrece material sobre las dos tensiones posibles. Hubo gobiernos electos que adoptaron medidas cuestionadas desde el punto de vista liberal, y hubo gobiernos no electos que invocaron principios económicos liberales mientras suprimían libertades básicas.",
      ),
      callout(
        "ojo",
        "Un punto que este sitio no elude",
        "Sectores que se identificaban como liberales apoyaron o toleraron interrupciones del orden constitucional en el siglo XX. Reconocerlo no es una concesión: es coherencia. Una tradición que sostiene que el poder debe estar limitado por reglas no puede eximirse de esa exigencia cuando el poder ejecuta políticas que le agradan.",
      ),
    ],

    liberalArgument: [
      p(
        "La posición liberal no es antidemocrática: es que la democracia **necesita** límites para no destruirse a sí misma. Una mayoría puede votar el fin de las elecciones futuras, y sin límites eso sería válido.",
      ),
      p(
        "Hay además un argumento sobre los incentivos del votante, desarrollado por la escuela de la elección pública: la **ignorancia racional**. Informarse a fondo sobre política tiene un costo alto y un beneficio individual casi nulo, porque un voto individual no cambia el resultado. Por eso es racional no informarse, y por eso los liberales desconfían de someter cuestiones técnicas complejas a decisión plebiscitaria directa.",
      ),
      callout(
        "opinion",
        "Interpretación",
        "El argumento de la ignorancia racional es un modelo teórico con respaldo empírico parcial. También puede usarse para justificar tecnocracia sin control, lo que sería igualmente antiliberal. Conviene usarlo con cuidado.",
      ),
    ],

    critiques: [
      {
        objection:
          "Sacar temas de la decisión democrática es elitista: define de antemano qué está permitido discutir y quién queda excluido de decidir.",
        response: [
          p(
            "La objeción tiene fuerza y no admite una respuesta que la elimine del todo. Sí es cierto que hay una decisión previa sobre qué se sustrae.",
          ),
          p(
            "El argumento liberal es que esa decisión previa también es democrática —la Constitución se sanciona y se reforma— y que sin ella la propia democracia queda a merced de una mayoría circunstancial.",
          ),
          p(
            "También vale un dato empírico: las democracias que erosionaron sus libertades en las últimas décadas lo hicieron en general por vía electoral, no por golpes. Los límites constitucionales fueron lo que más resistió.",
          ),
        ],
        unresolved: true,
      },
      {
        objection:
          "Cuando el liberalismo económico chocó con la voluntad popular, muchos liberales prefirieron la política económica antes que la democracia.",
        response: [
          p(
            "Es una acusación históricamente fundada en varios casos y no debería responderse con evasivas.",
          ),
          p(
            "La respuesta que corresponde es normativa: quien sostiene que el poder debe estar limitado por reglas no puede hacer una excepción cuando el poder sin reglas ejecuta su programa preferido. Un liberalismo que acepta eso se contradice.",
          ),
        ],
      },
    ],

    keyIdeas: [
      "Democracia responde quién decide; liberalismo, qué se puede decidir.",
      "Sin límites, una mayoría puede suprimir derechos y hasta la democracia misma.",
      "El control judicial tiene un costo contramayoritario real, no negable.",
      "Una tradición que exige límites al poder debe exigirlos también cuando el poder le conviene.",
    ],
    related: ["estado-de-derecho", "libertad", "constitucion-1853", "estado", "liberalismo-en-argentina"],
    glossary: ["democracia-liberal", "tirania-de-la-mayoria", "ignorancia-racional", "dificultad-contramayoritaria"],
    sources: ["tocqueville-democracia", "mill-on-liberty", "cn-argentina", "hayek-camino", "hayek-constitution"],
    furtherReading: [
      {
        title: "La democracia en América, tomo II",
        author: "Alexis de Tocqueville",
        why: "La descripción del despotismo blando y de la presión de la opinión: escrito en 1840 y perturbadoramente actual.",
        sourceId: "tocqueville-democracia",
        level: "intermedio",
      },
    ],
  },
];
