const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const taskInput = document.getElementById("task-input");
    const task = taskInput.value;
    console.log(task);

    
    if (task) {
        taskList.append(createTaskElement(task));
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


/*
Eliminar y editar tareas del DOM
Vamos a general intecracción a los botones, para el lapiz sera editar la tarea
y la x sera para borrar la tarea 

Vamos a generar un solo evento para task-list (evento padre), haremos uso de la
delagación de evento
*/

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