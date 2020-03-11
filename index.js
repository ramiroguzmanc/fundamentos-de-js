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
    .then((pokemon) => {
        console.log(`El pokemon 1 es ${pokemon.name}`)
        return obtenerPokemon(2)
    })
    .then((pokemon) => {
        console.log(`El pokemon 2 es ${pokemon.name}`)
        return obtenerPokemon(3)
    })
    .then((pokemon) => {
        console.log(`El pokemon 3 es ${pokemon.name}`)
        return obtenerPokemon(4)
    })
    .then((pokemon) => {
        console.log(`El pokemon 4 es ${pokemon.name}`)
        return obtenerPokemon(5)
    })
    .then((pokemon) => {
        console.log(`El pokemon 5 es ${pokemon.name}`)
        return obtenerPokemon(6)
    })
    .then((pokemon) => {
        console.log(`El pokemon 6 es ${pokemon.name}`)
    })
    .catch(onError)

obtenerPokemon(1, function(pokemon) {
    console.log(`Un ${pokemon.name} salvaje aparece!`)
})