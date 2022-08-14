const todoList = document.querySelector("#todo ul");
const todo_form = document.querySelector("#todo form");
const todo_input = document.querySelector("#todo form input");

let todos =[];


function saveItem(){
    localStorage.setItem("todos", JSON.stringify(todos));
}

function submitForm(event){
    event.preventDefault();
    const todo = {
        id: Date.now(),
        text: todo_input.value
    }
    todo_input.value = "";
    todos.push(todo);
    saveItem();
    paintTodos(todo)
}

function deleteTodo(event){
    const li = event.target.parentNode;
    console.log(parent.id);
    todos = todos.filter((item) => {return item.id != Number(li.id)});
    li.remove();
    saveItem();
}

function paintTodos(todo){
    const li = document.createElement("li");
    li.classList.add("text");
    li.id = todo.id;

    const span = document.createElement("span");
    span.innerText = todo.text;

    const btn = document.createElement("button");
    btn.innerText = "X";
    btn.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(btn);

    todoList.appendChild(li);

}

const savedtodos = localStorage.getItem("todos");
if(savedtodos){
    todos = JSON.parse(savedtodos);
    todos.forEach(paintTodos)
}

todo_form.addEventListener("submit", submitForm);
