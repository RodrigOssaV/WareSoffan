const baseDatos = require('../js/bdProveedores.js')

class GestorProveedores{
    constructor(){
        this.frmNuevoProveedor = document.getElementById('frmNuevoProveedor')
        this.idProveedor = document.getElementById('idProveedor')
        this.nombreProveedor = document.getElementById('nombreProveedor')
        this.tipoProveedor = document.getElementById('tipoProveedor')
        this.precioAgente = document.getElementById('precioAgente')
        this.precioExterno = document.getElementById('precioExterno')
        this.precioInterno = document.getElementById('precioInterno')
        this.btnCrearProveedor = document.getElementById('brnCrearProveedor')

        this.agregarEventListeners();
    }

    agregarEventListeners(){
        this.frmNuevoProveedor.addEventListener('submit', this.crearRegistroProveedor.bind(this))
    }

    crearRegistroProveedor(evento){
        evento.preventDefault()

        baseDatos.agregarProveedor(this.idProveedor.value, this.nombreProveedor.value, this.tipoProveedor.value, this.precioAgente.value, this.precioExterno.value, this.precioInterno.value)

        this.idProveedor.value = ''
        this.nombreProveedor.value = ''
        this.tipoProveedor.value = ''
        this.precioAgente.value = ''
        this.precioExterno.value = ''
        this.precioInterno.value = ''
    }
}

let gestorProveedores = new GestorProveedores();

