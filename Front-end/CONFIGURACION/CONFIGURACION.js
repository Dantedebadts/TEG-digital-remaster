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
let musicaBackgroundValor = "";
addEventListener("DOMContentLoaded", () => {
  // Inicializar texto del botón de música (la reproducción está delegada a musica.js)
  if (localStorage.getItem("musicaBackground") === "true") {
    musicaBackgroundValor = "true";
    musicaBackground.textContent = "Música de fondo activada";
  } else {
    musicaBackgroundValor = "false";
    musicaBackground.textContent = "Música de fondo desactivada";
  }
});

function cambiarMusicaBackground() {
  if (musicaBackgroundValor === "true") {
    musicaBackgroundValor = "false";
    musicaBackground.textContent = "Música de fondo desactivada";
    localStorage.setItem("musicaBackground", "false");
    // Delegar la pausa a musica.js
    if (typeof desactivarMusica === 'function') desactivarMusica();
  } else {
    musicaBackgroundValor = "true";
    musicaBackground.textContent = "Música de fondo activada";
    localStorage.setItem("musicaBackground", "true");
    // Delegar la reproducción a musica.js
    if (typeof activarMusica === 'function') activarMusica();
  }
}

musicaBackground.addEventListener("click", cambiarMusicaBackground);