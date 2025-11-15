
// Pistas de audio
let musica1 = new Audio("../AUDIO/musicaBackground1.mp3");
let musica2 = new Audio("../AUDIO/musicaBackground2.mp3");
let musica3 = new Audio("../AUDIO/musicaBackground3.mp3");

// Preload to reduce startup latency across page loads
musica1.preload = 'auto'; musica2.preload = 'auto'; musica3.preload = 'auto';
musica1.crossOrigin = 'anonymous'; musica2.crossOrigin = 'anonymous'; musica3.crossOrigin = 'anonymous';
musica1.load(); musica2.load(); musica3.load();

// Estado global
let pistaActual = null;
let numeroPista = 0;
let intervaloGuardado = null;
let __ultimoTiempoGuardado = 0;
const GUARDADO_INTERVALO_MS = 250; // reduced from 50ms to avoid performance issues

// Reproducir una pista específica (1, 2 o 3)
// reproducirPista acepta un tiempo opcional (segundos) para arrancar en ese punto.
function reproducirPista(numero, tiempo = 0) {
  // Si ya está la misma pista reproduciéndose, sólo reanudar si está en pausa
  if (numeroPista === numero && pistaActual) {
    if (pistaActual.paused) {
      pistaActual.currentTime = tiempo || pistaActual.currentTime || 0;
      pistaActual.play();
      iniciarGuardado();
    }
    return;
  }

  // Seleccionamos la nueva pista (no pausamos la anterior todavía para evitar gaps)
  let nueva = null;
  if (numero === 1) nueva = musica1;
  else if (numero === 2) nueva = musica2;
  else if (numero === 3) nueva = musica3;
  else return;

  // Prepare new track: set tiempo cuando metadata esté disponible, then play cuando pueda
  const onLoadedMeta = function() {
    try {
      if (tiempo && !isNaN(tiempo)) nueva.currentTime = tiempo;
    } catch (e) {
      // Some browsers throw if you set currentTime too early; ignore and wait for canplay
    }
  };

  const onCanPlayThrough = function() {
    // Pause other tracks, switch pistaActual and play
    pausarTodas();
    pistaActual = nueva;
    numeroPista = numero;
    pistaActual.play();
    iniciarGuardado();

    nueva.removeEventListener('loadedmetadata', onLoadedMeta);
    nueva.removeEventListener('canplaythrough', onCanPlayThrough);
  };

  nueva.addEventListener('loadedmetadata', onLoadedMeta);
  nueva.addEventListener('canplaythrough', onCanPlayThrough);

  // Trigger load in case it wasn't fetched yet; attempt a small play when allowed by policy
  try { nueva.load(); } catch (e) {}
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
      // Only write if time changed by at least the interval threshold
      const tiempoActual = pistaActual.currentTime;
      if (Math.abs(tiempoActual - __ultimoTiempoGuardado) >= (GUARDADO_INTERVALO_MS / 1000)) {
        __ultimoTiempoGuardado = tiempoActual;
        let datos = {
          pista: numeroPista,
          tiempo: tiempoActual
        };
        try {
          localStorage.setItem("musicaGuardada", JSON.stringify(datos));
        } catch (e) {
          // If localStorage fails (quota or privacy), stop trying to write to avoid blocking
          console.warn('musica.js: no se pudo guardar en localStorage', e);
          detenerGuardado();
        }
      }
    }
  }, GUARDADO_INTERVALO_MS);
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