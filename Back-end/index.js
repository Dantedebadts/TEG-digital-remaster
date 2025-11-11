import fs from "fs";
import { subscribePOSTEvent, startServer, subscribeGETEvent } from "soquetic";

//guardar juego
function guardarEstado(estado) {
  fs.writeFileSync("./datos/datos.json", JSON.stringify(estado, null, 2));
}

subscribePOSTEvent("guardarEstado", (estado) => guardarEstado(estado));

//cargar juego y tarjetas
function cargarTarjetas (){
  let tarjetas = JSON.parse(fs.readFileSync("./datos/tarjetas.json", "utf-8"));
  return tarjetas;
};

function leerEstado() {
  let estadoJuego = JSON.parse(fs.readFileSync("./datos/datos.json", "utf-8"));
  return estadoJuego;
}

subscribeGETEvent("cargarEstado", leerEstado);
subscribeGETEvent("cargarTarjetas", cargarTarjetas);

startServer(3099, true);
