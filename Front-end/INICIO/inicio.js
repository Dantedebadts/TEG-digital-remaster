let newGame = document.getElementById("newGame");
let cargarGame = document.getElementById("cargarGame");
let valorBrillo = 1;
let atras = document.getElementById("atras");
let botonGuar = document.getElementById("botonGuar")
let botonCarg = document.getElementById("botonCarg");
let dialogPartidas = document.getElementById("partidas");
let ulPartidas = document.getElementById("ulPartidas");
let partidasGuardadas = [];
partidasGuardadas = JSON.parse(localStorage.getItem("partidasGuardadas"));

function nuevaPartida() {
  localStorage.setItem("cargarPartidaInicio", "false");
}

function listaPartidas() {
    dialogPartidas.showModal();
    ulPartidas.innerHTML = ''; 
    
    partidasGuardadas.forEach(partida => {
        let opcionPartida = document.createElement("li");
        opcionPartida.textContent = partida.nombre + " - " + partida.fecha;
        
        opcionPartida.addEventListener("click", () => {
            cargarPartida(partida.nombre); 
            dialogPartidas.close();
        });

        ulPartidas.appendChild(opcionPartida);
    });
};

function cargarPartida(nombre) {
  localStorage.setItem("cargarPartidaInicio", "true");
  localStorage.setItem("partidaAJugar", nombre);
  window.location.href = "../JUEGO/game.html";
}

newGame.addEventListener("click", () => nuevaPartida());
cargarGame.addEventListener("click", () => listaPartidas());

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
    sonarMusica();
  } else {
    sonarMusica();
  }
});
  
atras.addEventListener("click", () => {
  dialogPartidas.close();
});

