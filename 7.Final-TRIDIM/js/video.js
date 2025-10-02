const flechaBack=document.querySelector(".btnBack")
const params = new URLSearchParams(window.location.search)
const id = parseInt(params.get("id"))


flechaBack.innerHTML =`
<a href="./Comic.html?id=${capitulo.id}">
            <i id="flech" class="fa-solid fa-arrow-left flecha"></i>
        </a>

  `
