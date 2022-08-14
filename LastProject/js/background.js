const imgPath = "img/";
const bgImgs = [`${imgPath}1.jpg`, `${imgPath}2.jpg`, `${imgPath}3.jpg`]; 

const url = bgImgs[Math.floor(Math.random() * bgImgs.length)];

document.body.style.backgroundImage = `url("${url}")`;
