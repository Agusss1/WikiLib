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

export const corrientes: Article[] = [
  {
    slug: "alberdi",
    title: "Juan Bautista Alberdi",
    question: "¿Quién fue Alberdi y por qué importa tanto?",
    summary:
      "El autor que más influyó sobre el diseño institucional argentino. Escribió un programa completo de país y una teoría económica de la Constitución que sigue siendo el texto liberal argentino más importante.",
    category: "alberdi",
    level: "inicial",
    topics: ["historia argentina", "autores", "constitución"],
    tags: ["alberdi", "constitución", "argentina", "historia"],
    updated: "2026-08-15",
    status: "publicado",

    simple: [
      p(
        "Juan Bautista Alberdi (1810–1884) nació en Tucumán el mismo año de la Revolución de Mayo. Fue abogado, escritor y diplomático, y pasó gran parte de su vida en el exilio, en Montevideo, Chile y Europa.",
      ),
      p(
        "Su importancia se explica en una frase: **escribió el libro que sirvió de base a la Constitución argentina**. En 1852, apenas caído Rosas, publicó las *Bases y puntos de partida para la organización política de la República Argentina*. Al año siguiente se sancionó la Constitución, con una influencia muy directa de ese texto.",
      ),
      p("Su diagnóstico del problema argentino era este:"),
      ul(
        "El país era enorme y estaba prácticamente vacío.",
        "Sin gente no hay producción, ni mercado, ni instituciones que funcionen.",
        "Para que venga gente hay que ofrecerle derechos, seguridad y posibilidad de progresar.",
        "Entonces la Constitución debe estar diseñada para **atraer y retener población e inversión**.",
      ),
      callout(
        "ojo",
        "La frase que todo el mundo cita",
        "«Gobernar es poblar», de las *Bases*, es probablemente la frase más citada y más malinterpretada de la política argentina. En Alberdi no significaba simplemente traer gente: significaba traer trabajo, capital y hábitos de industria, y para eso hacía falta un marco de derechos y libertades que los hiciera venir y quedarse.",
      ),
    ],

    technical: [
      h("Las dos obras centrales"),
      compare(
        {
          title: "Bases (1852)",
          subtitle: "El programa político",
          items: [
            "Diagnóstico del atraso y propuesta de organización.",
            "Diseño de un Ejecutivo fuerte pero limitado por la ley.",
            "Inmigración, ferrocarriles, ríos navegables, libertad de culto.",
            "La segunda edición incluye un proyecto de constitución completo.",
          ],
        },
        {
          title: "Sistema económico y rentístico (1854)",
          subtitle: "La teoría económica de la Constitución",
          items: [
            "Sostiene que la Constitución contiene una política económica implícita.",
            "Organiza el análisis en producción, distribución y consumo de la riqueza.",
            "La tercera parte trata sobre rentas públicas, impuestos y crédito.",
            "Es el texto liberal argentino más importante y el menos leído.",
          ],
        },
      ),
      h("Sus ideas centrales"),
      ol(
        "**Libertades civiles antes que políticas.** Alberdi propuso deliberadamente otorgar amplios derechos civiles a todos los habitantes —incluidos los extranjeros— y ser más gradual con los derechos políticos. Su apuesta: la prosperidad y la población generarían después las condiciones para la ciudadanía plena. Es su tesis más discutida y discutible.",
        "**Inmigración como política de Estado.** No como fenómeno espontáneo sino como objetivo constitucional. El artículo 25 lo consagra; el artículo 20 le da a los extranjeros los mismos derechos civiles que a los ciudadanos.",
        "**Libertad económica como derecho constitucional.** Comerciar, navegar los ríos, ejercer industria, disponer de la propiedad: no son concesiones legales sino derechos.",
        "**Límites al poder de imponer.** En el *Sistema* sostiene que el impuesto excesivo o arbitrario destruye la riqueza que pretende gravar y viola la Constitución.",
        "**Adaptación, no copia.** Su crítica a quienes querían trasplantar instituciones extranjeras sin considerar las condiciones locales atraviesa toda su obra.",
      ),
      h("Alberdi y Sarmiento"),
      p(
        "Fueron adversarios intelectuales durante décadas. Compartían el diagnóstico general —organizar el país, poblarlo, educarlo— y diferían profundamente en el método y en la política concreta.",
      ),
      p(
        "La diferencia más relevante: Alberdi se opuso a la Guerra del Paraguay (1865–1870), que Sarmiento y Mitre impulsaron, y escribió contra ella. Esa posición le costó aislamiento político durante años. Es un dato importante para entender su liberalismo: era también antimilitarista.",
      ),
      callout(
        "debate",
        "Lo que no hay que idealizar",
        "Alberdi escribió en el siglo XIX y su obra contiene juicios sobre poblaciones y culturas que hoy resultan inaceptables, incluidas afirmaciones sobre la superioridad de la inmigración del norte de Europa. Presentarlo como un pensador sin aristas sería falsear el registro. Leerlo en serio incluye leer eso.",
      ),
    ],

    argentina: [
      p("Qué de Alberdi está efectivamente en la Constitución:"),
      ul(
        "**Artículo 14** — derechos de trabajar, comerciar, navegar, ejercer industria lícita.",
        "**Artículo 16** — igualdad ante la ley, sin fueros ni títulos de nobleza.",
        "**Artículo 17** — inviolabilidad de la propiedad.",
        "**Artículo 20** — derechos civiles plenos para los extranjeros.",
        "**Artículo 25** — el gobierno federal fomentará la inmigración.",
        "**Preámbulo** — «para todos los hombres del mundo que quieran habitar en el suelo argentino».",
      ),
      p(
        "Ver [[constitucion-1853]] para el análisis detallado de cada artículo.",
      ),
      h("Por qué sigue siendo relevante"),
      p(
        "Porque planteó preguntas que Argentina no terminó de responder: cómo hacer que el poder esté efectivamente limitado, cómo financiar el Estado sin destruir la producción, cómo atraer inversión de largo plazo, cómo lograr que las instituciones escritas se cumplan.",
      ),
      p(
        "El *Sistema económico y rentístico* contiene un capítulo sobre el impuesto que anticipa buena parte de la discusión fiscal contemporánea: la idea de que existe un límite más allá del cual el tributo destruye su propia base es explícita ahí, más de un siglo antes de que se popularizara la curva de Laffer.",
      ),
    ],

    critiques: [
      {
        objection:
          "El proyecto alberdiano era elitista: apostaba a la inmigración europea para «mejorar» la población y postergaba deliberadamente los derechos políticos de la mayoría.",
        response: [
          p(
            "Ambas cosas son ciertas y están en los textos. La preferencia por la inmigración del norte de Europa es explícita, y la postergación de los derechos políticos es una tesis argumentada, no una omisión.",
          ),
          p(
            "Lo que puede decirse en descargo, sin negar lo anterior: los derechos civiles que propuso eran genuinamente universales —el artículo 20 los extiende a todos los extranjeros sin distinción— y esa universalidad terminó operando en direcciones que él no previó.",
          ),
          p(
            "La apuesta de postergar lo político fue además empíricamente fallida: el sistema restringido no evolucionó por sí solo, y hubo que forzarlo con la Ley Sáenz Peña de 1912 tras décadas de fraude.",
          ),
        ],
        unresolved: true,
      },
      {
        objection:
          "Alberdi es usado hoy como bandera por gente que no lo leyó, para respaldar posiciones que él no sostuvo.",
        response: [
          p(
            "Es una observación correcta y vale para cualquier autor clásico. Alberdi defendió cosas que incomodan a varios de quienes lo citan: se opuso a la Guerra del Paraguay, desconfiaba del militarismo, y sostuvo que la Constitución obliga tanto en su parte de derechos como en su organización del poder.",
          ),
          p(
            "El remedio es el mismo de siempre: leer las fuentes. Ambas obras principales están en dominio público.",
          ),
        ],
      },
    ],

    keyIdeas: [
      "Las Bases (1852) influyeron directamente sobre la Constitución de 1853.",
      "El Sistema económico y rentístico (1854) es la teoría económica de esa Constitución.",
      "Su tesis más discutible: priorizar libertades civiles y postergar las políticas.",
      "Leerlo en serio incluye leer sus juicios de época sobre poblaciones y culturas.",
    ],
    related: ["constitucion-1853", "liberalismo-en-argentina", "propiedad-privada", "impuestos", "instituciones"],
    glossary: ["generacion-del-37", "bases", "constitucion"],
    sources: ["alberdi-bases", "alberdi-sistema", "cn-argentina", "sarmiento-facundo"],
    furtherReading: [
      {
        title: "Bases y puntos de partida...",
        author: "Juan Bautista Alberdi",
        why: "Empezar por los capítulos sobre inmigración y sobre el proyecto de constitución.",
        sourceId: "alberdi-bases",
        level: "intermedio",
      },
      {
        title: "Sistema económico y rentístico, tercera parte",
        author: "Juan Bautista Alberdi",
        why: "Sobre rentas públicas y límites al poder de imponer. La parte más subestimada de su obra.",
        sourceId: "alberdi-sistema",
        level: "avanzado",
      },
    ],
  },

  {
    slug: "corrientes-del-liberalismo",
    title: "Las corrientes del liberalismo",
    question: "¿Qué diferencia hay entre liberalismo, libertarismo, minarquismo y anarcocapitalismo?",
    summary:
      "El liberalismo no es una doctrina homogénea. Las diferencias entre sus familias son reales y a veces profundas, sobre todo respecto del Estado y del fundamento de los derechos.",
    category: "corrientes",
    level: "intermedio",
    topics: ["corrientes", "filosofía política"],
    tags: ["corrientes", "libertarismo", "minarquismo", "anarcocapitalismo"],
    updated: "2026-08-15",
    status: "publicado",

    simple: [
      p(
        "Si preguntás «¿qué piensa un liberal sobre X?», muchas veces la respuesta honesta es: **depende de qué liberal**. Adentro de la tradición hay familias que discrepan en cosas grandes.",
      ),
      p("La forma más rápida de ubicarse es preguntar cuánto Estado acepta cada una:"),
      steps(
        {
          title: "Liberalismo social",
          text: "Estado con funciones sociales amplias (educación, salud, seguros), siempre respetando libertades individuales y el mercado.",
        },
        {
          title: "Liberalismo clásico",
          text: "Estado limitado: justicia, seguridad, defensa, marco legal, moneda y algunos bienes públicos.",
        },
        {
          title: "Minarquismo",
          text: "Estado mínimo: sólo justicia, seguridad y defensa. Nada más.",
        },
        {
          title: "Anarcocapitalismo",
          text: "Ningún Estado: también justicia y seguridad pueden proveerse en competencia.",
        },
      ),
      callout(
        "ojo",
        "Un eje que no es el mismo",
        "Además del «cuánto Estado» existe otro eje independiente: **por qué**. Algunos liberales fundan su posición en derechos naturales previos a toda institución (iusnaturalismo); otros, en las consecuencias observables de cada arreglo (consecuencialismo). Dos personas pueden coincidir en la política y discrepar completamente en la razón.",
      ),
    ],

    technical: [
      h("Liberalismo clásico"),
      p(
        "**Qué sostiene:** derechos individuales, Estado de derecho, propiedad privada, economía de mercado, gobierno limitado y dividido. **Qué rechaza:** privilegios, arbitrariedad, planificación central, concentración de poder.",
      ),
      p(
        "**Visión del Estado:** necesario pero peligroso; debe ser fuerte en sus funciones esenciales y limitado en todo lo demás. **Autores:** Locke, Smith, Hume, Tocqueville, Mill, Hayek, Friedman, Alberdi.",
      ),
      h("Liberalismo político y liberalismo económico"),
      p(
        "No son corrientes distintas sino **dimensiones** de la misma tradición, que históricamente se separaron. El liberalismo político se ocupa de libertades civiles, división de poderes y límites al gobierno. El económico, de mercados, propiedad y comercio.",
      ),
      p(
        "El caso argentino 1880–1930 muestra que pueden ir por separado: economía muy abierta con política restringida. Para el liberalismo clásico, esa separación es una anomalía, no un modelo.",
      ),
      h("Liberalismo social"),
      p(
        "Sostiene que ciertas condiciones materiales mínimas son **precondición** de la autonomía real, no una violación de ella. Acepta seguros sociales, educación pública y sanidad financiada, siempre dentro de un marco de libertades y mercado.",
      ),
      p(
        "**Autores:** John Stuart Mill en su etapa tardía, Leonard Hobhouse, y en el debate contemporáneo Amartya Sen. Rawls es su interlocutor filosófico central, aunque su liberalismo igualitario suele clasificarse aparte.",
      ),
      h("Ordoliberalismo"),
      p(
        "Corriente alemana de posguerra (Walter Eucken, Wilhelm Röpke, Alfred Müller-Armack). Su tesis distintiva: **la competencia no se sostiene sola**. Sin un marco estatal que la defienda activamente, los mercados tienden a la concentración y al acuerdo entre grandes.",
      ),
      p(
        "El Estado ordoliberal no interviene en los resultados sino en las reglas: defensa fuerte de la competencia, política monetaria estricta, y un marco jurídico estable. Es la base intelectual de la «economía social de mercado» alemana.",
      ),
      h("Minarquismo"),
      p(
        "**Qué sostiene:** el Estado sólo puede ejercer legítimamente tres funciones —policía, justicia y defensa—, porque cualquier otra requiere transferencias forzadas no justificables.",
      ),
      p(
        "**Autor central:** Robert Nozick, en *Anarquía, Estado y utopía* (1974). Su argumento es notable porque va en dos direcciones: contra los anarcocapitalistas, muestra que un Estado mínimo podría surgir de un proceso sin violación de derechos; contra Rawls, que un Estado más extenso no puede justificarse.",
      ),
      h("Libertarismo"),
      p(
        "Familia amplia, con dos ramas principales. La **deontológica** parte del principio de no agresión y de la autopropiedad (Rothbard, Nozick). La **consecuencialista** llega a conclusiones similares por evaluación de resultados (David Friedman).",
      ),
      p(
        "En la práctica: máxima libertad individual tanto en lo económico como en lo civil —drogas, expresión, matrimonio, migración—, y máxima reducción del Estado.",
      ),
      h("Anarcocapitalismo"),
      p(
        "**Qué sostiene:** todo servicio, incluidas justicia y seguridad, puede y debe proveerse por acuerdos voluntarios y competencia. El monopolio de la fuerza es en sí mismo la violación fundamental.",
      ),
      p(
        "**Autor central:** Murray Rothbard. **Objeción principal:** no existen casos de sociedades grandes y complejas que hayan funcionado así de manera sostenida; los ejemplos históricos que se citan (Islandia medieval, ciertas comunidades comerciales) son discutidos en su alcance.",
      ),
      h("«Neoliberalismo»"),
      callout(
        "ojo",
        "Un término que hay que usar con cuidado",
        "«Neoliberalismo» tiene dos usos que no coinciden. Como **categoría histórica**, designa un movimiento intelectual de mediados del siglo XX (coloquio Walter Lippmann de 1938, Sociedad Mont Pelerin de 1947) que buscaba refundar el liberalismo reconociendo que el mercado necesita un marco institucional. Como **categoría polémica** contemporánea, se usa para nombrar políticas de desregulación y ajuste, casi siempre por quienes las critican. Es útil aclarar en qué sentido se lo está usando; de lo contrario la discusión no avanza.",
      ),
    ],

    argentina: [
      p(
        "En Argentina la distinción entre liberalismo clásico y libertarismo es especialmente relevante porque el crecimiento reciente del ideario se dio sobre todo por la vía libertaria, con fuerte presencia de la escuela austriaca (Mises, Rothbard, Hayek).",
      ),
      p("Las diferencias prácticas que más se notan en el debate local:"),
      compare(
        {
          title: "Liberal clásico argentino",
          items: [
            "Quiere un Estado más chico pero **más eficaz** en justicia y seguridad.",
            "Suele aceptar banco central con mandato acotado.",
            "Acepta una red de contención para quien no puede trabajar.",
            "Prioriza reformas institucionales y gradualismo verificable.",
          ],
        },
        {
          title: "Libertario argentino",
          items: [
            "Quiere reducir el Estado a un mínimo, o eliminarlo.",
            "Suele proponer dolarización o banca libre.",
            "Rechaza la asistencia estatal por principio, no por eficacia.",
            "Prioriza reformas de shock y reducción del gasto.",
          ],
        },
      ),
      callout(
        "debate",
        "Sin caricaturas",
        "Estas columnas son tendencias, no definiciones. Hay liberales clásicos partidarios de la dolarización y libertarios gradualistas. Usar las etiquetas para descalificar («no sos verdadero liberal») es exactamente el tipo de discusión que este sitio intenta evitar.",
      ),
    ],

    openDebate: [
      ul(
        "**Propiedad intelectual:** Rothbard y varios austriacos la rechazan; otros liberales la defienden como propiedad legítima.",
        "**Inmigración:** el libertarismo suele defender fronteras abiertas; algunos liberales conservadores no.",
        "**Herencia:** derecho a disponer versus igualdad de oportunidades.",
        "**Política monetaria:** desde metas de inflación hasta banca libre, todo dentro del liberalismo.",
        "**Fundamento:** derechos naturales o consecuencias. Es el desacuerdo más profundo y el menos discutido.",
      ),
    ],

    keyIdeas: [
      "El liberalismo es una familia de corrientes, no una doctrina única.",
      "Dos ejes independientes: cuánto Estado, y por qué (derechos naturales o consecuencias).",
      "El ordoliberalismo sostiene que la competencia necesita ser defendida activamente.",
      "«Neoliberalismo» tiene un sentido histórico y otro polémico; conviene aclarar cuál se usa.",
    ],
    related: ["que-es-el-liberalismo", "estado", "liberalismo-en-argentina", "que-significa-ser-liberal", "competencia"],
    glossary: ["minarquismo", "libertarismo", "anarcocapitalismo", "ordoliberalismo", "neoliberalismo", "principio-de-no-agresion"],
    sources: ["nozick-anarquia", "rothbard-nueva-libertad", "hayek-constitution", "friedman-capitalismo", "mill-on-liberty", "rawls-justicia"],
    furtherReading: [
      {
        title: "Anarquía, Estado y utopía",
        author: "Robert Nozick",
        why: "Discute simultáneamente con anarcocapitalistas y con igualitaristas. El mejor mapa del terreno.",
        sourceId: "nozick-anarquia",
        level: "avanzado",
      },
      {
        title: "Hacia una nueva libertad",
        author: "Murray N. Rothbard",
        why: "La exposición más directa del anarcocapitalismo, escrita para convencer.",
        sourceId: "rothbard-nueva-libertad",
        level: "intermedio",
      },
    ],
  },

  {
    slug: "tipo-de-cambio",
    title: "Tipo de cambio: por qué sube el dólar",
    question: "¿Por qué sube el dólar? ¿Qué es el tipo de cambio?",
    summary:
      "El dólar es un precio: el precio de una moneda en términos de otra. Cuando sube, en general no es que el dólar valga más sino que el peso vale menos, y eso remite a la emisión y a la confianza.",
    category: "economia",
    level: "intermedio",
    topics: ["economía argentina", "moneda"],
    tags: ["dólar", "tipo de cambio", "devaluación", "argentina"],
    updated: "2026-08-15",
    status: "publicado",

    simple: [
      p(
        "El tipo de cambio es simplemente **cuántos pesos cuesta un dólar**. Es un precio, como el del pan, y se forma igual: por oferta y demanda.",
      ),
      compare(
        {
          title: "Quién ofrece dólares",
          items: [
            "Exportadores que venden afuera y necesitan pesos para operar acá.",
            "Turistas extranjeros.",
            "Inversores que traen capital.",
            "El Banco Central, si decide vender reservas.",
          ],
        },
        {
          title: "Quién demanda dólares",
          items: [
            "Importadores que necesitan pagar mercadería.",
            "Gente que quiere ahorrar en una moneda estable.",
            "Turistas argentinos en el exterior.",
            "Empresas y Estado que deben pagar deuda en dólares.",
          ],
        },
      ),
      p(
        "Ahora la parte clave: cuando el dólar «sube» en Argentina, casi nunca es porque el dólar se fortaleció en el mundo. **Es que el peso se debilitó.** Y el peso se debilita cuando hay muchos pesos y poca confianza en ellos.",
      ),
      callout(
        "ejemplo",
        "La relación con todo lo demás",
        "Por eso este artículo se conecta con [[emision-monetaria|emisión]], [[inflacion|inflación]], [[deficit-fiscal|déficit]] y [[cepo-cambiario|cepo]]. En Argentina son partes del mismo problema, no temas separados.",
      ),
    ],

    technical: [
      h("Nominal y real"),
      p(
        "El **tipo de cambio nominal** es el precio de mercado: cuántos pesos por dólar. El **tipo de cambio real** ajusta por la inflación de los dos países: mide cuán caro o barato es el país medido en dólares.",
      ),
      p(
        "Esta distinción explica el fenómeno del **atraso cambiario**: si el tipo de cambio nominal se mantiene fijo mientras los precios internos suben, el país se encarece en dólares sin que el número del dólar se haya movido. Las exportaciones pierden competitividad, las importaciones se abaratan, y suele terminar con una corrección brusca.",
      ),
      h("Regímenes cambiarios"),
      compare(
        {
          title: "Tipo de cambio fijo",
          items: [
            "El banco central se compromete a un valor y lo defiende con reservas.",
            "Ventaja: ancla las expectativas y da previsibilidad.",
            "Desventaja: se pierde la política monetaria y no se puede absorber shocks.",
            "Ejemplo argentino: convertibilidad 1991–2001.",
          ],
        },
        {
          title: "Tipo de cambio flotante",
          items: [
            "Lo determina el mercado.",
            "Ventaja: absorbe shocks externos automáticamente.",
            "Desventaja: volatilidad, y en países con historia inflacionaria se traslada rápido a precios.",
            "Existen esquemas intermedios: bandas, flotación administrada, ajuste programado.",
          ],
        },
      ),
      p(
        "La **trinidad imposible** o trilema de Mundell-Fleming establece que no se pueden tener las tres cosas a la vez: tipo de cambio fijo, libre movimiento de capitales y política monetaria autónoma. Hay que resignar una. La convertibilidad resignó la política monetaria; el cepo resigna la libre movilidad de capitales.",
      ),
      h("El traslado a precios"),
      p(
        "El *pass-through* mide cuánto de una devaluación se traslada a los precios internos. En economías estables es bajo y lento. En Argentina es alto y rápido, porque los precios están más dolarizados y las expectativas reaccionan de inmediato. Esa es una de las razones por las que devaluar rinde menos en términos de competitividad que en otros países.",
      ),
    ],

    argentina: [
      p(
        "Los distintos «dólares» argentinos no son monedas diferentes: son **precios distintos para la misma cosa**, producto de que el acceso al mercado oficial está restringido.",
      ),
      ul(
        "**Oficial** — el del mercado regulado, con acceso limitado según la operación.",
        "**MEP y contado con liquidación** — surgen de comprar un bono en pesos y venderlo en dólares, en el país o en el exterior. Son operaciones legales de mercado de capitales.",
        "**Informal («blue»)** — mercado no regulado.",
        "**Tipos de cambio con impuestos** — el oficial más las percepciones impositivas aplicables a ciertas operaciones.",
      ),
      p(
        "La **brecha cambiaria** es la diferencia porcentual entre el oficial y los paralelos. Es un indicador de tensión: mide cuánto está dispuesta a pagar la gente por un dólar que no puede conseguir al precio oficial.",
      ),
      callout(
        "dato",
        "Dónde mirar los datos",
        "Tipo de cambio de referencia, reservas internacionales y base monetaria se publican en el informe de principales variables del BCRA, con frecuencia diaria y semanal. Es preferible a cualquier captura de pantalla.",
      ),
      h("Por qué el argentino ahorra en dólares"),
      p(
        "No es una preferencia cultural inexplicable: es una respuesta a que el peso perdió sistemáticamente su función de reserva de valor. Ver [[dinero]]. Mientras esa función no se recupere —lo que requiere años de estabilidad, no meses— la demanda de dólares como ahorro va a persistir.",
      ),
    ],

    liberalArgument: [
      p(
        "La posición liberal más común sostiene que el tipo de cambio, como cualquier precio, transmite información, y que fijarlo artificialmente destruye esa información sin cambiar la realidad que refleja.",
      ),
      p(
        "El argumento se completa con un punto sobre la causa: si el dólar sube persistentemente, la pregunta relevante no es «cómo frenarlo» sino **por qué la gente prefiere no tener pesos**. Atacar el síntoma con restricciones genera la brecha y los mercados paralelos.",
      ),
      p(
        "Sobre el régimen deseable hay desacuerdo real entre liberales: flotación con banco central independiente, competencia de monedas, o dolarización. Ver [[banco-central]].",
      ),
    ],

    critiques: [
      {
        objection:
          "Una devaluación libre en Argentina es socialmente devastadora: se traslada casi por completo a los precios de los alimentos y el golpe cae sobre los que menos tienen.",
        response: [
          p(
            "El efecto distributivo es real y está documentado: el traslado a precios de bienes transables es alto y rápido, y esos bienes pesan más en la canasta de los hogares de menores ingresos.",
          ),
          p(
            "La respuesta liberal es de comparación temporal: sostener un tipo de cambio atrasado no evita el ajuste, lo posterga y lo agranda. Las correcciones bruscas argentinas fueron precedidas casi siempre por períodos de atraso.",
          ),
          p(
            "Punto que conviene conceder: la secuencia importa. Una corrección cambiaria sin equilibrio fiscal previo tiende a trasladarse a precios sin ganancia de competitividad, y ahí la crítica tiene razón.",
          ),
        ],
        unresolved: true,
      },
    ],

    keyIdeas: [
      "El tipo de cambio es un precio; cuando sube, en general es el peso el que vale menos.",
      "Nominal versus real: el atraso cambiario ocurre sin que el número se mueva.",
      "Trilema: no se puede tener a la vez tipo fijo, libre movilidad de capitales y política monetaria propia.",
      "Los distintos dólares argentinos son consecuencia de la restricción al acceso, no monedas distintas.",
    ],
    related: ["cepo-cambiario", "inflacion", "emision-monetaria", "banco-central", "dinero", "ciclos-inflacionarios-argentinos"],
    glossary: ["tipo-de-cambio", "atraso-cambiario", "brecha-cambiaria", "pass-through", "trilema", "reservas"],
    sources: ["bcra", "ley-23928", "ley-25561", "fmi-weo", "friedman-capitalismo"],
    furtherReading: [
      {
        title: "Principales variables",
        author: "BCRA",
        why: "Reservas, base monetaria y tipo de cambio de referencia, actualizados.",
        sourceId: "bcra",
        level: "intermedio",
      },
    ],
  },

  {
    slug: "cepo-cambiario",
    title: "¿Qué es el cepo cambiario?",
    question: "¿Qué es el cepo? ¿Por qué se pone y qué consecuencias tiene?",
    summary:
      "Restricciones al acceso a moneda extranjera. Se aplican para frenar la pérdida de reservas, y generan de manera previsible brecha, mercados paralelos e incentivos a operar por los bordes.",
    category: "economia",
    level: "intermedio",
    topics: ["economía argentina", "moneda"],
    tags: ["cepo", "control de cambios", "dólar", "argentina"],
    updated: "2026-08-15",
    status: "publicado",

    simple: [
      p(
        "«Cepo» es el nombre popular de un conjunto de restricciones para comprar dólares: límites de monto, requisitos, impuestos adicionales, y a veces prohibición directa para ciertas operaciones.",
      ),
      p("La lógica de quien lo aplica es simple: si el Banco Central se está quedando sin reservas, restringir la compra frena la salida."),
      p("El problema es lo que pasa después, y es bastante predecible:"),
      steps(
        {
          title: "1. Aparece la brecha",
          text: "Si al precio oficial no todos pueden comprar, el que necesita dólares paga más en otro mercado. Nace el dólar paralelo.",
        },
        {
          title: "2. El exportador demora",
          text: "Si le pagan al oficial y el dólar real vale más, le conviene esperar a liquidar. Entran menos dólares.",
        },
        {
          title: "3. El importador adelanta",
          text: "Si puede comprar al oficial barato, le conviene importar todo lo que pueda ya. Salen más dólares.",
        },
        {
          title: "4. Se necesita más restricción",
          text: "Para tapar los agujeros que abrieron los pasos 2 y 3, se agregan más controles.",
        },
      ),
      callout(
        "ojo",
        "Este es el punto central",
        "El cepo no ataca la causa de que falten dólares: ataca la manifestación. Y como cambia los incentivos de exportadores e importadores, muchas veces **agrava el problema que quería resolver**.",
      ),
    ],

    technical: [
      h("Qué formas puede tomar"),
      ul(
        "Cupos de compra por persona y por mes.",
        "Requisitos de conformidad previa para importar.",
        "Percepciones impositivas que encarecen la compra.",
        "Obligación de liquidar exportaciones en un plazo determinado.",
        "Restricciones a girar utilidades y dividendos al exterior.",
        "Límites a operar simultáneamente en distintos mercados.",
      ),
      h("Los efectos documentados"),
      ol(
        "**Brecha cambiaria.** Cuanto mayor, más fuerte el incentivo a arbitrar entre mercados.",
        "**Subfacturación de exportaciones y sobrefacturación de importaciones.** Formas de mover divisas aprovechando la diferencia de precios.",
        "**Caída de la inversión extranjera.** Nadie invierte donde no puede retirar la ganancia.",
        "**Escasez de insumos importados.** Afecta la producción de bienes que se fabrican localmente pero requieren componentes de afuera.",
        "**Costo administrativo.** Empresas y personas dedican tiempo y recursos a gestionar permisos en lugar de a producir.",
        "**Discrecionalidad.** Quien administra los permisos tiene poder sobre quién puede importar. Es un terreno propicio para el {{capitalismo de amigos}}.",
      ),
      p(
        "El punto 6 es el que más preocupa desde una perspectiva institucional: un régimen de autorizaciones convierte una decisión de mercado en una decisión administrativa, con todos los problemas que eso implica para la [[igualdad-ante-la-ley|igualdad ante la ley]].",
      ),
      h("El argumento a favor, en su mejor versión"),
      p("Para discutirlo bien conviene presentarlo sin caricatura:"),
      compare(
        {
          title: "Defensa del control de cambios",
          items: [
            "Ante una corrida, sin controles se pierden todas las reservas en días.",
            "Una devaluación descontrolada tiene costos sociales inmediatos y severos.",
            "Permite ganar tiempo para corregir el desequilibrio de fondo.",
            "Varios países usaron controles temporales en crisis, incluidos algunos con recomendación del FMI.",
          ],
        },
        {
          title: "Objeciones",
          items: [
            "El «tiempo ganado» rara vez se usa para corregir: se usa para postergar.",
            "Los efectos negativos se acumulan mientras el control se mantiene.",
            "Cuanto más se prolonga, más costoso es salir.",
            "Genera una economía de permisos y una brecha que distorsiona todas las decisiones.",
          ],
        },
      ),
      callout(
        "debate",
        "Dónde está el desacuerdo real",
        "Casi nadie sostiene que un cepo permanente sea deseable. La discusión seria es sobre si un control transitorio en medio de una corrida es un mal menor, y sobre cómo salir sin generar un salto cambiario. Ahí hay desacuerdo genuino incluso entre economistas liberales.",
      ),
    ],

    argentina: [
      p(
        "Argentina aplicó controles de cambio en múltiples períodos desde la década de 1930. Los dos episodios más recientes y prolongados comenzaron en octubre de 2011 y en septiembre de 2019, con distintos grados de restricción y modificaciones frecuentes.",
      ),
      p(
        "El patrón observado en ambos períodos fue consistente con lo que predice el análisis: aparición y ampliación de la brecha, proliferación de tipos de cambio diferenciales, y sucesivas normas para cerrar vías de arbitraje.",
      ),
      p(
        "Ver [[ciclos-inflacionarios-argentinos]] para el contexto histórico y [[tipo-de-cambio]] para el funcionamiento del mercado cambiario.",
      ),
      callout(
        "ojo",
        "Cómo verificar",
        "Las normas cambiarias se publican en las comunicaciones «A» del BCRA. Es la fuente primaria y está disponible públicamente. Para reconstruir un período conviene ir ahí antes que a resúmenes periodísticos.",
      ),
    ],

    liberalArgument: [
      p(
        "La objeción liberal al cepo no es sólo económica sino sobre derechos: restringir en qué moneda una persona puede ahorrar es una limitación al uso y disposición de su propiedad, protegida por el artículo 17 de la Constitución.",
      ),
      p(
        "El argumento económico complementario es que el cepo trata un síntoma. La falta de dólares tiene causas —déficit fiscal financiado con emisión, atraso cambiario, falta de confianza— y ninguna se resuelve restringiendo el acceso.",
      ),
      p(
        "Sobre la salida, sin embargo, los liberales discrepan: salida rápida versus gradual, con o sin ancla cambiaria previa, y en qué orden respecto del equilibrio fiscal. No hay una respuesta liberal única.",
      ),
    ],

    keyIdeas: [
      "El cepo restringe el acceso a divisas para frenar la pérdida de reservas.",
      "Genera brecha, y esa brecha cambia los incentivos de exportar e importar.",
      "Convierte decisiones de mercado en decisiones administrativas discrecionales.",
      "Casi nadie defiende un cepo permanente; el desacuerdo real es sobre cómo y cuándo salir.",
    ],
    related: ["tipo-de-cambio", "inflacion", "banco-central", "deficit-fiscal", "ciclos-inflacionarios-argentinos", "propiedad-privada"],
    glossary: ["cepo", "brecha-cambiaria", "reservas", "subfacturacion", "capitalismo-de-amigos"],
    sources: ["bcra", "cn-argentina", "fmi-weo", "hayek-knowledge"],
    furtherReading: [
      {
        title: "Comunicaciones y normativa cambiaria",
        author: "BCRA",
        why: "La fuente primaria de las normas vigentes en cada momento.",
        sourceId: "bcra",
        level: "avanzado",
      },
    ],
  },
];
