/**
 * Diccionario A–Z.
 *
 * Cada entrada es corta por diseño: una o dos frases. Si el término tiene un
 * artículo completo, `article` lo enlaza y la UI muestra "Ver explicación
 * completa". Los términos se referencian desde el texto con {{sintaxis}}.
 */
export type GlossaryTerm = {
  id: string;
  term: string;
  /** Variantes con las que el lector puede buscarlo. */
  aliases?: string[];
  definition: string;
  /** Slug del artículo que lo desarrolla, si existe. */
  article?: string;
  topics?: string[];
};

export const GLOSSARY: GlossaryTerm[] = [
  { id: "agencia", term: "Agencia", definition: "Capacidad de una persona de actuar y decidir por sí misma, en lugar de que las cosas simplemente le ocurran." },
  { id: "ahorro", term: "Ahorro", definition: "Parte del ingreso que no se consume. Es la fuente de la que sale la inversión: sin ahorro no hay capital nuevo.", article: "capitalismo" },
  { id: "amparo", term: "Amparo", definition: "Acción judicial rápida contra actos que lesionan derechos constitucionales. Incorporada al artículo 43 de la Constitución en 1994.", article: "estado-de-derecho" },
  { id: "anarcocapitalismo", term: "Anarcocapitalismo", aliases: ["ancap"], definition: "Corriente que sostiene que todos los servicios, incluidas justicia y seguridad, pueden proveerse en competencia sin Estado.", article: "corrientes-del-liberalismo" },
  { id: "arancel", term: "Arancel", definition: "Impuesto sobre las importaciones. Protege al productor local a costa de un precio más alto para el consumidor.", article: "division-del-trabajo" },
  { id: "atraso-cambiario", term: "Atraso cambiario", definition: "Situación en que el tipo de cambio nominal se mantiene mientras los precios internos suben, encareciendo al país en dólares.", article: "tipo-de-cambio" },
  { id: "autonomia", term: "Autonomía", definition: "Capacidad de darse a uno mismo las reglas de la propia vida. Es el valor que el liberalismo pone en el centro.", article: "libertad" },
  { id: "banco-central", term: "Banco Central", aliases: ["bcra"], definition: "Institución que emite la moneda, fija la tasa de referencia, regula a los bancos y administra las reservas.", article: "banco-central" },
  { id: "barrera-de-entrada", term: "Barrera de entrada", definition: "Cualquier obstáculo que impide que aparezcan nuevos competidores. Puede ser económica o legal; las legales son las que más duran.", article: "competencia" },
  { id: "base-monetaria", term: "Base monetaria", definition: "Billetes y monedas en circulación más los depósitos de los bancos en el banco central. Es lo que se expande al emitir.", article: "emision-monetaria" },
  { id: "bases", term: "Bases", definition: "Obra de Alberdi de 1852 que influyó directamente sobre la Constitución de 1853.", article: "alberdi" },
  { id: "bien-publico", term: "Bien público", definition: "En sentido técnico: bien no rival y no excluible, como la defensa nacional. Salud y educación NO lo son.", article: "estado" },
  { id: "brecha-cambiaria", term: "Brecha cambiaria", definition: "Diferencia porcentual entre el tipo de cambio oficial y los paralelos. Indicador de tensión cambiaria.", article: "cepo-cambiario" },
  { id: "capacidades", term: "Capacidades", definition: "Enfoque de Amartya Sen: medir el desarrollo por las libertades reales que una persona tiene para elegir su vida.", article: "por-que-hay-pobres-si-el-mercado-funciona" },
  { id: "capital", term: "Capital", definition: "Bienes que sirven para producir otros bienes: máquinas, herramientas, galpones, software. No es sinónimo de dinero.", article: "capitalismo" },
  { id: "capital-humano", term: "Capital humano", definition: "Conocimientos, habilidades y salud incorporados en las personas, que determinan cuánto pueden producir.", article: "educacion-y-liberalismo" },
  { id: "capitalismo-de-amigos", term: "Capitalismo de amigos", aliases: ["crony capitalism", "capitalismo prebendario"], definition: "Sistema donde el éxito empresarial depende del favor político y no de la competencia. Es lo opuesto a un mercado abierto.", article: "mercado" },
  { id: "captura-del-regulador", term: "Captura del regulador", definition: "Fenómeno por el cual una regulación termina diseñada en beneficio de los regulados, por asimetría de incentivos.", article: "competencia" },
  { id: "cepo", term: "Cepo cambiario", aliases: ["control de cambios"], definition: "Conjunto de restricciones al acceso a moneda extranjera.", article: "cepo-cambiario" },
  { id: "clausula-lockeana", term: "Cláusula lockeana", definition: "Condición de Locke a la apropiación original: que quede suficiente y tan bueno para los demás.", article: "propiedad-privada" },
  { id: "coercion", term: "Coerción", definition: "Obligar a alguien mediante violencia o amenaza de violencia. Es lo que el liberalismo busca minimizar.", article: "libertad" },
  { id: "competencia", term: "Competencia", definition: "Proceso por el cual quienes venden algo deben mejorar su oferta porque el comprador puede irse a otro lado.", article: "competencia" },
  { id: "confiscatoriedad", term: "Confiscatoriedad", definition: "Doctrina de la Corte Suprema argentina: un impuesto puede ser inconstitucional si absorbe una parte sustancial de la renta o el capital.", article: "propiedad-privada" },
  { id: "constitucion", term: "Constitución", definition: "Norma suprema que organiza el poder y establece los derechos. La argentina se sancionó en 1853.", article: "constitucion-1853" },
  { id: "control-de-constitucionalidad", term: "Control de constitucionalidad", definition: "Facultad de los jueces de invalidar normas contrarias a la Constitución.", article: "estado-de-derecho" },
  { id: "convertibilidad", term: "Convertibilidad", definition: "Régimen vigente en Argentina entre 1991 y 2002: un peso igual a un dólar, con respaldo obligatorio en reservas.", article: "ciclos-inflacionarios-argentinos" },
  { id: "coparticipacion", term: "Coparticipación", definition: "Régimen de reparto de impuestos nacionales entre la Nación y las provincias.", article: "impuestos" },
  { id: "corralito", term: "Corralito", definition: "Nombre popular de la restricción a los retiros bancarios dispuesta en diciembre de 2001.", article: "ciclos-inflacionarios-argentinos" },
  { id: "correlacion-causalidad", term: "Correlación y causalidad", definition: "Que dos cosas se muevan juntas no prueba que una cause la otra. Es el error estadístico más frecuente.", article: "como-debatir" },
  { id: "correspondencia-fiscal", term: "Correspondencia fiscal", definition: "Que quien decide un gasto sea quien asume el costo político de cobrar el impuesto que lo financia.", article: "instituciones" },
  { id: "costo-de-oportunidad", term: "Costo de oportunidad", definition: "El valor de la mejor alternativa que se descarta al tomar una decisión. El costo real de cualquier cosa.", article: "escasez-e-incentivos" },
  { id: "curva-de-laffer", term: "Curva de Laffer", definition: "Relación no lineal entre alícuota y recaudación: con 0% y con 100% no se recauda nada. Dónde está el máximo es una pregunta empírica.", article: "impuestos" },
  { id: "curso-legal", term: "Curso legal", definition: "Condición de una moneda que la ley obliga a aceptar para cancelar deudas. Sostiene su uso, no su valor.", article: "dinero" },
  { id: "debido-proceso", term: "Debido proceso", definition: "Garantía de ser oído, defenderse y obtener una decisión fundada antes de ser sancionado. Artículo 18 de la Constitución.", article: "estado-de-derecho" },
  { id: "default", term: "Default", definition: "Cesación de pagos de una deuda. Argentina lo declaró sobre gran parte de su deuda soberana en diciembre de 2001.", article: "deuda-publica" },
  { id: "deficit-cuasifiscal", term: "Déficit cuasifiscal", definition: "Déficit generado por el banco central al pagar intereses de sus propios pasivos remunerados.", article: "emision-monetaria" },
  { id: "deficit-fiscal", term: "Déficit fiscal", definition: "Diferencia negativa entre lo que el Estado recauda y lo que gasta.", article: "deficit-fiscal" },
  { id: "demanda", term: "Demanda", definition: "Cantidad que los compradores quieren adquirir a cada precio posible.", article: "oferta-y-demanda" },
  { id: "democracia-liberal", term: "Democracia liberal", definition: "Sistema que combina decisión mayoritaria con límites que la mayoría no puede traspasar.", article: "democracia-y-liberalismo" },
  { id: "deuda-publica", term: "Deuda pública", definition: "Conjunto de obligaciones financieras del Estado con acreedores internos y externos.", article: "deuda-publica" },
  { id: "dificultad-contramayoritaria", term: "Dificultad contramayoritaria", definition: "Problema de legitimidad que plantea que jueces no electos invaliden decisiones de representantes electos.", article: "democracia-y-liberalismo" },
  { id: "dinero", term: "Dinero", definition: "Medio de intercambio, unidad de cuenta y reserva de valor generalmente aceptado.", article: "dinero" },
  { id: "discrecionalidad", term: "Discrecionalidad", definition: "Margen de decisión caso por caso de un funcionario. Cuanto mayor, más espacio para el privilegio.", article: "igualdad-ante-la-ley" },
  { id: "dnu", term: "Decreto de necesidad y urgencia", aliases: ["dnu"], definition: "Norma dictada por el Ejecutivo con rango de ley. Excepcional según el artículo 99 inciso 3; vedada en materia penal, tributaria, electoral y de partidos.", article: "estado-de-derecho" },
  { id: "efecto-cantillon", term: "Efecto Cantillon", definition: "El dinero nuevo no llega a todos a la vez: quien lo recibe primero compra a precios viejos y gana a costa de quien lo recibe último.", article: "emision-monetaria" },
  { id: "efecto-cascada", term: "Efecto cascada", definition: "Acumulación de un impuesto que se cobra en cada etapa de la cadena productiva, como Ingresos Brutos.", article: "impuestos" },
  { id: "efecto-de-red", term: "Efecto de red", definition: "Propiedad por la cual un servicio vale más cuanta más gente lo usa. Genera tendencia a la concentración.", article: "como-piensa-un-liberal-la-tecnologia" },
  { id: "elasticidad", term: "Elasticidad", definition: "Cuánto cambia la cantidad ante un cambio de precio. Determina quién termina pagando un impuesto.", article: "oferta-y-demanda" },
  { id: "eleccion-publica", term: "Elección pública", aliases: ["public choice"], definition: "Escuela que aplica el análisis de incentivos a políticos, burócratas y votantes, no sólo a empresas y consumidores.", article: "escasez-e-incentivos" },
  { id: "emision", term: "Emisión monetaria", definition: "Creación de dinero nuevo por parte del banco central.", article: "emision-monetaria" },
  { id: "encaje", term: "Encaje", definition: "Porcentaje de los depósitos que los bancos deben mantener inmovilizado.", article: "banco-central" },
  { id: "escasez", term: "Escasez", definition: "Que los recursos sean limitados respecto de los usos posibles. No es sinónimo de pobreza: existe en cualquier sociedad.", article: "escasez-e-incentivos" },
  { id: "estado", term: "Estado", definition: "Organización con el monopolio del uso legítimo de la fuerza dentro de un territorio.", article: "estado" },
  { id: "estado-de-derecho", term: "Estado de derecho", definition: "Sistema en el que el poder político también está sometido a la ley, no sólo los ciudadanos.", article: "estado-de-derecho" },
  { id: "expropiacion", term: "Expropiación", definition: "Privación de la propiedad por el Estado. En Argentina exige ley, utilidad pública e indemnización previa.", article: "propiedad-privada" },
  { id: "externalidad", term: "Externalidad", definition: "Efecto de una actividad sobre terceros que no participaron de ella, positivo o negativo, y que el precio no refleja.", article: "mercado" },
  { id: "falacia", term: "Falacia", definition: "Razonamiento que parece válido pero no lo es.", article: "como-debatir" },
  { id: "falacia-del-nirvana", term: "Falacia del nirvana", definition: "Comparar una opción real con una ideal en lugar de con la otra opción real disponible.", article: "como-debatir" },
  { id: "faltante", term: "Faltante", definition: "Exceso de demanda sobre oferta que aparece cuando un precio se fija por debajo del de mercado.", article: "oferta-y-demanda" },
  { id: "federalismo", term: "Federalismo", definition: "Distribución territorial del poder. En Argentina las provincias conservan todo lo no delegado (artículo 121).", article: "estado" },
  { id: "free-rider", term: "Free rider", aliases: ["polizón"], definition: "Quien se beneficia de un bien sin pagarlo, porque no se lo puede excluir. Es el argumento central para la provisión pública de bienes públicos.", article: "estado" },
  { id: "fuero", term: "Fuero", definition: "Privilegio jurisdiccional. La Constitución argentina prohíbe los fueros personales en su artículo 16.", article: "igualdad-ante-la-ley" },
  { id: "gasto-primario", term: "Gasto primario", definition: "Gasto público excluyendo los intereses de la deuda.", article: "gasto-publico" },
  { id: "gasto-rigido", term: "Gasto rígido", definition: "Partidas comprometidas por leyes previas que no pueden reducirse sin cambiar la ley.", article: "gasto-publico" },
  { id: "generacion-del-37", term: "Generación del 37", definition: "Grupo intelectual argentino —Echeverría, Alberdi, Sarmiento, Gutiérrez— que buscó adaptar el liberalismo europeo a las condiciones locales.", article: "liberalismo-en-argentina" },
  { id: "hiperinflacion", term: "Hiperinflación", definition: "Inflación extremadamente alta y acelerada, con colapso de la demanda de dinero. Argentina la vivió en 1989-1990.", article: "inflacion" },
  { id: "igualdad-ante-la-ley", term: "Igualdad ante la ley", definition: "Mismas reglas para todos, sin privilegios por nacimiento, cargo o cercanía al poder. Artículo 16 de la Constitución.", article: "igualdad-ante-la-ley" },
  { id: "ignorancia-racional", term: "Ignorancia racional", definition: "Es racional no informarse en profundidad sobre política, porque el costo es alto y un voto individual no cambia el resultado.", article: "democracia-y-liberalismo" },
  { id: "impuesto", term: "Impuesto", definition: "Pago obligatorio al Estado, sin contraprestación directa, establecido por ley.", article: "impuestos" },
  { id: "impuesto-negativo", term: "Impuesto negativo a la renta", definition: "Propuesta de Friedman: quien gana por debajo de un umbral recibe una transferencia en lugar de pagar.", article: "por-que-hay-pobres-si-el-mercado-funciona" },
  { id: "incentivo", term: "Incentivo", definition: "Cualquier cosa que cambie el costo o el beneficio de una conducta. Para predecir el efecto de una norma, mirá incentivos y no intenciones.", article: "escasez-e-incentivos" },
  { id: "incidencia-tributaria", term: "Incidencia tributaria", definition: "Quién soporta realmente la carga de un impuesto, que no es necesariamente quien lo ingresa al fisco.", article: "impuestos" },
  { id: "inconsistencia-temporal", term: "Inconsistencia temporal", definition: "Problema por el cual a un gobierno le conviene prometer una cosa y hacer otra después. Justifica atar las manos con reglas.", article: "banco-central" },
  { id: "indexacion", term: "Indexación", definition: "Ajuste automático de precios, salarios o contratos según un índice. Protege del efecto de la inflación y a la vez la vuelve más inercial.", article: "inflacion" },
  { id: "indec", term: "INDEC", definition: "Instituto Nacional de Estadística y Censos. Produce el IPC, la EPH y las cuentas nacionales.", article: "inflacion" },
  { id: "inflacion", term: "Inflación", definition: "Aumento sostenido y generalizado del nivel general de precios. Visto al revés: caída del poder de compra del dinero.", article: "inflacion" },
  { id: "informalidad", term: "Informalidad", definition: "Actividad económica fuera del registro legal y tributario. Deja al trabajador sin protección y sin acceso al crédito.", article: "por-que-hay-pobres-si-el-mercado-funciona" },
  { id: "institucion", term: "Institución", definition: "Las reglas del juego de una sociedad: formales, informales y sus mecanismos de cumplimiento.", article: "instituciones" },
  { id: "instituciones-extractivas", term: "Instituciones extractivas", definition: "Reglas donde el éxito depende de acceder al poder en lugar de producir valor.", article: "instituciones" },
  { id: "interoperabilidad", term: "Interoperabilidad", definition: "Que servicios distintos puedan funcionar entre sí. Propuesta para reducir barreras en mercados digitales sin fijar precios.", article: "como-piensa-un-liberal-la-tecnologia" },
  { id: "ipc", term: "IPC", definition: "Índice de Precios al Consumidor: mide la variación del costo de una canasta representativa de bienes y servicios.", article: "inflacion" },
  { id: "isi", term: "Sustitución de importaciones", aliases: ["isi"], definition: "Estrategia de producir localmente lo que antes se importaba, protegida por aranceles y cupos.", article: "division-del-trabajo" },
  { id: "liberalismo", term: "Liberalismo", definition: "Tradición que sostiene que cada persona es dueña de su vida y que por eso el poder debe estar limitado.", article: "que-es-el-liberalismo" },
  { id: "libertad-negativa", term: "Libertad negativa", definition: "Ausencia de interferencia de otras personas. Es el sentido que el liberalismo prioriza.", article: "libertad" },
  { id: "libertad-positiva", term: "Libertad positiva", definition: "Capacidad efectiva de realizar los propios planes, que depende de recursos y oportunidades.", article: "libertad" },
  { id: "libertarismo", term: "Libertarismo", definition: "Familia de corrientes que busca maximizar la libertad individual y minimizar el Estado, en lo económico y en lo civil.", article: "corrientes-del-liberalismo" },
  { id: "mercado", term: "Mercado", definition: "Conjunto de intercambios voluntarios entre personas. No es un lugar ni una entidad con voluntad propia.", article: "mercado" },
  { id: "merito", term: "Mérito", definition: "Idea de que las recompensas deben corresponder al esfuerzo o al talento. Hayek negaba que el mercado remunere el mérito moral.", article: "responsabilidad-individual" },
  { id: "minarquismo", term: "Minarquismo", definition: "Posición que limita el Estado legítimo a justicia, seguridad y defensa.", article: "corrientes-del-liberalismo" },
  { id: "modelo-agroexportador", term: "Modelo agroexportador", definition: "Esquema económico argentino de aproximadamente 1880 a 1930, basado en exportar productos primarios e importar manufacturas y capital.", article: "liberalismo-en-argentina" },
  { id: "monopolio", term: "Monopolio", definition: "Único oferente en un mercado. Los más duraderos suelen ser los sostenidos por normas legales.", article: "competencia" },
  { id: "monopolio-de-la-fuerza", term: "Monopolio de la fuerza", definition: "Característica definitoria del Estado: es el único que puede usar la coacción de manera reconocida como legítima.", article: "estado" },
  { id: "monopsonio", term: "Monopsonio", definition: "Mercado con un único comprador. En el mercado laboral, reduce el poder de negociación del trabajador.", article: "capitalismo" },
  { id: "neoliberalismo", term: "Neoliberalismo", definition: "Término con dos usos: una corriente intelectual de mediados del siglo XX, y una categoría polémica usada por críticos de políticas de mercado.", article: "corrientes-del-liberalismo" },
  { id: "oferta", term: "Oferta", definition: "Cantidad que los vendedores quieren vender a cada precio posible.", article: "oferta-y-demanda" },
  { id: "ordoliberalismo", term: "Ordoliberalismo", definition: "Corriente alemana que sostiene que la competencia no se sostiene sola y que el Estado debe defenderla activamente.", article: "corrientes-del-liberalismo" },
  { id: "pass-through", term: "Pass-through", definition: "Proporción de una devaluación que se traslada a los precios internos. En Argentina es alto y rápido.", article: "tipo-de-cambio" },
  { id: "pasivos-remunerados", term: "Pasivos remunerados", definition: "Instrumentos con los que el banco central absorbe pesos pagando interés. Ese interés se paga emitiendo.", article: "emision-monetaria" },
  { id: "paternalismo", term: "Paternalismo", definition: "Decidir por alguien «por su propio bien». El liberalismo lo rechaza para adultos que no dañan a terceros.", article: "responsabilidad-individual" },
  { id: "pecado-original", term: "Pecado original", definition: "Incapacidad de un país de endeudarse en su propia moneda a largo plazo.", article: "deuda-publica" },
  { id: "plusvalia", term: "Plusvalía", definition: "En la teoría marxista, diferencia entre el valor producido por el trabajador y su salario. Se apoya en la teoría del valor-trabajo, abandonada por la economía moderna.", article: "capitalismo" },
  { id: "pobreza", term: "Pobreza", definition: "Insuficiencia de recursos para cubrir necesidades básicas. En Argentina se mide oficialmente por ingresos, mediante la EPH del INDEC.", article: "por-que-hay-pobres-si-el-mercado-funciona" },
  { id: "poder-de-compra", term: "Poder de compra", definition: "Cantidad de bienes y servicios que se pueden adquirir con una unidad de dinero.", article: "dinero" },
  { id: "precio-maximo", term: "Precio máximo", definition: "Tope legal a un precio. Si está por debajo del de mercado, produce faltantes.", article: "oferta-y-demanda" },
  { id: "precios", term: "Precios", definition: "Información condensada sobre escasez relativa. Coordinan a millones de personas que no se conocen entre sí.", article: "oferta-y-demanda" },
  { id: "presion-tributaria", term: "Presión tributaria", definition: "Recaudación total como porcentaje del PIB. Comparar siempre aclarando si incluye seguridad social y los tres niveles de gobierno.", article: "impuestos" },
  { id: "prestamista-de-ultima-instancia", term: "Prestamista de última instancia", definition: "Función del banco central de asistir a bancos solventes ante una corrida. Genera riesgo moral.", article: "banco-central" },
  { id: "presupuesto", term: "Presupuesto", definition: "Ley que autoriza los gastos y estima los recursos del Estado para un ejercicio.", article: "gasto-publico" },
  { id: "principio-de-no-agresion", term: "Principio de no agresión", definition: "Axioma libertario: es ilegítimo iniciar el uso de la fuerza contra personas o su propiedad.", article: "corrientes-del-liberalismo" },
  { id: "principio-del-dano", term: "Principio del daño", definition: "Criterio de Mill: el único motivo legítimo para interferir con la libertad de alguien es evitar un daño a terceros.", article: "libertad" },
  { id: "principio-precautorio", term: "Principio precautorio", definition: "Regla de actuar ante un riesgo grave sin esperar certeza. Los liberales objetan que ignora los costos de no actuar.", article: "como-piensa-un-liberal-la-tecnologia" },
  { id: "privilegio", term: "Privilegio", definition: "Ventaja legal otorgada a una persona o grupo. Es lo opuesto a la igualdad ante la ley.", article: "igualdad-ante-la-ley" },
  { id: "productividad", term: "Productividad", definition: "Cuánto valor se produce por unidad de trabajo. Determina el nivel de salarios sostenible.", article: "capitalismo" },
  { id: "propiedad", term: "Propiedad privada", definition: "Haz de derechos sobre una cosa: usarla, obtener sus frutos y disponer de ella.", article: "propiedad-privada" },
  { id: "razonabilidad", term: "Razonabilidad", definition: "Doctrina constitucional argentina: una reglamentación de derechos es válida si hay proporción entre medio y fin, e inválida si desnaturaliza el derecho.", article: "constitucion-1853" },
  { id: "reestructuracion", term: "Reestructuración", definition: "Canje de deuda vieja por nueva, con quitas de capital, de intereses o extensión de plazos.", article: "deuda-publica" },
  { id: "rent-seeking", term: "Búsqueda de rentas", aliases: ["rent-seeking", "rentismo"], definition: "Esfuerzo dedicado a obtener una transferencia en lugar de a producir valor: aranceles, licencias, subsidios.", article: "instituciones" },
  { id: "reservas", term: "Reservas internacionales", definition: "Activos en moneda extranjera y oro que mantiene el banco central.", article: "tipo-de-cambio" },
  { id: "restriccion-externa", term: "Restricción externa", definition: "Tesis según la cual el crecimiento argentino choca sistemáticamente contra la falta de divisas.", article: "ciclos-inflacionarios-argentinos" },
  { id: "resultado-primario", term: "Resultado primario", definition: "Ingresos menos gasto primario, es decir sin contar los intereses de la deuda.", article: "deficit-fiscal" },
  { id: "riesgo-moral", term: "Riesgo moral", definition: "Tomar más riesgo del que se tomaría porque otro asume las consecuencias.", article: "responsabilidad-individual" },
  { id: "riesgo-pais", term: "Riesgo país", definition: "Sobreprecio de tasa que exigen los acreedores respecto de un bono considerado libre de riesgo.", article: "deuda-publica" },
  { id: "seguridad-juridica", term: "Seguridad jurídica", definition: "Previsibilidad de las reglas. Condición de la inversión de largo plazo.", article: "estado-de-derecho" },
  { id: "senoreaje", term: "Señoreaje", definition: "Ingreso real que obtiene quien emite dinero, por la diferencia entre su poder de compra y su costo de producción.", article: "emision-monetaria" },
  { id: "sesgo-de-seleccion", term: "Sesgo de selección", definition: "Error de sacar conclusiones de una muestra que no representa al total.", article: "como-debatir" },
  { id: "sociedad-civil", term: "Sociedad civil", definition: "Entramado de asociaciones voluntarias —clubes, iglesias, cooperativas, fundaciones— que no son ni Estado ni mercado.", article: "cultura-liberal" },
  { id: "sostenibilidad", term: "Sostenibilidad fiscal", definition: "Condición en la que la deuda no crece indefinidamente respecto del producto.", article: "deficit-fiscal" },
  { id: "steelman", term: "Steelman", definition: "Reconstruir el argumento del otro en su versión más fuerte antes de responderlo. Lo opuesto al hombre de paja.", article: "como-debatir" },
  { id: "subfacturacion", term: "Subfacturación", definition: "Declarar un valor menor al real en una exportación, práctica que incentivan los controles cambiarios.", article: "cepo-cambiario" },
  { id: "subsidiariedad", term: "Subsidiariedad", definition: "Principio según el cual las decisiones deben tomarse en el nivel más cercano posible a los afectados.", article: "estado" },
  { id: "subsidio", term: "Subsidio", definition: "Transferencia estatal que reduce el precio pagado por el usuario respecto del costo de producción.", article: "gasto-publico" },
  { id: "tipo-de-cambio", term: "Tipo de cambio", definition: "Precio de una moneda en términos de otra.", article: "tipo-de-cambio" },
  { id: "tirania-de-la-mayoria", term: "Tiranía de la mayoría", definition: "Riesgo de que una mayoría suprima derechos de una minoría por vía democrática.", article: "democracia-y-liberalismo" },
  { id: "tolerancia", term: "Tolerancia", definition: "Aceptar la existencia de algo con lo que se está en desacuerdo. Si algo da igual, no se lo está tolerando.", article: "cultura-liberal" },
  { id: "trade-off", term: "Trade-off", definition: "Intercambio: para obtener más de algo hay que resignar algo de otra cosa. No existen soluciones sin costo.", article: "escasez-e-incentivos" },
  { id: "tragedia-de-los-comunes", term: "Tragedia de los comunes", definition: "Sobreexplotación de un recurso de acceso abierto. Ostrom mostró que hay soluciones comunitarias además de la privatización y la estatización.", article: "propiedad-privada" },
  { id: "trilema", term: "Trilema de Mundell-Fleming", definition: "No se pueden tener a la vez tipo de cambio fijo, libre movimiento de capitales y política monetaria autónoma.", article: "tipo-de-cambio" },
  { id: "ventaja-comparativa", term: "Ventaja comparativa", definition: "Producir algo con menor costo de oportunidad que otro. Explica por qué conviene comerciar aun siendo peor en todo.", article: "division-del-trabajo" },
  { id: "voucher", term: "Voucher educativo", definition: "Propuesta de que el financiamiento estatal siga al alumno y la familia elija la escuela.", article: "educacion-y-liberalismo" },
];

export const GLOSSARY_BY_ID: Record<string, GlossaryTerm> = Object.fromEntries(
  GLOSSARY.map((t) => [t.id, t]),
);

/** Índice por término y alias normalizados, para resolver {{sintaxis}}. */
export function normalizeTerm(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const LOOKUP: Record<string, GlossaryTerm> = {};
for (const t of GLOSSARY) {
  LOOKUP[t.id] = t;
  LOOKUP[normalizeTerm(t.term)] = t;
  for (const a of t.aliases ?? []) LOOKUP[normalizeTerm(a)] = t;
}

export function findTerm(raw: string): GlossaryTerm | undefined {
  return LOOKUP[normalizeTerm(raw)];
}

export const GLOSSARY_LETTERS = Array.from(
  new Set(GLOSSARY.map((t) => t.term[0].toUpperCase())),
).sort();
