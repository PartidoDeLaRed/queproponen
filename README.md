# ¿Qué proponen?

Sitio en producción: http://queproponen.com.ar/


'Qué propones' está orientada a mostrar a la ciudadanía todas las propuestas que los pre-candidatos a Jefe de Gobierno hicieron en sus campañas.
Asimismo, que las personas puedan interactuar directamente con los candidatos luego de ver sus propuestas, contribuyendo un debate más enriquecedor.

La **metodología** de recopilación de la información se realizó investigando los medios sociales de los candidatos, frentes y partidos. Se considera una propuesta a aquellas consignas cuyo destinatario sea una política pública a realizar en caso de que el candidato sea electo, NO a bases de acción política o manifiestos políticos. Cada vez que la página se carga, los Partidos Políticos y Frentes se ordenan de forma aleatoria.

## Tu Provincia en queproponen.com.ar

Si querés que tu provincia ó ciudad esté dentro del dominio queproponen.com.ar envianos un mail a sumate@queproponen.com.ar indicándonos de que provincia sos y nosotros te daremos las intrucciones a seguir.

## Módulos

Hay dos versiones del sitio:

**'PASO'**

En el inicio se mostrarán la lista de partidos, debajo la lista de candidatos y finalmente la lista de propuestas organizadas por categoría.
Se podrá navegar apretando los partidos - llevándote a la subpágina del partido con su lista de candidatos y propuestas -, los candidatos - llevándote a la subpágina del candidato con su lista de propuestas -

Un ejemplo de esta versión se puede ver en [caba.queproponen.com.ar/propuestas/PASO](http://caba.queproponen.com.ar/propuestas/PASO)

**'Generales'**

Pensada para una menor cantidad de candidatos y donde existe un candidato por partido, en el inicio se mostrarán la lista de candidatos con un header en cada uno indicando su partido, debajo la lista de propuestas organizadas por categoría.
Al apretar un candidato, dinámicamente en la misma página, se mostarán abajo sólo sus propuestas.

Un ejemplo de esta versión se puede ver en [caba.queproponen.com.ar/propuestas](http://caba.queproponen.com.ar/propuestas)

finalmente  está el módulo **Admin**

Aplicación para poder administrar los datos que se mostrarán en la página - Partidos, Candidatos y Propuestas -
 
## Implementación Externa

1. Copiar el contenido de la versión que elija en su servidor
2. Copiar la carpeta 'Admin' en el mismo directorio
3. Crear una base de datos en su servidor e importar las tablas mediante el archivo 'queproponen_DB.sql' en su servidor
4. Modificar los datos del archivo 'config.php' presentes en las carpetas PHP de la versión que elijió y el 'Admin'.
  1. Nombre de servidor (en cualquier hosting normálmente localhost)
  2. Nombre de la base de datos
  3. Nombre de usuario de la base datos
  4. Contraseña de usuario de la base de datos
5. Entrar a [tu servidor]/Admin
6. Ingresar al sistema con:
  1. usuario:    admin
  2. contraseña: 1234
7. Crear un usuario y de ahí en más ingresar al sistema con ese usuario (que va a ser el único que tenga acceso)
8. Comenzar a cargar los datos y comprobar que al ingresar a [tu servidor] se reflejen los datos creados.

## Licencia

MIT
