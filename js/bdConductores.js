var mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'soffan_db'
})

connection.connect(function(err){
    if(err){
        // Si no se conecta a la base de datos, tira los errores
        console.log(err.code)
        console.log(err.fatal)
    }else{
        // Si la conexión se establece...
        exports.agregarConductor = function(rutConductor, nombreConductor, tipoConductor, telefonoConductor) {
            var conductor = {
                rutConductor: rutConductor,
                nombreConductor: nombreConductor,
                tipoConductor: tipoConductor,
                telefonoConductor: telefonoConductor
            }
        
            var query = connection.query('INSERT INTO conductores SET ?', conductor,function (error, results, fields) {
                if (error) throw error;
                console.log('Todo: ' + results)
            })
            console.log(query.sql);
        }
    }
})