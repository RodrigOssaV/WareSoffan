const baseDatos = require('../js/bdConductores.js')

class GestorConductores{
    constructor(){
        this.frmNuevoConductor = document.getElementById('frmNuevoConductor')

        this.rutConductor = document.getElementById('rutConductor')
        this.nombreConductor = document.getElementById('nombreConductor')
        this.tipoConductor = document.getElementById('tipoConductor')
        this.telefonoConductor = document.getElementById('telefonoConductor')

        this.btnCrearConductor = document.getElementById('btnCrearConductor')

        this.agregarEventListeners()
    }

    agregarEventListeners(){
        this.frmNuevoConductor.addEventListener('submit', this.crearRegistroConductor.bind(this))
    }

    crearRegistroConductor(evento){
        evento.preventDefault()

        baseDatos.agregarConductor(this.rutConductor.value, this.nombreConductor.value, this.tipoConductor.value, this.telefonoConductor.value)

        this.rutConductor.value = ''
        this.nombreConductor.value = ''
        this.tipoConductor.value = ''
        this.telefonoConductor.value = ''
    }
}

let gestorConductores = new GestorConductores();

