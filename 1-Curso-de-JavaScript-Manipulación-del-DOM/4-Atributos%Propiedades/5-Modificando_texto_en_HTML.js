/*
Ahora vamos a ver como podemos modifcar texto

Digamos que tenemos un h1, y hay que ir modificandolo de manera dinamica por ciertas
acciones del usuario.

Como se hace?
 - Abrimos el archivo en el navegador
 - Ahora hay que guardar esa etiqueta en una constante llamandola por su ID
    const title = document.querySelector("#app-title"); 
 - Comprobamos que se haya guardado: console.dir(title)
 - Y podemos cambiar el texto de dos formas.
    1. title.textContent = "Nuevo texto"
    2. title.innerText = "Este es otro titulo"
    Estas dos formas son validads
*/