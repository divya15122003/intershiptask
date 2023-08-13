// Load tasks from JSON file (or initialize empty array if file doesn't exist)
let tasks = [];
if (localStorage.getItem('tasks')) {
  tasks = JSON.parse(localStorage.getItem('tasks'));
} else {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to display tasks in the appropriate list (pending or completed)
function displayTasks() {
  const pendingTasksList = document.getElementById('pendingTasks');
  const completedTasksList = document.getElementById('completedTasks');
  pendingTasksList.innerHTML = '';
  completedTasksList.innerHTML = '';

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.innerText = task.text;
    li.addEventListener('click', () => toggleTaskCompletion(task.id));
    if (task.completed) {
      li.classList.add('completed');
      completedTasksList.appendChild(li);
    } else {
      pendingTasksList.appendChild(li);
    }
  });
}

// Function to add a new task
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const newTask = taskInput.value.trim();
  if (newTask !== '') {
    const task = {
      id: Date.now(),
      text: newTask,
      completed: false,
      createdAt: new Date().toISOString(),
      completedAt: null,
    };
    tasks.push(task);
    taskInput.value = '';
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
  }
}

// Function to toggle task completion
function toggleTaskCompletion(taskId) {
  tasks = tasks.map(task => {
    if (task.id === taskId) {
      task.completed = !task.completed;
      if (task.completed) {
        task.completedAt = new Date().toISOString();
      } else {
        task.completedAt = null;
      }
    }
    return task;
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
  displayTasks();
}

// Initial display of tasks
displayTasks();
