/* FIRST TYPE OF TODOLIST
const todoList = [];

function addTodo() {
 const inputElement = document.querySelector('.js-name-input'); //we just put the input html into javascript, to get the text inmputed into the input out we use next step below:
const name = inputElement.value

todoList.push(name);
console.log(todoList);

inputElement.value = '';
}
*/


//SECOND TYPE OF TODOLIST


const todoList = 
[{name:'Make more babies',
 dueDate: '2029-12-22'
},

{name: 'Go to Paris',
 dueDate: '2029-22-22'
}
];


renderTodoList();
function renderTodoList () {

let todoListHTML = ''; //this is like the container for the acculator pattern just like total


todoList.forEach((todoObject, index) => {
 const {name, dueDate} = todoObject;
 const html = `
 <div>${name}</div>
 <div>${dueDate}</div>
 <button onclick="
  todoList.splice(${index}, 1);
  renderTodoList();
  "
  class= "delete-btn"
 >Delete</button> 
 
 `;
 todoListHTML += html;
});


document.querySelector('.js-todo-list').innerHTML = todoListHTML;

}


function addTodo() {
 const inputElement = document.querySelector('.js-name-input'); //we just put the input html into javascript, to get the text inmputed into the input out we use next step below:
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
}