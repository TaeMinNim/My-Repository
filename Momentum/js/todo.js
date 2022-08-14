const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = [];

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter((item) => {return item.id != parseInt(li.id)});
    li.remove();
    saveToDos();
}

function paintToDo(newTodoObj){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    li.id = newTodoObj.id;
    span.innerText = newTodoObj.text;
    toDoList.appendChild(li);
}

function handleToDoSubmin(event){
    event.preventDefault();
    const newTodoObj = {
        text: toDoInput.value,
        id: Date.now()
    };
    toDoInput.value="";
    toDos.push(newTodoObj);
    saveToDos();
    paintToDo(newTodoObj);
}
toDoForm.addEventListener("submit", handleToDoSubmin);

const savedToDos = localStorage.getItem("todos");
if(savedToDos){
    toDos = JSON.parse(savedToDos);
    toDos.forEach(paintToDo);
}