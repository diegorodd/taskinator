var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    
   event.preventDefault();
   var taskNameInput = document.querySelector("input[name='task-name']");
   console.dir(taskNameInput);

  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl);
};

// buttonEl.addEventListener("click", createTaskHandler);

formEl.addEventListener("submit", createTaskHandler);