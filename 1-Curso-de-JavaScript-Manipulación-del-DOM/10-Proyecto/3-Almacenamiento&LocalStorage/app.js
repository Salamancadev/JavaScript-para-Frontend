const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");

loadTasks()

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const taskInput = document.getElementById("task-input");
    const task = taskInput.value;
    console.log(task);

    
    if (task) {
        taskList.append(createTaskElement(task));
        storeTaskInLocalStorage(task);
        taskInput.value = "";
      }
    });


function createTaskElement(task) {
    const li = document.createElement("li");
    li.textContent = task;
    li.append(createButton("❌", "delete-btn"), createButton("✏️", "edit-btn"));
    return li;
}
  
function createButton(text, className) {
    const btn = document.createElement("span");
    btn.textContent = text;
    btn.className = className;
    return btn;
}

taskList.addEventListener("click", (event) => {
    if(event.target.classList.contains("delete-btn")) {
        deleteTask(event.target.parentElement);
    }else if (event.target.classList.contains("edit-btn")){
        editTask(event.target.parentElement);
    }
});

//Funcion para borrar el elemento
function deleteTask (taskItem) {
    if(confirm("Estás segur@ de borrar este elemeto?")){
        taskItem.remove();
    }
}

//Función para editar el elemento
function editTask (taskItem) {  
    const newTask = prompt("Edita la tarea:", taskItem.firstChild.textContent);
    if(newTask !== null ){
        taskItem.firstChild.textContent = newTask;
    }
}

/*
Ahora vamos a ver la persitencia de los elementos, vamos a guardar esto por medio
de una webAPI.

API = Es como un intermediario que permite que diferentes aplicaciones se puede
comunicar entre ellas por medio de un conjunto de reglas establecidas.

web-API = Es la forma como nos podemos comunicar con funcionalidades que hay
en el navegador.

En este caso vamos a utilizar localStorage para guardar información, pero no es
una base de datos. Este cuenta con dos metodos:
    1. setItem = Permite guardar valores en localstorage.
    2. getItem = Obtener elementos ya guardados para utilizarlo

Vamos a aprender como utilizar localStorage para guardar la información y los 
cambios de las tareas para cuando se refresque la paginas sigan ahi.
*/

//Vamos a crear una función que guarde la tarea en localStorage.

function storeTaskInLocalStorage (task){
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]")   //Esto combierte una cadena de texto a un formato JSON/Array

    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks.forEach((task) => {
        taskList.appendChild(createTaskElement(task))
    })
}