const faq = document.querySelectorAll('.faq');

faq.forEach( f => {
    let active = false;
    f.addEventListener('click', e => {
        active = !active;
        active ? f.classList.add('active') : f.classList.remove('active')
    })
})