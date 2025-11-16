let newGame = document.getElementById("newGame");
let cargarGame = document.getElementById("cargarGame");
let valorBrillo = 1;
let botonGuar = document.getElementById("botonGuar")
let botonCarg = document.getElementById("botonCarg");

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

document.addEventListener("DOMContentLoaded", () => {
  let estado = localStorage.getItem("estadoJuego")
  let contEstado = JSON.parse(estado);
  if (contEstado != null) {
    botonCarg.style.visibility = "visible";
  } else if (contEstado === null) {
    botonCarg.style.visibility = "hidden";
}});

document.addEventListener('DOMContentLoaded', function(){
  if (localStorage.getItem('musicaEncendida') === 'si') {
    cargarYReproducir();
  } else {
    pausarTodas();
  }
});
  