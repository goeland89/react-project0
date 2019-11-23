const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
};

const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');
var itemCounter = 0;
var uncheckCounter = 0;

function newTodo() {
  itemCounter ++;
  uncheckCounter ++;
  list.innerHTML = document.getElementById('todo-list').innerHTML +
    '<li>NEW TODO ' +
    '<input type="checkbox" class="todo-checkbox" onClick="Check()">' +
    '<button class="todo-delete" onClick="Delete(' + itemCounter + ')">Delete</button></li>';
  itemCountSpan.innerHTML = itemCounter;
  uncheckedCountSpan.innerHTML = uncheckCounter;
};

function Check(){
  uncheckCounter = 0
  var content = "";
  var isChecked;
  for (var i = 0; i < document.getElementsByClassName('todo-checkbox').length; i++) {
    isChecked = document.getElementsByClassName('todo-checkbox')[i].checked;
    if (isChecked == false) {
      uncheckCounter ++
      content = content +
        '<li>NEW TODO ' +
        '<input type="checkbox" class="todo-checkbox" onClick="Check()">' +
        '<button class="todo-delete" onClick="Delete(' + i + ')">Delete</button></li>';
    } else {
      content = content +
        '<li>NEW TODO ' +
        '<input type="checkbox" class="todo-checkbox" onClick="Check()" checked>' +
        '<button class="todo-delete" onClick="Delete(' + i + ')">Delete</button></li>';
    }
  }
  list.innerHTML = content;
  uncheckedCountSpan.innerHTML = uncheckCounter;
};

function Delete(id){
  itemCounter --;
  uncheckCounter = 0
  itemCountSpan.innerHTML = itemCounter;
  var content = "";
  var isChecked;
  for (var i = 0; i < itemCounter + 1; i++) {
    if (i == id) { continue }
    isChecked = document.getElementsByClassName('todo-checkbox')[i].checked;
    if (isChecked == false) {
      uncheckCounter ++
      content = content +
        '<li>NEW TODO ' +
        '<input type="checkbox" class="todo-checkbox" onClick="Check()">' +
        '<button class="todo-delete" onClick="Delete(' + i + ')">Delete</button></li>';
    } else {
      content = content +
        '<li>NEW TODO ' +
        '<input type="checkbox" class="todo-checkbox" onClick="Check()" checked>' +
        '<button class="todo-delete" onClick="Delete(' + i + ')">Delete</button></li>';
    }
  }
  list.innerHTML = content;
  uncheckedCountSpan.innerHTML = uncheckCounter;
};
