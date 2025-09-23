
const sugerencia = document.querySelector(".sugerencia")
const btnSugerencia = document.querySelector(".btn-sugerencia")
const borrarSugerencia = document.querySelector(".x")
const formularioS = document.querySelector("#formulario-S")
const Nombre = document.querySelector("#Nombre");
const Mensaje = document.querySelector("#Mensaje");
const CorreoS = document.querySelector("#Correo-S");

function enviarSugerencia() {
  if (sugerencia.style.display === "none") {
    sugerencia.style.display = "block";
  } else {
    sugerencia.style.display = "none";
  }
}


function cerrarSugerencia() {
  sugerencia.style.display = "none";
}

function registrarSugerencia(e) {
  e.preventDefault();
  let sugerencias = {
    userNombre: Nombre.value,
    userCorreo: CorreoS.value,
    userMensaje: Mensaje.value,
  }

  localStorage.setItem("sugerencias", JSON.stringify(sugerencias));
  window.location = "./inicio-sesión.html"
}

formularioS.addEventListener("submit", registrarSugerencia)
btnSugerencia.addEventListener("click", enviarSugerencia)
borrarSugerencia.addEventListener("click", enviarSugerencia)



const Username = document.querySelector("#Username");
const Password = document.querySelector("#Password");
const formulario = document.querySelector("#formulario");

function validarUsuario(e) {
  e.preventDefault();

  let currentUser = JSON.parse(localStorage.getItem("user"));

  if (Username.value === currentUser.userN && Password.value === currentUser.userP) {
    window.location = "../index.html"
  } else {
    alert("El usuario o la contraseña es incorrecta");
  }

  formulario.reset()
}

formulario.addEventListener("submit", validarUsuario)