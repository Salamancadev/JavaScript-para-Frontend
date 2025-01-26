/*
Agregar y eliminar escuchadores de eventos o Event Listeners:

LLego la hora de comenzar a aplicar eventos y vamos a hacer eventos en nuestro
HTML para manipular ciertas cosas de acuerdo a los eventos.

Vamos a ir generando todo el codigo que se vera reflejado en el HTML
 */

const container = document.querySelector(".container");

const button = document.querySelector("button");

/*Para agregar eventos vamos a utlizar el metodo .addEventListener(), este metodo
 funciona como una función, maneja dos parametros, 1. El tipo de evento que estoy
 buscando, 2. El codigo que se quiere ejecutar una vez que el evento se dispare.
 */

 container.addEventListener("mouseover",() =>{
    container.style.backgroundColor = "blue";
 });

 container.addEventListener("mouseout",() => {
    container.style.backgroundColor = "red";
 });

 //Ahora vamos a agrergar un evento al boton

//  button.addEventListener("click", () => {
//     alert("Button clicked!")
//  })

/*Ahora como vamos a quitar eventos, para eso tendriamos que guardar el callback en una función para
luego decirle que remueva esa evento
*/

// const buttonClickCallback = () => {
//     alert("Button clicked!");
// }

// button.addEventListener("click", buttonClickCallback);

// setTimeout(() =>{
//     button.removeEventListener("click", buttonClickCallback)
// }, 2000);

//Esta manera se explico en la clase, pero una manera más optima es la siguiente ya que es impredecible
//cuando le dara click el usuario al boton

const btnClickCallback = () => {    
    alert("Button clicked");    
    button.removeEventListener('click',btnClickCallback); 
}

button.addEventListener('click', btnClickCallback);