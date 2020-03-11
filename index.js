const API_URL = 'https://pokeapi.co/api/v2/'
const POKEMON_URL = 'pokemon/:id/'

const opts = { crossDomain: true }


function obtenerPokemon(id) {

    return new Promise((resolve, reject) => {

        const url = `${API_URL}${POKEMON_URL.replace(':id',id)}`
        $
            .get(url, opts, function(data) {
                resolve(data)
            })
            .fail(() => reject(id))
    })
}

function onError(id) {
    console.log(`Ocurrió un error al intentar obtener el personaje ${id}`)
}

obtenerPokemon(1)
    .then(function(pokemon) {
        console.log(`El pokemon 1 es ${pokemon.name}`)

    })
    .catch(onError)

obtenerPokemon(1, function(pokemon) {
    console.log(`Un ${pokemon.name} salvaje aparece!`)
})