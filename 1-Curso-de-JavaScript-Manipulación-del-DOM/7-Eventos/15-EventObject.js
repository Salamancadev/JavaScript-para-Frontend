/*
El objeto evento o eventObject.

Para dominar el tema de los eventos hay que entender bien:
 - Que son.
 - Que nos dan.
 - Cuales son sus beneficios.

Los eventos al fin al cabao son objetos ya que este nos envia información para
conocer que elemento actuo, y si queremos modiificar aspectos a futuro.

Bien, vamos a construir un elemento que estara en el boton.
 */

const button = document.querySelector("button");

//Ahora le vamos agregar al boton un evento pero que tenga una función primero

const buttonClicked = (event) => {
    console.log(event.target);
    console.log(event.target.id);
    console.log(event.target.textContent);
};

button.addEventListener("click", buttonClicked);

//Con esto traemos el objeto del evento