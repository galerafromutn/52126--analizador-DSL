# Analizador de Acciones Automatizadas -Legajo: 52126 Alumno: Senra Galo Ezequiel #

El proyecto otorgado solicitaba que a partir de una gramatica EBNF y por medio del uso de ANTLR4 y JavaScript, se implementara un analizador que realice el analisis lexico y sintactico de una gramatica dada, el arbol sintactico y que ademas realizara la traduccion del codigo fuente a Java Script

La gramatica otorgada define programas formados por una o mas acciones, donde cada accion tiene un nombre y su lista de comandos. Estos comandos permitian realizar tareas como mover archivos, usar escaneo profundo, retornar un resoltuado, notificar un mensaje o asginar un valor a un contador

Este trabajo esta acompañado por el uso de ChatGpt para tareas de realizacion de codigo como el index.js o el CustomDSLVisitor.js, ademas del trabajo de investacion en foros y comunidades para la resolucion de errores


# ESTRUCTURA DEL PROYECTO #

* **DSL.g4**:  Es el archivo que contiene la gramatica ya traducida a formato ANTLR

* **index.js**:  Contiene todo lo que es necesario para la ejecucion del programa asi como para lo que solicita el proyecto, como mostrar el arbol sintactico graficamente, una tabla de tokens y tambien lo que necesita para aplicar la interpretacion en JavaScript

* **generated**: En esta carpeta se encuentra todo los archivos que genera ANTLR automaticamente 


# COMO CORRER EL PROYECTO #

* ## 1. Clonar el repositorio ##

 **Clonando el repositorio** 

Para esta opcion abrimos Visual Studio Code y elegimos la opcion "Clone git repository"

El programa nos pedira una direccion, para este caso la direccion a colocar en VSC es:

https://github.com/galerafromutn/52126--analizador-DSL.git

----------------------------------------------------------------------------------------------

Tambien podemos clonar el repositorio a traves de Cmd, PowerShell o una terminal de linux colocando la siguiente informacion

1. git clone https://github.com/galerafromutn/52126--analizador-DSL.git
2. cd 52126--analizador-DSL
3. code .
   
 **Descargando el zip**

Usar el enlace para ir a la pagina de github donde se encuentra el repositorio, una vez alli encontrar la opcion marcada en verde que dice <code>. Al darle click seleccionar la opcion que dice " Descargar ZIP". Con el archivo.zip en tu computadora solo se requiere extraer el archivo y estara listo para su uso

* ## 2. Colocar una entrada (input) que sea valida ##

El repositorio cuenta con una ya incorporada que es la que se uso inicialmente, como extra se incluyeron 2 gramaticas adicionales que son funcionales y otras 2 que no funcionan para esta gramatica

**Para el optimo funcionamiento del programa, adjunto informacion a tener en cuenta a la hora de implementar un input:**

* Debe tener como minimo una o mas acciones
* El nombre de la accion debe empezar con una letra, puede tener letras y digitos pero no se admiten guiones, espacios o simbolos especiales
* El comando debe ser uno permitido como "moverArchivo", "usarEscaneoProfundo", "retornar resultado" o "notificar"
* Las cadenas deben ir entre comillas dobles ""

![image](https://github.com/user-attachments/assets/e6fc8fea-b55d-4d4c-834f-b68eca9795a8)![image](https://github.com/user-attachments/assets/9d5c1b9a-f6da-431e-b37d-fb5c7a106d22)![image](https://github.com/user-attachments/assets/d55d17f3-93c2-4c20-87f3-52ee0963cec9)


* ## 3. Usar el programa ##

Para la ejecucion del programa se debe usar la regla de inicio (start rule) "node index.js" en la terminal de Visual Studio Code. Esto mostrara el resultado de la entrada colocada anteriormente.

![image](https://github.com/user-attachments/assets/0edf45d8-203f-42b1-9f1c-5ddcb29f5b5c)


Para ver el arbol sintactico de manera grafica se debe apretar la tecla F5 y automaticamente compilara el programa, , ademas mostrara la lista de tokens de manera escrita.

![image](https://github.com/user-attachments/assets/b02c336c-6ae0-411f-bd70-72c45efa3220)![image](https://github.com/user-attachments/assets/b8af6c2c-2136-4f35-968a-f74bd65dad4d)


