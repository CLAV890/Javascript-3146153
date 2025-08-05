const monedas = document.querySelectorAll(".coin")
const corazones = document.querySelectorAll(".corazon")
const contadorMoendas = document.querySelector("#contador-monedas")
const contadorCorazones = document.querySelector("#contador-corazones")
let totalMonedas = 0
let totalCorazones = 0


console.log(monedas, corazones, contadorMoendas, contadorCorazones)

monedas.forEach(function (moneda) {

    moneda.addEventListener("click", function () {
        moneda.classList.add("saltar")
        totalMonedas++
        contadorMoendas.textContent= totalMonedas

    })
  
})

corazones.forEach(  function (corazon){

 corazon.addEventListener("click", function () {
    corazon.classList.add("saltar")
    totalCorazones
    contadorCorazones.textContent= totalCorazones

    })
    
    
})