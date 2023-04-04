const button = document.getElementById('searchButton');
const inputDiv = document.querySelector('.input-control');
const input = document.querySelector('.input');

button.addEventListener('click', (e) => {
    inputDiv.classList.toggle('show-search');
    input.focus();
})