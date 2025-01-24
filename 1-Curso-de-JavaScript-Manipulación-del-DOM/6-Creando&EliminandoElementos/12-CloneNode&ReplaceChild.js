/*
Clonación y reemplazo de elementos con cloneNode y replaceChild
Que pasa si en vez de crear un nuevo elemento lo queremos clonar o reemplazar?
Pues esto se hace con lo siguientes metodos:

    -Clonar:
    Para clonar elementos hay que seleccionar el elemento HTML.
    Para esto utilizamos el metodo .cloneNode(true)
    Ej:
        const  contentArea = document.querySelector("#contentArea");
        const originalP = contentArea.querySelector("p"); 
        const cloneP = originalP.cloneNode(true);
        contentArea.append(cloneP);
        cloneP.textContent = "Este es un parrafo clone"

    -Reemplazar: 
    Para reemplazar un elemento con otro a que escoger el elemento y decir por cual
    lo queremos cambiar.
    Para esto utilizamos el metodo .replaceWith()
    Ej:
    const list = document.querySelector("#listArea");
    const itemToReplace = list.children[2];
    itemToReplace.replaceWith(cloneP);
*/