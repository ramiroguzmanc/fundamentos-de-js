// Reto de imprimir nombre y edad

alert("Oye, mira tu consola 🤭");

var p1 = {

    name: "Sasha",
    age: 28

}

var p2 = {

    name: "Darío",
    age: 25

}


imprimirNombreYEdad(p1.name, p1.age);
imprimirNombreYEdad(p2.name, p2.age);

function imprimirNombreYEdad(name, age) {

    console.log(`Hola, me llamo ${name} y tengo ${age} años`);

}