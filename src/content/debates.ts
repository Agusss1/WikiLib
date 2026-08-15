import type { Level } from "./schema";

/**
 * Argumentario y preguntas difíciles.
 *
 * Estructura obligatoria de cada entrada (punto 11 del proyecto):
 * afirmación -> qué significa -> mejor argumento a favor -> respuesta liberal
 * -> contraargumento fuerte -> respuesta -> qué sigue abierto.
 *
 * El objetivo explícito es que el lector entienda el argumento contrario
 * ANTES de aprender a responderlo. Si la sección "a favor" es más débil que
 * la "respuesta liberal", la entrada está mal escrita.
 */
export type Debate = {
  id: string;
  claim: string;
  /** Explicación neutral de qué se está afirmando. */
  meaning: string;
  level: Level;
  topics: string[];
  /** El mejor argumento posible a favor de la afirmación. */
  inFavor: string[];
  /** La respuesta liberal. */
  liberalResponse: string[];
  /** Una objeción fuerte a esa respuesta. */
  counter: string[];
  /** Cómo podría contestar un liberal. */
  reply: string[];
  /** Qué sigue genuinamente discutido. */
  open: string[];
  relatedArticles: string[];
};

export const DEBATES: Debate[] = [
  {
    id: "ricos-mas-impuestos",
    claim: "Los ricos deberían pagar más impuestos.",
    meaning:
      "La afirmación puede significar dos cosas distintas: que paguen más en términos absolutos (algo que ya ocurre con cualquier alícuota proporcional) o que paguen una proporción mayor de su ingreso (progresividad). Casi toda la discusión real es sobre la segunda.",
    level: "intermedio",
    topics: ["impuestos", "desigualdad"],
    inFavor: [
      "**Utilidad marginal decreciente del ingreso.** Mil pesos significan mucho más para quien gana poco que para quien gana mucho. Si se busca minimizar el sacrificio total que impone el sistema tributario, conviene cobrar proporcionalmente más arriba.",
      "**Capacidad contributiva.** Es un principio aceptado en el derecho tributario de casi todos los países, incluida la doctrina argentina: contribuye más quien más puede.",
      "**Beneficio recibido.** Quien tiene más patrimonio se beneficia más de la existencia de justicia, policía, registros de propiedad e infraestructura que protegen ese patrimonio.",
      "**Efecto sobre la igualdad política.** Concentraciones muy grandes de riqueza se traducen en influencia desproporcionada sobre las decisiones públicas, lo que erosiona la igualdad ante la ley.",
    ],
    liberalResponse: [
      "La objeción liberal rara vez es a la progresividad en sí, sino a tres cosas concretas.",
      "**Primera: quién paga no siempre es quien parece.** Un impuesto sobre el capital puede trasladarse a salarios más bajos o a menos inversión. La incidencia real depende de las elasticidades, no de la ley.",
      "**Segunda: el efecto sobre la formación de capital.** Gravar el ahorro y la inversión reduce el stock de capital futuro, y con él la productividad y los salarios. Un impuesto al consumo del rico y uno a la ganancia reinvertida no tienen los mismos efectos.",
      "**Tercera: la movilidad.** El capital financiero se mueve mucho más fácil que el trabajo. Alícuotas muy por encima de las de países comparables tienden a producir salida de capital antes que recaudación.",
      "Y un punto de principio: para el liberalismo la pregunta prioritaria no es cómo repartir la carga sino **cuánto gasto justifica esa carga**. Discutir impuestos sin discutir gasto es discutir la mitad del problema.",
    ],
    counter: [
      "La preocupación por la «fuga de capitales» funciona en la práctica como un veto permanente: cualquier intento de gravar arriba se descarta invocando un efecto cuya magnitud rara vez se estima.",
      "Además, la evidencia sobre el efecto de las alícuotas altas en la inversión es mucho más débil de lo que suele afirmarse: Estados Unidos tuvo alícuotas marginales superiores al 70% durante décadas de fuerte crecimiento.",
    ],
    reply: [
      "El dato sobre las alícuotas históricas es correcto, y conviene concederlo. Pero conviene mirar también la **base**: las alícuotas nominales altas convivían con exenciones amplísimas, y la recaudación efectiva sobre los ingresos altos fue mucho menor que la alícuota nominal sugiere.",
      "La respuesta liberal más defendible no es «no se puede gravar arriba» sino: gravar bases amplias con alícuotas moderadas y pocas excepciones recauda más y distorsiona menos que alícuotas nominales altas llenas de agujeros.",
      "Y en el caso argentino hay un punto adicional: la discusión sobre progresividad convive con una estructura donde el impuesto de mayor recaudación es el IVA y donde la inflación funciona como un tributo regresivo no legislado.",
    ],
    open: [
      "Cuál es la elasticidad real del capital y del trabajo calificado ante cambios impositivos en Argentina.",
      "Si conviene gravar patrimonio, ingreso o consumo, y en qué proporción.",
      "Cómo evitar que la progresividad nominal quede neutralizada por exenciones y regímenes especiales.",
    ],
    relatedArticles: ["impuestos", "gasto-publico", "inflacion", "capitalismo"],
  },
  {
    id: "salario-minimo",
    claim: "Hay que subir el salario mínimo por ley.",
    meaning:
      "Establecer por norma un piso salarial por debajo del cual es ilegal contratar. La discusión no es si debe existir sino en qué nivel, y qué pasa cuando ese nivel se aleja del salario que el mercado pagaría.",
    level: "intermedio",
    topics: ["trabajo", "salarios"],
    inFavor: [
      "**Poder de negociación desigual.** Un trabajador individual frente a un empleador no negocia en igualdad de condiciones, sobre todo cuando hay pocas alternativas de empleo en su zona o especialidad.",
      "**Monopsonio.** Cuando hay pocos compradores de trabajo, el salario de mercado puede quedar por debajo de la productividad del trabajador. En ese caso un mínimo puede aumentar salario **y** empleo. Esto es economía estándar, no heterodoxia.",
      "**Evidencia empírica.** El estudio de Card y Krueger sobre Nueva Jersey y otros posteriores encontraron efectos sobre el empleo mucho menores que los predichos por el modelo competitivo simple.",
      "**Efecto sobre la demanda agregada.** Los salarios bajos se consumen casi íntegramente, de modo que aumentarlos sostiene la actividad.",
    ],
    liberalResponse: [
      "El argumento liberal parte de una distinción que la discusión pública suele omitir: **un salario mínimo moderado y uno muy por encima del salario de mercado no son la misma política**.",
      "Un mínimo por debajo o cerca del salario que ya se paga tiene efectos pequeños. Uno muy por encima produce un excedente de oferta de trabajo, que en el mercado laboral se llama desempleo o informalidad.",
      "El punto central: la ley puede prohibir contratar por menos de X, pero **no puede obligar a nadie a contratar**. Si la productividad de un trabajador está por debajo de X, la norma no le sube el sueldo: lo deja fuera del mercado formal.",
      "Y el efecto recae justamente sobre quienes menos productividad tienen: jóvenes sin experiencia, personas con baja calificación, trabajadores de regiones menos productivas. Es decir, sobre los que la política decía proteger.",
    ],
    counter: [
      "Ese razonamiento supone que el salario iguala la productividad marginal, lo que sólo vale en mercados competitivos. Con monopsonio —bastante común en mercados laborales locales— el resultado se invierte.",
      "Además, sin un piso legal, la alternativa realista para muchos trabajadores no es «un salario algo menor» sino condiciones de explotación que ninguna sociedad debería aceptar.",
    ],
    reply: [
      "El punto sobre monopsonio es correcto y hay que concederlo: en esos mercados un mínimo bien calibrado puede mejorar salario y empleo simultáneamente. La objeción liberal es práctica: calibrarlo requiere información sobre la productividad y la estructura de cada mercado local que el legislador no tiene.",
      "Sobre la segunda parte: la respuesta liberal apunta a atacar la causa del bajo poder de negociación, que es la falta de alternativas. Más competencia por trabajadores, menos costo de contratar formalmente y más movilidad hacen más por el salario que un piso legal.",
      "En Argentina hay un dato que complica a ambos lados: con informalidad laboral muy alta, el salario mínimo simplemente no aplica a una porción enorme de los trabajadores, que son además los más vulnerables.",
    ],
    open: [
      "Cuál es el nivel de mínimo a partir del cual los efectos sobre el empleo se vuelven significativos.",
      "Si conviene un mínimo nacional único o diferenciado por región y por edad.",
      "Cómo interactúa el salario mínimo con la informalidad en economías donde ésta es alta.",
    ],
    relatedArticles: ["oferta-y-demanda", "capitalismo", "por-que-hay-pobres-si-el-mercado-funciona"],
  },
  {
    id: "control-alquileres",
    claim: "Hay que regular los alquileres para que la gente pueda vivir en la ciudad.",
    meaning:
      "Establecer por ley límites a los aumentos, plazos mínimos de contrato o condiciones de rescisión, con el objetivo de proteger al inquilino frente al propietario.",
    level: "inicial",
    topics: ["vivienda", "regulación"],
    inFavor: [
      "**Asimetría de poder.** El propietario puede esperar; el inquilino necesita un techo el mes que viene. Esa diferencia no es un detalle: condiciona toda la negociación.",
      "**La vivienda no es un bien cualquiera.** Mudarse tiene costos altísimos, materiales y emocionales, e implica cambiar de escuela, de trabajo y de red social.",
      "**Estabilidad.** Plazos largos y aumentos previsibles permiten a las familias planificar, y a los barrios mantener su tejido social.",
      "**Especulación.** Sin regulación, en ciudades con demanda alta los precios pueden subir más rápido que los ingresos, expulsando a los residentes de toda la vida.",
    ],
    liberalResponse: [
      "El análisis liberal distingue dos tipos de regulación con efectos muy distintos.",
      "**Reglas claras y estables** —plazos, garantías, mecanismos de resolución de conflictos— reducen la incertidumbre y **aumentan** la oferta. Ningún liberal serio se opone a eso.",
      "**Topes al precio o al ajuste** son otra cosa: si el tope queda por debajo de lo que el propietario considera aceptable, la respuesta no es aceptar menos sino **retirar la propiedad del mercado de alquiler**. Vende, deja vacío o pasa a alquiler temporario.",
      "El resultado esperable es menos oferta, más exigencia de garantías, contratos informales y precios más altos para quien entra nuevo. Los que ya estaban adentro se benefician; los que buscan, pierden.",
      "Es una de las predicciones más consistentes de la economía aplicada, con evidencia en ciudades de contextos muy distintos.",
    ],
    counter: [
      "El problema de fondo no es la regulación sino la escasez de vivienda, y desregular no construye departamentos. En ciudades con oferta rígida, liberalizar sólo transfiere más renta al propietario.",
      "Además, presentar «el mercado» como solución ignora que el suelo urbano es un bien con oferta prácticamente fija, donde la lógica de oferta y demanda funciona distinto.",
    ],
    reply: [
      "El punto sobre la escasez es correcto y es, de hecho, el argumento liberal central: **el problema es de oferta, y las restricciones a construir son en buena medida regulatorias**. Códigos urbanísticos restrictivos, límites de altura, requisitos de estacionamiento y procesos de aprobación lentos reducen la oferta más que cualquier otra cosa.",
      "Sobre la oferta fija del suelo: es cierto para el suelo, no para los metros cuadrados construidos. Permitir mayor densidad aumenta la oferta de vivienda sobre el mismo suelo.",
      "La propuesta liberal concreta suele ser: liberalizar la construcción en altura y la densificación, simplificar la aprobación de obras, dar reglas contractuales estables y previsibles, y asistir con transferencias directas a quien no llega, en lugar de con topes de precio.",
    ],
    open: [
      "Cuánto de los precios altos se explica por restricciones a construir y cuánto por otros factores.",
      "Si existen diseños de regulación que protejan al inquilino sin reducir la oferta.",
      "Cómo tratar el efecto de los alquileres temporarios turísticos sobre la oferta residencial.",
    ],
    relatedArticles: ["oferta-y-demanda", "propiedad-privada", "escasez-e-incentivos"],
  },
  {
    id: "privatizar",
    claim: "Hay que privatizar las empresas del Estado.",
    meaning:
      "Transferir la propiedad de empresas estatales al sector privado. La afirmación esconde dos preguntas distintas: si el Estado debe ser dueño, y cómo se hace la transferencia si se decide hacerla.",
    level: "intermedio",
    topics: ["empresas públicas", "argentina"],
    inFavor: [
      "**Incentivos.** Un dueño privado que pierde plata quiebra; una empresa estatal deficitaria se financia con impuestos. La retroalimentación que corrige errores es mucho más débil en el segundo caso.",
      "**Costo fiscal.** Las empresas deficitarias se financian con recursos que salen de otros usos, incluidos usos sociales.",
      "**Uso político.** El empleo y las tarifas en empresas estatales suelen responder a lógicas electorales más que operativas.",
      "**Foco.** El Estado hace muchas cosas mal porque hace demasiadas; concentrarse en justicia y seguridad podría mejorar lo esencial.",
    ],
    liberalResponse: [
      "Todo lo anterior es el argumento liberal estándar. Pero un análisis liberal serio tiene que agregar algo que la experiencia argentina de los años 90 hizo evidente:",
      "**Privatizar sin competencia no produce los efectos que la teoría predice.** Si un monopolio estatal se convierte en un monopolio privado con tarifas reguladas discrecionalmente y contratos renegociables, no se obtuvo un mercado: se cambió de dueño.",
      "Lo que produce eficiencia no es la propiedad privada por sí sola sino **la posibilidad de que aparezca un competidor**. Ver el artículo sobre competencia.",
      "De ahí que la secuencia importe: primero marco regulatorio y apertura a la competencia donde sea posible, después transferencia, con procesos transparentes y competitivos.",
    ],
    counter: [
      "Hay servicios donde la competencia es técnicamente imposible —redes de distribución de agua, cloacas, transmisión eléctrica—. Ahí privatizar significa entregar un monopolio, con o sin buena regulación.",
      "Y hay servicios cuya prestación tiene un componente de derecho básico que un operador con fines de lucro no tiene incentivo a garantizar en zonas no rentables.",
    ],
    reply: [
      "El caso del monopolio natural es real y muchos liberales clásicos lo aceptan. Las respuestas propuestas dentro de la tradición: separar la red del servicio que corre sobre ella (permitiendo competencia en el segundo), licitar competitivamente el derecho a operar la red por plazos determinados, o mantener la red en manos públicas con operación privada.",
      "Sobre el segundo punto: el problema de la cobertura en zonas no rentables se puede resolver con obligaciones de servicio universal explícitas y financiadas, en lugar de con propiedad estatal. Eso hace visible el costo en lugar de esconderlo en el déficit de la empresa.",
      "Conviene ser honesto: ninguna de estas soluciones es perfecta, y todas dependen de una capacidad regulatoria que en Argentina fue históricamente débil.",
    ],
    open: [
      "Qué servicios constituyen monopolios naturales genuinos hoy, dado el cambio tecnológico.",
      "Cómo diseñar procesos de privatización que no terminen capturados.",
      "Si la capacidad regulatoria necesaria es alcanzable, y qué hacer si no lo es.",
    ],
    relatedArticles: ["competencia", "instituciones", "liberalismo-en-argentina", "gasto-publico"],
  },
  {
    id: "retenciones",
    claim: "Las retenciones al campo son necesarias.",
    meaning:
      "Los derechos de exportación gravan la venta al exterior de determinados productos. Se defienden por su capacidad recaudatoria y por su efecto sobre los precios internos de los alimentos.",
    level: "intermedio",
    topics: ["comercio exterior", "impuestos", "argentina"],
    inFavor: [
      "**Desacople de precios internos.** Sin retenciones, el precio local de un bien exportable tiende al precio internacional. Las retenciones mantienen el precio interno por debajo, abaratando alimentos en el mercado local.",
      "**Recaudación de fácil administración.** Se cobran en la aduana, con muy baja evasión comparada con otros impuestos.",
      "**Renta de la tierra.** Parte de la rentabilidad agrícola proviene de la fertilidad natural del suelo, no del esfuerzo del productor. Gravarla no desalienta la producción del mismo modo que gravar el trabajo.",
      "**Captura de ganancias extraordinarias** cuando los precios internacionales son excepcionalmente altos.",
    ],
    liberalResponse: [
      "La objeción liberal tiene un componente técnico y uno de principio.",
      "**Técnico:** gravan la producción del sector donde el país tiene ventaja comparativa. El resultado esperable es menor producción, menor superficie sembrada, menos inversión en tecnología y menos exportaciones. Es decir, menos de lo que el país mejor produce, y menos divisas.",
      "**De principio:** son un impuesto que no coparticipa con las provincias en la misma proporción que otros, lo que concentra recursos en la Nación y agrava el problema de correspondencia fiscal.",
      "Sobre el argumento de los precios internos: efectivamente los baja, pero se trata de una transferencia del productor al consumidor. Es un subsidio al consumo de alimentos financiado por un sector específico, y hay maneras más transparentes y focalizadas de asistir a quien no llega a comprar comida.",
    ],
    counter: [
      "El argumento de la renta de la tierra no se responde con «desalientan la producción»: si una parte de la ganancia proviene de la fertilidad natural, gravarla no debería afectar las decisiones de siembra.",
      "Y en un país con restricción externa recurrente, un instrumento que recauda con baja evasión y contiene el precio de los alimentos no se descarta sin ofrecer un reemplazo concreto.",
    ],
    reply: [
      "El punto sobre la renta de la tierra es teóricamente sólido: un impuesto a la renta pura no distorsiona. El problema es que las retenciones **no gravan la renta sino el valor de la exportación**, es decir, la facturación bruta. Golpean igual al productor de alta rentabilidad y al marginal, y a este último lo pueden sacar de producción.",
      "Un impuesto a la renta de la tierra propiamente dicho —sobre el valor del inmueble rural, independientemente de lo que se produzca— tendría el efecto que el argumento describe sin desalentar la producción. Es una propuesta que varios economistas, incluidos liberales, consideran superior.",
      "Sobre el reemplazo: la respuesta liberal habitual es que el problema no se resuelve buscando un impuesto sustituto sino reduciendo el gasto que obliga a recaudar tanto.",
    ],
    open: [
      "Si un impuesto inmobiliario rural es políticamente viable en un país federal donde ese tributo es provincial.",
      "Cuánto de la menor producción se debe a retenciones y cuánto a otros factores (clima, tipo de cambio, costos logísticos).",
      "Cómo asistir en el acceso a alimentos sin distorsionar precios relativos.",
    ],
    relatedArticles: ["impuestos", "division-del-trabajo", "tipo-de-cambio", "deficit-fiscal"],
  },
  {
    id: "dolarizacion",
    claim: "Argentina debería dolarizar.",
    meaning:
      "Adoptar el dólar como moneda de curso legal, eliminando el peso y la capacidad del Banco Central de emitir. Es una discusión abierta **dentro** del liberalismo, no entre liberales y sus críticos.",
    level: "avanzado",
    topics: ["moneda", "argentina"],
    inFavor: [
      "**Elimina la tentación.** Si no se puede emitir, no se puede financiar el déficit con emisión. Resuelve por diseño un problema que las reglas no lograron resolver en décadas.",
      "**Credibilidad inmediata.** No requiere que nadie crea en el compromiso del gobierno: la restricción es física, no una promesa.",
      "**Precedentes.** Ecuador, El Salvador y Panamá operan con dólar y tienen inflación baja y estable.",
      "**Reconoce lo que ya pasa.** Buena parte de los argentinos ya ahorra, fija precios de inmuebles y calcula en dólares. La dolarización formalizaría una dolarización de hecho.",
    ],
    liberalResponse: [
      "Conviene aclarar que acá no hay una «posición liberal»: hay liberales a favor y en contra, con argumentos serios de ambos lados.",
      "**A favor**, el argumento es el de arriba, y su fuerza está en el diagnóstico institucional: si el problema es que ningún gobierno resiste la tentación de emitir, hay que eliminar el instrumento.",
      "**En contra**, varios liberales objetan que la dolarización **no resuelve el déficit fiscal**: sólo cierra una de las vías de financiarlo. Si el déficit persiste sin emisión posible, se financia con deuda hasta que no haya crédito, y ahí la crisis toma otra forma.",
      "También señalan que se pierde el prestamista de última instancia y la capacidad de absorber shocks externos con el tipo de cambio, que es exactamente lo que rompió la convertibilidad en 2001.",
    ],
    counter: [
      "El caso de la convertibilidad es el contraargumento más fuerte: fue un régimen con reglas duras y credibilidad, y terminó en la peor crisis de la historia argentina reciente. La dolarización es más rígida todavía.",
      "Además, dolarizar requiere dólares para rescatar los pesos en circulación, y un país sin reservas ni crédito no los tiene. El tipo de cambio al que se haga la conversión determina quién gana y quién pierde.",
    ],
    reply: [
      "Los partidarios responden que la dolarización es **más** robusta que la convertibilidad justamente por ser irreversible: la convertibilidad se rompió porque se podía romper, y el mercado lo sabía, lo que mantuvo alta la tasa de interés hasta el final.",
      "Sobre la disponibilidad de dólares, el debate técnico es real y gira en torno a qué agregado monetario debe rescatarse y a qué tipo de cambio. Distintas propuestas dan números muy diferentes.",
      "El punto de acuerdo entre ambos bandos liberales: **sin equilibrio fiscal, ningún régimen monetario funciona**. La discusión es si la dolarización ayuda a conseguirlo o si presupone haberlo conseguido.",
    ],
    open: [
      "A qué tipo de cambio se haría la conversión y quién absorbe la pérdida patrimonial.",
      "Cómo manejar shocks externos sin política cambiaria ni monetaria.",
      "Si la irreversibilidad es una ventaja (credibilidad) o un riesgo (rigidez).",
      "Alternativas intermedias: competencia de monedas, banca libre, o un banco central con reglas constitucionales.",
    ],
    relatedArticles: ["banco-central", "dinero", "inflacion", "ciclos-inflacionarios-argentinos", "corrientes-del-liberalismo"],
  },
];

export const DEBATES_BY_ID: Record<string, Debate> = Object.fromEntries(
  DEBATES.map((d) => [d.id, d]),
);

// ---------------------------------------------------------------------------
// FAQ — preguntas difíciles
// ---------------------------------------------------------------------------

export type Faq = {
  id: string;
  question: string;
  /** Respuesta corta, dos o tres frases. */
  short: string;
  /** Desarrollo. */
  long: string[];
  /** Lo que esta respuesta NO resuelve. Obligatorio: evita la cámara de eco. */
  caveat?: string;
  relatedArticles: string[];
  topics: string[];
};

export const FAQS: Faq[] = [
  {
    id: "quien-construye-las-rutas",
    question: "¿Quién construye las rutas?",
    short:
      "Hoy las construyen empresas privadas contratadas por el Estado: la discusión no es quién las construye sino quién las paga y quién decide cuáles se hacen.",
    long: [
      "La pregunta suele plantearse como si el Estado fabricara asfalto. En la práctica el Estado licita y una empresa privada construye. Lo que aporta el Estado es el financiamiento y la decisión sobre qué obra se hace.",
      "Existen modelos de financiamiento distintos que ya funcionan: peajes (paga el que usa), concesiones por plazo determinado, y financiamiento con impuestos generales. Cada uno reparte el costo de manera diferente.",
      "La objeción liberal al modelo puramente estatal no es que las rutas no deban existir, sino que la decisión sobre qué obra se hace tiende a responder a lógicas políticas más que a la demanda real, y que el costo se diluye entre contribuyentes que quizás nunca usen esa ruta.",
      "El caso difícil es el de caminos rurales de baja circulación, donde el peaje no cubre el costo. Ahí incluso liberales clásicos aceptan financiamiento general, con el argumento de que la conectividad genera beneficios que exceden a los usuarios directos.",
    ],
    caveat:
      "No resuelve cómo evitar que una concesión privada se convierta en un monopolio con tarifas renegociadas discrecionalmente, que fue exactamente lo que se criticó de la experiencia argentina.",
    relatedArticles: ["estado", "gasto-publico", "competencia"],
    topics: ["infraestructura", "bienes públicos"],
  },
  {
    id: "quien-cuida-a-los-que-no-pueden",
    question: "¿Qué pasa con quienes no pueden pagar la salud?",
    short:
      "La mayoría de las corrientes liberales acepta que alguien debe cubrirlos; el desacuerdo es sobre el mecanismo, no sobre el objetivo.",
    long: [
      "Salvo el anarcocapitalismo, prácticamente todas las corrientes liberales aceptan alguna forma de cobertura para quien no puede pagarla.",
      "Las alternativas que se discuten dentro del liberalismo: seguro obligatorio con subsidio a la prima para quien no llega; financiamiento público con provisión en competencia; o provisión estatal directa.",
      "El argumento liberal contra la provisión estatal monopólica no es que la salud deba ser un privilegio, sino que un sistema sin competencia ni retroalimentación tiende a asignar mal los recursos, con listas de espera y calidad desigual que golpean primero a quien no tiene alternativa.",
      "Argentina tiene de hecho un sistema mixto —público, obras sociales y privado— cuya fragmentación produce cobertura muy desigual. Esa fragmentación es objeto de crítica desde posiciones muy distintas.",
    ],
    caveat:
      "La salud tiene características —información muy asimétrica, demanda inelástica, urgencia— que la hacen uno de los mercados donde el modelo competitivo simple funciona peor. Ningún país resolvió esto de manera plenamente satisfactoria.",
    relatedArticles: ["estado", "por-que-hay-pobres-si-el-mercado-funciona", "competencia"],
    topics: ["salud", "estado"],
  },
  {
    id: "que-pasa-con-los-ninos",
    question: "¿Qué pasa con los chicos?",
    short:
      "Es una de las pocas excepciones donde casi todo el liberalismo acepta intervención: el consentimiento, que es la base de toda la construcción liberal, no aplica a menores.",
    long: [
      "El liberalismo se construye sobre decisiones voluntarias de adultos. Un menor no puede consentir de manera informada ni evaluar las consecuencias de largo plazo de no ser educado o atendido.",
      "Por eso casi todas las corrientes aceptan que existan obligaciones de escolarización, protección frente a maltrato y cobertura de salud para menores. Friedman lo argumenta explícitamente al defender el financiamiento público de la educación.",
      "El desacuerdo interno es sobre quién decide: los padres, el Estado o el propio menor a medida que crece. La posición liberal más común da prioridad a los padres, con el Estado como límite ante daño concreto.",
      "El caso difícil son las decisiones parentales que un tercero considera dañinas pero que no constituyen maltrato: educación religiosa, rechazo de tratamientos, elección de escuela.",
    ],
    caveat:
      "Dónde está el límite entre autonomía familiar y protección del menor es una discusión genuinamente abierta, y las respuestas liberales varían bastante.",
    relatedArticles: ["educacion-y-liberalismo", "libertad", "estado"],
    topics: ["familia", "educación"],
  },
  {
    id: "por-que-no-imprimir",
    question: "¿Por qué no imprimir dinero y repartirlo?",
    short:
      "Porque imprimir billetes no fabrica bienes. Con el doble de dinero y los mismos productos, los precios se duplican y nadie queda mejor, salvo quien recibe el dinero primero.",
    long: [
      "Si en un pueblo hay 100 panes y 100 pesos, cada pan vale 1 peso. Con 200 pesos y los mismos 100 panes, cada pan vale 2. Nadie ganó capacidad de compra.",
      "Excepto uno: quien recibió el dinero nuevo primero y lo gastó antes de que los precios subieran. Es el efecto Cantillon, y explica por qué la emisión redistribuye desde los últimos en recibir —sueldos, jubilaciones— hacia los primeros.",
      "El caso de Estados Unidos y Europa después de 2008 se cita como contraejemplo, pero se explica por dos factores: la demanda de dinero aumentó fuertemente en la crisis, y el dólar tiene demanda mundial. Además sí hubo inflación con rezago, en 2021-2023.",
      "En un país con historial inflacionario la demanda de dinero es frágil: apenas se percibe aceleración, la gente reduce sus tenencias, y hace falta emitir cada vez más para obtener lo mismo.",
    ],
    relatedArticles: ["emision-monetaria", "inflacion", "dinero"],
    topics: ["moneda", "inflación"],
  },
  {
    id: "por-que-no-controlar-precios",
    question: "¿Por qué no controlar los precios?",
    short:
      "Porque el precio no es la causa del problema sino su señal. Fijarlo por decreto no crea más producto: hace que aparezcan faltantes, caiga la calidad o surja un mercado paralelo.",
    long: [
      "Un precio alto le dice dos cosas a la vez: al comprador, que ese bien es escaso; al productor, que conviene producir más. Si se lo fija por debajo, ambos mensajes desaparecen.",
      "La consecuencia es predecible: al precio tope la gente quiere comprar más y los productores quieren vender menos. La diferencia es el faltante. El racionamiento no desaparece: pasa a hacerse por cola, por discrecionalidad o por mercado informal.",
      "En Argentina el patrón se repitió en distintos episodios: desaceleración inicial de los rubros controlados, luego faltantes, reducción del tamaño de los envases y salida de productos de las góndolas.",
      "Además, los controles no atacan la causa de la inflación argentina, que la mayoría de los diagnósticos ubica en el desequilibrio fiscal y monetario.",
    ],
    caveat:
      "Existe un debate sobre si controles temporales pueden servir para coordinar expectativas dentro de un programa de estabilización creíble. La experiencia argentina con planes heterodoxos admite lecturas distintas.",
    relatedArticles: ["oferta-y-demanda", "inflacion", "escasez-e-incentivos"],
    topics: ["precios", "regulación"],
  },
  {
    id: "el-capitalismo-explota",
    question: "¿El capitalismo explota a los trabajadores?",
    short:
      "La versión clásica del argumento se apoya en la teoría del valor-trabajo, que la economía moderna abandonó. Pero hay una versión más fuerte que no depende de ella y que sí describe un problema real.",
    long: [
      "El argumento marxista sostiene que el trabajador produce más valor del que recibe y que la diferencia se la apropia el dueño. Se apoya en que el valor de un bien deriva del trabajo incorporado, tesis superada por la revolución marginalista de 1870: un producto hecho con mucho trabajo que nadie quiere vale cero.",
      "En el marco actual, el salario tiende a acercarse a lo que el trabajador agrega al producto, y la diferencia remunera capital y riesgo, incluido el riesgo de perder.",
      "La versión fuerte de la objeción no necesita a Marx: **cuando el trabajador tiene pocas alternativas, su poder de negociación es bajo y el salario puede quedar por debajo de su aporte**. Es el monopsonio, y es economía estándar.",
      "La respuesta liberal a esa versión es aumentar las alternativas: más competencia por trabajadores, menos costo de contratar formalmente, más movilidad y más productividad.",
    ],
    caveat:
      "Que el mecanismo del monopsonio exista no dice cuán extendido está. Su magnitud es una pregunta empírica que se responde mercado por mercado, no con teoría.",
    relatedArticles: ["capitalismo", "mercado", "por-que-hay-pobres-si-el-mercado-funciona"],
    topics: ["trabajo", "capitalismo"],
  },
  {
    id: "por-que-paises-ricos-y-pobres",
    question: "¿Por qué algunos países son ricos y otros pobres?",
    short:
      "La explicación más aceptada hoy apunta a las instituciones: reglas que premian producir en lugar de capturar rentas. No es un consenso cerrado.",
    long: [
      "El ejemplo más limpio es Corea del Norte y Corea del Sur: misma gente, misma geografía, mismos recursos, resultados opuestos. Lo único distinto son las reglas desde 1948.",
      "La tesis institucional distingue entre instituciones inclusivas —propiedad segura, entrada libre, ley pareja— y extractivas, donde el éxito depende de acceder al poder. Acemoglu, Johnson y Robinson recibieron el Nobel en 2024 por este programa de investigación.",
      "Hay explicaciones alternativas serias: geografía y enfermedades (Diamond, Sachs), cultura, acumulación de capital humano, y acceso a energía. Ninguna se descartó definitivamente.",
      "El contraejemplo más citado es China, que creció enormemente sin instituciones inclusivas en el sentido de la teoría. La respuesta de los autores —que ese crecimiento no es sostenible sin innovación— es una predicción, no una observación.",
    ],
    caveat:
      "La tesis institucional recibió una crítica metodológica seria: definir «instituciones inclusivas» como las que producen desarrollo y luego explicar el desarrollo por ellas es circular. El debate econométrico sigue abierto.",
    relatedArticles: ["instituciones", "capitalismo", "liberalismo-en-argentina"],
    topics: ["desarrollo", "instituciones"],
  },
  {
    id: "que-pasa-con-los-monopolios",
    question: "¿Qué pasa con los monopolios?",
    short:
      "Los liberales distinguen entre monopolios sostenidos por leyes y monopolios que surgen por eficiencia o escala. Sobre los primeros hay acuerdo; sobre los segundos, no.",
    long: [
      "Un monopolio legal —una licencia exclusiva, un arancel prohibitivo, un cupo— sólo se elimina derogando la norma que lo crea. Todos los liberales coinciden en que hay que hacerlo.",
      "Un monopolio de hecho está permanentemente amenazado por la entrada de alguien con una idea mejor. Kodak, Blockbuster y Nokia dominaron sus mercados y desaparecieron sin intervención antimonopólica.",
      "El caso genuinamente difícil es el monopolio natural: no tiene sentido tender dos redes de cloacas. Ahí muchos liberales clásicos aceptan regulación, y se discute el mecanismo: tarifas reguladas, licitación por el derecho a operar, o separación entre red y servicio.",
      "Sobre las grandes tecnológicas, el liberalismo está genuinamente dividido. Una posición sostiene que esos mercados siguen siendo disputables; otra acepta que los efectos de red generan poder duradero.",
    ],
    relatedArticles: ["competencia", "mercado", "como-piensa-un-liberal-la-tecnologia"],
    topics: ["competencia", "regulación"],
  },
  {
    id: "por-que-pagar-impuestos",
    question: "¿Por qué habría que pagar impuestos?",
    short:
      "Depende de a qué liberal le preguntes. Para el liberalismo clásico son el precio de las instituciones que hacen posible el mercado; para el libertarismo rothbardiano son coerción injustificada.",
    long: [
      "El argumento del liberalismo clásico: sin justicia, policía y cumplimiento de contratos no hay propiedad segura ni mercado posible. Financiar esas funciones no viola la propiedad, la hace posible.",
      "La objeción libertaria: el consentimiento es la base de toda obligación legítima, y nadie consintió individualmente pagar. Rothbard sostiene que no hay diferencia moral relevante con el robo.",
      "Hay una posición intermedia frecuente: aceptar el impuesto como legítimo pero someterlo a límites estrictos —principio de legalidad, no confiscatoriedad, proporcionalidad respecto del gasto justificado.",
      "En Argentina esto tiene anclaje constitucional: el artículo 17 establece que sólo el Congreso impone las contribuciones del artículo 4, lo que fundamenta la objeción liberal a la inflación como forma de financiamiento sin ley.",
    ],
    relatedArticles: ["impuestos", "estado", "corrientes-del-liberalismo"],
    topics: ["impuestos", "filosofía"],
  },
  {
    id: "que-pasa-con-los-jubilados",
    question: "¿Qué pasa con los jubilados?",
    short:
      "Es uno de los problemas más difíciles, porque cualquier reforma afecta a personas que ya no pueden rehacer su decisión de ahorro. Ningún liberal serio propone soluciones rápidas acá.",
    long: [
      "Los sistemas de reparto pagan las jubilaciones actuales con los aportes de los trabajadores actuales. Funcionan mientras la relación entre aportantes y beneficiarios se mantenga; se tensionan cuando cae la natalidad, sube la expectativa de vida o aumenta la informalidad.",
      "Los sistemas de capitalización acumulan ahorro individual. Su objeción principal es que exponen al ahorrista al riesgo de mercado y al riesgo de que un gobierno se apropie de los fondos, algo que ocurrió en varios países, incluida Argentina en 2008.",
      "El argumento liberal habitual es de sostenibilidad: un sistema que promete más de lo que puede pagar no protege a nadie, y termina ajustando por la vía menos transparente, que es la licuación por inflación.",
      "En Argentina hay un problema adicional: una proporción alta de los beneficiarios accedió por moratorias sin haber completado aportes, lo que hace que el sistema cumpla a la vez una función previsional y una función asistencial, sin distinguirlas ni financiarlas por separado.",
    ],
    caveat:
      "Las transiciones entre sistemas previsionales tienen un costo fiscal enorme —hay que pagar a los jubilados actuales mientras los aportes van a cuentas individuales— que las propuestas suelen subestimar.",
    relatedArticles: ["gasto-publico", "deficit-fiscal", "inflacion", "responsabilidad-individual"],
    topics: ["jubilaciones", "argentina"],
  },
  {
    id: "si-una-empresa-abusa",
    question: "¿Qué pasa si una empresa abusa de los consumidores?",
    short:
      "El liberalismo no sostiene que las empresas se porten bien: sostiene que la competencia y la responsabilidad legal las obligan a hacerlo. Cuando ninguna de las dos funciona, el problema es real.",
    long: [
      "El fraude y el incumplimiento de contrato son delitos, y hacerlos cumplir es una función estatal que todos los liberales aceptan. No hay «mercado libre» sin justicia que funcione.",
      "Ante un abuso que no es fraude —mala atención, precios altos, calidad baja— el mecanismo liberal es la salida: irse a otro proveedor. Eso requiere que exista otro, y ahí está el problema real: la mayoría de los abusos duraderos ocurren donde no hay alternativa.",
      "Por eso el foco liberal está en las barreras de entrada más que en la conducta de la empresa: sancionar el abuso sin permitir competidores trata el síntoma.",
      "Sobre defensa del consumidor, hay desacuerdo interno. El liberalismo clásico acepta regulaciones de información y responsabilidad por producto; el libertarismo prefiere resolverlo por contrato y responsabilidad civil.",
    ],
    relatedArticles: ["competencia", "mercado", "estado-de-derecho"],
    topics: ["consumidores", "competencia"],
  },
];

export const FAQS_BY_ID: Record<string, Faq> = Object.fromEntries(
  FAQS.map((f) => [f.id, f]),
);
