const clock = document.querySelector("#clock h2");
function time(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

time();
setInterval(time, 1000);