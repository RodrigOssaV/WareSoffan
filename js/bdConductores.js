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
            //----- Validador de RUT
            var query = connection.query('select count(rutConductor) as Valor from conductores where rutConductor = ?', rutConductor, function(error,results,fields){
                if(error){
                    // ----- Si hay un error en la consulta query
                    console.log(error)
                }
                // ----- Si no hay error en la consulta query
                console.log("Esto son los resultados: ", results[0].Valor) //Imprimo los resultados de la consulta query.                
                if(results[0].Valor === 1){ // El rut registrado YA SE encuentra en la base de datos.
                    console.log("rut registrado")
                }else{ // El rut registrado NO se encuentra en la base de datos.
                    console.log("rut no registrado")
                }
            })
            //----- Validador de RUT
            
            var query2 = connection.query('INSERT INTO conductores SET ?', conductor,function (error, results, fields) {
                if (error) throw error;
                console.log('Todo: ' + results)
            })
            console.log(query2.sql);
        }
    }
})