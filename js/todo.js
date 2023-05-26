const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
let toDos = [];

const saveToDos = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};

const deleteList = (event) => {
  const list = event.target.parentElement;
  list.remove();
  toDos = toDos.filter((toDo) => toDo.id != parseInt(list.id));
  saveToDos();
};

const makeTodo = (newTodo) => {
  const list = document.createElement("li");
  list.id = newTodo.id;
  const content = document.createElement("span");
  content.innerText = newTodo.text;
  const button = document.createElement("button");

  button.innerText = "❌";
  button.addEventListener("click", deleteList);

  list.appendChild(content);
  list.appendChild(button);
  todoList.appendChild(list);
};

const viewTodo = (event) => {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";

  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };

  toDos.push(newTodoObj);
  makeTodo(newTodoObj);
  saveToDos();
};

todoForm.addEventListener("submit", viewTodo);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {
  const parsedTodos = JSON.parse(savedTodos);
  toDos = parsedTodos;
  parsedTodos.forEach(makeTodo);
}
