const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
};

const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');

function newTodo() {
  const newTodo = document.createElement('li');
  newTodo.className = 'todo-list';
  newTodo.innerHTML = 'TO DO';

  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.className = 'todo-checkbox';
  newTodo.append(checkBox);

  const deleteButton = document.createElement('button');
  deleteButton.className = 'todo-delete';
  deleteButton.innerHTML = 'Delete';
  newTodo.append(deleteButton);

  deleteButton.onclick = function() {
    this.parentElement.remove();
    itemCountSpan.innerHTML = document.getElementById('todo-list').childElementCount;
    uncheckedCountSpan.innerHTML = document.getElementById('todo-list').childElementCount - document.querySelectorAll('input.todo-checkbox:checked').length;
  };

  checkBox.onclick = function() {
    uncheckedCountSpan.innerHTML = document.getElementById('todo-list').childElementCount - document.querySelectorAll('input.todo-checkbox:checked').length;
  }

  document.getElementById('todo-list').append(newTodo);
  itemCountSpan.innerHTML = document.getElementById('todo-list').childElementCount;
  uncheckedCountSpan.innerHTML = document.getElementById('todo-list').childElementCount - document.querySelectorAll('input.todo-checkbox:checked').length;
};
