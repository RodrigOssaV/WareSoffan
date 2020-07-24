// funciones en interacción con el usuario
function clickProveedor(){
    var ventanaProveedor
    var configuracionVentanaProveedor = "menubar = yes, location = yes, resizable = yes, scrollbars = yes, status = yes"

    function abrirVentanaProveedor(){
        ventanaProveedor = window.open("../pages/proveedor.html", "Ingreso proveedores a WareSoffan", configuracionVentanaProveedor)
    }

    abrirVentanaProveedor()
}

// function clickConductor(){
//     var ventanaConductor
//     var configuracionVentanaConductor = "width: 1024px, height: 768px, menubar = yes, location = yes, resizable = yes, scrollbars = yes, status = yes"

//     function abrirVentanaConductor() {
//         ventanaConductor = window.open("conductor.html", "Ingreso conductores a WareSoffan", configuracionVentanaConductor)
//       }
//       // Llamamos a la función      
//       abrirVentanaConductor()
// }

// function clickProducto(){
//     var ventanaProducto
//     var configuracionVentanaProducto = "menubar = yes, location = yes, resizable = yes, scrollbars = yes, status = yes"

//     function abrirVentanaProducto(){
//         ventanaProducto = window.open("producto.html", "", configuracionVentanaProducto)
//     }

//     abrirVentanaProducto()
// }

function volverAtras(){
    window.location = "../pages/index.html"
}
// funciones en interacción con el usuario