let njugadores = 2;
let nobjetivos = "true";
let ninstructor = true;
localStorage.setItem("njugadores", njugadores);
localStorage.setItem("nobjetivos", nobjetivos);
localStorage.setItem("ninstructor", ninstructor);

function test3 () {
localStorage.setItem("njugadores", njugadores);
localStorage.setItem("nobjetivos", nobjetivos);
localStorage.setItem("ninstructor", ninstructor);
localStorage.setItem("cargarPartidaInicio", "false");
window.location.href = "../JUEGO/game.html";
};

let ready = document.getElementById("gameready");
ready.addEventListener("click", test3);

let valorBrillo = 1;
document.addEventListener("DOMContentLoaded", () => {
  if(localStorage.getItem("brillo") != "null"){
  valorBrillo = localStorage.getItem("brillo")
  valorBrillo = parseFloat(valorBrillo);
  };
  document.body.style.filter = "brightness(" + valorBrillo + ")";

});

let masjugadores = document.getElementById("masjugadores");
let menosjugadores = document.getElementById("menosjugadores");
let jugadorestxt = document.getElementById("jugadorestxt");
masjugadores.addEventListener("click", () => {
    if (njugadores < 6){
    njugadores ++;
    jugadorestxt.textContent = njugadores + " JUGADORES";
    localStorage.setItem("njugadores", njugadores);
    }});
menosjugadores.addEventListener("click", () => {
    if (njugadores > 2){
    njugadores --;
    jugadorestxt.textContent = njugadores + " JUGADORES";
    localStorage.setItem("njugadores", njugadores);
    }});
let anteriorobj = document.getElementById("anteriorobj");
let siguienteobj = document.getElementById("siguienteobj");
let objetivostxt = document.getElementById("objetivostxt");
let objsindestruccion = {
    ls: "true",
    string: "OBJETIVOS SECRETOS (SIN OBJ. DE DESTRUCCIÓN)"
};
let objcondestruccion = {
    ls: "destruccion",
    string: "OBJETIVOS SECRETOS (CON OBJ. DE DESTRUCCIÓN)"
};
let objcomun = {
    ls: "false",
    string: "OBJETIVO COMÚN (30 PAÍSES)"
};
let dominacionmundial = {
    ls: "dominacion",
    string: "DOMINACIÓN MUNDIAL (50 PAÍSES)"
};
let listaobj = [objsindestruccion, objcondestruccion, objcomun, dominacionmundial];
let indiceobj = 0;
siguienteobj.addEventListener("click", () => {
    if (indiceobj < listaobj.length - 1){
    indiceobj ++;
    objetivostxt.textContent = listaobj[indiceobj].string;
    nobjetivos = listaobj[indiceobj].ls;
    localStorage.setItem("nobjetivos", nobjetivos);
    } else{
        indiceobj = 0;
        objetivostxt.textContent = listaobj[indiceobj].string;
        nobjetivos = listaobj[indiceobj].ls;
        localStorage.setItem("nobjetivos", nobjetivos);
    }
});
anteriorobj.addEventListener("click", () => {
    if (indiceobj > 0){
    indiceobj --;
    objetivostxt.textContent = listaobj[indiceobj].string;
    nobjetivos = listaobj[indiceobj].ls;
    localStorage.setItem("nobjetivos", nobjetivos);
    } else{
        indiceobj = listaobj.length - 1;
        objetivostxt.textContent = listaobj[indiceobj].string;
        nobjetivos = listaobj[indiceobj].ls;
        localStorage.setItem("nobjetivos", nobjetivos);
    }
});
let anteriorins = document.getElementById("anteriorins");
let siguienteins = document.getElementById("siguienteins");
let instructortxt = document.getElementById("instxt");
siguienteins.addEventListener("click", () => {
    if(ninstructor === true){
        ninstructor = false;
        instructortxt.textContent = "SIN INSTRUCTOR";
        localStorage.setItem("ninstructor", ninstructor);
    } else if(ninstructor === false){
        ninstructor = true;
        instructortxt.textContent = "CON INSTRUCTOR";
        localStorage.setItem("ninstructor", ninstructor);
    }
});
anteriorins.addEventListener("click", () => {
    if(ninstructor === true){
        ninstructor = false;
        instructortxt.textContent = "SIN INSTRUCTOR";
        localStorage.setItem("ninstructor", ninstructor);
    } else if(ninstructor === false){
        ninstructor = true;
        instructortxt.textContent = "CON INSTRUCTOR";
        localStorage.setItem("ninstructor", ninstructor);
    }
});