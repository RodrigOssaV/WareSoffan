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

exports.agregarProveedor = function(idProveedor, nombreProveedor, tipoProveedor, precioAgente, precioExterno, precioInterno){
    const proveedor = {
        idProveedor: idProveedor,
        nombreProveedor: nombreProveedor,
        tipoProveedor: tipoProveedor,
        precioAgente: precioAgente,
        precioExterno: precioExterno,
        precioInterno: precioInterno
    }

    connection.query("INSERT INTO proveedores SET ?", proveedor, function(err,result){
        if(err) throw err
    })
}

exports.obtenerproveedor = function(operacion){    
    connection.query("SELECT * FROM proveedores", function(err,result){
        if(result){
            operacion(result)
        }
    })
}

exports.eliminarProveedor = function(idProveedor){
    connection.query("DELETE FROM proveedores where idProveedor = ?", idProveedor, function (error, results, fields){
        if (error) throw error;
    })
}