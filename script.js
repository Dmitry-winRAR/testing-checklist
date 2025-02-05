const taskNameInput = document.getElementById("task-name");
const taskPrioritySelect = document.getElementById("task-priority");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
const clearAllButton = document.getElementById("clear-all");

const createTaskItem = (name, priority) => {
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
        showMessage("Task deleted", "info");
    });

    li.appendChild(nameSpan);
    li.appendChild(prioritySpan);
    li.appendChild(deleteButton);
    return li;
};

const addTask = () => {
    const name = taskNameInput.value.trim();
    const priority = taskPrioritySelect.value;

    if (!name) {
        showMessage("Task name cannot be empty!", "error");
        return;
    }

    const taskItem = createTaskItem(name, priority);
    taskList.appendChild(taskItem);
    taskNameInput.value = "";
    taskPrioritySelect.value = "low";
    showMessage("Task added successfully!", "success");
};

const clearTasks = () => {
    if (taskList.children.length === 0) {
        showMessage("No tasks to clear!", "info");
        return;
    }
    taskList.innerHTML = "";
    showMessage("All tasks cleared", "success");
};

const showMessage = (message, type) => {
    const messageBox = document.createElement("div");
    messageBox.textContent = message;
    messageBox.className = `message ${type}`;
    document.body.appendChild(messageBox);

    setTimeout(() => {
        messageBox.remove();
    }, 3000);
};

addTaskButton.addEventListener("click", addTask);
clearAllButton.addEventListener("click", clearTasks);
