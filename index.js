const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')


function empezarJuego() {

    window.juego = new Juego()
}

class Juego {
    constructor() {

        this.inicializar()
        this.generarSecuencia()
        this.siguienteNivel()
    }

    inicializar() {

        btnEmpezar.classList.add('hide')
        this.nivel = 1
        this.colores = {
            celeste: celeste,
            violeta: violeta,
            naranja: naranja,
            verde: verde
        }
    }

    generarSecuencia() {
        this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4)) //Fill rellena todos los espacios del array con el valor que le pasemos por parámetro
    }

    siguienteNivel() {
        this.iluminarSecuencia()
    }

    transformarNumeroAColor(numero) {
        switch (numero) {
            case 0:
                return 'celeste'
            case 1:
                return 'violeta'
            case 2:
                return 'naranja'
            case 3:
                return 'verde'
        }
    }

    iluminarSecuencia() {
        for (let i = 0; i < this.nivel; i++) {
            let color = this.transformarNumeroAColor(this.secuencia[i])
            setTimeout(() => this.iluminarColor(color), 1000 * i)
        }
    }

    apagarColor(color) {
        this.colores[color].classList.remove('light')
    }

    iluminarColor(color) {
        this.colores[color].classList.add('light')
        setTimeout(() => this.apagarColor(color), 350)
    }

}