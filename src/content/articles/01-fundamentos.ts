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

export const fundamentos: Article[] = [
  // =========================================================================
  {
    slug: "que-es-el-liberalismo",
    title: "¿Qué es el liberalismo?",
    question: "¿Qué es el liberalismo?",
    summary:
      "Una tradición de pensamiento que parte de la idea de que cada persona es dueña de su propia vida y que, por eso, el poder tiene que estar limitado.",
    category: "empeza-aca",
    level: "inicial",
    topics: ["fundamentos", "filosofía política"],
    tags: ["libertad", "estado", "derechos", "introducción"],
    updated: "2026-08-15",
    status: "publicado",

    simple: [
      p(
        "El liberalismo arranca de una idea bastante simple: **tu vida es tuya**. Vos decidís qué estudiar, en qué trabajar, con quién juntarte, qué creer y qué hacer con lo que ganás. Nadie —ni tu vecino, ni una mayoría, ni el gobierno— es dueño de esas decisiones.",
      ),
      p(
        "De esa idea se desprende todo lo demás. Si tu vida es tuya, también lo es la de los otros. Entonces tu libertad tiene un límite claro: **termina donde empieza la de otro**. No podés obligar, robar ni golpear a nadie para conseguir lo que querés, por más buenas que sean tus razones.",
      ),
      p(
        "Y si nadie puede hacerte eso, tampoco puede hacerlo alguien porque ganó una elección. Por eso el liberalismo insiste tanto en **limitar el poder**: no porque el gobierno sea malo por definición, sino porque cualquiera con poder suficiente termina usándolo de más.",
      ),
      callout(
        "ejemplo",
        "En una frase",
        "El liberalismo es la idea de que las personas son adultas, y de que las instituciones deberían tratarlas como tales.",
      ),
    ],

    technical: [
      p(
        "El liberalismo es una tradición política y filosófica que se consolida entre los siglos XVII y XIX y que sostiene, con variantes importantes, cuatro compromisos básicos:",
      ),
      ol(
        "**Individualismo metodológico y moral.** La unidad de análisis y de valor es la persona concreta, no la nación, la clase ni la raza. Los colectivos no tienen fines propios que puedan imponerse a sus miembros.",
        "**Derechos anteriores al poder.** Hay un conjunto de derechos —vida, libertad, {{propiedad}}— que el Estado reconoce y protege, pero no crea ni otorga. Por eso no puede suprimirlos por conveniencia.",
        "**Gobierno limitado y sujeto a reglas.** El poder político está dividido, sometido a la ley y controlado. Es el núcleo del {{estado de derecho}}.",
        "**Igualdad ante la ley.** Las mismas reglas para todos, sin privilegios de nacimiento, cargo o cercanía al poder.",
      ),
      h("De dónde viene"),
      p(
        "No nació como un manifiesto sino como una respuesta práctica a problemas concretos: guerras de religión, monarquías absolutas y persecución de disidentes. La pregunta original fue *cómo pueden convivir personas que están profundamente en desacuerdo sobre lo más importante*. La respuesta liberal fue: no obligando a nadie a compartir la misma idea de vida buena, y limitando el poder de quien podría intentarlo.",
      ),
      p(
        "[[locke|John Locke]] formuló la versión clásica del argumento a fines del siglo XVII: los individuos tienen derechos previos al gobierno, el gobierno existe para protegerlos y pierde legitimidad si los viola sistemáticamente.",
      ),
      h("Qué NO es el liberalismo"),
      ul(
        "**No es la ley del más fuerte.** Justamente al revés: sin reglas parejas gana quien tiene más poder. El liberalismo pide reglas iguales precisamente para que el fuerte no pueda imponerse.",
        "**No es indiferencia hacia los demás.** Sostiene que la ayuda voluntaria, la caridad y la cooperación son valiosas; discute que la coerción sea el mejor instrumento para producirlas.",
        "**No es sólo economía.** La libertad de expresión, de culto, de prensa y de circulación son liberales tanto como la libertad de comerciar.",
        "**No es una sola doctrina.** Adentro hay desacuerdos profundos. Ver [[corrientes-del-liberalismo]].",
      ),
    ],

    argentina: [
      p(
        "Argentina tiene una particularidad: su Constitución es un texto explícitamente liberal, escrito bajo la influencia directa de [[alberdi|Juan Bautista Alberdi]]. El artículo 14 enumera derechos de trabajar, comerciar, publicar ideas sin censura previa, transitar y asociarse; el 16 establece la igualdad ante la ley; el 17 declara inviolable la propiedad; el 19 protege la esfera privada.",
      ),
      quote(
        "Las acciones privadas de los hombres que de ningún modo ofendan al orden y a la moral pública, ni perjudiquen a un tercero, están sólo reservadas a Dios, y exentas de la autoridad de los magistrados. Ningún habitante de la Nación será obligado a hacer lo que no manda la ley, ni privado de lo que ella no prohíbe.",
        "Constitución Nacional, artículo 19",
        "cn-argentina",
      ),
      p(
        "Por eso una discusión recurrente en el país no es *si* el liberalismo debería aplicarse, sino **por qué un texto constitucional liberal convivió durante décadas con prácticas que lo contradecían**. Esa distancia entre la norma escrita y la práctica es uno de los temas centrales de [[liberalismo-en-argentina]].",
      ),
    ],

    liberalArgument: [
      p(
        "El argumento a favor tiene dos patas, y conviene no confundirlas porque no dependen una de la otra.",
      ),
      p(
        "**La pata moral.** Tratar a alguien como medio para un fin ajeno —aunque el fin sea noble— lo degrada. Si una persona adulta no lastima a nadie, obligarla a vivir como otro prefiere es una forma de tutela que no se justifica por el mero hecho de ser mayoritaria.",
      ),
      p(
        "**La pata práctica.** Nadie tiene el conocimiento necesario para planificar la vida de millones. [[hayek|Hayek]] lo formuló como un problema de información: el conocimiento relevante está disperso en millones de cabezas, es local, cambiante y muchas veces no se puede poner en palabras. Ningún planificador puede reunirlo. Los {{precios}} funcionan como un mecanismo que resume parte de esa información y la transmite.",
      ),
      callout(
        "opinion",
        "Esto es interpretación, no dato",
        "Que estas dos patas sean *suficientes* para justificar el liberalismo es materia de discusión filosófica abierta. Presentamos el argumento en su mejor versión, no como una verdad demostrada.",
      ),
    ],

    critiques: [
      {
        objection:
          "La libertad formal no sirve de nada si no tenés medios reales para ejercerla. Alguien que nace sin educación ni recursos es libre en el papel y está atrapado en la práctica.",
        from: "Es el núcleo de la crítica socialdemócrata y de la teoría de las capacidades",
        response: [
          p(
            "Es la objeción más fuerte y hay liberales que la aceptan en parte. El liberalismo social y buena parte del liberalismo contemporáneo sostienen que ciertas condiciones materiales mínimas son precondición de la autonomía, no una violación de ella.",
          ),
          p(
            "La respuesta liberal clásica no niega el problema sino que discute el instrumento: sostiene que la pobreza se reduce sobre todo por {{productividad}} y {{crecimiento}}, no por redistribución, y que las políticas que buscan garantizar resultados suelen destruir las condiciones que los hacían posibles.",
          ),
          p(
            "Dónde queda el desacuerdo: en cuánta redistribución es compatible con mantener esas condiciones. Nadie tiene una respuesta cerrada. Ver [[por-que-hay-pobres-si-el-mercado-funciona|el debate completo]].",
          ),
        ],
        unresolved: true,
      },
      {
        objection:
          "El liberalismo presupone individuos aislados y racionales que no existen. Las personas reales están formadas por su comunidad, su familia y su cultura.",
        response: [
          p(
            "La crítica comunitarista es sólida contra ciertas versiones del liberalismo, y varios liberales la aceptan. [[tocqueville|Tocqueville]] y buena parte de la tradición no defienden un individuo abstracto sino una sociedad densa en asociaciones voluntarias: clubes, iglesias, cooperativas, gremios, familias.",
          ),
          p(
            "La afirmación liberal no es que las personas se formen solas, sino que la pertenencia debería ser elegida y revocable en lugar de impuesta.",
          ),
        ],
      },
      {
        objection:
          "En la práctica, el liberalismo terminó siendo la ideología de quienes ya tenían poder económico.",
        response: [
          p(
            "Históricamente el liberalismo fue una doctrina disruptiva: enfrentó a monarquías, privilegios nobiliarios, gremios cerrados y esclavitud. Pero es cierto que también fue invocado para defender privilegios establecidos.",
          ),
          p(
            "La distinción que los liberales suelen trazar es entre **mercado** y **empresarios**: el liberalismo defiende la competencia, y quien ya está adentro suele preferir que no la haya. El {{capitalismo de amigos}} es una desviación que los liberales combaten, no una consecuencia del programa.",
          ),
          p(
            "Ahora bien, si esa desviación es un accidente o una tendencia estructural es exactamente lo que discuten liberales y sus críticos.",
          ),
        ],
        unresolved: true,
      },
    ],

    openDebate: [
      ul(
        "**Cuánto Estado.** Desde el {{minarquismo}} (sólo justicia, seguridad y defensa) hasta liberalismos que aceptan seguros sociales amplios.",
        "**Fundamento.** ¿Los derechos son anteriores a la sociedad (iusnaturalismo) o son convenciones que funcionan bien (consecuencialismo)? Locke y Rothbard responden distinto que Hume y Friedman.",
        "**Democracia.** ¿Qué pasa cuando una mayoría vota restringir libertades? Ver [[democracia-y-liberalismo]].",
        "**Alcance.** ¿La libertad de contratar vale igual entre dos partes con poder muy desigual?",
      ),
    ],

    uncertainty:
      "No existe una definición única de liberalismo aceptada por todos los liberales. Este artículo describe el núcleo común más ampliamente compartido; cada corriente pondera esos elementos distinto y algunas rechazan directamente partes de esta descripción.",

    keyIdeas: [
      "Tu vida es tuya: nadie es dueño de las decisiones de un adulto que no daña a terceros.",
      "Los derechos son anteriores al poder político, que los reconoce pero no los crea.",
      "El poder debe estar limitado, dividido y sometido a reglas iguales para todos.",
      "El liberalismo es una familia de posiciones, no una doctrina única.",
    ],
    related: [
      "que-significa-ser-liberal",
      "libertad",
      "estado",
      "propiedad-privada",
      "corrientes-del-liberalismo",
      "liberalismo-en-argentina",
    ],
    glossary: ["liberalismo", "estado-de-derecho", "propiedad", "coercion", "autonomia"],
    sources: ["locke-two-treatises", "hayek-knowledge", "cn-argentina", "mill-on-liberty", "sen-desarrollo"],
    furtherReading: [
      {
        title: "La Ley",
        author: "Frédéric Bastiat",
        why: "Cien páginas, lenguaje directo. Es probablemente el mejor primer texto liberal que existe.",
        sourceId: "bastiat-ley",
        level: "inicial",
      },
      {
        title: "Capitalismo y libertad",
        author: "Milton Friedman",
        why: "Aplica el marco liberal a problemas concretos de política pública, uno por capítulo.",
        sourceId: "friedman-capitalismo",
        level: "intermedio",
      },
      {
        title: "Segundo Tratado sobre el Gobierno Civil",
        author: "John Locke",
        why: "La formulación original de derechos, propiedad y límites del poder. Denso pero corto.",
        sourceId: "locke-two-treatises",
        level: "avanzado",
      },
    ],
  },

  // =========================================================================
  {
    slug: "que-significa-ser-liberal",
    title: "¿Qué significa ser liberal?",
    question: "¿Qué significa ser liberal en la práctica?",
    summary:
      "Menos una lista de opiniones que una manera de razonar: mirar incentivos, buscar los costos que no se ven y desconfiar de las soluciones que requieren obligar a alguien.",
    category: "empeza-aca",
    level: "inicial",
    topics: ["fundamentos", "práctica"],
    tags: ["identidad", "método", "introducción"],
    updated: "2026-08-15",
    status: "publicado",

    simple: [
      p(
        "Mucha gente cree que ser liberal es tener determinadas opiniones: estar a favor de bajar impuestos, en contra del cepo, etcétera. Pero dos personas pueden compartir todas esas opiniones y llegar a ellas por caminos completamente distintos.",
      ),
      p(
        "Lo que define a alguien liberal es más bien **cómo piensa los problemas**. Hay tres reflejos que se repiten:",
      ),
      steps(
        {
          title: "Preguntar quién decide",
          text: "Ante cualquier problema: ¿esto lo decide la persona afectada, o alguien por ella? El liberal tiene una preferencia por defecto —decide el afectado— que puede ceder, pero exige justificación.",
        },
        {
          title: "Buscar lo que no se ve",
          text: "Toda política tiene efectos visibles y efectos invisibles. Un subsidio se ve; los impuestos que lo financian y lo que esa gente habría hecho con esa plata, no. [[bastiat|Bastiat]] hizo de esto su tema central.",
        },
        {
          title: "Mirar incentivos, no intenciones",
          text: "La pregunta no es qué quiere lograr una ley, sino qué le conviene hacer a la gente una vez que la ley existe. Las buenas intenciones no garantizan buenos resultados.",
        },
      ),
    ],

    technical: [
      h("Un método antes que un catálogo"),
      p(
        "Ser liberal no equivale a suscribir un programa de gobierno. Un liberal clásico y un {{anarcocapitalismo|anarcocapitalista}} discrepan sobre si el Estado debe existir; ambos son liberales. Lo que comparten es una gramática común:",
      ),
      ul(
        "**Carga de la prueba invertida.** Quien propone restringir la libertad de alguien debe justificarlo, no al revés. La libertad no necesita permiso.",
        "**Análisis de {{trade-off|trade-offs}}.** No existen soluciones, existen intercambios. Preguntar «¿a cambio de qué?» antes que «¿está bien o mal?».",
        "**Comparación institucional realista.** No comparar el mercado real con un Estado ideal ni el Estado real con un mercado ideal. Ambos fallan; la pregunta es cuál falla mejor en cada caso.",
        "**Proceso sobre resultado.** Importa si las reglas fueron parejas, no si a alguien le gusta el resultado que produjeron.",
        "**Descentralización epistémica.** Desconfianza hacia quien afirma saber lo que a millones de personas les conviene.",
      ),
      h("Lo que un liberal no da por hecho"),
      p(
        "Hay cuatro atajos que la tradición liberal considera errores de razonamiento, independientemente de la ideología de quien los use:",
      ),
      ul(
        "Confundir **querer un fin** con **haberlo logrado** (una ley que prohíbe la pobreza no la elimina).",
        "Confundir **el Estado** con **la sociedad** (que algo no lo haga el Estado no significa que no se haga).",
        "Confundir **mercado** con **empresarios** (los empresarios establecidos suelen preferir que no haya competencia).",
        "Confundir **legal** con **legítimo** (una mayoría puede votar algo injusto).",
      ),
    ],

    everyday: [
      p("En decisiones concretas el reflejo liberal se nota así:"),
      compare(
        {
          title: "Reflejo habitual",
          items: [
            "«Los alquileres están caros: que el Estado ponga un tope.»",
            "«Este producto es esencial: que se prohíba aumentarlo.»",
            "«Hay una estafa: prohibamos la actividad.»",
            "«Esa gente elige mal: hay que impedírselo.»",
          ],
        },
        {
          title: "Reflejo liberal",
          items: [
            "«¿Por qué hay poca oferta de alquileres? ¿Qué pasa con la oferta si pongo un tope?»",
            "«Si el precio no puede subir, ¿qué se ajusta en su lugar? Normalmente, la cantidad o la calidad.»",
            "«¿La estafa es el problema, o la falta de información y de justicia rápida?»",
            "«¿Elige mal, o elige distinto de lo que yo elegiría? ¿Y quién decide cuál es «bien»?",
          ],
        },
      ),
      callout(
        "ojo",
        "Esto no significa que la respuesta liberal sea siempre «no hacer nada»",
        "Significa que antes de intervenir hay que preguntarse qué conducta genera la intervención. A veces la conclusión es intervenir; suele ser de otra manera que la propuesta original.",
      ),
    ],

    argentina: [
      p(
        "En Argentina la palabra «liberal» carga mucha historia. Durante buena parte del siglo XX se usó para nombrar cosas muy distintas entre sí: el proyecto de la generación del 80, ciertos ministros de economía de gobiernos militares, la apertura de los años 90 y, más recientemente, el {{libertarismo}}. Esas etapas no comparten programa ni siquiera método.",
      ),
      p(
        "Esto tiene una consecuencia práctica: en una discusión argentina, casi nunca alcanza con decir «soy liberal». Conviene decir qué se defiende concretamente. Ver [[liberalismo-en-argentina]] para la historia completa y [[corrientes-del-liberalismo]] para las diferencias internas.",
      ),
      callout(
        "debate",
        "Una advertencia honesta",
        "Que alguien se declare liberal no dice nada sobre si tiene razón. Este sitio existe para poder discutir con argumentos y fuentes, no para repartir credenciales de pureza ideológica.",
      ),
    ],

    positions: [
      {
        current: "Liberalismo clásico",
        stance:
          "El Estado debe ser limitado pero activo en justicia, seguridad, defensa, moneda estable y ciertos bienes públicos.",
        reasoning:
          "Sin un marco institucional impuesto no hay contratos creíbles ni propiedad segura.",
      },
      {
        current: "Minarquismo",
        stance:
          "Sólo justicia, seguridad y defensa. Todo lo demás, provisión privada o voluntaria.",
        reasoning:
          "Cualquier función adicional abre la puerta a un crecimiento que no se detiene.",
      },
      {
        current: "Anarcocapitalismo",
        stance:
          "Ninguna función estatal: también la justicia y la seguridad pueden proveerse en el mercado.",
        reasoning:
          "Un monopolio de la fuerza financiado por impuestos es incompatible con el principio de no agresión.",
      },
      {
        current: "Liberalismo social",
        stance:
          "Compatible con seguros sociales amplios financiados por impuestos, siempre que no sustituyan la iniciativa individual.",
        reasoning:
          "Ciertas condiciones materiales mínimas son precondición de la autonomía real.",
      },
    ],

    critiques: [
      {
        objection:
          "Decir que el liberalismo es «un método» y no un programa es una forma de escaparle a las consecuencias concretas de las políticas que defiende.",
        response: [
          p(
            "Es una objeción válida y conviene tomarla en serio. Un método que en la práctica siempre concluye lo mismo funciona como programa aunque se presente como neutral.",
          ),
          p(
            "La respuesta honesta es doble: sí, el método tiene una preferencia por defecto (la libertad no necesita justificarse), y esa preferencia no es neutral. Pero también es cierto que liberales que aplican el mismo método llegan a conclusiones opuestas sobre inmigración, propiedad intelectual, herencia o política monetaria.",
          ),
        ],
      },
    ],

    openDebate: [
      p(
        "Sigue discutido si existe un «test» que defina quién es liberal. Algunas propuestas: el principio de no agresión (rechazado por liberales consecuencialistas), la defensa del Estado de derecho (demasiado amplio: lo aceptan socialdemócratas), o la primacía de la libertad individual sobre otros valores (más preciso, pero difícil de aplicar en casos concretos).",
      ),
    ],

    keyIdeas: [
      "Ser liberal es más un modo de razonar que un conjunto de opiniones.",
      "La carga de la prueba recae sobre quien quiere restringir, no sobre quien quiere hacer.",
      "Mirar incentivos y efectos no visibles, no sólo intenciones.",
      "No comparar instituciones reales con instituciones ideales.",
    ],
    related: [
      "que-es-el-liberalismo",
      "libertad",
      "corrientes-del-liberalismo",
      "escasez-e-incentivos",
      "liberalismo-en-argentina",
    ],
    glossary: ["trade-off", "incentivo", "coercion", "capitalismo-de-amigos"],
    sources: ["bastiat-ve", "friedman-capitalismo", "hayek-camino", "mises-accion"],
    furtherReading: [
      {
        title: "Lo que se ve y lo que no se ve",
        author: "Frédéric Bastiat",
        why: "Doce ejemplos cortos que enseñan el reflejo de buscar los costos ocultos. Se lee en una tarde.",
        sourceId: "bastiat-ve",
        level: "inicial",
      },
      {
        title: "La economía en una lección",
        author: "Henry Hazlitt",
        why: "Extiende el método de Bastiat a la política económica del siglo XX.",
        sourceId: "hazlitt-leccion",
        level: "inicial",
      },
    ],
  },

  // =========================================================================
  {
    slug: "libertad",
    title: "¿Qué es la libertad?",
    question: "¿Qué es la libertad?",
    summary:
      "Hay al menos dos sentidos distintos —no ser obligado y poder hacer efectivamente— y buena parte de las discusiones políticas se explican porque cada lado usa uno diferente.",
    category: "empeza-aca",
    level: "inicial",
    topics: ["fundamentos", "filosofía política"],
    tags: ["libertad", "ruta-inicial", "nivel-1"],
    updated: "2026-08-15",
    status: "publicado",

    simple: [
      p(
        "Cuando alguien dice «libertad» puede estar diciendo dos cosas muy distintas, y ahí empiezan casi todos los malentendidos.",
      ),
      p(
        "**Sentido 1 — que nadie te obligue.** Sos libre si ninguna persona te impide hacer lo que querés. No hay nadie apuntándote, encerrándote ni prohibiéndote.",
      ),
      p(
        "**Sentido 2 — que efectivamente puedas.** Sos libre si tenés los medios reales para hacer lo que querés: plata, salud, educación, tiempo.",
      ),
      callout(
        "ejemplo",
        "Un ejemplo que aclara la diferencia",
        "Nadie te prohíbe viajar a Japón. En el sentido 1, sos totalmente libre de hacerlo. Si no tenés el dinero del pasaje, en el sentido 2 no lo sos.",
      ),
      p(
        "La tradición liberal usa sobre todo el sentido 1. No porque el segundo no importe, sino porque sostiene que son cosas distintas y que mezclarlas trae problemas: si «libertad» significa «tener medios», entonces quitarle recursos a alguien por la fuerza para dárselos a otro podría llamarse «aumentar la libertad», y la palabra deja de servir para distinguir entre obligar y no obligar.",
      ),
    ],

    technical: [
      h("Libertad negativa y libertad positiva"),
      p(
        "La distinción se popularizó con la conferencia de Isaiah Berlin *Dos conceptos de libertad* (1958), aunque el problema es mucho anterior.",
      ),
      compare(
        {
          title: "Libertad negativa",
          subtitle: "Libertad de que no te impidan",
          items: [
            "Se define por la **ausencia de interferencia** de otras personas.",
            "Se viola por coerción: violencia, amenaza, prohibición, fraude.",
            "Es medible en términos relativamente objetivos: ¿existe una prohibición? ¿hay una pena?",
            "No la limita la naturaleza: no poder volar no es una falta de libertad.",
          ],
        },
        {
          title: "Libertad positiva",
          subtitle: "Libertad para hacer efectivamente",
          items: [
            "Se define por la **capacidad real** de realizar los propios planes.",
            "Se viola por pobreza, ignorancia, enfermedad, falta de oportunidades.",
            "Requiere definir qué capacidades cuentan, lo cual es discutible.",
            "Puede justificar intervenir sobre terceros para ampliarla.",
          ],
        },
      ),
      h("El problema del límite"),
      p(
        "Ninguna concepción sensata de la libertad es ilimitada, porque la libertad de cada uno choca con la de los demás. La formulación liberal más conocida del criterio de límite es el **principio del daño** de [[mill|John Stuart Mill]]:",
      ),
      quote(
        "El único fin por el cual la humanidad está justificada, individual o colectivamente, para interferir en la libertad de acción de cualquiera de sus miembros es la propia protección. El único propósito por el cual el poder puede ejercerse legítimamente sobre un miembro de una comunidad civilizada, contra su voluntad, es evitar el daño a los demás.",
        "John Stuart Mill, On Liberty, capítulo I",
        "mill-on-liberty",
      ),
      p(
        "El principio es más difícil de aplicar de lo que parece, porque casi toda acción afecta de algún modo a terceros. La discusión sobre qué cuenta como «daño» —¿la ofensa? ¿el perjuicio económico por competir mejor? ¿el riesgo?— sigue abierta.",
      ),
      h("Libertad y ley"),
      p(
        "Un punto que suele malinterpretarse: para la tradición liberal la ley **no es lo opuesto** a la libertad. Locke lo dice de manera directa: donde no hay ley no hay libertad, porque sin reglas conocidas cada uno queda a merced del más fuerte. Lo que amenaza la libertad no es la ley general y previsible, sino el mandato arbitrario y particular.",
      ),
    ],

    everyday: [
      p("Cómo se nota la diferencia en tu vida:"),
      ul(
        "Elegir carrera aunque tu familia prefiera otra — libertad negativa frente a presión social (que no es coerción, pero pesa).",
        "Renunciar a un trabajo sin pedir permiso — libertad de contratar, que corta para los dos lados.",
        "Decir algo impopular sin miedo a una sanción legal — libertad de expresión.",
        "Ahorrar en la moneda que quieras — un caso donde en Argentina la libertad negativa estuvo efectivamente restringida. Ver [[cepo-cambiario]].",
      ),
    ],

    argentina: [
      p(
        "La Constitución argentina protege la libertad en sentido negativo con una fórmula notablemente amplia en el artículo 19, que reserva a la esfera privada todas las acciones que no dañan a terceros ni ofenden el orden público.",
      ),
      p(
        "El artículo 14 enumera libertades concretas —trabajar, comerciar, navegar, peticionar, entrar y salir del territorio, publicar ideas sin censura previa, usar y disponer de la propiedad, asociarse, profesar el culto, enseñar y aprender—, pero las reconoce «conforme a las leyes que reglamenten su ejercicio». El artículo 28 pone el límite de esa reglamentación:",
      ),
      quote(
        "Los principios, garantías y derechos reconocidos en los anteriores artículos, no podrán ser alterados por las leyes que reglamenten su ejercicio.",
        "Constitución Nacional, artículo 28",
        "cn-argentina",
      ),
      p(
        "La tensión entre el 14 («conforme a las leyes») y el 28 («no podrán ser alterados») es una de las discusiones jurídicas argentinas más persistentes: dónde termina reglamentar y empieza suprimir. Ver [[constitucion-1853]].",
      ),
    ],

    liberalArgument: [
      p(
        "El liberalismo prioriza la libertad negativa por tres razones, que conviene distinguir:",
      ),
      ol(
        "**Precisión.** Se puede saber con relativa claridad si alguien fue obligado. En cambio «tener capacidad real de hacer X» admite infinitas interpretaciones, y quien define la lista termina teniendo poder sobre los demás.",
        "**Compatibilidad.** La libertad negativa de todos es simultáneamente realizable: que nadie te obligue no requiere que otro haga algo por vos. La libertad positiva de todos no lo es: si mi libertad exige que otros me provean recursos, sus libertades chocan.",
        "**Riesgo de abuso.** Históricamente, la idea de «liberar» a la gente de sus propias elecciones equivocadas fue el argumento estándar de regímenes autoritarios.",
      ),
      callout(
        "opinion",
        "Interpretación, no dato",
        "Estas tres razones son argumentos filosóficos discutidos, no hechos verificables. Filósofos serios los rechazan.",
      ),
    ],

    critiques: [
      {
        objection:
          "Alguien que tiene que aceptar cualquier trabajo para comer no está eligiendo libremente, aunque nadie lo apunte con un arma. La libertad negativa sin condiciones materiales es una ficción.",
        from: "Crítica clásica del socialismo y de la socialdemocracia; también de la teoría de las capacidades de Amartya Sen",
        response: [
          p(
            "La respuesta liberal más honesta reconoce que hay algo real acá: la necesidad extrema restringe efectivamente las opciones y eso importa moralmente.",
          ),
          p(
            "Lo que la tradición discute es la inferencia. Que las opciones de alguien sean pocas no significa que quien le ofrece una opción adicional lo esté coaccionando: el empleador no creó la necesidad, y prohibir esa oferta deja a la persona con menos opciones, no con más.",
          ),
          p(
            "La respuesta práctica liberal apunta a **ampliar el conjunto de opciones** —más competencia por trabajadores, menos barreras para contratar, más {{productividad}}— antes que a prohibir las peores.",
          ),
          p(
            "Sen sostiene, en cambio, que la libertad debe medirse por capacidades efectivas y que eso justifica intervención pública en salud y educación. El desacuerdo es genuino y no está saldado.",
          ),
        ],
        unresolved: true,
      },
      {
        objection:
          "La publicidad, los algoritmos y la manipulación afectan lo que la gente quiere. ¿Se puede llamar libre a una elección así?",
        response: [
          p(
            "El liberalismo distingue entre **influir** y **obligar**. Toda vida social influye sobre las preferencias: la familia, la escuela, los amigos, la religión, la publicidad.",
          ),
          p(
            "El criterio liberal es si la persona podía elegir distinto sin sufrir violencia o fraude. La manipulación por engaño sí cae dentro de lo que la ley debe reprimir; la persuasión, no.",
          ),
          p(
            "El caso difícil son los diseños deliberadamente adictivos. Ahí hay desacuerdo real dentro del liberalismo.",
          ),
          p("Ver [[como-piensa-un-liberal-la-tecnologia]]."),
        ],
        unresolved: true,
      },
    ],

    openDebate: [
      ul(
        "¿Qué cuenta como «daño a terceros»? De la respuesta dependen las posiciones sobre drogas, contaminación y libertad de expresión.",
        "¿La coerción sólo puede venir de personas, o también de estructuras económicas?",
        "¿Hay libertades que uno no puede renunciar voluntariamente (por ejemplo, venderse como esclavo)? Mill decía que sí; Rothbard, que no.",
        "¿La libertad tiene valor en sí misma o porque produce buenos resultados?",
      ),
    ],

    uncertainty:
      "La distinción entre libertad negativa y positiva es una herramienta analítica útil pero simplifica un debate filosófico mucho más rico. Autores como Philip Pettit proponen una tercera vía —la libertad como no dominación— que no encaja bien en ninguna de las dos categorías.",

    keyIdeas: [
      "Libertad negativa: que nadie te obligue. Libertad positiva: que efectivamente puedas.",
      "El liberalismo prioriza la primera, sobre todo por precisión y porque es realizable para todos a la vez.",
      "El principio del daño de Mill es el criterio de límite más citado, y es más difícil de aplicar de lo que parece.",
      "Ley general y libertad no se oponen: sin reglas conocidas, gobierna el más fuerte.",
    ],
    related: [
      "que-es-el-liberalismo",
      "propiedad-privada",
      "estado",
      "estado-de-derecho",
      "democracia-y-liberalismo",
    ],
    glossary: ["libertad-negativa", "libertad-positiva", "coercion", "principio-del-dano", "autonomia"],
    sources: ["mill-on-liberty", "locke-two-treatises", "hayek-constitution", "cn-argentina", "sen-desarrollo"],
    furtherReading: [
      {
        title: "Sobre la libertad",
        author: "John Stuart Mill",
        why: "El texto donde se formula el principio del daño. Corto y todavía discutido.",
        sourceId: "mill-on-liberty",
        level: "intermedio",
      },
      {
        title: "Los fundamentos de la libertad",
        author: "Friedrich A. Hayek",
        why: "Reconstruye la libertad como ausencia de coerción arbitraria y su relación con el imperio de la ley.",
        sourceId: "hayek-constitution",
        level: "avanzado",
      },
      {
        title: "Desarrollo y libertad",
        author: "Amartya Sen",
        why: "La crítica más seria a la concepción puramente negativa, desde adentro de la tradición liberal.",
        sourceId: "sen-desarrollo",
        level: "avanzado",
      },
    ],
  },
];
