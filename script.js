document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // In-memory tasks array
    let tasks = [];

    // Save tasks array to Local Storage
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Create a DOM list item for a task (does NOT modify tasks array or storage)
    function createTaskElement(taskText) {
        const listItem = document.createElement('li');
        // store task text in dataset to identify it later when removing
        listItem.dataset.task = taskText;
        listItem.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');

        removeButton.onclick = function() {
            // Remove from DOM
            taskList.removeChild(listItem);

            // Remove from tasks array and save updated array
            const index = tasks.indexOf(taskText);
            if (index > -1) {
                tasks.splice(index, 1);
                saveTasks();
            }
        };

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
    }

    // Load tasks from Local Storage and populate the DOM
    function loadTasks() {
        const saved = localStorage.getItem('tasks'); // required usage
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                if (Array.isArray(parsed)) {
                    // Set in-memory tasks array to the saved array
                    tasks = parsed.slice(); // clone to avoid accidental mutation
                    // Create DOM elements for each saved task
                    tasks.forEach(taskText => {
                        createTaskElement(taskText);
                    });
                } else {
                    // If parsed data is not an array, clear storage and tasks
                    tasks = [];
                    localStorage.removeItem('tasks');
                }
            } catch (e) {
                // If JSON parsing fails, clear storage and tasks
                tasks = [];
                localStorage.removeItem('tasks');
            }
        }
    }

    // Add a new task: append to DOM first, then update tasks array and storage
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert('Please enter a task.');
            return;
        }

        // Append new task element to DOM
        createTaskElement(taskText);

        // Update in-memory tasks array and save to Local Storage
        tasks.push(taskText);
        saveTasks();

        // Clear the input field
        taskInput.value = '';
    }

    // Attach event listeners
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Load tasks when page loads
    loadTasks();
});
