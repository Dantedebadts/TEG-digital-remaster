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
let musicaBackground1 = new Audio("../AUDIO/musicaBackground1.mp3");
let musicaBackground2 = new Audio("../AUDIO/musicaBackground2.mp3");
let musicaBackground3 = new Audio("../AUDIO/musicaBackground3.mp3");

addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("musicaBackground") === null || localStorage.getItem("musicaBackground") === "true") {
    musicaBackgroundValor = "true";
    musicaBackground.textContent = "Música de fondo activada";
    cargarMusicaGuardada(); 
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
    detenerMusica();
  } else {
    musicaBackgroundValor = "true";
    musicaBackground.textContent = "Música de fondo activada";
    localStorage.setItem("musicaBackground", "true");
    musica();
  }
}

musicaBackground.addEventListener("click", cambiarMusicaBackground);

//variables para estado musica actual
let pistaActual = null;
let musicaAleatoria = null;
let actualizadorMusica = null;

function musica() {
  if (localStorage.getItem("musicaBackground") === "true") {
    musicaAleatoria = Math.floor(Math.random() * 3) + 1;
    let pista;

    if (musicaAleatoria === 1) pista = musicaBackground1;
    else if (musicaAleatoria === 2) pista = musicaBackground2;
    else pista = musicaBackground3;

    pistaActual = pista;
    pista.play();
    iniciarGuardoMusica();
    pista.onended = musica;
  }
}

function detenerMusica() {
  musicaBackground1.pause();
  musicaBackground2.pause();
  musicaBackground3.pause();

  musicaBackground1.currentTime = 0;
  musicaBackground2.currentTime = 0;
  musicaBackground3.currentTime = 0;

  detenerGuardoMusica();
}

function iniciarGuardoMusica() {
  if (actualizadorMusica !== null) {
    clearInterval(actualizadorMusica);
  }

  actualizadorMusica = setInterval(() => {
    if (pistaActual && !pistaActual.paused) {
      localStorage.setItem("musicaActual", JSON.stringify({
        pista: musicaAleatoria,
        tiempo: pistaActual.currentTime,
      }));
    }
  }, 10);
}

function detenerGuardoMusica() {
  if (actualizadorMusica !== null) {
    clearInterval(actualizadorMusica);
    actualizadorMusica = null;
  }
}

function cargarMusicaGuardada() {
  let musicaGuardada = JSON.parse(localStorage.getItem("musicaActual"));
  
  // Verificar si ya hay música reproduciéndose globalmente
  let hayMusica = !musicaBackground1.paused || !musicaBackground2.paused || !musicaBackground3.paused;
  
  if (hayMusica) {
    // Si ya hay música sonando, no hacer nada, solo mantener el guardado
    if (!musicaBackground1.paused) {
      pistaActual = musicaBackground1;
      iniciarGuardoMusica();
    } else if (!musicaBackground2.paused) {
      pistaActual = musicaBackground2;
      iniciarGuardoMusica();
    } else if (!musicaBackground3.paused) {
      pistaActual = musicaBackground3;
      iniciarGuardoMusica();
    }
  } else if (musicaGuardada && musicaGuardada.pista > 0) {
    // Si no hay música sonando, cargar la guardada
    let pista;
    if (musicaGuardada.pista === 1) pista = musicaBackground1;
    else if (musicaGuardada.pista === 2) pista = musicaBackground2;
    else if (musicaGuardada.pista === 3) pista = musicaBackground3;
    
    if (pista) {
      musicaAleatoria = musicaGuardada.pista;
      pistaActual = pista;
      
      pista.currentTime = musicaGuardada.tiempo;
      pista.play();
      iniciarGuardoMusica();
      pista.onended = musica;
    }
  } else {
    musica();
  }
}