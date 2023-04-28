const background = document.getElementById("background");
const password = document.getElementById("password");

let password_strength = 8;

password.addEventListener("input", (e) => {
    let blur = 20 - e.target.value.length * 2;
    background.style.filter = `blur(${blur}px)`;
});