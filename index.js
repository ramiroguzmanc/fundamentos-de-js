// Herencia prototipal

function heredaDe(prototipoHijo, prototipoPadre) {
    var fn = function() {}
    fn.prototype = prototipoPadre.prototype;
    prototipoHijo.prototype = new fn;
    prototipoHijo.prototype.constructor = prototipoHijo;
}

function Human(name, lastname, age, height) {

    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.height = height;

}


// var Ramiro = new Human('Ramiro', 'Guzmán', 21, 1.81);
// var Gabriela = new Human('Gabriela', 'Campos', 24, 1.61);

const ESTATURA_ALTA = 1.80;

Human.prototype.greeting = function() {

    if (this.height >= ESTATURA_ALTA) {

        console.log(`Hola, Soy ${this.name} ${this.lastname}. Tengo ${this.age} años y soy alto porque mido ${this.height}mts`);

    } else {

        console.log(`Hola, Soy ${this.name} ${this.lastname}. Tengo ${this.age} años y soy bajito porque mido ${this.height}mts`);

    }
}

function Desarrollador(name, lastname) {
    this.name = name;
    this.lastname = lastname;

}

heredaDe(Desarrollador, Human);

Desarrollador.prototype.greeting = function() {
    console.log(`Hola, me llamo ${this.name} ${this.lastname} y soy desarrollador/a`);
}



// Ramiro.greeting();