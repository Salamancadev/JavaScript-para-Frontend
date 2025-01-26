/*
Manejo de entradas de formulario y validación

Ahora vamos a ver sobre los formularios.

La idea es que vamos a cambiar/prevenir el comportamiento del boton de enviar.
Pero para eso necesitamos tener acceso a los input del form. Ya que la inteción
es evitar que la página se refresque cuando haya información erronea.


*/

const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const name = form.elements["name"].value;
    console.log(name);
})
