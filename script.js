document.addEventListener('DOMContentLoaded', function() {
    // Step 1: Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Step 2: Define addTask function
    function addTask() {
        const taskText = taskInput.value.trim();

        // Step 3: Validate input
        if (taskText === "") {
            alert('Please enter a task.');
            return;
        }

        // Step 4: Create a new list item
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Step 5: Create the remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn'); 

        // Step 6: Add event to remove button
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
        };

        // Step 7: Append button to li, and li to list
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Step 8: Clear the input field
        taskInput.value = '';
    }

    // Step 9: Add event listeners
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
