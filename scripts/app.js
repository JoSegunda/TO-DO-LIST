const addTaskButton = document.querySelector("#add-task-button");
const showTasks = document.querySelector("#tasks");

// Defining the object that defines the class
var currentTasks =[];
var taskId = 1;

addTaskButton.addEventListener('click', (e) =>{
    e.preventDefault();

    const task = document.getElementById("tasks-text");
    var text = task.value;
    task.value = ""

    AddTask(text);
    
});

showTasks.addEventListener("click", (e) =>{
    e.preventDefault();

    if (e.target.matches(".fa-trash")){
        const taskId = e.target.dataset.id;
        currentTasks = currentTasks.filter(task => task.id != taskId);
        e.target.closest('#task-todo').remove();
    }
})

//Function to add new tasks
function AddTask(text){
    // It initializes an object with the given tasks
    currentTasks.push({id:taskId,name:text,completed:false});
    

    //Create the wrapper class for the list
    const divTaskTodo = document.createElement('div');
    const completedTask = document.createElement('input');
    const taskName = document.createElement('p');

    const iconDiv = document.createElement('div');
    const editIcon = document.createElement("i")
    const deleteIcon = document.createElement("i")

    //Append to get the structure
    divTaskTodo.appendChild(completedTask);
    divTaskTodo.appendChild(taskName);
    divTaskTodo.appendChild(iconDiv);
    iconDiv.appendChild(editIcon);
    iconDiv.appendChild(deleteIcon);

    // Adding the classnames and Id's
    divTaskTodo.id = "task-todo";
    divTaskTodo.className = `${taskId}`
    completedTask.id = "completed-task";
    completedTask.type = "checkbox";

    iconDiv.id = "task-actions";
    deleteIcon.className = "fa-solid fa-trash";

    editIcon.className = "fa-solid fa-pen-to-square";
    editIcon.id = "edit-task";

    deleteIcon.id = "delete-task";
    deleteIcon.dataset.id = taskId; //changed here

    taskName.textContent = text;

    taskName.textContent = text;

    showTasks.appendChild(divTaskTodo);
    showTasks.className = "";
    taskId++; //update the id
}

//Function Delete Button


//Function Edit Button

//Function to search