// Funciones como parámetros

const ESTATURA_ALTA = 1.80;


class Persona {
    constructor(name, lastname, age, height) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.height = height;
    }
    saludar(fn) {
        var { name, lastname, age } = this; // Esto es lo mismo que decir name.this o lastname.this o age.this
        console.log(`Hola, soy ${name} ${lastname} y soy una persona con ${age} años`);

        if (fn) {
            fn(name, lastname, false)
        }
    }
    soyAlto() {
        return this.height >= ESTATURA_ALTA
    }
}



class Desarrollador extends Persona {

    constructor(name, lastname, height) {
        super(name, lastname, height) //Pasa los parámentros a la clase constructor de la clase superior, en este caso Human
    }

    saludar(fn) {
        var { name, lastname, age } = this; // Esto es lo mismo que decir name.this o lastname.this o age.this

        console.log(`Hola, me llamo ${name} ${lastname} y soy desarrollador/a`);

        if (fn) {
            fn(name, lastname, true)
        }

    }

}

function responderSaludo(name, lastname, esDev) {
    console.log(`Buen día, ${name} ${lastname}`);

    if (esDev) {
        console.log(`Oh! no sabía que eras Dev`);
    }
}


var Ramiro = new Desarrollador('Ramiro', 'Guzmán', 21, 1.81);
var Gabriela = new Persona('Gabriela', 'Campos', 24, 1.61);
var Luz = new Persona('Luz', 'Cabrera', 52, 1.58);

Ramiro.saludar(responderSaludo); //Si le pones los () a responderSaludo, estás llamando la función, y no queremos llamarla sino enviarla.
Gabriela.saludar(responderSaludo);
Luz.saludar();