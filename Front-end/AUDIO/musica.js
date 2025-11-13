
let musicaBackground1 = new Audio("../AUDIO/musicaBackground1.mp3");
let musicaBackground2 = new Audio("../AUDIO/musicaBackground2.mp3");
let musicaBackground3 = new Audio("../AUDIO/musicaBackground3.mp3");

// Variables para estado de música actual
let pistaActual = null;
let musicaAleatoria = null;
let actualizadorMusica = null;

function cargarMusicaGuardada() {
  let musicaGuardada = JSON.parse(localStorage.getItem("musicaActual"));
  
  if (musicaGuardada && musicaGuardada.pista > 0) {
    // Obtener la pista guardada
    let pista;
    if (musicaGuardada.pista === 1) pista = musicaBackground1;
    else if (musicaGuardada.pista === 2) pista = musicaBackground2;
    else if (musicaGuardada.pista === 3) pista = musicaBackground3;
    
    if (pista) {
      musicaAleatoria = musicaGuardada.pista;
      pistaActual = pista;
      
      // Establecer el tiempo guardado
      pista.currentTime = musicaGuardada.tiempo;
      
      // Reproducir desde donde se paró
      pista.play();
      iniciarGuardoMusica();
      pista.onended = reproducirMusicaleatoria;
    }
  }
}

/**
 * Reproducir una pista aleatoria
 */
function reproducirMusicaleatoria() {
  musicaAleatoria = Math.floor(Math.random() * 3) + 1;
  let pista;

  if (musicaAleatoria === 1) pista = musicaBackground1;
  else if (musicaAleatoria === 2) pista = musicaBackground2;
  else pista = musicaBackground3;

  pistaActual = pista;
  pista.play();
  iniciarGuardoMusica();
  pista.onended = reproducirMusicaleatoria;
}

function detenerTodasPistas() {
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

document.addEventListener("DOMContentLoaded", () => {
 cargarMusicaGuardada();
});
