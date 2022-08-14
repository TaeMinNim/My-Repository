const login = document.getElementById("login");

const login_form = document.getElementById("login-form");

const login_input = document.querySelector("#login-form input");

const user_hello = document.getElementById("hello");

const user_name = document.querySelector("#hello h1");

function getUserName(event){
    event.preventDefault();
    const userName = login_input.value;
    localStorage.setItem("userName", userName);

    paintName(userName);
}

function paintName(name){
    user_name.innerText = `Hello! ${name}`;

    login.classList.add("hidden");
    user_hello.classList.remove("hidden");
}

const savedName = localStorage.getItem("userName");

if(savedName){
    paintName(savedName);
}
else{
    login_form.addEventListener("submit", getUserName);
}