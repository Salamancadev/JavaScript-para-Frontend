/* 
Remover elementos con remove() y removeChild()
Ya sabemos agregar crear y agregar elementos, pero ahora vamos a ver como eliminarlos.
    Ej: Es como borrar elementos de una lista de compra.
Para poder eliminar elementos hay dos maneras:
    1. Remove(): Este se utiliza escribiendo el elemento que queremos eliminar y
        .remove()
        ej: elemento.remove();
        const firstItem = document.querySelector("li");
        firstItem.remove();
    2. removeChild(): Esta forma es distinta ya que podemos seleccionar elementos que queramos 
        eliminar en una lista
        ej: list.removeChild(list.firstElementChild)
        const list = document.querySelector("ul");
        list.removeChild(list.firstElementChild);
*/