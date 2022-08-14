const weatherText = document.querySelector("#weather h2");

const API_KEY = "e6cd2e7e439a30472e2e10f659984dd5";

navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack)

function errorCallBack(){
    alert("위치 정보 불러오기 실패");
}

function successCallBack(pos){
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const api_request = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    fetch(api_request)
    .then(response => response.json())
    .then(data => {
        const weather = data.weather[0].main;
        const position = data.name;
        weatherText.innerText = `${weather} / ${position}`;
    });
    
}
