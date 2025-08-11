const addTaskButton = document.querySelector("#add-task-button");
const showTasks = document.querySelector("#tasks");





//Create the tasks list to put in show tasks
const divTaskTodo = document.createElement('div');
const completedTask = document.createElement('input');
const taskName = document.createElement('p');
const iconDiv = document.createElement('div');
const editIcon = document.createElement("i")
const deleteIcon = document.createElement("i")

// Defining the object that defines the class
var currentTasks =[];
var taskId = 1;


//Events
addTaskButton.addEventListener('click', (e) =>{
    e.preventDefault();

    const task = document.getElementById("tasks-text");
    var text = task.value;
    task.value = ""

    AddTask(text);
    
})

//Function to add new tasks
function AddTask(text){
    // It initializes an object with the given tasks
    currentTasks.push({id:taskId,name:text,completed:false});
    taskId++; //update the id

    //Append to get the structure
    divTaskTodo.appendChild(completedTask);
    divTaskTodo.appendChild(taskName);
    divTaskTodo.appendChild(iconDiv);
    iconDiv.appendChild(editIcon);
    iconDiv.appendChild(deleteIcon);

    // Adding the classnames and Id's
    divTaskTodo.id = "task-todo";
    completedTask.id = "completed-task";
    completedTask.type = "checkbox";

    iconDiv.id = "task-actions";
    editIcon.className = "fa-solid fa-pen-to-square";
    editIcon.id = "edit-task";
    deleteIcon.className = "fa-solid fa-trash";
    deleteIcon.id = "delete-task";

    taskName.textContent = text;

    showTasks.appendChild(divTaskTodo);
    showTasks.className = "";
}

//Function Delete Button

//Function Edit Button

//Function to search