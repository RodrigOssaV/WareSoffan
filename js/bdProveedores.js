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
    var queryIngreso = ("INSERT INTO proveedores SET ?", proveedor)
    console.log(queryIngreso)

    connection.query(queryIngreso, function(err,result){
        if(err) throw err
    })
}