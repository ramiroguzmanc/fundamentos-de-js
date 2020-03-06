const API_URL = 'https://pokeapi.co/api/v2/'
const POKEMON_URL = 'pokemon/:id/'

const opts = { crossDomain: true }

const onPokemonResponse = (pokemon) => console.log(`Un ${pokemon.name} salvaje aparece!`)

function obtenerPokemon(id) {
    var url = `${API_URL}${POKEMON_URL.replace(':id',id)}`
    $.get(url, opts, onPokemonResponse)
}


var generarRandom = () => (Math.random().toFixed(1) * 100) + 1

for (i = 0; i < 10; i++) {

    var random = generarRandom()
    console.log(random)
    obtenerPokemon(random)

}