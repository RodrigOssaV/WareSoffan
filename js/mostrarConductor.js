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
        </tr>`
    }
    
    cargarRegistroConductor(){
        baseDatos.obtenerconductor((result) => {
            let html = result.map(this.generarHtmlRegistroConductor).join('')
            this.registrosconductores.innerHTML = html
        })
    }
}

let gestorconductor = new GestorConductor();