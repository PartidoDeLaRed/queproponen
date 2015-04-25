var propuestas = null
function CargarPropuestas()
{
propuestas = [

//Gustavo Lopez
Propuesta("Subtes", "Extensión del servicio, aumento de frecuencia, adquisición de nuevas formaciones, eficiencia y calidad de la infraestructura como política de estado. La eficiencia medida por la calidad del servicio y no por la rentabilidad. Creación de una tarifa social, para que todos puedan viajar.", temas.TRANSPORTE, 0, 2),
Propuesta("Metrobús", "Planificación, mejoramiento y extensión de una red integral de metrobús, con unidades aptas para el consumo de energías menos contaminantes o alternativas. Integración real con el subte.", temas.TRANSPORTE, 0, 2),
Propuesta("Transporte público", "Mejoramiento integral del servicio de transporte público para disminuir el uso del automóvil los días hábiles.", temas.TRANSPORTE, 0, 2),
Propuesta("Estacionamientos públicos", "Construcción de estacionamientos públicos de automóviles en los límites de mayor transferencia entre la Ciudad de Buenos Aires y la Provincia", temas.TRANSPORTE, 0, 2),
Propuesta("Túneles y puentes ferroviarios", "Extensión de las obras de túneles y puentes en las trazas de los diversos ramales de trenes disminuyendo demoras en el tránsito y accidentes.", temas.TRANSPORTE, 0, 2),
Propuesta("Soterramiento de todos los ferrocarriles en el ámbito de la ciudad", "", temas.TRANSPORTE, 0, 2),
Propuesta("Inscripción de alumnos/as en las escuelas", "Todo niños/jóvenes/adultos tiene derecho a recibir una educación. Por lo tanto, es obligación del estado proveer la suficiente cantidad de vacantes.", temas.EDUCACION, 0, 2),
Propuesta("Creación de escuelas, y vacantes", "Realizar en el sur de la ciudad, una planificación que tenga en cuenta las necesidades de vacantes en todos los niveles, para así, en función de ella, construir escuelas. En el caso del nivel inicial, se ha de ampliar la oferta en toda la ciudad para las secciones de maternal. Articular, en los distritos lindantes con la provincia de Buenos Aires, acciones pensando más en un territorio metropolitano común que en la separación entre capital y provincia.", temas.EDUCACION, 0, 2),
Propuesta("Mantenimiento de los edificios", "Se debe realizar un censo para determinar el estado de cada uno de los edificios en toda la ciudad. Rever los contratos, analizado costos y alcances.", temas.PLANEAMIENTO_URBANO, 0, 2),
Propuesta("Crear equipos interdisciplinarios para abordar las nuevas problemáticas de los alumnos/as y sus familias", "", temas.EDUCACION, 0, 2),
Propuesta("Equipos de Orientación Escolar", "Actualmente los Equipos de Orientación Escolar (EOE) se encuentran reducidos, no se reemplaza a los colegas jubilados, entre otras cuestiones.", temas.EDUCACION, 0, 2),
Propuesta("Escuela de Capacitación Docente Centro de Pedagogías de Anticipación", "Rever la Escuela de Capacitación Docente Centro de Pedagogías de Anticipación (Cepa), ya fue perdiendo su histórica autonomía y sus propuestas, siendo reemplazada en muchos aspectos por propuestas privadas (San Andrés, UCA).", temas.EDUCACION, 0, 2),
Propuesta("Posibilitar a los alumnos/as de las zonas más marginadas a que tengan acceso a micros gratuitos para acceder a museos, cines, teatros, etc", "", temas.EDUCACION, 0, 2),
Propuesta("Articulación de la tarea con las instancias de prevención de la salud. Aumento de servicios psicología, psicopedagogía, fonoaudiología, etc", "", temas.EDUCACION, 0, 2),
Propuesta("Congresos pedagógicos con y para los maestros", "", temas.EDUCACION, 0, 2),
Propuesta("Revisar la OBSBA y sus servicios, dado que los docentes no están en el directorio", "", temas.EDUCACION, 0, 2),
Propuesta("Ley de Educación de la Ciudad", "", temas.EDUCACION, 0, 2),
Propuesta("Recupero de cines y teatros para mantener la identidad del barrio y a la memoria viva de los vecinos", "", temas.SOCIEDAD, 0, 2),
Propuesta("Desarrollo de emprendimientos culturales que promuevan dicha identidad", "", temas.SOCIEDAD, 0, 2),
Propuesta("Trabajo conjunto con los colectivos artísticos que conforman la cultura viva comunitaria", "", temas.SOCIEDAD, 0, 2),
Propuesta("Recuperar el espacio público para el encuentro y el disfrute de las manifestaciones culturales", "", temas.SOCIEDAD, 0, 2),
Propuesta("Descentralización de la educación artística hacia las comunas", "", temas.EDUCACION, 0, 2),
Propuesta("Desarrollo y puesta en valor de los centros culturales y bibliotecas como espacio de formación artística e intercambio comunitario", "", temas.SOCIEDAD, 0, 2),
Propuesta("Promover la inclusión a través de la creación de Orquestas juveniles en todas las comunas, a través de un programa estatal centralizado", "", temas.SOCIEDAD, 0, 2),
Propuesta("Festivales y encuentros de teatro, música, libros, danza, artes visuales, artesanías y diseño, poniendo el acento en su difusión y en la generación de oportunidades laborales", "", temas.SOCIEDAD, 0, 2),
Propuesta("Promover la participación en la Ferias Nacionales e internacionales", "", temas.SOCIEDAD, 0, 2),
Propuesta("Difusión de las expresiones culturales de la ciudad, y creación de contenido en radio y tv pública", "", temas.SOCIEDAD, 0, 2),
Propuesta("Impulsar el debate profundo que permita la promulgación de la ley para la jubilación del artista", "", temas.SOCIEDAD, 0, 2),
Propuesta("Resguardo y protección del patrimonio barrial cultural tangible e intangible", "", temas.PLANEAMIENTO_URBANO, 0, 2),
Propuesta("Creación de espacios culturales en cada barrio", "", temas.SOCIEDAD, 0, 2),
Propuesta("Creación del instituto del teatro, la danza, la música y del libro de la Ciudad de Buenos Aires", "", temas.SOCIEDAD, 0, 2),
Propuesta("Creación de incubadoras de empresas culturales y de diseño, y del Centro de Atención al Productor Cultural", "", temas.SOCIEDAD, 0, 2),
Propuesta("Puesta en valor cultural del Teatro Colón y del complejo teatral de Buenos Aires", "", temas.SOCIEDAD, 0, 2),
Propuesta("Creación del Sistema Público de Medios de la Ciudad", "", temas.SOCIEDAD, 0, 2),
Propuesta("Promoción de los programas culturales vinculados a los derechos humanos: Buenos Aires x la Identidad", "", temas.SOCIEDAD, 0, 2),
Propuesta("Creación del hospital en la comuna 8", "", temas.SALUD, 0, 2),
Propuesta("Mejorar el servicio de los centros de salud y acción comunitaria", "", temas.SALUD, 0, 2),
Propuesta("Creación del laboratorio estatal de producción de medicamentos", "", temas.SALUD, 0, 2),
Propuesta("Aumento de controles de salud en la vía pública", "", temas.SALUD, 0, 2),
Propuesta("Mayor articulación de los sistemas de salud público, privado y de las obras sociales", "", temas.SALUD, 0, 2),
Propuesta("A-SAME GCABA", "Incorporar pulseras de colores como se implementa en otros países en la atención móvil de emergencia y catástrofes. Letreros luminosos que informen si van a base (hospital) o a un siniestro.", temas.SALUD, 0, 2),
Propuesta("Asesorar, y actuar para lograr minimizar riesgos legales para beneficio de todos los profesionales de la salud", "", temas.SALUD, 0, 2),
Propuesta("Control de Ayudas Médicas", "", temas.SALUD, 0, 2),
Propuesta("Facturación de prestaciones", "", temas.SALUD, 0, 2),
Propuesta("Promover la política de Parto respetado", "Actualmente existe una “epidemia de cesáreas”. Se deben analizar los posibles causales de la misma y actualizar el impacto del antecedente de cesárea en la morbilidad materna y neonatal, como así también recordar la Ley de Parto Respetado en la República Argentina Nº 25.929/04.", temas.SALUD, 0, 2),
Propuesta("Promover instancias de participación ciudadana para combatir el delito y la violencia", "", temas.SEGURIDAD, 0, 2),
Propuesta("Políticas integrales que contribuyan a mejorar la seguridad: más inversión en alumbrado público, instalación estratégica de cámaras de seguridad y políticas de inclusión social", "", temas.SEGURIDAD, 0, 2),
Propuesta("Mejoramiento de la coordinación entre las distintas fuerzas de seguridad que intervienen en el área metropolitana", "", temas.SEGURIDAD, 0, 2),
Propuesta("Políticas integrales que contribuyan a mejorar la seguridad: más inversión en alumbrado público, instalación estratégica de cámaras de seguridad y políticas de inclusión social", "", temas.SEGURIDAD, 0, 2),
Propuesta("Creación de cuerpos policiales especializados en:", "Delitos comunes, Prevención del delito (una policía de cercanía), Eventos masivos y espectáculos (artísticos, deportivos, etc.), Violencia Familiar y Delitos de Género y Mediación del Conflicto Social y Prevención de la Violencia", temas.SEGURIDAD, 0, 2),
Propuesta("QUEREMOS QUE TU VOZ SE OIGA", "Ampliaremos a toda la ciudad los Centros Nacionales de Orientación al Ciudadano (CENOACs), difundiendo su funcionamiento mediante campañas informativas que le den poder a la ciudadanía. Promoviendo su participación en materia de propuestas y fiscalización civil.", temas.SEGURIDAD, 0, 2),
Propuesta("Revalorización de los centros comerciales a cielo abierto", "", temas.ECONOMIA, 0, 2),
Propuesta("Generación de circuitos culturales, deportivos y/o turísticos en cada barrio", "", temas.PLANEAMIENTO_URBANO, 0, 2),
Propuesta("Generar políticas de estado que tengan como objetivo consolidar a Buenos Aires como destino nacional e internacional", "", temas.ECONOMIA, 0, 2),
Propuesta("Incentivos económicos y reducción de tributos para consolidar nuevas empresas productivas", "", temas.ECONOMIA, 0, 2),
Propuesta("Creación de un centro de la innovación para promover la actividad productiva y tecnológica", "", temas.ECONOMIA, 0, 2),
Propuesta("Apoyo a emprendedores y micro-emprendedores en el acceso al crédito, en la comercialización y en la asistencia técnica para su desarrollo", "", temas.ECONOMIA, 0, 2),
Propuesta("Fomento del cooperativismo y de las empresas familiares", "", temas.ECONOMIA, 0, 2),
Propuesta("Reorientación del perfil del Banco Ciudad en función de promover el crédito a las principales ramas industriales, de innovación productiva y comercial que posee la ciudad", "", temas.ECONOMIA, 0, 2),
Propuesta("Creación de un régimen con beneficios adicionales para la generación de nuevos empleos", "", temas.ECONOMIA, 0, 2),
Propuesta("Apoyo a las pequeñas y medianas empresas de la Ciudad, entendiéndolas como las principales generadoras de empleo", "", temas.ECONOMIA, 0, 2),
Propuesta("Reducción de impuestos a comercios y a PyMES que certifiquen la totalidad de sus trabajadores registrados", "", temas.ECONOMIA, 0, 2),
Propuesta("Creación de polos tecnológicos en zona sur de: diseño, biotecnología y desarrollo de software, entre otros", "", temas.ECONOMIA, 0, 2),
Propuesta("Promover la economía social y solidaria: microcréditos productivos, cooperativismo, monotributo social, talleres familiares y fomento al emprendedor", "", temas.ECONOMIA, 0, 2),
Propuesta("Recuperación del Riachuelo", "Recuperación integral de la Cuenca del Riachuelo, mediante el reimpulso de la navegabilidad, promoviendo su desarrollo ambiental, productivo, fluvial, cultural y habitacional de forma sustentable.", temas.MEDIO_AMBIENTE, 0, 2),
Propuesta("Recuperar los espacios verdes que hoy se encuentran enrejados y sin mantenimiento", "", temas.MEDIO_AMBIENTE, 0, 2),
Propuesta("Refuncionalización de parques, plazas, plazoletas y bulevares en beneficio de una mayor cantidad de espacios verdes, y disminuir la contaminación visual y sonora", "", temas.MEDIO_AMBIENTE, 0, 2),
Propuesta("Recuperación de los espacios linderos al río de la plata ampliando la costanera y generando espacios verdes de recreación y para usos culturales", "", temas.MEDIO_AMBIENTE, 0, 2),
Propuesta("Fomentar la actividad cultural y la participación vecinal en los espacios verdes", "", temas.MEDIO_AMBIENTE, 0, 2),
Propuesta("Mejoramiento en la recolección de residuos y en la limpieza de veredas, calles, desagües y contenedores en la vía pública de todos los barrios", "", temas.MEDIO_AMBIENTE, 0, 2),
Propuesta("Plantas procesadoras", "Instalación de plantas de tratamiento, clasificación y reciclaje de los residuos, promoviendo la articulación desde el estado con las cooperativas de trabajadores cartoneros, reconociéndolos como actores fundamentales en el proceso.", temas.MEDIO_AMBIENTE, 0, 2),
Propuesta("Cumplimiento de la Ley de Basura Cero", "", temas.MEDIO_AMBIENTE, 0, 2),
Propuesta("Urbanización de villas", "Urbanización de todas las villas de la Ciudad e integración al tejido urbano, no sólo a través de la infraestructura de asfalto, cloacas, y luz, sino también mediante la creación de escuelas, cines, teatros y centros de salud dentro de cada una de ellas, eliminando la estigmatización y transformando las villas en barrios.", temas.PLANEAMIENTO_URBANO, 0, 2),
Propuesta("Obras públicas", "Planificación estratégica de las obras públicas y promoción de la participación comunal en la toma de decisiones referidas a las obras a través del presupuesto participativo.", temas.PLANEAMIENTO_URBANO, 0, 2),
Propuesta("Energías alternativas", "Incorporación de energías alternativas y renovables para garantizar el funcionamiento continuo de ascensores, bombas de agua y luz en los edificios y viviendas.", temas.PLANEAMIENTO_URBANO, 0, 2),
Propuesta("Inundaciones", "Realización de todas las obras de infraestructura pendientes.", temas.PLANEAMIENTO_URBANO, 0, 2),
Propuesta("Creación de un sistema de alerta temprana", "Que vincule a las áreas del gobierno, organismos públicos (servicio meteorológico nacional, departamento de ciencias de la atmósfera de la UBA, Conicet) y las comunas para evitar las inundaciones.", temas.PLANEAMIENTO_URBANO, 0, 2),
Propuesta("Acceso a la vivienda para las clases populares y medias", "Construcción de 40.000 viviendas. Reforma del código de planeamiento urbano para que propicie el desarrollo equitativo y planificado de la ciudad por sobre la especulación del mercado inmobiliario. Así los sectores populares, medios y también los jóvenes puedan acceder a la vivienda propia.", temas.VIVIENDA, 0, 2),

//Anibal Ibarra
Propuesta("Detener los impuestazos y la suba sistemática de los servicios. Gobernar sin déficit (como lo hicimos en nuestra gestión)","", temas.ECONOMIA, 0, 3),
Propuesta("Reducir el endeudamiento actual y sólo tomar deuda a plazos e intereses razonables para hacer obras d infraestructura relevantes","", temas.ECONOMIA, 0, 3),
Propuesta("Promover la cultura del medio ambiente desde el nivel inicial y en los niños","", temas.MEDIO_AMBIENTE, 0, 3),
Propuesta("Promoción y concientización de la separación de residuos en el hogar","", temas.MEDIO_AMBIENTE, 0, 3),
Propuesta("Control estricto sobre las empresas de basura. Impulsar el reciclado, la reducción y reutilización de la basura","", temas.MEDIO_AMBIENTE, 0, 3),
Propuesta("Llevar las políticas culturales a los barrios. Poner en valor y renovar los teatros que dependen de la ciudad","", temas.SOCIEDAD, 0, 3),
Propuesta("Apoyar a los artistas independientes con recursos e infraestructura de la ciudad","", temas.SOCIEDAD, 0, 3),
Propuesta("Ampliar espacios culturales de la ciudad (como hicimos con la Usina del Arte; el Teatro 25 de Mayo y el cine teatro El Plata)","", temas.SOCIEDAD, 0, 3),
Propuesta("Cumplir con el Plan Hidráulico y hacer las obras necesarias para soportar lluvias intensas en toda la ciudad","", temas.PLANEAMIENTO_URBANO, 0, 3),
Propuesta("Trabajo coordinado con la Policía Federal y el traspaso definitivo de la fuerza a la Ciudad","", temas.SEGURIDAD, 0, 3),
Propuesta("Transformación de la Policía Metropolitana en una policía de prevención del delito y proximidad","", temas.SEGURIDAD, 0, 3),
Propuesta("Extensión de la Policía Metropolitana en todos los barrios de la Ciudad","", temas.SEGURIDAD, 0, 3),
Propuesta("Mayor prevención en personas y zonas vulnerables. Mayor cobertura y prevención en adultos mayores","", temas.SALUD, 0, 3),
Propuesta("Mayor presupuesto en salud en relación al presupuesto total de gastos de la Ciudad","", temas.SALUD, 0, 3),
Propuesta("Equipamiento de hospitales con tecnología de última generación","", temas.SALUD, 0, 3),
Propuesta("Creación de nuevos centros de salud en los barrios. En nuestra gestión había 0 y construimos 37 centros médicos barriales","", temas.SALUD, 0, 3),
Propuesta("Ampliación en cantidad de los equipos de orientación escolar","", temas.EDUCACION, 0, 3),
Propuesta("Capacitaciones y actualizaciones curriculares de los docentes en servicio y la concentración horaria","", temas.EDUCACION, 0, 3),
Propuesta("Mayor presupuesto educativo en relación al total de gastos de la Ciudad","", temas.EDUCACION, 0, 3),
Propuesta("Ampliación de las escuelas bilingües y plurilingües","", temas.EDUCACION, 0, 3),
Propuesta("Shock de construcción de nuevas escuelas y jardines maternales. Garantizar las vacantes en sala de 4 años","", temas.EDUCACION, 0, 3),
Propuesta("Articulación de los colectivos con el subterráneo. Creación del Boleto Único Porteño para subte, colectivos y trenes ","", temas.TRANSPORTE, 0, 3),
Propuesta("Impulsar la expansión de la red de subterráneos. Hacer las 3 líneas nuevas planeadas en nuestra gestión (F-G-I) ","", temas.TRANSPORTE, 0, 3),
Propuesta("Otorgar créditos a tasa subsidiada -por un fondo especial- para la compra de viviendas","", temas.VIVIENDA, 0, 3),
Propuesta("Retomar el plan de Urbanización de villas y asentamientos de emergencia","", temas.VIVIENDA, 0, 3),
Propuesta("Mayor carga impositiva para las viviendas desocupadas para estimular la oferta en alquileres y así bajar los costos","", temas.VIVIENDA, 0, 3),
Propuesta("Eliminar las condiciones abusivas de las inmobiliarias en los alquileres urbanos. Presentamos hace 3 años un proyecto","", temas.VIVIENDA, 0, 3),
Propuesta("Promocionar también al sector privado con ventajas impositivas para la construcción de viviendas sociales","", temas.VIVIENDA, 0, 3),
Propuesta("Retomar la política de construcción de viviendas. En nuestra gestión hicimos 5.000 viviendas. Hoy eso está paralizado","", temas.VIVIENDA, 0, 3),

//Heller
Propuesta("Plan Metropolitano de Salud","", temas.SALUD, 0, 4),
Propuesta("Refuncionalizacion, jerarquización y mejora de los hospitales públicos y del personal médico y paramédico","", temas.SALUD, 4, 0),
Propuesta("Plan de atención primaria de la salud","", temas.SALUD, 0, 4),
Propuesta("Plan por una Ciudad más saludable","Se ha agudizado su crisis durante la gestión de Mauricio Macri. Para superarla y que la Salud se constituya en un derecho fundamental y de acceso universal garantizado por la Ciudad de Buenos Aires.", temas.SALUD, 0, 4),
Propuesta("Aumentar el presupuesto educativo y reducir las transferencias de fondos públicos al sector privado de la educación","", temas.EDUCACION, 0, 4),
Propuesta("Solucionar los problemas de infraestructura aún vigentes","", temas.EDUCACION, 0, 4),
Propuesta("Reformular de las condiciones del trabajo docente","", temas.EDUCACION, 0, 4),
Propuesta("Elaborar una Constituyente Educativa","con la participación de los actores de las escuelas públicas y de la comunidad que contemple el estado de situación educativa existente, un modelo hacia el cual marchar, orientaciones para la transformación del Sistema Educativo, y un plan de acción para la legislación y el gobierno de la política educativa.", temas.EDUCACION, 0, 4),
Propuesta("Hacer eje en la extensión del subterráneo y su integración física y tarifaria con resto de las medios de transporte del área Metropolitana","No se desarrollaron nuevas vías de transporte y peor aún, no responden a un modelo de integración física y tarifaria con otros medios de transporte. Teniendo en claro el poco", temas.TRANSPORTE, 0, 4),
Propuesta("Establecer políticas coordinadas con el Gobierno Nacional y el de la Provincia de Buenos Aires, para comenzar a resolver los problemas de transporte en todo el ámbito de la región metropolitana","", temas.TRANSPORTE, 0, 4),
Propuesta("Extender las redes de subterráneos hasta los límites de CABA","Teniendo en claro el poco margen de acción que queda en el transporte sobre tierra, entendemos que esta política debe hacer eje en la extension del subterráneo y su integración física y tarifaria con el resto de las medios de transporte del área Metropolitana.", temas.TRANSPORTE, 0, 4),
Propuesta("Un boleto que permita la integración tarifaria entre los distintos medios de transporte sin tener que pagar un nuevo pasaje","", temas.TRANSPORTE, 0, 4),
Propuesta("Presencia, vigilancia y control policial de todas las áreas de la ciudad y no solo de algunos sectores particulares","", temas.SEGURIDAD, 0, 4),
Propuesta("Combinar planes de reinserción social de jóvenes con planes de seguridad barrial","", temas.SEGURIDAD, 0, 4),
Propuesta("Disminución de riesgo de vida y accidentes mediante un sistema de participación comunitaria","Nuestro Plan de Seguridad Integral, Metropolitano y Participativo comprende la articulación inter e intra jurisdiccional. Es decir, contempla tanto el trabajo conjunto entre Gobierno de la Ciudad, el de la provincia de Buenos Aires y el Nacional dado que el delito y la violencia son hechos que se manifiestan más allá y por encima de las fronteras jurisdiccionales.", temas.SEGURIDAD, 0, 4),
Propuesta("Una ciudad limpia","El Gobierno de la Ciudad no cumple la Ley 12854 de 'Basura Cero' sumado a una gran ineficiencia en el servicio de recolección de residuos. Como objetivos a corto plazo y para que se cumpla con la ley y se mejore la calidad de vida de todos aquellos que vivimos y transitamos la Ciudad, proponemos: Una política pública de reciclado que se enfoque en garantizar las rutas de recolección de residuos secos; Poner en valor el rol del recuperador urbano (cartonero) como servidor público; Establecer metas oficiales de aumento del reciclado y recuperación de residuos; Transformar los Centros Verdes, de forma tal que tengan capacidad para la separación y recuperación de todo el material que se produce en la Ciudad.", temas.MEDIO_AMBIENTE, 0, 4),

//Carlos Oviedo
Propuesta("Reforma profunda del Sistema de Seguridad de la Ciudad", "", temas.SEGURIDAD, 0, 5),
Propuesta("Impulso y respaldo de la participación ciudadana en la elaboración y control de las políticas de seguridad (cumplimiento de la Constitución)", "", temas.SEGURIDAD, 0, 5),
Propuesta("Elaboración y actualización permanente de un mapa del delito, de publicación obligatoria", "", temas.SEGURIDAD, 0, 5),
Propuesta("Elaboración de planes de seguridad para la prevención del delito", "", temas.SEGURIDAD, 0, 5),
Propuesta("Reforma en la Policía Metropolitana en cuanto a: Funcionamiento, Sistema de formación de agentes, Auditoría externa (Participación de Organismos de DDHH y Universidades Públicas)", "", temas.SEGURIDAD, 0, 5),
Propuesta("Mayor control de las empresas de Seguridad Privada (el GCABA gasta aproximadamente el 1% de su presupuesto en servicios de seguridad privada)", "", temas.SEGURIDAD, 0, 5),
Propuesta("Urbanización y regularización dominial de las viviendas radicadas en villas y asentamientos", "", temas.PLANEAMIENTO_URBANO, 0, 5),
Propuesta("Plan para resolver la crisis habitacional","Estructura estatal capaz de planificar y ejecutar políticas públicas de vivienda y hábitat que tiendan a resolver la crisis habitacional local: Ministerio de vivienda y hábitat; Banco de vivienda y hábitat (para centralizar y administrar los fondos necesarios); unidades comunales, donde los ciudadanos participen en pos de construir soluciones viables para resolver la problemática habitacional; Instituto de Registro de Inmuebles, donde se observen casos de ociosidad, cobrándoseles altos impuestos; Polo Centralizado de Monitoreo y Régimen de Selección de Aspirantes, para transparentar los procesos de adjudicación de viviendas construidas.", temas.VIVIENDA, 0, 5),
Propuesta("Garantizar la accesibilidad, universalidad, gratuidad y excelencia del servicio de salud pública de la Ciudad", "", temas.SALUD, 0, 5),
Propuesta("Participación activa del Estado en cuanto a conducir, regular y acreditar al Sistema de Salud de la Ciudad en forma integral (sector público estatal, seguridad social y privado)", "", temas.SALUD, 0, 5),
Propuesta("Producción pública de medicamentos", "", temas.SALUD, 0, 5),
Propuesta("Creación del Instituto de Fiscalización y Control Sanitario", "", temas.SALUD, 0, 5),
Propuesta("Creación del Instituto de Biotecnología e Investigaciones Científicas", "", temas.SALUD, 0, 5),
Propuesta("Creación del Sistema de Emergencia Unificado", "", temas.SALUD, 0, 5),
Propuesta("Recuperación de los centros culturales y cines de barrio", "", temas.SOCIEDAD, 0, 5),
Propuesta("Fomento y fortalecimiento de la cultura popular, con el objetivo de recuperar el papel protagónico y creativo del Pueblo", "", temas.SOCIEDAD, 0, 5),
Propuesta("Protección del patrimonio cultural de la Ciudad", "", temas.SOCIEDAD, 0, 5),
Propuesta("Creación del Programa 'Construyendo Libertades'", "se creará la Agencia de Atención para Consumos Problemáticos, dependiente del Ministerio de Salud. Esta área será dirigida por especialistas y profesionales en materia de adicciones que, en una primera etapa, desarrollarán un material bibliográfico que se dará en talleres abiertos en los centros de gestión y participación comunal. Quienes lo aprueben, se convertirán en 'promotoras y promotores' de la Agencia, cuya función será trabajar sobre la eliminación de los consumos problemáticos con las consumidoras y los consumidores de su comuna.", temas.SALUD, 0, 5),
Propuesta("Protección del patrimonio cultural de la Ciudad", "", temas.EDUCACION, 0, 5),
Propuesta("La participación de la comunidad es imprescindible para formular una Ley de Educación propia para el sistema porteño. Incrementar el presupuesto educativo y mejorar las condiciones generales de los comedores escolares", "", temas.EDUCACION, 0, 5),
Propuesta("Creación de universidades populares en la zona sur de la Ciudad", "", temas.EDUCACION, 0, 5),
Propuesta("Proponemosle expansión real y concreta de las líneas de subterráneos de la Ciudad, con la estatización de la gerenciamiento del Subte para poder llevar el pasaje a $2,50", "", temas.TRANSPORTE, 0, 5),
Propuesta("Reducción del ingreso diario de automóviles mediante la construcción de playas de estacionamiento estatales en la periferia de la Ciudad", "", temas.TRANSPORTE, 0, 5),
Propuesta("Implementación de políticas tendientes a disminuir los accidentes de tránsito, basadas principalmente en la educación vial y controles estrictos de conductores y vehículos. ", "", temas.TRANSPORTE, 0, 5),
Propuesta("Creación de un Sistema de Parque Costero Unificado, con el objetivo de integrar el Río a la Ciudad, en beneficio de la comunidad. ", "", temas.MEDIO_AMBIENTE, 0, 5),
Propuesta("Cooperación con la ACUMAR para recuperar el Riachuelo", "", temas.MEDIO_AMBIENTE, 0, 5),
Propuesta("Impulsar la modificación de la ley de evaluación de impacto ambiental, de marea tal que garantice la participación ciudadana en todos los grandes emprendimientos, tanto públicos como privados, que puedan producir alteraciones en la calidad de vida de los ciudadanos", "", temas.MEDIO_AMBIENTE, 0, 5),
Propuesta("Implementar políticas que incentiven la separación en origen de los residuos sólidos urbanos", "", temas.MEDIO_AMBIENTE, 0, 5),
Propuesta("Fortalecer la gestión social de los residuos sólidos urbanos mediante las cooperativas de recicladores urbanos", "", temas.MEDIO_AMBIENTE, 0, 5),
Propuesta("Revisión integral de los contratos del servicio público de recolección de residuos", "", temas.MEDIO_AMBIENTE, 0, 5),
Propuesta("Derechos de niños y niñas","Programa de creación de espacios comunitarios para la atención integral de niñas y niños en situación de riesgo. Allí, educadoras y educadores no convencionales atenderán sus necesidades de nutrición, salud, educación, cultura y deportes.Programa de creación de espacios comunitarios para la atención integral de niñas y niños en situación de riesgo. Allí, educadoras y educadores no convencionales atenderán sus necesidades de nutrición, salud, educación, cultura y deportes.", temas.DERECHOS_HUMANOS, 0, 5),
Propuesta("Programa mi primer trabajo","Programa 'Mi primer trabajo' para jóvenes entre 18 y 21 años en organismos públicos, con sueldos justos y condiciones laborales dignas. Se los tomará efectivos a los trabajadores por el plazo de un año y se les entregará un certificado de egreso del programa y detalle de las tareas realizadas, firmado por el jefe de la dependencia.", temas.DERECHOS_HUMANOS, 0, 5),
Propuesta("Torneos Manuel Dorrego","'Torneos Manuel Dorrego', como instancia de organización, participación, confluencia y entretenimiento para pibes y pibas menores de 18 años.Se organizarán campeonatos de fútbol, vóley y atletismo, donde participarán todos los clubes de la ciudad que quieran hacerlo, además de los equipos de barrio que armen los propios participantes.", temas.DERECHOS_HUMANOS, 0, 5),
Propuesta("Trabajar para la democratización efectiva de los medios públicos de la Ciudad y así jerarquizar el canal televisivo y la emisora radial de nuestra Buenos Aires", "", temas.INSTITUCIONAL, 0, 5),
Propuesta("Aumentar el presupuesto y generar contenidos de calidad e interés para el ciudadano porteño", "", temas.INSTITUCIONAL, 0, 5),
Propuesta("Crear el diario 'Ciudadanos'", "Un medio gráfico público y gratuito de la ciudad, mediante el cual se publiquen todos los temas de interés para los porteños en lo relativo a medidas de gobierno, tránsito y transporte, trámites, actividades públicas, etc.", temas.INSTITUCIONAL, 0, 5),

//Horacio R. Larreta
Propuesta("Acompañar el crecimiento de los chicos desde el embarazo hasta los primeros años de vida", "Para generar más oportunidades en la Ciudad, tenemos que empezar por ELLOS. Lo que no reciben en sus primeros meses de vida, ya sea falta de estímulos, alimentos o amor, no lo recuperan más. Vamos a ampliar el programa 'Primeros Meses' que garantiza asistencia médica y ayuda económica para las madres en situaciones de vulnerabilidad. Además, nos comprometemos a llegar a los 100 Centros de Primera Infancia. Ellos van a seguir siendo nuestra prioridad. No desde las palabras, sino desde la acción, con cambios que realmente mejoren su calidad de vida.", temas.DERECHOS_HUMANOS, 1, 0),
Propuesta("Más skateparks en los barrios", "Uno de nuestros principales objetivos es devolverles a todos los vecinos un espacio público verde y limpio para que puedan disfrutar de hacer deporte. Nosotros nos comprometemos a seguir promoviendo las actividades al aire libre y construir más skateparks en la Ciudad. Además, está ligado a una vida sana, genera compromiso y pasión. Es mucho más que un talento, es una actitud que te ayuda a ir para adelante.", temas.PLANEAMIENTO_URBANO, 1, 0),
Propuesta("WiFi en toda la Ciudad", "Nuestro compromiso es que desde cualquier lugar de la Ciudad los vecinos puedan acceder a Internet de manera gratuita para promover la inclusión digital y potenciar las capacidades creativas, productivas y de ocio que Internet ofrece. Hablar de innovación es buscar soluciones a los problemas comunes de la gente.", temas.PLANEAMIENTO_URBANO, 1, 0),
Propuesta("Metrobus Transversal", "Iría de sur a norte. Bajaría el tiempo de viaje a más de la mitad, siendo la primera línea eléctrica de colectivos, lo que reduce el impacto ambiental y aporta mayor seguridad vial. El transporte público es una prioridad y apostamos a que cada vez sean más personas las que lo elijan. Una Ciudad más conectada es una Ciudad con mayor inclusión.", temas.TRANSPORTE, 1, 0),
Propuesta("Disminuir la obesidad infantil", "En la niñez aprendemos hábitos que adoptamos a lo largo de nuestra vida. Más del 40% de los chicos en edad escolar tienen sobrepeso y ante esta problemática creamos programas como las Jugotecas, Mi Escuela Saludable y Recreo en Movimiento. Rigen en el 22% de las escuelas de gestión estatal: nuestra meta es llegar al 100%. Mi propuesta es concientizar sobre la importancia de una dieta sana y equilibrada para disminuir el avance del sobrepeso y cuidar la salud.", temas.SALUD, 1, 0),

//Gabriela Michetti
Propuesta("Metrobus", "Nuevo Metrobus Norte Sur por Libertador–Alem–Paseo Colón. Finalizar Metrobus en la Autopista 25 de Mayo.", temas.TRANSPORTE, 1, 1),
Propuesta("Extensión de la Línea E", "Extensión de la Línea E hasta la nueva terminal de ómnibus", temas.TRANSPORTE, 1, 1),
Propuesta("Construcción de nuevos subtes", "Construcción de las nuevas Líneas G(Retiro hasta el Cid Campeador) y F(Entre Ríos–Callao) de subterraneo", temas.TRANSPORTE, 1, 1),
Propuesta("Autopista Ribereña: Ordenar el tránsito de camiones", "", temas.TRANSPORTE, 1, 1),
Propuesta("Urbanización de terrenos de Libertador al río", "", temas.PLANEAMIENTO_URBANO, 1, 1),
Propuesta("Plan integral de recuperación del espacio público en el barrio de Constitución", "", temas.PLANEAMIENTO_URBANO, 1, 1),
Propuesta("Remodelación del entorno de la Estación Constitución", "", temas.PLANEAMIENTO_URBANO, 1, 1),
Propuesta("Impulsar áreas de prioridad peatón", "", temas.PLANEAMIENTO_URBANO, 1, 1),
Propuesta("3 nuevos espacios verdes en la Comuna 1", "", temas.PLANEAMIENTO_URBANO, 1, 1),
Propuesta("Se plantarán 36.000 nuevos árboles en la Comuna 1", "", temas.PLANEAMIENTO_URBANO, 1, 1),
Propuesta("Realización del Parque del Bicentenario (entre el Correo y Belgrano)", "", temas.PLANEAMIENTO_URBANO, 1, 1),
Propuesta("Nueva estación de trasbordo de Retiro Norte detrás de la Facultad de Derecho, en conjunto con el Poder Ejecutivo Nacional", "", temas.TRANSPORTE, 1, 1),
Propuesta("Duplicar la frecuencia de los subtes", "", temas.TRANSPORTE, 1, 1),
Propuesta("Integrar los espacios bajo la Autopista 25 de Mayo a la trama urbana", "", temas.PLANEAMIENTO_URBANO, 1, 1),
Propuesta("Ordenamiento integral del comercio en el barrio de San Telmo", "", temas.PLANEAMIENTO_URBANO, 1, 1),
Propuesta("Recuperar el tranvía de Puerto Madero conectándolo con la Boca y Retiro", "", temas.TRANSPORTE, 1, 1),
Propuesta("Plan integral de recuperación urbana del área del Congreso Nacional", "", temas.TRANSPORTE, 1, 1),
Propuesta("Programas sociales para personas en situación de calle", "", temas.SOCIEDAD, 1, 1),
Propuesta("Mejorar el nodo Obelisco como centro de transferencia Metropolitana", "", temas.TRANSPORTE, 1, 1),
Propuesta("Red de corredores verdes", "", temas.PLANEAMIENTO_URBANO, 1, 1),
Propuesta("Puesta en valor de los teatros General San Martin y Presidente Alvear", "", temas.PLANEAMIENTO_URBANO, 1, 1),
Propuesta("Puesta en valor de plazas barriales en la Comuna 1", "", temas.PLANEAMIENTO_URBANO, 1, 1),
Propuesta("Mejoramiento integral de la Plaza San Martín", "", temas.PLANEAMIENTO_URBANO, 1, 1),
Propuesta("Nuevos usos urbanos para los terrenos portuarios actualmente en desuso", "", temas.PLANEAMIENTO_URBANO, 1, 1),
Propuesta("Mejorar el ordenamiento del tránsito en el área central", "", temas.TRANSPORTE, 1, 1),
Propuesta("Mejorar accesibilidad a la Reserva Ecológica", "", temas.PLANEAMIENTO_URBANO, 1, 1),
Propuesta("Finalizar el Parque y Centro de Exposiciones y Convenciones", "", temas.PLANEAMIENTO_URBANO, 1, 1),
Propuesta("Mejorar el sistema de residuos", "", temas.PLANEAMIENTO_URBANO, 1, 1),
Propuesta("Mejorar las condiciones de la zona de facultades en la Comuna 2", "", temas.PLANEAMIENTO_URBANO, 1, 1),
Propuesta("2 nuevos espacios verdes en la Comuna 2", "", temas.PLANEAMIENTO_URBANO, 1, 1),
Propuesta("Se plantarán 9.500 nuevos árboles en la Comuna 2", "", temas.PLANEAMIENTO_URBANO, 1, 1),
Propuesta("Recuperar la relación con el río. Plan integral de acceso público al frente costero", "", temas.PLANEAMIENTO_URBANO, 1, 1),
Propuesta("Reordenamiento de la circulación de colectivos hacia avenidas", "", temas.TRANSPORTE, 1, 1),
Propuesta("Extensión de la Línea H", "", temas.TRANSPORTE, 1, 1),
Propuesta("Plan Hidraúlico", "Cuenca del arroyo Ugarteche: Resolver anegamientos sobre la calle Austria. Sistema de alerta temprana para prevenir inundaciones. Completar la red secundaria de las cuencas de los arroyos Erezcano, Ochoa-Elia, Boca-Barracas.", temas.PLANEAMIENTO_URBANO, 1, 1),
Propuesta("Regular el estacionamiento de vehículos en la vía pública", "", temas.TRANSPORTE, 1, 1),
Propuesta("Programa de protección patrimonial", "", temas.PLANEAMIENTO_URBANO, 1, 1),
Propuesta("Regulación de publicidad y contaminación visual", "", temas.PLANEAMIENTO_URBANO, 1, 1),
Propuesta("Mejoramiento integral de veredas", "", temas.PLANEAMIENTO_URBANO, 1, 1),
Propuesta("Plan integral de recuperación urbanística del Abasto", "", temas.PLANEAMIENTO_URBANO, 1, 1),
Propuesta("Plan integral de recuperación urbanística del entorno Mercado Spinetto", "", temas.PLANEAMIENTO_URBANO, 1, 1),
Propuesta("Restauración Plaza Miserere", "", temas.PLANEAMIENTO_URBANO, 1, 1),
Propuesta("Plaza homenaje a las víctimas de Cromañón", "", temas.PLANEAMIENTO_URBANO, 1, 1),
Propuesta("Programa de terrazas verdes", "", temas.MEDIO_AMBIENTE, 1, 1),
Propuesta("Fortalecer los centros comerciales a cielo abierto: Entre Ríos, Callao, Belgrano, Pueyrredón, San Juan", "", temas.PLANEAMIENTO_URBANO, 1, 1),
Propuesta("Redes barriales de ciclovías", "", temas.PLANEAMIENTO_URBANO, 1, 1),
Propuesta("Nuevas sedes de Gobierno en el Sur", "", temas.PLANEAMIENTO_URBANO, 1, 1),
Propuesta("Nuevo Centro de Trasbordo Sáenz", "", temas.TRANSPORTE, 1, 1),
Propuesta("Elevación del Ferrocarril Belgrano Sur", "Elevación del Ferrocarril Belgrano Sur en conjunto con el Poder Ejecutivo Nacional, conectando con Estación Constitución.", temas.TRANSPORTE, 1, 1),
Propuesta("Mejoramiento integral del entorno de la Usina del Arte", "", temas.PLANEAMIENTO_URBANO, 1, 1),
Propuesta("Urbanización de la Villa 21-24", "", temas.PLANEAMIENTO_URBANO, 1, 1),
Propuesta("Programa de mejora habitacional en la Boca", "", temas.PLANEAMIENTO_URBANO, 1, 1),
Propuesta("Nuevos puentes sobre el Riachuelo", "Nuevos puentes sobre el Riachuelo: Roca – Patricios, Pedriel. Puentes peatonales. Recuperación de los puentes viejos", temas.TRANSPORTE, 1, 1),
Propuesta("Nueva terminal de ómnibus sur", "", temas.TRANSPORTE, 1, 1),

//Martin Lousteau
Propuesta("Sanciones a las empresas de basura", "Controlar y penalizar a las empresas de recolección que no cumplan con sus obligaciones.", temas.MEDIO_AMBIENTE, 2, 0),
Propuesta("Profesionalizar a las cooperativas de recicladores urbanos", "", temas.MEDIO_AMBIENTE, 2, 0),
Propuesta("Cumplir la ley de basura cero", "", temas.MEDIO_AMBIENTE, 2, 0),
Propuesta("Reducir residuos no renovables", "Reducir los residuos no renovables mediante incentivos impositivos y normativas especiales.", temas.MEDIO_AMBIENTE, 2, 0),
Propuesta("Capacitar e incentivar a separar los residuos en cada casa", "", temas.MEDIO_AMBIENTE, 2, 0),
Propuesta("Recolección diferenciada", "Establecer de forma obligatoria la recolección diferenciada de residuos.", temas.MEDIO_AMBIENTE, 2, 0),
Propuesta("Transformar los Centros de Primera Infancia en jardines de infantes educativos", "", temas.EDUCACION, 2, 0),
Propuesta("Aumentar inversión educativa", "", temas.EDUCACION, 2, 0),
Propuesta("Jerarquizar la formación docente, articular con la UBA", "", temas.EDUCACION, 2, 0),
Propuesta("Crear un legajo único por alumno", "", temas.EDUCACION, 2, 0),
Propuesta("Extender jornadas ecolares de escuelas estatales", "", temas.EDUCACION, 2, 0),
Propuesta("Sancionar Ley de Educación para la CABA", "", temas.EDUCACION, 2, 0),
Propuesta("No vamos a reducir un m2 más de los espacios verdes de la CABA", "", temas.PLANEAMIENTO_URBANO, 2, 0),
Propuesta("Cuida-Coches", "Regular la actividad de cuida-coches con registro y tarifa única como en Uruguay.", temas.SOCIEDAD, 2, 0),
Propuesta("Venta en la vía pública", "Regular la venta legal en la vía pública creando espacios especiales para la venta.", temas.SOCIEDAD, 2, 0),
Propuesta("Reparación de baches y veredas", "Transferencia de presupuesto a las Comunas para la reparación de baches y veredas. Sistema digital para denuncia y seguimiento de obras de veredas y baches.", temas.PLANEAMIENTO_URBANO, 2, 0),
Propuesta("Centros de Atención Primaria", "Equipar los centros de atención primaria y dotarlos de un equipo médico interdiciplinario.", temas.SALUD, 2, 0),
Propuesta("Crear un polo de alta complejidad por región sanitaria", "", temas.SALUD, 2, 0),
Propuesta("Programas Médico de cabecera y pedriatra en casa", "", temas.SALUD, 2, 0),
Propuesta("Sistema de derivación para emergencias y regionalización de la salud neonatal", "", temas.SALUD, 2, 0),
Propuesta("Tarjeta de salud con historia clínica digitalizada", "", temas.SALUD, 2, 0),
Propuesta("Insistir en el traspaso de la Policía Federal con sus recursos", "", temas.SEGURIDAD, 2, 0),
Propuesta("Presencia de la Policía Metropolitana en más comunas", "", temas.SEGURIDAD, 2, 0),
Propuesta("Sistema descentralizado de denuncias, información y estadística criminal", "", temas.SEGURIDAD, 2, 0),
Propuesta("Más control y sanciones en las zonas comerciales que venden productos robados", "", temas.SEGURIDAD, 2, 0),
Propuesta("Metrobús", "Desarrollar el verdadero potencial del metrobús: unidades articuladas exclusivas y de amplia capacidad.", temas.TRANSPORTE, 2, 0),
Propuesta("Normas de Tránsito", "Hacer respetar las normas de ordenamiento de tránsito, carga y descarga, doble fila y horario de circulación de camiones.", temas.TRANSPORTE, 2, 0),
Propuesta("Crear la autopista ribereña subterránea", "", temas.TRANSPORTE, 2, 0),
Propuesta("Subte", "Construir la Linea F de subte entre Constitución y Plaza Italia.", temas.TRANSPORTE, 2, 0),
Propuesta("Prohibición de la utilización de la publicdad oficial como propaganda política", "", temas.SOCIEDAD, 2, 0),
Propuesta("Sistema para solicitar información pública en formato abierto y accesible", "", temas.SOCIEDAD, 2, 0),
Propuesta("Incentivos y protección para los denunciantes de corrupción", "", temas.INSTITUCIONAL, 2, 0),
Propuesta("Modificación de las normas para reducir la discrecionalidad en las compras y contrataciones", "", temas.INSTITUCIONAL, 2, 0),
Propuesta("Presupuesto", "Aumentar y ejecutar la totalidad del presupuesto destinado a vivienda.", temas.VIVIENDA, 2, 0),
Propuesta("Préstamos", "Subsidiar la tasa de interés para entregar 3800 préstamos al año con una tasa de un dígito. Reducir a la mitad el ingreso requerido para acceder al préstamo privilegiando la primera casa.", temas.VIVIENDA, 2, 0),
Propuesta("Urbanización", "Priorizar la integración en la urbanización duplicando la participación del gasto en vivienda.", temas.VIVIENDA, 2, 0),

//Graciela Ocaña
Propuesta("Instalación de cámaras de seguridad en todas las comunas", "", temas.SEGURIDAD, 2, 1),
Propuesta("Tendido de redes de fibra óptica para control online de cámaras", "", temas.SEGURIDAD, 2, 1),
Propuesta("Instalación de Centros de Monitoréo Barriales", "", temas.SEGURIDAD, 2, 1),
Propuesta("Policía Metropolitana", "Policía Metropolitana en todas las comunas con el traspaso del personal de la Policía Federal.", temas.SEGURIDAD, 2, 1),
Propuesta("Ubicación de garitas", "Ubicación de garitas barriales con radio de acción o cuadrículas claramente delimitadas y conectadas al centro de monitoréo.", temas.SEGURIDAD, 2, 1),
Propuesta("Entrega de botón anti pánico con central de monitoreo para taxis", "", temas.SEGURIDAD, 2, 1),
Propuesta("Prohibición de cobros en la vía pública (Trapitos)", "", temas.SEGURIDAD, 2, 1),
Propuesta("Gestión hospitalaria", "Nuevo modelo de gestión hospitalaria con atención ampliada de 07 a 20 hs.", temas.SALUD, 2, 1),
Propuesta("Mejoras edilicias", "", temas.SALUD, 2, 1),
Propuesta("Modernización de instalaciones", "", temas.SALUD, 2, 1),
Propuesta("Historia clínica online", "", temas.SALUD, 2, 1),
Propuesta("Tarjeta biométrica", "", temas.SALUD, 2, 1),
Propuesta("Sistema único de ambulancias para la Ciudad", "", temas.SALUD, 2, 1),
Propuesta("Servicios de gerontología", "", temas.SALUD, 2, 1),
Propuesta("Creación de centros para la prevención y tratamiento de adicciones y ludopatía", "", temas.SALUD, 2, 1),
Propuesta("Creación de centros de noche y centros intermedios para la rehabilitación de las adicciones", "", temas.SALUD, 2, 1),
Propuesta("Entrega de botones antipánico para todos los jubilados de la Ciudad", "", temas.SEGURIDAD, 2, 1),
Propuesta("Fondo de adelantamiento para el pago de las sentencias ANSES por reajuste de haberes", "", temas.SOCIEDAD, 2, 1),
Propuesta("Hipoteca inversa: adelanto de dinero mensual con garantía hipotecaria", "", temas.ECONOMIA, 2, 1),
Propuesta("Unidad de coordinación de políticas de la tercera edad ", "Creación de una Unidad de coordinación de políticas de la tercera edad (PAMI - ANSES - Salud - Recreación - Cultura).", temas.SOCIEDAD, 2, 1),
Propuesta("Boleto Educativo", "Boleto Educativo gratuito para alumnos, personal docente y no docente de los establecimientos educativos públicos y privados.", temas.EDUCACION, 2, 1),
Propuesta("Jardines Maternales", "Ampliación de la oferta de jardines maternales para niños de 2 a 3 años.", temas.EDUCACION, 2, 1),
Propuesta("Doble escolaridad para todas las escuelas públicas de la Ciudad", "", temas.EDUCACION, 2, 1),
Propuesta("Programa para la prevención por el uso de estupefacientes en la escuela secundaria", "", temas.EDUCACION, 2, 1),
Propuesta("Seguimiento especializado de la deserción escolar", "", temas.EDUCACION, 2, 1),
Propuesta("Plan de sanidad escolar", "", temas.EDUCACION, 2, 1),
Propuesta("Tarifa integrada para medios de transporte", "", temas.TRANSPORTE, 2, 1),
Propuesta("Metrobús", "Metrobús no como carril exclusivo sino como sistema integrado de transporte.", temas.TRANSPORTE, 2, 1),
Propuesta("Transparencia en la gestión pública", "", temas.INSTITUCIONAL, 2, 1),
Propuesta("Compras y licitaciones", "Nuevo modelo de compras y licitaciones que amplíen la ofertas, disminuyendo los costos de los servicios para la Ciudad.", temas.INSTITUCIONAL, 2, 1),
Propuesta("Ley anti corrupción de la Ciudad", "", temas.INSTITUCIONAL, 2, 1),
Propuesta("Fortalecimiento de la Auditoria General de la Ciudad", "", temas.INSTITUCIONAL, 2, 1),
Propuesta("Funcionamiento pleno de las Comunas, descentralizando fondos y decisiones", "", temas.INSTITUCIONAL, 2, 1),
Propuesta("Recuperación de competencias en materia de Policía, Justicia, Juego y Puertos", "", temas.INSTITUCIONAL, 2, 1),
Propuesta("Plan de urbanización de las villas de emergencia de la Ciudad", "", temas.PLANEAMIENTO_URBANO, 2, 1),
Propuesta("Creación de una línea de créditos para familias jóvenes", "", temas.VIVIENDA, 2, 1),
Propuesta("Sistema de Garantías", "Modernización del sistema de garantías, reemplazando la garantía propietaria por el seguro de caución.", temas.SOCIEDAD, 2, 1),
Propuesta("Instituto de la Vivienda de la Ciudad", "Gestión transparente y eficiente de los recursos del Instituto de la Vivienda de la Ciudad.", temas.VIVIENDA, 2, 1),
Propuesta("Recuperación de los fondos judiciales del Banco Ciudad para el otorgamiento de créditos", "", temas.ECONOMIA, 2, 1),
Propuesta("Cumplimiento de la ley de Basura Cero", "", temas.PLANEAMIENTO_URBANO, 2, 1),
Propuesta("Programa para la concientización de la separación en origen", "", temas.PLANEAMIENTO_URBANO, 2, 1),
Propuesta("ABL", "Reducción del ABL para vecinos que adhieran al Programa Hogares Verdes, separando la basura en el hogar.", temas.PLANEAMIENTO_URBANO, 2, 1),
Propuesta("Creación del programa de vecinos veedores voluntarios", "", temas.PLANEAMIENTO_URBANO, 2, 1),
Propuesta("Programa de incentivo de empleo para jóvenes de 18 a 30 años", "", temas.SOCIEDAD, 2, 1),
Propuesta("Alquiler de Jóvenes", "Programa para facilitar el alquiler de jóvenes a fin de poder iniciar su carrera profesional.", temas.SOCIEDAD, 2, 1),
Propuesta("Educación Sexual", "Creación de consultorías de educación sexual en escuelas, centros de salud y en todos los eventos vinculados a los jóvenes que organiza la Ciudad.", temas.EDUCACION, 2, 1),
Propuesta("Creación de la LINEA de denuncia de Drogas", "", temas.SEGURIDAD, 2, 1),
Propuesta("Ciudad como querellante en causas de narcotráfico", "", temas.SEGURIDAD, 2, 1),

//Andrés Borthagay
Propuesta("Prioridad al transporte público, al peatón y a la bicicleta", "", temas.TRANSPORTE, 2, 2),
Propuesta("Frecuencia, seguridad y calidad en transporte público", "", temas.TRANSPORTE, 2, 2),
Propuesta("Jerarquización de la red ferroviaria y fluvial", "Alivio de la red vial, que además de ser cara e insuficiente, está por completo saturada.", temas.TRANSPORTE, 2, 2),
Propuesta("Prioridad a los siguientes medios:", "Ferrocarril y subte como columna vertebral; el metrobús como sistema de capacidad intermedia; colectivos como sistema capilar.", temas.TRANSPORTE, 2, 2),
Propuesta("Plan de inversión a nivel metropolitano (tren/ subte)", "Financiamiento a partir de los fondos recaudados por los peajes de autopista, entre otros.", temas.TRANSPORTE, 2, 2),
Propuesta("Medidas de emergencia y medidas estructurales para evitar riesgos y recuperar el sistema en su conjunto", "", temas.TRANSPORTE, 2, 2),
Propuesta("Mejora del sistema Sube y los sistemas de información", "", temas.TRANSPORTE, 2, 2),
Propuesta("Seguridad víal:", "visión cero de la mortalidad de peatones. Límite máximo de velocidad: 50 km por hora.", temas.TRANSPORTE, 2, 2),
Propuesta("Política de estacionamiento", "Al servicio del ordenamiento del tránsito y no de concesionarios y concedentes circunstanciales.", temas.TRANSPORTE, 2, 2),
Propuesta("Preservación de las plazas como plazas y no como macetas ornamentales que coronan estacionamientos", "", temas.TRANSPORTE, 2, 2),
Propuesta("Sistemas más avanzados tecnológicamente, en plazos flexibles y razonables", "En lugar de las concesiones actuales de autopistas y las proyectadas de estacionamiento.", temas.TRANSPORTE, 2, 2),
Propuesta("Mejora de estaciones", "Centros de transferencia (tren, subte, colectivos, bicicleta) y paradas.", temas.TRANSPORTE, 2, 2),
Propuesta("Desarrollo del actual sistema de bicicletas", "Proyectado a toda la ciudad. Sistemática pedagogía de las indispensables normas de convivencia que esto implica.", temas.TRANSPORTE, 2, 2),
Propuesta("Programación de cruces callejeros con tiempos adecuados y seguros para la circulación de adultos mayores y chicos", "", temas.TRANSPORTE, 2, 2),

Propuesta("Códigos de planeamiento sin ambigüedades ni superposición normativa", "Hoy conviven dos 'códigos'. Marco legal a favor del crecimiento sustentable y no a la especulación.", temas.PLANEAMIENTO_URBANO, 2, 2),
Propuesta("Vivienda social como parte global de la estrategia de desarrollo", "", temas.VIVIENDA, 2, 2),
Propuesta("Hábitat:", "Derecho a una vivienda digna que no sea inalcanzable para la mayoría.", temas.VIVIENDA, 2, 2),
Propuesta("Utilizar las regulaciones edilicias y los terrenos disponibles para potenciar la vivienda social", "", temas.VIVIENDA, 2, 2),
Propuesta("Políticas crediticias concretas que faciliten el acceso a la primera vivienda", "", temas.VIVIENDA, 2, 2),
Propuesta("Promoción de las cooperativas de vivienda", "", temas.VIVIENDA, 2, 2),
Propuesta("Plan de financiamiento de vivienda", "Incluidas propuestas específicas para la población más joven y la clase media.", temas.VIVIENDA, 2, 2),
Propuesta("Utilización eficaz de los recursos de la ciudad", "En cada una de las redes de infraestructura, incluyendo un plan energético.", temas.PLANEAMIENTO_URBANO, 2, 2),
Propuesta("Incentivo y realización de campañas para concientizar sobre el consumo racional", "Ejemplos: balance térmico en las nuevas construcciones, comisión de estándares en consumo energético de electrodomésticos", temas.PLANEAMIENTO_URBANO, 2, 2),
Propuesta("Sistema de consulta a la sociedad", "Implementación de un sistema de consulta a la sociedad y a los profesionales que permita mejorar la calidad y la legitimidad de las propuestas.", temas.PLANEAMIENTO_URBANO, 2, 2),
Propuesta("Problemas de seguridad del Aeroparque", "Abordaje de los problemas de seguridad del Aeroparque sin conflictos de interés con el concesionario de la operación, respetando el medio ambiente y el patrimonio urbano.", temas.PLANEAMIENTO_URBANO, 2, 2),
Propuesta("Participación de la Ciudad en la gestión del puerto", "Eslabón clave en la cadena logística - con una verdadera articulación puerto-ciudad, en el marco de un sistema de puertos metropolitanos y de una integración racional de las conexiones terrestres.", temas.PLANEAMIENTO_URBANO, 2, 2),
Propuesta("Desarrollo del puerto de cruceros con un sistema de conexión en la ciudad. ", "", temas.PLANEAMIENTO_URBANO, 2, 2),
Propuesta("No avalar concesiones portuarias", "No avalar desde la Ciudad concesiones portuarias de largo plazo que perjudiquen sus intereses. (entre ellas la que está en proceso a treinta años).", temas.PLANEAMIENTO_URBANO, 2, 2),
Propuesta("Arboles en la ciudad", "La ciudad debe tener una base de 500.000 árboles bien distribuidos (el censo de 2011 contabiliza 372.000) en la ciudad.", temas.MEDIO_AMBIENTE, 2, 2),
Propuesta("Revisión de contratos de limpieza, a la luz del alto costo y las deficiencias del actual sistema. ", "", temas.PLANEAMIENTO_URBANO, 2, 2),
Propuesta("Campaña pedagógica de promoción de hábitos para una gestión sustentable de los residuos. ", "", temas.MEDIO_AMBIENTE, 2, 2),
Propuesta("Actualización normativa de embalaje, basura electrónica", "", temas.MEDIO_AMBIENTE, 2, 2),
Propuesta("Articulación de un sistema de flujos metropolitanos. Revisión delavance en centros de tratamiento de residuos sobre rellenos costeros", "", temas.PLANEAMIENTO_URBANO, 2, 2),
Propuesta("Respeto y continuidad a un plan de manejo y de gestión de la rivera", "", temas.PLANEAMIENTO_URBANO, 2, 2),
Propuesta("Control de los niveles de ruido, que actualmente superan los estándares internacionales", "", temas.MEDIO_AMBIENTE, 2, 2),
Propuesta("Cotejo de los niveles de emisión con los establecidos en el plan energético", "", temas.MEDIO_AMBIENTE, 2, 2),
Propuesta("Plan integral de gestión del agua por cuenca hídrica", "", temas.PLANEAMIENTO_URBANO, 2, 2),
Propuesta("Inundaciones","Ejecución de las grandes infraestructuras pendientes en materia de inundaciones, medidas estructurales y no estructurales. Finalización de los rellenos en la costa del río y la impermeabilización del suelo como primera medida anti-inundaciones. Publicación de cotas de inundación.", temas.PLANEAMIENTO_URBANO, 2, 2),
Propuesta("Continuidad del PPI. ", "", temas.PLANEAMIENTO_URBANO, 2, 2),
Propuesta("Tecnologías sustentables","Impulso a la innovación y la incorporación de tecnologías sustentables (no solo desde el punto de vista ambiental).", temas.MEDIO_AMBIENTE, 2, 2),
Propuesta("Apoyo al desarrollo emprendedor y la empleabilidad", "", temas.PLANEAMIENTO_URBANO, 2, 2),
Propuesta("Comunas", "Diseño (participativo) y desarrollo de una estrategia económico/productivo/laboral para cada comuna o macrocomuna (dos o tres comunas vecinas), que incorpore a empresarios, emprendedores, profesionales, comerciantes, vecinos, ONGs, sistema educativo, etc.", temas.PLANEAMIENTO_URBANO, 2, 2),
Propuesta("Evaluación ambiental estratégica", "", temas.PLANEAMIENTO_URBANO, 2, 2),

Propuesta("Visión estratégica de la educación", "Que dé sentido y direccionalidad al conjunto de las acciones. Flexibilización del diseño curricular, con pautas propias de la ciudad. ", temas.EDUCACION, 2, 2),
Propuesta("Aumento de recursos", "Tanto a nivel nacional como de la ciudad, el aumento de recursos es condición necesaria pero no suficiente para mejorar el nivel educativo. En lo edilicio, como en lo tecnológico y lo salarial. Debe ser sostenida pero acompañada de medidas sustantivas en lo educativo.", temas.EDUCACION, 2, 2),
Propuesta("Jerarquización docente", "Becas de formación docente para los mejores promedios. Política de jerarquización del docente frente a curso, para que los mejores maestros estén al frente del aula y no en funciones de otra índole. ", temas.EDUCACION, 2, 2),
Propuesta("Política sistemática de equipamiento y provisión de recursos", "A los maestros, docentes y profesores, principal apoyo para liberar las habilidades y capacidades de los alumnos.", temas.EDUCACION, 2, 2),
Propuesta("Plan de mejora por escuela", "Consensuada con directivos y docentes, con un análisis del entorno de los alumnos. Jerarquización de estas perspectivas con respecto a intereses particulares y corporativos.", temas.EDUCACION, 2, 2),
Propuesta("Reemplazo del actual sistema de excepciones sistemáticas", "Por una carrera docente basada en reglas de evolución claras. Asignación de puntajes basada en un sistema confiable.", temas.EDUCACION, 2, 2),
Propuesta("Desarrollo del sistema de investigación de la ciudad", "Creación deInstitutos en relación con la red de universidades existentes. Articular conocimiento y desarrollo económico.", temas.EDUCACION, 2, 2),
Propuesta("Asignación geográfica de inversiones", "Y localización de actividades como camino hacia la reversión de la inadmisible desigualdad educativa y de oportunidades entre las comunas de la ciudad: inversiones específicas, localización de actividades, etc.", temas.SOCIEDAD, 2, 2),
Propuesta("Políticas de igualdad de género:", "Gabinete social y plan de igualdad de oportunidades que comprenda a todos las áreas de gobierno. ", temas.DERECHOS_HUMANOS, 2, 2),
Propuesta("Políticas para los jóvenes:", "Mayor desarrollo deportivo barrial, integración e inclusión en proyectos educativos, informáticos y productivos que les posibiliten mejores oportunidades laborales.", temas.DERECHOS_HUMANOS, 2, 2),
Propuesta("Violencia contra la mujer", "Políticas activas para prevenir y erradicar la violencia contra la mujer y todo tipo de violencia y discriminación institucional que se funde en los valores de la solidaridad y convivencia democrática.", temas.DERECHOS_HUMANOS, 2, 2),
Propuesta("Inclusión de los adultos mayores:", "Como ciudadanos activos la ciudad debe valorar su potencial e integrarlos como sujetos y no como meros espectadores. Adaptación de infraestructuras, complemento de planes de salud, oferta urbana en general.", temas.DERECHOS_HUMANOS, 2, 2),
Propuesta("Salud:", "Acceso a la atención primaria en los centros de salud. Creación y equipamiento comenzando con las comunas más postergadas del sur de la ciudad con alarmantes índices de mortalidad infantil y materna. Promoción, prevención y asistencia primaria de la salud sin demoras. Consejerías en salud sexual y reproductiva y prevención del embarazo adolescente.", temas.SALUD, 2, 2),
Propuesta("Desarrollo de estrategia orientada a la creación de una marca ciudad", "", temas.SOCIEDAD, 2, 2),
Propuesta("Comunas e integración metropolitana son dos caras de una moneda", "Una ciudad policéntrica, con un programa integrado de Centros cívicos en los barrios, concebidos como tales, y no uno que concentre toda la administración en un lugar.", temas.INSTITUCIONAL, 2, 2), 
Propuesta("Un sistema modelo de empresas públicas", "Que funcionen y respondan a la ley puede potenciar el desarrollo de los recursos en Buenos Aires. Parte del sistema actual representa lo peor de los dos mundos: fondos públicos y discrecionalidad en el manejo.", temas.INSTITUCIONAL, 2, 2),
Propuesta("Agenda anti corrupción:","Control de licitaciones desde la fijación de precios base, hacer del acceso a la información un pilar de la modernización, publicación de agendas, fortalecimiento de los organismos de control.", temas.INSTITUCIONAL, 2, 2),
Propuesta("Respetar las leyes de empleo público y la profesionalización dela administración", "", temas.INSTITUCIONAL, 2, 2),
Propuesta("Leyes de partidos y electoral de la ciudad", "Que permitan un cambio completo del sistema político tradicional, junto a comunas jerarquizadas y con todas las competencias.", temas.INSTITUCIONAL, 2, 2),
Propuesta("Hacer de la coordinación de las fuerzas de policía una oportunidad de reforma y modernización", "", temas.SEGURIDAD, 2, 2),
Propuesta("Facilitar el acceso a la justicia, desburocratizar el funcionamientoen el desarrollo de la jurisdicción local", "", temas.SEGURIDAD, 2, 2),
Propuesta("Articulación con una política federal contra la droga y el narcotráfico", "", temas.SEGURIDAD, 2, 2),
Propuesta("Potenciar los programas de probation", "", temas.SEGURIDAD, 2, 2),
Propuesta("Cambio cultural", "Como en Bogotá, para tratar la violencia. La ciudad no se transforma exclusivamente desde el Gobierno, sino también desde las actitudes de los ciudadanos. Algunas medidas: la promoción de formas no violentas de manifestación, otro tipo de festejos de fin de año, una cultura del fútbol más festiva y menos violenta, etc.", temas.SEGURIDAD, 2, 2),

//Héctor Bidonde
Propuesta("Privilegios para nadie","Que el jefe de gobierno, los diputados y jueces ganen como una directora de escuela, manden sus hijos a la escuela pública y se atiendan en el hospital público. Cárcel y embargo a los funcionarios corruptos; revocar del cargo al político que incumpla sus promesas.", temas.ECONOMIA, 3, 0),
Propuesta("Más verde, menos cemento","Aumento de los espacios verdes. Basta de cementación especulativa y shoppings de IRSA, que agravan los efectos de las inundaciones. Defensa de la Reserva Ecológica. Plan progresivo de veredas verdes. Servicio de basura eficiente y público, sin negocio privado.", temas.PLANEAMIENTO_URBANO, 3, 0),
Propuesta("La educación no es mercancía; más escuela pública","Mayor presupuesto. Construir las 30 escuelas que faltan en el Sur. Boleto estudiantil gratuito desde la primaria hasta la universidad. Reforma del secundario con participación de la comunidad educativa. Anular los subsidios a la enseñanza religiosa y privada.", temas.EDUCACION, 3, 0),
Propuesta("Prioridad a la salud pública de calidad","Aumento de los fondos. Reforzar la prevención y atención primaria, sobre todo en pediatría y tercera edad. Nombrar las 4.000 enfermeras que faltan y reducir a 6 horas la jornada laboral en el sector. Concursos transparentes para profesionales. Producción pública de medicamentos.", temas.SALUD, 3, 0),
Propuesta("Más trabajo digno, sin precarización","Pase a planta de todos los contratados. Ningún trabajador en negro. Salario acorde a la canasta familiar. Basta de tercerizaciones en el Estado. Respeto a la libertad sindical.", temas.ECONOMIA, 3, 0),
Propuesta("Subte 100% estatal, barato y seguro","Ampliar la red y frecuencia, mediante la reestatización del subte con control social. Boleto gratuito a los jubilados en todos los días y horarios. Anular la estafa de las grúas y parquímetros privados. Planificar el Metrobús previa consulta a los vecinos y la Legislatura.", temas.TRANSPORTE, 3, 0),
Propuesta("Más impuestos a las corporaciones, menos a la gente","Anular los tarifazos del ABL y reducir los requisitos para eximir a jubilados y discapacitados. Revocar las millonarias exenciones a grandes empresas. Gravar a las corporaciones, el juego, la renta financiera y las operaciones de bolsa, hoy exentas.", temas.ECONOMIA, 3, 0),
Propuesta("Vivienda sí, especulación inmobiliaria no","500 mil personas con problemas de vivienda y 300 mil inmuebles ociosos no va más. Programa de alquiler social con garantía estatal gratuita y subsidios, para ampliar la oferta. Más fondos al Instituto de la Vivienda. Urbanización efectiva de las villas.", temas.VIVIENDA, 3, 0),
Propuesta("Ni una muerta más, ni una mujer menos","Contra la violencia de género: abrir un refugio en cada Comuna, asistencia jurídica y psicológica gratuita, y subsidios de reinserción habitacional y laboral a las mujeres víctimas. Ninguna traba a los abortos no punibles; por el derecho al aborto. Cupo electoral del 50%.", temas.SOCIEDAD, 3, 0),
Propuesta("Seguridad preventiva, sin represión social","Plan urgente de inclusión educativa y laboral para los jóvenes 'ni-ni'. Elegir los comisarios, jueces y fiscales por voto popular. Combate al narcotráfico y la trata. Derecho a la sindicalización policial. Depuración total de la Policía Metropolitana, donde el 80% de los jefes viene de la Federal  y la dictadura.", temas.SEGURIDAD, 3, 0),
Propuesta("La cultura popular no se clausura","Reapertura de los centros culturales, cines y teatros cerrados. Creación del Instituto de Cine porteño y la Escuela de Mimo. Edificio propio para la Escuela Metropolitana de Arte Dramático. Defensa de la educación artística y de los músicos y artistas en la vía pública.", temas.SOCIEDAD, 3, 0),
Propuesta("Jóvenes con derechos","Programa de inclusión escolar y de primer empleo. Despenalización del uso personal de marihuana y el autocultivo. Cumplimiento de las leyes de accesibilidad y de cupo laboral estatal del 5% para los discapacitados.", temas.SOCIEDAD, 3, 0),
Propuesta("Democracia real ya en la Ciudad","No a los pactos Pro-K y Pro-Unen (Eco).  En los temas clave, consulta a los vecinos por voto. Pleno cumplimiento de la Ley de Comunas. Separar la Iglesia y el Estado.", temas.INSTITUCIONAL, 3, 0),
Propuesta("No más Cromañón ni Iron Mountain","Lucro empresarial + no control estatal = corrupción y muerte. Estricto control público de todas las obras y habilitaciones, con participación comunal y social. Reincorporación de los profesionales verificadores de obra. Defensa del cuerpo de inspectores del trabajo.", temas.SOCIEDAD, 3, 0),

//Sergio García
Propuesta("Salarios","Salarios dignos, con mínimo igual a la canasta familiar y actualizados según la inflación real. Trabajo en blanco y pase a planta de los contratados y precarizados, empezando por el Estado que es el principal empleador y precarizador. 82% móvil real a los jubilados y pensionados. Plan de empleo genuino para los desocupados.", temas.ECONOMIA, 3, 1),
Propuesta("Impuestos","Profunda reforma fiscal, con anulación del impuesto al salario y del IVA a los alimentos de la canasta familiar, y altos impuestos a las grandes corporaciones, la renta financiera y el juego.",  temas.ECONOMIA, 3, 1),
Propuesta("Juventud","Derechos integrales a la juventud, con programas especiales de inclusión educativa, de primer empleo sin precarización y de primera vivienda para las parejas jóvenes.", temas.SOCIEDAD, 3, 1),
Propuesta("Derechos Básicos","Desmercantilización de todos los bienes necesarios para ejercer nuestra dignidad, de la salud, la educación, la vivienda, la alimentación, la cultura, el transporte y los espacios públicos.", temas.DERECHOS_HUMANOS, 3, 1),
Propuesta("UBA","Plena autonomía universitaria y democratización de los consejos superiores.", temas.INSTITUCIONAL, 3, 1),
Propuesta("Salud","Defensa de la salud y la educación públicas, con salarios dignos, más personal y obras en hospitales y escuelas. Construcción de escuelas, conversión de escuelas de jornada simple a jornada completa y anulación de los subsidios a la enseñanza privada. Fortalecimiento de la prevención en salud y la atención primaria.", temas.SALUD, 3, 1),
Propuesta("Educación","Defensa de la salud y la educación públicas, con salarios dignos, más personal y obras en hospitales y escuelas. Construcción de escuelas, conversión de escuelas de jornada simple a jornada completa y anulación de los subsidios a la enseñanza privada. Fortalecimiento de la prevención en salud y la atención primaria.", temas.EDUCACION, 3, 1),
Propuesta("Patentes","Reforma del régimen de propiedad intelectual, que les permite a las corporaciones lucrar con los medicamentos, alimentos y semillas. No al patentamiento de la vida. Eliminación de las patentes a los medicamentos y producción estatal de medicamentos genéricos.", temas.DERECHOS_HUMANOS, 3, 1),
Propuesta("Propiedad","Freno a la expulsión de las familias de la Ciudad, y de los campesinos y comunidades originarias de sus territorios. Basta de persecución a los qom y demás pueblos originarios. Restitución de sus tierras. Protección de nuestros lazos culturales y ambientales con la tierra y el hábitat.", temas.DERECHOS_HUMANOS, 3, 1),
Propuesta("Deuda Externa","Auditoría y no pago de la deuda externa ilegítima, destinando esos fondos por ejemplo a un verdadero plan de acceso a la vivienda propia.", temas.ECONOMIA, 3, 1),
Propuesta("Vivienda","Vivienda digna y adecuada, acceso a servicios públicos, bienes y servicios sociales. Regulación del mercado de alquileres. Normativas de gestión y control de la urbanización que reconozcan la función social y comunitaria de la Ciudad y la propiedad privada.", temas.PLANEAMIENTO_URBANO, 3, 1),
Propuesta("Participación"," Democracia participativa en las políticas públicas y la prestación de los servicios públicos. Presupuesto participativo, en la elaboración, la ejecución y el control.", temas.INSTITUCIONAL, 3, 1),
Propuesta("Funcionarios Públicos","Ley de obligatoriedad para todos los funcionarios políticos (presidente, ministros, senadores, diputados, legisladores, intendentes y concejales) de educar a sus hijos en escuelas públicas y de atenderse en hospitales públicos.", temas.INSTITUCIONAL, 3, 1),
Propuesta("Cargos Públicos","Un freno a la impunidad del poder: revocabilidad de todos los cargos electivos si no cumplen sus promesas, salarios iguales a los de una maestra de doble turno con 10 años de antigüedad, embargo de los bienes personales en caso de corrupción o defraudación al Estado.", temas.INSTITUCIONAL, 3, 1),
Propuesta("Poder Judicial","Ni la reforma oficialista ni la corporación judicial. Verdadera democratización y garantía de acceso a justicia, con juicios por jurados, jueces y fiscales electos por voto popular, sin consejos de la magistratura sujetos al poder político.", temas.INSTITUCIONAL, 3, 1),
Propuesta("Trata de Personas","Combate integral contra la trata de personas para explotación laboral y sexual, el narcotráfico y toda otra forma de delito organizado, que funciona al amparo policial, judicial y político.", temas.DERECHOS_HUMANOS, 3, 1),
Propuesta("Policía","No al Proyecto X, la criminalización del reclamo social y la ley 'antiterrorista'. Reestructuración total de la policía, con depuración de las cúpulas. Nueva seguridad ciudadana, preventiva, con comisarios electos por voto popular, control vecinal de las comisarías y derecho a la sindicalización policial.", temas.SEGURIDAD, 3, 1),
Propuesta("Megaminería, Monocultivo y Fracking","Desincentivar el modelo extractivista y la especulación inmobiliaria. Prohibición de la megaminería, el monocultivo de soja transgénica y el fracking. Anulación de las leyes del pacto PRO-K de negocio inmobiliario. Por un país sin Monsanto, Barrick e IRSA, con regulación estatal, captura de las rentas extraordinarias y, progresivamente, de las rentas ordinarias.", temas.ECONOMIA, 3, 1),
Propuesta("Ley de semillas","Rechazo a la 'ley de semillas' promovida por el gobierno nacional junto a Monsanto, que pretende privatizar la vida y acorralar a los campesinos y los pequeños y medianos productores.", temas.ECONOMIA, 3, 1),
Propuesta("Medio Ambiente","Reconocimiento de los derechos de la naturaleza para promover una nueva relación como parte de ella Protección del ecosistema, el agua, la tierra, los bosques nativos, lagos y glaciares. A nivel urbano, menos cemento y más espacios verdes comunitarios.", temas.PLANEAMIENTO_URBANO, 3, 1),
Propuesta("Ética","Promovemos una ética eco-socialista de carácter social, igualitaria,solidaria, comunitaria, democrática y responsable, que genere modelos de desarrollo alternativos al extractivismo y al consumismo capitalista, hacia la desmercantilización de la naturaleza y los bienes comunes.", temas.INSTITUCIONAL, 3, 1),
Propuesta("Energía","Otra matriz energética es posible. Proponemos el desarrollo de fuentes de energías no contaminantes y alternativas.", temas.MEDIO_AMBIENTE, 3, 1),
Propuesta("Alimentación","Promovemos una alimentación sana y económica, con sabores y nutrientes naturales, sin alimentos transgénicos cultivados con agrotóxicos como el glifosato. Soberanía alimentaria y agroecología. Fomento de la comercialización directa entre productores y consumidores.", temas.DERECHOS_HUMANOS, 3, 1),
Propuesta("Obras Públicas","Planeamiento territorial y plan de obras para prevenir y evitar las inundaciones, el colapso de los servicios públicos y el hacinamiento. Cumplimiento del reciclado y las leyes de Basura Cero, con servicio estatal y no negocio de empresas privadas.", temas.PLANEAMIENTO_URBANO, 3, 1),
Propuesta("Patrimonio Cultural","Protección y recuperación del patrimonio natural, cultural y arquitectónico. Defensa de la identidad de los barrios frente a la construcción indiscriminada y la especulación inmobiliaria.", temas.PLANEAMIENTO_URBANO, 3, 1),
Propuesta("Costanera","Por una costanera para todos/as. Recuperación de las costas de los ríos que rodean la Ciudad, con acceso público al camino de ribera. Saneamiento de sus aguas. Incremento de los corredores verdes en la Ciudad, las reservas y los lagos.", temas.PLANEAMIENTO_URBANO, 3, 1),
Propuesta("Transporte","Las privatizaciones y la corrupción matan: para tener un transporte seguro, eficiente y económico, reestatizar los trenes y el subte con control social. Electrificación de los trenes metropolitanos y reconstrucción de los ramales y la industria ferroviaria. Priorizar la expansión del transporte público más seguro, ecológico, rápido y de mayor capacidad: el subte. Ampliar la red de Premetro integrado al subte. No al metrobús privado y contaminante.", temas.TRANSPORTE, 3, 1),
Propuesta("Acceso al Transporte","Efectivo derecho a la movilidad de todas las personas, con accesibilidad física y económica, igualdad en la prestación del servicio, seguridad, confort y sustentabilidad ambiental.", temas.TRANSPORTE, 3, 1),
Propuesta("Bicisendas", "Sistema público de bicicletas. No a la privatización del servicio y planificación de la red de bicisendas integrada con los otros modos de transporte.", temas.TRANSPORTE, 3, 1),
Propuesta("Colectivos","Traspaso de las 33 líneas de colectivos intraurbanas. Creación de nuevas líneas según las necesidades zonales. Mejora de las flotas de colectivos para disminuir los factores contaminantes, incorporando tecnología con energía eléctrica.", temas.TRANSPORTE, 3, 1),
Propuesta("Recursos Estratégicos","Nacionalización del petróleo, el gas, la gran minería y otros recursos naturales estratégicos.", temas.ECONOMIA, 3, 1),
Propuesta("Puerto","Traspaso del puerto a la Ciudad. Control público sobre los puertos, el comercio exterior y las agroexportaciones, hoy en manos de transnacionales.", temas.INSTITUCIONAL, 3, 1),
Propuesta("Género","Ley de emergencia contra la violencia de género y los femicidios, con presupuesto suficiente para apertura de refugios, campañas masivas de prevención y subsidios de reinserción laboral y habitacional. Fomento al desarrollo educativo de las jóvenes víctimas de violencia.", temas.DERECHOS_HUMANOS, 3, 1),
Propuesta("Salud Reproductiva","Efectiva aplicación de las leyes de Educación Sexual Integral y de Salud Reproductiva. Cumplimiento del fallo de la Corte Suprema que permite los abortos no punibles. Ley de derecho al aborto legal, seguro y gratuito, para que la mujer pueda decidir. Separación de la Iglesia del Estado.", temas.SALUD, 3, 1),
Propuesta("Género","Revertir la brecha salarial entre hombres y mujeres, que hoy es de un 30% promedio.", temas.DERECHOS_HUMANOS, 3, 1),
Propuesta("Género","Fomento de la participación de la mujer en todas las instancias; cupo del 50% en las listas electorales.", temas.INSTITUCIONAL, 3, 1),
Propuesta("Minorías","Promover la sanción de una nueva ley sobre actos discriminatorios, ya presentada en el Congreso. Promover el Plan de Ciudadanía Plena LGBT, en el marco del Frente Parlamentario por la Igualdad de Derechos para las personas LGBT.", temas.DERECHOS_HUMANOS, 3, 1),
 Propuesta("Colectivo Trans","Inclusión plena del colectivo trans mediante programas de capacitación laboral y finalización de estudios que les permitan ingresar al mercado de trabajo.", temas.DERECHOS_HUMANOS, 3, 1),

//Humberto Tumini
 Propuesta("Impediremos la afectación de todo espacio verde con construcciones de cualquier tipo, como el shopping que quieren hacer en Caballito en los terrenos del ferrocarril","", temas.MEDIO_AMBIENTE, 4, 0),
 Propuesta("Jerarquizaremos la problemática de la mujer en el gobierno, elevándola de Dirección a Secretaría y dotándola de mayor presupuesto del ínfimo que ahora dispone (0,07% del presupuesto)","", temas.DERECHOS_HUMANOS, 4, 0),
 Propuesta("Fortaleceremos la vida social, cultural y deportiva en los barrios, apoyando clubes, centros, bibliotecas y teatros, a través de mayores recursos y normas legales que los favorezcan","", temas.SOCIEDAD, 4, 0),
 Propuesta("Policía única en la Ciudad","No sólo bregaremos para que la ciudad tenga una sola policía: la Metropolitana, sino que al mismo tiempo modificaremos la matriz en que se ha gestado esa fuerza con Macri, a imagen y semejanza de la Bonaerense y de la Federal, con su carga de autoritarismo y corrupción. Forjaremos otra policía, de mejor formación en todos los terrenos, con trabajo científico para combatir el delito y no para encubrirlo, para cuidar a los porteños y no para asustarlos", temas.SEGURIDAD, 4, 0),
 Propuesta("Ayudaremos a los universitarios con el Boleto Estudiantil","", temas.EDUCACION, 4, 0),

//Sergio Abrebaya
Propuesta("Investigar el delito","Sin investigación del delito no hay seguridad. La gente necesita saber que al denunciar un delito va a obtener respuesta por parte de la justicia. Para que esa justicia exista hay que estimular la denuncia y castigar al funcionario policial que la desaliente.", temas.SEGURIDAD, 4, 1),
Propuesta("Mapa del delito","Elaborar un mapa del delito oficial: para que la policía pueda actuar certeramente y prevenir hechos de inseguridad en las zonas afectadas.", temas.SEGURIDAD, 4, 1),
Propuesta("Denuncias","Penar especialmente a quien no toma las denuncias.", temas.SEGURIDAD, 4, 1),
Propuesta("Policía","Elección de un jefe de policía por voto popular: unificación de las fuerzas policiales bajo una sola autoridad. Capacitación policial.", temas.SEGURIDAD, 4, 1),
Propuesta("Fiscalías","Descentralizar las fiscalías hacia todas las comunas y ponerlas bajo las órdenes de la 'Policía Judicial', que conformaría el Área de Investigación del Delito.", temas.SEGURIDAD, 4, 1),
Propuesta("Policía Metropolitana","Como lo han hecho otras provincias por otras cuestiones, demandar ante la Corte Suprema de Justicia Nacional el traspaso de la Policía Federal a la Ciudad con sus fondos y unificar las fuerzas de seguridad: hoy conviven en la Ciudad la Policía Federal, la Policía Metropolitana, la Prefectura y la Gendarmería.", temas.SEGURIDAD, 4, 1),
Propuesta("Créditos Hipotecarios","Créditos hipotecarios a 40 años y que la hipoteca de la vivienda sea la única garantía requerida. El Banco Ciudad puede ser la herramienta política con la cual se otorgue la hipoteca.", temas.VIVIENDA, 4, 1),
Propuesta("Garantía de Alquileres","Poner en funcionamiento la Ley de Garantía Bancaria de Alquileres del Banco Ciudad, de la que soy autor. Se trata de una garantía bancaria que permite alquilar a aquel ciudadano que no consigue una garantía real. Esta medida tendería a eliminar la venta de 'garantías reales truchas'. También se vería beneficiado aquel que aún vive con un familiar porque no consigue garantía o aquel que paga un alquiler caro en viviendas precarias porque no puede formalizar un alquiler por falta de garantía. La ley además establece que la persona que cumplió con la garantía bancaria de alquiler mejore en un futuro su acceso a un crédito hipotecario.", temas.VIVIENDA, 4, 1),
Propuesta("Vivienda Social","el Estado debe promover la construcción de vivienda social, pero con mejores instrumentos que los que cuenta hoy: con fondos propios y también en acuerdo con las organizaciones sindicales, como experiencias que ya han ocurrido en la Ciudad.", temas.VIVIENDA, 4, 1),
Propuesta("Subte","Ampliar la red de subte a 100 km: es urgente incrementar la construcción del subte al ritmo que la Ciudad necesita, comenzando por las líneas G y F ya proyectadas. Hay que avanzar, además, con el soterramiento del tren Sarmiento, cuya traza divide la Ciudad en dos, complicando el tránsito vehicular.", temas.TRANSPORTE, 4, 1),
Propuesta("Colectivos","Ampliar la red de carriles exclusivos para colectivos: este transporte moviliza el 70% de los viajes diarios. Los carriles exclusivos deben llegar al límite de la Ciudad y  también en las vías rápidas de acceso.", temas.TRANSPORTE, 4, 1),
Propuesta("Circulación durante manifestaciones","Carril libre obligatorio en manifestaciones: como todos sabemos y padecemos, las movilizaciones con cortes de calles en la Ciudad se multiplicaron en la última década, interrumpiendo la libre circulación de los porteños mientras la policía mira sin poder hacer nada. Todo ciudadano tiene derecho constitucional a la protesta en la vía pública. De igual manera, los que elegimos seguir con nuestras actividades deberíamos poder circular libremente sin inconvenientes. Mi propuesta consiste en la creación de 2 carriles de libre circulación garantizada en avenidas y para transporte público, ambulancias y fuerzas policiales.", temas.TRANSPORTE, 4, 1),
Propuesta("Articulación Educación y Trabajo","Elaborar una relación directa de los proyectos educativos, por institución, con la universidad y el mundo laboral.", temas.EDUCACION, 4, 1),
Propuesta("Tecnología","El conocimiento se coconstruye, transmite y descubre contenidos, competencia y saberes. La nueva escuela es mundo de interacción, que debe incorporar los nuevos modelos tecnológicos.", temas.EDUCACION, 4, 1),
Propuesta("Excelencia","Construir una escuela inclusiva en la excelencia. Sin exigencia no hay cambio.", temas.EDUCACION, 4, 1),
Propuesta("Autonomía pedagógica","Escuela con proyecto propio, capacidad de decisión sobre calidad, docentes y más autonomía en lo pedagógico.", temas.EDUCACION, 4, 1),
Propuesta("Convivencia","Un espacio de convivencia donde se escucha y entiende la cultura de los jóvenes.", temas.EDUCACION, 4, 1),
Propuesta("Planes de Estudio","Elaboración de planes de estudios flexibles, pensados para la salida laboral, con  intereses vocacionales y con proyección en la continuidad en los estudios, incluyendo materias optativas y cuatrimestrales en el secundario, para que el alumno pueda diseñar su plan de estudio.", temas.EDUCACION, 4, 1),
Propuesta("Sistema Flexible","Sistema educativo flexible y permeable a la novedad.", temas.EDUCACION, 4, 1),
Propuesta("Integración en el sistema","Una escuela que interactúa con el mundo del trabajo, de la producción, de los servicios y de las organizaciones sociales.", temas.EDUCACION, 4, 1),
Propuesta("Educar es un trabajo en equipo", " ", temas.EDUCACION, 4, 1),
Propuesta("Bulling","Ampliar la aplicación de la Ley de Mediación Escolar -de mi autoría- para prevenir conflictos como el bulling y desarrollar una cultura de armonía y convivencia.", temas.EDUCACION, 4, 1),
Propuesta("Infraestructura","Infraestructura adecuada al nuevo modelo pedagógico.", temas.EDUCACION, 4, 1),
Propuesta("Arte y deportes","Ampliar los espacios de educación artística y de prácticas deportivas.", temas.EDUCACION, 4, 1),
Propuesta("Orientaciones","La Ciudad recupera por decisión propia la mayoría de las orientaciones históricas perdidas ante el Consejo Federal de Educación en el 2013/14.", temas.EDUCACION, 4, 1),

//Gustavo Vera
Propuesta(" Combatir la inseguridad que genera la corrupción y el crimen organizado (narcotráfico, talleres clandestinos, prostíbulos, etc.) impulsando la detención de los mafiosos; la incautación de los bienes y su reutilización social","", temas.SEGURIDAD, 5, 0),
Propuesta("  Depurar las cúpulas corruptas de las comisarías y elección ciudadana de los comisarios. ","", temas.SEGURIDAD, 5, 0),
Propuesta(" Exigir el traspaso de la Policía Federal con todos sus recursos. ","", temas.SEGURIDAD, 5, 0),
Propuesta(" Incorporar al mercado los 370 mil inmuebles ociosos para abaratar el precio de los alquileres","", temas.VIVIENDA, 5, 0),
Propuesta("Cobrar un impuesto progresivo a los grandes propietarios de viviendas ociosas que no las destinen a alquilar para aumentar el fondo destinado a créditos hipotecarios","", temas.VIVIENDA, 5, 0),
Propuesta(" Flexibilizar los requisitos de acceso al crédito hipotecario para que cualquier familia trabajadora pueda tener una vivienda. Incrementar el presupuesto del IVC destinado a viviendas sociales","", temas.VIVIENDA, 5, 0),
Propuesta(" Urbanizar integralmente las villas construyendo solo una vivienda por familia a pagar en cuotas, hospitales, escuelas y servicios básicos","", temas.VIVIENDA, 5, 0),
Propuesta(" Universalizar la construcción de jardines maternales en todas las comunas","", temas.EDUCACION, 5, 0),
Propuesta(" Declarar al sudoeste de la CABA en emergencia educativa: construcción de 40 escuelas nuevas; limitar a 25 la cantidad de alumnos por grado y pagar un adicional al docente por zona de alta vulnerabilidad social","", temas.EDUCACION, 5, 0),
Propuesta(" Modificar la dieta en los comedores escolares para garantizar una alimentación saludable","", temas.EDUCACION, 5, 0),
Propuesta(" Incorporar en los lineamientos curriculares las problemáticas de trata, narcotráfico y violencia de género. Construir alertas con la comunidad educativa contra estos flagelos","", temas.EDUCACION, 5, 0),
Propuesta(" Jerarquizar y mejorar las condiciones laborales en las áreas de terapistas, anestesistas y enfermería que permita cubrir las cientos de vacantes existentes y agilizar la atención al vecino en operaciones de mediana complejidad","", temas.SALUD, 5, 0),
Propuesta(" Resolver los problemas edilicios, de infraestructura y de falta de personal en los Centros de Atención Primaria de la Salud (CeSac)","", temas.SALUD, 5, 0),
Propuesta(" Ejecutar de las obras que demanda la ley 1769/05 de construcción de un Hospital de 250 camas y sector de alta complejidad en el barrio de Lugano","", temas.SALUD, 5, 0),
Propuesta("Cumplir con la ley que obliga a construir un centro de atención integral para adicciones por comuna","", temas.SALUD, 5, 0),
Propuesta("Construir distritos productivos pero obligando a las empresas a afectar como mínimo el 50% de los puestos de trabajo a desocupados de la C.A.B.A. respetando la legislación laboral vigente.","", temas.ECONOMIA, 5, 0),
Propuesta("Crear el programa 'Mi primer empleo' con incentivo estatal, articulado con la escuela secundaria y el ámbito privado.","", temas.ECONOMIA, 5, 0),
Propuesta("Impulsar la incautación de las máquinas de los 3000 talleres clandestinos que operan en C.A.B.A. y su reconversión en cooperativas gestionadas por los trabajadores en condiciones dignas","", temas.ECONOMIA, 5, 0),
Propuesta("Crear el registro público de empresas que utilicen trabajo esclavo o informal y declarar que las mismas no pueden ser proveedoras del Estado en el ámbito de la C.A.B.A","", temas.ECONOMIA, 5, 0),
Propuesta("Avanzar hacia un Sistema Público Integrado de Transporte que conecte colectivos, trenes, subtes y bicisendas","", temas.TRANSPORTE, 5, 0),
Propuesta("Ampliar la red de subterráneos: extensión de la Línea A (Plaza de Mayo - La Boca); construcción de las líneas F (Constitución - Plaza Italia) y G (Retiro - Villa Crespo)","", temas.TRANSPORTE, 5, 0),
Propuesta("Rebajar la tarifa del subte para hacerla accesible a los usuarios","", temas.TRANSPORTE, 5, 0),
Propuesta("Combatir la inseguridad en el transporte público creando con Policía Metropolitana una Unidad Especial y un sistema de alarmas y emergencias en paradas de colectivos, subtes y bicisendas","", temas.TRANSPORTE, 5, 0),
Propuesta("Garantizar en las cabeceras de subterráneos y principales centros de trasbordo, lugares seguros y gratuitos para la guarda de bicicletas","", temas.TRANSPORTE, 5, 0),
Propuesta("Auditar las concesiones sospechadas de sobreprecios, revisar los contratos de recolección de residuos húmedos y aplicar un sistema eficiente que garantice el servicio en toda la C.A.B.A","", temas.MEDIO_AMBIENTE, 5, 0),
Propuesta("Jerarquizar la Dirección de Reciclado para organizar el trabajo de las cooperativas lo que permitiría recuperar un 50% más de material reciclable","", temas.MEDIO_AMBIENTE, 5, 0),
Propuesta("Ejecutar un Plan de Desarrollo Urbano Integral en los barrios construidos por el IVC que incluya iluminación, recolección de residuos, forestación, transporte, etc","", temas.MEDIO_AMBIENTE, 5, 0),
Propuesta("Planificar la poda de árboles respetando los tiempos de cada especie","", temas.MEDIO_AMBIENTE, 5, 0),
Propuesta("Colocar luminarias en los corredores inseguros cuidando el arbolado público","", temas.MEDIO_AMBIENTE, 5, 0),

//Claudio Lozano
Propuesta("Consejos escolares comunales con participación protagónica de estudiantes, docentes, directivos y vecinos para una escuela democrática","", temas.EDUCACION, 8, 0),
Propuesta("Prioridad para la educación pública de gestión estatal. Control y transparencia en el aporte a las escuelas de gestión privada","", temas.EDUCACION, 8, 0),
Propuesta("Ley de paritarias docentes","", temas.EDUCACION, 8, 0),
Propuesta("Boleto educativo gratuito para estudiantes, docentes y trabajadores de la educación", "", temas.EDUCACION, 8, 0),
Propuesta("Ley de presupuesto mínimo obligatorio, incrementar de forma progresiva hasta alcanzar un piso del 30%", "", temas.EDUCACION, 8, 0),
Propuesta("Emergencia en infraestructura escolar: Construcción de nuevas escuelas y plan de refacciones, empezando por la zona sur y el nivel inicial (45 días a 5 años).  Empresa estatal que centralice la realización de obras en escuelas", "", temas.EDUCACION, 8, 0),
Propuesta("Centros especializados en tratamiento de adicciones","", temas.SALUD, 8, 0),
Propuesta("Ampliar la atención a las problemáticas de salud mental","", temas.SALUD, 8, 0),
Propuesta(" Ley de producción pública de medicamentos", "", temas.SALUD, 8, 0),
Propuesta("Decretar la emergencia sanitaria: Aumento del presupuesto en salud.  Nuevos hospitales en zona sur y reformas en las condiciones edilicias de toda la ciudad.  Mejoras laborales a los trabajadores del área.  Compra de todos los insumos y maquinaria necesarios", "", temas.SALUD, 8, 0),
Propuesta("Gestión por parte de la Ciudad de las 33 líneas de colectivo que son de su jurisdicción. Reordenar recorridos para beneficio de los ciudadanos", "", temas.TRANSPORTE, 8, 0),
Propuesta(" Creación de una línea estatal que conecte el sur con el norte de la Ciudad","", temas.TRANSPORTE, 8, 0),
Propuesta("Suspensión a la concesionaria del subte Metrovías","", temas.TRANSPORTE, 8, 0),
Propuesta("Ampliación de las líneas de subte y construcción de las líneas F, G e I", "",temas.TRANSPORTE, 8, 0),
Propuesta("Carriles exclusivos para autos con plena ocupación","", temas.TRANSPORTE, 8, 0),
Propuesta("Institucionalización del Área Metropolitana para la planificación de políticas públicas", "",temas.TRANSPORTE, 8, 0),
Propuesta("Pase a planta de los trabajadores contratados de forma precaria", "",temas.ECONOMIA, 8, 0),
Propuesta("Formalización de actividades de la economía popular: cuentapropistas, recuperadores urbanos, legalización de circuitos de ferias y trabajadores de la vía pública", "",temas.ECONOMIA, 8, 0),
Propuesta(" Ley de protección de las fábricas recuperadas","", temas.ECONOMIA, 8, 0),
Propuesta("Créditos a la producción cooperativa y a la pequeña y mediana empresa generadora de empleo","", temas.ECONOMIA, 8, 0),
Propuesta("Modificación del programa Ciudadanía Porteña, para garantizar un ingreso mínimo en todos los hogares igual a la Canasta de Bienes y Servicios", "", temas.ECONOMIA, 8, 0),
Propuesta("Plan de financiación y fomento de Centros Culturales y barriales", "", temas.SOCIEDAD, 8, 0),
Propuesta("Revalorización del Programa Cultural en Barrios del Ministerio de Cultura","", temas.SOCIEDAD, 8, 0),
Propuesta("Refundar las escuelas de arte: ingreso irrestricto, becas y reforma plan de estudios", "", temas.SOCIEDAD, 8, 0),
Propuesta("Fortalecimiento de la producción de vivienda a través de formas cooperativas, autogestionarias y de empresas estatales", "", temas.VIVIENDA, 8, 0),
Propuesta("Banco de inmuebles públicos y recuperación de tierras de la ciudad en manos del Estado Nacional para la asignación social", "", temas.VIVIENDA, 8, 0),
Propuesta("Creación de una defensoría de inquilinos", "", temas.VIVIENDA, 8, 0),
Propuesta("Relanzamiento de la Ley de Emergencia Habitacional para evitar desalojos","", temas.VIVIENDA, 8, 0),
Propuesta("Reforma del código de planeamiento urbano para la regulación de la obra pública", "",temas.PLANEAMIENTO_URBANO, 8, 0),
Propuesta("Creación de un ministerio de hábitat y vivienda: Regulación de alquileres.  Control a la especulación inmobiliaria.  Línea de créditos destinados a sectores medios y populares.  Reurbanización con radicación de villas y asentamientos.  Plan de construcción de viviendas sociales, para una democratización de los beneficios urbanos sin divisiones de norte-sur", "", temas.PLANEAMIENTO_URBANO, 8, 0),
Propuesta("Nuevo código de conducta policial y revisión seria de antecedentes","", temas.SEGURIDAD, 8, 0),
Propuesta("Auditorias de control al desempeño de las fuerzas de seguridad en la ciudad (federal, metropolitana, gendarmería y prefectura)", "",temas.SEGURIDAD, 8, 0),
Propuesta("Campañas de prevención que apunten al desarme y reducción de violencia social","", temas.SEGURIDAD, 8, 0),
Propuesta("Consejo de seguridad ciudadano, que permita el control de las fuerzas de seguridad por parte de los vecinos. ","", temas.SEGURIDAD, 8, 0),
Propuesta("Democratización del Estado","", temas.INSTITUCIONAL, 8, 0),
Propuesta(" Presupuesto participativo","", temas.INSTITUCIONAL, 8, 0),
Propuesta("Planeamiento urbano concertado con organizaciones y vecinos, con poder de decisión en las temáticas de cada comuna","", temas.INSTITUCIONAL, 8, 0),
Propuesta("Acceso público a toda la información y transparencia en las licitaciones de obras","", temas.INSTITUCIONAL, 8, 0),
Propuesta("Libertad y democracia sindical para los trabajadores del Estado de la Ciudad","", temas.INSTITUCIONAL, 8, 0),
Propuesta("Más presupuesto para las comunas con mayores desigualdades sociales", "", temas.INSTITUCIONAL, 8, 0),
Propuesta("Diseñar y ejecutar políticas para garantizar la prevención, asistencia y erradicación de todas las formas de violencia hacia las mujeres y las diversidades sexuales","", temas.DERECHOS_HUMANOS, 8, 0),
Propuesta("Combatir el delito de trata de mujeres y niñas y la connivencia con las redes de seguridad","", temas.DERECHOS_HUMANOS, 8, 0),
Propuesta("Consejerías pre y post aborto en todos los hospitales y centros salud. Cumplimiento del protocolo de aborto no punible","", temas.DERECHOS_HUMANOS, 8, 0),
Propuesta("Aumento del presupuesto para el consejo, las defensorías y los programas que atañen a la niñez","", temas.DERECHOS_HUMANOS, 8, 0),
Propuesta("Plan de fomento a clubes de barrio e instituciones deportivas","", temas.DERECHOS_HUMANOS, 8, 0),
Propuesta("Incremento presupuestario a los centros de formación profesional (cfp)","", temas.DERECHOS_HUMANOS, 8, 0),
Propuesta("Asignaciones Familiares a cargo del gobierno de la ciudad","", temas.DERECHOS_HUMANOS, 8, 0),
Propuesta("Gestión integral de residuos","", temas.MEDIO_AMBIENTE, 8, 0),
Propuesta("Cumplir la ley basura cero incluyendo a todos los actores y a todas las fracciones de residuos","", temas.MEDIO_AMBIENTE, 8, 0),
Propuesta("Regulación de la producción de envases y embalajes, y promoción de sistemas de retorno","", temas.MEDIO_AMBIENTE, 8, 0),
Propuesta("  Plan de estatización del servicio de recolección de residuos y adquisición de maquinarias.  ","", temas.MEDIO_AMBIENTE, 8, 0),
Propuesta("Espacios verdes.  Participación popular en las decisiones sobre parques y plazas. ","", temas.MEDIO_AMBIENTE, 8, 0),
Propuesta(" Incremento de espacios verdes existentes con distribución equitativa por comunas.  ","", temas.MEDIO_AMBIENTE, 8, 0),
Propuesta(" Saneamiento de la Cuenca Matanza – Riachuelo. ","", temas.MEDIO_AMBIENTE, 8, 0),
Propuesta("   Legislación que consagre una ciudad libre de industrias contaminantes.  ","",temas.MEDIO_AMBIENTE, 8, 0),
Propuesta(" Plan de reducción de emisión de gases de efecto invernadero de la ciudad.   ","", temas.MEDIO_AMBIENTE, 8, 0),
Propuesta(" Mejoras en infraestructura para evitar inundaciones. ","", temas.MEDIO_AMBIENTE, 8, 0),

//Myriam Bregman
Propuesta('Salario mínimo igual al costo de la canasta familiar','Salario mínimo igual al costo de la canasta familiar indexado periódicamente según el aumento real del costo de vida. Derogación del impuesto al salario. Asignaciones familiares para todos',temas.ECONOMIA, 9,0),
Propuesta('Reestablecimiento del 82% móvil','Reestablecimiento del 82% móvil. Pago de las retroactividades correspondientes. Que la ANSES esté bajo la administración directa de jubilados y trabajadores.',temas.ECONOMIA, 9,0),
Propuesta('Reparto de las horas de trabajo con igual salario','Reparto de las horas de trabajo con igual salario para terminar con la desocupación. Prohibición de despidos y suspensiones.',temas.ECONOMIA, 9,0),
Propuesta('Basta de tercerización','Basta de tercerización. Todos a planta permanente, con vigencia del convenio más favorable. Abajo las leyes flexibilizadoras.',temas.ECONOMIA, 9,0),
Propuesta('Basta de espionaje a los luchadores','Basta de espionaje a los luchadores, que se haga pública la base de datos de "Proyecto X" y que se entregue la información a quienes fueron espiados. Basta de infiltración de las organizaciones populares. Cese de la persecución y anulación de las causas judiciales contra los más de 5.000 luchadores obreros y populares. Absolución de los trabajadores de Las Heras.',temas.SOCIEDAD, 9,0),
Propuesta('Expropiación definitiva sin pago de Zanón','Expropiación definitiva sin pago de Zanón y demás fábricas recuperadas.',temas.ECONOMIA, 9,0),
Propuesta('No al pago de la deuda externa','No al pago de la deuda externa. Recursos para salarios, trabajo, salud, educación y vivienda, no para la deuda. ',temas.ECONOMIA, 9,0),
Propuesta('Reestatización de todas las privatizadas','Reestatización de todas las privatizadas bajo control administración y gestión de trabajadores y usuarios. Reestatización de todo el sistema ferroviario bajo control, administración y gestión de los trabajadores de todos los niveles y usuarios.',temas.ECONOMIA, 9,0),
Propuesta('Renacionalización del 100% de YPF y todas las empresas petroleras','Renacionalización del 100% de YPF y todas las empresas petroleras: por una empresa nacional estatal única que funcione bajo el control y la gestión de sus trabajadores. Por un plan nacional energético controlado por los trabajadores. Nacionalización -sin indemnización y bajo administración y control de trabajadores-, de la banca y el comercio exterior, la minería y el gran capital agrario e industrial. Por un plan económico debatido y gestionado por los trabajadores. ',temas.ECONOMIA, 9,0),
Propuesta('Por la expropiación de la oligarquía terrateniente','Por la expropiación de la oligarquía terrateniente, de los grandes pools de siembra, así como de los monopolios cerealeros, aceiteros y frigoríficos. Por la nacionalización de la tierra, comenzando con la expropiación de los 4000 principales propietarios, respetando los derechos de los campesinos pobres, pueblos originarios y pequeños chacareros que no exploten mano de obra asalariada". No a la expulsión de sus tierras de campesinos y originarios. Juicio y castigo a los responsables de los asesinatos de los QOM de Formosa, y plena satisfacción a los reclamos. Basta de trabajo en negro para los trabajadores rurales. ',temas.ECONOMIA, 9,0),
Propuesta('Defensa de la educación y salud públicas y gratuitas','Defensa de la educación y salud públicas y gratuitas. Basta de subsidio a la educación privada. Fuera la iglesia de la educación. Abajo la Ley de Educación Superior. Que el Estado deje de financiar a la Iglesia Católica. Contra la estafa de las pre-pagas y el negocio de las clínicas y sanatorios privados. Por un sistema nacional de salud público y universal, a cargo del Estado. Por una educación nacional única, estatal, gratuita y laica.',temas.EDUCACION, 9,0),
Propuesta('Defensa de la educación y salud públicas y gratuitas','Defensa de la educación y salud públicas y gratuitas. Basta de subsidio a la educación privada. Fuera la iglesia de la educación. Abajo la Ley de Educación Superior. Que el Estado deje de financiar a la Iglesia Católica. Contra la estafa de las pre-pagas y el negocio de las clínicas y sanatorios privados. Por un sistema nacional de salud público y universal, a cargo del Estado. Por una educación nacional única, estatal, gratuita y laica.',temas.SALUD, 9,0),
Propuesta('Por la provisión de medicamentos gratuitos a quienes lo necesitan','Nacionalización sin pago de los laboratorios que lucran con la salud del pueblo. Por la provisión de medicamentos gratuitos a quienes lo necesitan. Por la expulsión de la burocracia sindical de las obras sociales, y su control democrático por parte de comités de trabajadores elegidos en la base.',temas.SALUD, 9,0),
Propuesta('Eliminación del IVA y de los impuestos al consumo','Eliminación del IVA y de los impuestos al consumo. Impuestos progresivos a las grandes fortunas. Impuestos extraordinarios a los grandes capitalistas (banqueros, terratenientes y empresarios) para resolver las necesidades más acuciantes del pueblo trabajador. ',temas.ECONOMIA, 9,0),
Propuesta('Fuera la burocracia sindical patronal de los ferrocarriles','Fuera la burocracia sindical patronal de los ferrocarriles. Reestatización del sistema ferroviario bajo control y gestión de los trabajadores de todos los niveles. Juicio y castigo a los responsables de la masacre de Once.',temas.TRANSPORTE, 9,0),
Propuesta('Perpetua para todos los culpables del crimen de Mariano Ferreyra','Perpetua para todos los culpables del crimen de Mariano Ferreyra (UGOFE, Policía, Pedraza y su patota).',temas.SOCIEDAD, 9,0),
Propuesta('Fuera la burocracia de los sindicatos','Fuera la burocracia de los sindicatos. Por la independencia de los mismos del gobierno y el Estado. Abajo la Ley de Asociaciones Profesionales. Por la más plena democracia sindical. Personería gremial ya al nuevo sindicato del subte. Por el derecho de los trabajadores a organizarse, sin la ingerencia y el control estatal. Por elección de paritarios en asamblea. Apoyo al sindicalismo combativo y antiburocrático. ',temas.ECONOMIA, 9,0),
Propuesta('Fuera el FMI y la patota kirchnerista del INDEC','Fuera el FMI y la patota kirchnerista del INDEC. Restitución de todo el personal desplazado. Por un INDEC administrado por sus trabajadores y técnicos, independiente de cualquier gobierno patronal.',temas.ECONOMIA, 9,0),
Propuesta('Aparición con vida de Jorge Julio López','Aparición con vida de Jorge Julio López. Cárcel a los asesinos materiales y políticos de Carlos Fuentealba. Cárcel perpetua y común para todos los genocidas, a los responsables de los crímenes de la Triple A y a los asesinos del gatillo fácil. No a la baja de la edad de imputabilidad. Fuera la Gendarmería y policía de los barrios populares. Anulación de la ley "antiterrorista',temas.SOCIEDAD, 9,0),
Propuesta('Por el derecho al aborto legal, seguro y gratuito','Por el derecho al aborto legal, seguro y gratuito. Anticonceptivos para no abortar, aborto legal para no morir. Por los derechos de la mujer trabajadora. Por el desmantelamiento de las redes de trata. A igual trabajo, igual salario. Guarderías gratuitas en los lugares de trabajo y estudio. Por plena libertad para todas y todos de ejercer la elección de su sexualidad. Contra toda forma de opresión sexual. Abajo los edictos persecutorios y cualquier forma de opresión o discriminación contra gays, lesbianas, travestis, intersexuales y transexuales.',temas.DERECHOS_HUMANOS, 9,0),
Propuesta('Vivienda para los trabajadores','Vivienda para los trabajadores. Por un plan de viviendas populares y urbanización de las villas y asentamientos. Por impuestos progresivos a las viviendas ociosas de los especuladores inmobiliarios. No a la criminalización de los ocupantes del Indoamericano y de otras luchas por la tierra.',temas.VIVIENDA, 9,0),
Propuesta('Por un plan de obras públicas','Por un plan de obras públicas, saneamiento, prevención de inundaciones y cloacas bajo control de trabajadores y organizaciones barriales, empadronando y asegurando trabajo con convenio a los desocupados. Por la derogación de los códigos urbanos que sirven al capital financiero e inmobiliario. Por una planificación urbana debatida y dirigida por representantes de las organizaciones vecinales, populares y de trabajadores.',temas.PLANEAMIENTO_URBANO, 9,0),
Propuesta('Que todo legislador, funcionario estatal o juez gane lo mismo que un obrero especializado o un maestro','Que todo legislador, funcionario estatal o juez gane lo mismo que un obrero especializado o un maestro. Revocabilidad de todos los mandatos por los propios electores. Abolición del Senado y de la institución presidencial con poderes de monarca. Por una cámara única, con miembros elegidos utilizando el conjunto del país como distrito único.',temas.VIVIENDA, 9,0),
Propuesta('Que se ponga fin a los privilegios de los jueces','Que se ponga fin a los privilegios de los jueces, como la inmovilidad en sus cargos y las exenciones impositivas. Que todo juez gane lo mismo que un docente. Que cesen en sus cargos todos los jueces en funciones que juraron por el estatuto de la dictadura. No al Consejo de la magistratura y a al actual método de designación de los magistrados. Que los jueces sean elegidos por el voto popular. Que sus cargos puedan ser revocados por sus electores.',temas.INSTITUCIONAL, 9,0),
Propuesta('Por un gobierno de los trabajadores y el pueblo','Por un gobierno de los trabajadores y el pueblo impuesto por la movilización de los explotados y oprimidos.',temas.SOCIEDAD, 9,0),
Propuesta('Retiro inmediato de las tropas argentinas de Haití','Retiro inmediato de las tropas argentinas de Haití. Fuera ingleses y la OTAN de Malvinas. Contra el bloqueo y cualquier tipo de agresión imperialista contra Cuba. Por una política internacional de apoyo a la rebelión obrera y popular en todo el mundo, por la expulsión del imperialismo de todos los países, por la unidad socialista de América Latina, por el socialismo internacional', temas.INTERNACIONAL, 9,0),
Propuesta('Fuera el imperialismo de medio oriente','Fuera el imperialismo de medio oriente. Abajo la ocupación sionista de Palestina.',temas.INTERNACIONAL, 9,0),

// Zamora

Propuesta("Consultas populares previas y vinculantes para decidir temas de fondo. ","", temas.INSTITUCIONAL, 15, 0),

Propuesta("Sueldos de Jefe de Gobierno, ministros, legisladores y jueces igual al de los docentes","", temas.INSTITUCIONAL, 15, 0),

Propuesta("El presupuesto de la ciudad tiene que ser votado por la población: las prioridades y montos asignados en el presupuesto anual deben ser decididos por el pueblo de la ciudad","", temas.INSTITUCIONAL, 15, 0),

Propuesta("Supresión de los subsidios estatales a las escuelas privadas, montos que se usarán para mejorar la escuela pública","", temas.EDUCACION, 15, 0),

Propuesta("Red descentralizada de servicios priorizando la promoción y prevención de la salud a través de más centros en todos los barrios, articulando con atención domiciliaria y derivación a hospitales para emergencias, internación y estudios de alta complejidad. ","", temas.SALUD, 15, 0),

Propuesta("Producción pública de medicamentos y acceso gratuito. ","", temas.SALUD, 15, 0),

Propuesta("Aumento de presupuesto inmediato para la salud pública","", temas.SALUD, 15, 0),

Propuesta("Asignación de partidas para aumentar los puestos de trabajo de profesionales de la salud","", temas.SALUD, 15, 0),

Propuesta("Necesitamos evitar la sobrecarga de trabajo de enfermeras y residentes (sostén del sistema de salud), aumentar sus salarios y poder garantizar una buena calidad de atención para todos/as","", temas.SALUD, 15, 0),

Propuesta("Finalización inmediata del hospital en Lugano","", temas.SALUD, 15, 0),

Propuesta("Construcción cooperativa con asistencia de las carreras de Arquitectura e Ingeniería de Universidades Nacionales. ","", temas.VIVIENDA, 15, 0),

Propuesta("Democratización del Instituto de la Vivienda para su ejecución y control por vecinos elegidos en cada barrio y revocables.  ","", temas.VIVIENDA, 15, 0),

Propuesta("Volcar fondos gravando las actividades financieras y redefiniendo el ABL sobre empresas con mayor capacidad contributiva","", temas.VIVIENDA, 15, 0),

Propuesta("Atacar el gigantesco foco contaminante del Matanza/Riachuelo integrando a la Autoridad de Cuenca a Instituciones barriales y vecinos electos democráticamente y revocables, que garantice la ejecución y control de los planes de saneamiento con técnicos y profesionales de Universidades Nacionales","", temas.MEDIO_AMBIENTE, 15, 0),

Propuesta("Recolección y reciclado a cargo de una empresa de propiedad pública integrada por los recuperadores urbanos. ","", temas.MEDIO_AMBIENTE, 15, 0),

Propuesta("Anulación de los actuales contratos con las empresas privadas. ","", temas.MEDIO_AMBIENTE, 15, 0),

Propuesta("Separación de los residuos secos y húmedos en origen. ","", temas.MEDIO_AMBIENTE, 15, 0),

Propuesta("Contenedores diferenciados en todos los barrios","", temas.MEDIO_AMBIENTE, 15, 0),

Propuesta("Proponemos propiedad pública de las empresas de colectivos y subterráneos para que sean verdaderamente un servicio público","", temas.TRANSPORTE, 15, 0),

Propuesta(" Jornada de seis horas para los conductores de colectivos. ","", temas.TRANSPORTE, 15, 0),

Propuesta("Plan integral para comunicar toda la ciudad y todos los barrios entre sí. ","", temas.TRANSPORTE, 15, 0),

Propuesta("Administración y Control del sistema por una Comisión Pública de Usuarios y Choferes con el equipo técnico de especialistas de Universidades Nacionales que designen para garantizar buenas condiciones de transporte y trabajo","", temas.TRANSPORTE, 15, 0),

Propuesta("Centros Culturales Juveniles por cada barrio. Con presupuesto estatal y gratuitos. Autogestionados por los jóvenes. Con actividades artísticas y para su formación en artes y oficios","", temas.SOCIEDAD, 15, 0),

Propuesta("Ningún cierre ni privatización de los complejos culturales existentes y reapertura de aquellos que fueron cerrados","", temas.SOCIEDAD, 15, 0),

Propuesta("Políticas para combatir las causas de la inequidad social y la exclusión. Investigación de los vínculos políticos, judiciales y de las fuerzas de seguridad con el crimen organizado, las barras bravas así como con la brutalidad represiva de las fuerzas policiales","", temas.SEGURIDAD, 15, 0),

Propuesta("Elección popular de los jueces con mandatos de cuatro años y revocables. Juicios por jurados populares","", temas.SEGURIDAD, 15, 0),

Propuesta("Garantizar la educación sexual integral, el acceso gratuito y masivo a los métodos anticonceptivos y legalizar el aborto libre, seguro y gratuito, reconociendo el derecho a la mujer a decidir libremente la interrupción de su embarazo. ","", temas.DERECHOS_HUMANOS, 15, 0),

Propuesta("Desmantelamiento inmediato de las redes de trata de mujeres con fines de explotación sexual","", temas.DERECHOS_HUMANOS, 15, 0),

Propuesta("Ante la regresividad del sistema aumentar el ABL al 10% de los inmuebles de mayor valor fiscal y a las propiedades inmobiliarias de las grandes empresas, muchas de ellas multinacionales, que tienen domicilio en la ciudad. ","", temas.ECONOMIA, 15, 0),

Propuesta("Gravar con una tasa elevada los millonarios ingresos del juego (Casino, bingos, Hipódromo, y demás casas de apuestas). ","", temas.ECONOMIA, 15, 0),

Propuesta("Aumentar las patentes a los autos de alta gama (y demás bienes suntuarios) radicados o por operaciones de compra-venta en la Ciudad","", temas.ECONOMIA, 15, 0),



//  Ramiro Vassena 13, 0 
Propuesta("Igualdad ante la ley","Sustancial reforma de las leyes que permita la abolición de los inaceptables privilegios e inmunidades que hoy tienen los funcionarios de los poderes Ejecutivo y Legislativo. Consideramos que nuestra Ciudad debería marcar el camino ejemplar para que en Argentina rija de una vez por todas el Imperio de la Ley y se garantice efectivamente que todos somos Iguales en Derechos y Obligaciones.", temas.INSTITUCIONAL, 13, 0 ),

Propuesta("Igualdad ante la Ley","Elevar al máximo las penas para los delitos de corrupción por parte de los funcionarios públicos. El incumplimiento del deber de cualquier funcionario público debe ser castigado con el máximo rigor, y en los primeros niveles de responsabilidad debería ser equivalente al delito de traición a la Patria.", temas.INSTITUCIONAL, 13, 0 ),

Propuesta("Delito","Urgente desmantelamiento de la red del delito que azota las calles y los hogares de nuestros ciudadanos. Pero considera que dicha tarea es imposible si, como ya se señaló, no es acompañada con la drástica moralización de la función pública en todos sus niveles. Detrás de las redes de narcotráfico, trata de personas, usurpaciones y hechos delictivos de la más diversa índole que operan en nuestra Ciudad, existe en muchísimos casos la cómplice inoperancia y hasta a veces la directa asociación de prominentes factores políticos. Para combatir a la delincuencia de raíz, el primer paso es terminar con las mafias que se han enquistado en el propio seno del Estado.", temas.SEGURIDAD, 13, 0 ),
 
Propuesta("Código Contravencional","Urgente modificación del Código Contravencional de la Ciudad, a fin de establecer penas más duras para las faltas en la vía pública, delimitar con claridad las facultades de la Policía Metropolitana, y erradicar la prostitución y el tráfico de drogas de las calles.", temas.SEGURIDAD, 13, 0 ),
 
Propuesta("Defensor del Pueblo","Que el Defensor del Pueblo sea elegido directamente por el voto de los ciudadanos y no por la Legislatura. De esta manera, su designación quedará ajena a eventuales condicionamientos, disputas y/o acuerdos políticos que pudieran suscitarse en el seno del recinto parlamentario. Las condiciones mínimas a reunir por el candidato deberán ser iguales a las que deben cumplirse para la candidatura a Diputado Nacional. En la lista, el Defensor del Pueblo deberá incorporar a sus adjuntos, y en su campaña deberá presentar un programa de gestión, todo esto con el fin de que los ciudadanos conozcan el perfil y los objetivos del postulante. La principal función del Defensor del Pueblo será, como hasta ahora, el controlar a la Administración Pública, aunque ampliándole sus facultades de intervención, a fin de que tenga potestad de cuestionar toda resolución que encuentre contraria a la ley o notoriamente perjudicial para los ciudadanos, y que tenga también el poder de iniciar procesos sumarios contra aquellos funcionarios sospechosos de actividades ilícitas, los cuales luego deberá elevar ate el juzgado correspondiente para que el Poder Judicial avance en la investigación y sanción del delito, si este hecho se verifica.", temas.INSTITUCIONAL, 13, 0 ),
 

Propuesta("Doble Escolaridad","Que en el plazo de tres años, todas las escuelas primarias y secundarias dependientes de la Ciudad de Buenos Aires tengan doble escolaridad, con desayuno, almuerzo y merienda reforzadas, con el fin de mejorar los niveles de educación, al tiempo que se haga una tarea de prevención y contención para que nuestros jóvenes no caigan en la delincuencia o las drogas.", temas.EDUCACION, 13, 0 ),
 
Propuesta("Becas Escolares","Se sume la creación de Becas a la Excelencia, para premiar a los alumnos con los promedios más altos, alentándolos a seguir progresando y ayudando también a sus familias. No sólo debemos proteger a los más necesitados, sino también reconocer y cuidar a nuestro recurso más valioso: el esfuerzo y el talento humanos.", temas.EDUCACION, 13, 0 ),
 
Propuesta("Atención Sanitaria", "Redistribución de las partidas de gastos del presupuesto de la Ciudad, en el que deberá privilegiarse la atención sanitaria gratuita y una efectiva cobertura farmacológica, especialmente de insumos críticos, que requiera todo ciudadano.", temas.SALUD, 13, 0 ),
 
Propuesta("Prevención", "Poner en marcha una batería de medidas de prevención de enfermedades infecto-contagiosas, que eviten en forma rápida y eficiente la propagación de éstas.", temas.SALUD, 13, 0 ),
 
Propuesta("Atención Primaria", "Descentralizar las bocas de atención primaria de los centros de alta complejidad, aumentando el horario de atención al público en un 100%; la infraestructura hospitalaria se utilizará durante más horas y se distribuirán los recursos humanos remanentes de otras áreas para reforzar la de salud.",  temas.SALUD, 13, 0 ),

Propuesta("Censo para Acción Sanitaria", "Censo domiciliario a cargo de agentes de salud en toda la Ciudad, que durará 2 meses, a fin de tener una base de datos real que permitirá planificar la acción sanitaria a mediano y largo plazo. Se tendrá de esta forma un panorama concreto de los padecimientos patológicos que aquejan a sus habitantes, tratamientos instaurados, cumplimiento o no de los mismos, necesidades sanitarias insatisfechas, nivel de educación, ración alimentaria diaria, libreta sanitaria, control del cronograma de vacunación, etc.", temas.SALUD, 13, 0 ),
 
Propuesta("Medicamentos básicos", "reactivación de los laboratorios de los hospitales para la producción de medicamentos básicos, a fin de brindar la cobertura a todos los centros de salud dependientes del gobierno de la Ciudad, más los necesarios para la atención en domicilio, ambulancias y móviles.", temas.SALUD, 13, 0 ),

Propuesta("Emergencia Social, Sanitaria y Económica", "Declaración de la Emergencia Social, Sanitaria y Económica en la Ciudad. Vivimos en tiempos en los que hay cientos de colegios sin las mínimas condiciones edilicias para albergar a nuestros chicos y jóvenes, en los que los hospitales de la Ciudad están colapsados, y donde miles de personas sobreviven y duermen todas las noches en las calles buscando en la basura un mínimo sustento. Nuestro Partido sostiene que la solución de todos estos problemas deben ser la primera preocupación para los integrantes de la Jefatura de Gobierno y los miembros de la Legislatura de la Ciudad.", temas.ECONOMIA, 13, 0 ),

Propuesta("Emergencia Social, Sanitaria y Económica", "Con la declaración de la Emergencia Social, Sanitaria y Económica, Bandera Vecinal plantea que el Presupuesto deberá dar prioridad absoluta a la Salud, la Educación y la Obra Pública, reduciendo al mínimo indispensable las partidas de Turismo, Publicidad y demás rubros que en la actualidad son superfluos. Es inmoral que se dilapiden fondos públicos en eventos para visitantes extranjeros o para grupos sociales reducidos, mientras la Ciudad está sumida en la pobreza, la marginalidad y la delincuencia.", temas.ECONOMIA, 13, 0 ),

Propuesta("Impuestos", "Para ayudar al desarrollo comercial e industrial, atendiendo especialmente la difícil situación que atraviesan muchas Pymes, promovemos la sustancial reducción del Impuesto a los Ingresos Brutos.", temas.ECONOMIA, 13, 0 ),

Propuesta("Libertad de Opinión", "Derogación de toda normativa que restrinja la libertad de opinión, expresión y/o investigación. En el siglo XXI, entendemos que esta libertad es fundamental para nuestra evolución como sociedad democrática, y que cualquier intento de cercenamiento o proscripción de ideas atenta contra la esencia misma de nuestra República.", temas.DERECHOS_HUMANOS, 13, 0 ),

Propuesta("Malvinas", "Las Islas Malvinas, Georgias del Sur y Sandwich del Sur fueron, son y serán Argentinas. Como partido político, rechazamos cualquier intento de negociación internacional que pretenda desconocer nuestra soberanía sobre esos territorios usurpados. Reivindicamos a nuestros heroicos Veteranos de Guerra y rechazamos la discriminación y marginación que han padecido desde 1982 hasta el presente.", temas.INTERNACIONAL, 13, 0 ),

// Enrique Piragini
Propuesta("Promover el desarrollo e implementación de un Plan de Seguridad Integral, que contemple no solo el accionar de las fuerzas policiales o de seguridad sino también el accionar de la justicia y las acciones preventivas pertinentes","", temas.SEGURIDAD, 14, 0),

Propuesta("Exigiremos transparencia en los procesos políticos, en la administración de las finanzas públicas, en los actos de gobierno y en los procedimientos de licitaciones y contratos de acuerdo con la legislación local, prevenir los abusos y mantener la confianza pública","", temas.INSTITUCIONAL, 14, 0),

Propuesta("El mantenimiento y limpieza de los espacios públicos.  En este sentido, cabe tener presente la falta de higiene provocada por las tareas que desempeñan los recuperadores urbanos en la vía pública, entendiendo que corresponde remediar la misma,a través de la normatización adecuada, con plena intervención  y coordinación de la Dirección General de Reciclado","", temas.PLANEAMIENTO_URBANO, 14, 0),

Propuesta("El reordenamiento del espacio público, de los permisos y habilitaciones de puesto de venta en la vía pública, vendedores ambulantes y artesanos","", temas.PLANEAMIENTO_URBANO, 14, 0),

Propuesta("Instar al Poder Ejecutivo a encuadrar los programas de prevención de Seguridad vial dentro del marco conceptual de los derechos humanos. La inseguridad vial, con su secuela de muerte y lesiones, vulnera el derecho a la vida, a la integridad física","", temas.TRANSPORTE, 14, 0),

Propuesta("A partir de la instalación del Metrobus, y consecuente modificación de recorridos de las líneas de colectivos, resulta necesario reestructurar y alentar la sectorización de nuevos lugares públicos para el estacionamiento de vehículos particulares","", temas.TRANSPORTE, 14, 0),

Propuesta("Revisión de las arterias por las que circula el tránsito pesado ante la constatación de la circulación de camiones y vehículos de gran porte por arterias que no se encuentran comprendidas en la Red de Tránsito Pesado, establecido mediante Ley 216","", temas.TRANSPORTE, 14, 0),

Propuesta("Cuenca Matanza- Riachuelo. Necesidad del manejo sistémico de la Cuenca. Control de vertido de desagues cloacales y pluviales, de líquidos , compuestos orgánicos, de metales y otros elementos contaminantes. Todo ello, a fin del efectivo cuidado de los recursos naturales, la recuperación del ecosistema  y promoción del desarrollo ambientalmente sustentable","", temas.MEDIO_AMBIENTE, 14, 0),

Propuesta("Adecuar el procesamiento de los residuos domiciliarios. Eliminar la superficie de basurales clandestino y/o a cielo abierto, ya que representan focos infecciosos para las personas que conviven con la basura acumulada pero que a su vez viven de ella por obtener material para reciclar. Relocalizar la población permanente de los basurales que se incrementa en forma permanente","", temas.MEDIO_AMBIENTE, 14, 0),

Propuesta("El ordenamiento del tránsito, circulación de camiones y todo tipo de reparto y distribución de mercaderías","", temas.TRANSPORTE, 14, 0),

Propuesta("Fortalecer la salud a partir de la medicina preventiva, implementando el Boletín de Salud en todas la escuelas públicas de nivel inicial y primaria, con el fin de detectar tempranamente afecciones y patologías","", temas.SALUD, 14, 0),

Propuesta("Implementación de planes integrales de prevención y asistencia a las adicciones  de sustancias y otras prácticas de riesgo adictivo","", temas.SALUD, 14, 0),

Propuesta("Estimular las actividades artísticas en todas sus dimensiones : dibujo.pintura- literatura-música- danzas. ","", temas.EDUCACION, 14, 0),

Propuesta("Propiciar el hábito lector como fuente para alcanzar otros conocimientos, pudiendo disfrutar de las bibliotecas escolares como también las bibliotecas públicas. ","", temas.EDUCACION, 14, 0),

Propuesta("cumplimiento del Programa de Emergencia Habitacional para grupo familiares que se encuentran alojados bajo la modalidad transitoria de alojamiento de hoteles (subsidios por única vez o créditos hipotecarios; paradores nocturnos y controlrespecto de la accesibilidad al programa alimentario por parte de la población vulnerable. ","", temas.VIVIENDA, 14, 0),

Propuesta("Mejorar la Administración de Justicia, propiciando el desarrollo devias alternativas de solución de conflictos, como la mediación, conciliación y arbitraje.Bajar el índice de litigiosidad que hay en la Ciudad, a través de estos métodos alternativos, evitando el colapso de la administración de justicia, con métodos más rápidos y menor honerosos","", temas.INSTITUCIONAL, 14, 0),

Propuesta("Propugnamos la orientación del gasto público, con sentido retributivo, hacia la cobertura  de las necesidades básicas de la población,  así como del ingreso real de los asalariados","", temas.ECONOMIA, 14, 0),


// Pablo Ferreyra


Propuesta("Realizar una planificación urbana integral, participativa y sustentable","Es necesario desarrollar un plan integral que regule el uso del espacio urbano en función de las necesidades concretas de todos los sectores que en ella viven, que promueva la inclusión social, la función social de la propiedad y de la Ciudad y haga posible el acceso a una vivienda digna y hábitat adecuado a todos sus habitantes de manera igualitaria. Una primera medida para acompañar ese proceso sería desarrollar un diseño institucional centralizado que elimine la multiplicidad de ventanillas y programas difusos por lo que proponemos la creación de un único Ministerio de Vivienda y hábitat que centralice todas las políticas enmarcándolas en una planificación integral encarada desde la perspectiva del derecho a la Ciudad.", temas.VIVIENDA, 10, 0),

Propuesta("Creación de un fondo para la compra de vivienda joven y primera vivienda", "Impulsamos un fondo combinado, desde el cual impulsar créditos blandos a tasas preferenciales, entre el Banco Ciudad y dos nuevos ingresos de renta urbana: la recuperación por parte del Estado de la valorización del suelo que extraen los grandes emprendimientos inmobiliarios y un impuesto a las más de 340 mil viviendas que se encuentran en desuso en la Ciudad debido a la especulación.", temas.VIVIENDA, 10, 0),

Propuesta("Reforma del Impuesto Inmobiliario","Proponemos también reformar del impuesto inmobiliario, modificando su base imponible, de manera que grave la concentración de propiedades inmuebles en una sola persona y agregar una contribución especial a los Grandes Desarrollos Inmobiliarios.", temas.VIVIENDA, 10, 0),

Propuesta("Urbanización participativa de villas y asentamientos", "En una Ciudad con casi 500.000 personas sin vivienda digna, es fundamental hacer cumplir las leyes de urbanización, avanzando hacia procesos participativos que garanticen la seguridad en la tenencia, la infraestructura y el acceso a todos los servicios básicos como agua, cloacas, luz y gas así como también la accesibilidad al transporte, la salud, la educación, el espacio público, etc. Se trata de avanzar en desarrollos que permitan la integración de estos barrios con el resto de la Ciudad.", temas.VIVIENDA, 10, 0),

Propuesta("Regulación de alquileres y Construcción de viviendas", "En aras de combatir la especulación y reducir los precios de los alquileres, creemos que debe avanzarse en regular fuertemente la actividad. Para ello, deben rebajarse por ley las comisiones inmobiliarias, ampliarse los plazos mínimos de alquiler y establecerse precios máximos por barrio. También, creemos importante incrementar el impuesto al sello para los alquileres destinados a turistas extranjeros.Con lo obtenido en la reforma tributaria en materia inmobiliaria puede también generarse un fondo de garantía social que haga de garante en un contrato alquiler a aquellas familias que por alguna razón no puedan contar con dicha figura.", temas.VIVIENDA, 10, 0),

Propuesta("Subte","Terminar con las obras planificadas por la ley N°670 (líneas F, G e I), con prioridad en la I (Parque Chacabuco-Plaza Italia), que potenciará la conexión de los barrios del suroeste de la ciudad a la red. Será un nuevo eje Norte-Sur conectado con las demás líneas.", temas.TRANSPORTE, 10, 0),

Propuesta("Concesión Metrovías","Rescisión sin indemnización de la concesión a Metrovías y estatización del servicio a través del SBASE.", temas.TRANSPORTE, 10, 0),

Propuesta("Boleto","Tarifa social que nos incluya a todos integrada a los demás modos cubiertos en el SUBE. El costo de ese boleto debería ser por km recorrido y multimodal.", temas.TRANSPORTE, 10, 0),

Propuesta("Horario de Servicio","Extensión del horario del servicio desde las 5:00 hs. hasta la 1:30 hs.", temas.TRANSPORTE, 10, 0),

Propuesta("Material rodante","Renovar el material rodante de todas las líneas adquiriendo la cantidad suficiente para garantizar una frecuencia de un servicio cada 2 minutos en hora pico.", temas.TRANSPORTE, 10, 0),

Propuesta("Extensión de líneas","Extensión de la red de subtes: Línea C a Estación Buenos Aires y unión con línea H por el sur, logrando el segundo circuito circular H-C. La construcción de línea H2, a Aeroparque y Ciudad Universitaria. Extensión de la línea E de Retiro a Plaza Italia. Esto complementará la construcción de la futura línea I, permitiendo un viaje circular pasando por Parque Chacabuco, Plaza Italia, Retiro y Plaza de Mayo.", temas.TRANSPORTE, 10, 0),

Propuesta("Elaborar plan metropolitano de transporte integral con participación ciudadana.", " ", temas.TRANSPORTE, 10, 0),

Propuesta("Crear una sociedad dependiente de SBASE","Crear una sociedad dependiente de Subterráneos de Buenos Aires Sociedad del Estado (SBASE), o del ejecutivo porteño, que explote los ramales de Metrobus y que sirva para integrar los distintos trazados de Metrobus, hoy desarticulados.", temas.TRANSPORTE, 10, 0),

Propuesta("Implementación de Estaciones Multimodales de trasbordo.", " ",temas.VIVIENDA, 10, 0),

Propuesta("Pasos a nivel","Implementación de tecnología antes de los pasos a nivel, de manera de hacerlos más seguros en términos viales hasta tanto no se realicen las obras de bajo nivel.", temas.TRANSPORTE, 10, 0),

Propuesta("Líneas de tránsito rápido de Metrobus","Creación de líneas exclusivas de transito rápido de Metrobus para en el AMBA La implementación de sistemas BRT (Metrobus), desde el 1er y 2do cordón del conurbano hasta el macrocentro y en la circunvalación de la Ciudad no sólo reduce los tiempos, sino que aumenta la seguridad vial y reduce la polución ambiental.", temas.TRANSPORTE, 10, 0),

Propuesta("Ciclovías","Creación de un plan de desarrollo de Ciclovías basado en la complementariedad con los otros modos de transporte, especialmente, subterráneos y ferrocarriles de superficie, y la masificación de la red en el sur de la ciudad manteniendo la gratuidad del servicio.", temas.TRANSPORTE, 10, 0),

Propuesta("Bicicletas Públicas","Establecimiento de puestos de bicicletas públicas en los principales puntos de transito de la ciudad como en las distintas líneas de ferrocarriles de superficie y subterráneos, tanto en sus estaciones cabeceras como en las estaciones intermedias de mayor utilización por parte de los pasajeros.", temas.TRANSPORTE, 10, 0),

Propuesta("DGPDT","Ampliación de la capacidad inspectora de la DGPDT: Ampliación del cuerpo de inspectores. Concentración de competencias en la Secretaría de Trabajo de acuerdo a lo que fija la ley.", temas.ECONOMIA, 10, 0),

Propuesta("DGPDT","Coordinación con el Ministerio de Trabajo nacional en las políticas de inspección: Cruzamiento de relevamiento nacional y local de datos tributarios AFIP, de la seguridad social ANSES, con las denuncias y procedimientos en la propia DGPDT de la Ciudad.", temas.ECONOMIA, 10, 0),

Propuesta("Empleo Joven","Creación de programas inclusivos de empleo joven que ofrezcan formación profesional y circuitos de introducción al mundo del trabajo, generando oportunidades de inclusión social y laboral de los jóvenes.", temas.ECONOMIA, 10, 0),

Propuesta("Economía Popular", "Creación del Área de Economía Popular: que institucionalice los mercados populares y establezca líneas de fomento a la producción y comercialización de las experiencias de economía Popular así como acceso a derechos para sus trabajadores. Que el Poder Ejecutivo garantice el cumplimiento de todos los convenios firmados con las cooperativas de trabajadores y concrete las expropiaciones pendientes.", temas.ECONOMIA, 10, 0),

Propuesta("Eliminación de las exenciones impositivas a grandes empresas emplazadas en los distritos."," ", temas.ECONOMIA, 10, 0),

Propuesta("Aborto","Legalización del aborto, por el derecho a la autonomía de nuestros cuerpos.", temas.DERECHOS_HUMANOS, 10, 0),

Propuesta("Aborto","Educación sexual con materiales adecuados y contenidos sobre aborto seguro en la currícula de las escuelas.", temas.EDUCACION, 10, 0),

Propuesta("Aborto","Campañas públicas de información.", temas.SOCIEDAD, 10, 0),

Propuesta("Aborto","Ampliar, visibilizar e institucionalizar los servicios de salud y consejerías pre y pos aborto con disponibilidad de misoprostol y su producción pública.", temas.SALUD, 10, 0),

Propuesta("Sanción de una Ley de Educación para la Ciudad","Que defienda y fortalezca la educación pública, laica y gratuita. Que apunte a revertir las desigualdades sociales preexistentes a la escuela. Que fomente el trabajo pedagógico y la formación docente acorde a las distintas realidades sociales y educativas. La sanción de la misma debe ser el resultado de un proceso de discusión y debate en la sociedad, particularmente, entre los diferentes sectores de la comunidad educativa (familias, docentes, sindicatos, organizaciones sociales, alumnos).", temas.EDUCACION, 10, 0),

Propuesta("Jardines de Nivel Inicial","Construcción de jardines de nivel inicial desde los 45 días para garantizar la vacante en escuelas privadas desde esa edad a todos los niños y niñas de la Ciudad garantizando condiciones de habitabilidad, materiales pedagógicos, derechos laborales para docentes y material didáctico.", temas.EDUCACION, 10, 0),

Propuesta("Ley de financiamiento educativo", "En cuya elaboración deberá participar la comunidad educativa. Esta ley deberá poder garantizar la cobertura de vacantes en todos los niveles. También deberá atender a las demandas en cuestiones de infraestructura, material didáctico y creación de nuevos edificios escolares.", temas.EDUCACION, 10, 0),

Propuesta("Participatividad","Desarrollo de mecanismos para que estudiantes, docentes, vecinos, padres y madres, puedan informarse, participar y decidir sobre el sistema educativo en cada escuela. Construir la educación que necesitamos para transformar nuestra Ciudad e instalar la democracia de la educación para hacer parte a la sociedad en su conjunto.", temas.EDUCACION, 10, 0),

Propuesta("Formación docente","La formación docente debe anclarse en las nuevas configuraciones sociales y las realidades propias de nuestra Ciudad. Para ello, es necesario la formación continua de los docentes y generar las bases para que la misma resulte una instancia de enriquecimiento de las prácticas de enseñanza.", temas.EDUCACION, 10, 0),

Propuesta(" ","Garantizar el cumplimiento de las leyes de obligatoriedad escolar (ley nro.898 CABA) con la consecuente construcción de instancias y programas intersectoriales que sostengan y andamien las trayectorias escolares de los niños, niñas y adolescentes.", temas.EDUCACION, 10, 0),

Propuesta("Equipos de Orientación Escolar","El trabajo pedagógico en las escuelas debe perfeccionarse para poder apuntalar las necesidades crecientes del Sistema Educativo. Para eso, deben consolidarse los Equipos de Conducción de las escuelas generando articulación con otras instancias ya creadas para tal fin (Equipo de Orientación Escolar, por ejemplo).", temas.EDUCACION, 10, 0),

Propuesta("Bachilleratos populares","Oficialización de todos los bachilleratos populares de la Ciudad con reconocimiento de todas sus especificidades pedagógicas, becas para todos sus estudiantes, salarios para sus docentes y financiamiento integral.", temas.EDUCACION, 10, 0),

Propuesta("Ley de Paritaria Docente","Sanción de una Ley de Paritaria Docente que institucionalice y fortalezca el espacio de debate entre los Sindicatos y el Gobierno de la Ciudad.", temas.EDUCACION, 10, 0),

Propuesta("Plan de Reforma de la Formación Docente","Frente a la crisis que genera la falta de docentes que hoy vivimos en la Ciudad proponemos un Plan de Reforma de la Formación Docente en la Ciudad que re discuta la organización de los Institutos de Formación Docente, poniendo especial atención en sus Planes de Estudios y en la estructura y dinámica de las Prácticas Docentes.", temas.EDUCACION, 10, 0),

Propuesta("Sistema de Evaluación","Elaborar un sistema de evaluación que sea parte de una planificación pedagógica, sistemática y que atienda a los diversos contextos y particularidades, entendiéndola como una herramienta más del proceso pedagógico.", temas.EDUCACION, 10, 0),

Propuesta("Prevención y Control Sanitario","Avanzar hacia un sistema comunitario de prevención y promoción de la salud. Crear, promover y dotar de recursos a los Centros de Salud y Atención Comunitaria para llevar adelante mecanismos de prevención y control sanitario a nivel local. Elaboración y sistematización de estadísticas sociosanitarias a nivel comunal.", temas.SALUD, 10, 0),

Propuesta("Promotor de Salud","Profesionalización de la figura del promotor de salud: Avanzar en la capacitación y formación de promotores de salud que actúen dentro del primer nivel sanitario trabajando con las problemáticas específicas de una comuna desde una perspectiva interdisciplinar.", temas.SALUD, 10, 0),

Propuesta("Sancionar la ley de producción pública de medicamentos."," ", temas.SALUD, 10, 0),

Propuesta("Ley de Identidad de género","Reglamentación y cumplimiento de La Ley de Identidad de género (4238) en la Ciudad, sin restricciones: Garantizando el suministro gratuito de preservativos y anticonceptivos en todos los centros de salud.", temas.SALUD, 10, 0),

Propuesta("Diverdidad", "Políticas públicas de investigación, formación y atención en salud de las identidades sexuales, culturales y de género para una salud que respete y trabaje en la diversidad.", temas.SALUD, 10, 0),

Propuesta("Hospitales Públicos","Mejorar integralmente la situación de los hospitales públicos en relación a su infraestructura, equipamiento y servicios: Cumplir la compra de equipos dispuesta por ley, revertir las tercerizaciones de servicios tales como seguridad, facturación, maestranza, mantenimiento, lavadero, cocina.", temas.SALUD, 10, 0),

Propuesta("Salud Mental","Cumplir con las leyes de Salud Mental: Avanzar hacia una nueva perspectiva del tratamiento de los pacientes que priorice un trabajo interdisciplinario tendiente a la implementación progresiva de un modelo de atención ambulatorio y comunitario.", temas.SALUD, 10, 0),

Propuesta("Adicciones","Atención pública y campañas de reducción de daños para consumos problemáticos: Con centros públicos de atención en cada barrio y hospital, tomando la inclusión social como objetivo y fortaleciendo las alternativas de tratamientos ambulatorios.", temas.SALUD, 10, 0),

Propuesta("Seguridad Democrática","Desarrollar desde la legislatura un plan de seguridad democrática: para controlar el sistema de seguridad y atacar de manera efectiva todas las situaciones de violencia institucional que afectan en mayor medida a los sectores más postergados de la sociedad.", temas.SEGURIDAD, 10, 0),

Propuesta("Control comunal y participación de la comunidad en asuntos de seguridad","De cara a fortalecer un Estado en el cual la agenda de gestión de la seguridad pública y el control de su brazo represivo sea fijada con la participación de todos los sectores.", temas.SEGURIDAD, 10, 0),

Propuesta("Control de las Fuerzas","Eliminar todas las instancias represivas policiales y parapoliciales de la Ciudad para lo cual es necesario abandonar el simple rechazo al aparato represivo y revertir el actual modelo de delegación a uno de control sobre las fuerzas.", temas.SEGURIDAD, 10, 0),

Propuesta("Aumento y reconfiguración del presupuesto para política cultural"," ", temas.SOCIEDAD, 10, 0),

Propuesta("Presupuesto para Cultura","En la actualidad el presupuesto destinado a cultura es el 2,7% (alrededor de 2.300 millones de pesos). Los festivales y eventos centrales reciben seis veces más financiamiento que los programas destinados al desarrollo cultural en barrios. Además de haber reducido el presupuesto total de cultura en más de un 20% en los últimos años, el Gobierno de la Ciudad lo subejecuta sistemáticamente, como en el resto de las áreas sociales. Es posible y necesario aumentar este presupuesto y que el destino de ese dinero sea una política cultural diferente, democrática y descentralizada.", temas.SOCIEDAD, 10, 0),

Propuesta("Gestión comunal de la política cultural para el desarrollo de la cultura de los barrios","Las comunas pueden ser los ámbitos que articulen la existencia de entes descentralizados de gestión cultural, colegiados, con participación de los Gobiernos Comunales, de las instituciones culturales estatales y comunitarias de los barrios y de los trabajadores de la cultura. De ese modo, las políticas culturales pueden adquirir vínculo real con los territorios y sus habitantes, y que sean ellos mismos quienes definan sobré qué se va a impulsar y financiar en sus territorios.", temas.SOCIEDAD, 10, 0),

Propuesta("Puesta en funcionamiento de la Ley de Centros Culturales y aprobación de la ley de financiamiento","Esta última ley tendrá las siguientes características: Comprender la importancia que tienen los Centros Culturales y Sociales para la difusión de la actividad cultural independiente; Asistir a los Centros Culturales y Sociales en cuestiones de infraestructura, desarrollo, difusión y creación artística.; Facilitar la asistencia a los artistas, gestores del arte y la cultura, grupos y/o colectivos estables o eventuales, y que, de ese modo, los estimule a continuar produciendo actividades culturales.; Promover y fomentar la creación de nuevos Centros Culturales y Sociales destinados a actividades culturales independientes en el ámbito de la Ciudad Autónoma de Buenos Aires, priorizando el apoyo a las entidades que persigan un interés comunitario.", temas.SOCIEDAD, 10, 0),

Propuesta("Registro de artistas independientes y fondo de incentivo para la producción artística cultural independiente","Es necesario crear un Registro de Artistas Independientes para avanzar en su visibilización como trabajadores de la cultura, y en la democratización en el acceso al financiamiento y la promoción de sus iniciativas. Es por eso que debe estar atado a la creación de un Fondo de Incentivo de la producción artística y cultural independiente que garantice el financiamiento del estado, y el reconocimiento de su rol fundamental para la cultura y el arte de la ciudad de buenos aires.", temas.SOCIEDAD, 10, 0),

Propuesta("Refundar las escuelas de arte","Con el objetivo de formar profesionales del arte que apunten al fortalecimiento de nuestras identidades culturales. Para ello es necesario crear nuevas escuelas de arte y que estas escuelas cuenten con ingreso irrestricto, becas, equipamiento e infraestructuras acordes a la formación profesional.", temas.SOCIEDAD, 10, 0),

Propuesta("Recolección diferenciada de residuos","Implementar un sistema de conteiners para cada tipo de residuos y su recolección diferenciada. Separar los residuos en origen no es suficiente si terminan todos en los mismos rellenos, sin escalas.", temas.MEDIO_AMBIENTE, 10, 0),

Propuesta("Reducir y reciclar residuos","Generar campañas efectivas que cuenten con el otorgamiento del material necesario para la separación en origen de residuos. Además de implementar plantas de separación a gran escala y plantas de reciclado para los residuos ya seleccionados", temas.MEDIO_AMBIENTE, 10, 0),

Propuesta("Urbanización de los asentamientos","Urbanización de los asentamientos situados en la orilla de la Cuenca Matanza Riachuelo: Relocalizar a las familias que habiten el camino de sirga en zonas no contaminadas y no inundables, con servicios de agua, cloaca y electricidad.", temas.PLANEAMIENTO_URBANO, 10, 0),

Propuesta("Recuperación de los espacios verdes concesionados indebidamente","Recuperar los espacios verdes en manos de capitales privados para el disfrute colectivo de estas áreas sin aranceles y en igualdad de oportunidades para todos los habitantes.", temas.PLANEAMIENTO_URBANO, 10, 0),


//Manuela Castañeira

Propuesta("Planteamos congelar alquileres, hacer un censo de viviendas ociosas y lanzar un verdadero plan para obtener la casa propia. Además, aplicaremos impuestos a la gran propiedad inmobiliaria para invertirlos en la construcción de viviendas populares.", "", temas.VIVIENDA, 11, 0),
Propuesta("Hay que construir una red de transporte público digno y humano, para disminuir la cantidad de autos particulares que circulan por la Ciudad. Un aspecto clave en este emprendimiento es dedicar inversiones a la extensión de la red de subterráneo.", "", temas.TRANSPORTE, 11, 0),
Propuesta("Hay que aumentar los salarios de los trabajadores de la salud, terminar con la tercerización del sector, abrir concursos y cubrir personal. Es necesario que se respeten los derechos de las mujeres, como el aborto no punible, e impulsar la lucha por el derecho al aborto legal, seguro y gratuito.", "", temas.SALUD, 11, 0),
Propuesta("Hay que terminar con los subsidios a la educación privada y religiosa y volcar esos recursos a la educación pública. El macrismo dice que la gente no quiere ir a la escuela pública, pero eso sucede justamente porque el gobierno se encargó de destruirla.", "", temas.EDUCACION, 11, 0),
Propuesta("La inseguridad es hija del capitalismo. Hay que terminar con la pobreza comenzando por crear puestos de trabajo. Llenar la Ciudad de policías no es la solución para un problema que es complejo y donde además la policía ha demostrado ser soda del narcotráfico y de todos los negocios sucios.", "", temas.SEGURIDAD, 11, 0),


// Gustavo Tenaglia- Humanistas

Propuesta("Activar el programa de Autogestión para la vivienda.","", temas.VIVIENDA ,12, 0),
Propuesta("Disponer todo lo necesario para el desarrollo del PRO.CRE.AR. Dar al banco Ciudad la función social para la que fue creado diseñando una linea de créditos hipotecarios a tasa diferenciada para quienes alquilan.","", temas.VIVIENDA ,12, 0),
Propuesta("Plan de urbanización de villas y asentamientos. .","", temas.VIVIENDA ,12, 0),
Propuesta("Ley de Sistemas Barriales de Salud.","", temas.SALUD ,12, 0),
Propuesta("Ampliado la cobertura de los Hospitales Públicos impulsa la creación de Sistemas Públicos y descentralizados para la Atención Primaria de la Salud. Su objetivo es desarrollar acciones de promoción, prevención, asistencia y rehabilitación de la salud de los habitantes de cada barrio. ","", temas.SALUD ,12, 0),
Propuesta("Para garantizar que el proyecto responda a las necesidades reales de la población y como una vía mas para fortalecer la participación ciudadana los vecinos, que son quienes mejor conocen las problemáticas que los afectan, tendrán participación y decisión en el control y funcionamiento de los S.B.S. ","", temas.SALUD ,12, 0),
Propuesta("Esto se trabajará vinculando los Sistemas Barriales de Salud con el Consejo Consultivo de cada Comuna. ","", temas.SALUD ,12, 0),
Propuesta("Elaborar una ley de educación básica para la ciudad.","", temas.EDUCACION ,12, 0),
Propuesta("Creación del  instituto de ciencia y tecnología.","", temas.EDUCACION ,12, 0),
Propuesta("Implementación de mecanismos de democracia directa para detectar y dar respuestas a las problemáticas propias de cada Comuna","", temas.INSTITUCIONAL ,12, 0),
Propuesta("Efectivizar la toma de decisiones mediante consulta popular vinculante.","", temas.INSTITUCIONAL ,12, 0),
Propuesta("Creación y desarrollo de espacios de iniciativa vecinal y organización autogestiva","", temas.INSTITUCIONAL ,12, 0),
Propuesta("Presupuesto participativo, consejos consultivos, ejercicio de las competencias comunales en efectivo cumplimiento de la ley de comunas","", temas.INSTITUCIONAL ,12, 0),
Propuesta("Implementación de la Ley Nacional de Educación Sexual (Ley 26.150), sancionada en el año 2006 y que aún no se ha incorporado al sistema educativo de la Ciudad de Buenos Aires.","", temas.DERECHOS_HUMANOS ,12, 0),
Propuesta("Implementación de la Ley Nacional de Educación Sexual (Ley 26.150), sancionada en el año 2006 y que aún no se ha incorporado al sistema educativo de la Ciudad de Buenos Aires.","", temas.DERECHOS_HUMANOS ,12, 0),
Propuesta("Creación de grupos interdisciplinarios dedicados a la contención y acompañamiento de las personas LGBTTIQ en comisarias y hospitales, cuando deban recurrir por casos de violencia. Es imprescindible que en esos momentos no vuelvan a sufrir maltrato, ya que en la actualidad el pedido de ayuda termina siendo un nuevo perjuicio.","", temas.DERECHOS_HUMANOS ,12, 0),
Propuesta("Derecho a la identidad de género de las personas. Reglamentación de la Ley 26.743 (sancionada en 2012 y aún no reglamentada en la Ciudad):“Todas las personas mayores de dieciocho años de edad podrán [...] acceder a intervenciones quirúrgicas totales y parciales y/o tratamientos integrales hormonales para adecuar su cuerpo, incluida su genitalidad, a su identidad de género autopercibida, sin necesidad de requerir autorización judicial o administrativa”. Y “todas las prestaciones de salud contempladas en el presente artículo quedan incluidas en el Plan Médico Obligatorio","", temas.DERECHOS_HUMANOS ,12, 0),

Propuesta("Proponemos un Programa de políticas Publicas Integral. Reforzar la legislación vigente sobre discapacidad, garantizando el cumplimiento de sus derechos laborales y seguridad social, por medio de una supervisión adecuada.","", temas.DERECHOS_HUMANOS ,12, 0),
Propuesta("TRANSPORTE: con medidas de accesibilidad, sobre todo en SUBTES. Hoy se cumple solo en un 30% existiendo líneas completamente inaccesibles.","", temas.DERECHOS_HUMANOS ,12, 0),
Propuesta("Equiparación de derechos y oportunidades, La Ciudad debe cumplir con el cupo laboral (5%) de personas con discapacidad que marca la ley en los organismos y empresas del estado, sobre el total de la planta permanente de trabajadores del Gob. de la Ciudad. Como así también con la capacitación simultanea para el puesto asignado.","", temas.DERECHOS_HUMANOS ,12, 0),
Propuesta("ESCUELA INCLUSIVA: en infraestructura, pero también en las barreras que hoy existen en lo curricular, cultural y en las metodologías que impiden que muchos niños y niñas puedan estudiar en igualdad de condiciones.","", temas.DERECHOS_HUMANOS ,12, 0),
Propuesta("Certificado Único de Discapacidad (C.U.D.): Documento indispensable para obtener todos los derechos y beneficios que marca la ley: requiere la máxima prioridad. Celeridad en el otorgamiento de turnos para gestionarlo y la atención adecuada. Acelerar y eliminar los tiempos de espera excesivos para su rápido otorgamiento con la adecuada infraestructura, médico – administrativa.","", temas.DERECHOS_HUMANOS ,12, 0),
Propuesta("VIVIENDA: Plan para priorizar a las personas con discapacidad en situación de vulnerabilidad.","", temas.DERECHOS_HUMANOS ,12, 0),
Propuesta("CREACIÓN DE UN PROTOCOLO HOSPITALARIO PARA GARANTIZAR EL ACCESO AL ABORTO NO PUNIBLE. En 2012 la Corte Suprema de Justicia exhortó al Estado Nacional y a las jurisdicciones provinciales a que sancionen protocolos hospitalarios que garanticen el acceso de las mujeres a abortos no punibles. En la Ciudad Autónoma de Buenos Aires se regulan los permisos con exigencias que pueden dificultar el acceso a este derecho.","", temas.SALUD ,12, 0),
Propuesta("PROTOCOLO PARA MUJERES EN SITUACION DE VIOLENCIA DE GÉNERO. Cada 30 horas una mujer muere víctima de femicidio, entendemos la inmediata solución y la urgencia de acabar con la violencia de género. Proponemos: dar respuesta a todas las necesidad de las mujeres en situación de violencia de género, con el armado de una red que les brinde contención, protección, resguardo y amparo; integrada por profesionales y organizaciones de la sociedad civil.","", temas.SEGURIDAD ,12, 0),

Propuesta("COMUNA LIBRE DE VIOLENCIA-Promover la metodología de la NO-VIOLENCIA, involucrando a las instituciones educativas y a las organizaciones sociales. Los humanistas tenemos mucha experiencia para aportar en este campo.", "", temas.SEGURIDAD , 12, 0),

Propuesta("LEY DE EDUCACION SEXUAL Y REPRODUCTIVA. Implementación real de esta ley en todos los establecimientos educativos de la Ciudad Autónoma de buenos Aires.","", temas.EDUCACION ,12, 0),
Propuesta("MEDIOS DE COMUNICACIÓN COMUNALES","Para visibilizar las problemáticas de la Comuna, para darle voz a las distintas realidades, para que participen generando sus propios contenidos también las escuelas, clubes y centros culturales; necesitamos contar con un canal de TV Digital, una radio y un periódico Comunales.", temas.INSTITUCIONAL ,12, 0),

Propuesta("El Banco de la ciudad de Buenos Aires debe cumplir con su carta orgánica, brindar créditos empresas sociales, Pymes, buscando la equidad distributiva.","", temas.ECONOMIA ,12, 0),
Propuesta("La creación de una Obra Social Comunal; brindando servicios sociales y económicos a las comunas. Garantizando la competitividad en los precios de la canasta familiar.","", temas.ECONOMIA ,12, 0),
Propuesta("Creación de una Banca Comunal para la entrega de microcréditos sin interés.","", temas.ECONOMIA ,12, 0),

// 
Propuesta("MERCADO CENTRAL COMUNAL", "Promover el intercambio y la comercialización directa entre los vecinos de la Comuna y los productores de alimentos y otros rubros, favoreciendo el beneficio económico y de calidad en una interacción recíproca.", temas.ECONOMIA ,12, 0),

Propuesta("Hospital General de Agudos para Lugano. Finalización de la obra con 250 camas de internación.","", temas.SALUD ,12, 0),
Propuesta("Reglamentación e implementación de la Ley de Centros Culturales votada en diciembre de 2014. Reapertura de todos los espacios clausurados durante la última gestión del GCBA.","", temas.SOCIEDAD, 12, 0),


//Guillermo Nielsen

Propuesta("Salud pública, eficiente y al alcance de todos","Lo público debe volver al centro de escena, con un Estado que retoma su lugar en el ámbito de la salud a través de la inversión y el desarrollo de políticas de prevención y atención de calidad para la ciudadanía. Entendemos que la regla prioritaria debe ser una salud pública, eficiente y al alcance de todos.", temas.SALUD ,6, 0),

Propuesta("Prevención","Las políticas de salud pública deben estar siempre orientadas a la prevención. La prevención se logra sólo con la fuerte presencia del Estado mediante campañas de concientización ciudadana. Las campañas deben servir para acercar al vecino a acciones de salud pública particulares que eviten la sobrecarga de las instalaciones. El éxito logrado en la prevención es un punto fundamental para lograr la eficiencia del sistema de salud público de nuestra Ciudad, optimizando la operatividad de nuestros hospitales.", temas.SALUD ,6, 0),

Propuesta("Presupuesto", "La Ciudad debe redoblar sus partidas presupuestarias en salud para garantizar una adecuada inversión en infraestructura y equipamiento que ponga en valor los hospitales para que sean lugares donde se brinde asistencia con calidad.", temas.SALUD ,6, 0),

Propuesta(" ","La autonomía financiera de la Ciudad permite la planificación y aplicación de políticas públicas para pensar a Buenos Aires como la metrópolis del futuro. La Ciudad de Buenos Aires posee el tercer mayor presupuesto del país, luego de considerar el de la Nación y el de la Provincia de Buenos Aires. Siendo el 90% de los mismos recursos propios lo que genera un nivel de autonomía financiera con la que una gestión anclada en la consolidación del rol del Estado en el accionar público se encuentra en condiciones llevar adelante las políticas públicas que le permitan a la Ciudad contar con las obras de infraestructura y los servicios necesarios para toda la ciudadanía. Sin embargo, hoy observamos que el endeudamiento en deuda pública supera los $22.600 millones, los cuales seguramente comprometerán a medida de su vencimiento las recaudaciones futuras.", temas.ECONOMIA ,6, 0),

Propuesta("Sistema Tributario","La Ciudad posee un sistema tributario regresivo, apoyado fundamentalmente en los impuestos al consumo que recae en todos los ciudadanos sin importar su capacidad contributiva. En el mismo sentido, los impuestos patrimoniales cada vez aportan menor cantidad de recursos lo que refuerza la dependencia del sistema tributario de los ciclos económicos y produce oscilaciones no deseadas para el sostenimiento de políticas públicas a mediano y largo plazo. Pretendemos una discusión para obtener una reforma tributaria integral que dote al sistema de la equidad y la justicia necesaria para tener una Buenos Aires más igualitaria.", temas.ECONOMIA ,6, 0),

Propuesta("Articulación de organismos Públicos y privados","Elaboramos un Plan de Seguridad, apoyado en la articulación con distintos organismos públicos y privados del área metropolitana, bajo los ejes de prevención y contención del delito, apuntando a la vez a los problemas urgentes y los de fondo. Medidas: Sistema de Control y vigilancia nuestro. El Plan de Seguridad prevé la incorporación de tecnología de última generación aplicada al tratamiento efectivo de vigilancia. Estipula aumentar la inversión en centros de monitoreo y la ampliación de la red de cámaras de seguridad en zonas de riesgo. Articulación de Policías Metropolitana y Federal, una verdadera política de articulación es clave para optimizar el trabajo de las fuerzas de seguridad que operan en la ciudad, y para lograrlo es necesario una planificación conjunta de las actividades, funciones y alcances de las policías Metropolitana y Federal, en línea con una complementación funcional al control.", temas.SEGURIDAD ,6, 0),

Propuesta("Convenios con municipios del conurbano","Entendemos que el problema de la inseguridad tiene causantes multidimensionales, y afecta a toda el área metropolitana, las soluciones deben ser conjuntas entre los distintos actores del área. El plan estipula convenios específicos con los municipios del conurbano, la Provincia y la Nación para abordar la problemática de manera integrada y ajustar soluciones de mayor alcance y profundidad.", temas.SEGURIDAD ,6, 0),



Propuesta("Prevención","Otro de los ejes del Plan se sostiene sobre la prevención de los factores de riesgo. En esta línea, se busca generar desde la Ciudad iniciativas destinadas a la inclusión social de sectores vulnerables desde el desarrollo de políticas de educación, salud y asistencia social. También se aborda la prevención en cuanto el mejoramiento del espacio público a través de la iluminación, señalización, desmalezamiento, en vistas de reducir los lugares y las condiciones propicias para el delito.", temas.SEGURIDAD ,6, 0),



Propuesta("Peaje Urbano","Nuestro foco es un desarrollo sostenible sobre la base de la integración urbanística, la extensión y mejoramiento del transporte público y el desaliento para reemplazar el uso del automóvil particular. Para ello implementamos medidas como el Peaje Urbano. En sintonía con la tendencia actual de las grandes ciudades con problemas de tráfico, se estipula para ingresar al macrocentro el Cargo por Congestión a través de un abono en Peajes perimetrales bajo el objetivo de reducir la cantidad de vehículos en circulación en el radio del centro y sectores aledaños.", temas.TRANSPORTE ,6, 0),



Propuesta("Sistema de Buses de Tránsito Rápido (BRT)","La iniciativa se centra en la ampliación del sistema de líneas y carriles exclusivos para colectivos con plataformas de ascenso y descenso, y la operación de una línea de colectivo por avenida en las principales arterias.", temas.TRANSPORTE ,6, 0),



Propuesta("Promoción del uso de bicisendas","En la línea de alentar transportes alternativos, el Plan Integral de Movilidad Urbana estipula la ampliación del espacio de bicisendas en la ciudad apoyándose de lleno en la promoción del uso de las mismas a través de la sistematización de campañas de estímulo.", temas.TRANSPORTE ,6, 0),



Propuesta("Playas de Estacionamiento Periféricas","En la búsqueda de desalentar el uso del automóvil en el radio céntrico y aledaños, el Plan dispone establecer centros de estacionamiento articulados con el sistema de transporte público para los vehículos provenientes de la periferia metropolitana.", temas.TRANSPORTE ,6, 0),



Propuesta("Conector Ribereño de Buenos Aires","Es la iniciativa de mayor porte dentro del Plan de Movilidad. Estipula la construcción de una autopista sobre el Río de la Plata entre la zona norte del Puerto y el segmento sur uniendo las autopistas Illia y Buenos Aires - La Plata, bajo la búsqueda de descongestionar el tránsito céntrico y ampliar la Red de Tránsito Pesado de la ciudad.", temas.TRANSPORTE ,6, 0),



Propuesta("Residuos","Proponemos un Plan de Gestión de Residuos y Medioambiente con prioridad en la promoción del uso responsable de los residuos y el fomento de una nueva actitud de los ciudadanos ante el problema a través de campañas de concientización e instrucción. El plan estipula la recolección en contenedores diferenciados en toda la ciudad y la disposición diferenciada. Nuestro propósito es el uso responsable de los residuos y la educación a todo el conjunto de la población para la colocación diferenciada en vía pública y reciclaje.", temas.MEDIO_AMBIENTE ,6, 0),



Propuesta("Reciclaje","Otra de las iniciativas del Plan es la del reciclaje, a través de la ampliación del sistema de tratamiento de la basura con nuevas plantas. Apuntamos a optimizar el desempeño actual en la reconversión de la basura en energías alternativas, fertilizantes y componentes para distintos usos industriales.", temas.MEDIO_AMBIENTE ,6, 0),



Propuesta("Desarrollo Económico","Nuestro objetivo es convertir a la ciudad como un centro de desarrollo de conocimiento aplicado a la optimización de oportunidades de negocio generando empleo y riqueza, como también integración social y equidad. La Ciudad debe definir su matriz de desarrollo en un marco de diálogo con los distintos sectores productivos y del mundo del conocimiento para comprometerlos con la estrategia y orientar todos sus recursos en esa dirección. Para ello debemos trabajar para generar mayores vínculos entre el mundo académico y el mundo laboral. El objetivo es identificar nuestra Ciudad con el conocimiento y transformarlo en desarrollo económico generando nuevos emprendimientos que se traduzcan en una mejora de los niveles de empleo y generación de riqueza que junto con la acción gubernamental se convierta en desarrollo económico. Además, Buenos Aires posee una alta capacidad en sus recursos humanos, un excelente sistema universitario, una población con alto nivel de ingresos, buena infraestructura y un alto nivel de exposición internacional.", temas.ECONOMIA ,6, 0),



Propuesta("Presupuesto","La recuperación de los niveles de calidad de enseñanza y la articulación del mundo educativo con el ámbito laboral son el centro de nuestra política del sector para convertir nuevamente a la educación en una herramienta de inclusión social. Para ello se debe aumentar significativamente las partidas presupuestarias orientadas a mejorar el nivel educativo mediante una fuerte inversión en infraestructura y en tecnología. La inversión en infraestructura debe aumentarse y además debemos tener un Estado eficiente en la ejecución de esos recursos para arreglar las escuelas existentes y construir nuevas.", temas.EDUCACION ,6, 0),



Propuesta("Tecnología","La tecnología también cumple un rol fundamental en la educación. Las herramientas 3.0 tienen que ser parte de la oferta educativa mediante bibliotecas virtuales con contenidos educativos que acerquen a los chicos al mundo del conocimiento.", temas.EDUCACION ,6, 0),



Propuesta(" ","La escuela debe inculcar fuertemente en los niveles medio y superior la generación de la cultura emprendedora en cada alumno y en brindar las habilidades necesarias para que la vinculación del mundo del conocimiento con el mundo laboral deje de ser un slogan y se convierta en oportunidades de trabajo.", temas.EDUCACION ,6, 0),



Propuesta("Becas","Se deben extender los alcances de las becas educativas para cubrir los requerimientos de la matrícula escolar y garantizar el acceso a todos los jóvenes de nuestra Ciudad.", temas.EDUCACION ,6, 0),



Propuesta("Capacitación Docente","Los docentes deben capacitarse permanentemente, en especial, en torno a las herramientas tecnológicas para incentivar a los alumnos el acercamiento al mundo 3.0 y con ello el acercamiento al mundo del conocimiento. La formación docente debe incluir la tecnología y el uso de las herramientas 3.0. Además, debemos escuchar a los docentes que son quienes diariamente se vinculan con los chicos y conocen sus inquietudes y necesidades para en un diálogo permanente entre Gobierno y docentes poder encontrar las soluciones necesarias para mejorar la educación de la Ciudad.", temas.EDUCACION ,6, 0),



Propuesta(" ","Debemos redefinir el uso del espacio público como un lugar de encuentro ciudadano. Un lugar de encuentro común donde los vecinos compartan la responsabilidad de su cuidado conjuntamente con las autoridades comunales. El espacio público se debe redefinir como un lugar lindo y limpio donde los vecinos se encuentren a compartir situaciones de la vida cotidiana. Debe ser el lugar de encuentro ciudadano. El espacio público como lugar común de encuentro ciudadano debe servir de base a la resolución de conflictos y al acercamiento vecinal construir una Ciudad mejor de manera colectiva. Debemos repensar el espacio público para adaptarlo a las nuevas demandas de los vecinos, debemos aumentar los espacios de recreación para que todos puedan practicar deportes con menos riesgos y sin molestar al resto de los usuarios de estos espacios.", temas.PLANEAMIENTO_URBANO ,6, 0),



Propuesta("Espacios Verdes","Hay que abrir nuevos espacios verdes para que las plazas, parques y todos los espacios comunes sean reabiertos a la comunidad y sean liberados de los enrejados que alejan a los vecinos de estos espacios comunes. Tenemos que avanzar en la transferencia de las competencias exclusivas de las comunas, descentralizando recursos de las áreas de espacios verdes, alumbrado público y mantenimiento urbano, centrando nuestra atención en la planificación y ejecución de acciones a escala Ciudad que recuperen el espacio público como el espacio de todos.", temas.PLANEAMIENTO_URBANO ,6, 0),



Propuesta("Cuidado del Espacio Público","Paralelamente, entendemos que el cuidado del espacio público exige, además de inversión y políticas públicas, de una modificación de los comportamientos ciudadanos, para lo que tenemos la responsabilidad de crear conciencia ciudadana en el cuidado compartido entre el Gobierno y la ciudadanía de estos espacios, como lo hicimos en nuestra gestión con Actitud Buenos Aires, un hito en la comunicación con el ciudadano para el desarrollo de conductas cívicas y cuidado del Espacio Público.", temas.PLANEAMIENTO_URBANO ,6, 0),



Propuesta("Participación Vecinal","El próximo Jefe de Gobierno tendrá la obligación de fortalecer el proceso de descentralización de la Ciudad Autónoma de Buenos Aires. Concebimos a las Comunas como una pieza fundamental en la construcción de un modelo de Ciudad más cercano, justo, equitativo e integrado. Estamos convencidos en la necesidad de avanzar hacia una efectiva descentralización política y administrativa que signifique un verdadero proceso de reforma política, democratizando los procesos de toma de decisiones sobre políticas públicas de alcance local y facilitando el control ciudadano sobre la cosa pública.", temas.INSTITUCIONAL ,6, 0),



Propuesta("Comunas","Proponemos una mayor desconcentración de recursos de gestión en las Comunas, dotándolas de las herramientas necesarias para la búsqueda de soluciones a las demandas ciudadanas, haciendo de esta manera más eficaz y eficiente la inversión pública. Este proceso debe contribuir a transformar la relación entre el Estado y la sociedad en un sentido democrático y participativo, aportando a la transparencia y al logro de consensos, haciendo a los vecinos protagonistas en la definición de las agendas locales, discutiendo y elaborando prioridades presupuestarias a escala barrial. Descentralizar política y administrativamente la Ciudad de Buenos Aires implica modernizar el Estado, fortaleciendo su capacidad de intervención para reducir los desequilibrios y promover la equidad a favor de las zonas más desfavorecidas de la ciudad.", temas.INSTITUCIONAL ,6, 0),

Propuesta(" ","Es necesario que el Estado retome los vínculos con los distintos actores sociales, recomponga el dialogo, reabra los canales de participación, redefiniendo en conjunto con la sociedad civil las problemáticas locales. Recuperar estas capacidades, equivaldrá a construir las bases de un gobierno que esté preparado para hacer frente a las complejidades que día a día se presentan en nuestra querida Ciudad, un gobierno capaz de anticiparse a los conflictos, coordinando, orientando y planificando políticas públicas en beneficio del interés general.", temas.INSTITUCIONAL ,6, 0),



Propuesta("Desarrollo Urbano", "La inversión en infraestructura es central para el desarrollo económico y social de nuestra Ciudad, potencia su perfil productivo, generando mejores condiciones de vida para sus habitantes. Entendemos que la inversión pública en infraestructura debe definirse con un sentido estratégico, en base a una lógica plurianual que permita una adecuada planificación y desarrollo del plan de obras y que contemple las posibilidades de financiamiento más convenientes. La Ciudad debe retomar un plan de obras de infraestructura a largo plazo que se oriente a compensar las desigualdades existentes entre norte y sur, propiciando un desarrollo más equilibrado de su territorio, potenciando su capacidad productiva e incentivando la inversión privada. La extensión y construcción de nuevas líneas de subterráneos será para nosotros el pilar de un plan de movilidad sustentable, que sumados a la eliminación de las barreras urbanísticas, y a la expansión e interconexión de la red de autopistas aporte a una transformación definitiva del tránsito y el transporte en nuestra ciudad.", temas.PLANEAMIENTO_URBANO ,6, 0),



Propuesta("Turismo","Nuestra Ciudad es una gran urbe cosmopolita y una de las ciudades más importantes de Latinoamérica. Cuenta con diversos circuitos turísticos que se despliegan en todos los barrios porteños. Por eso se necesita extender el circuito turístico integrando a los diversos actores involucrados y a toda la cadena de valor, para mejorar la oferta y ampliar el alcance de los beneficios para los segmentos relegados. El crecimiento turístico cuantitativo de los últimos años es innegable y se ve íntimamente relacionado con el crecimiento turístico a nivel nacional. En lo que respecta al turismo internacional, Buenos Aires es uno de los principales puntos de ingreso al país para el turista. Es costumbre para el mismo, de este modo, pasar unos pocos días en la Ciudad. Este tipo de turismo está instaurado en paquetes de venta conjuntos que incluyen otros destinos dentro del país pero suele ser de poca estadía en la Ciudad. Será otro de los grandes desafíos de cara al turismo externo, posicionar a Buenos Aires como uno de las principales plazas turísticas del país, con valor agregado en todas sus propuestas extendiendo el promedio de estadía actual de los visitantes extranjeros.", temas.ECONOMIA ,6, 0),



Propuesta("Emergencia Habitacional","La emergencia habitacional demanda la coordinación y activación de las políticas del sector, como también el desarrollo de iniciativas sociales, económicas y culturales al interior de los barrios. El déficit de viviendas de la Ciudad de Buenos Aires es de larga data y los habitantes de la misma denominados en \x22situación de calle\x22 o simplemente \x22sin techo\x22, aumentan día a día sin que se les ofrezca una solución a su problemática. Hoy casi el 15% vive en situación de emergencia habitacional, padeciendo graves problemas relacionados con el acceso a la vivienda y condiciones de habitabilidad en general.", temas.VIVIENDA ,6, 0),



Propuesta("Alquileres","Asimismo entendemos que la problemática de la vivienda no solo implica la falta de oferta para llegar a ella, sino también el encarecimiento de los valores para alquilar.", temas.VIVIENDA ,6, 0),



Propuesta("Villas y Asentamientos","Seguramente, también, vamos a coincidir en que la urbanización de villas, asentamientos y núcleos habitacionales transitorios implica mucho más que la simple actividad de construcción de viviendas, significa un proceso político, cultural y social que debe darse al interior de los barrios. Es importante una política fuerte respecto a la urbanización de villas integrando las mismas al tejido de la Ciudad y logrando que todos los habitantes accedan a iguales servicios en todo el territorio de la Capital.", temas.VIVIENDA ,6, 0),



Propuesta("Crédito Hipotecario","En este sentido también en conjunto con el Banco Ciudad, se desarrollará una política activa de acceso al crédito hipotecario para que los que actualmente alquilan y no tienen vivienda puedan acceder a su primera vivienda. Además, crearemos un programa para que el acceso de los jóvenes a una vivienda por medio del alquiler sea más sencillo y accesible.", temas.VIVIENDA ,6, 0),


//Humberto Tumini

Propuesta("Daremos mas seguridad", "Capacitando mejor a la policía para que nos cuiden, no para que les tengamos miedos y cobren coimas. Construyendo un mapa del delito en la ciudad, con ayuda de los vecinos, para poder combatirlo en serio.", temas.SEGURIDAD ,4, 0),

Propuesta("Salud pública de excelencia", "Es posible, en Rosario Hermes Binner lo hizo. Subiremos el presupuesto que también bajó Macri. Para poner en buenas condiciones los 14 hospitales y los centros de atención primaria, equipándolos y reabriendo salas y quirófanos. Cubriendo, además, el actual déficit de médicos y enfermeras. Desarrollaremos campañas de prevención hoy casi inexistentes y crearemos laboratorios públicos de medicamentos, para abaratar los mismos y abastecer a bajo costo a todo el sistema de salud estatal.", temas.SALUD ,4, 0),

Propuesta("Con mas y mejor educación pública", "Subiremos el presupuesto que bajó Macri. Para arreglar así las escuelas en mal estado, construir 100 nuevas cerca de donde viven los niños y no que tengan que viajar. Para cubrir todas las vacantes y evitar las deserciones. Para tener docentes bien pagos. El 80% de las escuelas serán de jornada completa y apoyaremos a las Cooperadoras escolares Pondremos boleto estudiantil para los universitarios.", temas.EDUCACION ,4, 0),

Propuesta("Congelaremos el ABL e Ingresos Brutos por 2 años", "Macri aumentó ya el ABL el 700% e Ingresos Brutos casi el 600%, son impuestos que pagamos todos. Nosotros los congelaremos.", temas.ECONOMIA ,4, 0),

Propuesta("Con viviendas posibles de comprar y facilidades para alquilar", "Daremos créditos del Banco Ciudad a 40 años, con una cuota no mayor al 30% de los ingresos. Construiremos 3 veces mas viviendas populares. Habrá garantía del gobierno para alquilar y menores costos de inmobiliaria y depósito. No aceptaremos viviendas ociosas sin justa razón, les cobraremos impuestos.", temas. VIVIENDA ,4, 0),

Propuesta("En cuatro años todos los barrios carenciados de la Ciudad tendrán cloacas, luz, gas y agua", "Las promesas que hizo Macri, bien gracias. Su gestión usó sólo un 46 por ciento del presupuesto destinado a la urbanización de dichos barrios entre 2008 y 2013.", temas.PLANEAMIENTO_URBANO ,4, 0),

Propuesta("Cuidaremos el medio ambiente", "No permitiremos la construcción de shoppings y torres de departamentos en espacios verdes.", temas. PLANEAMIENTO_URBANO ,4, 0),

Propuesta("Cuidaremos a los jóvenes", "Para ellos habrá educación, deportes, trabajo digno, cultura, libertades y derechos, no marginación. Ni malos tratos y persecuciones policiales por estar en la esquina o fumar un porro", temas.SOCIEDAD ,4, 0),

Propuesta("Promoveremos la despenalización del consumo de marihuana, al igual que en el Uruguay", "Es un problema de salud su consumo, como el de alcohol o tabaco, no de seguridad.", temas.SOCIEDAD ,4, 0),

Propuesta("Defenderemos a las mujeres y sus derechos", "Jerarquizando su problemática en el gobierno, elevando su Dirección a rango de Secretaría. Luchando en serio contra la violencia de género. Garantizando igualdad laboral y social con los hombres.", temas.DERECHOS_HUMANOS ,4, 0),

Propuesta("Se cumplirá rigurosamente la ley del aborto no punible.", "Nosotros la haremos cumplir e impulsaremos en el Congreso de la Nación el proyecto de ley para que el aborto sea legal, gratuito y seguro, que ya ha sido presentado.", temas.DERECHOS_HUMANOS ,4, 0),

Propuesta("Mejoraremos el transporte", "Con más subterráneos y mayores frecuencias, para que no viajemos como animales -si logramos subir- en los horarios pico. Terminaremos en un año la línea H hasta plaza Francia y la E hasta Retiro.", temas.TRANSPORTE ,4, 0),

Propuesta("Garantizaremos que las calles de Buenos Aires estén limpias de basura", "Con un presupuesto que es el triple del que tiene Rosario, cómo no vamos a poder tenerla limpia.", temas.MEDIO_AMBIENTE ,4, 0),

// Mariano Recalde
Propuesta("Ciencia y tencología","Es necesaria la articulación entre CONICET, la comunidad científica, la Ciudad y los jóvenes que estudian en escuelas técnicas, terciarios o en las carreras técnicas vinculadas, de cara a la necesidad de elaborar soluciones para las propias demandas de la ciudad. Queremos una Ciudad que incentive el interés de los jóvenes por la ciencia.",temas.EDUCACION,0,0),
Propuesta("Empleo", "Son necesarias políticas de empleo que garanticen la inserción al mundo del trabajo para los más jóvenes. La inexperiencia no puede ser causal de explotación: el Gobierno debe hacerse cargo de la puesta en funcionamiento de bolsas de empleo, promoción de capacitaciones, cupos para juventud y programas de incentivo para nuevos emprendedores.",temas.SOCIEDAD,0,0),
Propuesta("Cultura","Queremos transformar las políticas culturales de la Ciudad: queremos que se abran centros culturales y que no se cierren; queremos que se fomenten y se multipliquen las expresiones culturales locales, vinculando las políticas concretas con los centros e institutos de disciplinas artísticas: queremos descentralizar las políticas culturales y llevarlas a los barrios.",temas.SOCIEDAD,0,0),
Propuesta("Vivienda", "A pesar de que existen 340 mil viviendas ociosas en la Ciudad, alquilar es para cualquiera de nosotros una misión prácticamente imposible. Necesitamos una ley que regule la actividad de las inmobiliarias. Es fundamental, además, que desde el Gobierno porteño se faciliten los créditos para acceder a la casa propia y se dé utilidad a las viviendas vacías.",temas.VIVIENDA,0,0),
Propuesta("SALUD", "La Ciudad de Buenos Aires necesita afrontar seriamente la implementación de mecanismos eficientes de atención primaria de la salud en cada barrio, así como la puesta en condiciones de los hospitales del distrito. Además, proponemos la puesta en marcha de políticas concretas de educación sexual y distribución de métodos anticonceptivos y la construcción de centros de prevención y tratamiento de adicciones. ",temas.SALUD,0,0),
Propuesta("Transporte","De casa al trabajo, del trabajo a la Facultad y de la Facultad a casa: es la historia de todos nuestros días. También lo son los problemas de transporte. La Ciudad necesita una red de subtes ampliada y abarcativa, así como un replanteo del mapa del transporte en el distrito.", temas.TRANSPORTE,0,0),
Propuesta("Educación", "En la Ciudad más rica del país, la falta de vacantes es un flagelo que sólo se explica por una mala administración. Es urgente la apertura de más jardines y guarderías, así como la construcción de más escuelas primarias y secundarias. Proponemos una redistribución de los subsidios a las escuelas privadas y el incremento de las escuelas con jornada de doble turno. La Ciudad necesita, además, más terciarios orientados a resolver las propias demandas del distrito y una política que vincula a las instituciones de educación superior con las necesidades de la población. ",temas.EDUCACION,0,0),


// Gabriella Cerruti

Propuesta("Una ciudad que permita encontrarnos", "Queremos volver a encontrarnos en la ciudad, mirarnos, escucharnos e intercambiar ideas, recuperando el espacio público, que es el espacio de todxs. El encuentro con el otro es indispensable para vivir bien.", temas.PLANEAMIENTO_URBANO,0,1),
Propuesta("Una ciudad que construyamos entre todos y todas", "Queremos construir confianza, recomponer la trama social y sentir que lo que estamos llevando adelante lo hacemos entre todos. Sólo participando nos reconoceremos como parte de una comunidad.", temas.SOCIEDAD,0,1),
Propuesta("Una ciudad que nos integre", "Queremos desarrollar políticas públicas que formen parte de un proyecto global de inclusión. Incluir es integrarnos a la ciudad en su trama, en sus espacios culturales, en el trabajo, en la diversidad.", temas.SOCIEDAD,0,1),
Propuesta("Una ciudad con derechos para todos y todas", "Queremos avanzar en la equiparación de derechos, potenciando la diversidad para que podamos sentirnos iguales, aún siendo diferentes. Vivir bien en Buenos Aires debe ser un derecho de todos.", temas.DERECHOS_HUMANOS,0,1),


Propuesta("Vivienda digna y accesible.", "Trabajamos por la vivienda social, la regulación del mercado inmobiliario, el acceso a la vivienda propia, la puesta en valor de los complejos habitacionales y la urbanización en cumplimiento de las leyes vigentes.", temas.VIVIENDA,0,1),
Propuesta("Transporte público integrado y conectado.", "Trabajamos por un sistema de transporte público accesible e integrado para viajar de un modo rápido y seguro, con el desarrollo de la red de subterráneos como forma prioritaria de descongestionar el tránsito y reducir la contaminación.", temas.TRANSPORTE,0,1),
Propuesta("Seguridad democrática y participativa", "Trabajamos para que quienes habitan en la ciudad puedan vivir sin miedo y participen en el diseño de políticas de seguridad específicas sus comunas, con fuerzas de seguridad formadas para proteger nuestros derechos y cuidarnos.", temas.SEGURIDAD,0,1),
Propuesta("Espacios verdes y cuidado del ambiente.", "Trabajamos por la generación de más espacios verdes y por una educación ambiental que garantice, junto con las cooperativas de recuperadores urbanos, la separación de residuos y la reducción del volumen de basura.", temas.PLANEAMIENTO_URBANO,0,1),
Propuesta("Expresiones culturales diversas.", "Trabajamos para que las múltiples expresiones culturales que forman parte de la identidad porteña, vengan de donde vengan, cuenten con espacios donde potenciarse en los barrios, garantizando el acceso de todos y todas.", temas.SOCIEDAD,0,1),
Propuesta("Educación pública como la mejor opción.", "Trabajamos para garantizar la accesibilidad y la inversión necesarias para que todas las niñas, niños y jóvenes cuenten con una educación de calidad, en escuelas con infraestructura adecuada y en condiciones de igualdad.", temas.EDUCACION,0,1),
Propuesta("Equiparación y ampliación de derechos.", "Trabajamos para remover los patrones socioculturales que promueven y sostienen las desigualdades económicas, sociales, culturales o de género, que constituyen obstáculos o sirven de excusa para denegar el acceso a derechos.", temas.DERECHOS_HUMANOS,0,1),
Propuesta("Salud pública como la mejor opción.", "Trabajamos para garantizar la accesibilidad y la inversión necesarias para que quienes habitan la ciudad puedan contar con un sistema de salud de calidad, que sea más comunitario y que funcione en condiciones de igualdad.", temas.SALUD,0,1),
Propuesta("Recuperación del espacio público.", "Trabajamos para que los espacios públicos sean accesibles y seguros para niños, niñas, adolescentes, adultos y adultos mayores; para que podamos recuperarlos, habitarlos y encontrarnos en una ciudad que nos interpele como comunidad.", temas.PLANEAMIENTO_URBANO,0,1),
Propuesta("Estructura tributaria progresiva.", "Trabajamos por la implementación de reformas tributarias que redistribuyan las cargas impositivas e incentiven la promoción de la economía social, para garantizar condiciones de vida más igualitarias para sus habitantes.", temas.ECONOMIA,0,1),
Propuesta("Integración de la ciudad al río.", "Trabajamos para mejorar las condiciones del hábitat en la ribera y por la liberación de los espacios concesionados que son utilizados por unos pocos, para que los habitantes de la ciudad podamos integrarnos al Riachuelo y al Río de la Plata.", temas.PLANEAMIENTO_URBANO,0,1),
Propuesta("Participación colectiva y respeto de la voluntad popular.", "Trabajamos por la autonomía de la ciudad, el respeto a sus instituciones, y  para fortalecer la organización y participación de los vecinos y vecinas de cada barrio en las decisiones que afectan la vida en comunidad.", temas.INSTITUCIONAL,0,1),


];
}
