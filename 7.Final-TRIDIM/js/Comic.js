
const tituloComic = document.querySelector(".titulo-comic");
const descripcionComic = document.querySelector(".Descripcion-comic");
const listaCaps = document.querySelector(".lista-caps");
const video = document.querySelector(".video-play");
const btnPlay = document.querySelector(".play");
const params = new URLSearchParams(window.location.search)
const id = parseInt(params.get("id"))
const container1 = document.querySelector(".container1");

console.log("Te encuentras en el capitulo", id)

//Buscar capítulo en la base de datos
const capitulo = comic.capitulos.find(cap => cap.id === id)

console.log(capitulo)

//Mostrar la información del capitulo en pantalla
container1.innerHTML = `
  <div class="text-box">
                    <small class="small">Capitulo ${capitulo.id}</small>
                    <h1 class="h11">${capitulo.personajes}</h1>
                    <p class="p1">${capitulo.descripcion}</p>
                    <a href="../vistas/video.html?id=${capitulo.id}"  class="reproducir" >${capitulo.btnReproducir}</a>   
                </div>
              <img class="video-play"  src="${capitulo.imPortada}"  controls></img>
              
  </div>
  `

/* container1.appendChild(container1); */



function toggleVideo() {
  if (video.paused) {
    video.play();
    btnPlay.textContent = "⏸ Stop";
  } else {
    video.pause();
    btnPlay.textContent = "▶ Play";
  }
}

/* btnPlay.addEventListener("click", toggleVideo); */

/* tituloComic.textContent = comic.nombreComic; */
/* descripcionComic.textContent = comic.categoria; */
/* imgComic.src = comic.imPortada; */


listaCaps.innerHTML = "";

comic.capitulos.forEach(cap => {
  const li = document.createElement("li");
  li.innerHTML = `
  <a href="./Comic.html?id=${capitulo.id}">
    <img class="imgC"  src="${cap.imPortada}" alt="${cap.nombreCap}">
    <p>${cap.nombreCap}</p>
  `;
  listaCaps.appendChild(li);
});