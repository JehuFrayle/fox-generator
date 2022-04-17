import { registerImage } from '../utils/lazy.js';
const app = document.getElementById("images");
const genButton = document.getElementById('genButton');
const cleanButton = document.getElementById('cleanButton');
const remButton = document.getElementById('remButton');

let manyFoxes = 0;
genButton.addEventListener('click', generateFox);
cleanButton.addEventListener('click', cleanScreen);
remButton.addEventListener('click', removeOne);


function generateFox() {
    const container = document.createElement('div');

    const fox = document.createElement('img');
    fox.dataset.src = `https://randomfox.ca/images/${randomNumber(1,123)}.jpg`;
    fox.alt = `Fox ${manyFoxes}`;
    container.className = `fox`;
    container.appendChild(fox);
    app.appendChild(container);
    registerImage(container);
    manyFoxes ++;
}
function cleanScreen(){
    app.innerHTML = '';
    manyFoxes = 0;
}
function removeOne(){
    app.removeChild(app.lastChild);
    manyFoxes -= 1;
}
function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
