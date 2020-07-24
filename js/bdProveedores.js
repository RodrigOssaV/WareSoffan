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
        exports.agregarProveedor = function(idProveedor, nombreProveedor, tipoProveedor, precioAgente, precioExterno, precioInterno) {
            var proveedor = {
                idProveedor: idProveedor,
                nombreProveedor: nombreProveedor,
                tipoProveedor: tipoProveedor,
                precioAgente: precioAgente,
                precioExterno: precioExterno,
                precioInterno: precioInterno
            }
        
            var query = connection.query('INSERT INTO proveedores SET ?', proveedor,function (error, results, fields) {
                if (error) throw error;
                console.log('Todo: ' + results)
            })
            console.log(query.sql);
        }
    }
})


