// barra de valor brillo
let valorBrillo = 1;

document.addEventListener("DOMContentLoaded", () => {
  let barraBrillo = document.getElementById("barraBrillo");
  if(localStorage.getItem("brillo") != "null"){
  valorBrillo = localStorage.getItem("brillo");
  };
  barraBrillo.value = valorBrillo;
  document.body.style.filter = "brightness(" + valorBrillo + ")";

  barraBrillo.addEventListener("input", () => {
    let valorBrillo = barraBrillo.value;
    document.body.style.filter = "brightness(" + valorBrillo + ")";
    localStorage.setItem("brillo", valorBrillo);
  });
});

//resetear el brillo
function resetbrillo() {
valorBrillo = 1;
barraBrillo.value = 1;
document.body.style.filter = "brightness(" + valorBrillo + ")";
localStorage.setItem("brillo", valorBrillo);
};

let restablecerBrillo = document.getElementById("restablecerBrillo");
restablecerBrillo.addEventListener("click", resetbrillo);

//sonidos animacion
let sonidoAnimacion = document.getElementById("sonidoAnimacion");
let sonidoAnimacionValor = "";

addEventListener("DOMContentLoaded", () => {
if (localStorage.getItem("sonidoAnimacion") === null) {
   sonidoAnimacionValor = "true";
   sonidoAnimacion.textContent = "Sonidos de animación activado";
} else if (localStorage.getItem("sonidoAnimacion") === "true") {
   sonidoAnimacionValor = "true";
   sonidoAnimacion.textContent = "Sonido de animación activado";
} else if (localStorage.getItem("sonidoAnimacion") === "false") {
   sonidoAnimacionValor = "false";
   sonidoAnimacion.textContent = "Sonidos de animación desactivado";
}
});

function cambiarSonidoAnimacion() {
  if (sonidoAnimacionValor === "true") {
    sonidoAnimacionValor = "false";
    sonidoAnimacion.textContent = "Sonidos de animación desactivado";
    localStorage.setItem("sonidoAnimacion", "false");
  } else if (sonidoAnimacionValor === "false") {
    sonidoAnimacionValor = "true";
    sonidoAnimacion.textContent = "Sonidos de animación activado";
    localStorage.setItem("sonidoAnimacion", "true");
  }
}

sonidoAnimacion.addEventListener("click", cambiarSonidoAnimacion);

//musica background
let musicaBackground = document.getElementById("musicaBackground");
let musicaActiva = false;

addEventListener("DOMContentLoaded", function() {
  let estadoGuardado = localStorage.getItem("musicaEncendida");
  if (estadoGuardado === "si") {
    musicaActiva = true;
    musicaBackground.textContent = "Música de fondo activada";
    cargarYReproducir();
  } else {
    musicaActiva = false;
    musicaBackground.textContent = "Música de fondo desactivada";
    pausarTodas();
  }
});

function cambiarMusicaBackground() {
  if (musicaActiva === false) {
    musicaActiva = true;
    musicaBackground.textContent = "Música de fondo activada";
    localStorage.setItem("musicaEncendida", "si");
    cargarYReproducir();
  } else {
    musicaActiva = false;
    musicaBackground.textContent = "Música de fondo desactivada";
    localStorage.setItem("musicaEncendida", "no");
    pausarTodas();
  }
}

musicaBackground.addEventListener("click", cambiarMusicaBackground);