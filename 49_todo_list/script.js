const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUl = document.getElementById("todos");

let todos = [];

if (getLocalStorage("todos")) {
    todos = getLocalStorage("todos");
    updateTodos();
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    addTodo();
    updateTodos();
    input.value = "";
});

function updateTodos() {
    todosUl.innerHTML = "";

    todos = getLocalStorage("todos");
    todos.forEach((todo, i) => {
        createTodoElement(todo, i);
    });
}

function addTodo() {
    if (input.value) {
        const todo = { value: input.value, completed: false };
        todos.push(todo);
        setLocalStorage("todos", todos);
    }
}

function createTodoElement({ value, completed }, todoId) {
    const li = document.createElement("li");
    li.innerText = value;

    if (completed) {
        li.classList.add("completed");
    } else {
        li.classList.remove("completed");
    }
    li.addEventListener("click", (e) => {
        e.target.classList.toggle("completed");
        todos[todoId].completed = !todos[todoId].completed;
        setLocalStorage("todos", todos);
    });
    li.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        todos.splice(todoId,1)
        setLocalStorage("todos", todos);
        li.remove();
    });
    todosUl.appendChild(li);
}

function setLocalStorage(id, items) {
    window.localStorage.setItem(id, JSON.stringify(items));
}

function getLocalStorage(id) {
    return JSON.parse(window.localStorage.getItem(id));
}