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

export const estado: Article[] = [
  // =========================================================================
  {
    slug: "estado",
    title: "¿Qué es el Estado y para qué sirve?",
    question: "¿Qué es el Estado? ¿Para qué sirve? ¿Cuánto Estado hace falta?",
    summary:
      "La organización que tiene el monopolio del uso legítimo de la fuerza en un territorio. Los liberales no coinciden sobre cuánto debe hacer, pero sí sobre que necesita límites que no dependan de quién gobierne.",
    category: "empeza-aca",
    level: "inicial",
    topics: ["fundamentos", "filosofía política"],
    tags: ["estado", "gobierno", "ruta-inicial", "nivel-2"],
    updated: "2026-08-15",
    status: "publicado",

    simple: [
      p(
        "Si alguien te obliga a darle plata, es un robo. Si el Estado te obliga a pagar impuestos, es legal. ¿Cuál es la diferencia?",
      ),
      p(
        "La respuesta define qué es el Estado: es la única organización que puede usar la fuerza **de manera reconocida como legítima** dentro de un territorio. Es el que puede cobrarte, multarte, detenerte y juzgarte, y el que impide que otros lo hagan por su cuenta.",
      ),
      p(
        "Esto no es un detalle: es *la* característica. Todo lo demás que hace el Estado —hospitales, escuelas, rutas— también lo pueden hacer otros. Lo que sólo el Estado hace es usar la fuerza sin que eso se considere un delito.",
      ),
      callout(
        "ejemplo",
        "Por qué los liberales insisten tanto con esto",
        "Porque si una organización tiene el monopolio de la fuerza, la pregunta urgente es **quién la controla a ella**. Un Estado sin límites es peligroso aunque lo dirija gente bienintencionada, porque los límites tienen que funcionar también cuando gobierne alguien que no lo sea.",
      ),
    ],

    technical: [
      h("Definición"),
      p(
        "La definición más usada es la de Max Weber: el Estado es la comunidad humana que reclama con éxito el **monopolio del uso legítimo de la fuerza física** dentro de un territorio determinado. Los tres elementos —territorio, población y poder soberano— son la definición estándar en derecho público.",
      ),
      h("Por qué existiría un Estado: el argumento contractualista"),
      p(
        "[[locke|Locke]] planteó el problema así: imaginemos personas sin gobierno. Tienen derechos, pero cada uno debe defenderlos por su cuenta. Eso genera tres problemas prácticos:",
      ),
      ol(
        "**Falta un juez imparcial.** Cada uno juzga en causa propia y se equivoca a su favor.",
        "**Falta una ley conocida y común.** Sin reglas comunes, cada uno interpreta distinto.",
        "**Falta poder para ejecutar las sentencias.** Tener razón no sirve si no se puede hacer valer.",
      ),
      p(
        "El Estado surge, en este razonamiento, para resolver esos tres problemas. Y de ahí se sigue su límite: **existe para proteger derechos que ya existían, no para otorgarlos**. Si los viola sistemáticamente, pierde su justificación.",
      ),
      h("Funciones: dónde está el desacuerdo"),
      compare(
        {
          title: "Funciones sobre las que hay acuerdo amplio entre liberales",
          items: [
            "Justicia: resolver conflictos con reglas conocidas.",
            "Seguridad interior: proteger de la violencia y el fraude.",
            "Defensa exterior.",
            "Hacer cumplir contratos y proteger la propiedad.",
          ],
        },
        {
          title: "Funciones discutidas dentro del liberalismo",
          items: [
            "Emisión de moneda (algunos proponen competencia de monedas).",
            "Educación (financiamiento sí, provisión estatal en discusión).",
            "Salud (seguros obligatorios, provisión, o nada).",
            "Infraestructura y bienes públicos.",
            "Red de contención para quienes no pueden trabajar.",
            "Regulación ambiental y de externalidades.",
          ],
        },
      ),
      h("Bienes públicos y por qué complican el argumento"),
      p(
        "Un {{bien público}} en sentido económico tiene dos propiedades: es **no rival** (que yo lo use no reduce lo que queda para otro) y **no excluible** (no se puede impedir que lo use quien no pagó). El ejemplo canónico es la defensa nacional.",
      ),
      p(
        "El problema es el **free rider**: si nadie puede ser excluido, a cada uno le conviene no pagar y usarlo igual. Si todos razonan así, el bien no se produce aunque todos lo quieran. Este es el argumento económico más sólido a favor de la provisión estatal, y los liberales clásicos lo aceptan.",
      ),
      callout(
        "ojo",
        "Cuidado con el uso del concepto",
        "«Bien público» tiene un significado técnico preciso. La salud y la educación **no** son bienes públicos en ese sentido: son rivales y excluibles. Se puede argumentar a favor de financiarlas públicamente por otras razones (externalidades, equidad), pero no invocando esta categoría. Es un error frecuente en la discusión pública.",
      ),
    ],

    argentina: [
      p(
        "El Estado argentino es **federal**: coexisten el Estado nacional, 23 provincias, la Ciudad Autónoma de Buenos Aires y más de dos mil municipios. Las provincias conservan todo el poder no delegado expresamente a la Nación (artículo 121 de la Constitución).",
      ),
      p(
        "Esto significa que servicios centrales como educación, salud y seguridad son mayoritariamente **provinciales**, no nacionales. Es un dato imprescindible para cualquier discusión seria sobre gasto público o comparaciones internacionales. Ver [[gasto-publico]].",
      ),
      p(
        "La Constitución diseña un Estado con poder acotado: derechos enumerados en los artículos 14 a 20, división de poderes, prohibición de la suma del poder público en el artículo 29, y el límite del artículo 28 a la reglamentación de los derechos.",
      ),
      quote(
        "El Congreso no puede conceder al Ejecutivo nacional, ni las Legislaturas provinciales a los gobernadores de provincia, facultades extraordinarias, ni la suma del poder público, ni otorgarles sumisiones o supremacías por las que la vida, el honor o las fortunas de los argentinos queden a merced de gobiernos o persona alguna.",
        "Constitución Nacional, artículo 29",
        "cn-argentina",
      ),
      callout(
        "debate",
        "La brecha entre norma y práctica",
        "Uno de los temas centrales de la discusión institucional argentina es el uso extendido de decretos de necesidad y urgencia y de delegación legislativa —previstos con carácter excepcional en los artículos 99 inciso 3 y 76— y hasta qué punto ese uso alteró el equilibrio de poderes diseñado. Es una discusión jurídica con posiciones fundadas de ambos lados, no un punto saldado.",
      ),
    ],

    liberalArgument: [
      p(
        "El liberalismo no es antiestatista en el sentido de querer el caos. Su posición se entiende mejor así: **el Estado es un instrumento peligroso y por eso conviene que sea fuerte en poco y limitado en mucho**.",
      ),
      p(
        "«Fuerte en poco» significa que un Estado que no logra garantizar justicia rápida ni seguridad no es un Estado chico: es un Estado que falla en lo único que sólo él puede hacer. Muchos liberales argentinos sostienen que el problema local no es un Estado demasiado grande sino uno que hace mal muchas cosas y peor las esenciales.",
      ),
      p("Los mecanismos de límite que la tradición propone:"),
      ul(
        "**División de poderes** — que ninguna rama concentre decisión y ejecución.",
        "**Federalismo** — que el poder esté disperso territorialmente y la gente pueda «votar con los pies».",
        "**Constitución rígida** — reglas difíciles de cambiar por una mayoría circunstancial.",
        "**Control judicial de constitucionalidad** — que un juez pueda invalidar una ley contraria a la Constitución.",
        "**Transparencia y rendición de cuentas.**",
        "**Reglas fiscales** — límites al déficit y al endeudamiento.",
      ),
    ],

    positions: [
      {
        current: "Liberalismo clásico",
        stance:
          "Estado limitado pero real: justicia, seguridad, defensa, moneda, marco legal y algunos bienes públicos.",
      },
      {
        current: "Minarquismo",
        stance:
          "Sólo justicia, seguridad y defensa. Nozick argumenta que un Estado mínimo puede surgir sin violar derechos, pero uno más extenso no.",
        reasoning: "Cualquier función adicional requiere transferencias forzadas no justificables.",
      },
      {
        current: "Anarcocapitalismo",
        stance:
          "Ninguna. Justicia y seguridad pueden proveerse en competencia; el monopolio de la fuerza es en sí mismo el problema.",
      },
      {
        current: "Liberalismo social",
        stance:
          "Estado con funciones sociales amplias, siempre que preserve el marco de libertades y no sustituya la iniciativa individual.",
      },
    ],

    critiques: [
      {
        objection:
          "Sin Estado no hay propiedad. La propiedad es una construcción legal que requiere un aparato que la registre y la haga cumplir. Entonces oponer «individuo» a «Estado» es un falso dilema.",
        response: [
          p(
            "Buena parte del liberalismo clásico acepta esto: por eso defiende un Estado, no su ausencia.",
          ),
          p(
            "El desacuerdo con la objeción está en la inferencia. Que el Estado sea necesario para la propiedad no implica que pueda disponer de ella sin límite: un carpintero es necesario para que exista una silla y no por eso puede sentarse en ella cuando quiera.",
          ),
          p(
            "El anarcocapitalismo rechaza la premisa y sostiene que arbitraje y protección pueden proveerse en competencia. La objeción más seria a esa posición es empírica: no hay casos de sociedades complejas y grandes que hayan funcionado así de manera sostenida.",
          ),
        ],
        unresolved: true,
      },
      {
        objection:
          "El Estado no es un mal necesario: es la forma en que una comunidad decide colectivamente su destino. Verlo sólo como amenaza empobrece la política.",
        response: [
          p(
            "La objeción republicana es seria. El liberalismo tiene efectivamente una mirada más instrumental del Estado que otras tradiciones.",
          ),
          p(
            "La respuesta liberal es histórica: las decisiones colectivas también han producido persecuciones, guerras y expropiaciones masivas. Los límites no existen contra la deliberación sino contra lo que las mayorías han hecho cuando no encontraron límites.",
          ),
        ],
      },
    ],

    openDebate: [
      ul(
        "Qué cuenta como bien público genuino y qué se financia públicamente por otras razones.",
        "Si un Estado mínimo es estable o tiende inevitablemente a crecer.",
        "Cómo controlar al Estado cuando el control depende de instituciones que él mismo administra.",
        "Si el federalismo argentino, tal como funciona, limita o duplica el poder.",
      ),
    ],

    keyIdeas: [
      "El Estado se define por el monopolio del uso legítimo de la fuerza, no por los servicios que presta.",
      "Para el liberalismo existe para proteger derechos previos, no para otorgarlos.",
      "Bien público tiene un sentido técnico preciso; salud y educación no lo son.",
      "Los liberales discrepan mucho sobre cuánto Estado, y coinciden en que necesita límites duros.",
    ],
    related: ["libertad", "propiedad-privada", "estado-de-derecho", "impuestos", "democracia-y-liberalismo", "educacion-y-liberalismo"],
    glossary: ["estado", "bien-publico", "free-rider", "monopolio-de-la-fuerza", "federalismo", "subsidiariedad"],
    sources: ["locke-two-treatises", "cn-argentina", "nozick-anarquia", "rothbard-nueva-libertad", "friedman-capitalismo"],
    furtherReading: [
      {
        title: "Anarquía, Estado y utopía",
        author: "Robert Nozick",
        why: "El argumento más riguroso a favor del Estado mínimo, escrito contra los anarcocapitalistas y contra Rawls a la vez.",
        sourceId: "nozick-anarquia",
        level: "avanzado",
      },
      {
        title: "La Ley",
        author: "Frédéric Bastiat",
        why: "Sobre qué pasa cuando la ley deja de proteger derechos y empieza a redistribuirlos.",
        sourceId: "bastiat-ley",
        level: "inicial",
      },
    ],
  },

  // =========================================================================
  {
    slug: "propiedad-privada",
    title: "¿Qué es la propiedad privada?",
    question: "¿Qué es la propiedad privada y por qué importa?",
    summary:
      "No es sólo «tener cosas»: es un conjunto de derechos sobre el uso, el fruto y la disposición de algo. Sin ella no hay cálculo económico posible ni horizonte para invertir.",
    category: "empeza-aca",
    level: "inicial",
    topics: ["fundamentos", "derecho", "economía básica"],
    tags: ["propiedad", "derechos", "ruta-inicial", "nivel-3"],
    updated: "2026-08-15",
    status: "publicado",

    simple: [
      p(
        "Propiedad privada no es sólo «esto es mío». Es un paquete de tres permisos sobre una cosa:",
      ),
      steps(
        { title: "Usarla", text: "Podés vivir en tu casa, manejar tu auto, usar tu computadora." },
        {
          title: "Quedarte con lo que produce",
          text: "Si alquilás tu departamento, el alquiler es tuyo. Si vendés lo que fabricás, la plata es tuya.",
        },
        {
          title: "Disponer de ella",
          text: "Podés venderla, prestarla, regalarla o destruirla. Es la parte que más se olvida y la más importante económicamente.",
        },
      ),
      p(
        "Cuando falta alguno de los tres, la propiedad está recortada aunque el papel siga a tu nombre. Si sos dueño de un departamento pero no podés elegir a quién alquilarlo, ni a qué precio, ni recuperarlo, seguís siendo «propietario» de algo bastante distinto.",
      ),
      callout(
        "ejemplo",
        "Por qué importa",
        "Nadie cuida ni mejora algo que no sabe si va a poder conservar. Si mañana te pueden sacar la casa, no arreglás el techo. Multiplicá eso por un país entero y tenés una explicación de por qué la inversión de largo plazo desaparece cuando la propiedad es insegura.",
      ),
    ],

    technical: [
      h("La propiedad como haz de derechos"),
      p(
        "En análisis económico del derecho la propiedad se entiende como un **haz de derechos** (*bundle of rights*) separables: usar, obtener frutos, transformar, excluir a terceros, transferir. Distintas regulaciones recortan distintos elementos de ese haz. Esto permite discusiones más precisas que «hay o no hay propiedad».",
      ),
      h("Las tres justificaciones clásicas"),
      ol(
        "**Del trabajo (Locke).** Cada uno es propietario de su persona y por lo tanto de su trabajo. Al mezclar el trabajo con algo no apropiado, lo hace propio. Locke agrega una condición conocida como «cláusula lockeana»: que quede suficiente y tan bueno para los demás.",
        "**Utilitaria (Hume, Smith, Mises).** No parte de un derecho natural sino de las consecuencias: sin propiedad definida nadie invierte, nadie cuida los recursos y no hay cálculo económico posible. La propiedad se justifica porque funciona.",
        "**De la libertad (Hayek, Friedman).** La propiedad dispersa es la condición material de la libertad política: si el Estado controla todos los recursos, disentir se vuelve imposible porque el disidente depende de él para comer y trabajar.",
      ),
      h("Propiedad y cálculo económico"),
      p(
        "El argumento de [[mises|Mises]] de 1920 es el más fuerte y el menos conocido. Sin propiedad privada de los medios de producción no hay compraventa de esos medios. Sin compraventa no hay precios para ellos. Sin precios no hay forma de comparar la eficiencia de métodos alternativos de producción.",
      ),
      p(
        "El punto no es que los planificadores sean malos o tontos: es que **carecen del instrumento de medición**. Un ingeniero soviético podía saber que una máquina produce más acero, pero no si valía la pena el acero comparado con lo que se sacrificó para producirla. Este es el «debate del cálculo económico».",
      ),
      h("La tragedia de los comunes"),
      p(
        "Cuando un recurso es de todos y de nadie, cada uno tiene incentivo a usarlo al máximo antes de que lo agote otro. Es el caso clásico de la pesca en aguas abiertas.",
      ),
      callout(
        "debate",
        "Ojo con la versión simplificada",
        "Elinor Ostrom recibió el Nobel en 2009 por documentar que muchas comunidades resolvieron este problema **sin** privatizar ni estatizar, mediante reglas propias, monitoreo mutuo y sanciones graduales. El dilema «privado o estatal» es más pobre que la realidad observada.",
      ),
    ],

    argentina: [
      p("La Constitución protege la propiedad en términos fuertes:"),
      quote(
        "La propiedad es inviolable, y ningún habitante de la Nación puede ser privado de ella, sino en virtud de sentencia fundada en ley. La expropiación por causa de utilidad pública, debe ser calificada por ley y previamente indemnizada. [...] La confiscación de bienes queda borrada para siempre del Código Penal argentino.",
        "Constitución Nacional, artículo 17",
        "cn-argentina",
      ),
      p("Tres consecuencias jurídicas concretas de ese texto:"),
      ul(
        "La **expropiación** es posible, pero requiere ley que declare la utilidad pública **y** pago previo. Los tres requisitos son acumulativos.",
        "La **confiscación** —privación sin compensación como pena— está prohibida expresamente.",
        "La Corte Suprema argentina desarrolló la doctrina de la **confiscatoriedad**: un impuesto puede ser inconstitucional si absorbe una parte sustancial de la renta o el capital, por vulnerar el artículo 17.",
      ),
      h("Dónde se tensiona en la práctica"),
      ul(
        "**Inflación.** Erosiona el poder de compra de los ahorros sin que exista un acto formal de expropiación. Es la crítica liberal más recurrente. Ver [[inflacion]].",
        "**Regulación de alquileres.** Recorta el derecho a disponer y a fijar condiciones. La experiencia argentina reciente con distintos regímenes es un caso de estudio sobre efectos no buscados.",
        "**Informalidad registral.** Una parte significativa de las viviendas en el país no tiene título perfeccionado, lo que impide usarlas como garantía de crédito.",
        "**Retenciones.** Gravan el producto de la exportación, lo que en la práctica reduce el fruto que el productor retiene.",
      ),
      callout(
        "dato",
        "Un punto sobre Hernando de Soto",
        "El economista peruano argumentó que la falta de títulos formales inmoviliza capital enorme en los países en desarrollo. Su tesis fue muy influyente y también criticada: los programas masivos de titulación no produjeron los efectos sobre el crédito que él predijo en varios países estudiados. Vale conocer ambas partes.",
      ),
    ],

    critiques: [
      {
        objection:
          "La propiedad actual proviene en gran medida de despojos históricos: conquista, esclavitud, apropiación de tierras indígenas. Defenderla tal como está es defender el resultado de esa violencia.",
        from: "Objeción histórica; Nozick mismo la considera la más difícil para su teoría",
        response: [
          p(
            "Nozick, el filósofo libertario más riguroso, admite que su teoría de la justicia en las pertenencias requiere un principio de **rectificación** para injusticias pasadas, y reconoce que no supo cómo formularlo.",
          ),
          p(
            "El problema práctico es genuino: ¿hasta qué generación se rectifica? ¿Cómo se identifica a los descendientes? ¿Qué pasa con quien compró de buena fe? Ninguna tradición resolvió esto satisfactoriamente.",
          ),
          p(
            "En Argentina la cuestión es concreta respecto de territorios indígenas, con un marco constitucional específico: el artículo 75 inciso 17 reconoce la posesión y propiedad comunitarias de las tierras que tradicionalmente ocupan los pueblos indígenas.",
          ),
        ],
        unresolved: true,
      },
      {
        objection:
          "La propiedad ilimitada permite concentraciones que terminan siendo poder político. Un dueño de todo el agua de una región tiene poder sobre las vidas de todos.",
        response: [
          p(
            "El caso extremo es reconocido incluso por Nozick, que menciona la cláusula lockeana como límite: la apropiación no puede empeorar la situación de los demás respecto de la línea de base.",
          ),
          p(
            "En la práctica, la respuesta liberal apunta a que las grandes concentraciones duraderas suelen apoyarse en privilegios legales más que en compra voluntaria, y que el remedio es eliminar esos privilegios. Ver [[competencia]].",
          ),
        ],
        unresolved: true,
      },
    ],

    openDebate: [
      ul(
        "**Propiedad intelectual.** Los liberales están genuinamente divididos: para unos es propiedad legítima sobre creaciones, para otros un monopolio otorgado por el Estado que restringe el uso de ideas no escasas.",
        "**Herencia.** ¿Es la extensión natural del derecho a disponer, o un privilegio que contradice la igualdad de oportunidades?",
        "**Recursos naturales.** ¿Cómo se apropia legítimamente algo que nadie produjo?",
        "**Datos personales.** ¿Son propiedad de quien los genera, de quien los procesa, o una categoría nueva?",
      ),
    ],

    keyIdeas: [
      "La propiedad es un haz de derechos: usar, obtener frutos y disponer.",
      "Sin propiedad de los medios de producción no hay precios para ellos y no hay cálculo económico posible.",
      "En Argentina el artículo 17 exige ley, utilidad pública e indemnización previa para expropiar.",
      "El origen histórico de la propiedad es la objeción más difícil, y ninguna tradición la resolvió bien.",
    ],
    related: ["libertad", "mercado", "estado", "capitalismo", "constitucion-1853", "inflacion"],
    glossary: ["propiedad", "expropiacion", "confiscatoriedad", "tragedia-de-los-comunes", "clausula-lockeana"],
    sources: ["locke-two-treatises", "cn-argentina", "mises-socialismo", "ostrom-commons", "nozick-anarquia", "hayek-camino"],
    furtherReading: [
      {
        title: "Segundo Tratado sobre el Gobierno Civil, capítulo V",
        author: "John Locke",
        why: "El capítulo «De la propiedad»: veinte páginas que fundaron toda la discusión posterior.",
        sourceId: "locke-two-treatises",
        level: "intermedio",
      },
      {
        title: "El gobierno de los bienes comunes",
        author: "Elinor Ostrom",
        why: "Para ver que entre propiedad privada individual y propiedad estatal hay un espacio real.",
        sourceId: "ostrom-commons",
        level: "avanzado",
      },
    ],
  },

  // =========================================================================
  {
    slug: "responsabilidad-individual",
    title: "Responsabilidad individual",
    question: "¿Qué significa hacerse cargo? ¿Hasta dónde uno es responsable de su vida?",
    summary:
      "La otra cara de la libertad: si nadie decide por vos, las consecuencias también son tuyas. Pero llevado al extremo, el principio se vuelve una forma de culpar a la gente por su mala suerte.",
    category: "cultura",
    level: "inicial",
    topics: ["cultura liberal", "ética"],
    tags: ["responsabilidad", "cultura", "mérito"],
    updated: "2026-08-15",
    status: "publicado",

    simple: [
      p(
        "Libertad y responsabilidad van juntas. Si sos vos el que decide qué estudiar, con quién juntarte y en qué gastar, también sos vos el que carga con el resultado. No se puede tener una sin la otra: pedir libertad para elegir y que otro se haga cargo cuando sale mal es tener las dos puntas.",
      ),
      p(
        "Esto no significa que todo lo que te pasa sea culpa tuya. Hay cosas que dependen de vos y cosas que no: dónde naciste, tu salud, una crisis económica, la suerte. La responsabilidad se aplica a lo que está bajo tu control, no a todo.",
      ),
      callout(
        "ojo",
        "El error de los dos extremos",
        "Un extremo dice que todo depende del esfuerzo personal, y termina culpando al pobre por ser pobre. El otro dice que nada depende de uno, y termina tratando a las personas como objetos sin agencia. Los dos son falsos y los dos hacen daño.",
      ),
    ],

    technical: [
      h("Responsabilidad en tres sentidos"),
      ul(
        "**Causal**: quién produjo un resultado.",
        "**Moral**: quién merece reproche o mérito por él. Requiere que la persona haya podido actuar de otro modo.",
        "**Institucional**: quién debe cargar con los costos. Es una decisión de diseño legal, no un hecho.",
      ),
      p(
        "Confundirlos es el origen de buena parte de las discusiones estériles. Que alguien sea causalmente responsable de un accidente no determina automáticamente quién debe pagarlo: eso lo define un régimen de responsabilidad civil, que se puede diseñar de distintas maneras.",
      ),
      h("Riesgo moral"),
      p(
        "El {{riesgo moral}} aparece cuando alguien no soporta las consecuencias de sus decisiones y por eso toma más riesgo del que tomaría. Es un concepto técnico de la economía de seguros, no un juicio moral.",
      ),
      p("Ejemplos donde el mecanismo es claro:"),
      ul(
        "Un banco que sabe que será rescatado presta con menos cuidado.",
        "Una empresa que sabe que será salvada por ser «demasiado grande para caer» asume más riesgo.",
        "Un seguro que cubre el 100% sin franquicia reduce el incentivo a prevenir.",
      ),
      p(
        "Es una razón por la que los liberales objetan los rescates: no porque no importe la gente afectada, sino porque un rescate enseña que se puede repetir la conducta.",
      ),
      h("El problema de la suerte"),
      p(
        "La filosofía moral contemporánea se ocupó mucho de esto. Si el talento, la familia y el país donde nacés son suerte, y si hasta la capacidad de esforzarse depende en parte de cómo te criaron, ¿cuánto queda que sea genuinamente «tuyo»?",
      ),
      p(
        "Rawls llevó el argumento al extremo: sostuvo que la distribución de talentos naturales es moralmente arbitraria y que nadie *merece* los beneficios que obtiene de ellos. Es una de las objeciones más fuertes a la idea de mérito y merece tomarse en serio.",
      ),
    ],

    argentina: [
      p(
        "El debate sobre responsabilidad individual en Argentina suele empantanarse porque se mezcla con la discusión sobre asistencia social. Conviene separar dos preguntas que no son la misma:",
      ),
      compare(
        {
          title: "Pregunta 1: ¿de quién es la responsabilidad?",
          items: [
            "Es una pregunta moral y causal.",
            "Admite matices: hay circunstancias, hay suerte, hay estructura.",
            "No determina por sí sola qué hacer.",
          ],
        },
        {
          title: "Pregunta 2: ¿qué política conviene?",
          items: [
            "Es una pregunta práctica sobre consecuencias.",
            "Depende de qué incentivos genere cada diseño.",
            "Se puede concluir que conviene asistir a alguien sin afirmar que no tiene responsabilidad, y viceversa.",
          ],
        },
      ),
      p(
        "Un ejemplo argentino donde esto importa: la discusión sobre programas sociales. La pregunta de si alguien «se esfuerza» es distinta de la pregunta de si un programa determinado reduce la pobreza o la perpetúa. La segunda se responde con evidencia sobre diseño —condicionalidades, compatibilidad con el trabajo registrado, duración—, no con juicios sobre las personas.",
      ),
    ],

    liberalArgument: [
      p(
        "El liberalismo defiende la responsabilidad individual por dos razones distintas que conviene no confundir:",
      ),
      ol(
        "**Como respeto.** Tratar a alguien como responsable es tratarlo como un agente capaz de decidir, no como un objeto al que le pasan cosas. La alternativa —decidir por él «por su bien»— es el paternalismo, que los liberales rechazan por degradante antes que por ineficaz.",
        "**Como mecanismo de aprendizaje.** Un sistema donde las consecuencias vuelven a quien decidió genera corrección; uno donde no vuelven, repite errores. Esto vale para personas, empresas y gobiernos.",
      ),
      callout(
        "opinion",
        "Un matiz que muchos liberales aceptan",
        "De la responsabilidad no se sigue el abandono. Se puede sostener a la vez que alguien es responsable de sus decisiones y que una sociedad decente no lo deja morir por una mala decisión. Estas dos cosas sólo parecen incompatibles si se confunde responsabilidad moral con destino merecido.",
      ),
    ],

    critiques: [
      {
        objection:
          "«Hacerse cargo» es fácil de decir para quien nació en una familia con recursos. La retórica de la responsabilidad individual funciona como justificación de la desigualdad.",
        response: [
          p(
            "Como crítica al **uso retórico** del principio, es acertada y hay que concederlo: la responsabilidad individual se invocó muchas veces para culpar a los que menos oportunidades tuvieron.",
          ),
          p(
            "Como crítica al **principio**, es más débil: que las circunstancias importen no anula la agencia. Dos personas en la misma circunstancia toman decisiones distintas y les va distinto, y negarlo también es faltar a la verdad.",
          ),
          p(
            "La formulación más defendible es: las circunstancias determinan el **rango** de opciones disponibles; la responsabilidad opera **dentro** de ese rango. Ampliar el rango es una tarea política; elegir dentro de él es personal.",
          ),
        ],
        unresolved: true,
      },
    ],

    keyIdeas: [
      "Libertad y responsabilidad son inseparables: quien decide, carga con las consecuencias.",
      "Responsabilidad causal, moral e institucional son cosas distintas.",
      "El riesgo moral es un concepto técnico: sin consecuencias, se toma más riesgo.",
      "Las circunstancias definen el rango de opciones; la responsabilidad opera dentro de ese rango.",
    ],
    related: ["libertad", "cultura-liberal", "que-significa-ser-liberal", "estado"],
    glossary: ["riesgo-moral", "paternalismo", "agencia", "merito"],
    sources: ["mill-on-liberty", "hayek-constitution", "rawls-justicia", "friedman-elegir"],
    furtherReading: [
      {
        title: "Los fundamentos de la libertad, capítulo 5",
        author: "Friedrich A. Hayek",
        why: "«Responsabilidad y libertad»: el mejor tratamiento liberal del tema, incluidos sus límites.",
        sourceId: "hayek-constitution",
        level: "avanzado",
      },
    ],
  },
];
