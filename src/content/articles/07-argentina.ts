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

export const argentina: Article[] = [
  {
    slug: "liberalismo-en-argentina",
    title: "El liberalismo en Argentina: historia de una idea",
    question: "¿Qué significa ser liberal en Argentina? ¿Cuál es su historia?",
    summary:
      "Doscientos años en los que la palabra «liberal» nombró proyectos muy distintos entre sí. Entender esa historia es la única forma de saber de qué se está hablando hoy.",
    category: "argentina",
    level: "intermedio",
    topics: ["historia argentina", "liberalismo"],
    tags: ["historia", "argentina", "ruta-inicial", "nivel-10"],
    updated: "2026-08-15",
    status: "publicado",

    simple: [
      p(
        "En Argentina, «liberal» no quiso decir siempre lo mismo. Si no se sabe eso, las discusiones se vuelven imposibles: dos personas pueden estar usando la misma palabra para cosas opuestas.",
      ),
      p("A grandes rasgos, la palabra pasó por cinco etapas:"),
      steps(
        {
          title: "1810–1880: liberalismo fundacional",
          text: "Independencia, organización nacional, Constitución de 1853. Acá «liberal» significa república, derechos individuales, apertura al comercio e inmigración. Es el momento de [[alberdi]].",
        },
        {
          title: "1880–1930: el orden conservador",
          text: "Economía muy abierta y crecimiento fuerte, pero sistema político restringido. Liberalismo económico sin plena democracia.",
        },
        {
          title: "1930–1983: el liberalismo desplazado",
          text: "Predominan la intervención estatal y el proteccionismo. En este período «liberal» pasa a asociarse, para buena parte de la sociedad, con sectores que apoyaron interrupciones del orden constitucional.",
        },
        {
          title: "1983–2001: la etapa de las reformas",
          text: "Retorno democrático, hiperinflación, convertibilidad, privatizaciones y apertura. Terminó en la crisis de 2001, que dejó a la palabra «liberal» fuertemente desprestigiada.",
        },
        {
          title: "2001–hoy: la reaparición",
          text: "Casi dos décadas de marginalidad seguidas de un crecimiento acelerado del liberalismo y del libertarismo entre los jóvenes.",
        },
      ),
    ],

    technical: [
      h("1810–1852: la generación fundacional"),
      p(
        "La Revolución de Mayo de 1810 y la independencia de 1816 se apoyaron en ideas de soberanía popular y derechos individuales que circulaban desde la Ilustración. Pero durante cuatro décadas el país no logró darse una organización estable: guerras civiles entre unitarios y federales, y ausencia de una constitución vigente para todo el territorio.",
      ),
      p(
        "La **Generación del 37** —Esteban Echeverría, Juan Bautista Alberdi, Domingo F. Sarmiento, Juan María Gutiérrez— intentó una síntesis: tomar el liberalismo europeo y adaptarlo a las condiciones locales, en lugar de copiarlo. Alberdi fue el más explícito sobre este punto.",
      ),
      h("1853–1880: la organización nacional"),
      p(
        "Tras la batalla de Caseros (1852), el Congreso Constituyente reunido en Santa Fe sancionó la **Constitución el 1º de mayo de 1853**, con influencia directa de las *Bases* de Alberdi, publicadas el año anterior.",
      ),
      p(
        "Buenos Aires se mantuvo separada de la Confederación hasta 1859–1860. La reforma de 1860 permitió su incorporación. Tras Pavón (1861), Bartolomé Mitre asumió la presidencia en 1862 e inició el ciclo de presidencias que consolidó el Estado nacional: Mitre, Sarmiento y Avellaneda.",
      ),
      p(
        "Se construyó en ese período la infraestructura institucional: códigos, sistema educativo (Ley 1420 de educación común y gratuita, 1884), moneda nacional, ferrocarriles, y la política inmigratoria.",
      ),
      h("1880–1930: crecimiento con política restringida"),
      p(
        "El período del modelo agroexportador produjo un crecimiento económico excepcional. Argentina recibió una de las mayores oleadas inmigratorias del mundo en relación con su población, y se integró intensamente al comercio internacional.",
      ),
      callout(
        "ojo",
        "La tensión central de este período",
        "Fue económicamente liberal y políticamente restrictivo: el sufragio era limitado y fraudulento hasta la Ley Sáenz Peña de 1912. Presentar la etapa como un ideal liberal completo omite justamente lo que el liberalismo político exige. Es la crítica interna más fuerte que un liberal puede hacerle a su propia tradición argentina.",
      ),
      h("1930–1983: el eclipse"),
      p(
        "El golpe del 6 de septiembre de 1930 abrió medio siglo de inestabilidad institucional: seis golpes de Estado exitosos entre 1930 y 1976. En materia económica se consolidó un modelo de fuerte intervención estatal, sustitución de importaciones y regulación del comercio exterior, que fue continuado en lo esencial por gobiernos de muy distinto signo.",
      ),
      p(
        "En este período la etiqueta «liberal» quedó asociada, en la percepción pública, a sectores que respaldaron gobiernos de facto. La gestión económica del gobierno militar iniciado en 1976 se presentó a sí misma como liberalizadora, aunque su política concreta —tipo de cambio administrado, endeudamiento externo, estatización de deuda privada, subsidios sectoriales— es discutida incluso entre economistas liberales.",
      ),
      callout(
        "debate",
        "Un punto que este sitio no esquiva",
        "Que un gobierno se declare liberal no lo hace liberal. Y a la inversa: que sectores liberales hayan apoyado gobiernos autoritarios es un hecho histórico que no se resuelve diciendo «no eran verdaderos liberales». Un liberalismo intelectualmente honesto tiene que hacerse cargo de esa parte de su historia argentina, porque el principio central de la tradición —el poder debe estar limitado— fue exactamente lo que se abandonó.",
      ),
      h("1983–2001: democracia y reformas"),
      p(
        "El retorno democrático en 1983 coincidió con una crisis económica severa: deuda externa, inflación alta y luego hiperinflación en 1989. Los años 90 trajeron la convertibilidad, privatizaciones masivas, apertura comercial y desregulación.",
      ),
      compare(
        {
          title: "Lecturas de los años 90 — versión favorable",
          items: [
            "Terminó con la hiperinflación durante una década.",
            "Modernizó servicios que funcionaban mal bajo gestión estatal.",
            "Integró la economía al comercio internacional.",
            "Estabilizó la moneda y permitió recuperar el crédito.",
          ],
        },
        {
          title: "Lecturas de los años 90 — versión crítica",
          items: [
            "Varias privatizaciones se hicieron sin marcos regulatorios ni competencia previa.",
            "El tipo de cambio fijo generó atraso cambiario y destrucción de sectores productivos.",
            "El desempleo alcanzó niveles inéditos.",
            "El déficit fiscal persistió, financiado con deuda, hasta hacerse insostenible.",
          ],
        },
      ),
      p(
        "Muchos liberales argentinos sostienen hoy que aquello **no fue un programa liberal completo** sino una combinación de apertura con déficit fiscal, tipo de cambio rígido y privatizaciones que sustituyeron monopolios estatales por monopolios privados regulados discrecionalmente. Es un argumento con base concreta, pero conviene sostenerlo con evidencia y no como cláusula de escape.",
      ),
      h("2001–hoy"),
      p(
        "La crisis de 2001 dejó al ideario liberal con muy escaso apoyo social. Durante casi dos décadas su presencia electoral fue marginal.",
      ),
      p(
        "Desde mediados de la década de 2010 se produjo un crecimiento acelerado del liberalismo y sobre todo del {{libertarismo}}, particularmente entre personas jóvenes, con fuerte difusión por redes sociales y contenidos audiovisuales. Ese proceso culminó con la elección presidencial de 2023, en la que resultó electo Javier Milei, que asumió el 10 de diciembre de 2023.",
      ),
      callout(
        "ojo",
        "Sobre el período actual",
        "Este sitio no evalúa gestiones de gobierno en curso. La distancia temporal necesaria para un análisis histórico no existe todavía, y confundir análisis con adhesión es exactamente lo que estos artículos intentan evitar. Para datos económicos actuales, ver [[argentina-en-datos|Argentina en datos]] con sus fuentes oficiales.",
      ),
    ],

    liberalArgument: [
      p(
        "La lectura liberal más común de esta historia se resume en una paradoja: **Argentina tiene una Constitución liberal y una práctica que la contradijo durante largos períodos**.",
      ),
      p(
        "El diagnóstico habitual señala que el país abandonó progresivamente el diseño alberdiano —apertura, propiedad segura, límites al poder, moneda estable— y que su declive relativo acompañó ese abandono. Ver [[instituciones]].",
      ),
      callout(
        "opinion",
        "Esto es interpretación",
        "La correlación entre abandono del modelo y declive es un hecho temporal. La causalidad es una interpretación fundada pero discutida: hubo shocks externos, cambios en la economía mundial y decisiones puntuales que también pesaron.",
      ),
    ],

    critiques: [
      {
        objection:
          "El modelo liberal argentino del 1880–1930 fue socialmente excluyente: concentración de la tierra, sufragio restringido, represión de la protesta obrera. Idealizarlo es hacer historia selectiva.",
        response: [
          p(
            "Los hechos señalados son correctos y están documentados. La concentración de la propiedad rural, el fraude electoral sistemático hasta 1912 y episodios de represión violenta son parte del período.",
          ),
          p(
            "La respuesta liberal honesta no niega esto: señala que ese orden **no cumplía** con el liberalismo político que la propia tradición exige. El liberalismo pide igualdad ante la ley y límites al poder, no un modelo económico abierto con exclusión política.",
          ),
          p(
            "Alberdi mismo era consciente de la tensión: en las *Bases* propuso deliberadamente ampliar las libertades civiles antes que las políticas, apostando a que la prosperidad y la inmigración generarían las condiciones para lo segundo. Esa apuesta es discutible y fue discutida en su época.",
          ),
        ],
        unresolved: true,
      },
      {
        objection:
          "Cada vez que las políticas liberales fracasaron en Argentina, se dice que «no eran verdaderamente liberales». Eso vuelve la teoría infalsificable.",
        response: [
          p(
            "Es una crítica metodológica válida y hay que tomarla en serio, porque el argumento se usa con frecuencia de manera abusiva.",
          ),
          p(
            "La versión defendible exige especificar en concreto qué elemento faltó y por qué era decisivo: por ejemplo, señalar que en los años 90 el déficit fiscal nunca se eliminó y que privatizar sin competencia no produce los efectos que la teoría predice para mercados abiertos. Eso es verificable.",
          ),
          p(
            "La versión indefendible es afirmarlo sin especificar nada. Si cualquier resultado adverso se explica siempre por impureza doctrinaria, la teoría dejó de decir algo sobre el mundo.",
          ),
        ],
        unresolved: true,
      },
    ],

    uncertainty:
      "La historia económica argentina es objeto de un debate historiográfico intenso y sin resolución. Los hechos —crecimiento hasta 1930, declive relativo posterior, recurrencia de crisis— son sólidos. Las explicaciones causales son disputadas entre escuelas.",

    keyIdeas: [
      "«Liberal» nombró proyectos muy distintos en distintos momentos de la historia argentina.",
      "El período 1880–1930 fue económicamente abierto y políticamente restringido: no era liberalismo completo.",
      "El apoyo de sectores liberales a gobiernos de facto es un hecho que la tradición debe asumir.",
      "El argumento «no era verdadero liberalismo» sólo vale si se especifica qué faltó y por qué importaba.",
    ],
    related: ["alberdi", "constitucion-1853", "ciclos-inflacionarios-argentinos", "instituciones", "corrientes-del-liberalismo"],
    glossary: ["generacion-del-37", "modelo-agroexportador", "isi", "convertibilidad", "libertarismo"],
    sources: ["alberdi-bases", "cn-argentina", "sarmiento-facundo", "ley-saenz-pena", "ley-23928", "ley-25561", "acemoglu-robinson"],
    furtherReading: [
      {
        title: "Bases y puntos de partida para la organización política de la República Argentina",
        author: "Juan Bautista Alberdi",
        why: "El documento fundacional. Se lee mejor de lo que su título sugiere.",
        sourceId: "alberdi-bases",
        level: "intermedio",
      },
    ],
  },

  {
    slug: "constitucion-1853",
    title: "La Constitución de 1853 explicada",
    question: "¿Qué dice la Constitución argentina sobre libertad, propiedad y límites al poder?",
    summary:
      "Un texto explícitamente liberal, escrito para un país que quería poblarse y crecer. Conocer sus artículos centrales cambia la calidad de cualquier discusión política argentina.",
    category: "constitucion",
    level: "inicial",
    topics: ["constitución", "derecho", "historia argentina"],
    tags: ["constitución", "derechos", "argentina", "alberdi"],
    updated: "2026-08-15",
    status: "publicado",

    simple: [
      p(
        "La Constitución es el contrato que dice qué puede y qué no puede hacer el Estado. Todo lo demás —leyes, decretos, resoluciones— tiene que respetarla, y si no la respeta, un juez puede anularlo.",
      ),
      p(
        "La argentina se sancionó el **1º de mayo de 1853** y sigue vigente, con reformas (1860, 1866, 1898, 1957 y 1994). Fue escrita con una influencia muy directa de [[alberdi|Juan Bautista Alberdi]].",
      ),
      p("Si tuvieras que leer sólo cinco artículos, serían estos:"),
      ul(
        "**Artículo 14** — la lista de tus derechos: trabajar, comerciar, transitar, publicar ideas sin censura previa, usar tu propiedad, asociarte, profesar tu culto, enseñar y aprender.",
        "**Artículo 16** — todos iguales ante la ley. Sin títulos de nobleza ni fueros personales.",
        "**Artículo 17** — la propiedad es inviolable.",
        "**Artículo 19** — lo que no daña a terceros no es asunto del Estado.",
        "**Artículo 28** — las leyes que reglamentan los derechos no pueden alterarlos.",
      ),
    ],

    technical: [
      h("Estructura"),
      ol(
        "**Preámbulo** — declara los fines: constituir la unión nacional, afianzar la justicia, consolidar la paz interior, proveer a la defensa común, promover el bienestar general y asegurar los beneficios de la libertad, «para todos los hombres del mundo que quieran habitar en el suelo argentino».",
        "**Primera parte (dogmática)** — declaraciones, derechos y garantías (artículos 1 a 43). Es la parte que limita al poder.",
        "**Segunda parte (orgánica)** — autoridades de la Nación: Legislativo, Ejecutivo, Judicial y gobiernos de provincia.",
      ),
      h("Los artículos que más importan para una lectura liberal"),
      p("**Artículo 14** enumera los derechos civiles. Su fórmula final es decisiva: los reconoce «conforme a las leyes que reglamenten su ejercicio». Es decir, admite reglamentación."),
      p("**Artículo 28** pone el límite a esa reglamentación:"),
      quote(
        "Los principios, garantías y derechos reconocidos en los anteriores artículos, no podrán ser alterados por las leyes que reglamenten su ejercicio.",
        "Constitución Nacional, artículo 28",
        "cn-argentina",
      ),
      p(
        "De la tensión entre ambos surgió la doctrina de la **razonabilidad**: una reglamentación es válida si hay proporción entre el medio elegido y el fin perseguido, e inválida si desnaturaliza el derecho. Es una de las herramientas centrales del derecho constitucional argentino.",
      ),
      p("**Artículo 17** protege la propiedad con tres requisitos acumulativos para expropiar: ley que declare la utilidad pública, calificación por esa ley e indemnización **previa**. Prohíbe además expresamente la confiscación."),
      p("**Artículo 19** consagra el principio de reserva y el de legalidad: lo que no daña a terceros queda fuera del alcance de la autoridad, y nadie está obligado a hacer lo que la ley no manda ni privado de lo que ella no prohíbe."),
      p("**Artículo 20** extiende a los extranjeros todos los derechos civiles del ciudadano, sin obligación de naturalizarse ni de pagar contribuciones forzosas extraordinarias. Es coherente con el proyecto inmigratorio del artículo 25."),
      p("**Artículo 29** prohíbe la concentración del poder incluso si el propio Congreso quisiera concederla, y califica de traición a la patria a quienes la formulen, consientan o firmen."),
      h("La organización del poder"),
      ul(
        "**División de poderes** en Legislativo, Ejecutivo y Judicial.",
        "**Federalismo**: las provincias conservan todo el poder no delegado (artículo 121) y se dan sus propias instituciones (artículo 122).",
        "**Artículo 75** enumera las atribuciones del Congreso: impuestos (incisos 1 y 2), comercio (inciso 13), códigos de fondo (inciso 12), y la llamada «cláusula del progreso» (inciso 18).",
        "**Artículo 76**: prohíbe la delegación legislativa, salvo en materias determinadas de administración o emergencia pública, con plazo y bases fijadas por el Congreso.",
        "**Artículo 99 inciso 3**: prohíbe al Ejecutivo emitir disposiciones legislativas, con la excepción acotada de los decretos de necesidad y urgencia, vedados en materia penal, tributaria, electoral y de partidos políticos.",
      ),
      h("Las reformas"),
      ul(
        "**1860** — permitió la incorporación de Buenos Aires. Incorporó, entre otros, el artículo 33 sobre derechos no enumerados.",
        "**1949** — reforma de contenido social, derogada en 1956 por proclama del gobierno de facto. Su validez es materia de debate jurídico e histórico.",
        "**1957** — convocada por un gobierno de facto, incorporó el **artículo 14 bis** con derechos del trabajador, de la seguridad social y de la familia. Su legitimidad de origen también fue discutida.",
        "**1994** — reforma extensa: reelección presidencial, jefe de Gabinete, Consejo de la Magistratura, autonomía de la Ciudad de Buenos Aires, acción de amparo (artículo 43), y jerarquía constitucional para tratados de derechos humanos (artículo 75 inciso 22).",
      ),
      callout(
        "debate",
        "El 14 bis y la lectura liberal",
        "El artículo 14 bis introdujo derechos sociales cuya relación con el diseño original de 1853 se discute. Para algunos liberales representa una incorporación de obligaciones prestacionales ajena al esquema de derechos negativos original. Para otros juristas, es compatible con él y responde a una evolución constitucional común a casi todas las democracias del siglo XX. Es una discusión jurídica genuina, no un punto resuelto.",
      ),
    ],

    argentina: [
      p(
        "Distinguir con precisión entre tres cosas es lo que separa un análisis constitucional serio de una discusión de redes:",
      ),
      compare(
        {
          title: "Qué dice el texto",
          items: [
            "Verificable leyendo el artículo.",
            "No admite mucha discusión.",
            "Siempre citar el número de artículo.",
          ],
        },
        {
          title: "Qué interpretó la Corte",
          items: [
            "Doctrina jurisprudencial construida en fallos concretos.",
            "Cambió a lo largo del tiempo.",
            "Se cita por el nombre del caso y el año.",
          ],
        },
      ),
      p(
        "Y la tercera: **qué opina uno sobre si eso está bien**. Es legítimo tener una posición, pero mezclarla con las dos anteriores confunde. Este es el criterio editorial de toda la sección Constitución de este sitio.",
      ),
    ],

    liberalArgument: [
      p(
        "Los liberales suelen leer la Constitución de 1853 como un programa de país y no sólo como un texto jurídico: el diseño combina libertades civiles amplias, propiedad segura, apertura al comercio y a la inmigración, y límites al poder.",
      ),
      p(
        "Alberdi lo explicó en el *Sistema económico y rentístico*, donde sostiene que la Constitución contiene una política económica implícita —producción, distribución y consumo de la riqueza— y que las leyes que la contradigan son inconstitucionales aunque estén formalmente sancionadas.",
      ),
      p(
        "El reclamo liberal argentino recurrente no es reformar la Constitución sino **cumplirla**: en particular los artículos 17 (propiedad), 28 (límite a la reglamentación) y las cláusulas sobre legalidad tributaria y emergencia.",
      ),
    ],

    critiques: [
      {
        objection:
          "La Constitución de 1853 fue escrita por y para una élite, con exclusión de los pueblos originarios y de la mayoría de la población. Su artículo 25 promovía específicamente la inmigración europea.",
        response: [
          p(
            "El artículo 25 en su redacción original efectivamente promueve la inmigración europea, y el texto de 1853 contenía además una cláusula sobre trato con los indios que fue eliminada en 1994. Son hechos, y forman parte del contexto de época.",
          ),
          p(
            "La reforma de 1994 incorporó el artículo 75 inciso 17, que reconoce la preexistencia étnica y cultural de los pueblos indígenas argentinos y la posesión y propiedad comunitarias de las tierras que tradicionalmente ocupan.",
          ),
          p(
            "La respuesta liberal habitual: los principios del texto —igualdad ante la ley, derechos para «todos los habitantes»— resultaron ser más universales que las intenciones de quienes los escribieron, y sirvieron después para ampliar derechos que sus autores no contemplaban. Eso no borra el contexto original.",
          ),
        ],
      },
    ],

    keyIdeas: [
      "Artículos clave para una lectura liberal: 14, 16, 17, 19, 28 y 29.",
      "El artículo 28 limita la reglamentación de los derechos; de ahí surge la doctrina de razonabilidad.",
      "Expropiar exige ley, utilidad pública e indemnización previa: los tres requisitos juntos.",
      "Distinguir siempre texto, interpretación judicial y opinión política.",
    ],
    related: ["alberdi", "propiedad-privada", "igualdad-ante-la-ley", "estado-de-derecho", "liberalismo-en-argentina"],
    glossary: ["constitucion", "razonabilidad", "expropiacion", "amparo", "dnu", "federalismo"],
    sources: ["cn-argentina", "alberdi-bases", "alberdi-sistema"],
    furtherReading: [
      {
        title: "Constitución de la Nación Argentina",
        why: "Son unas cuarenta páginas. Leerla completa una vez cambia la calidad de cualquier discusión política.",
        sourceId: "cn-argentina",
        level: "inicial",
      },
    ],
  },

  {
    slug: "ciclos-inflacionarios-argentinos",
    title: "Las crisis argentinas: una historia económica",
    question: "¿Por qué Argentina tiene crisis una y otra vez?",
    summary:
      "Un patrón que se repite con variantes desde hace décadas: déficit, financiamiento, atraso cambiario, crisis, estabilización parcial y vuelta a empezar. Entender el ciclo importa más que memorizar fechas.",
    category: "argentina",
    level: "intermedio",
    topics: ["historia argentina", "economía argentina"],
    tags: ["crisis", "inflación", "historia", "argentina"],
    updated: "2026-08-15",
    status: "publicado",

    simple: [
      p(
        "Argentina tuvo crisis económicas muy parecidas entre sí, con gobiernos de distinto signo político. Eso sugiere que el problema no es principalmente quién gobierna sino un mecanismo que se repite.",
      ),
      p("El patrón, muy simplificado:"),
      steps(
        { title: "1. Se gasta más de lo que se recauda", text: "Aparece el [[deficit-fiscal|déficit]]." },
        { title: "2. Se financia con deuda o emisión", text: "Ambas tienen límite." },
        { title: "3. Sube la inflación", text: "Y el tipo de cambio oficial queda atrasado respecto de los precios." },
        { title: "4. Faltan dólares", text: "Se restringe el acceso: aparece el [[cepo-cambiario|cepo]] y una brecha cambiaria." },
        { title: "5. La restricción se vuelve insostenible", text: "Devaluación fuerte, salto de precios, caída del salario real." },
        { title: "6. Estabilización parcial", text: "Baja la inflación un tiempo, pero el problema fiscal de fondo no se resuelve." },
        { title: "7. Vuelve a empezar", text: "Con otros nombres y otro gobierno." },
      ),
      callout(
        "ojo",
        "Advertencia sobre este esquema",
        "Es un modelo simplificado, útil para entender la lógica y no para reemplazar el análisis de cada episodio. Cada crisis tuvo además causas propias: shocks externos, sequías, crisis internacionales, decisiones políticas específicas.",
      ),
    ],

    technical: [
      h("Los episodios principales"),
      ul(
        "**1930.** La crisis internacional interrumpe el modelo agroexportador. Se abandona el patrón oro, aparecen controles de cambio y comienza el ciclo de intervención. En 1935 se crea el Banco Central.",
        "**1975 — «Rodrigazo».** Fuerte devaluación y aumento de tarifas y precios en junio de 1975 bajo el ministro Celestino Rodrigo. Suele identificarse como el punto en que la inflación argentina pasa a otro régimen, con tasas mensuales de dos dígitos.",
        "**1981–1982.** Crisis de deuda y devaluaciones sucesivas tras el esquema cambiario de la gestión económica iniciada en 1976.",
        "**1985 — Plan Austral.** Nueva moneda, congelamiento y compromiso de no emitir. Reduce la inflación fuertemente al comienzo; se erosiona al no corregirse el déficit.",
        "**1989–1990 — Hiperinflación.** El episodio extremo. Colapso de la demanda de dinero, saqueos, adelanto de la entrega del poder presidencial.",
        "**1991–2001 — Convertibilidad.** Ley 23.928: un peso igual a un dólar y respaldo obligatorio. Elimina la inflación durante una década.",
        "**2001–2002 — La crisis.** Restricción a los retiros bancarios («corralito») en diciembre de 2001, renuncia presidencial, default sobre gran parte de la deuda, y en enero de 2002 la Ley 25.561 termina con la convertibilidad. Devaluación y pesificación de contratos.",
        "**2011–2015 y 2019–2023 — Controles de cambio.** Restricciones al acceso a divisas, con brecha entre el tipo de cambio oficial y los paralelos.",
      ),
      h("Por qué la convertibilidad funcionó y por qué se rompió"),
      compare(
        {
          title: "Por qué funcionó",
          items: [
            "Eliminó la discrecionalidad para emitir: regla dura y verificable.",
            "Ancló las expectativas de manera creíble.",
            "Restableció el crédito y el cálculo de largo plazo.",
            "Permitió recuperar la unidad de cuenta perdida.",
          ],
        },
        {
          title: "Por qué se rompió",
          items: [
            "El déficit fiscal no se eliminó: se financió con deuda creciente.",
            "El tipo de cambio fijo quedó apreciado frente a shocks externos (crisis asiática de 1997, rusa de 1998, devaluación de Brasil en 1999).",
            "Sin poder devaluar, el ajuste recayó sobre precios y salarios, con recesión prolongada.",
            "La rigidez que daba credibilidad fue también lo que impidió absorber los shocks.",
          ],
        },
      ),
      callout(
        "debate",
        "La discusión sobre 2001 sigue abierta",
        "Hay tres lecturas con defensores serios: que el problema fue fiscal (se sostuvo un régimen rígido con déficit), que fue cambiario (la paridad quedó insostenible), o que fue una combinación con shocks externos determinantes. La ponderación entre ellas es materia de debate académico, no un punto resuelto.",
      ),
      h("El elemento común"),
      p(
        "Más allá de las diferencias, la mayoría de los diagnósticos identifica un hilo conductor: **un déficit fiscal persistente combinado con la ausencia de una fuente de financiamiento sostenible**. Cuando no hay crédito, se emite; cuando se emite, hay inflación; cuando hay inflación con tipo de cambio administrado, aparece el atraso cambiario y la escasez de divisas.",
      ),
      p(
        "El corolario que suelen extraer economistas de orientaciones distintas: los planes que atacaron los síntomas sin resolver el desequilibrio fiscal fracasaron, con independencia de su sofisticación técnica.",
      ),
    ],

    liberalArgument: [
      p(
        "La lectura liberal enfatiza que se trata de un problema **institucional** antes que técnico. El conocimiento económico necesario para evitar estas crisis existe hace décadas y es en buena medida compartido entre escuelas. Lo que faltó fueron restricciones efectivas al comportamiento fiscal.",
      ),
      p(
        "De ahí que las propuestas liberales apunten a reglas y no a mejores administradores: prohibición constitucional o legal de financiar el déficit con emisión, independencia real del banco central, reglas de gasto, transparencia presupuestaria y correspondencia fiscal entre quien gasta y quien cobra.",
      ),
    ],

    critiques: [
      {
        objection:
          "Explicar todo por el déficit fiscal es reduccionista. Argentina enfrentó shocks externos severos, restricción externa estructural y cambios en los términos de intercambio que ningún equilibrio fiscal habría evitado.",
        response: [
          p(
            "Los shocks externos son reales y explican el *timing* de varias crisis. Chile, Uruguay y Brasil enfrentaron shocks comparables con consecuencias muy distintas.",
          ),
          p(
            "La respuesta liberal es que la fragilidad es lo que convierte un shock en crisis: un país con superávit, reservas y crédito absorbe un shock; uno sin ninguna de las tres cosas, no. El shock es el disparador; la vulnerabilidad, la causa.",
          ),
          p(
            "Punto a conceder: la tesis de la restricción externa —que el crecimiento argentino choca sistemáticamente contra la falta de divisas— tiene sustento empírico y no se responde sólo con equilibrio fiscal.",
          ),
        ],
        unresolved: true,
      },
    ],

    uncertainty:
      "Las fechas y los hechos de cada episodio son verificables. La ponderación de causas es objeto de debate académico activo, particularmente respecto de 1976–1983, los años 90 y la crisis de 2001.",

    keyIdeas: [
      "El patrón se repitió con gobiernos de distinto signo: apunta a un mecanismo, no a un partido.",
      "El hilo conductor identificado por la mayoría de los diagnósticos es el déficit fiscal sin financiamiento sostenible.",
      "La convertibilidad funcionó por su rigidez y se rompió por la misma rigidez ante shocks.",
      "Los shocks externos disparan las crisis; la vulnerabilidad previa las hace posibles.",
    ],
    related: ["inflacion", "deficit-fiscal", "cepo-cambiario", "tipo-de-cambio", "deuda-publica", "liberalismo-en-argentina"],
    glossary: ["hiperinflacion", "convertibilidad", "corralito", "default", "atraso-cambiario", "restriccion-externa"],
    sources: ["indec-ipc", "bcra", "ley-23928", "ley-25561", "minecon", "fmi-weo", "fmi-censura-2013"],
    furtherReading: [
      {
        title: "Serie histórica del IPC",
        author: "INDEC",
        why: "Ver la serie completa con sus propios ojos vale más que cualquier resumen.",
        sourceId: "indec-ipc",
        level: "inicial",
      },
    ],
  },
];
