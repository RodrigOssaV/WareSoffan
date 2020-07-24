// Función que permite refrescar la página inicial
function volverAtras(){
    window.location = "../pages/index.html"
}

// ----- Funciones que se encargan de ingresar proveedores, conductores y productos al sistema. -----
function clickProveedor(){
    var ventanaProveedor
    var configuracionVentanaProveedor = "menubar = yes, location = yes, resizable = yes, scrollbars = yes, status = yes"

    function abrirVentanaProveedor(){
        ventanaProveedor = window.open("../pages/proveedor.html", "Ingreso proveedores a WareSoffan", configuracionVentanaProveedor)
    }
    abrirVentanaProveedor()
}

function clickConductor(){
    var ventanaConductor
    var configuracionVentanaConductor = "width: 1024px, height: 768px, menubar = yes, location = yes, resizable = yes, scrollbars = yes, status = yes"

    function abrirVentanaConductor() {
        ventanaConductor = window.open("../pages/conductor.html", "Ingreso conductores a WareSoffan", configuracionVentanaConductor)
    }   
      abrirVentanaConductor()
}

function clickProducto(){
    var ventanaProducto
    var configuracionVentanaProducto = "menubar = yes, location = yes, resizable = yes, scrollbars = yes, status = yes"

    function abrirVentanaProducto(){
        ventanaProducto = window.open("../pages/producto.html", "Ingreso productos a bodega WareSoffan", configuracionVentanaProducto)
    }
    abrirVentanaProducto()
}
// ----- Funciones que se encargan de ingresar proveedores, conductores y productos al sistema. -----


