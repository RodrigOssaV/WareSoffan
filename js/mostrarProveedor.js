const baseDatos = require('../js/bdProveedores.js')

class GestorProveedor{
    constructor(){
        this.registrosproveedores = document.getElementById('registrosproveedores')
     
        this.cargarRegistroProveedor()
        console.log("entro al constructor")
    }

    generarHtmlRegistroProveedor(proveedor){
        return `<tr>
            <td>${proveedor.idProveedor}</td>
            <td>${proveedor.nombreProveedor}</td>
            <td>${proveedor.tipoProveedor}</td>
            <td>${proveedor.precioAgente}</td>
            <td>${proveedor.precioExterno}</td>
            <td>${proveedor.precioInterno}</td>
        </tr>`
    }
    
    cargarRegistroProveedor(){
        baseDatos.obtenerproveedor((proveedor) => {
            let html = proveedor.map(this.generarHtmlRegistroProveedor).join('')

            this.registrosproveedores.innerHTML = html
        })
    }
}

let gestorproveedor = new GestorProveedor();