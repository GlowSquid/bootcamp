
// define UI vars

const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");


// load eventlisteners  

loadEventListeners();

function loadEventListeners(){
  // DOM load event
  document.addEventListener("DOMContentLoaded", getTasks);
  // add task event
  form.addEventListener("submit", addTask);
  // remove task event
  taskList.addEventListener("click", removeTask);
  // remove all tasks
  clearBtn.addEventListener("click", clearTasks);
  // filter tasks
  filter.addEventListener("keyup", filterTasks);
}

// get tasks from local storage
function getTasks(){
  let tasks;
  if(localStorage.getItem("tasks") === null){
    tasks = [];
  } else{
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function(task){
    const li = document.createElement("li");
    li.className = "collection-item";
    // create text node and append to li
    li.appendChild(document.createTextNode(task));
    // Create new link element
    const link = document.createElement("a");
    // add class
    link.className = "delete-item secondary-content"
    // add icon html
    link.innerHTML = "<i style='color: red' class='fa fa-remove'></i>";
    li.appendChild(link);
    // append li to ul
    taskList.appendChild(li);

  });
}


// add task
function addTask(e){
  if(taskInput.value !== ""){
    

    // create li element
  const li = document.createElement("li");
  li.className = "collection-item";
  // create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement("a");
  // add class
  link.className = "delete-item secondary-content"
  // add icon html
  link.innerHTML = "<i style='color: red' class='fa fa-remove'></i>";
  li.appendChild(link);
  // append li to ul
  taskList.appendChild(li);

  // store in local storage
  storeTaskInLocalStorage(taskInput.value);

  // clean input
  taskInput.value = "";
  } else {
    alert("Write a task first!")
  }

  


  e.preventDefault();
}

// store task
function storeTaskInLocalStorage(task){
  let tasks;
  if(localStorage.getItem("tasks") === null){
    tasks = [];
  } else{
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
}


// remove task
function removeTask(e){
  if(e.target.parentElement.classList.contains("delete-item")){
    if(confirm("Are you sure?")){
      e.target.parentElement.parentElement.remove();

      // remove from LS
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// remove from ls
function removeTaskFromLocalStorage(taskItem){
  let tasks;
  if(localStorage.getItem("tasks") === null){
    tasks = [];
  } else{
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function(task, index){
    if(taskItem.textContent === task){
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// clear tasks
function clearTasks(){
  //taskList.innerHTML = "";

  // faster
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }

  // clear from LS
  clearTasksFromLocalStorage();
}

// clear tasks from LS

function clearTasksFromLocalStorage(){
    localStorage.clear();
}


function filterTasks(e){
  const text = e.target.value.toLowerCase();
  
  document.querySelectorAll(".collection-item").forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = "block";
    } else{
      task.style.display = "none";

    }
  });
}