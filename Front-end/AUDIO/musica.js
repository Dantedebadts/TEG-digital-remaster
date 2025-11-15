
// Pistas de audio
let musica1 = new Audio("../AUDIO/musicaBackground1.mp3");
let musica2 = new Audio("../AUDIO/musicaBackground2.mp3");
let musica3 = new Audio("../AUDIO/musicaBackground3.mp3");

// Estado global
let pistaActual = null;
let numeroPista = 0;
let intervaloGuardado = null;

// Reproducir una pista específica (1, 2 o 3)
function reproducirPista(numero) {
  pausarTodas();
  
  if (numero === 1) pistaActual = musica1;
  else if (numero === 2) pistaActual = musica2;
  else if (numero === 3) pistaActual = musica3;
  else return;
  
  numeroPista = numero;
  pistaActual.play();
  iniciarGuardado();
}

// Reproducir una pista aleatoria
function reproducirAleatoria() {
  let num = Math.floor(Math.random() * 3) + 1;
  reproducirPista(num);
}

// Pausar todas las pistas
function pausarTodas() {
  musica1.pause();
  musica2.pause();
  musica3.pause();
  detenerGuardado();
}

// Reanudar la pista actual
function reanudar() {
  if (pistaActual) {
    pistaActual.play();
    iniciarGuardado();
  }
}

// Guardar posición actual cada 50ms
function iniciarGuardado() {
  if (intervaloGuardado) clearInterval(intervaloGuardado);
  
  intervaloGuardado = setInterval(function() {
    if (pistaActual && !pistaActual.paused && numeroPista > 0) {
      let datos = {
        pista: numeroPista,
        tiempo: pistaActual.currentTime
      };
      localStorage.setItem("musicaGuardada", JSON.stringify(datos));
    }
  }, 50);
}

// Detener el guardado
function detenerGuardado() {
  if (intervaloGuardado) {
    clearInterval(intervaloGuardado);
    intervaloGuardado = null;
  }
}

// Cargar y reproducir música guardada
function cargarYReproducir() {
  let datosGuardados = localStorage.getItem("musicaGuardada");
  
  if (datosGuardados) {
    let datos = JSON.parse(datosGuardados);
    if (datos && datos.pista && datos.tiempo !== undefined) {
      reproducirPista(datos.pista);
      pistaActual.currentTime = datos.tiempo;
      return;
    }
  }
  
  reproducirAleatoria();
}

// Auto-mantener música en páginas que no tienen script propio (RULES, CREDITOS, etc.)
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('musicaEncendida') === 'si') {
    cargarYReproducir();
  }
});