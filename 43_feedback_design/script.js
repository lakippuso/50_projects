const ratings = document.querySelectorAll('.rating')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
const ratingsContainer = document.querySelector('.ratings-container')

let selectedRating = 'Satisfied'

ratingsContainer.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('rating')){
        removeAllActiveRatings();
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML
        console.log(selectedRating);
    }
})

sendBtn.addEventListener('click', e => {
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support!</p>
    `
})

function removeAllActiveRatings() {
    ratings.forEach(rating => {
        rating.classList.remove('active')
    });
}