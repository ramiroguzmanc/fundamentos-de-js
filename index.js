//Uso de la API de StarWars para hacer uso de los callbacks

var user_personaje = prompt('Introduce el número del personaje que deseas que te salude')

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(':id',user_personaje)}`
const opts = { crossDomain: true }

const onPeopleResponse = (persona) => console.log(`Hola yo soy ${persona.name}`)


$.get(LUKE_URL, opts, onPeopleResponse)