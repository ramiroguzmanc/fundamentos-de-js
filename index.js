// Reto de realizar arrow functions

alert("Oye, mira tu consola 🤭");

var p1 = {

    name: "Sasha",
    age: 28

}

var p2 = {

    name: "Darío",
    age: 15

}


// imprimirSiEsMayorDeEdad(p1);
// imprimirSiEsMayorDeEdad(p2);


const MAYORIA_DE_EDAD = 18;

const PERMITIR_ACCESO = ({ age }) => age >= MAYORIA_DE_EDAD;

function permiteAcceso(persona) {
    if (!PERMITIR_ACCESO(persona)) {
        console.log("ACCESO DENEGADO")
    } else {
        console.log("ACCESO APROBADO")
    }
}


const IMPRIMIR_SI_ES_MAYOR_DE_EDAD = (persona) => {
    if (persona.age >= MAYORIA_DE_EDAD) {
        console.log(`${persona.name} es MAYOR de edad porque tiene ${persona.age} años`)
    } else {
        console.log(`${persona.name} es MENOR de edad porque tiene ${persona.age} años`)
    }
}

IMPRIMIR_SI_ES_MAYOR_DE_EDAD(p1);
IMPRIMIR_SI_ES_MAYOR_DE_EDAD(p2);

// function imprimirSiEsMayorDeEdad(persona) {

//     if (persona.age >= 18) {
//         console.log(`${persona.name} es MAYOR de edad porque tiene ${persona.age} años`)
//     } else {
//         console.log(`${persona.name} es MENOR de edad porque tiene ${persona.age} años`)
//     }


// }