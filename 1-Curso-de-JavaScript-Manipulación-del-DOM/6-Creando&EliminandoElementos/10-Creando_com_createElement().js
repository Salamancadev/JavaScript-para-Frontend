/*
Ahora vamos a ver como crear elementos de la tercera manero, eso es con createElement()

Este es distinto al innder ya que permite agregar elementos sin tener que sustituirlos y no afecta al performance
Y de igual manera podemos decidir que tipo de elemento crear y donde inyectarlo.

Vamos a crear un nuevo nodo con el API del DOM para inyectarlo a nuestro contenido.

Para empezar:
    1. Creamos nuestro elemento:
        const newPElement = document.createElement("p");
    2. Ahora le ponemos contenido con textContent:
        newPElement.textContent = "Fui creado con createElement"
    3. Ahora vamos a inyectarlo al DOM, hay que seleccionar el contenedor donde lo queremos mandar.
        const contentArea = document.getElementById("contentArea");
        contentArea.append(newPElement);
Asi es que se hace. Pero ahora surge la duda de como cambiar la posicion o escoger donde se pone
un elemento. Esto se hace con metodos del createElement que son (prepend: Al inicio de..., before: Antes de..., after: Despues de...)
Para esto tambien se utiliza el append, para jugar con las posiciones.
 Iniciamos creando un elemento li:
    newItem.textContent = "Item 5";
 Ahora creamos el lugar donde lo queremos guardar. 
    const listArea = document.getElementById("listArea");
 Y lo agregamos:
    listArea.prepend(newItem); 
 Ahora podemos cambiar de posición:
    listArea.before(newItem); 
 */