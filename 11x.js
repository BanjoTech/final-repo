const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name: 'make dinner',
  dueDate: '2022-12-22'
}, {
  name: 'wash dishes',
  dueDate: '2022-12-22'
}];


renderTodoList();
function renderTodoList () {

let todoListHTML = ''; //this is like the container for the acculator pattern just like total

for (let i = 0; i < todoList.length; i++) {
 const todoObject = todoList[i];
// const name = todoObject.name;
// const dueDate = todoObject.dueDate;
 const {name, dueDate} = todoObject;
 const html = `
 <div>${name}</div>
 <div>${dueDate}</div>
 <button onclick="
  todoList.splice(${i}, 1);
  renderTodoList();
  saveToStorage();
  "
  class= "delete-btn"
 >Delete</button> 
 
 `;
 todoListHTML += html;
}

document.querySelector('.js-todo-list').innerHTML = todoListHTML;

}


function addTodo() {
 const inputElement = document.querySelector('.js-name-input'); //we just put the input html into javascript, to get the text inputed into the input out we use next step below:
 const name = inputElement.value
 const dateInputElement = document.querySelector('.js-due-date-input');
 const dueDate = dateInputElement.value;
 
 todoList.push({
  //name: name,
  //dueDate: dueDate
  name,
  dueDate
 });
 
 inputElement.value = '';
 
 renderTodoList();
 
 saveToStorage();
}

function saveToStorage() {
 localStorage.setItem('todoList', JSON.stringify(todoList));
}