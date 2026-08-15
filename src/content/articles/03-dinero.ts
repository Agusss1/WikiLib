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

export const dinero: Article[] = [
  // =========================================================================
  {
    slug: "dinero",
    title: "¿Qué es el dinero?",
    question: "¿Qué es el dinero y por qué un papel tiene valor?",
    summary:
      "No es riqueza: es una tecnología para intercambiar sin tener que encontrar a alguien que quiera exactamente lo que vos tenés. Entender qué le da valor explica por qué puede perderlo.",
    category: "economia",
    level: "inicial",
    topics: ["economía básica", "moneda"],
    tags: ["dinero", "moneda", "ruta-inicial", "nivel-6"],
    updated: "2026-08-15",
    status: "publicado",

    simple: [
      p(
        "Imaginate un mundo sin dinero. Sos panadero y querés zapatos. Tenés que encontrar un zapatero que justo quiera pan, justo hoy, y que además acepte la cantidad de pan que vale un par de zapatos. Casi imposible.",
      ),
      p(
        "El dinero resuelve eso. Es algo que **todos aceptan**, no porque les sirva en sí mismo, sino porque saben que otros también lo van a aceptar. Vendés pan por dinero y comprás zapatos con dinero. Nunca hace falta que coincidan los deseos.",
      ),
      p("Para cumplir esa función, el dinero hace tres cosas:"),
      steps(
        {
          title: "Medio de intercambio",
          text: "Todos lo aceptan a cambio de bienes y servicios. Es su función principal.",
        },
        {
          title: "Unidad de cuenta",
          text: "Sirve para comparar: si un kilo de asado son 12.000 y una remera 24.000, sabés que la remera vale dos kilos de asado. Sin una unidad estable, comparar se vuelve difícil.",
        },
        {
          title: "Reserva de valor",
          text: "Podés guardarlo hoy y usarlo dentro de un año. **Esta es la función que la inflación destruye primero.**",
        },
      ),
      callout(
        "ojo",
        "Dinero no es riqueza",
        "Si mañana todos tuviéramos el doble de billetes, no habría el doble de comida, casas ni autos. Habría los mismos bienes y el doble de papeles: los precios se duplicarían. La riqueza son los bienes, no los papeles.",
      ),
    ],

    technical: [
      h("De dónde salió el dinero"),
      p(
        "Históricamente el dinero no fue creado por decreto sino que **emergió del intercambio**: mercancías particularmente fáciles de transportar, dividir y conservar empezaron a aceptarse no para consumirlas sino para volver a intercambiarlas. Carl Menger formuló esta explicación en 1892.",
      ),
      p(
        "Los metales preciosos ganaron esa competencia por razones físicas: no se oxidan, son divisibles, son homogéneos y son escasos de manera difícil de manipular. Luego aparecieron los certificados respaldados en metal, y finalmente el dinero **fiduciario**: papel sin respaldo, cuyo valor depende enteramente de la confianza y de que el Estado lo declare de curso legal.",
      ),
      callout(
        "debate",
        "Una aclaración honesta",
        "La explicación «del trueque al dinero» es la narrativa estándar en economía, pero antropólogos como David Graeber la cuestionaron: sostienen que las economías antiguas funcionaban con sistemas de crédito y deuda antes que con trueque. El debate es real y no está saldado.",
      ),
      h("Qué determina el valor del dinero"),
      p(
        "El valor del dinero es su **poder de compra**: cuántas cosas comprás con una unidad. Y como cualquier otro precio, depende de oferta y demanda.",
      ),
      compare(
        {
          title: "Oferta de dinero",
          items: [
            "La determina el banco central (base monetaria) y el sistema bancario (crédito).",
            "Si crece más rápido que la producción, cada unidad vale menos.",
            "Es lo que se llama {{emisión}}.",
          ],
        },
        {
          title: "Demanda de dinero",
          items: [
            "Cuánto dinero quiere la gente tener en el bolsillo en lugar de gastar o cambiar.",
            "Cae cuando se espera inflación: nadie quiere quedarse con algo que se derrite.",
            "Cae cuando hay desconfianza en la moneda o en el gobierno.",
          ],
        },
      ),
      p(
        "El punto clave y menos intuitivo: **la inflación puede acelerarse sin que aumente la emisión, si cae la demanda de dinero**. Cuando la gente deja de querer tener pesos, los gasta más rápido, y la misma cantidad de pesos persigue los mismos bienes con más velocidad. Es el mecanismo detrás de las hiperinflaciones.",
      ),
      formula(
        "M × V = P × Y",
        "Ecuación cuantitativa: cantidad de dinero por velocidad de circulación = nivel de precios por producción real. No es una teoría, es una identidad contable; las teorías difieren sobre qué variable se ajusta.",
      ),
      h("Curso legal"),
      p(
        "Que una moneda tenga «curso legal» significa que la ley obliga a aceptarla para cancelar deudas. Eso puede sostener su uso por un tiempo, pero no puede sostener su valor: la historia monetaria está llena de monedas de curso legal que la gente dejó de usar de hecho.",
      ),
    ],

    argentina: [
      p(
        "Argentina cambió de signo monetario cinco veces en menos de setenta años, quitando ceros en cada oportunidad:",
      ),
      ul(
        "**Peso moneda nacional** (hasta 1969)",
        "**Peso ley 18.188** (1970) — quitó 2 ceros",
        "**Peso argentino** (1983) — quitó 4 ceros",
        "**Austral** (1985) — quitó 3 ceros",
        "**Peso convertible / peso** (1992) — quitó 4 ceros",
      ),
      callout(
        "dato",
        "Cuánto se acumuló",
        "Sumando los ceros eliminados en esos cambios, un peso actual equivale a una cantidad astronómica de pesos moneda nacional de 1969. Es la forma más gráfica de ver qué le pasó a la reserva de valor argentina.",
      ),
      p(
        "La consecuencia cultural es enorme y explica conductas que desde afuera parecen raras: los argentinos ahorran en dólares, fijan precios de inmuebles en dólares y desconfían de los plazos largos en pesos. No es irracionalidad ni antipatriotismo; es una respuesta racional a una moneda que perdió sistemáticamente la función de reserva de valor.",
      ),
      p(
        "Esto también genera un problema económico concreto: **sin moneda confiable no hay crédito de largo plazo**. Por eso el crédito hipotecario argentino fue históricamente muy pequeño en relación con el producto. Nadie presta a 20 años en una moneda cuyo valor dentro de 20 años es imposible de estimar.",
      ),
    ],

    liberalArgument: [
      p(
        "Los liberales suelen ver el dinero como una institución que **debería ser previsible antes que administrada**. El razonamiento tiene tres pasos:",
      ),
      ol(
        "Si los {{precios}} transmiten información sobre escasez relativa, una unidad de medida inestable arruina esa información: no se distingue si algo subió porque escasea o porque la moneda vale menos.",
        "Quien controla la emisión controla un impuesto que no necesita aprobarse en el Congreso. Ver [[inflacion]] y [[emision-monetaria]].",
        "La discrecionalidad monetaria genera incentivos políticos de corto plazo que chocan con la estabilidad de largo plazo.",
      ),
      p("De ahí las propuestas liberales clásicas, que difieren bastante entre sí:"),
      ul(
        "**Reglas en lugar de discreción** — Friedman propuso una regla de crecimiento constante de la cantidad de dinero.",
        "**Independencia real del banco central** — con mandato acotado a la estabilidad de precios.",
        "**Patrón oro o respaldo metálico** — posición de buena parte de la escuela austriaca.",
        "**Competencia de monedas** — Hayek propuso permitir que emisores privados compitan y que la gente elija.",
        "**Dolarización** — resignar la moneda propia adoptando una externa. Muy discutida en Argentina.",
      ),
    ],

    critiques: [
      {
        objection:
          "Una regla monetaria rígida impide responder a shocks. Si hay una crisis financiera y el banco central no puede actuar como prestamista de última instancia, la recesión es mucho peor.",
        response: [
          p(
            "Es la crítica más sólida y tiene respaldo empírico: Friedman y Schwartz argumentaron que la Gran Depresión se agravó porque la Reserva Federal permitió una contracción monetaria severa.",
          ),
          p(
            "Notar la ironía: ese argumento es de un liberal, y muestra que dentro del liberalismo hay desacuerdo real sobre cuánta flexibilidad monetaria es deseable.",
          ),
          p(
            "La respuesta austriaca sostiene que el prestamista de última instancia genera **riesgo moral**: los bancos toman más riesgo si saben que serán rescatados.",
          ),
        ],
        unresolved: true,
      },
    ],

    keyIdeas: [
      "El dinero resuelve el problema de la doble coincidencia de deseos.",
      "Sus tres funciones: medio de intercambio, unidad de cuenta y reserva de valor.",
      "Su valor depende de oferta y demanda de dinero, no sólo de la emisión.",
      "Sin moneda confiable no hay crédito de largo plazo. Es el costo argentino menos visible.",
    ],
    related: ["inflacion", "emision-monetaria", "banco-central", "tipo-de-cambio", "capitalismo"],
    glossary: ["dinero", "curso-legal", "base-monetaria", "poder-de-compra", "senoreaje"],
    sources: ["friedman-counter", "friedman-schwartz", "mises-accion", "bcra", "hayek-constitution"],
    furtherReading: [
      {
        title: "La desnacionalización del dinero",
        author: "Friedrich A. Hayek",
        why: "La propuesta más radical del liberalismo monetario: que compitan monedas privadas.",
        level: "avanzado",
      },
      {
        title: "A Monetary History of the United States",
        author: "Milton Friedman y Anna J. Schwartz",
        why: "El estudio empírico que estableció el papel de la política monetaria en las crisis.",
        sourceId: "friedman-schwartz",
        level: "avanzado",
      },
    ],
  },

  // =========================================================================
  {
    slug: "inflacion",
    title: "¿Qué es la inflación y por qué existe?",
    question: "¿Qué es la inflación? ¿Por qué suben los precios?",
    summary:
      "No es que las cosas valgan más: es que el dinero vale menos. Distinguir esas dos frases es la diferencia entre entender el problema argentino y no entenderlo.",
    category: "economia",
    level: "inicial",
    topics: ["economía argentina", "moneda"],
    tags: ["inflación", "emisión", "precios", "ruta-inicial", "nivel-8", "argentina"],
    updated: "2026-08-15",
    status: "publicado",

    simple: [
      p(
        "Cuando decimos que hay inflación solemos decir «todo está más caro». Pero pensalo un segundo: si **todo** sube al mismo tiempo —el pan, el alquiler, la ropa, el colectivo, los sueldos— algo raro pasa.",
      ),
      p(
        "Que suba un producto en particular es normal: hubo sequía, se rompió una fábrica, cambió la moda. Que suban **todos a la vez y todos los meses** no se explica por ninguna de esas cosas.",
      ),
      p("La forma correcta de decirlo es al revés:"),
      callout(
        "ejemplo",
        "La frase clave",
        "No es que las cosas valgan más. **Es que tu plata vale menos.** El precio que se movió es el del dinero.",
      ),
      p(
        "Y como el dinero es una cosa más, su valor también depende de cuánto haya. Si de repente hay muchísimos más pesos dando vueltas y la misma cantidad de bienes, cada peso compra menos. Eso es inflación.",
      ),
      p(
        "Ahora la pregunta importante: ¿por qué habría de haber muchos más pesos? Respuesta corta: casi siempre, **porque el Estado gasta más de lo que recauda y financia la diferencia imprimiendo**. Ver [[deficit-fiscal]].",
      ),
    ],

    technical: [
      h("Definición precisa"),
      p(
        "Inflación es el **aumento sostenido y generalizado del nivel general de precios**. Cada palabra importa: *sostenido* (no un salto puntual), *generalizado* (no un producto), *nivel general* (un promedio ponderado, no un precio).",
      ),
      p(
        "Se mide con índices de precios. En Argentina el principal es el **IPC** que publica el {{INDEC}}, construido con una canasta de bienes y servicios ponderada según los patrones de consumo de la Encuesta Nacional de Gastos de los Hogares.",
      ),
      h("Por qué ocurre"),
      p(
        "Existe un consenso amplio en la profesión —no unanimidad— sobre que la inflación alta y persistente es un fenómeno monetario. La formulación más citada es la de Friedman:",
      ),
      quote(
        "La inflación es siempre y en todo lugar un fenómeno monetario, en el sentido de que es y sólo puede ser producida por un aumento más rápido de la cantidad de dinero que de la producción.",
        "Milton Friedman, The Counter-Revolution in Monetary Theory (1970)",
        "friedman-counter",
      ),
      p("La cadena causal típica en un país con déficit financiado por emisión es:"),
      steps(
        { title: "1. Déficit fiscal", text: "El Estado gasta más de lo que recauda." },
        {
          title: "2. Financiamiento",
          text: "No consigue crédito voluntario suficiente (o no quiere pagar la tasa) y recurre al banco central.",
        },
        {
          title: "3. Emisión",
          text: "El banco central crea pesos y se los transfiere al Tesoro. Aumenta la {{base monetaria}}.",
        },
        {
          title: "4. Más pesos, mismos bienes",
          text: "El poder de compra de cada peso cae.",
        },
        {
          title: "5. Expectativas",
          text: "La gente anticipa que va a seguir pasando, adelanta compras y remarca preventivamente. La inflación se vuelve inercial y puede acelerarse aunque la emisión se frene.",
        },
      ),
      callout(
        "ojo",
        "El paso 5 es el que más se subestima",
        "Por eso los planes de estabilización necesitan credibilidad, no sólo aritmética. Y por eso frenar la emisión no baja los precios de un día para el otro.",
      ),
      h("Explicaciones alternativas y por qué no alcanzan"),
      compare(
        {
          title: "Lo que suele decirse",
          items: [
            "«Es culpa de los empresarios que remarcan.»",
            "«Es por los aumentos de salarios.»",
            "«Es porque subió el dólar.»",
            "«Son las expectativas.»",
            "«Es multicausal.»",
          ],
        },
        {
          title: "El problema de esas explicaciones",
          items: [
            "La codicia no explica por qué remarcan más en un país que en otro, ni por qué más en unos años que en otros.",
            "Los salarios en general **siguen** a la inflación más que anticiparla; y sin más dinero, subir salarios reduce empleo o margen, no todos los precios.",
            "El dólar y los precios suben ambos por la misma causa subyacente; confundir un síntoma con la causa.",
            "Las expectativas explican la **inercia y la velocidad**, pero se forman sobre algo: sobre lo que se espera del déficit y la emisión.",
            "«Multicausal» es cierto sobre la dinámica de corto plazo, y suele usarse para evitar nombrar la causa dominante de largo plazo.",
          ],
        },
      ),
      p(
        "Aclaración importante: sí existen inflaciones de costos y shocks de oferta puntuales. Lo que la evidencia comparada muestra es que **no producen inflación sostenida de dos o tres dígitos anuales** sin acomodación monetaria.",
      ),
      h("Por qué la inflación hace daño"),
      ol(
        "**Destruye la información de los precios.** No se distingue el cambio de precio relativo del cambio del valor de la moneda. Ver [[oferta-y-demanda]].",
        "**Es un impuesto regresivo.** Golpea más fuerte a quien cobra en pesos, no puede ahorrar en dólares ni tiene acceso a instrumentos financieros. No lo vota nadie.",
        "**Acorta el horizonte.** Nadie invierte a diez años ni presta a veinte. Desaparece el crédito hipotecario.",
        "**Desvía esfuerzo productivo.** Trabajo dedicado a remarcar, cubrirse y arbitrar en lugar de producir.",
        "**Genera conflicto distributivo.** Cada sector pelea por no quedar atrás, y el resultado es una carrera que nadie gana.",
      ),
    ],

    argentina: [
      p(
        "Argentina tiene una de las historias inflacionarias más largas del mundo. Convivió con inflación alta durante décadas, con episodios extremos y varios planes de estabilización que fracasaron.",
      ),
      figure(
        "Variación anual del IPC en 1989",
        "Aproximadamente 3.080%",
        "1989",
        "indec-ipc",
        "Índice de Precios al Consumidor, Gran Buenos Aires. Verificar el dato exacto en la serie oficial del INDEC antes de citarlo.",
      ),
      p(
        "El episodio de 1989–1990 es el caso argentino de {{hiperinflación}}. La secuencia fue la típica: déficit fiscal persistente, imposibilidad de financiarlo con deuda, financiamiento monetario creciente, colapso de la demanda de dinero y aceleración explosiva.",
      ),
      h("Los planes de estabilización argentinos"),
      ul(
        "**Plan Austral (1985).** Nueva moneda, congelamiento de precios y salarios, compromiso de no emitir. Bajó la inflación fuertemente al principio y se desarmó cuando el déficit fiscal no se corrigió lo suficiente.",
        "**Plan Primavera (1988).** Intento de contener con acuerdos de precios y desdoblamiento cambiario. Terminó en la hiperinflación de 1989.",
        "**Convertibilidad (1991).** Ley 23.928: paridad fija de un peso por dólar y prohibición de emitir sin respaldo. Terminó con la inflación durante una década. Colapsó en 2001–2002 por rigidez cambiaria, déficit y shocks externos.",
      ),
      callout(
        "dato",
        "La lección que suelen extraer los economistas de estos episodios",
        "Los planes que atacaron sólo los síntomas (precios, salarios, tipo de cambio) sin resolver el déficit fiscal fracasaron. La convertibilidad funcionó mientras hubo disciplina fiscal y se rompió cuando dejó de haberla. Esta lectura es ampliamente compartida, aunque la ponderación de causas del colapso de 2001 sigue discutida.",
      ),
      h("El problema de las estadísticas"),
      p(
        "Entre 2007 y 2015 el INDEC fue intervenido y la credibilidad de sus índices de precios quedó seriamente cuestionada, al punto de que el FMI aplicó una **declaración de censura** a la Argentina en 2013 por la calidad de sus datos de IPC y PIB.",
      ),
      p(
        "Esto tiene una consecuencia práctica para cualquiera que estudie el tema: **las series de ese período requieren advertencia metodológica**, y muchos análisis usan índices provinciales o privados para ese tramo. Es un ejemplo de por qué las estadísticas públicas confiables no son un tecnicismo sino una institución.",
      ),
    ],

    everyday: [
      ul(
        "Si tu sueldo sube 100% en un año y los precios suben 120%, cobrás más y podés comprar menos. El número nominal engaña.",
        "Comprar en cuotas sin interés durante una inflación alta puede convenir: pagás con pesos que valen menos.",
        "Tener los ahorros en la caja de ahorro es perder poder de compra en silencio, todos los meses.",
      ),
    ],

    liberalArgument: [
      p(
        "El punto liberal más característico sobre inflación no es técnico sino **político**: la inflación es el único impuesto que no requiere ley.",
      ),
      p(
        "Subir el IVA o Ganancias exige una discusión pública, votos en el Congreso y costo político. Financiar gasto con emisión produce el mismo efecto —transferir recursos del sector privado al Estado— sin ninguno de esos controles. Por eso los liberales lo ven como una violación del principio de que **no hay tributo sin ley**, que en Argentina está en el artículo 17 de la Constitución.",
      ),
      p(
        "Además señalan su carácter regresivo: quien puede comprar dólares, invertir o adelantar consumo se defiende; quien cobra un sueldo fijo en pesos, no.",
      ),
    ],

    critiques: [
      {
        objection:
          "La inflación argentina no es sólo monetaria: hay concentración en cadenas de comercialización, puja distributiva e inercia. Reducirlo todo a la emisión es simplista.",
        from: "Economía heterodoxa y estructuralista argentina",
        response: [
          p(
            "La inercia y las expectativas son reales y ningún análisis serio las ignora: explican por qué la inflación no cae inmediatamente cuando se frena la emisión.",
          ),
          p(
            "Sobre la concentración: la respuesta liberal es que la estructura de mercado explica **niveles de precios relativos**, no un aumento sostenido del nivel general. Si la concentración fuera la causa, países con mercados igual de concentrados tendrían inflación similar, y no la tienen.",
          ),
          p(
            "El punto donde la crítica sí muerde: los modelos monetarios simples predicen mal la dinámica de corto plazo, y los planes de estabilización que ignoraron la inercia fracasaron.",
          ),
        ],
        unresolved: true,
      },
      {
        objection:
          "Bajar la inflación de golpe genera recesión y desempleo. El costo lo pagan los más pobres.",
        response: [
          p(
            "El costo de la desinflación es real y está documentado en la literatura como «ratio de sacrificio». No es un invento.",
          ),
          p(
            "La respuesta liberal es de comparación: el costo de convivir con inflación alta también es real, se paga todos los meses y recae de manera desproporcionada sobre los mismos sectores. La pregunta no es «costo o no costo» sino qué costo es menor.",
          ),
          p(
            "También hay un punto empírico: cuando el programa es creíble, la caída de la inflación puede ser más rápida y menos costosa, porque las expectativas se ajustan de una vez.",
          ),
        ],
        unresolved: true,
      },
    ],

    openDebate: [
      ul(
        "Gradualismo versus shock en la desinflación: la evidencia internacional admite las dos lecturas.",
        "Si conviene un ancla cambiaria, una regla monetaria o metas de inflación.",
        "Si la dolarización resuelve el problema o sólo elimina el instrumento sin resolver la causa fiscal.",
        "Cuánto de la inflación argentina es inercial y cuánto responde a expectativas sobre el futuro fiscal.",
      ),
    ],

    uncertainty:
      "Existe consenso amplio sobre el origen monetario-fiscal de la inflación alta y persistente. No hay consenso sobre la dinámica de corto plazo, el peso de la inercia, ni sobre cuál es el mejor esquema de estabilización para el caso argentino.",

    keyIdeas: [
      "Inflación es que el dinero pierde valor, no que las cosas valgan más.",
      "La inflación alta y sostenida tiene causa monetaria, y detrás suele haber déficit fiscal.",
      "Las expectativas explican la inercia: por eso frenar la emisión no baja los precios de inmediato.",
      "Es un impuesto regresivo que nadie votó.",
    ],
    related: ["emision-monetaria", "deficit-fiscal", "banco-central", "dinero", "tipo-de-cambio", "ciclos-inflacionarios-argentinos"],
    glossary: ["inflacion", "hiperinflacion", "ipc", "base-monetaria", "senoreaje", "indexacion"],
    sources: ["friedman-counter", "indec-ipc", "bcra", "ley-23928", "fmi-censura-2013", "friedman-schwartz"],
    furtherReading: [
      {
        title: "The Counter-Revolution in Monetary Theory",
        author: "Milton Friedman",
        why: "Texto breve donde formula la tesis monetaria de la inflación.",
        sourceId: "friedman-counter",
        level: "intermedio",
      },
      {
        title: "Serie histórica del IPC",
        author: "INDEC",
        why: "Ir al dato original en lugar de citar gráficos de redes sociales.",
        sourceId: "indec-ipc",
        level: "inicial",
      },
    ],
  },

  // =========================================================================
  {
    slug: "emision-monetaria",
    title: "¿Qué es la emisión monetaria?",
    question: "¿Qué significa «emitir»? ¿Por qué no imprimir dinero para pagar todo?",
    summary:
      "Crear dinero nuevo no crea bienes nuevos. Es una transferencia de poder de compra desde quien tiene pesos hacia quien recibe los pesos recién creados, y funciona como un impuesto que nadie votó.",
    category: "economia",
    level: "intermedio",
    topics: ["economía argentina", "moneda"],
    tags: ["emisión", "inflación", "señoreaje", "bcra", "argentina"],
    updated: "2026-08-15",
    status: "publicado",

    simple: [
      p(
        "La pregunta que todo el mundo se hace alguna vez: si el Estado puede imprimir billetes, ¿por qué hay pobreza? ¿Por qué no imprime y le da a todos?",
      ),
      p(
        "La respuesta es que **imprimir billetes no fabrica cosas**. Si en un pueblo hay 100 panes y 100 pesos, cada pan sale 1 peso. Si el intendente imprime 100 pesos más y los reparte, siguen habiendo 100 panes. Ahora hay 200 pesos persiguiendo 100 panes: cada pan sale 2 pesos.",
      ),
      p(
        "Nadie quedó mejor. Excepto uno: **el que recibió los pesos nuevos primero**, porque los gastó antes de que los precios subieran. Los últimos en recibirlos —los sueldos, las jubilaciones— llegan cuando los precios ya subieron.",
      ),
      callout(
        "ejemplo",
        "Esto tiene nombre",
        "Se llama **efecto Cantillon**, por Richard Cantillon, que lo describió en el siglo XVIII. La emisión no afecta a todos por igual: redistribuye desde los últimos en recibir hacia los primeros.",
      ),
    ],

    technical: [
      h("Qué se emite exactamente"),
      p(
        "«Emitir» no es sólo imprimir papel. El banco central crea dinero cuando aumenta la **base monetaria**: billetes y monedas en circulación más los depósitos que los bancos comerciales tienen en el banco central. La mayor parte de la creación es contable, no física.",
      ),
      p("Las vías principales por las que el BCRA amplía la base monetaria son:"),
      ul(
        "**Adelantos transitorios y transferencia de utilidades al Tesoro** — financiamiento directo del déficit. Es la vía clásica en Argentina y está limitada por la Carta Orgánica.",
        "**Compra de divisas** — cuando el BCRA compra dólares, paga con pesos que crea. Esto emite aunque no haya déficit.",
        "**Pago de intereses de sus propios pasivos remunerados** — los instrumentos con los que el BCRA absorbe pesos devengan interés, y ese interés se paga emitiendo. Es la llamada «emisión endógena».",
        "**Redescuentos y asistencia a bancos.**",
      ),
      callout(
        "ojo",
        "Un matiz que suele omitirse en la discusión pública",
        "No toda emisión genera la misma presión inflacionaria. Emitir para comprar dólares que la gente quiere vender no es lo mismo que emitir para cubrir gasto corriente. Y si la demanda de dinero crece —por ejemplo porque la economía se remonetiza tras una crisis—, se puede emitir sin que suban los precios.",
      ),
      h("Señoreaje e impuesto inflacionario"),
      formula(
        "Señoreaje = ingreso real que obtiene el emisor por crear dinero nuevo",
        "Es la diferencia entre el valor de compra del dinero emitido y el costo casi nulo de crearlo.",
      ),
      p(
        "El **impuesto inflacionario** es la contracara: la pérdida de poder de compra que sufre quien tiene pesos. La suma de ambos es una transferencia de recursos del sector privado al Estado, equivalente en efecto económico a un impuesto, pero sin ley que lo establezca ni debate parlamentario.",
      ),
      p(
        "Y tiene un límite: si el gobierno intenta recaudar demasiado por esta vía, la gente reduce sus tenencias de pesos, la base sobre la que se cobra el impuesto se achica y hace falta emitir todavía más para obtener lo mismo. Ese círculo es el camino a la {{hiperinflación}}.",
      ),
      h("Los rezagos"),
      p(
        "El efecto de la emisión sobre los precios no es inmediato ni mecánico. Friedman hablaba de rezagos «largos y variables». Esto es importante para la discusión pública argentina, donde a menudo se afirma que la emisión de un mes no produjo inflación ese mismo mes.",
      ),
    ],

    argentina: [
      p(
        "La Carta Orgánica del BCRA regula el financiamiento al Tesoro mediante **adelantos transitorios**, con límites cuantitativos que fueron modificados varias veces por ley y por decretos de necesidad y urgencia a lo largo de las últimas décadas.",
      ),
      p(
        "Un rasgo específico del caso argentino reciente es el peso de los **pasivos remunerados** del banco central (LEBAC, LELIQ, pases, según la época). El mecanismo funciona así:",
      ),
      steps(
        { title: "1", text: "El BCRA emite pesos para financiar al Tesoro o comprar divisas." },
        {
          title: "2",
          text: "Para que esos pesos no presionen sobre los precios, los absorbe colocando instrumentos que pagan interés a los bancos.",
        },
        {
          title: "3",
          text: "Esos instrumentos devengan interés, que se paga con **nueva emisión**.",
        },
        {
          title: "4",
          text: "El stock de pasivos crece por sí solo. Se lo suele llamar «déficit cuasifiscal».",
        },
      ),
      callout(
        "debate",
        "Por qué esto genera discusión",
        "Para algunos economistas es una bomba de tiempo que sólo posterga la inflación. Para otros, es un instrumento normal de política monetaria cuyo problema no es existir sino su magnitud relativa. La discusión sobre cómo desarmar ese stock sin generar un salto inflacionario fue central en el debate argentino reciente.",
      ),
      p(
        "Dato para verificar siempre en la fuente: las cifras de base monetaria, pasivos remunerados y reservas se publican semanalmente en el informe de principales variables del BCRA.",
      ),
    ],

    liberalArgument: [
      p("El argumento liberal contra el financiamiento monetario del déficit tiene tres capas:"),
      ol(
        "**Institucional.** El artículo 17 de la Constitución establece que sólo el Congreso impone las contribuciones del artículo 4. Financiar gasto con emisión produce el efecto de un tributo sorteando ese requisito.",
        "**Distributivo.** Recae con más fuerza sobre quienes no tienen cómo cubrirse: asalariados formales e informales, jubilados, quienes cobran en pesos y no acceden a instrumentos financieros.",
        "**De incentivos.** Si el gasto puede financiarse sin costo político inmediato, el freno al gasto desaparece. Es un problema de diseño institucional, no de la persona que gobierna.",
      ),
      p(
        "De ahí la insistencia liberal en reglas: independencia del banco central, prohibición de financiar al Tesoro, o directamente resignar la moneda propia mediante dolarización.",
      ),
    ],

    critiques: [
      {
        objection:
          "La Teoría Monetaria Moderna (MMT) sostiene que un Estado que emite su propia moneda no puede quebrar en esa moneda, y que el límite de la emisión es la capacidad productiva, no una regla contable.",
        response: [
          p(
            "Es cierto en un sentido trivial: un Estado siempre puede pagar deuda en su propia moneda creándola. Lo que no puede es garantizar el **valor** de lo que paga.",
          ),
          p(
            "La objeción liberal central es que la MMT presupone una demanda de dinero estable, y esa es justamente la variable que colapsa en países con historial inflacionario. En Argentina la gente reduce sus tenencias de pesos apenas percibe aceleración: el «espacio fiscal» que la teoría supone simplemente no está.",
          ),
          p(
            "Vale reconocer que la MMT tiene defensores académicos y que el debate no se gana con etiquetas. Pero su aplicabilidad a economías con moneda débil es cuestionada incluso por economistas heterodoxos.",
          ),
        ],
      },
      {
        objection:
          "Estados Unidos, Europa y Japón emitieron masivamente después de 2008 y de la pandemia sin generar hiperinflación. Entonces emitir no causa inflación.",
        response: [
          p(
            "El caso es real y merece explicación, no negación. Tres factores lo explican:",
          ),
          ul(
            "**La demanda de dinero aumentó** fuertemente: en una crisis la gente y los bancos quieren tener liquidez, no gastarla. Buena parte de esa emisión quedó como reservas en el banco central.",
            "**El dólar y el euro tienen demanda internacional**: son usados como reserva de valor en todo el mundo, incluida Argentina. Eso amplía enormemente la base sobre la que se puede emitir.",
            "**Sí hubo inflación**, con rezago: en 2021–2023 Estados Unidos y Europa registraron la inflación más alta en cuarenta años, y el debate sobre cuánto se debió al estímulo monetario-fiscal y cuánto a shocks de oferta sigue abierto.",
          ),
          p(
            "La conclusión razonable no es «emitir nunca causa inflación» sino que el efecto depende de la demanda de dinero, y esa demanda es frágil precisamente donde la moneda es débil.",
          ),
        ],
      },
    ],

    keyIdeas: [
      "Emitir no crea bienes: redistribuye poder de compra hacia quien recibe el dinero nuevo primero.",
      "El señoreaje y el impuesto inflacionario funcionan como un tributo sin ley.",
      "No toda emisión es igual: depende de qué la respalde y de qué pase con la demanda de dinero.",
      "En Argentina, los pasivos remunerados del BCRA generan emisión por su propio interés.",
    ],
    related: ["inflacion", "banco-central", "deficit-fiscal", "dinero", "deuda-publica"],
    glossary: ["base-monetaria", "senoreaje", "efecto-cantillon", "deficit-cuasifiscal", "pasivos-remunerados"],
    sources: ["carta-organica-bcra", "bcra", "friedman-counter", "mises-accion", "cn-argentina"],
    furtherReading: [
      {
        title: "Principales variables monetarias",
        author: "BCRA",
        why: "La fuente primaria. Aprender a leerla vale más que mil hilos de Twitter.",
        sourceId: "bcra",
        level: "intermedio",
      },
    ],
  },

  // =========================================================================
  {
    slug: "banco-central",
    title: "¿Qué es el Banco Central y qué hace?",
    question: "¿Qué es el BCRA? ¿Para qué sirve un banco central?",
    summary:
      "La institución que administra la moneda y regula a los bancos. Su diseño —qué mandato tiene y cuán independiente es— determina buena parte de la historia monetaria de un país.",
    category: "economia",
    level: "intermedio",
    topics: ["economía argentina", "instituciones", "moneda"],
    tags: ["bcra", "política monetaria", "instituciones", "argentina"],
    updated: "2026-08-15",
    status: "publicado",

    simple: [
      p(
        "Un banco central es el banco de los bancos. No atiende personas: atiende bancos y al Estado. Hace básicamente cuatro cosas:",
      ),
      ul(
        "**Emite la moneda.** Es el único que puede crear pesos.",
        "**Fija la tasa de interés de referencia**, que influye en el costo del crédito.",
        "**Regula y supervisa a los bancos**, para que no presten de manera imprudente el dinero de los depositantes.",
        "**Guarda las reservas** en moneda extranjera y oro.",
      ),
      p(
        "La pregunta interesante no es qué hace, sino **quién le da las órdenes**. Si el banco central le responde al gobierno de turno, va a haber presión para emitir cuando falte plata. Si es independiente, puede negarse.",
      ),
    ],

    technical: [
      h("El problema de la inconsistencia temporal"),
      p(
        "Hay una razón teórica precisa por la que se inventó la independencia de los bancos centrales, y vale la pena entenderla porque es elegante.",
      ),
      p(
        "Un gobierno preferiría prometer que no va a emitir —para que la gente espere baja inflación y fije precios bajos— y después emitir igual, para financiar gasto o estimular la economía. Pero la gente no es tonta: anticipa el incentivo, no cree la promesa y fija precios altos igual. Resultado: **alta inflación sin ningún beneficio**.",
      ),
      p(
        "La salida es institucional: atar las manos por adelantado. Kydland y Prescott formalizaron este problema en 1977 y recibieron el Nobel en 2004. Es uno de los argumentos más fuertes que existen a favor de reglas por sobre discreción, y encaja perfectamente con la tradición liberal.",
      ),
      h("Mandatos posibles"),
      compare(
        {
          title: "Mandato único",
          subtitle: "Ejemplo: Banco Central Europeo",
          items: [
            "Sólo estabilidad de precios.",
            "Más fácil de evaluar: se cumple o no.",
            "Menos margen para presión política.",
            "Crítica: ignora el desempleo.",
          ],
        },
        {
          title: "Mandato múltiple",
          subtitle: "Ejemplo: Reserva Federal de EE.UU.",
          items: [
            "Precios estables **y** máximo empleo.",
            "Más flexible ante shocks.",
            "Más difícil de auditar: siempre hay una excusa disponible.",
            "Crítica: en la práctica facilita justificar la emisión.",
          ],
        },
      ),
      h("Instrumentos"),
      ul(
        "**Tasa de interés de referencia** — encarece o abarata el crédito.",
        "**Operaciones de mercado abierto** — compra o venta de títulos para inyectar o absorber pesos.",
        "**Encajes** — porcentaje de los depósitos que los bancos deben inmovilizar.",
        "**Intervención cambiaria** — compra o venta de divisas. Ver [[tipo-de-cambio]].",
        "**Regulación prudencial** — requisitos de capital y liquidez.",
      ),
    ],

    argentina: [
      p(
        "El BCRA fue creado en 1935. Su marco actual es la **Carta Orgánica** (Ley 24.144 y sus modificatorias), que define funciones, mandato y límites al financiamiento del Tesoro.",
      ),
      p(
        "Un punto central del debate argentino: la Carta Orgánica fue reformada varias veces, y esas reformas cambiaron tanto el mandato como los límites al financiamiento del Tesoro. La reforma de 2012 amplió el mandato más allá de la estabilidad monetaria, incorporando objetivos de empleo y desarrollo económico con equidad social.",
      ),
      callout(
        "debate",
        "Cómo se lee esa reforma",
        "**Lectura liberal:** un mandato múltiple le da al gobierno una justificación permanente para pedir emisión, y la evidencia posterior de inflación alta lo confirmaría. **Lectura alternativa:** el mandato no es la causa de la inflación sino el déficit fiscal, y un banco central con mandato único tampoco puede resistir a un Tesoro que no se financia. Ambas lecturas coinciden en algo: la independencia formal vale poco sin sustento fiscal y político.",
      ),
      p(
        "La independencia argentina fue históricamente frágil también en un aspecto concreto: la **duración efectiva en el cargo de los presidentes del BCRA** fue mucho menor que sus mandatos legales, y hubo episodios de remoción tras desacuerdos con el Poder Ejecutivo. La independencia en el papel y la independencia real no son lo mismo.",
      ),
    ],

    liberalArgument: [
      p("Dentro del liberalismo hay al menos cuatro posiciones sobre bancos centrales, y conviene no mezclarlas:"),
      ol(
        "**Reformista.** El BCRA debe existir, con mandato único de estabilidad de precios, prohibición absoluta de financiar al Tesoro e independencia real. Es la posición más común entre liberales clásicos.",
        "**Regla estricta.** Además de lo anterior, una regla cuantitativa que reduzca la discrecionalidad (Friedman).",
        "**Dolarización o caja de conversión.** Si el problema es la tentación de emitir, eliminarla resignando la moneda propia. Muy discutida en Argentina.",
        "**Banca libre.** Eliminar el banco central y permitir que bancos privados emitan monedas en competencia (Hayek, Selgin, White; y buena parte de la escuela austriaca).",
      ),
      p(
        "Lo que las cuatro comparten: desconfianza hacia un monopolio de emisión sujeto a presión política. Lo que las separa: si el remedio es reformar la institución o eliminarla.",
      ),
    ],

    critiques: [
      {
        objection:
          "Un banco central independiente es antidemocrático: decisiones que afectan a todos las toma gente que nadie votó.",
        response: [
          p(
            "La objeción es seria y la respuesta liberal la enfrenta de frente: hay decisiones que deliberadamente se sustraen a la mayoría de turno, igual que los derechos constitucionales.",
          ),
          p(
            "El argumento es que el Congreso, democráticamente, define el mandato y puede cambiarlo; lo que se aísla es la ejecución cotidiana, no la decisión última. Es el mismo diseño que se usa para los jueces.",
          ),
          p(
            "Los críticos responden que en la práctica los bancos centrales toman decisiones distributivas —a quién rescatar, qué activos comprar— que no son técnicas. Ese punto es fuerte y quedó más visible después de 2008.",
          ),
        ],
        unresolved: true,
      },
      {
        objection:
          "Sin prestamista de última instancia, una corrida bancaria puede destruir bancos solventes y arrastrar toda la economía.",
        response: [
          p(
            "Es la principal razón por la que existen los bancos centrales, y muchos liberales clásicos la aceptan.",
          ),
          p(
            "La respuesta austriaca sostiene que la garantía genera riesgo moral y que sistemas de banca libre históricos (Escocia, Canadá en el siglo XIX) tuvieron menos crisis que sistemas con banca central. La interpretación de esa evidencia histórica está discutida.",
          ),
        ],
        unresolved: true,
      },
    ],

    keyIdeas: [
      "El banco central emite, fija tasas, regula bancos y administra reservas.",
      "La independencia existe para resolver el problema de inconsistencia temporal.",
      "Independencia formal e independencia real no son lo mismo.",
      "Los liberales coinciden en el diagnóstico y discrepan en el remedio: reformar, atar con reglas, dolarizar o eliminar.",
    ],
    related: ["emision-monetaria", "inflacion", "dinero", "tipo-de-cambio", "instituciones"],
    glossary: ["banco-central", "encaje", "prestamista-de-ultima-instancia", "reservas", "inconsistencia-temporal"],
    sources: ["carta-organica-bcra", "bcra", "friedman-schwartz", "hayek-constitution", "friedman-capitalismo"],
    furtherReading: [
      {
        title: "Carta Orgánica del BCRA",
        why: "El texto que define qué puede y qué no puede hacer el Banco Central. Leerlo despeja muchas discusiones.",
        sourceId: "carta-organica-bcra",
        level: "intermedio",
      },
    ],
  },
];
