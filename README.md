# ¿Qué proponen?

Sitio en producción: http://queproponen.com.ar/


'Qué propones' está orientada a mostrar a la ciudadanía todas las propuestas que los pre-candidatos a Jefe de Gobierno hicieron en sus campañas.
Asimismo, que las personas puedan interactuar directamente con los candidatos luego de ver sus propuestas, contribuyendo un debate más enriquecedor.

La **metodología** de recopilación de la información se realizó investigando los medios sociales de los candidatos, frentes y partidos. Se considera una propuesta a aquellas consignas cuyo destinatario sea una política pública a realizar en caso de que el candidato sea electo, NO a bases de acción política o manifiestos políticos. Cada vez que la página se carga, los Partidos Políticos y Frentes se ordenan de forma aleatoria.

## Módulos

Dentro del sitio hay tres formas de mostrar la misma información, estos módulos funcionan como solapas dentro de la página. Para mostrarlos o no, basta con agregar o quitar las referencias de estos en el index.html:

**'Detalle'** (detalle.js)

Consiste en mostrar una página principal con los partidos, candidatos(en caso de haber más de un candidato por partido) y temas, pudiendo seleccionar el que se desee y ver en detalle las propuestas por el agrupamiento elegido.

Un ejemplo de esta versión se puede ver en [http://queproponen.com.ar/ubasociales/#propuestas(http://queproponen.com.ar/ubasociales/#propuestas)

**'Media Naranja'** (medianaranja.js)

Gamification de la información. A través de las categorías se deberá elegír el bloque de propuestas (sin conocer de quien son) que más le guste (pudiendo elegir 'ninguna de las anteriores') y ponderar la categoría para generar un resultado de afinidad en base a porcentaje de elección por candidato por categoría.

Un ejemplo de esta versión se puede ver en [http://queproponen.com.ar/#medianaranja](http://queproponen.com.ar/#medianaranja)

**'Versus'** (versus.js)

En este formato se mostraran dos candidatos encolumnados, con todas sus propuestas, agrupadas por categoría para así poder hacer una mejor comparación entre ellos. Se podrá seleccionar cualquier par de candidatos para ser comparados.

Un ejemplo de esta versión se puede ver en [http://queproponen.com.ar/ubaexactas/#versus](http://queproponen.com.ar/ubaexactas/#versus)
 
## Implementaciones hechas

Se hicieron varias implementaciones de este sistema, y cada una con su visualiación específica acorde a la información
Estos diseños se pueden obtener desde sus correspondientes carpetas en este repositorio, reemplazando los archivos en la versión base.

**Versión Argentina**
Este tipo de visualización se creó pensando en dos candidatos únicamente. Se puede un ejemplo en [http://queproponen.com.ar/argentina](http://queproponen.com.ar/argentina)

**Versión CABA**
Este tipo de visualización se creó pensando en 5 candidatos, con toda la información en una sóla página y sin los módulos. Se puede un ejemplo en [http://queproponen.com.ar/caba](http://queproponen.com.ar/caba)

**Versión CABA PASO**
Esta fue la primera versión del sitio, sin módulos, se creó pensando en muchos partidos con muchos candidatos, con la posibilidad de navegarlos. Se puede un ejemplo en [http://queproponen.com.ar/caba/PASO](http://queproponen.com.ar/caba/PASO)

## Implementación

1. Copiar el contenido de la carpeta 'Base Site' en el servidor
3. Crear una base de datos en su servidor y correr el script 'DB structure - Que Proponen.sql' dentro de la carpeta 'DB Structure' para la creación de tablas y datos por default
4. Modificar los datos del archivo 'config.php' presentes en las carpetas PHP presentes en el directorio base y dentro de 'Admin'.
5. Entrar a [url]/Admin
6. Ingresar al sistema con:
  1. usuario:    admin
  2. contraseña: 1234
7. Crear un usuario y de ahí en más ingresar al sistema con ese usuario (que va a ser el único que tenga acceso)
8. Comenzar a cargar los datos de Partidos, Candidatos y Propuestas.

NOTA: El resto de la información en la base de datos como Ciudades, Cargos, Categorías y Datos Base solo son modificables mediante la base de datos, no hay implementado ningún editor gráfico para eso.

## Licencia

MIT
