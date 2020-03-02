// Ejercicio de contar los libros que hay en total

alert("Hola, mira tu consola 🤭");

var sasha = {
    nombre: 'Sasha',
    apellido: 'Lifszyc',
    altura: 1.56,
    libros: 15
}

var dario = {
    nombre: 'Dario',
    apellido: 'Susnisky',
    altura: 1.80,
    libros: 5
}

var pepe = {
    nombre: 'Pepe',
    apellido: 'Perez',
    altura: 1.45,
    libros: 12
}

var juan = {
    nombre: 'Juan',
    apellido: 'Gomez',
    altura: 1.90,
    libros: 7
}

personas = [sasha, dario, pepe, juan];

const reducer = (acum, persona) => acum + persona.libros;


var totalDeLibros = personas.reduce(reducer, 0); // 0 es el valor inicial del acumulador, se debe pasar por parámetro siempre que use reduce al igual que una clase

console.log(`En total hay ${totalDeLibros} libros`);