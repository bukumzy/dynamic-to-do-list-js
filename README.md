📝 To-Do List Application

A simple and interactive To-Do List web app built with HTML, CSS, and JavaScript.
This app allows users to add, view, and remove tasks dynamically using DOM manipulation and event handling techniques.

🚀 Features

✅ Add new tasks by clicking the “Add Task” button or pressing Enter
✅ View a neatly listed collection of tasks
✅ Remove tasks instantly using a Remove button
✅ Responsive and clean interface

🧠 Learning Objectives

This project demonstrates understanding of:

DOM selection and manipulation (document.getElementById, createElement, appendChild)

Event handling (click, keypress, DOMContentLoaded)

Conditional logic and validation

Separation of HTML, CSS, and JavaScript for modularity

🏗️ Project Structure
to-do-list/
│
├── index.html      # The main HTML structure of the app
├── styles.css      # Styles for layout and design
└── script.js       # JavaScript logic for interactivity

💻 How It Works

When the page loads, the script waits for the DOMContentLoaded event.

After the DOM is fully loaded:

The script selects the input field, add button, and task list area.

When the user enters a task and clicks Add Task (or presses Enter), the addTask() function runs.

The addTask() function:

Validates input (ensures it’s not empty).

Creates a new <li> element with the task text.

Adds a Remove button next to each task.

Appends the new task to the list and clears the input field.

Clicking Remove deletes the task from the list.