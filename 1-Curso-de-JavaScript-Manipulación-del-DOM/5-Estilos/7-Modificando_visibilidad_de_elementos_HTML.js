/*
Modificando la visibilidad de elementos HTML

Vamos a ver la tercera forma para modificar estilos.
    3- .classList: Este metodo es mas flexible ya que permite alternar, agregar
    , eliminar y verificar.

    const menu = document.querySelector(".menu"); // Seleccionamos el elemento

    button.addEventListener("click", () => 
    { 
    menu.classList.toggle("invisible");
    });

// Agregar una clase
menu.classList.add("visible");

// Eliminar una clase
menu.classList.remove("invisible");

// Alternar una clase (visible/invisible)
menu.classList.toggle("visible");

// Verificar si tiene una clase
console.log(menu.classList.contains("visible")); // true o false
*/