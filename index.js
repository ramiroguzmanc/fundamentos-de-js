// Reto de imprimir si la persona es mayor o menor de edad con condicionales

alert("Oye, mira tu consola 🤭");

var p1 = {

    name: "Sasha",
    age: 28

}

var p2 = {

    name: "Darío",
    age: 15

}


imprimirSiEsMayorDeEdad(p1);
imprimirSiEsMayorDeEdad(p2);


function imprimirSiEsMayorDeEdad(persona) {

    if (persona.age >= 18) {
        console.log(`${persona.name} es MAYOR de edad porque tiene ${persona.age} años`)
    } else {
        console.log(`${persona.name} es MENOR de edad porque tiene ${persona.age} años`)
    }


}