// ----------------- MONEDAS Y CORAZONES -----------------
const monedas = document.querySelectorAll(".coin");
const corazones = document.querySelectorAll(".corazon");
const contadorMonedas = document.querySelector("#contador-monedas");
const contadorCorazones = document.querySelector("#contador-corazones");
let totalMonedas = 0;
let totalCorazones = 0;

monedas.forEach(moneda => {
  moneda.addEventListener("click", () => {
    moneda.classList.add("saltar");
    totalMonedas++;
    contadorMonedas.textContent = totalMonedas;
  });
});

corazones.forEach(corazon => {
  corazon.addEventListener("click", () => {
    corazon.classList.add("saltar");
    totalCorazones++;
    contadorCorazones.textContent = totalCorazones;
  });
});

// ----------------- ESCENAS -----------------
const escenas = document.querySelectorAll(".escena");
const btnanterior = document.querySelector(".anterior");
const btnsiguiente = document.querySelector(".siguiente");
const miniaturas = document.querySelectorAll(".miniaturas img");

let indice = 0;

function mostrarEscena(i) {
  escenas.forEach(e => e.classList.remove("activa"));
  escenas[i].classList.add("activa");
  indice = i;
  reproducirSonidoEscena(i);
}

btnsiguiente.addEventListener("click", () => {
  indice++;
  if (indice >= escenas.length) indice = 0;
  mostrarEscena(indice);
});

btnanterior.addEventListener("click", () => {
  indice--;
  if (indice < 0) indice = escenas.length - 1;
  mostrarEscena(indice);
});

miniaturas.forEach((miniatura, i) => {
  miniatura.addEventListener("click", () => {
    mostrarEscena(i);
  });
});

// ----------------- AUDIOS -----------------
const audios = [
  document.getElementById("audio-escena1"),
  document.getElementById("audio-escena2"),
  document.getElementById("audio-escena3"),
];

let audioActivo = null;
let sonidoReproduciendo = false;

function reproducirSonidoEscena(i) {
  if (audioActivo) {
    audioActivo.pause();
    audioActivo.currentTime = 0;
  }

  if (sonidoReproduciendo) {
    audioActivo = audios[i];
    audioActivo.play();
  }
}

// ----------------- BOTÓN PLAY / STOP -----------------
const btnPlaystop = document.getElementById("play-stop-img3");
btnPlaystop.addEventListener("click", () => {
  sonidoReproduciendo = !sonidoReproduciendo;
  btnPlaystop.textContent = sonidoReproduciendo ? "stop" : "play";

  if (sonidoReproduciendo) {
    reproducirSonidoEscena(indice);
  } else if (audioActivo) {
    audioActivo.pause();
    audioActivo.currentTime = 0;
  }
});

// Iniciar en la primera escena
mostrarEscena(0);
