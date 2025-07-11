// created an array of tasks as objects
const tasks = [
  { description: "Buy groceries", isCompleted: false },
  { description: "", isCompleted: true },
  { description: "Read a book", isCompleted: false },
  { description: "Do homework", isCompleted: false },
  { description: "Clean room", isCompleted: true },
];

// selected checklist, summary, and button from the DOM
const checklist = document.querySelector("#checklist");
const summary = document.querySelector("#summary");
const toggleBtn = document.querySelector("#toggle-all");

// made a function to display the tasks
function displayTasks() {
  if (tasks.length === 0) {
    checklist.innerHTML = "<li>No tasks available</li>"; // if no task
    return;
  }

  checklist.innerHTML = ""; // clear the list first

  for (let i = 0; i < tasks.length; i++) {
    // check for empty description
    let desc =
      tasks[i].description === "" ? "Unnamed task" : tasks[i].description;

    // add each task as list item
    checklist.innerHTML += `<li>${desc} (Completed: ${tasks[i].isCompleted})</li>`;
  }
}

// made a function to update completed task count
function updateSummary() {
  let count = 0;

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].isCompleted) {
      count++;
    }
  }

  summary.innerHTML = `Completed Tasks: ${count}/${tasks.length}`;
}

// made a function to toggle all task statuses
function toggleAllCompleted() {
  // check if there's any not completed
  let anyNotDone = tasks.some((task) => !task.isCompleted);

  // update each task
  for (let i = 0; i < tasks.length; i++) {
    tasks[i].isCompleted = anyNotDone;
  }

  // refresh the display
  displayTasks();
  updateSummary();
}

// added click event to button
toggleBtn.addEventListener("click", toggleAllCompleted);

// show the tasks at the start
displayTasks();
updateSummary();
