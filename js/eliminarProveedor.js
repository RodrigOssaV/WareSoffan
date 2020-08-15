const baseDatos = require('../js/bdProveedores.js')

class GestorProveedor{
    constructor(){
        this.registrosproveedores = document.getElementById('registrosproveedores')     
        this.cargarRegistroProveedor()
    }

    generarHtmlRegistroProveedor(proveedor){
        return `<tr>
            <td>${proveedor.idProveedor}</td>
            <td>${proveedor.nombreProveedor}</td>
            <td>${proveedor.tipoProveedor}</td>
            <td>${proveedor.precioAgente}</td>
            <td>${proveedor.precioExterno}</td>
            <td>${proveedor.precioInterno}</td>
            <td><input type="button" class="btn btn-danger btn-sm" onclick="gestorproveedor.eliminarRegistroProveedor('${proveedor.idProveedor}');" value="Eliminar"></td>
        </tr>`
    }
    
    cargarRegistroProveedor(){
        baseDatos.obtenerproveedor((result) => {
            let html = result.map(this.generarHtmlRegistroProveedor).join('')
            this.registrosproveedores.innerHTML = html
        })
    }

    eliminarRegistroProveedor(idProveedor){
        baseDatos.eliminarProveedor(idProveedor)

        this.cargarRegistroProveedor()
    }
}

let gestorproveedor = new GestorProveedor();