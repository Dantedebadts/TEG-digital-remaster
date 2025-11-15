
let musica1 = new Audio("../AUDIO/musicaBackground1.mp3");
let musica2 = new Audio("../AUDIO/musicaBackground2.mp3");
let musica3 = new Audio("../AUDIO/musicaBackground3.mp3");

let pistaActual = null;
let pistaNumero = 0;
let guardador = null;

function cargarMusicaGuardada() {
  const guardado = JSON.parse(localStorage.getItem("musicaActual"));
  if (!guardado || !guardado.pista) return;

  if (guardado.pista === 1) pistaActual = musica1;
  else if (guardado.pista === 2) pistaActual = musica2;
  else pistaActual = musica3;

  pistaNumero = guardado.pista;
  pistaActual.currentTime = guardado.tiempo || 0;
  pistaActual.play();
  iniciarGuardado();
  pistaActual.onended = reproducirAleatoria;
}

function reproducirAleatoria() {
  pistaNumero = Math.floor(Math.random() * 3) + 1;
  if (pistaNumero === 1) pistaActual = musica1;
  else if (pistaNumero === 2) pistaActual = musica2;
  else pistaActual = musica3;

  pistaActual.play();
  iniciarGuardado();
  pistaActual.onended = reproducirAleatoria;
}

function pausarTodas() {
  if (pistaActual && !pistaActual.paused) {
    localStorage.setItem("musicaActual", JSON.stringify({ pista: pistaNumero, tiempo: pistaActual.currentTime }));
  }
  musica1.pause();
  musica2.pause();
  musica3.pause();
  detenerGuardado();
}

function iniciarGuardado() {
  if (guardador) clearInterval(guardador);
  guardador = setInterval(() => {
    if (pistaActual && !pistaActual.paused) {
      localStorage.setItem("musicaActual", JSON.stringify({ pista: pistaNumero, tiempo: pistaActual.currentTime }));
    }
  }, 50);
}

function detenerGuardado() {
  if (guardador) {
    clearInterval(guardador);
    guardador = null;
  }
}

function activarMusica() {
  localStorage.setItem("musicaBackground", "true");
  const guardado = JSON.parse(localStorage.getItem("musicaActual"));
  if (guardado && guardado.pista) cargarMusicaGuardada();
  else reproducirAleatoria();
}

function desactivarMusica() {
  localStorage.setItem("musicaBackground", "false");
  pausarTodas();
}

// Auto-inicio en páginas que no sean el juego: si el usuario ya activó la música, iniciarla.
if (!window.location.pathname.includes('game.html')) {
  document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('musicaBackground') === 'true') {
      const guardado = JSON.parse(localStorage.getItem('musicaActual'));
      if (guardado && guardado.pista) cargarMusicaGuardada();
      else reproducirAleatoria();
    }
  });
}