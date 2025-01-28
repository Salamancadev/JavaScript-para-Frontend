/*
Añadir tareas desde un formulario
Vamos a empezar con un pequeño proyecto poniendo en practica lo visto durante este
curso. En esta clase vamos a crear un To-Do List.

Es importante que nuestro proyecto maneje algo que se llama "Persistencia". Esto
se refiere a que si hay cambios como agregar más tareas, las otras sigan existiendo
sin que desaparezcan. Esto funciona gracias a la WEB-API de LocalStorage

En el HTML esta la lista y dentro la tarea que estaremos hardcodeando( codificación
de información de forma rígida o sin posibilidad de modificación.)

Bien vamos con el codigo
*/

//Lo primero es tomar el texto del formulario

//1. Creamos el elemento para poder generar el evento en el formulario.
const taskForm = document.getElementById("task-form");

//2. Creamos el elemento contenedor donde se guardaran las tareas.
const taskList = document.getElementById("task-list");

//3. Ahora vamos a agregar el evento al form, este sera de tipo submit.
taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Aqui guardamos el input
    const taskInput = document.getElementById("task-input");

    // Ahora vamos a llamar y guardar el valor de ese input
    const task = taskInput.value;
    console.log(task);
});