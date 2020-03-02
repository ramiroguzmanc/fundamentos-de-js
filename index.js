//Ejercicio de simulación de peso utilizando el ciclo while y el método Random

alert("Oye, mira tu consola 🤭")

var Ramiro = {
    name: 'Ramiro',
    lastname: 'Guzmán',
    age: 21,
    weight: 60.60
}

const CAMBIO_DE_PESO = 0.2;

// function aumentarDePeso(persona) {
//     return persona.weight += 0.2;
// } 

const aumentarDePeso = (persona) => persona.weight += CAMBIO_DE_PESO;
const bajarDePeso = (persona) => persona.weight -= CAMBIO_DE_PESO;

var NumeroDeIncrementos = 0;
var NumeroDeDecrementos = 0;
const PESO_DESEADO = Ramiro.weight - 3;
var DiasTranscurridos = 0;

while (Ramiro.weight > PESO_DESEADO) {
    var random = Math.random();

    if (random <= 0.25) {
        aumentarDePeso(Ramiro);
        NumeroDeIncrementos++;
    } else if (random <= 0.5) {
        bajarDePeso(Ramiro);
        NumeroDeDecrementos++;
    }

    DiasTranscurridos++;
    // console.log(`Peso actual de Ramiro: ${Ramiro.weight}`);
}

console.log(`Al final del año, ${Ramiro.name} pesa ${Ramiro.weight.toFixed(2)}kg`)
console.log(`Tiempo transcurrido: ${DiasTranscurridos} días`)
console.log(`Número total de incrementos: ${NumeroDeIncrementos}`)
console.log(`Número total de decrementos: ${NumeroDeDecrementos}`)