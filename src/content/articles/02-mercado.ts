import {
  type Article,
  callout,
  compare,
  figure,
  formula,
  h,
  ol,
  p,
  quote,
  steps,
  ul,
} from "../schema";

export const mercado: Article[] = [
  // =========================================================================
  {
    slug: "escasez-e-incentivos",
    title: "Escasez, incentivos y costo de oportunidad",
    question: "¿Por qué hay que elegir? ¿Qué es un costo de oportunidad?",
    summary:
      "Las tres ideas que hacen falta para entender cualquier discusión económica: no alcanza para todo, la gente responde a incentivos y todo lo que hacés tiene como costo lo que dejaste de hacer.",
    category: "economia",
    level: "inicial",
    topics: ["economía básica"],
    tags: ["escasez", "incentivos", "trade-off", "ruta-economia"],
    updated: "2026-08-15",
    status: "publicado",

    simple: [
      p(
        "La economía no estudia «la plata». Estudia qué pasa cuando **querés más cosas de las que se pueden hacer**. Esa es toda la historia.",
      ),
      steps(
        {
          title: "Escasez",
          text: "Hay tiempo limitado, gente limitada, materiales limitados. Si usás una hora en algo, no la podés usar en otra cosa. Esto es cierto incluso en un país rico: nunca alcanza para todo lo que a la gente le gustaría.",
        },
        {
          title: "Costo de oportunidad",
          text: "El verdadero costo de algo no es lo que pagaste, sino **lo mejor que dejaste de hacer**. El costo de estudiar cuatro horas no son cero pesos: es la salida, el sueño o el trabajo que no hiciste.",
        },
        {
          title: "Incentivos",
          text: "La gente hace más de aquello que le conviene y menos de lo que le sale caro. No porque sea egoísta, sino porque responde a lo que enfrenta.",
        },
      ),
      callout(
        "ejemplo",
        "Por qué esto importa políticamente",
        "Casi todas las malas políticas económicas nacen de ignorar una de estas tres. «Que sea gratis» ignora la escasez. «Que el Estado lo pague» ignora el costo de oportunidad. «Que se prohíba aumentar» ignora los incentivos.",
      ),
    ],

    technical: [
      h("Escasez no es pobreza"),
      p(
        "Escasez significa que los recursos son limitados **respecto de los usos posibles**, no que la gente pase hambre. Suiza tiene escasez: sus médicos no pueden atender simultáneamente a todos los pacientes que querrían más consultas. Por eso toda sociedad, sea cual sea su sistema, necesita algún mecanismo para decidir quién obtiene qué.",
      ),
      p("Los mecanismos posibles son básicamente cinco, y todos se usan en algún grado:"),
      ul(
        "**Precios** — obtiene quien está dispuesto a pagar más.",
        "**Colas** — obtiene quien está dispuesto a esperar más (el costo se paga en tiempo, no en dinero).",
        "**Autoridad** — decide un funcionario según criterios definidos por él.",
        "**Sorteo** — al azar.",
        "**Fuerza** — obtiene quien puede tomarlo.",
      ),
      p(
        "Un error frecuente es creer que eliminar los precios elimina el racionamiento. No lo elimina: lo cambia de mecanismo. Cuando un precio se fija por debajo del nivel que equilibra el mercado, aparecen colas, faltantes, listas de espera, sobornos o mercados informales. Ver [[oferta-y-demanda]].",
      ),
      h("Costo de oportunidad"),
      formula(
        "Costo real de una acción = valor de la mejor alternativa que se descarta",
        "Por eso «gratis» casi nunca significa que no cuesta: significa que lo paga otro, o que se paga en algo que no es dinero.",
      ),
      p(
        "El costo de oportunidad explica por qué es engañoso evaluar una política sólo por sus beneficios. Un hospital construido con fondos públicos tiene un beneficio visible. Su costo de oportunidad es todo lo que esos mismos recursos habrían producido en otro uso —incluidos los usos que la gente que pagó el impuesto habría elegido.",
      ),
      h("Incentivos"),
      p(
        "Un incentivo es cualquier cosa que cambie el costo o el beneficio de una conducta. La regla práctica: **si querés predecir qué va a pasar con una norma, no leas su exposición de motivos; preguntá qué le conviene hacer a cada parte una vez que la norma existe.**",
      ),
      p(
        "Esto vale también para los funcionarios. La escuela de la {{elección pública}} (Public Choice) aplicó el análisis de incentivos al sector público: los políticos, burócratas y votantes también responden a los costos y beneficios que enfrentan, y esos no coinciden necesariamente con el interés general.",
      ),
    ],

    argentina: [
      p("Tres ejemplos argentinos donde los incentivos explicaron el resultado mejor que las intenciones:"),
      ul(
        "**Control de precios.** Repetido en distintos gobiernos con nombres diversos. El incentivo que genera para el productor es reducir cantidad o calidad, o desviar el producto a canales no controlados. Los faltantes son la consecuencia esperable, no un sabotaje.",
        "**Cepo cambiario.** Si el tipo de cambio oficial está por debajo del que la gente estaría dispuesta a pagar, conviene comprar al oficial y vender al paralelo. Aparecen la brecha, el «dólar puré» y la subfacturación de exportaciones. Ver [[cepo-cambiario]].",
        "**Impuestos altos sobre el empleo registrado.** Cuando registrar a un trabajador cuesta mucho más que no registrarlo, aumenta la proporción de trabajo informal. Esto no dice que las cargas sean injustas: dice qué conducta inducen.",
      ),
      callout(
        "ojo",
        "Cuidado con la causalidad",
        "Que un incentivo empuje en cierta dirección no prueba que sea la única causa de un fenómeno. La informalidad laboral argentina tiene además causas educativas, productivas y de fiscalización. Ver [[como-debatir]] sobre correlación y causalidad.",
      ),
    ],

    everyday: [
      ul(
        "Elegir una carrera es un problema de costo de oportunidad: no es «medicina o nada», es «medicina en lugar de seis años haciendo otra cosa».",
        "Si tu trabajo paga igual hagas mucho o poco, el incentivo a esforzarse desaparece. Eso no te vuelve mala persona; es el diseño.",
        "«Comprá 2, llevá 3» funciona porque cambia el costo marginal de la tercera unidad, no porque te convenza de algo.",
      ),
    ],

    liberalArgument: [
      p(
        "El liberalismo no «inventó» estas ideas: son herramientas de análisis que usan economistas de todas las orientaciones. Lo que sí es característicamente liberal es la conclusión que extrae de ellas:",
      ),
      ol(
        "Si el conocimiento sobre costos de oportunidad es local y personal, quien mejor puede evaluarlos es la persona involucrada, no un planificador.",
        "Si toda política genera incentivos no buscados, hay que ser modesto sobre la capacidad de diseñar resultados sociales desde arriba.",
        "Si la escasez es inevitable, prometer que algo será «gratis para todos» es esconder el costo, no eliminarlo.",
      ),
    ],

    critiques: [
      {
        objection:
          "El análisis de incentivos supone que las personas son calculadoras racionales. La economía del comportamiento mostró que sistemáticamente no lo son.",
        from: "Kahneman, Tversky, Thaler y la economía del comportamiento",
        response: [
          p(
            "La evidencia es sólida: las personas tienen sesgos predecibles, descuentan mal el futuro y son influidas por cómo se presenta una opción.",
          ),
          p(
            "La respuesta liberal más común no niega esto sino que hace dos observaciones. Primera: los sesgos no desaparecen cuando la persona pasa a ser funcionario, de modo que la conclusión «entonces que decida el Estado» no se sigue automáticamente. Segunda: los mercados generan retroalimentación (pérdidas, quiebras, reputación) que castiga los errores, mientras que los errores de política suelen persistir.",
          ),
          p(
            "Dicho eso, la crítica conductual erosionó genuinamente la versión más fuerte del argumento liberal, y varios liberales aceptan hoy formas de «paternalismo libertario» como opciones por defecto modificables.",
          ),
        ],
        unresolved: true,
      },
    ],

    keyIdeas: [
      "Escasez significa que hay que elegir, en cualquier sistema económico.",
      "El costo de algo es la mejor alternativa que se descarta, no lo que figura en el ticket.",
      "Eliminar precios no elimina el racionamiento: lo cambia por colas, faltantes o discrecionalidad.",
      "Para predecir el efecto de una norma, mirá incentivos y no intenciones.",
    ],
    related: ["oferta-y-demanda", "mercado", "competencia", "que-significa-ser-liberal", "inflacion"],
    glossary: ["escasez", "costo-de-oportunidad", "incentivo", "trade-off", "eleccion-publica"],
    sources: ["bastiat-ve", "hazlitt-leccion", "mises-accion", "hayek-knowledge"],
    furtherReading: [
      {
        title: "La economía en una lección",
        author: "Henry Hazlitt",
        why: "Capítulo 1: mirar los efectos de largo plazo sobre todos los grupos, no los de corto plazo sobre uno.",
        sourceId: "hazlitt-leccion",
        level: "inicial",
      },
    ],
  },

  // =========================================================================
  {
    slug: "oferta-y-demanda",
    title: "Oferta, demanda y precios",
    question: "¿Cómo se forman los precios? ¿Qué pasa si el Estado los fija?",
    summary:
      "Un precio no es una opinión ni un capricho: es información condensada sobre cuánto se quiere algo y cuánto cuesta producirlo. Por eso fijarlo por decreto no cambia la realidad que refleja.",
    category: "economia",
    level: "inicial",
    topics: ["economía básica", "precios"],
    tags: ["precios", "mercado", "control de precios", "ruta-economia"],
    updated: "2026-08-15",
    status: "publicado",

    simple: [
      p(
        "Imaginate que en tu barrio hay una sola panadería y todos quieren facturas el domingo a la mañana. Si hay poca cantidad y mucha gente, el precio tiende a subir. Si sobran facturas al mediodía, tiende a bajar.",
      ),
      p("Eso es básicamente todo:"),
      ul(
        "**Demanda**: cuánto quiere comprar la gente a cada precio. A mayor precio, en general se compra menos.",
        "**Oferta**: cuánto quieren vender los productores a cada precio. A mayor precio, en general se produce más.",
        "**Precio de mercado**: el punto donde las dos cantidades coinciden.",
      ),
      p(
        "Lo interesante es lo que un precio **hace**, no lo que es. Un precio alto es un cartel que dice dos cosas a la vez: *«a los compradores: esto es escaso, usalo con cuidado»* y *«a los productores: hace falta más de esto, vengan»*. Un precio bajo dice lo contrario.",
      ),
      callout(
        "ejemplo",
        "Por eso los controles de precios fallan",
        "Si tapás el termómetro, no baja la fiebre. Fijar por ley el precio de las facturas no crea harina, ni panaderos, ni hornos. Sólo apaga la señal que le decía a alguien que convenía producir más.",
      ),
    ],

    technical: [
      h("Qué determina la demanda y la oferta"),
      p(
        "La cantidad demandada depende del precio del bien, del ingreso de la gente, del precio de sustitutos y complementos, de las expectativas y de las preferencias. La cantidad ofrecida depende del precio, de los costos de producción, de la tecnología, de las expectativas y de la cantidad de oferentes.",
      ),
      p(
        "Distinción importante que se confunde todo el tiempo: un cambio **del precio** mueve la cantidad a lo largo de la curva; un cambio en cualquier **otro** factor mueve la curva entera. «Subió el precio porque aumentó la demanda» y «cayó la cantidad porque subió el precio» describen cosas distintas.",
      ),
      h("Elasticidad"),
      p(
        "La elasticidad mide cuánto responde la cantidad ante un cambio de precio. Si el pan sube 10% y la gente compra 2% menos, la demanda es **inelástica**. Si el turismo sube 10% y cae 30%, es **elástica**.",
      ),
      p(
        "Esto tiene una consecuencia política directa: los impuestos recaen más sobre el lado del mercado que menos puede escapar. Un impuesto legalmente puesto sobre el vendedor puede terminar pagándolo en su mayor parte el comprador, y viceversa. Quién *paga* un impuesto y quién lo *ingresa* al fisco son cosas distintas. Ver [[impuestos]].",
      ),
      h("Qué pasa cuando se fija un precio por decreto"),
      compare(
        {
          title: "Precio máximo (por debajo del de mercado)",
          subtitle: "Ejemplo: control de precios, alquileres congelados",
          items: [
            "La cantidad demandada sube y la ofrecida baja.",
            "Resultado: **faltante**.",
            "Aparece racionamiento por cola, discrecionalidad o mercado informal.",
            "Cae la calidad (es la forma de bajar el precio real sin tocar el nominal).",
            "Desaparece el incentivo a invertir para producir más.",
          ],
        },
        {
          title: "Precio mínimo (por encima del de mercado)",
          subtitle: "Ejemplo: salario mínimo muy alto, precios sostén",
          items: [
            "La cantidad ofrecida sube y la demandada baja.",
            "Resultado: **excedente**.",
            "En el mercado de trabajo, el excedente es desempleo o informalidad.",
            "Beneficia a quienes quedan adentro y perjudica a los que quedan afuera.",
            "El efecto depende críticamente de qué tan alto sea respecto del salario de mercado.",
          ],
        },
      ),
      callout(
        "debate",
        "Honestidad sobre el salario mínimo",
        "El caso del salario mínimo es el más discutido empíricamente. Estudios como los de Card y Krueger encontraron efectos sobre el empleo mucho menores que los predichos por el modelo simple, y la literatura sigue dividida. Un salario mínimo moderado y uno muy por encima del salario de mercado no tienen los mismos efectos.",
      ),
      h("Precios como información"),
      p(
        "El aporte específico de [[hayek|Hayek]] fue notar que el sistema de precios resuelve un problema de conocimiento, no sólo de asignación. Nadie necesita saber *por qué* subió el estaño para reaccionar correctamente: el precio ya resume el motivo. Esa es la razón por la que el cálculo económico centralizado es tan difícil, y es el núcleo del debate del cálculo que abrió [[mises|Mises]] en 1920.",
      ),
    ],

    argentina: [
      p(
        "Argentina tiene una de las historias más largas de intervención sobre precios del mundo occidental: precios máximos en distintas épocas, acuerdos de precios, programas de precios de referencia y controles sobre tarifas de servicios públicos.",
      ),
      p("El patrón que se repite en los episodios documentados:"),
      ol(
        "Al principio, el índice de precios oficial muestra desaceleración en los rubros controlados.",
        "Aparecen faltantes puntuales, reducción de tamaño de los envases y salida de productos de las góndolas.",
        "El control se vuelve más difícil de sostener a medida que suben los costos.",
        "Al levantarse, los precios se recomponen de golpe.",
      ),
      callout(
        "ojo",
        "Distinguir hecho de interpretación",
        "Que los controles hayan estado seguidos de faltantes es un hecho documentado. Que los controles hayan sido *la única causa* es una interpretación: la inflación de fondo, la incertidumbre cambiaria y los problemas de importación de insumos actuaban al mismo tiempo.",
      ),
      p(
        "Un punto que los liberales suelen subrayar: los controles de precios no atacan la causa de la inflación argentina, que la mayoría de los economistas ubica en el desequilibrio fiscal y monetario. Ver [[inflacion]] y [[deficit-fiscal]].",
      ),
    ],

    critiques: [
      {
        objection:
          "El modelo de oferta y demanda supone competencia perfecta, que casi nunca existe. Con monopolios o información asimétrica, el precio de mercado no es eficiente.",
        response: [
          p(
            "Correcto, y es economía estándar. El modelo simple es una primera aproximación, no una descripción completa. Ver [[competencia]] para monopolios y barreras de entrada.",
          ),
          p(
            "La respuesta liberal habitual: incluso en mercados imperfectos, el precio sigue transmitiendo información y sigue siendo mejor que la alternativa de fijarlo por autoridad, porque el regulador enfrenta el mismo problema de conocimiento **más** el problema de sus propios incentivos.",
          ),
        ],
      },
      {
        objection:
          "Hay bienes cuya demanda no debería depender de la capacidad de pago: medicamentos oncológicos, agua, vivienda.",
        response: [
          p(
            "Este es un desacuerdo moral genuino, no un error técnico. La objeción no dice que los controles funcionen, dice que la asignación por precio es injusta para ciertos bienes.",
          ),
          p(
            "La respuesta liberal más frecuente separa dos cosas: **cómo se produce** y **quién paga**. Se puede dejar que los precios coordinen la producción y, al mismo tiempo, transferir poder de compra a quien no llega —por ejemplo con transferencias directas en lugar de controles—, evitando destruir la señal que hace que el bien exista.",
          ),
          p(
            "Los críticos responden que en bienes con demanda muy inelástica esa transferencia termina siendo capturada por los oferentes vía precios más altos. Es un problema real y sin solución consensuada.",
          ),
        ],
        unresolved: true,
      },
    ],

    openDebate: [
      ul(
        "Cuán grandes son en la práctica los efectos negativos de un salario mínimo moderado.",
        "Si los controles temporales pueden servir para coordinar expectativas en una desinflación (la experiencia de los planes heterodoxos argentinos es discutida).",
        "Cómo tratar mercados donde el precio de mercado y el costo social difieren mucho (contaminación, congestión). Ver el teorema de Coase.",
      ),
    ],

    keyIdeas: [
      "El precio es información condensada sobre escasez relativa, no una opinión del vendedor.",
      "Un precio máximo produce faltantes; uno mínimo produce excedentes.",
      "Quien ingresa un impuesto al fisco no es necesariamente quien lo termina pagando.",
      "El modelo simple es una primera aproximación: monopolios y externalidades lo complican.",
    ],
    related: ["escasez-e-incentivos", "mercado", "competencia", "inflacion", "impuestos"],
    glossary: ["oferta", "demanda", "elasticidad", "precio-maximo", "faltante"],
    sources: ["hayek-knowledge", "smith-wn", "hazlitt-leccion", "mises-socialismo", "coase-social-cost"],
    furtherReading: [
      {
        title: "The Use of Knowledge in Society",
        author: "Friedrich A. Hayek",
        why: "Doce páginas. El mejor argumento sobre por qué los precios no se pueden reemplazar por un cálculo central.",
        sourceId: "hayek-knowledge",
        level: "intermedio",
      },
    ],
  },

  // =========================================================================
  {
    slug: "mercado",
    title: "¿Qué es el mercado?",
    question: "¿Qué es el mercado?",
    summary:
      "No es un lugar ni una entidad con voluntad propia: es el conjunto de intercambios voluntarios entre personas, y el mecanismo por el que la sociedad coordina sin que nadie dé la orden.",
    category: "empeza-aca",
    level: "inicial",
    topics: ["economía básica", "fundamentos"],
    tags: ["mercado", "coordinación", "ruta-inicial", "nivel-4"],
    updated: "2026-08-15",
    status: "publicado",

    simple: [
      p(
        "Cuando alguien dice «el mercado decidió» suena como si existiera un señor llamado Mercado tomando decisiones. No existe.",
      ),
      p(
        "El mercado es simplemente **toda la gente comprando y vendiendo**. Cuando comprás un café, sos el mercado. Cuando pedís aumento, sos el mercado. Cuando una empresa baja un precio porque nadie le compra, es el mercado.",
      ),
      p(
        "Lo notable es lo que sale de ahí. Nadie organiza que haya pan en tu barrio mañana a la mañana. No hay un Ministerio del Pan. Y sin embargo hay pan, casi todos los días, hecho con harina de un lugar, levadura de otro, en un horno fabricado en otro país, por gente que no se conoce entre sí y que no tiene la menor intención de alimentarte. Cada uno hizo su parte porque le convenía.",
      ),
      quote(
        "No es de la benevolencia del carnicero, del cervecero o del panadero de donde obtenemos nuestra cena, sino de su consideración por su propio interés.",
        "Adam Smith, La riqueza de las naciones, Libro I, capítulo II",
        "smith-wn",
      ),
      callout(
        "ojo",
        "Un malentendido frecuente",
        "Smith no está diciendo «sean egoístas». Está diciendo algo más raro: que en una sociedad extendida, cooperás todos los días con miles de desconocidos sin necesitar quererlos. Eso es un logro institucional, no una virtud personal.",
      ),
    ],

    technical: [
      h("Qué necesita un mercado para funcionar"),
      p(
        "Un mercado no aparece solo. Requiere un marco institucional que la tradición liberal considera parte del problema, no un supuesto:",
      ),
      ul(
        "**Derechos de {{propiedad}} definidos y seguros** — si no sé qué es mío, no invierto.",
        "**Contratos exigibles** — si el otro puede incumplir sin consecuencias, no comercio con desconocidos.",
        "**Justicia previsible y accesible** — un derecho que tarda diez años en hacerse valer casi no es un derecho.",
        "**Moneda con valor razonablemente estable** — sin unidad de cuenta confiable, los precios dejan de informar. Ver [[inflacion]].",
        "**Libertad de entrada** — sin ella hay intercambio, pero no {{competencia}}.",
        "**Información suficiente** — el fraude destruye la confianza que hace posible el intercambio.",
      ),
      callout(
        "dato",
        "Por qué esto importa",
        "Buena parte del liberalismo clásico sostiene que el Estado es *necesario* precisamente para proveer varias de estas condiciones. Decir «mercado libre» no significa «ausencia de reglas»: significa reglas generales e iguales en lugar de decisiones caso por caso.",
      ),
      h("Qué hace el mercado que es difícil de replicar"),
      ol(
        "**Coordina conocimiento disperso.** Nadie sabe cuánto trigo hace falta en el país. El precio del trigo agrega esa información sin que nadie la reúna.",
        "**Descubre, no sólo asigna.** El proceso competitivo genera información que antes no existía: qué quiere la gente, qué método es más barato, qué producto no funciona.",
        "**Da retroalimentación dura.** Las pérdidas obligan a corregir. Es un mecanismo de aprendizaje forzado que las organizaciones sin competencia no tienen.",
        "**Permite cooperar sin acuerdo previo.** Personas con valores incompatibles pueden comerciar. Eso reduce la necesidad de imponer una visión común.",
      ),
      h("El intercambio voluntario y la suma no nula"),
      p(
        "Una idea contraintuitiva pero central: en un intercambio voluntario **ganan las dos partes**, porque cada una valora más lo que recibe que lo que entrega. Si no fuera así, no aceptaría. El comercio no es un juego donde lo que uno gana el otro lo pierde.",
      ),
      p(
        "Esto es lo que separa el intercambio del robo, y por qué los liberales insisten tanto en la palabra «voluntario». La crítica seria a esta idea apunta a los casos donde el consentimiento es dudoso: necesidad extrema, información oculta, poder muy desigual.",
      ),
    ],

    argentina: [
      p(
        "En Argentina la palabra «mercado» arrastra una carga negativa considerable, en parte por experiencias concretas: crisis financieras, privatizaciones cuestionadas en los años 90 y empresas que operaron con protección estatal más que con competencia.",
      ),
      p(
        "Un punto que los liberales argentinos suelen subrayar es que **muchos de esos episodios no fueron fallas del mercado sino ausencia de él**: monopolios legales, empresas protegidas de la competencia externa, contratos renegociados discrecionalmente y regulaciones diseñadas por los propios regulados. Eso se llama {{capitalismo de amigos}} y es lo opuesto a un mercado abierto.",
      ),
      callout(
        "debate",
        "Cuidado con el argumento",
        "«Eso no era verdadero mercado» puede ser un análisis correcto o una forma de blindar la teoría contra toda evidencia. La versión seria del argumento exige mostrar concretamente qué barreras de entrada o privilegios legales existían, no simplemente afirmarlo.",
      ),
    ],

    everyday: [
      ul(
        "Cuando comparás precios en tres apps antes de comprar, estás haciendo funcionar el mercado: castigás al caro sin decirle nada.",
        "Cuando una app de delivery baja su comisión porque apareció otra, ganás por la competencia y no por la bondad de nadie.",
        "Cuando cambiás de laburo por uno que paga más, participás del mercado de trabajo. Tu renuncia es una señal de precio.",
      ),
    ],

    critiques: [
      {
        objection:
          "El mercado produce resultados eficientes pero moralmente arbitrarios: quien nace con más capital o mejores contactos gana más, y eso no tiene nada que ver con el mérito.",
        from: "Rawls y buena parte de la filosofía política contemporánea",
        response: [
          p(
            "Varios liberales aceptan esto directamente. [[hayek|Hayek]] sostenía que el mercado **no** remunera el mérito moral sino el valor que otros asignan a lo que uno ofrece, y que confundir ambas cosas es un error.",
          ),
          p(
            "El argumento liberal no es entonces «el mercado da a cada uno lo que merece», sino: es el sistema que mejor coordina y que más ha reducido la pobreza absoluta, y sus resultados no son injustos porque no son el producto de la voluntad de nadie en particular.",
          ),
          p(
            "Los críticos responden que un resultado no intencional igual puede ser injusto si podemos corregirlo. El desacuerdo es filosófico y sigue abierto.",
          ),
        ],
        unresolved: true,
      },
      {
        objection:
          "Los mercados fallan: externalidades, bienes públicos, información asimétrica, poder de mercado.",
        response: [
          p(
            "Es economía estándar y ningún liberal informado lo niega. La discusión no es si existen fallas de mercado, sino qué se sigue de ellas.",
          ),
          p(
            "El argumento liberal es de **comparación institucional**: mostrar que el mercado falla no alcanza para justificar intervenir; hay que mostrar que la intervención va a fallar menos, considerando los problemas de información e incentivos del regulador. La escuela de la elección pública llama a esto evitar el «nirvana fallacy».",
          ),
          p(
            "Elinor Ostrom agregó una tercera vía relevante: documentó comunidades que resolvieron problemas de recursos comunes sin Estado ni propiedad privada individual, con reglas propias.",
          ),
        ],
      },
    ],

    openDebate: [
      ul(
        "Qué hacer con externalidades a gran escala como el cambio climático, donde el problema de asignar derechos es enorme.",
        "Si las plataformas digitales con efectos de red constituyen un tipo nuevo de poder de mercado.",
        "Si la propiedad intelectual es un derecho de propiedad genuino o un monopolio otorgado por el Estado. Los liberales están genuinamente divididos.",
      ),
    ],

    keyIdeas: [
      "El mercado no es un ente: es el conjunto de intercambios voluntarios entre personas.",
      "Requiere instituciones —propiedad, contratos, justicia, moneda— que no aparecen solas.",
      "En un intercambio voluntario ganan las dos partes: no es un juego de suma cero.",
      "Que el mercado falle no implica automáticamente que la intervención mejore las cosas.",
    ],
    related: ["competencia", "capitalismo", "propiedad-privada", "oferta-y-demanda", "division-del-trabajo"],
    glossary: ["mercado", "competencia", "externalidad", "bien-publico", "capitalismo-de-amigos"],
    sources: ["smith-wn", "hayek-knowledge", "ostrom-commons", "coase-social-cost", "rawls-justicia"],
    furtherReading: [
      {
        title: "La riqueza de las naciones, Libro I",
        author: "Adam Smith",
        why: "Los primeros tres capítulos explican división del trabajo e intercambio mejor que casi cualquier manual moderno.",
        sourceId: "smith-wn",
        level: "intermedio",
      },
      {
        title: "El gobierno de los bienes comunes",
        author: "Elinor Ostrom",
        why: "Para entender que entre «mercado» y «Estado» hay más opciones de las que suele suponerse.",
        sourceId: "ostrom-commons",
        level: "avanzado",
      },
    ],
  },

  // =========================================================================
  {
    slug: "competencia",
    title: "¿Qué es la competencia?",
    question: "¿Qué es la competencia y por qué importa tanto?",
    summary:
      "No es rivalidad entre empresas por deporte: es el proceso que las obliga a servir al cliente en lugar de al revés. Sin libertad de entrada, hay empresas pero no competencia.",
    category: "economia",
    level: "inicial",
    topics: ["economía básica", "mercado"],
    tags: ["competencia", "monopolio", "regulación"],
    updated: "2026-08-15",
    status: "publicado",

    simple: [
      p(
        "La competencia es lo que pasa cuando **el que te vende algo sabe que podés irte a otro lado**. Esa posibilidad, aunque no la uses, cambia todo su comportamiento.",
      ),
      p(
        "Si en tu barrio hay una sola verdulería y no hay forma de que abra otra, esa verdulería puede cobrarte lo que quiera, atenderte mal y vender tomates feos. Si al lado puede abrir otra, no.",
      ),
      callout(
        "ejemplo",
        "La clave está en la puerta, no en el número",
        "Lo que disciplina a una empresa no es cuántos competidores tiene hoy, sino si **podría** aparecer uno mañana. Una sola empresa en un mercado abierto se comporta mejor que tres empresas protegidas por una ley que impide la entrada de una cuarta.",
      ),
    ],

    technical: [
      h("Competencia como proceso, no como estado"),
      p(
        "Los manuales suelen definir la «competencia perfecta» como un estado con infinitos oferentes, productos idénticos e información completa. Ese modelo sirve como referencia matemática, pero describe un mundo donde no hay nada que descubrir.",
      ),
      p(
        "La tradición austriaca —Mises, Hayek, Kirzner— propuso verla distinto: la competencia es un **proceso de descubrimiento**. Es rivalidad por encontrar qué quiere la gente, cómo producirlo más barato y qué combinación nadie probó. En esta visión, tener productos diferentes y información imperfecta no es una falla: es la razón por la que el proceso sirve para algo.",
      ),
      h("Barreras de entrada"),
      p("Lo que impide competir puede ser económico o legal, y la distinción importa:"),
      compare(
        {
          title: "Barreras económicas",
          items: [
            "Economías de escala grandes (una red ferroviaria).",
            "Inversión inicial muy alta.",
            "Marca y reputación construidas con años.",
            "Efectos de red (una red social vale por su gente).",
            "Suelen erosionarse con cambios tecnológicos.",
          ],
        },
        {
          title: "Barreras legales",
          items: [
            "Licencias y cupos limitados por norma.",
            "Aranceles y prohibiciones de importar.",
            "Requisitos regulatorios que sólo puede costear el grande.",
            "Concesiones exclusivas.",
            "No se erosionan solas: hay que derogarlas.",
          ],
        },
      ),
      p(
        "El punto liberal característico: **los monopolios más duraderos suelen ser los legales**, porque los económicos están permanentemente amenazados por la entrada de alguien con una idea mejor. Kodak, Blockbuster y Nokia dominaron sus mercados y desaparecieron sin intervención antimonopólica.",
      ),
      h("Captura del regulador"),
      p(
        "George Stigler documentó un fenómeno persistente: las regulaciones tienden a ser diseñadas, con el tiempo, en beneficio de los regulados. La razón es de incentivos: los regulados tienen mucho en juego y están organizados; los consumidores tienen poco cada uno y están dispersos.",
      ),
      p(
        "Por eso conviene mirar con atención quién apoya una regulación. Cuando las empresas grandes de un sector piden que se les exija más requisitos, muchas veces es porque el requisito las perjudica menos que a un entrante.",
      ),
    ],

    argentina: [
      p("Ejemplos argentinos donde el debate se centra en barreras de entrada:"),
      ul(
        "**Transporte de pasajeros.** Los regímenes de licencias y concesiones determinan quién puede operar. Cada apertura o restricción del sector generó discusión pública intensa.",
        "**Aerocomercial.** El sector estuvo históricamente muy regulado en rutas y tarifas; la flexibilización de la banda tarifaria y la entrada de operadores de bajo costo cambió la estructura del mercado.",
        "**Servicios profesionales.** Matrículas obligatorias y colegios profesionales cumplen una función de garantía de calidad, y a la vez restringen la entrada. Los liberales suelen discutir dónde está el equilibrio.",
        "**Comercio exterior.** Licencias de importación y restricciones cuantitativas protegen productores locales de la competencia externa. Ver [[division-del-trabajo]].",
      ),
      callout(
        "ojo",
        "Ni todo es captura ni toda regulación es captura",
        "Algunas regulaciones existen por razones genuinas de seguridad o información. La pregunta útil no es «¿hay regulación?» sino «¿esta norma protege al consumidor o al que ya está adentro?».",
      ),
    ],

    critiques: [
      {
        objection:
          "Hay monopolios naturales reales: no tiene sentido tender dos redes de cloacas. Sin regulación, esa empresa abusa.",
        response: [
          p(
            "Es el caso más sólido para regular, y muchos liberales clásicos lo aceptan. La discusión se corre a *cómo*: regulación de tarifas, licitación competitiva por el derecho a operar la red (la propuesta de Demsetz), separación entre la red y los servicios que corren sobre ella.",
          ),
          p(
            "También conviene notar que la lista de monopolios «naturales» se achicó mucho con la tecnología: la telefonía fija era el ejemplo de manual hasta que apareció la telefonía móvil.",
          ),
        ],
      },
      {
        objection:
          "Las grandes tecnológicas muestran que el mercado tiende a la concentración: los efectos de red hacen que el ganador se lleve todo.",
        response: [
          p(
            "El fenómeno es real y la respuesta liberal está genuinamente dividida. Una posición sostiene que estos mercados siguen siendo disputables y que la historia reciente lo confirma (MySpace, Yahoo, Internet Explorer).",
          ),
          p(
            "Otra posición, minoritaria pero creciente entre liberales, acepta que los efectos de red generan poder duradero y admite intervención antimonopólica.",
          ),
        ],
        unresolved: true,
      },
    ],

    positions: [
      {
        current: "Liberalismo clásico",
        stance:
          "Acepta legislación de defensa de la competencia, aplicada con cuidado y foco en barreras legales.",
      },
      {
        current: "Escuela austriaca / libertarismo",
        stance:
          "Escéptica de las leyes antimonopolio: sostiene que suelen usarse contra competidores exitosos y que el remedio es eliminar privilegios legales.",
      },
      {
        current: "Ordoliberalismo",
        stance:
          "La competencia no se sostiene sola: el Estado debe construir y defender activamente el marco que la hace posible.",
      },
    ],

    keyIdeas: [
      "Lo que disciplina no es el número de empresas sino la posibilidad de que entre otra.",
      "Las barreras legales duran; las económicas suelen erosionarse con la tecnología.",
      "La regulación tiende a ser capturada por los regulados: mirá quién la apoya.",
      "Los liberales están divididos sobre las leyes antimonopolio.",
    ],
    related: ["mercado", "capitalismo", "oferta-y-demanda", "division-del-trabajo", "estado"],
    glossary: ["competencia", "monopolio", "barrera-de-entrada", "captura-del-regulador", "capitalismo-de-amigos"],
    sources: ["smith-wn", "hayek-knowledge", "friedman-capitalismo", "mises-accion"],
    furtherReading: [
      {
        title: "Capitalismo y libertad, capítulo VIII",
        author: "Milton Friedman",
        why: "Sobre monopolio y responsabilidad social de las empresas.",
        sourceId: "friedman-capitalismo",
        level: "intermedio",
      },
    ],
  },

  // =========================================================================
  {
    slug: "division-del-trabajo",
    title: "División del trabajo, especialización y comercio",
    question: "¿Por qué conviene comerciar en vez de producir todo acá?",
    summary:
      "La razón por la que somos ricos comparados con nuestros bisabuelos no es que trabajemos más: es que cada uno hace una cosa muy bien y la intercambia. El argumento vale igual entre personas que entre países.",
    category: "economia",
    level: "intermedio",
    topics: ["economía básica", "comercio"],
    tags: ["comercio", "productividad", "aranceles", "ruta-economia"],
    updated: "2026-08-15",
    status: "publicado",

    simple: [
      p(
        "Nadie se hace su propia ropa, su propia comida y su propio teléfono. Si tuvieras que hacer todo vos, vivirías muy mal aunque trabajaras dieciséis horas por día.",
      ),
      p(
        "En cambio, si vos hacés una sola cosa muy bien y la cambiás por lo que hacen los demás, todos terminan con más. Eso es la **división del trabajo**, y es la explicación más simple de por qué una persona hoy vive mejor que un rey del siglo XVII.",
      ),
      p(
        "Con países pasa lo mismo. Argentina produce alimentos con una eficiencia enorme. Otros países producen microchips. Cambiar alimentos por microchips deja a los dos mejor que si cada uno intentara hacer todo.",
      ),
      callout(
        "ejemplo",
        "El caso raro que hay que entender",
        "Incluso si un país fuera mejor que otro en absolutamente todo, igual le conviene comerciar. Suena imposible, pero es cierto y tiene nombre: **ventaja comparativa**.",
      ),
    ],

    technical: [
      h("Ventaja absoluta y ventaja comparativa"),
      p(
        "**Ventaja absoluta**: producir algo con menos recursos que otro. **Ventaja comparativa**: producir algo con un {{costo de oportunidad}} menor que otro.",
      ),
      p(
        "Lo que David Ricardo mostró en 1817 es que el comercio conviene por la **segunda**, no por la primera. Un cirujano puede ser mejor que su secretaria tanto operando como archivando. Igual le conviene contratarla y dedicarse a operar: cada hora que pasa archivando le cuesta una cirugía.",
      ),
      formula(
        "Conviene especializarse en aquello cuyo costo de oportunidad es menor, aunque se sea peor en términos absolutos.",
      ),
      h("Por qué la especialización aumenta la productividad"),
      p("Smith identificó tres mecanismos en el primer capítulo de *La riqueza de las naciones*:"),
      ol(
        "**Destreza.** Repetir una tarea mejora la habilidad.",
        "**Tiempo.** Se elimina el costo de cambiar de tarea.",
        "**Máquinas.** Una tarea acotada y repetida es más fácil de mecanizar.",
      ),
      p(
        "Y agregó un límite importante: la división del trabajo está limitada por la **extensión del mercado**. Es decir, cuanto más grande el mercado al que se puede vender, más fina puede ser la especialización. Esa es la razón por la que cerrar una economía al comercio no sólo encarece productos: reduce el grado de especialización posible y por lo tanto la productividad.",
      ),
      h("Qué dice y qué no dice la teoría"),
      p(
        "El comercio aumenta el producto agregado. **No** garantiza que todos ganen simultáneamente. Cuando se abre un sector antes protegido, hay trabajadores y empresas concretas que pierden, y esa pérdida está concentrada mientras la ganancia está dispersa entre millones de consumidores.",
      ),
      callout(
        "debate",
        "Honestidad sobre el costo de ajuste",
        "La literatura sobre el llamado «China shock» documentó que en regiones expuestas a la competencia importadora, el ajuste del empleo fue mucho más lento y doloroso de lo que suponían los modelos. Ignorar esto debilita el argumento liberal en lugar de fortalecerlo.",
      ),
    ],

    argentina: [
      p(
        "Argentina es un caso paradigmático de esta discusión porque su historia económica está atravesada por ella.",
      ),
      p(
        "El modelo agroexportador (aproximadamente 1880–1930) se basó en una apuesta explícita a la ventaja comparativa: exportar productos primarios, importar manufacturas y capital. Produjo un crecimiento notable y a la vez una alta exposición a los precios internacionales.",
      ),
      p(
        "Desde mediados del siglo XX, la **industrialización por sustitución de importaciones** (ISI) invirtió la estrategia: producir localmente lo que antes se importaba, protegido por aranceles y cupos. La discusión sobre sus resultados sigue abierta y es genuinamente compleja.",
      ),
      compare(
        {
          title: "Lectura crítica de la ISI",
          subtitle: "Posición liberal más frecuente",
          items: [
            "La protección prolongada quitó incentivos a mejorar la productividad.",
            "Generó industrias dependientes del arancel, no competitivas.",
            "El consumidor pagó precios más altos por bienes de menor calidad.",
            "Requirió divisas del agro para importar insumos: tensión estructural.",
          ],
        },
        {
          title: "Lectura favorable a la ISI",
          subtitle: "Posición estructuralista y desarrollista",
          items: [
            "Permitió construir capacidades industriales inexistentes.",
            "Los términos de intercambio de productos primarios tienden a deteriorarse (tesis Prebisch-Singer).",
            "Otras economías que hoy son desarrolladas también protegieron industrias nacientes.",
            "El problema fue la implementación, no la estrategia.",
          ],
        },
      ),
      callout(
        "ojo",
        "Esto es un debate historiográfico abierto",
        "Presentamos las dos lecturas porque ambas tienen defensores académicos serios. Este sitio tiene una perspectiva liberal, y aun así sostener que la cuestión está cerrada sería faltar a la verdad.",
      ),
      p(
        "Las **retenciones** (derechos de exportación) son la aplicación argentina más discutida del tema: gravan la exportación de productos donde el país tiene ventaja comparativa. Ver [[impuestos]].",
      ),
    ],

    everyday: [
      ul(
        "Pagás para que te corten el pelo aunque podrías intentarlo vos: eso es división del trabajo.",
        "Un desarrollador que gana bien y contrata a alguien para limpiar su casa no está siendo elitista; está aplicando ventaja comparativa.",
        "Cuando comprás algo importado más barato, tenés más plata para gastar en otra cosa: ese efecto es real aunque no se vea.",
      ),
    ],

    critiques: [
      {
        objection:
          "La ventaja comparativa condena a los países pobres a especializarse en lo que ya hacen: materias primas de bajo valor agregado.",
        from: "Estructuralismo latinoamericano, Prebisch; también Ha-Joon Chang",
        response: [
          p(
            "Es la objeción más fuerte y merece una respuesta seria. Tiene dos partes: que los términos de intercambio se deterioran, y que la industria genera aprendizajes que la agricultura no.",
          ),
          p(
            "Sobre la primera: la evidencia empírica es mixta y depende mucho del período que se mire. Sobre la segunda: hay casos de países que industrializaron con protección selectiva (Corea del Sur) y muchos casos de países que protegieron y no industrializaron.",
          ),
          p(
            "La respuesta liberal apunta a que la ventaja comparativa **no es fija**: se construye con capital humano, instituciones y tecnología. Y que la política industrial exige que el Estado sepa qué sector va a ser competitivo dentro de veinte años, un problema de conocimiento formidable.",
          ),
        ],
        unresolved: true,
      },
      {
        objection:
          "Abrir la economía destruye empleo local. Los que pierden el trabajo no se consuelan con que el país gane en agregado.",
        response: [
          p(
            "Es correcto y el argumento liberal serio no lo niega. El debate real es sobre la política de transición.",
          ),
          p(
            "Posiciones dentro del liberalismo: apertura gradual y previsible; eliminación simultánea de las trabas que impiden crear empleo nuevo (costos de contratación, trámites, crédito); y, para algunos liberales, asistencia transitoria a los afectados. Otros rechazan lo último por considerarlo una subvención permanente disfrazada.",
          ),
        ],
      },
    ],

    keyIdeas: [
      "La riqueza moderna viene de la especialización y el intercambio, no de trabajar más horas.",
      "Conviene comerciar por ventaja comparativa, aunque uno sea peor en todo.",
      "La división del trabajo está limitada por el tamaño del mercado: cerrarse reduce productividad.",
      "El comercio aumenta el producto agregado pero genera perdedores concretos; ignorarlo debilita el argumento.",
    ],
    related: ["mercado", "competencia", "escasez-e-incentivos", "capitalismo", "liberalismo-en-argentina"],
    glossary: ["ventaja-comparativa", "arancel", "productividad", "costo-de-oportunidad"],
    sources: ["smith-wn", "hazlitt-leccion", "acemoglu-robinson", "bastiat-ve"],
    furtherReading: [
      {
        title: "La riqueza de las naciones, Libro I, capítulos I a III",
        author: "Adam Smith",
        why: "División del trabajo, origen del intercambio y límite del mercado, en unas treinta páginas.",
        sourceId: "smith-wn",
        level: "intermedio",
      },
      {
        title: "Lo que se ve y lo que no se ve",
        author: "Frédéric Bastiat",
        why: "La sección sobre proteccionismo es el mejor entrenamiento para detectar el error del «empleo salvado».",
        sourceId: "bastiat-ve",
        level: "inicial",
      },
    ],
  },

  // =========================================================================
  {
    slug: "capitalismo",
    title: "¿Qué es el capitalismo?",
    question: "¿Qué es el capitalismo y qué relación tiene con el liberalismo?",
    summary:
      "Un sistema donde los medios de producción son de propiedad privada y se coordinan por precios. Está relacionado con el liberalismo pero no es lo mismo, y la diferencia importa.",
    category: "empeza-aca",
    level: "inicial",
    topics: ["economía básica", "fundamentos"],
    tags: ["capitalismo", "sistema económico", "ruta-inicial", "nivel-5"],
    updated: "2026-08-15",
    status: "publicado",

    simple: [
      p(
        "«Capitalismo» es el nombre de un sistema donde las fábricas, los campos, los negocios y las máquinas pertenecen a **personas privadas** y no al Estado, y donde qué se produce lo deciden millones de compras y ventas en lugar de un plan central.",
      ),
      p("Sus tres piezas son:"),
      ul(
        "**{{Propiedad}} privada de los medios de producción** — la panadería es del panadero.",
        "**Coordinación por precios** — nadie ordena cuántos panes hacer; lo indican las ventas.",
        "**Libertad de emprender y de contratar** — cualquiera puede intentar poner una panadería y cualquiera puede aceptar o rechazar un trabajo.",
      ),
      callout(
        "ojo",
        "«Capital» no significa «plata»",
        "Capital son los bienes que sirven para producir otros bienes: herramientas, máquinas, galpones, software, conocimiento acumulado. Un país es rico sobre todo porque tiene mucho capital por trabajador, no porque tenga muchos billetes.",
      ),
    ],

    technical: [
      h("Capitalismo y liberalismo no son sinónimos"),
      p(
        "El liberalismo es una filosofía política sobre los límites del poder y los derechos individuales. El capitalismo es un sistema de organización económica. La relación es estrecha pero no es identidad:",
      ),
      ul(
        "Se puede ser liberal en política y aceptar más intervención económica de la que un capitalismo puro admitiría (liberalismo social).",
        "Puede existir capitalismo **sin** liberalismo político: hay casos históricos de economías de mercado bajo regímenes autoritarios.",
        "El liberalismo defiende el capitalismo porque considera que se sigue de la propiedad privada y la libertad de contratar, no como un fin en sí mismo.",
      ),
      p(
        "Esta distinción es la razón por la que muchos liberales rechazan la etiqueta «pro-empresa». El liberalismo es pro-{{competencia}}, que suele ser lo que a las empresas establecidas menos les conviene.",
      ),
      h("De dónde viene la riqueza"),
      p(
        "Una idea contraintuitiva: la riqueza no se distribuye, se **produce**. Antes de repartir hay que fabricar, y lo que determina cuánto se puede fabricar es la {{productividad}}: cuánto produce una hora de trabajo.",
      ),
      p("La productividad depende de:"),
      ol(
        "**Capital acumulado** — un trabajador con retroexcavadora mueve más tierra que uno con pala.",
        "**Tecnología y conocimiento** — mejores métodos.",
        "**División del trabajo** — ver [[division-del-trabajo]].",
        "**Instituciones** — sin propiedad segura ni contratos exigibles, nadie invierte a largo plazo. Ver [[instituciones]].",
      ),
      p(
        "Y el capital sólo se acumula si alguien ahorra: si se consume todo lo producido, no queda nada para invertir. Por eso los liberales insisten en que **una moneda que destruye el ahorro destruye la inversión futura**. Ver [[inflacion]].",
      ),
      h("Lo que muestran los datos de largo plazo"),
      p(
        "El hecho más notable de la historia económica es que durante milenios el ingreso por persona se mantuvo prácticamente estancado, y a partir de fines del siglo XVIII creció de forma sostenida en las economías que adoptaron propiedad privada, mercados amplios y ciertas garantías legales.",
      ),
      callout(
        "dato",
        "Sobre esta afirmación",
        "El patrón de estancamiento seguido de crecimiento sostenido está bien documentado en la historia económica cuantitativa (proyecto Maddison, Banco Mundial). Lo que sí está discutido es **la explicación causal**: cuánto pesan las instituciones, la geografía, la energía fósil, el colonialismo o la ciencia. No es un punto cerrado.",
      ),
    ],

    argentina: [
      p(
        "Argentina complica la narrativa simple en las dos direcciones, y eso la hace un caso interesante en lugar de un ejemplo cómodo.",
      ),
      p(
        "Entre 1880 y 1930 el país tuvo una economía muy abierta, fuerte entrada de capital e inmigración, y creció a tasas altísimas, llegando a ubicarse entre los países de mayor ingreso por habitante del mundo. Ese hecho es sólido y suele citarse como evidencia a favor del modelo.",
      ),
      p(
        "Pero el mismo caso plantea preguntas incómodas para una lectura ingenua: la propiedad de la tierra estaba muy concentrada, el sistema político no era plenamente democrático antes de 1912, y el modelo mostró una fragilidad severa ante el shock externo de 1930.",
      ),
      p(
        "Después de 1945 el país siguió un camino distinto —mayor intervención, protección industrial, empresas estatales— y su ingreso relativo respecto de los países desarrollados cayó de manera sostenida durante décadas. Ver [[liberalismo-en-argentina]] y [[ciclos-inflacionarios-argentinos]].",
      ),
      callout(
        "debate",
        "Qué se puede y qué no se puede concluir",
        "La caída relativa argentina es un hecho. Atribuirla enteramente al abandono del modelo liberal es una interpretación, disputada por historiadores económicos serios que señalan también shocks externos, inestabilidad política, dictaduras y errores puntuales de gestión.",
      ),
    ],

    critiques: [
      {
        objection:
          "El capitalismo explota: el trabajador produce más valor del que recibe como salario, y esa diferencia se la lleva el dueño.",
        from: "Teoría del valor-trabajo y de la plusvalía, Marx",
        response: [
          p(
            "La economía moderna abandonó la teoría del valor-trabajo, en la que se apoya el argumento, por razones técnicas: el valor de un bien no depende del trabajo incorporado sino de cuánto lo valora quien lo compra (revolución marginalista, 1870s). Un producto hecho con mucho trabajo que nadie quiere vale cero.",
          ),
          p(
            "En el marco actual, el salario tiende a acercarse a lo que el trabajador agrega al producto, y la diferencia con el ingreso total remunera capital y riesgo —incluido el riesgo de perder. Que el empresario gane cuando acierta y pierda cuando falla es parte del mismo mecanismo.",
          ),
          p(
            "Ahora bien, hay una versión más fuerte de la objeción que no depende de Marx: **cuando el trabajador tiene pocas alternativas, su poder de negociación es bajo y el salario puede quedar por debajo de su aporte**. Esto sí es economía estándar (monopsonio) y es un problema real.",
          ),
          p(
            "La respuesta liberal a esa versión apunta a aumentar las alternativas: más competencia por trabajadores, menos barreras para crear empresas, más movilidad.",
          ),
        ],
        unresolved: true,
      },
      {
        objection:
          "El capitalismo genera desigualdades enormes y crisis recurrentes.",
        response: [
          p(
            "Las crisis recurrentes son un hecho. Su explicación está en disputa incluso entre liberales: la escuela austriaca las atribuye a la expansión artificial del crédito por parte de los bancos centrales; los monetaristas, a errores de política monetaria; los keynesianos, a fluctuaciones de la demanda agregada.",
          ),
          p(
            "Sobre la desigualdad, el argumento liberal habitual distingue **desigualdad** de **pobreza**: sostiene que lo moralmente urgente es que la gente salga de la pobreza absoluta, y que eso ocurrió a gran escala en las últimas décadas. Los críticos responden que la desigualdad extrema tiene efectos propios sobre la política y la cohesión social, independientemente del nivel absoluto.",
          ),
          p("Ver [[por-que-hay-pobres-si-el-mercado-funciona]]."),
        ],
        unresolved: true,
      },
    ],

    openDebate: [
      ul(
        "Qué causa los ciclos económicos: es un desacuerdo abierto dentro del propio liberalismo.",
        "Si el crecimiento indefinido es compatible con límites ambientales.",
        "Cuánto del éxito económico moderno se explica por instituciones y cuánto por otros factores.",
        "Si el capitalismo financiero contemporáneo funciona con la misma lógica que el capitalismo productivo que describieron Smith y Mises.",
      ),
    ],

    uncertainty:
      "La atribución causal del crecimiento moderno a las instituciones capitalistas es la hipótesis dominante pero no un hecho establecido. Hay literatura académica seria que pondera más la geografía, la energía o la acumulación colonial.",

    keyIdeas: [
      "Capitalismo: propiedad privada de los medios de producción y coordinación por precios.",
      "No es sinónimo de liberalismo: uno es un sistema económico, el otro una filosofía política.",
      "La riqueza se produce antes de distribuirse, y depende de la productividad.",
      "El liberalismo es pro-competencia, no pro-empresas establecidas.",
    ],
    related: ["mercado", "propiedad-privada", "competencia", "division-del-trabajo", "liberalismo-en-argentina"],
    glossary: ["capital", "productividad", "plusvalia", "capitalismo-de-amigos", "monopsonio"],
    sources: ["smith-wn", "mises-socialismo", "acemoglu-robinson", "friedman-capitalismo", "hayek-camino"],
    furtherReading: [
      {
        title: "Libertad de elegir",
        author: "Milton Friedman y Rose Friedman",
        why: "Presenta el caso a favor del capitalismo con ejemplos concretos y lenguaje accesible.",
        sourceId: "friedman-elegir",
        level: "inicial",
      },
      {
        title: "Por qué fracasan los países",
        author: "Daron Acemoglu y James A. Robinson",
        why: "La versión más influyente de la tesis institucional. Léase junto con sus críticas.",
        sourceId: "acemoglu-robinson",
        level: "intermedio",
      },
    ],
  },
];
