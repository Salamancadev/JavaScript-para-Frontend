/*
Agregando elementos con innerHTML e insertAdjacentHTML()

Agregar elementos en vez de reemplazarlo.
    1. Con innerHTML es:
    const listArea = document.getElementById("listArea");
    listArea.innerHTML += "<li> Item 5 </li>";

    El problema con este modo es que renderiza todo los hermanos y al padre de este elemento
    Esto pegara mucho al rendimiento de la pagina.

Para estos casos es mejor utilizar insertAdjacentHTML:

    listArea.insertAdjacentHTML("beforeEnd", "<li> Item 6 </li>");
    Esto solo renderiza unicamente lo que se inyecta, esto es muy util ya que no afecta en gran medida
    el rendimiento.
*/