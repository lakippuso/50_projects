let container = document.querySelector('.container');
let openButton = document.getElementById('open');
let closeButton = document.getElementById('close');

openButton.addEventListener('click', e => {
    container.classList.add('show-nav')
})
closeButton.addEventListener('click', e => {
    container.classList.remove('show-nav')
})