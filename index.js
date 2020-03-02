//Ejercicio de la lluvia con ciclo do - while

alert("Oye, mira tu consola 🤭")

var cont = 0;

const llueve = () => Math.random() <= 0.25;

do {
    cont++;
} while (!llueve())


if (cont === 1) {

    console.log(`Fui a ver si llovía ${cont} vez`)
} else {
    console.log(`Fui a ver si llovía ${cont} veces`)

}