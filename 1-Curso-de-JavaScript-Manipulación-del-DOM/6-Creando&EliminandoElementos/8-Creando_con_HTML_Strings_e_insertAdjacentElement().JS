/*
Comencemos ahora con el caso de que hay que crear elementos de acuerdo con las acciones
del usuario, como por ejemplo agregar elementos a un carro de compra.

Lo vamos a verlo con dos opciones:
 1. HTML Strings: Con cadena de texto para construir HTML para luego inyectar en el DOM
 2. CreateELements: Genera un nuevo nodo al que tenemos que añadirle contenido y luego agregarlo en el DOM

-HTML Strings:
 Tenemos dos opciones para utilizar este
    1. innerHTML: Aqui se genera un string de HTML y se inyecta al DOM
    2. insertAdjacentHTML: Hace lo mismo pero esta nos otorga la libertad de escoger donde inyectarlo

 -innerHTML:
    const contentArea = document.getElementById("contentArea");
    contentArea.innerHTML = "<p>Este es un nuevo parrafo. </p>"
 -insertAdjacentHTML: Este es una funcion que recibe dos parametro:
    Primero recibe la posición y luego el string
    contentArea.insertAdjacentHTML("beforeend", "<p> Este es otro parrafo nuevo nuevo. </p>")
    Para las otras posiciones es recomendable acudir a la documentación.
*/