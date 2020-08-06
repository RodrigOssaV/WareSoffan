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
        exports.agregarProducto = function(idProveedor, fechaIngreso, cantidadIngreso) {
            var producto = {
                // idProducto: idProducto,
                idProveedor: idProveedor,
                fechaIngreso: fechaIngreso,
                cantidadIngreso: cantidadIngreso
            }
            //----- Validador de código proveedor
            var query = connection.query('select count(idProveedor) as Valor from proveedores where idProveedor = ?', idProveedor, function(error,results,fields){
                if(error){
                    // ----- Si hay un error en la consulta query
                    console.log(error)
                }
                // ----- Si no hay error en la consulta query
                console.log("Esto son los resultados: ", results[0].Valor) //Imprimo los resultados de la consulta query.                
                if(results[0].Valor === 1){ // El código de proveedor existe, puedo guardar el producto
                    console.log("Proveedor existe!!")

                    var query2 = connection.query('INSERT INTO productos SET ?', producto, function (error, results, fields) {
                        if (error) throw error;
                        console.log('Todo: ' + results)
                    })
                    console.log(query2.sql);

                }else{ // El código de proveedor no existe, no puedo guardar el producto, debo ingresar proveedor primero.
                    console.log("Proveedor no existe!!")
                }
            })
            //----- Validador de código proveedor           
        }
    }
})