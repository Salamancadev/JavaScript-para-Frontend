/*
Modificando estilos en HTML

Ahora vamos a ver como modificar estilos con JS
Hay tresa formas:
 1- .style: Hay que tener cuidado con esta forma debido a que agrega/modifica el estilo
  de la forma linea ya que lo agrega directamente al HTML, esto podria cambiar la
  espicifidad de nuestro CSS y lo reescribe.
   Como se hace: 
    const title = document.querySelector("h1");
    title.style.color = "Red";
    document: En el document podemos ver como cambió.
 2- .className: Este nos ayuda a acceder a la clase del elemento, tambien hay que tener
  tener cuidado con este metodo ya que puede reescribir la clase que ya existe o en caso 
  de que no la haya la va a agregar. 
*/