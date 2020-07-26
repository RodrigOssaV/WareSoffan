// funciones en interacción con el usuario
function clickProveedor(){
    var ventanaProveedor
    var configuracionVentanaProveedor = "width=480, height=700, status=1, minWidth=480, minHeight=700, maxWidth=480, maxHeight=700"
    function abrirVentanaProveedor(){
        ventanaProveedor = window.open("../pages/proveedor.html", "Ingreso proveedores a WareSoffan", configuracionVentanaProveedor)
    }
    abrirVentanaProveedor()
}

function clickConductor(){
    var ventanaConductor
    var configuracionVentanaConductor = "width=480, height=700, status=1"//, minWidth=480, minHeight=700, maxWidth=480, maxHeight=700"
    function abrirVentanaConductor() {
        ventanaConductor = window.open("../pages/conductor.html", "Ingreso conductores a WareSoffan", configuracionVentanaConductor)
      }    
      abrirVentanaConductor()
}

function clickProducto(){
    var ventanaProducto
    var configuracionVentanaProducto = "width=480, height=700, status=1, minWidth=480, minHeight=700, maxWidth=480, maxHeight=700"
    function abrirVentanaProducto(){
        ventanaProducto = window.open("../pages/producto.html", "Ingreso productos a WareSoffan", configuracionVentanaProducto)
    }
    abrirVentanaProducto()
}

function volverAtras(){
    window.location = "../pages/index.html"
}
// funciones en interacción con el usuario