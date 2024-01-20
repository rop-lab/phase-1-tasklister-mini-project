document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // src/index.js

document.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.getElementById('create-task-form');
  const taskInput = document.getElementById('new-task-description');
  const taskList = document.getElementById('tasks');

  taskForm.addEventListener('submit', function(event) {
      event.preventDefault();

      // Get the task description from the input
      const taskDescription = taskInput.value.trim();

      // Check if the input is not empty
      if (taskDescription !== '') {
          // Create a new list item
          const listItem = document.createElement('li');
          listItem.textContent = taskDescription;

          // Append the new item to the task list
          taskList.appendChild(listItem);

          // Clear the input field
          taskInput.value = '';
      }
  });
});

});
