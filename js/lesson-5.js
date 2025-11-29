const form = document.querySelector('#task-form');
const taskList = document.querySelector('#task-list');
const inputs = document.querySelectorAll('.header-form-input');
const themeBtn = document.querySelector('#themeToggle');
const body = document.querySelector('body');

let storage = JSON.parse(localStorage.getItem('task')) || [];
storage.forEach(task => createTask(task));

let themeStorage = localStorage.getItem('theme') || 'dark';
body.classList.remove('theme-dark', 'theme-light');
body.classList.add(`theme-${themeStorage}`);

form.addEventListener('submit', formSubmit);
function formSubmit(e) {
  e.preventDefault();

  const formData = new FormData(form);
  const userData = {
    id: Date.now(),
    taskName: formData.get('taskName').trim(),
    taskDescription: formData.get('taskDescription').trim(),
  };

  if ([...inputs].some(input => input.value === '')) {
    return alert('Поля не можуть бути пустими');
  }

  createTask(userData);

  storage.push(userData);

  localStorage.setItem('task', JSON.stringify(storage));

  form.reset();
}

function createTask(task) {
  const li = document.createElement('li');
  li.classList.add('task-list-item');
  li.dataset.id = task.id;

  li.innerHTML = `
  <button class="task-list-item-btn">Delete</button>
  <h3>${task.taskName}</h3>
  <p>${task.taskDescription}</p>`;

  taskList.append(li);
}

taskList.addEventListener('click', e => {
  if (e.target.classList.contains('task-list-item-btn')) {
    const li = e.target.closest('li');
    const id = Number(li.dataset.id);
    storage = storage.filter(task => task.id !== id);
    localStorage.setItem('task', JSON.stringify(storage));
    li.remove();
  }
});

themeBtn.addEventListener('click', () => {
  if (body.classList.contains('theme-dark')) {
    body.classList.remove('theme-dark');
    body.classList.add('theme-light');
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.remove('theme-light');
    body.classList.add('theme-dark');
    localStorage.setItem('theme', 'dark');
  }
});
