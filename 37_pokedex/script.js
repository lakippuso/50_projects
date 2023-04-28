const POKEMON_API_URL = "https://pokeapi.co/api/v2/pokemon/";
const IMG_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

const pokeContainer = document.getElementById("poke-container");

const pokemon_count = 151;
const type_colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: 'DCD7DE',
    water: 'DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#f5f5f5',
    fighting: '#E6E0D4',
    normal: '#f5f5f5',
}


for (let index = 1; index <= pokemon_count; index++) {
    getPokemon(index);    
}
async function getPokemon(id) {
    let res = await fetch(POKEMON_API_URL + id);
    let data = await res.json();

    console.log(data);
    createPokemonCard(data);
}

function createPokemonCard({id, name, types}) {
    let pokemonCard = document.createElement('div')

    pokemonCard.classList.add('pokemon')
    let pokemonType = types[0].type.name;

    
    var poke_img = `${IMG_API}${padToThree(id)}.png`;
    pokemonCard.style.backgroundColor = type_colors[pokemonType]
    pokemonCard.innerHTML = `
    <div class="img-container">
        <img src="${poke_img}" alt="pic">
    </div>
    <div class="info">
        <span class="number">#${padToThree(id)}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${pokemonType}</span></small>
    </div>
    `
    pokeContainer.appendChild(pokemonCard)
}


let padToThree = (number) => (number <= 99 ? `00${number}`.slice(-3) : number)
