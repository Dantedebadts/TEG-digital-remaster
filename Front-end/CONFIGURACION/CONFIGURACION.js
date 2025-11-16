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
   sonidoAnimacion.textContent = "Sonido de animación activado";
} else if (localStorage.getItem("sonidoAnimacion") === "true") {
   sonidoAnimacionValor = "true";
   sonidoAnimacion.textContent = "Sonido de animación activado";
} else if (localStorage.getItem("sonidoAnimacion") === "false") {
   sonidoAnimacionValor = "false";
   sonidoAnimacion.textContent = "Sonido de animación desactivado";
}
});

function cambiarSonidoAnimacion() {
  if (sonidoAnimacionValor === "true") {
    sonidoAnimacionValor = "false";
    sonidoAnimacion.textContent = "Sonido de animación desactivado";
    localStorage.setItem("sonidoAnimacion", "false");
  } else if (sonidoAnimacionValor === "false") {
    sonidoAnimacionValor = "true";
    sonidoAnimacion.textContent = "Sonido de animación activado";
    localStorage.setItem("sonidoAnimacion", "true");
  }
}

sonidoAnimacion.addEventListener("click", cambiarSonidoAnimacion);

//musica de fondo 
let musicaFondo = new Audio ("../AUDIO/musicaBackground.mp3");
let musicaFondoBoton = document.getElementById("musicaFondo");
let musicaFondoValor = "";
musicaFondo.loop = true;

addEventListener("DOMContentLoaded", () => {
if (localStorage.getItem("musicaFondoValor") === null) {
  musicaFondoValor = "false";
  musicaFondoBoton.textContent = "Música de fondo desactivada";
} else if (localStorage.getItem("musicaFondoValor") === "true") {
  musicaFondoValor = "true";
  musicaFondoBoton.textContent = "Música de fondo activada";
  sonarMusica();
} else if (localStorage.getItem("musicaFondoValor") === "false") {
  musicaFondoValor = "false";
  musicaFondoBoton.textContent = "Música de fondo desactivada";
}
});

function cambiarMusicaFondo() {
  if (musicaFondoValor === "true") {
    musicaFondoValor = "false";
    musicaFondoBoton.textContent = "Música de fondo desactivada";
    sonarMusica();
    localStorage.setItem("musicaFondoValor", "false");
  } else if (musicaFondoValor === "false") {
    musicaFondoValor = "true";
    musicaFondoBoton.textContent = "Música de fondo activada";
    sonarMusica();
    localStorage.setItem("musicaFondoValor", "true");
  }
}

function sonarMusica() {
  if (musicaFondoValor === "true") {
    musicaFondo.play();
    musicaFondo.currentTime = localStorage.getItem("tiempoMusica") || 0;
  } else if (musicaFondoValor === "false") {
    musicaFondo.pause();
    tiempoMusica();
  }
}

function tiempoMusica() {
  let tiempo = musicaFondo.currentTime;
  console.log(tiempo);
  localStorage.setItem("tiempoMusica", tiempo);
}

window.addEventListener("beforeunload", tiempoMusica);
musicaFondoBoton.addEventListener("click", cambiarMusicaFondo);

// barra de volumen
let valorVolumen = 1;

document.addEventListener("DOMContentLoaded", () => {
    let barraVolumen = document.getElementById("barraVolumen");

    let volumGuardado = localStorage.getItem("volumen");
    if (volumGuardado !== null) {
        valorVolumen = Number(volumGuardado);
    } else {
        valorVolumen = 1;
    }

    barraVolumen.value = valorVolumen;
    musicaFondo.volume = valorVolumen;

    barraVolumen.addEventListener("input", () => {
        valorVolumen = Number(barraVolumen.value);
        musicaFondo.volume = valorVolumen;
        localStorage.setItem("volumen", valorVolumen);
    });
});