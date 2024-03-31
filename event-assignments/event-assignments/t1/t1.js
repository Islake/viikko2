// array for todo list
let todoList = [
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
function renderTodoList() {
  const todoListContainer = document.getElementById('todo-list');
  todoListContainer.innerHTML = '';

  todoList.forEach(item => {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = item.completed;
    checkbox.addEventListener('change', () => {
      item.completed = checkbox.checked;
      console.log(todoList);
    });
    const label = document.createElement('label');
    label.textContent = item.task;
    if (item.completed) {
      label.style.fontWeight = 'bold';
    }
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      todoList = todoList.filter(todo => todo.id !== item.id);
      renderTodoList();
      console.log(todoList);
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(deleteButton);
    todoListContainer.appendChild(listItem);
  });
}

function handleAddTodoItem(event) {
  event.preventDefault();
  const newItemInput = document.getElementById('new-item-input');
  const newItemName = newItemInput.value.trim();
  if (newItemName) {
    const newItem = {
      id: todoList.length + 1,
      task: newItemName,
      completed: false,
    };
    todoList.push(newItem);
    newItemInput.value = '';
    renderTodoList();
    console.log(todoList);
    closeAddDialog();
  }
}

function openAddDialog() {
  const addDialog = document.getElementById('add-dialog');
  addDialog.showModal();
}

function closeAddDialog() {
  const addDialog = document.getElementById('add-dialog');
  addDialog.close();
}

document.querySelector('.add-btn').addEventListener('click', openAddDialog);
document
  .getElementById('add-form')
  .addEventListener('submit', handleAddTodoItem);

renderTodoList();
