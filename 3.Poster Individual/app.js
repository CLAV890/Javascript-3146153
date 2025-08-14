
const todos = document.querySelectorAll('.personaje');
const pacman = document.querySelectorAll('.pacman');
const Contadorpacman = document.querySelector("#contador-pacman");
const Contadorfantasmitas = document.querySelector("#contador-fantasmitas");

let TotalPacman = 0;
let TotalFantasmitas = 0;


const playBtn = document.querySelector("#playBtn");
playBtn.addEventListener("click", () => {
    todos.forEach(personaje => {
        if (personaje.classList.contains('pacman')) {
            personaje.style.animation = 'pacmanBoca 0.3s steps(2) infinite, mover 5s linear infinite';
        } else {
            personaje.style.animation = 'mover 5s linear infinite';
        }
    });
});

todos.forEach(personaje => {
    personaje.addEventListener("click", () => {
        personaje.style.display = "none"; 

        if (personaje.classList.contains('pacman')) {
            TotalPacman++;
            Contadorpacman.textContent = TotalPacman;
        } else {
            TotalFantasmitas++;
            Contadorfantasmitas.textContent = TotalFantasmitas;
        }
    });
});
