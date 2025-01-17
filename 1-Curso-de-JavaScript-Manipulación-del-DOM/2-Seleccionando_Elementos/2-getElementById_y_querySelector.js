/*
Consultando el DOM con getElementById y querySelector
En esta clase vamos a ver a aprender a seleccionar elementos del DOM

Ya con el archivo HTML con elementos vamos al navegador.

En esta parte vamos a seleccionar el H1 y los vamos a modificar, lo podemos
hacer de diferentes maneras:
    1- Con su ID.
    2- Por su clase.
    3- Por sus etiquetas.
    4- Por sus atributos.

Ya que lo podemos identificado para hacer la seccion vamos a escribir:
    - document.getElementById("app-title"): Esto trae el elemento que llamamos, esto lo podemos guardar
    en una variable para utilizarlo luego.
    - document.querySelector("#app-title"): Con esto podemos utlizar cualquiera de las maneras mencionadas
    anteriormente.
        Adicionalmente este siempre traera el primer elemento que encuentra.
        Ej: Si hay varios <p> solo trae el primero

        Pero hay otro query que si trae todos.
    - Como traer varios elementos con clases?:
    Es con document.getElementsByClassName("menu-items")
    Esta es una forma
    - Para etiquetas es:
    document.getElementsByTagName("p")
    - Con selcetor:
    document.querySelectorAll(".menu-items")
    Este es distinto ya que trae es una coleccion de nodos, es importante espicicar que clase de elemento
    se quiere ej: . = clase

    Antes de acabar, se nos dice que para consultar mas rapidas se utilize get
    no query, ya que este es mas rapido pero ahora no es tan importante porque estoy
    apenas empenzando con este nuevo tema.

Buenas practicas de HTML:
    - Ningun elementos puede replicar ID, osea este tiene que se unico.
    - Las clases se pueden repetir.
*/