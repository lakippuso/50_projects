const left = document.querySelector('.left');
const right = document.querySelector('.right');
const body = document.querySelector('body');

body.addEventListener('mouseleave', e => {

    left.style.width = '50%';
    right.style.width = '50%';
})

left.addEventListener('mouseover', (e) => {
    left.style.width = '70%';
    right.style.width = '30%'
})
right.addEventListener('mouseover', (e) => {

    left.style.width = '30%';
    right.style.width = '70%'
})