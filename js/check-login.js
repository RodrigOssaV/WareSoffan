// ----- Función simple login -----
function Login(){
    var usuario = document.login.usuario.value 
    var password = document.login.password.value

    if (usuario=="admin" && password=="15915959"){ 
        window.location = "./pages/index.html"
    }else{
        alert("Usuario y/o contraseña incorrectos")
        javascript:location.reload()
    }
} 