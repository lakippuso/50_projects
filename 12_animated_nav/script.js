const button = document.getElementById('toggle');
const nav = document.querySelector('.navbar')
button.addEventListener( 'click', e => {
    nav.classList.toggle('active')
})