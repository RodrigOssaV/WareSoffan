// funciones en interacción con el usuario

function volverAtras(){
    window.location = "../pages/index.html"
}

// ---- Funciones de los proveedores
function clickProveedor(){
    var ventanaProveedor
    var configuracionVentanaProveedor = "width=480, height=700, status=1, minWidth=480, minHeight=700, maxWidth=480, maxHeight=700"
    function abrirVentanaProveedor(){
        ventanaProveedor = window.open("../pages/proveedor.html", "Ingreso proveedores a WareSoffan", configuracionVentanaProveedor)
    }
    abrirVentanaProveedor()
}

function mostrarProveedores(){
    var ventanaProveedores
    var configuracionVentanaProveedores = "status=1, minWidth=520, minHeight=560"
    function abrirVentanaProveedores(){
        ventanaProveedores = window.open("../pages/showProveedor.html", "Proveedores asociados a WareSoffan", configuracionVentanaProveedores)
    }
    abrirVentanaProveedores()
}

// ---- Funciones de los conductores 
function clickConductor(){
    var ventanaConductor
    var configuracionVentanaConductor = "width=480, height=700, status=1, minWidth=480, minHeight=700, maxWidth=480, maxHeight=700"
    function abrirVentanaConductor() {
        ventanaConductor = window.open("../pages/conductor.html", "Ingreso conductores a WareSoffan", configuracionVentanaConductor)
      }    
      abrirVentanaConductor()
}

function mostrarConductores(){
    var ventanaConductores
    var configuracionVentanaConductores = "status=1, minWidth=520, minHeight=560"
    function abrirVentanaConductores(){
        ventanaConductores = window.open("../pages/showConductores.html", "Conductores asociados a WareSoffan", configuracionVentanaConductores)
    }
    abrirVentanaConductores()
}

// ---- Funciones de los productos
function clickProducto(){
    var ventanaProducto
    var configuracionVentanaProducto = "width=480, height=700, status=1, minWidth=480, minHeight=700, maxWidth=480, maxHeight=700"
    function abrirVentanaProducto(){
        ventanaProducto = window.open("../pages/producto.html", "Ingreso productos a WareSoffan", configuracionVentanaProducto)
    }
    abrirVentanaProducto()
}
// funciones en interacción con el usuario