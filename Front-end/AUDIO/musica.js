let musicaFondo = new Audio ("../AUDIO/musicaBackground.mp3");
let musicaFondoValor = "";
musicaFondo.loop = true;

addEventListener("DOMContentLoaded", () => {
if (localStorage.getItem("musicaFondoValor") === null) {
  musicaFondoValor = "false";
} else if (localStorage.getItem("musicaFondoValor") === "true") {
  musicaFondoValor = "true";
  sonarMusica();
} else if (localStorage.getItem("musicaFondoValor") === "false") {
  musicaFondoValor = "false";
}
});

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

if (window.location.pathname.endsWith("game.html")) {
  let musicaBoton = document.getElementById("botonMusica");

  function cambiarMusicaFondo() { 
    if (musicaFondoValor === "true") {
      musicaFondoValor = "false";
      musicaBoton.textContent = "Música de fondo desactivada";
      sonarMusica();
      localStorage.setItem("musicaFondoValor", "false");
    } else if (musicaFondoValor === "false") {
      musicaFondoValor = "true";
      musicaBoton.textContent = "Música de fondo activada";
      sonarMusica();
      localStorage.setItem("musicaFondoValor", "true");
    };
  }

botonMusica.addEventListener("click", cambiarMusicaFondo);
};

window.addEventListener("beforeunload", tiempoMusica);
