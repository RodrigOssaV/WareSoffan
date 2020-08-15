var mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'soffan_db'
})

connection.connect(function(err){
    if(err){
        console.log(err.code)
        console.log(err.fatal)
    }
})

exports.agregarConductor = function(rutConductor, nombreConductor, tipoConductor, telefonoConductor) {
    var conductor = {
        rutConductor: rutConductor,
        nombreConductor: nombreConductor,
        tipoConductor: tipoConductor,
        telefonoConductor: telefonoConductor
    }

    var query = connection.query('INSERT INTO conductores SET ?', conductor,function (error, results, fields) {
        if (error) throw error;
    })
}

exports.obtenerconductor = function(operacion){    
    connection.query("SELECT * FROM conductores", function(err,result){
        if(result){
            operacion(result)
        }
    })
}

exports.eliminarConductor = function(rutConductor){
    connection.query("DELETE FROM conductores where rutConductor = ?", rutConductor, function (error, results, fields){
        if (error) throw error;
    })
}