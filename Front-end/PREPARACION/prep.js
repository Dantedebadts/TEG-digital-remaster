let players = document.getElementById("playersid");
let objectives = document.getElementById("objetivosid");
let instructor = document.getElementById("instructorid")
let nombrePartida = document.getElementById("nombrePartida");
let advertencia = document.getElementById("advertencia");
let contenidojug = document.getElementById("contenidojug");
let contenidoobj = document.getElementById("contenidoobj");
let contenidopart = document.getElementById("contenidopart");
let cerrar = document.getElementById("cerrar");
let contenidoins = document.getElementById("contenidoins");
let njugadores = null;
let nobjetivos = null;
let ninstructor = null;
let fecha = new Date().toLocaleString();

let partidasGuardadas = [];
partidasGuardadas = JSON.parse(localStorage.getItem("partidasGuardadas"));


function test3 () {
if (parseInt(players.value) === 0){
contenidojug.textContent = "SELECCIONAR CANTIDAD DE JUGADORES";
} else {
contenidojug.textContent = parseInt(players.value) + " JUGADORES";
njugadores = parseInt(players.value);
localStorage.setItem("njugadores", njugadores);
}; 

if(parseInt(objectives.value)===0){
contenidoobj.textContent = "SELECCIONAR MODO DE JUEGO";  
} else if(parseInt(objectives.value)===1){
contenidoobj.textContent ="OBJETIVOS SECRETOS (SIN OBJ. DE DESTRUCCIÓN)";
nobjetivos = "true";
localStorage.setItem("nobjetivos", nobjetivos);
} else if(parseInt(objectives.value)===4){
contenidoobj.textContent = "OBJETIVOS SECRETOS (CON OBJ. DE DESTRUCCIÓN)";
nobjetivos = "destruccion";
localStorage.setItem("nobjetivos", nobjetivos);
} else if(parseInt(objectives.value)===2){
contenidoobj.textContent = "OBJETIVO COMÚN (30 PAÍSES)";
nobjetivos = "false";
localStorage.setItem("nobjetivos", nobjetivos);
} else if(parseInt(objectives.value)===3){
contenidoobj.textContent ="DOMINACIÓN MUNDIAL (50 PAÍSES)";
nobjetivos = "dominacion";
localStorage.setItem("nobjetivos", nobjetivos);
};

if(parseInt(instructor.value) === 0){
    contenidoins.textContent = "SELECCIONAR USO DE INSTRUCTOR";
} else if(parseInt(instructor.value) === 1){
    contenidoins.textContent = "CON INSTRUCTOR";
    ninstructor = true;
    localStorage.setItem("ninstructor", ninstructor);
} else if(parseInt(instructor.value) === 2){
    contenidoins.textContent = "SIN INSTRUCTOR";
    ninstructor = false;
    localStorage.setItem("ninstructor", ninstructor);
};

let nombreValido = false;
let nombrePartidaValor = nombrePartida.value;
if(nombrePartidaValor == ""){
    contenidopart.textContent = "INGRESAR NOMBRE DE LA PARTIDA";
    nombreValido = false;
} else if (nombrePartidaValor !== "" && localStorage.getItem("partidasGuardadas") != null && JSON.parse(localStorage.getItem("partidasGuardadas")).includes(nombrePartidaValor)){
   contenidopart.textContent = "EL NOMBRE DE LA PARTIDA YA EXISTE, INGRESAR OTRO NOMBRE";
    nombreValido = false;
} else if (nombrePartidaValor !== "" ){
    contenidopart.textContent = "NOMBRE DE LA PARTIDA: " + nombrePartidaValor;
    nombreValido = true;
};

advertencia.showModal();
if(parseInt(players.value) != 0 && parseInt(objectives.value) != 0 && parseInt(instructor.value)!= 0 && nombreValido == true){ {

let nombrePartidaGuardado = {
    nombre: nombrePartidaValor,
    fecha: fecha,
    estado: [],
}
partidasGuardadas.push(nombrePartidaGuardado);
localStorage.setItem("partidaAJUGAR", nombrePartidaValor);
localStorage.setItem("partidasGuardadas", JSON.stringify(partidasGuardadas));
localStorage.setItem("cargarPartidaInicio", "false");
window.location.href = "../JUEGO/game.html";
};
};
};

let ready = document.getElementById("gameready");
ready.addEventListener("click", test3);
cerrar.addEventListener("click", ()=> advertencia.close());

let valorBrillo = 1;
document.addEventListener("DOMContentLoaded", () => {
  if(localStorage.getItem("brillo") != "null"){
  valorBrillo = localStorage.getItem("brillo")
  valorBrillo = parseFloat(valorBrillo);
  };
  document.body.style.filter = "brightness(" + valorBrillo + ")";

});

