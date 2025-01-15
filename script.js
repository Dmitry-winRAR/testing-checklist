const taskNameInput = document.getElementById("task-name");
const taskPrioritySelect = document.getElementById("task-priority");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
const clearAllButton = document.getElementById("clear-all");

// Function to create a task item
function createTaskItem(name, priority) {
    const li = document.createElement("li");
    li.className = "task-item";

    const nameSpan = document.createElement("span");
    nameSpan.textContent = name;
    nameSpan.className = "task-name";

    const prioritySpan = document.createElement("span");
    prioritySpan.textContent = priority.charAt(0).toUpperCase() + priority.slice(1);
    prioritySpan.className = `task-priority ${priority}`;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(nameSpan);
    li.appendChild(prioritySpan);
    li.appendChild(deleteButton);
    return li;
}

// Add task to the list
addTaskButton.addEventListener("click", () => {
    const name = taskNameInput.value.trim();
    const priority = taskPrioritySelect.value;

    if (name) {
        const taskItem = createTaskItem(name, priority);
        taskList.appendChild(taskItem);
        taskNameInput.value = "";
        taskPrioritySelect.value = "low";
    }
});

// Clear all tasks
clearAllButton.addEventListener("click", () => {
    taskList.innerHTML = "";
});
