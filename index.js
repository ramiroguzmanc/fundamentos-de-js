const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')


function empezarJuego() {
    // console.log(`Entré a empezar juego`)
    var juego = new Juego()
}

class Juego {
    constructor() {
        // console.log(`Emtré al constructor`)
        this.inicializar()
    }

    inicializar() {
        // console.log(`Entré a inicializar`)
        btnEmpezar.classList.add('hide')
    }

}