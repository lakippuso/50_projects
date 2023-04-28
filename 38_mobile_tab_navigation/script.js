const contents = document.querySelectorAll(".content");
const navButtons = document.querySelectorAll("nav ul li");

let activeIndex = 0;

navButtons.forEach((button, buttonIndex) => {
    button.addEventListener("click", (e) => {
        activeIndex = buttonIndex;
        updateActiveImage();
        updateActiveButton();
    });
});

function updateActiveImage() {
    contents.forEach((content, index) => {
        if (index === activeIndex) {
            content.classList.add("show");
        } else {
            content.classList.remove("show");
        }
    });
}
function updateActiveButton() {
    navButtons.forEach((button, index) => {
        if (index === activeIndex) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });
}
