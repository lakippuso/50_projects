const pic = document.querySelector('.pic')
const times = document.querySelector('#times')

let timesClicked = 0

times.innerHTML = timesClicked

pic.addEventListener('dblclick', e => {
    timesClicked += 1
    times.innerHTML = timesClicked
    createHeart(e)
})

function createHeart(e) {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = e.clientX
    const y = e.clientY

    const imgTop = e.target.offsetTop
    const imgLeft = e.target.offsetLeft

    const xInside = x - imgLeft
    const yInside = y - imgTop

    heart.style.top = yInside+'px'
    heart.style.left = xInside+'px'

    pic.append(heart)

    setTimeout(() => {
        heart.remove()
    }, 500);
}