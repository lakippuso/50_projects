const jokeText = document.getElementById("joke");
const jokeButton = document.getElementById('jokeButton')

getJoke();

async function getJoke() {
    await fetch('https://icanhazdadjoke.com/', {
    headers: {
        'Accept': 'application/json'
    }
    })
    .then(promise => promise.json())
    .then(response => setJoke(response.joke))
}

function setJoke(joke) {
    jokeText.innerText = joke
}

jokeButton.addEventListener('click', () => getJoke())