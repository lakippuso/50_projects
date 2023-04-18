const API_KEY = `90dd7fc47731caeed5ea63e6224f3b19`;
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
const IMG_URL = `https://image.tmdb.org/t/p/w1280`
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=true&query=`

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies( data.results )
}
function showMovies(movies) {
    main.innerHTML = ''
    movies.forEach(movie => {
        main.append(makeMovieCard(movie));
    });
}

function makeMovieCard(movie) {
    const movieCard = document.createElement('div')
    movieCard.classList.add('movie')
    movieCard.innerHTML = `
    <img src="${IMG_URL + movie.poster_path}" alt="movie">
    <div class="movie-info">
        <h3>${movie.title}</h3>
        <span class="${getClassByRate(movie.vote_average)}">${movie.vote_average}</span>
    </div>
    <div class="overview">
        <h3>Overview</h3>
        <p>${movie.overview}</p>
    </div>`
    return movieCard;
}

function getClassByRate(vote) {
    if(vote >= 8) return 'green'
    else if(vote >= 5) return 'orange'
    else return 'red'
}

form.addEventListener('submit', e => {
    e.preventDefault()

    const searchTerm = search.value
    if(searchTerm && searchTerm !== ''){
        getMovies(SEARCH_URL + searchTerm)
        search.value = ''
    }
    else{
        window.location.reload()
    }
})