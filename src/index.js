import { registerImage } from '../utils/lazy.js';
const app = document.getElementById("images");
const genButton = document.getElementById('genButton');
const cleanButton = document.getElementById('cleanButton');

let manyFoxes = 0;
genButton.addEventListener('click', generateFox);
cleanButton.addEventListener('click', cleanScreen);


function generateFox() {
    const container = document.createElement('div');

    const fox = document.createElement('img');
    fox.dataset.src = `https://randomfox.ca/images/${randomNumber(1,123)}.jpg`;
    fox.alt = `Fox ${manyFoxes}`;
    container.className = `fox fox${manyFoxes}`;
    container.appendChild(fox);

    const remButton = document.createElement('button');
    remButton.type = 'button';
    remButton.className = 'remButton';
    remButton.addEventListener('click', removeOne);
    container.appendChild(remButton);

    app.appendChild(container);
    registerImage(container);
    manyFoxes ++;
    
}
function cleanScreen(){
    app.innerHTML = '';
    manyFoxes = 0;
}
function removeOne(event){
    const toRemove = event.target.parentNode;
    app.removeChild(toRemove);
}
function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
