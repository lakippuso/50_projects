const textContainer = document.getElementById("text");
const speedInput = document.getElementById("speed");
const message = "Hello World";
let index = 1
let speed = 300 / speedInput.value

writeText()

function writeText() {
    text.innerText = message.slice(0, index);
    index++
    if(index > message.length) index = 1

    setTimeout(writeText, speed)
}

speedInput.addEventListener('input', e => speed = 300 / e.target.value)