// Herencia prototipal más sencilla, utilizando las nuevas características del lenguaje

const ESTATURA_ALTA = 1.80;


class Persona {
    constructor(name, lastname, age, height) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.height = height;
    }
    saludar() {
        console.log(`Hola, soy ${this.name} ${this.lastname} y soy una persona con ${this.age} años`)
    }
    soyAlto() {
        return this.height >= ESTATURA_ALTA
    }
}



class Desarrollador extends Persona {

    constructor(name, lastname, height) {
        super(name, lastname, height) //Pasa los parámentros a la clase constructor de la clase superior, en este caso Human
    }

    saludar() {
        console.log(`Hola, me llamo ${this.name} ${this.lastname} y soy desarrollador/a`);

    }

}


var Ramiro = new Persona('Ramiro', 'Guzmán', 21, 1.81);
var Gabriela = new Desarrollador('Gabriela', 'Campos', 24, 1.61);