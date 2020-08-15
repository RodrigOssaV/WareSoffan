const baseDatos = require('../js/bdConductores.js')

class GestorConductor{
    constructor(){
        this.registrosconductores = document.getElementById('registrosconductores')     
        this.cargarRegistroConductor()
    }

    generarHtmlRegistroConductor(conductor){
        return `<tr>
                    <td>${conductor.rutConductor}</td>
                    <td>${conductor.nombreConductor}</td>
                    <td>${conductor.tipoConductor}</td>
                    <td>${conductor.telefonoConductor}</td>
                    <td><input type="button" class="btn btn-danger btn-sm" onclick="gestorconductor.eliminarRegistroConductor('${conductor.rutConductor}');" value="Eliminar"></td>
                </tr>`
    }
    
    cargarRegistroConductor(){
        baseDatos.obtenerconductor((result) => {
            let html = result.map(this.generarHtmlRegistroConductor).join('')
            this.registrosconductores.innerHTML = html
        })
    }

    eliminarRegistroConductor(rutConductor){
        baseDatos.eliminarConductor(rutConductor)

        this.cargarRegistroConductor()
    }
}

let gestorconductor = new GestorConductor();