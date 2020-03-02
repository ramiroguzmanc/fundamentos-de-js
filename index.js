//Ejercicio de simulación de peso utilizando el ciclo for y el método Random

alert("Oye, mira tu consola 🤭")

var Ramiro = {
    name: 'Ramiro',
    lastname: 'Guzmán',
    age: 21,
    weight: 60.60
}

console.log(`Al inicio del año ${Ramiro.name}, pesa ${Ramiro.weight}kg`)


const CAMBIO_DE_PESO = 0.2;

// function aumentarDePeso(persona) {
//     return persona.weight += 0.2;
// } 

const aumentarDePeso = (persona) => persona.weight += CAMBIO_DE_PESO;
const bajarDePeso = (persona) => persona.weight -= CAMBIO_DE_PESO;

var NumeroDeIncrementos = 0;
var NumeroDeDecrementos = 0;
const DIAS_A_SIMULAR = 365;

for (var i = 0; i <= DIAS_A_SIMULAR; i++) {

    var random = Math.random();

    if (random < 0.25) {
        aumentarDePeso(Ramiro);
        NumeroDeIncrementos++;
    } else if (random < 0.50) {
        bajarDePeso(Ramiro);
        NumeroDeDecrementos++;
    }
}

console.log(`Al final del año, ${Ramiro.name} pesa ${Ramiro.weight.toFixed(2)}kg`)
console.log(`Número total de incrementos: ${NumeroDeIncrementos}`)
console.log(`Número total de decrementos: ${NumeroDeDecrementos}`)