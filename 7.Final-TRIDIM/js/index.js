
const mySidenav = document.querySelector("#mySidenav")
const barra = document.querySelector(".barra")
const sugerencia = document.querySelector(".sugerencia")
const btnSugerencia = document.querySelector(".btn-sugerencia")
const borrarSugerencia = document.querySelector(".x")
const formularioS = document.querySelector("#formulario-S")
const Nombre = document.querySelector("#Nombre");
const Mensaje = document.querySelector("#Mensaje");
const CorreoS = document.querySelector("#Correo-S");
const saludo = document.querySelector(".saludo");
const video = document.querySelector(".video-play");  
const btnPlay = document.querySelector(".play");     


function toggleVideo() {
  if (video.paused) {
    video.play();
    btnPlay.textContent = "⏸ Stop";
  } else {
    video.pause();
    btnPlay.textContent = "▶ Play";
  }
}


btnPlay.addEventListener("click", toggleVideo);


function openNav() {
  mySidenav.style.width = "200px";
}

function closeNav() {
  mySidenav.style.width = "0px";
}

barra.addEventListener("click", openNav)





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

btnSugerencia.addEventListener("click", enviarSugerencia)
borrarSugerencia.addEventListener("click", enviarSugerencia)

function registrarSugerencia(e) {
  e.preventDefault();
  let sugerencias = {
    userNombre: Nombre.value,
    userCorreo: CorreoS.value,
    userMensaje: Mensaje.value,
  }
  localStorage.setItem("sugerencias", JSON.stringify(sugerencias));
  window.location = "./index.html"
}

formularioS.addEventListener("submit", registrarSugerencia)





let nombreUser = JSON.parse(localStorage.getItem("user"));

saludo.innerHTML = `Hola ${nombreUser.userN}`