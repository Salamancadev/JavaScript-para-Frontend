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
        updateLocalStorage()
    }
}

function storeTaskInLocalStorage (task){
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]")   //Esto combierte una cadena de texto a un formato JSON/Array

    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks.forEach((task) => {
        taskList.appendChild(createTaskElement(task));
    });
}

/*
Eliminar y editar tareas del almacenamiento local

Ahova vamos a ver como podemos realizar las acciones de eleminar y editar
pero en el localStorage.
 
*/


function updateLocalStorage() {
    const tasks = Array.from(taskList.querySelectorAll("li")).map((li) => li.firstChild.textContent);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

//Se elimino el elemento Hardconeado para solucionar el problema.