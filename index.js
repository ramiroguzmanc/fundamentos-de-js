const API_URL = 'https://pokeapi.co/api/v2/'
const POKEMON_URL = 'pokemon/:id/'

const opts = { crossDomain: true }


function obtenerPokemon(id, callback) {
    var url = `${API_URL}${POKEMON_URL.replace(':id',id)}`

    $
        .get(url, opts, callback)
        .fail(() => {
            console.log(`Sucedió un error y no se pudo obtener el personaje ${id}`)
        })
}

obtenerPokemon(1, function(pokemon) {
    console.log(`Un ${pokemon.name} salvaje aparece!`)
    obtenerPokemon(2, function(pokemon) {
        console.log(`Un ${pokemon.name} salvaje aparece!`)
        obtenerPokemon(3, function(pokemon) {
            console.log(`Un ${pokemon.name} salvaje aparece!`)
            obtenerPokemon(4, function(pokemon) {
                console.log(`Un ${pokemon.name} salvaje aparece!`)
                obtenerPokemon(5, function(pokemon) {
                    console.log(`Un ${pokemon.name} salvaje aparece!`)
                    obtenerPokemon(6, function(pokemon) {
                        console.log(`Un ${pokemon.name} salvaje aparece!`)

                    })
                })
            })
        })
    })
})


//var generarRandom = () => (Math.random().toFixed(1) * 100) + 1

// for (i = 0; i < 10; i++) {

//     var random = generarRandom()
//     console.log(random)
//     obtenerPokemon(random)

// }