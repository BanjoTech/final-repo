const todoList = [];

function addTodo() {
 const inputElement = document.querySelector('.js-name-input'); //we just put the input html into javascript, to get the text inmputed into the input out we use next step below:
const name = inputElement.value

todoList.push(name);
console.log(todoList);

inputElement.value = '';
}