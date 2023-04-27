const imgs = document.querySelectorAll(".carousel-img-container img");
const imgContainer = document.getElementById("img-container");
const prevButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
let currentIndex = 0;

let interval = setInterval(() => {
    changeSlide();
    nextSlide();
}, 2000);

imgs.forEach((img, index) => {
    img.style.transform = `translateX(${index * 100}%)`;
});

prevButton.addEventListener("click", (e) => {
    resetInterval();
    if (currentIndex === 0) {
        currentIndex = imgs.length - 1;
    } else {
        currentIndex--;
    }
    changeSlide();
});
nextButton.addEventListener("click", (e) => {
    resetInterval();
    changeSlide();
    nextSlide();
});

function nextSlide() {
    if (currentIndex >= imgs.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
}

function changeSlide() {
    imgContainer.style.transform = `translateX(${currentIndex * -100}%)`;
}
function resetInterval() {
    clearInterval(interval);
    interval = setInterval(() => {
        changeSlide();
        nextSlide();
    }, 2000);
}
