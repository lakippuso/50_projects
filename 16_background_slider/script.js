const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");

let activeSlide = 0;

setBgToBody();
setActiveSlide();

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slides[activeSlide].classList.add("active");
}

leftButton.addEventListener("click", (e) => {
  if (activeSlide == 0) {
    activeSlide = slides.length - 1;
  } else {
    activeSlide--;
  }
  setBgToBody();
  setActiveSlide();
});

rightButton.addEventListener("click", (e) => {
  if (activeSlide >= slides.length) {
    activeSlide = 0;
  } else {
    activeSlide++;
  }
  setBgToBody();
  setActiveSlide();
});
