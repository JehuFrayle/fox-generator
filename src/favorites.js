import { registerImage } from '../utils/lazy.js';
const app = document.getElementById("images");

let favoritesFinder = (memoryPlace) => {
    if(Array.isArray(JSON.parse(memoryPlace))){
        return JSON.parse(memoryPlace);
    } else {
        return new Array;
    }
}
let favorites = favoritesFinder(localStorage.getItem("favorites"));

if (favorites.length > 0) {
    favorites.forEach((favorite, ind) => {
        generateFox(favorite, ind)
    })
} else {
    const message = document.createElement('h2');
    message.className = '.noFavoritesMessage';
    message.innerHTML = "You don't have favorites yet!"

    app.appendChild(message);
}
function generateFox(url, index) {
    const container = document.createElement('div');

    const fox = document.createElement('img');
    fox.dataset.src = `https://randomfox.ca/images/${url}.jpg`;
    fox.alt = `Favorite fox number: ${index}`;
    container.dataset.id = url;
    container.className = `fox fox${index}`;
    container.appendChild(fox);

    const remButton = document.createElement('button');
    remButton.type = 'button';
    remButton.className = 'remButton';
    remButton.addEventListener('click', removeFromFavorites);
    container.appendChild(remButton);

    app.appendChild(container);
    registerImage(container);
}
function removeFromFavorites(event) {
    const toRemove = event.target.parentNode;
    const memoryId = Number(event.target.parentNode.dataset.id);

    favorites.splice(favorites.findIndex((item) => item === memoryId), 1);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    app.removeChild(toRemove);
}