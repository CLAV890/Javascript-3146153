const imagenMario= document.querySelector("#imagenMario");

const Btn1= document.querySelector("#Btn1")
const Btn2= document.querySelector("#Btn2")
const Btn3= document.querySelector("#Btn3")


function blancoynegro () {
    console.log("Imagen modificada")
    imagenMario.style.filter = "grayscale(100%)"

}
function desenfoque () {
    imagenMario.style.filter = "blur(5px)";
}


function rotacionyzoom () {
    imagenMario.style.transform = "scale(1.5)";

    imagenMario.style.transform= "rotate(45deg)";

}






Btn1.addEventListener("click", blancoynegro);
Btn2.addEventListener("click", desenfoque);
Btn3.addEventListener("click", rotacionyzoom);