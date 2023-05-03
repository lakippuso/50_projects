const container = document.querySelector(".container");
const IMG_URL = "https://picsum.photos/200/200";

const row = 5;
const column = 3;

for (let i = 0; i < row * column; i++) {
    container.appendChild(createImage());
}

function createImage() {
    let img = document.createElement("img");
    img.classList.add("item");
    img.src = IMG_URL;
    return img;
}
