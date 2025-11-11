let newGame = document.getElementById("newGame");
let cargarGame = document.getElementById("cargarGame");
let valorBrillo = 1;

function nuevaPartida() {
  localStorage.setItem("cargarPartidaInicio", "false");
}

function cargarPartida() {
  localStorage.setItem("cargarPartidaInicio", "true");
}

newGame.addEventListener("click", () => nuevaPartida());
cargarGame.addEventListener("click", () => cargarPartida());

document.addEventListener("DOMContentLoaded", () => {
  if(localStorage.getItem("brillo") != "null"){
  valorBrillo = localStorage.getItem("brillo")
  valorBrillo = parseFloat(valorBrillo);
  };
  document.body.style.filter = "brightness(" + valorBrillo + ")";
});