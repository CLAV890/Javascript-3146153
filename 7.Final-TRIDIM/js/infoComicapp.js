

const tituloComic = document.querySelector(".titulo-comic");
const descripcionComic = document.querySelector(".Descripcion-comic");
const imgComic = document.querySelector(".img-comic");
const listaCaps = document.querySelector(".lista-caps");


tituloComic.textContent = comic.nombreComic;
descripcionComic.textContent = comic.categoria;
imgComic.src = comic.imPortada;


listaCaps.innerHTML = "";

comic.capitulos.forEach(cap => {
  const li = document.createElement("li");
  li.innerHTML = `
    <img class="imgC"  src="${cap.imPortada}" alt="${cap.nombreCap}">
    <p>${cap.nombreCap}</p>
  `;
  listaCaps.appendChild(li);
});
