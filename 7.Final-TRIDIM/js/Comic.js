
const tituloComic = document.querySelector(".titulo-comic");
const descripcionComic = document.querySelector(".Descripcion-comic");
const listaCaps = document.querySelector(".lista-caps");
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

tituloComic.textContent = comic.nombreComic;
descripcionComic.textContent = comic.categoria;
imgComic.src = comic.imPortada;


listaCaps.innerHTML = "";

comic.capitulos.forEach(cap => {
  const li = document.createElement("li");
  li.innerHTML = `
  <a href="./.html?id=${cap.id}">
    <img class="imgC"  src="${cap.imPortada}" alt="${cap.nombreCap}">
    <p>${cap.nombreCap}</p>
  `;
  listaCaps.appendChild(li);
});