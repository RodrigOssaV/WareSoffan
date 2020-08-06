const baseDatos = require('../js/bdProductos.js')

class GestorProductos{
    constructor(){
        this.frmNuevoProducto = document.getElementById('frmNuevoProducto')
        // this.idProducto = document.getElementById('idProducto')
        this.idProveedor = document.getElementById('idProveedor')
        this.fechaIngreso = document.getElementById('fechaIngreso')
        this.cantidadIngreso = document.getElementById('cantidadIngreso')
        this.btnCrearProducto = document.getElementById('btnCrearProducto')

        this.agregarEventListeners()
    }

    agregarEventListeners(){
        this.frmNuevoProducto.addEventListener('submit', this.crearRegistroProducto.bind(this))
    }

    crearRegistroProducto(evento){
        evento.preventDefault()
        // baseDatos.agregarProducto(this.idProducto.value, this.idProveedor.value, this.fechaIngreso.value, this.cantidadIngreso.value)
        baseDatos.agregarProducto(this.idProveedor.value, this.fechaIngreso.value, this.cantidadIngreso.value)

        // this.idProducto.value = ''
        this.idProveedor.value = ''
        this.fechaIngreso.value = ''
        this.cantidadIngreso.value = ''
    }
}

let gestorProductos = new GestorProductos();