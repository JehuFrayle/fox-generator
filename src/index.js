import { registerImage } from '../utils/lazy.js';
const app = document.getElementById("images");
const genButton = document.getElementById('genButton');
const cleanButton = document.getElementById('cleanButton');

let manyFoxes = 0;
genButton.addEventListener('click', generateFox);
cleanButton.addEventListener('click', cleanScreen);

let favoritesFinder = (memoryPlace) => {
    if(Array.isArray(JSON.parse(memoryPlace))){
        return JSON.parse(memoryPlace);
    } else {
        return new Array;
    }
}
let favorites = favoritesFinder(localStorage.getItem("favorites"));

function generateFox() {
    const container = document.createElement('div');
    const foxId = randomNumber(1,123);

    const fox = document.createElement('img');
    fox.dataset.src = `https://randomfox.ca/images/${foxId}.jpg`;
    fox.alt = `Fox ${manyFoxes}`;
    container.className = `fox fox${manyFoxes}`;
    container.dataset.id = foxId;
    container.appendChild(fox);

    const remButton = document.createElement('button');
    remButton.type = 'button';
    remButton.className = 'remButton';
    remButton.addEventListener('click', removeOne);
    container.appendChild(remButton);

    const addToFavButton = document.createElement('button');
    addToFavButton.type = 'button';
    addToFavButton.className = 'addToFavButton';
    addToFavButton.addEventListener('click', addToFav);
    container.appendChild(addToFavButton);

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
function addToFav(event){
    const memoryId = Number(event.target.parentNode.dataset.id)
    favorites.push(memoryId);
    localStorage.setItem("favorites", JSON.stringify(favorites));
}
function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
