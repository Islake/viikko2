// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here

const list = document.querySelector('ul');

for (const todo of todoList) {
  const listItem = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('id', `todo-${todo.id}`);
  checkbox.checked = todo.completed;
  const label = document.createElement('label');
  label.setAttribute('for', `todo-${todo.id}`);
  label.textContent = todo.task;

  listItem.appendChild(checkbox);
  listItem.appendChild(label);

  list.appendChild(listItem);
}
