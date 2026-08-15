import {
  type Article,
  callout,
  compare,
  formula,
  h,
  ol,
  p,
  quote,
  steps,
  ul,
} from "../schema";

export const fiscal: Article[] = [
  // =========================================================================
  {
    slug: "impuestos",
    title: "¿Qué son los impuestos y qué impuestos existen?",
    question: "¿Qué son los impuestos? ¿Por qué hay que pagarlos?",
    summary:
      "La forma en que el Estado se financia. Quién los paga realmente no siempre coincide con quién los ingresa, y en Argentina la estructura tributaria es tan importante como el nivel.",
    category: "economia",
    level: "inicial",
    topics: ["economía argentina", "fiscal"],
    tags: ["impuestos", "presión tributaria", "ruta-inicial", "nivel-7", "argentina"],
    updated: "2026-08-15",
    status: "publicado",

    simple: [
      p(
        "Un impuesto es plata que el Estado te saca obligatoriamente para financiar lo que hace: sueldos estatales, jubilaciones, escuelas, hospitales, rutas, policía, justicia, subsidios y pago de deuda.",
      ),
      p(
        "La palabra importante es **obligatoriamente**. No es una compra: no elegís el producto ni el precio. Si no pagás, hay una sanción. Eso no lo hace ilegítimo por sí solo, pero sí explica por qué los liberales piden que estén justificados y limitados.",
      ),
      p("Pagás muchos más impuestos de los que creés. Algunos se ven y otros no:"),
      compare(
        {
          title: "Los que ves",
          items: [
            "Ganancias, si tu sueldo supera el mínimo.",
            "Los aportes que te descuentan del recibo de sueldo.",
            "Patente del auto, ABL o impuesto inmobiliario.",
            "Monotributo, si trabajás por tu cuenta.",
          ],
        },
        {
          title: "Los que no ves",
          items: [
            "**IVA**: está adentro del precio de casi todo lo que comprás.",
            "**Ingresos Brutos** provincial: se acumula en cada etapa de producción.",
            "**Contribuciones patronales**: las paga el empleador, pero salen del mismo costo de contratarte.",
            "**Impuesto inflacionario**: la pérdida de valor de tus pesos. Ver [[inflacion]].",
          ],
        },
      ),
    ],

    technical: [
      h("Tipos de impuestos"),
      ul(
        "**Directos**: gravan directamente el ingreso o el patrimonio de una persona identificada (Ganancias, Bienes Personales).",
        "**Indirectos**: gravan el consumo o las transacciones y se trasladan al precio (IVA, Ingresos Brutos, impuestos internos).",
        "**Progresivos**: la alícuota sube con la base imponible (Ganancias).",
        "**Proporcionales**: alícuota fija (IVA sobre la mayoría de los bienes).",
        "**Regresivos en efecto**: aunque la alícuota sea fija, pesan más sobre los ingresos bajos, porque quienes ganan menos consumen una proporción mayor de su ingreso.",
      ),
      h("Incidencia: quién paga de verdad"),
      p(
        "Este es el concepto más importante y el peor entendido. **Quién ingresa el impuesto al fisco no es necesariamente quién lo termina pagando.** La incidencia real depende de las {{elasticidad|elasticidades}}: el impuesto recae más sobre el lado del mercado que menos puede escapar.",
      ),
      formula(
        "El lado más inelástico del mercado soporta la mayor parte de la carga.",
        "Por eso las contribuciones patronales, legalmente a cargo del empleador, terminan afectando el salario que el trabajador podría haber recibido.",
      ),
      p(
        "Esto tiene una consecuencia política incómoda para todos los lados: un impuesto «a las empresas» no lo paga una entidad abstracta. Lo pagan, en alguna proporción, sus accionistas (menos ganancias), sus trabajadores (menores salarios) o sus clientes (precios más altos). Cuál de los tres depende del mercado, no de la ley.",
      ),
      h("Cómo evaluar un impuesto"),
      p("La literatura de finanzas públicas usa cuatro criterios, y ninguno se puede maximizar sin sacrificar otro:"),
      ol(
        "**Suficiencia** — recauda lo necesario.",
        "**Eficiencia** — distorsiona lo menos posible las decisiones. Todo impuesto genera una «pérdida de peso muerto»: actividades que dejan de hacerse.",
        "**Equidad** — horizontal (igual trato a iguales) y vertical (trato distinto a distintos).",
        "**Simplicidad** — costo de cumplir y de fiscalizar.",
      ),
      p(
        "La **curva de Laffer** ilustra que la relación entre alícuota y recaudación no es lineal: con alícuota 0% no se recauda nada y con 100% tampoco, porque nadie produce. Existe un punto de recaudación máxima. **Dónde está ese punto es una pregunta empírica**, distinta para cada impuesto y país. Afirmar que bajar impuestos siempre aumenta la recaudación es un abuso del argumento.",
      ),
    ],

    argentina: [
      p(
        "El sistema tributario argentino tiene tres niveles: nacional, provincial y municipal. Los impuestos de mayor recaudación nacional son el IVA, Ganancias, los aportes y contribuciones a la seguridad social, el impuesto al cheque y los derechos de exportación e importación.",
      ),
      p("Rasgos que la mayoría de los análisis técnicos, de distintas orientaciones, coincide en señalar como problemáticos:"),
      ul(
        "**Alta participación de impuestos indirectos**, lo que vuelve el sistema en conjunto menos progresivo de lo que sugiere la existencia de Ganancias.",
        "**Ingresos Brutos**: se cobra sobre la facturación en cada etapa de la cadena, de modo que se acumula («efecto cascada») y castiga más a los productos con muchas etapas de elaboración.",
        "**Impuesto al cheque**: grava movimientos financieros y empuja hacia la informalidad y el efectivo.",
        "**Derechos de exportación (retenciones)**: gravan justamente los sectores más competitivos internacionalmente.",
        "**Alta informalidad**: una parte importante de la economía no tributa, lo que concentra la carga sobre quienes sí están registrados.",
        "**Complejidad y superposición** entre niveles de gobierno.",
      ),
      callout(
        "dato",
        "Cómo verificar los números",
        "Para presión tributaria y recaudación por impuesto, la fuente primaria son las estadísticas de recaudación del organismo recaudador nacional y los informes del Ministerio de Economía. Para comparación internacional con metodología homogénea, las Estadísticas Tributarias en América Latina de OCDE/CEPAL/BID/CIAT. No cites cifras de presión tributaria sin aclarar si incluyen seguridad social y los tres niveles de gobierno: es la fuente más común de discusiones estériles.",
      ),
      h("Coparticipación"),
      p(
        "La Constitución, tras la reforma de 1994, prevé un régimen de coparticipación federal de impuestos con una ley convenio que debe sancionarse con mayorías especiales y aprobación de las provincias. Esa ley no se dictó, y el régimen sigue rigiéndose por normas anteriores y acuerdos sucesivos.",
      ),
      p(
        "El problema de incentivos que esto genera es central para un análisis liberal: cuando una provincia gasta con recursos recaudados nacionalmente, **quien decide el gasto no es quien paga el costo político de cobrar el impuesto**. La literatura llama a esto ausencia de correspondencia fiscal.",
      ),
    ],

    liberalArgument: [
      p("La posición liberal sobre impuestos se apoya en tres ideas que conviene distinguir:"),
      ol(
        "**Principio de legalidad.** No hay tributo sin ley. En Argentina surge de los artículos 4, 17 y 75 inciso 2 de la Constitución. De ahí la objeción liberal a la inflación como forma de financiamiento.",
        "**Proporcionalidad al gasto.** El nivel de impuestos es consecuencia del nivel de gasto: discutir impuestos sin discutir gasto es discutir la mitad del problema. Ver [[gasto-publico]].",
        "**Neutralidad y generalidad.** Preferencia por impuestos simples, generales y con pocas excepciones, en lugar de regímenes especiales que benefician a sectores con capacidad de lobby.",
      ),
      p(
        "Sobre el nivel deseable hay desacuerdo real dentro del liberalismo, y sobre la naturaleza misma del impuesto también: para el liberalismo clásico es el precio necesario de las instituciones que hacen posible el mercado; para el libertarismo rothbardiano es coerción injustificada.",
      ),
      quote(
        "La igualdad es la base del impuesto y de las cargas públicas.",
        "Constitución Nacional, artículo 16",
        "cn-argentina",
      ),
    ],

    positions: [
      {
        current: "Liberalismo clásico",
        stance:
          "Impuestos legítimos, moderados, simples y generales. Preferencia por bases amplias y alícuotas bajas.",
      },
      {
        current: "Minarquismo",
        stance:
          "Sólo lo necesario para justicia, seguridad y defensa. Todo lo demás es exceso.",
      },
      {
        current: "Anarcocapitalismo",
        stance: "Todo impuesto es ilegítimo por definición: es apropiación sin consentimiento.",
        reasoning: "Rothbard sostiene que no hay diferencia moral relevante con el robo.",
      },
      {
        current: "Liberalismo social",
        stance:
          "Acepta cargas más altas si financian bienes que amplían la autonomía real (educación, salud básica), siempre con controles de eficiencia.",
      },
    ],

    critiques: [
      {
        objection:
          "Sin impuestos no hay Estado, y sin Estado no hay propiedad ni contratos. Entonces el impuesto no es un robo: es la condición de posibilidad de la propiedad misma.",
        from: "Murphy y Nagel, «El mito de la propiedad»",
        response: [
          p(
            "Es la objeción filosófica más fuerte y muchos liberales clásicos la aceptan en parte: si la propiedad segura requiere justicia y policía, financiarlas no es una violación de la propiedad sino su condición.",
          ),
          p(
            "El límite que los liberales trazan: eso justifica financiar las funciones que efectivamente producen ese marco, no cualquier nivel de gasto. De la premisa «hace falta un Estado» no se sigue «cualquier impuesto está justificado».",
          ),
          p(
            "El libertarismo rothbardiano rechaza la premisa entera y sostiene que justicia y seguridad pueden proveerse privadamente.",
          ),
        ],
        unresolved: true,
      },
      {
        objection:
          "Bajar impuestos a los que más tienen no genera inversión: genera concentración de la riqueza.",
        response: [
          p(
            "La evidencia empírica sobre el efecto de las rebajas impositivas en la inversión es mixta y depende del impuesto, del nivel de partida y del contexto. Afirmar un efecto automático en cualquier dirección no está respaldado.",
          ),
          p(
            "La distinción útil es entre impuestos que gravan **stock** (patrimonio) y **flujo** (ingreso o consumo), y entre los que gravan el consumo del rico y los que gravan la reinversión. Un impuesto a la ganancia reinvertida y uno a la ganancia distribuida tienen efectos distintos sobre la formación de capital.",
          ),
        ],
        unresolved: true,
      },
    ],

    keyIdeas: [
      "Quién ingresa un impuesto no es necesariamente quién lo paga: la incidencia depende de las elasticidades.",
      "El nivel de impuestos es consecuencia del nivel de gasto.",
      "En Argentina el problema es tanto la estructura (cascada, informalidad, superposición) como el nivel.",
      "Sobre la legitimidad del impuesto hay desacuerdo profundo dentro del liberalismo.",
    ],
    related: ["gasto-publico", "deficit-fiscal", "inflacion", "estado", "deuda-publica"],
    glossary: ["impuesto", "incidencia-tributaria", "presion-tributaria", "curva-de-laffer", "coparticipacion", "efecto-cascada"],
    sources: ["cn-argentina", "afip-arca", "ocde-revenue", "minecon", "friedman-capitalismo", "rothbard-etica"],
    furtherReading: [
      {
        title: "Sistema económico y rentístico de la Confederación Argentina",
        author: "Juan Bautista Alberdi",
        why: "La tercera parte trata específicamente sobre rentas públicas y límites al poder de imponer. Escrito en 1854 y sorprendentemente vigente.",
        sourceId: "alberdi-sistema",
        level: "avanzado",
      },
    ],
  },

  // =========================================================================
  {
    slug: "gasto-publico",
    title: "¿Qué es el gasto público?",
    question: "¿En qué gasta el Estado? ¿Cuánto es mucho?",
    summary:
      "Todo lo que el Estado eroga. Lo relevante no es sólo el monto sino la composición, la rigidez y quién decide: en Argentina la mayor parte está comprometida por leyes previas.",
    category: "economia",
    level: "intermedio",
    topics: ["economía argentina", "fiscal"],
    tags: ["gasto público", "presupuesto", "argentina"],
    updated: "2026-08-15",
    status: "publicado",

    simple: [
      p(
        "El gasto público es todo lo que el Estado paga: sueldos de empleados públicos, jubilaciones, planes sociales, subsidios a la luz y al transporte, hospitales, escuelas, rutas, intereses de la deuda y funcionamiento de todos los organismos.",
      ),
      p(
        "Cuando se discute «el gasto», casi nunca se discute el total: se discute **qué parte**. Y eso importa porque las partes son muy distintas entre sí. Un peso en jubilaciones y un peso en subsidios a una empresa no son la misma discusión.",
      ),
      callout(
        "ojo",
        "Un número solo no dice nada",
        "«El gasto público es X% del PIB» no alcanza para saber si está bien o mal. Hay países ricos con gasto alto y países pobres con gasto alto. Lo que importa es qué se obtiene a cambio, cómo se financia y si es sostenible.",
      ),
    ],

    technical: [
      h("Cómo se clasifica"),
      ul(
        "**Por finalidad**: servicios sociales (previsión, salud, educación), servicios económicos (subsidios, obra pública), funcionamiento del Estado, deuda pública, defensa y seguridad.",
        "**Corriente vs. de capital**: gasto corriente es lo que se consume en el período (sueldos, jubilaciones); gasto de capital es inversión (infraestructura). La distinción importa porque la inversión puede generar retornos futuros.",
        "**Primario vs. total**: el gasto primario excluye los intereses de la deuda. Se usa para evaluar el resultado fiscal primario.",
        "**Rígido vs. discrecional**: el rígido está comprometido por leyes previas y no se puede reducir sin cambiar la ley.",
      ),
      h("El problema de la rigidez"),
      p(
        "Este es el punto que más se subestima en la discusión pública. Cuando un gobierno dice que no puede bajar el gasto, muchas veces está diciendo algo literalmente cierto: **una parte muy grande está determinada por fórmulas legales**, no por decisión del Ejecutivo.",
      ),
      p("En Argentina los principales rubros rígidos son:"),
      ol(
        "**Prestaciones previsionales**, cuya actualización sigue una fórmula establecida por ley.",
        "**Salarios públicos**, sujetos a convenios.",
        "**Transferencias automáticas a provincias** por coparticipación.",
        "**Intereses de deuda**, comprometidos contractualmente.",
      ),
      p(
        "La consecuencia práctica: cuando hay que ajustar rápido, el ajuste recae de manera desproporcionada sobre lo poco que es discrecional —típicamente obra pública, transferencias no automáticas y gasto de mantenimiento—, aunque no sea lo más ineficiente. Es un problema de diseño institucional que ningún gobierno resuelve en el corto plazo.",
      ),
      h("La lógica de la concentración de beneficios"),
      p(
        "La escuela de la {{elección pública}} explica por qué el gasto tiende a crecer con independencia de quién gobierne: **los beneficios de cada partida están concentrados y sus costos, dispersos**.",
      ),
      p(
        "Un subsidio de mil millones a un sector le da mucho a pocos, que se organizan intensamente para defenderlo. El costo, repartido entre millones de contribuyentes, es de unos pocos pesos por cabeza: a nadie le conviene invertir tiempo en oponerse. La asimetría de incentivos empuja al crecimiento del gasto aunque cada partida individual sea difícil de justificar.",
      ),
    ],

    argentina: [
      p(
        "Para mirar el gasto público argentino con datos hay dos herramientas oficiales que conviene conocer y usar en lugar de repetir cifras de redes sociales:",
      ),
      ul(
        "**Presupuesto Abierto** — permite ver el gasto nacional por finalidad, función, jurisdicción y programa, con ejecución en tiempo real.",
        "**Informe mensual de ingresos y gastos del Sector Público Nacional** (Ministerio de Economía) — resultado primario y financiero mes a mes.",
      ),
      callout(
        "ojo",
        "El error más frecuente al comparar",
        "Hay que aclarar siempre si se habla del **Sector Público Nacional** o del **Sector Público Consolidado** (que suma provincias y municipios). En un país federal como Argentina, una parte muy grande del gasto —salud, educación, seguridad— es provincial. Comparar el gasto nacional argentino con el gasto total de un país unitario es un error de método común.",
      ),
      h("Subsidios económicos"),
      p(
        "Los subsidios a la energía y al transporte fueron durante años uno de los rubros discrecionales más grandes. Su lógica: el Estado paga la diferencia entre el costo de producir y la tarifa que paga el usuario.",
      ),
      compare(
        {
          title: "Argumento a favor de subsidiar",
          items: [
            "Tarifas bajas protegen a hogares de bajos ingresos.",
            "Evitan un salto de precios que agrave la inflación medida.",
            "La energía es un insumo de toda la economía.",
          ],
        },
        {
          title: "Objeciones",
          items: [
            "El subsidio generalizado beneficia en términos absolutos más a quien más consume, que suele ser quien más tiene.",
            "Al desacoplar el precio del costo, se desincentiva el ahorro de energía y la inversión en oferta.",
            "Se financia con impuestos o emisión: no es gratis, sólo cambia quién paga.",
            "Alternativa: tarifa plena con transferencia focalizada a quien no puede pagarla.",
          ],
        },
      ),
    ],

    liberalArgument: [
      p(
        "El liberalismo no sostiene que todo gasto público sea malo: sostiene que **cada partida debe justificarse contra su costo de oportunidad**, incluidos los usos privados alternativos de esos recursos.",
      ),
      p("Las preguntas que un análisis liberal aplica a cualquier partida:"),
      ul(
        "¿Provee algo que sólo el Estado puede proveer, o desplaza a algo que ya existía?",
        "¿Los beneficiarios son quienes se dice que son, o el beneficio queda capturado por otro actor?",
        "¿Se financia con impuestos, deuda o emisión? Cada opción reparte el costo distinto y sobre gente distinta.",
        "¿Se puede medir el resultado o sólo el monto ejecutado?",
        "¿Genera una clientela con incentivo a hacerlo permanente?",
      ),
    ],

    critiques: [
      {
        objection:
          "Recortar el gasto en una recesión la profundiza. Es la lección keynesiana básica y la experiencia de la austeridad europea posterior a 2010 la respalda.",
        response: [
          p(
            "El argumento es sólido en un contexto específico: economía con capacidad ociosa, moneda propia creíble y acceso al crédito.",
          ),
          p(
            "El problema es que ese contexto no describe a un país sin acceso a crédito y con financiamiento monetario. Si el déficit se financia con emisión, «estimular» genera inflación que reduce el ingreso real, sin el efecto expansivo previsto.",
          ),
          p(
            "Se llama «consolidación fiscal expansiva» a la hipótesis de que en economías con problemas de credibilidad el ajuste puede reducir la incertidumbre y mejorar la actividad. La evidencia sobre esa hipótesis es discutida y depende mucho de la composición del ajuste.",
          ),
        ],
        unresolved: true,
      },
    ],

    keyIdeas: [
      "Lo relevante es la composición y la rigidez del gasto, no sólo su nivel.",
      "En Argentina la mayor parte del gasto está comprometida por leyes previas.",
      "Beneficios concentrados y costos dispersos explican por qué el gasto tiende a crecer.",
      "Los subsidios generalizados suelen beneficiar más, en términos absolutos, a quien más consume.",
    ],
    related: ["impuestos", "deficit-fiscal", "deuda-publica", "estado", "emision-monetaria"],
    glossary: ["gasto-primario", "gasto-rigido", "subsidio", "eleccion-publica", "presupuesto"],
    sources: ["presupuesto-abierto", "minecon", "cn-argentina", "friedman-capitalismo", "bastiat-ve"],
    furtherReading: [
      {
        title: "Presupuesto Abierto",
        why: "Herramienta oficial. Vale más una tarde mirando esto que cien discusiones sin datos.",
        sourceId: "presupuesto-abierto",
        level: "inicial",
      },
    ],
  },

  // =========================================================================
  {
    slug: "deficit-fiscal",
    title: "¿Qué es el déficit fiscal?",
    question: "¿Qué es el déficit fiscal y por qué importa tanto?",
    summary:
      "Gastar más de lo que se recauda. Lo decisivo no es el déficit en sí sino cómo se financia: con deuda, con emisión o con más impuestos. Las tres tienen costos distintos y sobre gente distinta.",
    category: "economia",
    level: "inicial",
    topics: ["economía argentina", "fiscal"],
    tags: ["déficit", "fiscal", "ruta-inicial", "nivel-9", "argentina"],
    updated: "2026-08-15",
    status: "publicado",

    simple: [
      p(
        "Es una idea de contabilidad doméstica. Si en tu casa entran 100 y gastás 120, tenés un déficit de 20. Con el Estado es igual: si recauda 100 y gasta 120, hay déficit de 20.",
      ),
      p("Y como en tu casa, hay tres formas de cubrir esos 20:"),
      steps(
        {
          title: "Pedir prestado",
          text: "Emitir deuda. Se posterga el problema: hay que devolverlo con intereses. Ver [[deuda-publica]].",
        },
        {
          title: "Aumentar los ingresos",
          text: "Subir impuestos. Reduce el ingreso disponible de la gente y puede desalentar la actividad.",
        },
        {
          title: "Imprimir",
          text: "Esta el Estado la tiene y vos no. Genera [[inflacion|inflación]], que es un impuesto que nadie votó.",
        },
      ),
      callout(
        "ejemplo",
        "Por qué el déficit está en el centro de todo",
        "Casi todos los problemas macroeconómicos argentinos se conectan acá. Inflación, deuda, cepo, crisis cambiarias: en la mayoría de los diagnósticos, el hilo conductor es un déficit fiscal persistente y la forma en que se lo financió.",
      ),
    ],

    technical: [
      h("Los dos resultados que hay que distinguir"),
      formula(
        "Resultado primario = Ingresos − Gasto primario (sin intereses)",
      ),
      formula(
        "Resultado financiero = Resultado primario − Intereses de la deuda",
      ),
      p(
        "La distinción no es un tecnicismo. Un país puede tener superávit primario y aun así déficit financiero, porque los intereses se comen el superávit. Eso significa que el gasto corriente está financiado, pero la deuda sigue creciendo por su propio interés.",
      ),
      h("Cómo se financia y qué cuesta cada opción"),
      compare(
        {
          title: "Con deuda",
          items: [
            "No genera inflación inmediata.",
            "Compromete recursos futuros: hay que pagar capital e intereses.",
            "Depende de que alguien quiera prestar y a qué tasa.",
            "Puede desplazar crédito al sector privado.",
          ],
        },
        {
          title: "Con emisión",
          items: [
            "No requiere que nadie preste.",
            "Genera inflación, con rezagos.",
            "Es un impuesto regresivo sin ley.",
            "Tiene límite: si la demanda de dinero cae, se necesita emitir cada vez más.",
          ],
        },
      ),
      p(
        "**Con más impuestos** es la tercera vía. Es la más transparente institucionalmente —requiere ley y debate— y a la vez tiene límites económicos: pasado cierto punto, subir alícuotas empuja hacia la informalidad y reduce la actividad gravada.",
      ),
      h("Sostenibilidad"),
      p(
        "Un déficit no es intrínsecamente malo. Lo que importa es si la deuda resultante crece más rápido que la capacidad de pagarla. La condición estándar de sostenibilidad compara la tasa de interés que se paga con la tasa de crecimiento de la economía:",
      ),
      formula(
        "Si i > g (tasa de interés mayor que el crecimiento), hace falta superávit primario para que la deuda no crezca respecto del PIB.",
      ),
      p(
        "Para Argentina esta condición fue históricamente exigente, porque las tasas que paga son altas por el riesgo percibido, y el crecimiento fue volátil.",
      ),
    ],

    argentina: [
      p(
        "El rasgo distintivo argentino no es haber tenido déficit —lo tienen casi todos los países— sino la **combinación de déficit persistente con acceso limitado al crédito**.",
      ),
      p(
        "Un país con crédito puede financiar déficits durante décadas. Argentina, tras sucesivos episodios de default y alta inflación, enfrenta tasas muy altas o directamente falta de acceso. Cuando eso ocurre, la única vía disponible es la emisión, y de ahí la conexión estructural entre déficit e inflación en el caso argentino.",
      ),
      steps(
        { title: "1", text: "Déficit persistente." },
        { title: "2", text: "Historial de default y alta inflación." },
        { title: "3", text: "Crédito caro o inexistente." },
        { title: "4", text: "Financiamiento monetario." },
        { title: "5", text: "Inflación, que erosiona la recaudación real y la demanda de dinero." },
        { title: "6", text: "Se necesita más emisión para financiar el mismo déficit." },
      ),
      callout(
        "debate",
        "Dónde no hay consenso",
        "Que el déficit financiado con emisión genera inflación es ampliamente aceptado. Lo que sí se discute intensamente: si el ajuste debe ser rápido o gradual, si debe recaer más sobre gasto o sobre impuestos, y cuál es la secuencia correcta respecto de la política cambiaria.",
      ),
      p(
        "También conviene una precisión honesta: **eliminar el déficit es condición necesaria pero no suficiente** para la estabilidad. Hace falta además resolver el stock de pasivos acumulados y reconstruir la demanda de moneda, lo cual lleva tiempo. Ver [[emision-monetaria]].",
      ),
    ],

    liberalArgument: [
      p("El argumento liberal sobre el déficit tiene un componente ético que suele omitirse en la discusión técnica:"),
      p(
        "El déficit financiado con deuda transfiere el costo de decisiones actuales a personas que no participaron de ellas —incluidas las que todavía no votan. El déficit financiado con emisión transfiere ese costo a quienes tienen pesos, sin ley que lo establezca. En ambos casos hay una asimetría entre quien decide y quien paga.",
      ),
      p(
        "De ahí las propuestas liberales de **reglas fiscales**: límites constitucionales o legales al déficit, techos de gasto, o exigencia de equilibrio presupuestario. La objeción práctica es que las reglas fiscales se incumplen o se sortean con contabilidad creativa, y que su eficacia depende de las mismas instituciones que se busca disciplinar.",
      ),
    ],

    critiques: [
      {
        objection:
          "La analogía con una familia es engañosa: un Estado no muere, puede refinanciar indefinidamente y emite su propia moneda.",
        response: [
          p(
            "La objeción es parcialmente correcta y conviene concederlo: un Estado no necesita cancelar su deuda, sólo refinanciarla, y por eso el nivel de deuda sostenible es mucho mayor que el de una familia.",
          ),
          p(
            "Lo que la objeción omite: refinanciar requiere que alguien quiera prestar. Cuando la confianza se pierde, la refinanciación se corta abruptamente —no gradualmente— y ahí aparece la crisis. Argentina experimentó ese corte varias veces.",
          ),
        ],
      },
      {
        objection:
          "Si el déficit financia inversión productiva (rutas, educación, energía), se paga solo con el crecimiento que genera.",
        response: [
          p(
            "Es teóricamente correcto y es el argumento estándar a favor de endeudarse para invertir. La condición es que el retorno social de la inversión supere la tasa de interés.",
          ),
          p(
            "Los dos problemas prácticos: primero, en Argentina la mayor parte del déficit histórico financió gasto corriente, no inversión. Segundo, evaluar ex ante qué obra tiene retorno superior a la tasa es difícil y está sujeto a captura política.",
          ),
        ],
      },
    ],

    keyIdeas: [
      "Déficit es gastar más de lo que se recauda; lo decisivo es cómo se financia.",
      "Primario excluye intereses; financiero los incluye. La diferencia importa.",
      "Sin acceso a crédito, la única vía es la emisión: esa es la conexión argentina entre déficit e inflación.",
      "Eliminar el déficit es necesario pero no suficiente para estabilizar.",
    ],
    related: ["gasto-publico", "impuestos", "deuda-publica", "inflacion", "emision-monetaria"],
    glossary: ["deficit-fiscal", "resultado-primario", "sostenibilidad", "riesgo-pais"],
    sources: ["minecon", "presupuesto-abierto", "bcra", "fmi-weo", "alberdi-sistema"],
    furtherReading: [
      {
        title: "Informe mensual de ingresos y gastos del SPN",
        why: "El dato oficial de resultado primario y financiero, mes a mes.",
        sourceId: "minecon",
        level: "intermedio",
      },
    ],
  },

  // =========================================================================
  {
    slug: "deuda-publica",
    title: "¿Qué es la deuda pública?",
    question: "¿Qué es la deuda pública? ¿Es mala endeudarse?",
    summary:
      "Lo que el Estado le debe a acreedores internos y externos. Endeudarse no es bueno ni malo en sí: depende de para qué, en qué moneda, a qué plazo y si se puede pagar.",
    category: "economia",
    level: "intermedio",
    topics: ["economía argentina", "fiscal"],
    tags: ["deuda", "default", "riesgo país", "argentina"],
    updated: "2026-08-15",
    status: "publicado",

    simple: [
      p(
        "La deuda pública es la plata que el Estado pidió prestada y todavía no devolvió. Se la pide a bancos, a fondos de inversión, a organismos internacionales como el FMI, a otros países y también a ciudadanos que compran bonos.",
      ),
      p(
        "Endeudarse no es malo por definición. Vos también te endeudás para comprar una casa, y eso puede ser una buena decisión. Lo que hace la diferencia son cuatro preguntas:",
      ),
      ol(
        "**¿Para qué?** Financiar una ruta que va a durar 40 años no es lo mismo que financiar sueldos de este mes.",
        "**¿En qué moneda?** Si debés en dólares y tus ingresos son en pesos, una devaluación multiplica tu deuda sin que hayas pedido un peso más.",
        "**¿A qué plazo?** Deuda corta obliga a renovar constantemente, y si un día nadie te renueva, hay crisis.",
        "**¿A qué tasa?** Si la tasa es más alta que el crecimiento de tus ingresos, la deuda crece sola.",
      ),
    ],

    technical: [
      h("Cómo se clasifica"),
      ul(
        "**Interna / externa** — según la residencia del acreedor.",
        "**En moneda local / en moneda extranjera** — esta es la distinción económicamente más importante.",
        "**Con el sector privado / intra sector público** — buena parte de la deuda argentina está en manos de organismos del propio Estado, lo que cambia la interpretación de los ratios.",
        "**Con organismos multilaterales** — FMI, Banco Mundial, BID. Suelen tener condiciones y tasas distintas.",
      ),
      h("El pecado original"),
      p(
        "La literatura económica llama «pecado original» a la incapacidad de un país de endeudarse en su propia moneda a largo plazo. Es la situación argentina, y explica por qué la deuda argentina es tan sensible al tipo de cambio.",
      ),
      p(
        "El mecanismo: si el Estado debe en dólares y recauda en pesos, una devaluación aumenta el peso de la deuda medida en pesos sin que haya cambiado un solo contrato. Un país que se endeuda en su propia moneda no tiene ese problema —a costa de trasladar el riesgo al acreedor, que por eso exige tasas más altas o no presta.",
      ),
      h("Default y reestructuración"),
      p(
        "El default es la cesación de pagos. La reestructuración es el canje de deuda vieja por nueva con quitas de capital, de intereses o extensión de plazos.",
      ),
      p(
        "Argentina reestructuró su deuda soberana en varias oportunidades. El default de diciembre de 2001 fue, por su magnitud, uno de los mayores de la historia moderna, y derivó en canjes en 2005 y 2010 y en litigios internacionales prolongados con acreedores que no aceptaron esos canjes (los llamados «holdouts»), resueltos en 2016.",
      ),
      callout(
        "dato",
        "Por qué los defaults dejan huella",
        "El costo de un default no termina cuando se resuelve: queda en la tasa que el país paga durante años. El {{riesgo país}} mide justamente el sobreprecio que los acreedores exigen respecto de un bono considerado libre de riesgo, y es en buena parte memoria de comportamiento pasado.",
      ),
      h("El FMI"),
      p(
        "El Fondo Monetario Internacional presta a países con problemas de balanza de pagos, con condiciones de política económica. Argentina tuvo múltiples programas a lo largo de su historia.",
      ),
      compare(
        {
          title: "Argumento a favor de recurrir al FMI",
          items: [
            "Provee financiamiento cuando ningún privado presta.",
            "Su tasa es sensiblemente menor a la del mercado en esas condiciones.",
            "La condicionalidad puede funcionar como ancla de credibilidad.",
          ],
        },
        {
          title: "Objeciones",
          items: [
            "La condicionalidad implica ceder margen de decisión soberana.",
            "Programas anteriores fallaron en sus propias proyecciones, incluido el reconocimiento de errores por parte del propio organismo.",
            "Puede financiar la postergación del ajuste en lugar de facilitarlo.",
            "Los costos del programa recaen sobre la población, no sobre quien decidió endeudarse.",
          ],
        },
      ),
    ],

    argentina: [
      p(
        "La historia argentina de deuda es larga y tiene episodios de default en distintos siglos. Los hitos que más impactan en la discusión actual:",
      ),
      ul(
        "**Diciembre de 2001** — default sobre una parte muy grande de la deuda soberana, en el marco de la crisis que terminó con la convertibilidad.",
        "**2005 y 2010** — canjes de deuda con quitas significativas, aceptados por la gran mayoría de los acreedores.",
        "**2005–2016** — litigios con acreedores que rechazaron los canjes, con fallos adversos en tribunales de Nueva York y bloqueo del acceso al crédito internacional.",
        "**2020** — nueva reestructuración de deuda con acreedores privados.",
      ),
      callout(
        "ojo",
        "Cómo leer estos episodios sin caer en la caricatura",
        "Hay dos relatos simplificados que conviene evitar. Uno dice que la deuda siempre fue producto de gobiernos irresponsables que gastaron de más; otro dice que fue impuesta desde afuera. Ambos ignoran que la deuda se acumuló bajo gobiernos de signos políticos muy distintos y que su origen inmediato casi siempre fue el déficit fiscal, que a su vez tuvo causas políticas de largo plazo.",
      ),
      p(
        "Ver [[ciclos-inflacionarios-argentinos]] para el contexto histórico completo, y [[deficit-fiscal]] para el origen del problema.",
      ),
    ],

    liberalArgument: [
      p("La objeción liberal central a la deuda pública excesiva no es contable sino de representación:"),
      quote(
        "La igualdad es la base del impuesto y de las cargas públicas.",
        "Constitución Nacional, artículo 16",
        "cn-argentina",
      ),
      p(
        "El endeudamiento permite gastar hoy y cobrar el impuesto mañana. Quien recibe el beneficio vota; quien paga, en muchos casos, todavía no. Los liberales suelen ver acá un problema estructural de incentivos: el sistema político tiene un sesgo hacia el déficit porque los costos son diferidos.",
      ),
      p(
        "Alberdi trató el tema en el *Sistema económico y rentístico*, donde analiza el crédito público como recurso legítimo pero condicionado a su destino y a la capacidad de repago.",
      ),
    ],

    critiques: [
      {
        objection:
          "Hablar de «deuda odiosa» o de auditar la deuda es un reclamo legítimo: parte de la deuda argentina se contrajo bajo la dictadura y sin control democrático.",
        response: [
          p(
            "El punto histórico es real y está documentado: hubo un aumento sustancial del endeudamiento externo entre 1976 y 1983, sin control parlamentario, y hubo litigios judiciales al respecto en Argentina.",
          ),
          p(
            "La doctrina de la «deuda odiosa» existe en el debate del derecho internacional pero no tiene reconocimiento consolidado, y su aplicación práctica es incierta.",
          ),
          p(
            "La observación liberal que suele agregarse: el reclamo es coherente con el principio de que sólo obliga lo contraído con representación y control. Pero también señala que repudiar deuda tiene un costo concreto —cierre del crédito— que recae sobre la generación siguiente.",
          ),
        ],
        unresolved: true,
      },
    ],

    keyIdeas: [
      "Endeudarse no es bueno ni malo: depende del destino, la moneda, el plazo y la tasa.",
      "Deber en moneda extranjera con ingresos en moneda local es la vulnerabilidad estructural argentina.",
      "El costo de un default persiste durante años en la tasa que el país paga.",
      "La deuda permite que quien decide el gasto no sea quien paga el impuesto.",
    ],
    related: ["deficit-fiscal", "gasto-publico", "impuestos", "tipo-de-cambio", "ciclos-inflacionarios-argentinos"],
    glossary: ["deuda-publica", "default", "riesgo-pais", "pecado-original", "reestructuracion"],
    sources: ["minecon", "fmi-weo", "cn-argentina", "alberdi-sistema", "ley-25561"],
    furtherReading: [
      {
        title: "Sistema económico y rentístico, tercera parte",
        author: "Juan Bautista Alberdi",
        why: "Trata el crédito público como recurso del Tesoro y sus límites, en 1854.",
        sourceId: "alberdi-sistema",
        level: "avanzado",
      },
    ],
  },
];
