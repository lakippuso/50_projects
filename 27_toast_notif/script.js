const toastButton = document.getElementById("button");
const toastContainer = document.querySelector(".toast-container");

const toastDelay = 1000;

toastButton.addEventListener("click", () => {
    let toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = "Hello World";
    toastContainer.append(toast);
    setTimeout(() => {
        toast.style.opacity = 0;
        setTimeout(() => {
            toast.remove();
        }, toastDelay);
    }, toastDelay);
});
