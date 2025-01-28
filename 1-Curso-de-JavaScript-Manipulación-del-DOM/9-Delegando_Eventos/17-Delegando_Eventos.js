/*
Delegación de eventos y prevención de comportamiento predeterminado

Vamos a ver ahora la Delegation Pattern, este esta ubicado en el bubbling


La delegación de eventos es un patrón de diseño en el que se aprovecha 
el mecanismo de propagación de eventos (principalmente el bubbling) 
para gestionar eventos de múltiples elementos secundarios desde un 
único evento padre.
*/

// const listItems = document.querySelectorAll("li");
// listItems.forEach((item) => {
//     item.addEventListener("click", (event) => {
//         event.target.classList.toggle("highlight");
//     });
// });


const list = document.querySelector("ul");

list.addEventListener("click", (event) => {
    event.target.closest("li").classList.toggle("highlight");
})
