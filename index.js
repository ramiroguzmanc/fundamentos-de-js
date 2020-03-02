// Ejercicio de filtros en arrays

alert("Hola, mira tu consola 🤭");

var sasha = {
    nombre: 'Sasha',
    apellido: 'Lifszyc',
    altura: 1.56
}

var dario = {
    nombre: 'Dario',
    apellido: 'Susnisky',
    altura: 1.80
}

var pepe = {
    nombre: 'Pepe',
    apellido: 'Perez',
    altura: 1.45
}

var juan = {
    nombre: 'Juan',
    apellido: 'Gomez',
    altura: 1.90
}

const esAlta = ({ altura }) => altura >= 1.8;
const esBaja = ({ altura }) => altura < 1.7;

var personas = [sasha, dario, pepe, juan];
var personasAltas = personas.filter(esAlta);
var personasBajas = personas.filter(esBaja);

console.log(personasAltas)
console.log(personasBajas)

const pasarAlturaACms = (persona) => {
    return { // Se está retornando un nuevo objeto para no modificar el valor "altura" del objeto inicial
        ...persona,
        altura: persona.altura * 100

    }
}

var personasCms = personas.map(pasarAlturaACms);

console.log(personasCms)