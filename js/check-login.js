// ----- Función simple login -----
function Login(){
    var usuario = document.login.usuario.value 
    var password = document.login.password.value

    if (usuario=="admin" && password=="admin"){ 
        window.location = "./pages/index.html"
    }else{
        alert("Usuario y/o contraseña incorrectos")
        location.reload()
    }
} 