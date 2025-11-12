// Declaración de Variables
let turno = "";
let colores = [];
let listacolores = ["Rojo", "Azul", "Amarillo", "Verde", "Magenta", "Negro"];
let fase = "Primera Incorporación";
let fases = ["Primera Incorporación","Segunda Incorporación", "Atacar", "Reagrupar", "Incorporar"];
let currentphase = document.getElementById("currentphase");
let currentturn = document.getElementById("currentturn");
let atacarrojo = document.getElementById("atacarrojo");
let atacarazul = document.getElementById("atacarazul");
let atacaramarillo = document.getElementById("atacaramarillo");
let atacarverde = document.getElementById("atacarverde");
let atacarmagenta = document.getElementById("atacarmagenta");
let atacarnegro = document.getElementById("atacarnegro");
let skipazul = document.getElementById("pasaazul");
let skiprojo = document.getElementById("pasarojo");
let skipamarillo = document.getElementById("pasaamarillo");
let skipverde = document.getElementById("pasaverde");
let skipmagenta = document.getElementById("pasamagenta");
let skipnegro = document.getElementById("pasanegro");
let botonGuardar = document.getElementById("guardar");
let menuPausa = document.getElementById("menuPausa");
let menuConfig = document.getElementById("menuConfig");
let botonPausa = document.getElementById("pausaid");
let reanudar = document.getElementById("reanudar");
let actRapidaIns = document.getElementById("actRapidaIns");
let configuracion = document.getElementById("configuracion");
let atrasConfig = document.getElementById("atrasConfig");
let guardadoListo = document.getElementById("guardadoListo");
let i = 0;
let i2 = 0;
let dado = 0;
let paisseleccionado = 0;
let paisatacado = 0;
let paisreceptor = 0;
let paisconquistado = 0;
let paisconquistador = 0;
let dadosatacante = 0;
let dadosdefensor = 0;
let resultadosatacante = [];
let resultadosdefensor = [];
let dadoreserva = 0;
let tarjetareserva = 0;
let explocion = new Audio('../AUDIO/explocion.mp3');
let musicaVictoria = new Audio('../AUDIO/musicaVictoria.mp3');
let i121 = 0;
let i122 = 0;
let i123 = 0;
let i124 = 0;
let i125 = 0;
let i126 = 0;
let i127 = 0;
let i141 = 0;
let i142 = 0;
let i161 = 0;
let i162 = 0;
let i171 = 0;
let i172 = 0;
let i173 = 0;
let i174 = 0;
let i221 = 0;
let i241 = 0;
let i242 = 0;
let i261 = 0;
let i271 = 0;
let i272 = 0;
let i273 = 0;
let icarg = 0;
let icarg1 = 0;
let icarg2 = 0;
let icarg3 = 0;
let icarg4 = 0;
let icarg5 = 0;
let iactins1 = 0;
let iactins2 = 0;
let iactins3 = [];
let texto = "";
let stop = false;
let ioceania = 0;
let iafrica = 0;
let isudamerica = 0;
let iasia = 0;
let ieuropa = 0;
let inorteamerica = 0;
let reserva = "";
let fichasnuevas = {
    rojo: 5,
    azul: 5,
    amarillo: 5,
    verde: 5,
    magenta: 5,
    negro: 5,
};
let conquista = {
    rojo: 0,
    azul: 0,
    amarillo: 0,
    verde: 0,
    magenta: 0,
    negro:0
};
let copiapaises = [];
let copiapais = null;
let npaises = 0;
let coloratacado = null;
let ganador = false;

//menu pausa
function abrirMenuPausa() {
    menuPausa.showModal();
}

//menu config
function abrirMenuConfig() {
    menuConfig.showModal();
}

//sonido y musiquita
let botonSonido = document.getElementById("botonAnimacion");
let animacionValor = ""

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("sonidoAnimacion") === null) {
        animacionValor = "true";
        botonSonido.textContent = "Sonido activado";
    } else if (localStorage.getItem("sonidoAnimacion") === "true") {
        animacionValor = "true";
        botonSonido.textContent = "Sonido activado";
    } else if (localStorage.getItem("sonidoAnimacion") === "false") {
        animacionValor = "false";
        botonSonido.textContent = "Sonido desactivado"
    }
});    

function toggleSonido() {
    if (animacionValor === "true") {
        animacionValor = "false";
        localStorage.setItem("sonidoAnimacion", "false");
        botonSonido.textContent = "Sonido desactivado";
    } else if (animacionValor === "false") {
        animacionValor = "true";
        localStorage.setItem("sonidoAnimacion", "true");        
        botonSonido.textContent = "Sonido activado";
    }
}

function explocionAnimacion() {
    if (animacionValor === "true") { 
    explocion.currentTime = 0;
    explocion.play();
    }
}

function sonarMusicaVictoria() {
    if (animacionValor === "true") { 
    musicaVictoria.currentTime = 0;
    musicaVictoria.play();
    }
}

//brillo
  let valorBrillo = 1;
document.addEventListener("DOMContentLoaded", () => {
  let barraBrillo = document.getElementById("barraBrillo");
if(localStorage.getItem("brillo") != "null"){
  valorBrillo = localStorage.getItem("brillo");
  valorBrillo = parseFloat(valorBrillo);
};
  barraBrillo.value = valorBrillo;
  document.body.style.filter = "brightness(" + valorBrillo + ")";
  barraBrillo.addEventListener("input", () => {
    let valorBrillo = barraBrillo.value;
    document.body.style.filter = "brightness(" + valorBrillo + ")";
    localStorage.setItem("brillo", valorBrillo);
  });
});

//checkear cargar partida (7/10)
let checkCargar = localStorage.getItem("cargarPartidaInicio")
if (checkCargar === "true") {
    cargarPartida;
};

//cantidad jugadores
let njugadores = 2;
njugadores = localStorage.getItem("njugadores");
njugadores = parseInt(njugadores);
let njugadoresTest = njugadores;
if(njugadoresTest === null) { 
        njugadores = 2
    };

//Condición de victoria
let nobjetivos = "false";
nobjetivos = localStorage.getItem("nobjetivos");
if (nobjetivos === null) {
    nobjetivos = "false"
};

//declaracion (dialogs) 
let mostrarTrojo = document.getElementById("mostrarTrojo");
let mostrarTazul = document.getElementById("mostrarTazul");
let mostrarTamarillo = document.getElementById("mostrarTamarillo");
let mostrarTverde = document.getElementById("mostrarTverde");
let mostrarTmagenta = document.getElementById("mostrarTmagenta");
let mostrarTnegro = document.getElementById("mostrarTnegro");
let dialogTrojo = document.getElementById("dialogTrojo");
let dialogTazul = document.getElementById("dialogTazul");
let dialogTamarillo = document.getElementById("dialogTamarillo");
let dialogTverde = document.getElementById("dialogTverde");
let dialogTmagenta = document.getElementById("dialogTmagenta");
let dialogTnegro = document.getElementById("dialogTnegro");
let cerrarTrojo = document.getElementById("cerrarTrojo");
let cerrarTazul = document.getElementById("cerrarTazul");
let cerrarTamarillo = document.getElementById("cerrarTamarillo");
let cerrarTverde = document.getElementById("cerrarTverde");
let cerrarTmagenta = document.getElementById("cerrarTmagenta");
let cerrarTnegro = document.getElementById("cerrarTnegro");
let contenidoTrojo1 = document.getElementById("contenidoTrojo1");
let contenidoTrojo2 = document.getElementById("contenidoTrojo2");
let contenidoTrojo3 = document.getElementById("contenidoTrojo3");
let contenidoTrojo4 = document.getElementById("contenidoTrojo4");
let contenidoTrojo5 = document.getElementById("contenidoTrojo5");
let contenidoTazul1 = document.getElementById("contenidoTazul1");
let contenidoTazul2 = document.getElementById("contenidoTazul2");
let contenidoTazul3 = document.getElementById("contenidoTazul3");
let contenidoTazul4 = document.getElementById("contenidoTazul4");
let contenidoTazul5 = document.getElementById("contenidoTazul5");
let contenidoTamarillo1 = document.getElementById("contenidoTamarillo1");
let contenidoTamarillo2 = document.getElementById("contenidoTamarillo2");
let contenidoTamarillo3 = document.getElementById("contenidoTamarillo3");
let contenidoTamarillo4 = document.getElementById("contenidoTamarillo4");
let contenidoTamarillo5 = document.getElementById("contenidoTamarillo5");
let contenidoTverde1 = document.getElementById("contenidoTverde1");
let contenidoTverde2 = document.getElementById("contenidoTverde2");
let contenidoTverde3 = document.getElementById("contenidoTverde3");
let contenidoTverde4 = document.getElementById("contenidoTverde4");
let contenidoTverde5 = document.getElementById("contenidoTverde5");
let contenidoTmagenta1 = document.getElementById("contenidoTmagenta1");
let contenidoTmagenta2 = document.getElementById("contenidoTmagenta2");
let contenidoTmagenta3 = document.getElementById("contenidoTmagenta3");
let contenidoTmagenta4 = document.getElementById("contenidoTmagenta4");
let contenidoTmagenta5 = document.getElementById("contenidoTmagenta5");
let contenidoTnegro1 = document.getElementById("contenidoTnegro1");
let contenidoTnegro2 = document.getElementById("contenidoTnegro2");
let contenidoTnegro3 = document.getElementById("contenidoTnegro3");
let contenidoTnegro4 = document.getElementById("contenidoTnegro4");
let contenidoTnegro5 = document.getElementById("contenidoTnegro5");
let mostrarrojo = document.getElementById("mostrarrojo");
let cerrarrojo = document.getElementById("cerrarrojo");
let objetivorojo = document.getElementById("objetivorojo");
let contenidorojo = document.getElementById("contenidorojo");
let mostrarazul = document.getElementById("mostrarazul");
let cerrarazul = document.getElementById("cerrarazul");
let objetivoazul = document.getElementById("objetivoazul");
let contenidoazul = document.getElementById("contenidoazul");
let mostraramarillo = document.getElementById("mostraramarillo");
let cerraramarillo = document.getElementById("cerraramarillo");
let objetivoamarillo = document.getElementById("objetivoamarillo");
let contenidoamarillo = document.getElementById("contenidoamarillo");
let mostrarverde = document.getElementById("mostrarverde");
let cerrarverde = document.getElementById("cerrarverde");
let objetivoverde = document.getElementById("objetivoverde");
let contenidoverde = document.getElementById("contenidoverde");
let mostrarmagenta = document.getElementById("mostrarmagenta");
let cerrarmagenta = document.getElementById("cerrarmagenta");
let objetivomagenta = document.getElementById("objetivomagenta");
let contenidomagenta = document.getElementById("contenidomagenta");
let mostrarnegro = document.getElementById("mostrarnegro");
let cerrarnegro = document.getElementById("cerrarnegro");
let objetivonegro = document.getElementById("objetivonegro");
let contenidonegro = document.getElementById("contenidonegro");
let resultadodados = document.getElementById("resultadodados");
let dresultadosatacante = document.getElementById("dresultadosatacante");
let dresultadosdefensor = document.getElementById("dresultadosdefensor");
let cerrardados = document.getElementById("cerrardados");
let instrucciones = document.getElementById("instrucciones");
let fin = document.getElementById("fin");
let mensajefinal = document.getElementById("mensajefinal");
let pasarfichas1 = document.getElementById("pasarfichas1");
let selectpasarfichas1 = document.getElementById("selectpasarfichas1");
let cerrarpasarfichas1 = document.getElementById("cerrarpasarfichas1");
let pasarfichas2 = document.getElementById("pasarfichas2");
let selectpasarfichas2 = document.getElementById("selectpasarfichas2");
let cerrarpasarfichas2 = document.getElementById("cerrarpasarfichas2");
let docTrojo = [contenidoTrojo1, contenidoTrojo2, contenidoTrojo3, contenidoTrojo4, contenidoTrojo5];
let docTazul = [contenidoTazul1, contenidoTazul2, contenidoTazul3, contenidoTazul4, contenidoTazul5];
let docTamarillo = [contenidoTamarillo1, contenidoTamarillo2, contenidoTamarillo3, contenidoTamarillo4, contenidoTamarillo5];
let docTverde = [contenidoTverde1, contenidoTverde2, contenidoTverde3, contenidoTverde4, contenidoTverde5];
let docTmagenta = [contenidoTmagenta1, contenidoTmagenta2, contenidoTmagenta3, contenidoTmagenta4, contenidoTmagenta5];
let docTnegro = [contenidoTnegro1, contenidoTnegro2, contenidoTnegro3, contenidoTnegro4, contenidoTnegro5];
let tselect1 = 0;
let tselect2 = 0;
let tselect3 = 0;
let canjesrojo = 0;
let canjesazul = 0;
let canjesamarillo = 0;
let canjesverde = 0;
let canjesmagenta = 0;
let canjesnegro = 0;
let canjearrojo = document.getElementById("canjearrojo");
let canjearazul = document.getElementById("canjearazul");
let canjearamarillo = document.getElementById("canjearamarillo");
let canjearverde = document.getElementById("canjearverde");
let canjearmagenta = document.getElementById("canjearmagenta");
let canjearnegro = document.getElementById("canjearnegro");
let restablecer1 = document.getElementById("restablecer1");
let restablecer2 = document.getElementById("restablecer2");
let restablecer3 = document.getElementById("restablecer3");
let restablecer4 = document.getElementById("restablecer4");
let restablecer5 = document.getElementById("restablecer5");
let restablecer6 = document.getElementById("restablecer6");
let dnuevatarjeta = document.getElementById("dnuevatarjeta");
let cnuevatarjeta = document.getElementById("cnuevatarjeta");
let cerrarnuevatarjeta = document.getElementById("cerrarnuevatarjeta");
let sectorrojo = document.getElementById("sectorrojo");
let sectorazul = document.getElementById("sectorazul");
let sectoramarillo = document.getElementById("sectoramarillo");
let sectorverde = document.getElementById("sectorverde");
let sectormagenta = document.getElementById("sectormagenta");
let sectornegro = document.getElementById("sectornegro");
let sectores = [sectorrojo, sectorazul, sectoramarillo, sectorverde, sectormagenta, sectornegro];
let fichascanjerojo = document.getElementById("fichascanjerojo");
let fichascanjeazul = document.getElementById("fichascanjeazul");
let fichascanjeamarillo = document.getElementById("fichascanjeamarillo");
let fichascanjeverde = document.getElementById("fichascanjeverde");
let fichascanjemagenta = document.getElementById("fichascanjemagenta");
let fichascanjenegro = document.getElementById("fichascanjenegro");
let fichascanjearray = [fichascanjerojo, fichascanjeazul, fichascanjeamarillo, fichascanjeverde, fichascanjemagenta, fichascanjenegro];
let salir = document.getElementById("salir");

//Declaracion de instrucciones
let inicioRonda1 = "Tenes 5 fichas para incorporar, clickea un territorio propio para poner una ficha";
let inicioRonda2 = "Ahora tenes 3 fichas a incorporar";
let incorporarInstruccion = "Clickea el territorio donde quieras incorporar fichas";
let atacarInstruccion = "Selecciona un territorio propio y luego uno enemigo limitrofe para atacar";
let reagruparInstruccion = "Selecciona dos territorios propios limitrofes para reagrupar fichas";

//Declaración de Objetivos Secretos
let obj1 = {
    oceania: 0,
    africa: 6,
    sudamerica: 0,
    asia: 0,
    europa: 4,
    norteamerica: 5,
    color: "",
    string: "Ocupar África, 5 países de América del Norte y 4 países de Europa."
};
let obj2 = {
    oceania: 0,
    africa: 3,
    sudamerica: 6,
    asia: 0,
    europa: 7,
    norteamerica: 0,
    color: "",
    string: "Ocupar América del Sur, 7 países de Europa y 3 países de África."
};
let obj3 = {
    oceania: 0,
    africa: 0,
    sudamerica: 2,
    asia: 15,
    europa: 0,
    norteamerica: 0,
    color: "",
    string: "Ocupar Asia y 2 países de América del Sur"
};
let obj4 = {
    oceania: 0,
    africa: 0,
    sudamerica: 2,
    asia: 4,
    europa: 9,
    norteamerica: 0,
    color: "",
    string: "Ocupar Europa, 4 países de Asia y 2 países de América del Sur.",
};
let obj5 = {
    oceania: 2,
    africa: 0,
    sudamerica: 0,
    asia: 4,
    europa: 0,
    norteamerica: 10,
    color: "",
    string: "Ocupar América del Norte, 2 países de Oceanía y 4 de Asia."
};
let obj6 = {
    oceania: 2,
    africa: 2,
    sudamerica: 2,
    asia: 3,
    europa: 3,
    norteamerica: 4,
    color: "",
    string: "Ocupar 2 países de Oceanía, 2 países de África, 2 países de América del Sur, 3 países de Europa, 4 de América del Norte y 3 de Asia."
};
let obj7 = {
    oceania: 4,
    africa: 0,
    sudamerica: 0,
    asia: 0,
    europa: 2,
    norteamerica: 10,
    color: "",
    string: "Ocupar Oceanía, América del Norte y 2 países de Europa."
};
let obj8 = {
    oceania: 0,
    africa: 6,
    sudamerica: 6,
    asia: 4,
    europa: 0,
    norteamerica: 0,
    color: "",
    string: "Ocupar América del Sur, África y 4 países de Asia."
};
let obj9 = {
    oceania: 4,
    africa: 6,
    sudamerica: 0,
    asia: 0,
    europa: 0,
    norteamerica: 5,
    color: "",
    string: "Ocupar Oceanía, África y 5 países de América del Norte."
};
let obj10 = {
    destruir: "Rojo",
    color: "",
    string: "Destruir el ejército Rojo."
}
let obj11 = {
    destruir: "Azul",
    color: "",
    string: "Destruir el ejército Azul."
}
let obj12 = {
    destruir: "Amarillo",
    color: "",
    string: "Destruir el ejército Amarillo."
}
let obj13 = {
    destruir: "Verde",
    color: "",
    string: "Destruir el ejército Verde."
}
let obj14 = {
    destruir: "Magenta",
    color: "",
    string: "Destruir el ejército Magenta."
}
let obj15 = {
    destruir: "Negro",
    color: "",
    string: "Destruir el ejército Negro."
};
let objetivos = [obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9];
let desobjetivos = [obj10, obj11, obj12, obj13, obj14, obj15];

//Declaración de Continentes
let oceania = [];
let africa = [];
let sudamerica = [];
let asia = [];
let europa = [];
let norteamerica = [];
let fnoceania = {
    fichas: 0,
    color: "",
    continente: oceania,
    string: "Oceanía"
};
let fnafrica = {
    fichas: 0,
    color: "",
    continente: africa,
    string: "África"
};
let fnsudamerica = {
    fichas: 0,
    color: "",
    continente: sudamerica,
    string: "Sudamérica"
};
let fnasia = {
    fichas: 0,
    color: "",
    continente: asia,
    string: "Asia"
};
let fneuropa = {
    fichas: 0,
    color: "",
    continente: europa,
    string: "Europa"
};
let fnnorteamerica = {
    fichas: 0,
    color: "",
    continente: norteamerica,
    string: "Norteamérica"
};
let fncontinentes = [fnoceania, fnafrica, fnsudamerica, fnasia, fneuropa, fnnorteamerica];

//Declaración de Países
let australia = {
    nombre: "Australia",
    id: document.getElementById("fichasaustraliaid"),
    idsvg: document.getElementById("australiaid"),
    continente: oceania,
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let sumatra = {
    nombre: "Sumatra",
    id: document.getElementById("fichassumatraid"),
    idsvg: document.getElementById("sumatraid"),
    continente: oceania,
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let java = {
    nombre: "Java",
    continente: oceania,
    id: document.getElementById("fichasjavaid"),
    idsvg: document.getElementById("javaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let borneo = {
    nombre: "Borneo",
    continente: oceania,
    id: document.getElementById("fichasborneoid"),
    idsvg: document.getElementById("borneoid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let india = {
    nombre: "India",
    continente: asia,
    id: document.getElementById("fichasindiaid"),
    idsvg: document.getElementById("indiaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let malasia = {
    nombre: "Malasia",
    continente: asia,
    id: document.getElementById("fichasmalasiaid"),
    idsvg: document.getElementById("malasiaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let china = {
    nombre: "China",
    continente: asia,
    id: document.getElementById("fichaschinaid"),
    idsvg: document.getElementById("chinaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let iran = {
    nombre: "Irán",
    continente: asia,
    id: document.getElementById("fichasiranid"),
    idsvg: document.getElementById("iranid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let japon = {
    nombre: "Japón",
    continente: asia,
    id: document.getElementById("fichasjaponid"),
    idsvg: document.getElementById("japonid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let gobi = {
    nombre: "Gobi",
    continente: asia,
    id: document.getElementById("fichasgobiid"),
    idsvg: document.getElementById("gobiid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let mongolia = {
    nombre: "Mongolia",
    continente: asia,
    id: document.getElementById("fichasmongoliaid"),
    idsvg: document.getElementById("mongoliaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let kamchatka = {
    nombre: "Kamchatka",
    continente: asia,
    id: document.getElementById("fichaskamchatkaid"),
    idsvg: document.getElementById("kamchatkaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let turquia = {
    nombre: "Turquía",
    continente: asia,
    id: document.getElementById("fichasturquiaid"),
    idsvg: document.getElementById("turquiaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let israel = {
    nombre: "Israel",
    continente: asia,
    id: document.getElementById("fichasisraelid"),
    idsvg: document.getElementById("israelid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let arabia = {
    nombre:"Arabia",
    continente: asia,
    id: document.getElementById("fichasarabiaid"),
    idsvg: document.getElementById("arabiaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let siberia = {
    nombre:"Siberia",
    continente: asia,
    id: document.getElementById("fichassiberiaid"),
    idsvg: document.getElementById("siberiaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let taimir = {
    nombre:"Taimir",
    continente: asia,
    id: document.getElementById("fichastaimirid"),
    idsvg: document.getElementById("taimirid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let tartaria = {
    nombre:"Tartaria",
    continente: asia,
    id: document.getElementById("fichastartariaid"),
    idsvg: document.getElementById("tartariaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let aral = {
    nombre:"Aral",
    continente: asia,
    id: document.getElementById("fichasaralid"),
    idsvg: document.getElementById("aralid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let rusia = {
    nombre:"Rusia",
    continente: europa,
    id: document.getElementById("fichasrusiaid"),
    idsvg: document.getElementById("rusiaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let suecia = {
    nombre:"Suecia",
    continente: europa,
    id: document.getElementById("fichassueciaid"),
    idsvg: document.getElementById("sueciaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let polonia = {
    nombre:"Polonia",
    continente: europa,
    id: document.getElementById("fichaspoloniaid"),
    idsvg: document.getElementById("poloniaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let alemania = {
    nombre:"Alemania",
    continente: europa,
    id: document.getElementById("fichasalemaniaid"),
    idsvg: document.getElementById("alemaniaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let italia = {
    nombre:"Italia",
    continente: europa,
    id: document.getElementById("fichasitaliaid"),
    idsvg: document.getElementById("italiaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let francia = {
    nombre:"Francia",
    continente: europa,
    id: document.getElementById("fichasfranciaid"),
    idsvg: document.getElementById("franciaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let españa = {
    nombre:"España",
    continente: europa,
    id: document.getElementById("fichasespañaid"),
    idsvg: document.getElementById("españaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let granbretaña = {
    nombre:"Gran Bretaña",
    continente: europa,
    id: document.getElementById("fichasgranbretañaid"),
    idsvg: document.getElementById("granbretañaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let islandia = {
    nombre:"Islandia",
    continente: europa,
    id: document.getElementById("fichasislandiaid"),
    idsvg: document.getElementById("islandiaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let alaska = {
    nombre:"Alaska",
    continente: norteamerica,
    id: document.getElementById("fichasalaskaid"),
    idsvg: document.getElementById("alaskaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let canada = {
    nombre: "Canadá",
    continente: norteamerica,
    id: document.getElementById("fichascanadaid"),
    idsvg: document.getElementById("canadaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let yukon = {
    nombre:"Yukon",
    continente: norteamerica,
    id: document.getElementById("fichasyukonid"),
    idsvg: document.getElementById("yukonid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let oregon = {
    nombre:"Oregon",
    continente: norteamerica,
    id: document.getElementById("fichasoregonid"),
    idsvg: document.getElementById("oregonid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let nuevayork = {
    nombre:"Nueva York",
    continente: norteamerica,
    id: document.getElementById("fichasnuevayorkid"),
    idsvg: document.getElementById("nuevayorkid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let terranova = {
    nombre:"Terranova",
    continente: norteamerica,
    id: document.getElementById("fichasterranovaid"),
    idsvg: document.getElementById("terranovaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let labrador = {
    nombre:"Labrador",
    continente: norteamerica,
    id: document.getElementById("fichaslabradorid"),
    idsvg: document.getElementById("labradorid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let groenlandia = {
    nombre:"Groenlandia",
    continente: norteamerica,
    id: document.getElementById("fichasgroenlandiaid"),
    idsvg: document.getElementById("groenlandiaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let california = {
    nombre:"California",
    continente: norteamerica,
    id: document.getElementById("fichascaliforniaid"),
    idsvg: document.getElementById("californiaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let mexico = {
    nombre:"México",
    continente: norteamerica,
    id: document.getElementById("fichasmexicoid"),
    idsvg: document.getElementById("mexicoid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let chile = {
    nombre: "Chile",
    continente: sudamerica,
    id: document.getElementById("fichaschileid"),
    idsvg: document.getElementById("chileid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let peru = {
    nombre: "Perú",
    continente: sudamerica,
    id: document.getElementById("fichasperuid"),
    idsvg: document.getElementById("peruid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let argentina = {
    nombre: "Argentina",
    continente: sudamerica,
    id: document.getElementById("fichasargentinaid"),
    idsvg: document.getElementById("argentinaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let uruguay = {
    nombre: "Uruguay",
    continente: sudamerica,
    id: document.getElementById("fichasuruguayid"),
    idsvg: document.getElementById("uruguayid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let brasil = {
    nombre: "Brasil",
    continente: sudamerica,
    id: document.getElementById("fichasbrasilid"),
    idsvg: document.getElementById("brasilid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let colombia = {
    nombre: "Colombia",
    continente: sudamerica,
    id: document.getElementById("fichascolombiaid"),
    idsvg: document.getElementById("colombiaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let sahara = {
    nombre: "Sahara",
    continente: africa,
    id: document.getElementById("fichassaharaid"),
    idsvg: document.getElementById("saharaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let egipto = {
    nombre: "Egipto",
    continente: africa,
    id: document.getElementById("fichasegiptoid"),
    idsvg: document.getElementById("egiptoid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let etiopia = {
    nombre: "Etiopía",
    continente: africa,
    id: document.getElementById("fichasetiopiaid"),
    idsvg: document.getElementById("etiopiaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let zaire = {
    nombre: "Zaire",
    continente: africa,
    id: document.getElementById("fichaszaireid"),
    idsvg: document.getElementById("zaireid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let sudafrica = {
    nombre: "Sudáfrica",
    continente: africa,
    id: document.getElementById("fichassudafricaid"),
    idsvg: document.getElementById("sudafricaid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};
let madagascar = {
    nombre: "Madagascar",
    continente: africa,
    id: document.getElementById("fichasmadagascarid"),
    idsvg: document.getElementById("madagascarid"),
    fichas: 1,
    colorfichas: "",
    limitrofes: [],
};

//Push de limitrofes
australia.limitrofes.push(sumatra, java, borneo, chile);
sumatra.limitrofes.push(australia, india);
java.limitrofes.push(australia);
borneo.limitrofes.push(australia, malasia);
india.limitrofes.push(sumatra, malasia, china, iran);
malasia.limitrofes.push(borneo, india, china);
china.limitrofes.push(india, malasia, iran, japon, gobi, mongolia, kamchatka, siberia);
iran.limitrofes.push(india, china, gobi, mongolia, turquia, aral, rusia);
japon.limitrofes.push(china, kamchatka);
gobi.limitrofes.push(china, iran, mongolia);
mongolia.limitrofes.push(china, iran, gobi, siberia, aral);
kamchatka.limitrofes.push(china, japon, siberia, alaska);
turquia.limitrofes.push(iran, israel, arabia, rusia, polonia, egipto),
israel.limitrofes.push(turquia, arabia, egipto),
arabia.limitrofes.push(turquia, israel);
siberia.limitrofes.push(china, mongolia, kamchatka, taimir, tartaria, aral);
taimir.limitrofes.push(siberia, tartaria);
tartaria.limitrofes.push(siberia, taimir, aral);
aral.limitrofes.push(iran, mongolia, siberia, tartaria, rusia);
rusia.limitrofes.push(iran, turquia, aral, suecia, polonia);
suecia.limitrofes.push(rusia, islandia);
alemania.limitrofes.push(polonia, italia, francia, granbretaña);
polonia.limitrofes.push(turquia, rusia, egipto, alemania);
italia.limitrofes.push(alemania, francia);
francia.limitrofes.push(alemania, italia, españa);
españa.limitrofes.push(sahara, francia, granbretaña);
granbretaña.limitrofes.push(alemania, españa, islandia);
islandia.limitrofes.push(suecia, granbretaña, groenlandia);
alaska.limitrofes.push(kamchatka, oregon, yukon);
canada.limitrofes.push(oregon, nuevayork, yukon, terranova);
yukon.limitrofes.push(alaska, oregon, canada);
oregon.limitrofes.push(alaska, nuevayork, california, canada, yukon);
nuevayork.limitrofes.push(oregon, california, canada, terranova, groenlandia);
terranova.limitrofes.push(nuevayork, canada, labrador);
labrador.limitrofes.push(terranova, groenlandia);
groenlandia.limitrofes.push(islandia, nuevayork, labrador);
california.limitrofes.push(mexico, oregon, nuevayork);
mexico.limitrofes.push(colombia, california);
chile.limitrofes.push(australia, peru, argentina);
peru.limitrofes.push(chile, argentina, brasil, colombia);
argentina.limitrofes.push(chile, peru, uruguay, brasil);
uruguay.limitrofes.push(argentina, brasil);
brasil.limitrofes.push(peru, argentina, uruguay, colombia, sahara);
colombia.limitrofes.push(mexico, peru, brasil);
sahara.limitrofes.push(brasil, egipto, españa, etiopia, zaire);
egipto.limitrofes.push(turquia, israel, polonia, sahara, etiopia, madagascar);
etiopia.limitrofes.push(egipto, sahara, zaire, sudafrica);
zaire.limitrofes.push(sahara, etiopia, sudafrica, madagascar);
sudafrica.limitrofes.push(etiopia, zaire);
madagascar.limitrofes.push(egipto, zaire);

//Declaración lista de países
let paises = [rusia, alemania, suecia, polonia, italia, francia, españa, granbretaña, islandia, alaska, canada, yukon, oregon, nuevayork, terranova, labrador, groenlandia, california, mexico, chile, peru, argentina, colombia, brasil, uruguay, sahara, egipto, etiopia, zaire, sudafrica, madagascar, iran, japon, gobi, mongolia, kamchatka, turquia, israel, arabia, siberia, taimir, tartaria, aral, china, malasia, india, sumatra, java, borneo, australia];
let estadoJuego = paises;

//Push de países a los continentes
oceania.push(australia, sumatra, java, borneo);
africa.push(sahara, egipto, etiopia, zaire, sudafrica, madagascar);
sudamerica.push(chile, peru, argentina, uruguay, brasil, colombia);
asia.push(india, malasia, china, iran, japon, gobi, mongolia, kamchatka, turquia, israel, arabia, siberia, taimir, tartaria, aral);
europa.push(rusia, suecia, polonia, alemania, italia, francia, españa, granbretaña, islandia);
norteamerica.push(alaska, oregon, california, mexico, nuevayork, canada, yukon, terranova, labrador, groenlandia);

//Declaracion de continentes
let continentes = [norteamerica, sudamerica, europa, asia, oceania, africa]
let tpaises = [];
let mazo = [];
let tarjetasrojo = [];
let tarjetasazul = [];
let tarjetasamarillo = [];
let tarjetasverde = [];
let tarjetasmagenta = [];
let tarjetasnegro = []; 
let mazoreserva = [];
let itarj1 = 0;
let itarj2 = 0;

//Declaración tarjetas de países
let taustralia = {
    pais: australia,
    fichas: 2,
    color: "",
    simbolo: "Cañon",
};
let tsumatra = {
    pais: sumatra,
    fichas: 2,
    color: "",
    simbolo: "Globo",
};
let tjava = {
    pais: java,
    fichas: 2,
    color: "",
    simbolo: "Cañon",
};
let tborneo = {
    pais: borneo,
    fichas: 2,
    color: "",
    simbolo: "Fragata",
};
let tindia = {
    pais: india,
    fichas: 2,
    color: "",
    simbolo: "Globo",
};
let tmalasia = {
    pais: malasia,
    fichas: 2,
    color: "",
    simbolo: "Cañon",
};
let tchina = {
    pais: china,
    fichas: 2,
    color: "",
    simbolo: "Fragata",
};
let tiran = {
    pais: iran,
    fichas: 2,
    color: "",
    simbolo: "Globo",
};
let tjapon = {
    pais: japon,
    fichas: 2,
    color: "",
    simbolo: "Cañon",
};
let tgobi = {
    pais: gobi,
    fichas: 2,
    color: "",
    simbolo: "Globo",
};
let tmongolia = {
    pais: mongolia,
    fichas: 2,
    color: "",
    simbolo: "Fragata",
};
let tkamchatka = {
    pais: kamchatka,
    fichas: 2,
    color: "",
    simbolo: "Globo",
};
let tturquia = {
    pais: turquia,
    fichas: 2,
    color: "",
    simbolo: "Fragata",
};
let tisrael = {
    pais: israel,
    fichas: 2,
    color: "",
    simbolo: "Fragata",
};
let tarabia = {
    pais: arabia,
    fichas: 2,
    color: "",
    simbolo: "Cañon",
};
let tsiberia = {
    pais: siberia,
    fichas: 2,
    color: "",
    simbolo: "Fragata",
};
let ttaimir = {
    pais: taimir,
    fichas: 2,
    color: "",
    simbolo: "Comodin",
};
let ttartaria = {
    pais: tartaria,
    fichas: 2,
    color: "",
    simbolo: "Cañon",
};
let taral = {
    pais: aral,
    fichas: 2,
    color: "",
    simbolo: "Cañon",
};
let trusia = {
    pais: rusia,
    fichas: 2,
    color: "",
    simbolo: "Globo",
};
let tsuecia = {
    pais: suecia,
    fichas: 2,
    color: "",
    simbolo: "Fragata",
};
let tpolonia = {
    pais: polonia,
    fichas: 2,
    color: "",
    simbolo: "Cañon",
};
let talemania = {
    pais: alemania,
    fichas: 2,
    color: "",
    simbolo: "Fragata",
};
let titalia = {
    pais: italia,
    fichas: 2,
    color: "",
    simbolo: "Globo",
};
let tfrancia = {
    pais: francia,
    fichas: 2,
    color: "",
    simbolo: "Globo",
};
let tespaña = {
    pais: españa,
    fichas: 2,
    color: "",
    simbolo: "Globo",
};
let tgranbretaña = {
    pais: granbretaña,
    fichas: 2,
    color: "",
    simbolo: "Fragata",
};
let tislandia = {
    pais: islandia,
    fichas: 2,
    color: "",
    simbolo: "Fragata",
};
let talaska = {
    pais: alaska,
    fichas: 2,
    color: "",
    simbolo: "Fragata",
};
let tcanada = {
    pais: canada,
    fichas: 2,
    color: "",
    simbolo: "Cañon",
};
let tyukon = {
    pais: yukon,
    fichas: 2,
    color: "",
    simbolo: "Globo",
};
let toregon = {
    pais: oregon,
    fichas: 2,
    color: "",
    simbolo: "Cañon",
};
let tnuevayork = {
    pais: nuevayork,
    fichas: 2,
    color: "",
    simbolo: "Fragata",
};
let tterranova = {
    pais: terranova,
    fichas: 2,
    color: "",
    simbolo: "Cañon",
};
let tlabrador = {
    pais: labrador,
    fichas: 2,
    color: "",
    simbolo: "Cañon",
};
let tgroenlandia = {
    pais: groenlandia,
    fichas: 2,
    color: "",
    simbolo: "Globo",
};
let tcalifornia = {
    pais: california,
    fichas: 2,
    color: "",
    simbolo: "Cañon",
};
let tmexico = {
    pais: mexico,
    fichas: 2,
    color: "",
    simbolo: "Cañon",
};
let tchile = {
    pais: chile,
    fichas: 2,
    color: "",
    simbolo: "Globo",
};
let tperu = {
    pais: peru,
    fichas: 2,
    color: "",
    simbolo: "Fragata",
};
let targentina = {
    pais: argentina,
    fichas: 2,
    color: "",
    simbolo: "Comodin",
};
let turuguay = {
    pais: uruguay,
    fichas: 2,
    color: "",
    simbolo: "Globo",
};
let tbrasil = {
    pais: brasil,
    fichas: 2,
    color: "",
    simbolo: "Fragata",
};
let tcolombia = {
    pais: colombia,
    fichas: 2,
    color: "",
    simbolo: "Globo",
};
let tsahara = {
    pais: sahara,
    fichas: 2,
    color: "",
    simbolo: "Cañon",
};
let tegipto = {
    pais: egipto,
    fichas: 2,
    color: "",
    simbolo: "Globo",
};
let tetiopia = {
    pais: etiopia,
    fichas: 2,
    color: "",
    simbolo: "Globo",
};
let tzaire = {
    pais: zaire,
    fichas: 2,
    color: "",
    simbolo: "Fragata",
};
let tsudafrica = {
    pais: sudafrica,
    fichas: 2,
    color: "",
    simbolo: "Cañon",
};
let tmadagascar = {
    pais: madagascar,
    fichas: 2,
    color: "",
    simbolo: "Fragata",
};

tpaises.push(taustralia, tsumatra, tjava, tborneo, tindia, tmalasia, tchina, tiran, tjapon, tgobi, tmongolia, tkamchatka, tturquia, tisrael, tarabia, tsiberia, ttaimir, ttartaria, taral, trusia, tsuecia, tpolonia, talemania, titalia, tfrancia, tespaña, tgranbretaña, tislandia, talaska, tcanada, tyukon, toregon, tnuevayork, tterranova, tlabrador, tgroenlandia, tcalifornia, tmexico, tchile, tperu, targentina, turuguay, tbrasil, tcolombia, tsahara, tegipto, tetiopia, tzaire, tsudafrica, tmadagascar);

while(tpaises.length > itarj1){
    randomizador = Math.floor(Math.random() * tpaises.length);
    itarj2 = 0;
    while(mazo.length > itarj2 && mazo[itarj2] != tpaises[randomizador]){
        itarj2++;
    };
    if(mazo[itarj2] != tpaises[randomizador]){
        mazo.push(tpaises[randomizador]);
        itarj1++;
    };
itarj2 = 0;
};

itarj1 = 0;
itarj2 = 0;

//Numero de jugadores
i = 0;
while(njugadores > i){
colores.push(listacolores[i]);
i++;
};
i = 0;
randomizador = Math.floor(Math.random() * colores.length);
let listacoloresreserva = colores.splice(0, randomizador);
while(listacoloresreserva.length > 0){
    colores.push(listacoloresreserva[0]);
    listacoloresreserva.shift();
};
turno = colores[0];
sectores.forEach((s) => {
    s.classList.add("elsesector")
    });
    if(turno === "Rojo"){
    sectorrojo.classList.add("sectorturno");
    sectorrojo.classList.remove("elsesector");
    } else if(turno === "Azul"){
    sectorazul.classList.add("sectorturno");
    sectorazul.classList.remove("elsesector");
    } else if(turno === "Amarillo"){
    sectoramarillo.classList.add("sectorturno");
    sectoramarillo.classList.remove("elsesector");
    } else if(turno === "Verde"){
    sectorverde.classList.add("sectorturno");
    sectorverde.classList.remove("elsesector");
    } else if(turno === "Magenta"){
    sectormagenta.classList.add("sectorturno");
    sectormagenta.classList.remove("elsesector");
    } else if(turno === "Negro"){
    sectornegro.classList.add("sectorturno");
    sectornegro.classList.remove("elsesector");
    }

//Turno y Fase iniciales
currentturn.textContent = "Turno: " + turno;
currentphase.textContent = "Fase: " + fase;

//Asignar países 
if(checkCargar = "false"){
while (paises.length > i) {
randomizador = Math.floor(Math.random() * paises.length);
if (i2 === colores.length) {
i2 = 0;
};
if (paises[randomizador].colorfichas === ""){
paises[randomizador].colorfichas = colores[i2];
i++;
i2++;
};
test26(paises[randomizador]);
};
};
i = 0;
i2 = 0;

//Asignar objetivos
if(nobjetivos === "destruccion"){
    desobjetivos.forEach((d) => {
        if(colores.includes(d.destruir)){
            objetivos.push(d);
        };
    });
};
if(nobjetivos === "true" || nobjetivos === "destruccion"){
while (colores.length > i) {
    randomizador = Math.floor(Math.random() * objetivos.length);
    if (objetivos[randomizador].color === ""){
        if(desobjetivos.includes(objetivos[randomizador])){
            if(objetivos[randomizador].destruir !== colores[i]){
        objetivos[randomizador].color = colores[i];
        i++;
    }} else {
        objetivos[randomizador].color = colores[i];
        i++;
    }
};
};
};
i = 0;
while(objetivos.length > i && objetivos[i].color != "Rojo"){
    i++;
};
if (objetivos.length > i && objetivos[i].color === "Rojo"){
contenidorojo.textContent = objetivos[i].string;}
i = 0;
while(objetivos.length > i && objetivos[i].color != "Azul"){
    i++;
};
if (objetivos.length > i && objetivos[i].color === "Azul"){
    contenidoazul.textContent = objetivos[i].string;}
i = 0;
while(objetivos.length > i && objetivos[i].color != "Amarillo"){
    i++;
};
if (objetivos.length > i && objetivos[i].color === "Amarillo"){
    contenidoamarillo.textContent = objetivos[i].string;}
i = 0;
while(objetivos.length > i && objetivos[i].color != "Verde"){
    i++;
};
if (objetivos.length > i && objetivos[i].color === "Verde"){
    contenidoverde.textContent = objetivos[i].string;}
i = 0;
while(objetivos.length > i && objetivos[i].color != "Magenta"){
    i++;
};
if (objetivos.length > i && objetivos[i].color === "Magenta"){
    contenidomagenta.textContent = objetivos[i].string;}
i = 0;
while(objetivos.length > i && objetivos[i].color != "Negro"){
    i++;
};
if (objetivos.length > i && objetivos[i].color === "Negro"){
    contenidonegro.textContent = objetivos[i].string;}
i = 0;
//Instructor
function actualizarInstrucciones(faseactual){
let fichasActuales = 0;
iactins1 = 0;
iactins2 = 0;
iactins3 = [];
if (turno === "Rojo") {
fichasActuales = fichasnuevas.rojo;
 } else if (turno === "Azul") {
fichasActuales = fichasnuevas.azul;
} else if (turno === "Amarillo") {
fichasActuales = fichasnuevas.amarillo;
} else if (turno === "Verde") {
fichasActuales = fichasnuevas.verde;
} else if (turno === "Magenta") {
fichasActuales = fichasnuevas.magenta;
} else if (turno === "Negro") {
fichasActuales = fichasnuevas.negro;
};
if(faseactual === "Incorporar"){
while(fncontinentes.length > iactins1){
    if(fncontinentes[iactins1].color === turno){
    iactins3.push(iactins1);
    };
iactins1++;
};
if (iactins3.length > 0){
    while(iactins3.length > iactins2){
        if(iactins2 + 1 === iactins3.length){
        texto = texto + " y " + fncontinentes[iactins3[iactins2]].fichas + " fichas de " + fncontinentes[iactins3[iactins2]].string;
        } else{
            texto = texto + ", " + fncontinentes[iactins3[iactins2]].fichas + " fichas de " + fncontinentes[iactins3[iactins2]].string;
        }
        iactins2++;
    };
};
if (texto === ""){
 instrucciones.textContent = "Te quedan " + fichasActuales + " fichas para incorporar. Clickea el territorio donde quieras ubicarlas.";
} else {
 instrucciones.textContent = "Te quedan " + fichasActuales + " fichas" + texto + " para incorporar. Clickea el territorio donde quieras ubicarlas.";
};
} else if (faseactual === "Atacar") {
 instrucciones.textContent = atacarInstruccion
} else if (faseactual === "Reagrupar") {
 instrucciones.textContent = reagruparInstruccion;
} else if (faseactual === "Primera Incorporación"){
 instrucciones.textContent = "Tenés " + fichasActuales + " fichas para incorporar, clickea el territorio para poner una ficha";
} else if (faseactual === "Segunda Incorporación"){
 instrucciones.textContent = "Ahora tenés " + fichasActuales + " fichas para incorporar";
};
iactins1 = 0;
iactins2 = 0;
iactins3 = [];
texto = ""
};

function cambiarInstructor() {
    let ninstructor = localStorage.getItem("ninstructor");
    let instructorActivo = (ninstructor === "true" || ninstructor === null);
    
    if (instructorActivo) {
        localStorage.setItem("ninstructor", "false");
        instrucciones.style.display = "none";
        actRapidaIns.textContent = "Instructor desactivado";
    } else {
        localStorage.setItem("ninstructor", "true");
        instrucciones.style.display = "block";
        actRapidaIns.textContent = "Instructor activado";
    };
};

let ninstructor = localStorage.getItem("ninstructor");
actRapidaIns.textContent = "Instructor activado";
if (ninstructor == "true") {
    inicioRonda1 = "";
    inicioRonda2 = "";
    incorporarInstruccion = ""; 
    atacarInstruccion = "Selecciona un territorio propio y luego uno enemigo limitrofe para atacar";
    reagruparInstruccion = "Selecciona dos territorios propios limitrofes para reagrupar fichas";
    instrucciones.style.display = "block"; 
} else if (ninstructor == "false") {
    actRapidaIns.textContent = "Instructor desactivado"
    instrucciones.style.display = "none"; 
};

//Actualizar dialogs tarjetas
function test22(color){
i221 = 0;
if(color === "Rojo"){
while(tarjetasrojo.length > i221){
    docTrojo[i221].textContent = tarjetasrojo[i221].pais.nombre;
    if(docTrojo[i221].textContent != "" && !docTrojo[i221].classList.contains("tarjeta")){
        docTrojo[i221].classList.add("tarjeta");
    };
    if(tarjetasrojo[i221].simbolo === "Globo"){
        docTrojo[i221].innerHTML += `
        <img src=../IMAGENES/Globo.svg>
        <img width="30" src=../IMAGENES/LOGO.png>
        `
        } else if(tarjetasrojo[i221].simbolo === "Cañon"){
        docTrojo[i221].innerHTML += `
        <img src=../IMAGENES/Cañon.svg>
        <img width="30" src=../IMAGENES/LOGO.png>
        `
        } else if(tarjetasrojo[i221].simbolo === "Fragata"){
        docTrojo[i221].innerHTML += `
        <img src=../IMAGENES/Fragata.svg>
        <img width="30" src=../IMAGENES/LOGO.png>
        `
        } else if(tarjetasrojo[i221].simbolo === "Comodin"){
        docTrojo[i221].innerHTML += `
        <img src=../IMAGENES/Comodin.svg>
        <img width="30" src=../IMAGENES/LOGO.png>
        `
        }
    if (tselect1 === tarjetasrojo[i221] || tselect2 === tarjetasrojo[i221] || tselect3 === tarjetasrojo[i221]){
        if(!docTrojo[i221].classList.contains("bordeAmarillo")){
        docTrojo[i221].classList.add("bordeAmarillo");};
    } else if (tselect1 != tarjetasrojo[i221] && tselect2 != tarjetasrojo[i221] && tselect3 != tarjetasrojo[i221]){
        if(docTrojo[i221].classList.contains("bordeAmarillo")){
            docTrojo[i221].classList.remove("bordeAmarillo");};
    };   
    i221++;
    };
};
i221 = 0;
if(color === "Azul"){
while(tarjetasazul.length > i221){
    docTazul[i221].textContent = tarjetasazul[i221].pais.nombre;
    if(docTazul[i221].textContent != "" && !docTazul[i221].classList.contains("tarjeta")){
    docTazul[i221].classList.add("tarjeta");
    };
    if(tarjetasazul[i221].simbolo === "Globo"){
        docTazul[i221].innerHTML += `
        <img src=../IMAGENES/Globo.svg>
        <img width="30" src=../IMAGENES/LOGO.png>
        `
        } else if(tarjetasazul[i221].simbolo === "Cañon"){
        docTazul[i221].innerHTML += `
        <img src=../IMAGENES/Cañon.svg>
        <img width="30" src=../IMAGENES/LOGO.png>
        `
        } else if(tarjetasazul[i221].simbolo === "Fragata"){
        docTazul[i221].innerHTML += `
        <img src=../IMAGENES/Fragata.svg>
        <img width="30" src=../IMAGENES/LOGO.png>
        `
        } else if(tarjetasazul[i221].simbolo === "Comodin"){
        docTazul[i221].innerHTML += `
        <img src=../IMAGENES/Comodin.svg>
        <img width="30" src=../IMAGENES/LOGO.png>
        `
        }
    if (tselect1 === tarjetasazul[i221] || tselect2 === tarjetasazul[i221] || tselect3 === tarjetasazul[i221]){
        if(!docTazul[i221].classList.contains("bordeAmarillo")){
        docTazul[i221].classList.add("bordeAmarillo");};
    } else if (tselect1 != tarjetasazul[i221] && tselect2 != tarjetasazul[i221] && tselect3 != tarjetasazul[i221]){
        if(docTazul[i221].classList.contains("bordeAmarillo")){
            docTazul[i221].classList.remove("bordeAmarillo");};
    };   
    i221++;
};
};
i221 = 0;
if(color === "Amarillo"){
while(tarjetasamarillo.length > i221){
    docTamarillo[i221].textContent = tarjetasamarillo[i221].pais.nombre;
    if(docTamarillo[i221].textContent != "" && !docTamarillo[i221].classList.contains("tarjeta")){
    docTamarillo[i221].classList.add("tarjeta");
    };
    if(tarjetasamarillo[i221].simbolo === "Globo"){
        docTamarillo[i221].innerHTML += `
        <img src=../IMAGENES/Globo.svg>
        <img width="30" src=../IMAGENES/LOGO.png>
        `
        } else if(tarjetasamarillo[i221].simbolo === "Cañon"){
        docTamarillo[i221].innerHTML += `
        <img src=../IMAGENES/Cañon.svg>
        <img width="30" src=../IMAGENES/LOGO.png>
        `
        } else if(tarjetasamarillo[i221].simbolo === "Fragata"){
        docTamarillo[i221].innerHTML += `
        <img src=../IMAGENES/Fragata.svg>
        <img width="30" src=../IMAGENES/LOGO.png>
        `
        } else if(tarjetasamarillo[i221].simbolo === "Comodin"){
        docTamarillo[i221].innerHTML += `
        <img src=../IMAGENES/Comodin.svg>
        <img width="30" src=../IMAGENES/LOGO.png>
        `
        }    
    if (tselect1 === tarjetasamarillo[i221] || tselect2 === tarjetasamarillo[i221] || tselect3 === tarjetasamarillo[i221]){
        if(!docTamarillo[i221].classList.contains("bordeAmarillo")){
        docTamarillo[i221].classList.add("bordeAmarillo");};
    } else if (tselect1 != tarjetasamarillo[i221] && tselect2 != tarjetasamarillo[i221] && tselect3 != tarjetasamarillo[i221]){
        if(docTamarillo[i221].classList.contains("bordeAmarillo")){
            docTamarillo[i221].classList.remove("bordeAmarillo");};
    };   
    i221++;
};
};
i221 = 0;
if(color === "Verde"){
while(tarjetasverde.length > i221){
    docTverde[i221].textContent = tarjetasverde[i221].pais.nombre;
    if(docTverde[i221].textContent != "" && !docTverde[i221].classList.contains("tarjeta")){
    docTverde[i221].classList.add("tarjeta");
    };  
    if(tarjetasverde[i221].simbolo === "Globo"){
        docTverde[i221].innerHTML += `
        <img src=../IMAGENES/Globo.svg>
        <img width="30" src=../IMAGENES/LOGO.png>
        `
        } else if(tarjetasverde[i221].simbolo === "Cañon"){
        docTverde[i221].innerHTML += `
        <img src=../IMAGENES/Cañon.svg>
        <img width="30" src=../IMAGENES/LOGO.png>
        `
        } else if(tarjetasverde[i221].simbolo === "Fragata"){
        docTverde[i221].innerHTML += `
        <img src=../IMAGENES/Fragata.svg>
        <img width="30" src=../IMAGENES/LOGO.png>
        `
        } else if(tarjetasverde[i221].simbolo === "Comodin"){
        docTverde[i221].innerHTML += `
        <img src=../IMAGENES/Comodin.svg>
        <img width="30" src=../IMAGENES/LOGO.png>
        `
        }  
    if (tselect1 === tarjetasverde[i221] || tselect2 === tarjetasverde[i221] || tselect3 === tarjetasverde[i221]){
        if(!docTverde[i221].classList.contains("bordeAmarillo")){
        docTverde[i221].classList.add("bordeAmarillo");};
    } else if (tselect1 != tarjetasverde[i221] && tselect2 != tarjetasverde[i221] && tselect3 != tarjetasverde[i221]){
        if(docTverde[i221].classList.contains("bordeAmarillo")){
            docTverde[i221].classList.remove("bordeAmarillo");};
    };   
    i221++;
};
};
i221 = 0;
if(color === "Magenta"){
while(tarjetasmagenta.length > i221){
    docTmagenta[i221].textContent = tarjetasmagenta[i221].pais.nombre;
    if(docTmagenta[i221].textContent != "" && !docTmagenta[i221].classList.contains("tarjeta")){
    docTmagenta[i221].classList.add("tarjeta");
    };
    if(tarjetasmagenta[i221].simbolo === "Globo"){
        docTmagenta[i221].innerHTML += `
        <img src=../IMAGENES/Globo.svg>
        <img width="30" src=../IMAGENES/LOGO.png>
        `
        } else if(tarjetasmagenta[i221].simbolo === "Cañon"){
        docTmagenta[i221].innerHTML += `
        <img src=../IMAGENES/Cañon.svg>
        <img width="30" src=../IMAGENES/LOGO.png>
        `
        } else if(tarjetasmagenta[i221].simbolo === "Fragata"){
        docTmagenta[i221].innerHTML += `
        <img src=../IMAGENES/Fragata.svg>
        <img width="30" src=../IMAGENES/LOGO.png>
        `
        } else if(tarjetasmagenta[i221].simbolo === "Comodin"){
        docTmagenta[i221].innerHTML += `
        <img src=../IMAGENES/Comodin.svg>
        <img width="30" src=../IMAGENES/LOGO.png>
        `
        }
    if (tselect1 === tarjetasmagenta[i221] || tselect2 === tarjetasmagenta[i221] || tselect3 === tarjetasmagenta[i221]){
    if(!docTmagenta[i221].classList.contains("bordeAmarillo")){
    docTmagenta[i221].classList.add("bordeAmarillo");};
    } else if (tselect1 != tarjetasmagenta[i221] && tselect2 != tarjetasmagenta[i221] && tselect3 != tarjetasmagenta[i221]){
    if(docTmagenta[i221].classList.contains("bordeAmarillo")){
    docTmagenta[i221].classList.remove("bordeAmarillo");};
    };
    i221++;
};
};
i221 = 0;
if(color === "Negro"){
while(tarjetasnegro.length > i221){
    docTnegro[i221].textContent = tarjetasnegro[i221].pais.nombre;
    if(docTnegro[i221].textContent != "" && !docTnegro[i221].classList.contains("tarjeta")){
    docTnegro[i221].classList.add("tarjeta");
    };
        if(tarjetasnegro[i221].simbolo === "Globo"){
        docTnegro[i221].innerHTML += `
        <img src=../IMAGENES/Globo.svg>
        <img width="30" src=../IMAGENES/LOGO.png>
        `
        } else if(tarjetasnegro[i221].simbolo === "Cañon"){
        docTnegro[i221].innerHTML += `
        <img src=../IMAGENES/Cañon.svg>
        <img width="30" src=../IMAGENES/LOGO.png>
        `
        } else if(tarjetasnegro[i221].simbolo === "Fragata"){
        docTnegro[i221].innerHTML += `
        <img src=../IMAGENES/Fragata.svg>
        <img width="30" src=../IMAGENES/LOGO.png>
        `
        } else if(tarjetasnegro[i221].simbolo === "Comodin"){
        docTnegro[i221].innerHTML += `
        <img src=../IMAGENES/Comodin.svg>
        <img width="30" src=../IMAGENES/LOGO.png>
        `
        }
    if (tselect1 === tarjetasnegro[i221] || tselect2 === tarjetasnegro[i221] || tselect3 === tarjetasnegro[i221]){
    if(!docTnegro[i221].classList.contains("bordeAmarillo")){
    docTnegro[i221].classList.add("bordeAmarillo");};
    } else if (tselect1 != tarjetasnegro[i221] && tselect2 != tarjetasnegro[i221] && tselect3 != tarjetasnegro[i221]){
    if(docTnegro[i221].classList.contains("bordeAmarillo")){
    docTnegro[i221].classList.remove("bordeAmarillo");};
    };      
    i221++;
};
};
i221 = 0;
};

//Seleccionar tarjeta
function test23(tarjeta){
if(tarjeta.color === turno && fase === "Incorporar"){
if(tselect1 === 0){
    tselect1 = tarjeta;
} else if(tselect1 != 0 && tselect1 != tarjeta && tselect2 === 0){
    tselect2 = tarjeta
} else if(tselect1 != 0 && tselect1 != tarjeta && tselect2 != 0 && tselect2 != tarjeta && tselect3 === 0){
    tselect3 = tarjeta;
} else if(tselect1 != 0 && tselect1 != tarjeta && tselect2 != 0 && tselect2 != tarjeta && tselect3!=0 && tselect3 != tarjeta){
    tselect1 = tarjeta;
    tselect2 = 0;
    tselect3 = 0;
    fichascanjearray.forEach(f => {
        f.textContent = "";
    });
};
test22(turno);
if(tselect1 != 0 && tselect2 != 0 && tselect3 != 0){
    if(tselect1.simbolo === "Comodin" || tselect2.simbolo === "Comodin" || tselect3.simbolo === "Comodin"){
    test28(turno);
    } else if (tselect1.simbolo === tselect2.simbolo && tselect2.simbolo === tselect3.simbolo){
    test28(turno);
    } else if (tselect1.simbolo != tselect2.simbolo && tselect2.simbolo != tselect3.simbolo && tselect3.simbolo != tselect1.simbolo){
    test28(turno);
    };
    };
};
};

function test28(color){
if(color === "Rojo"){
if(2 >= canjesrojo){
fichascanjerojo.textContent = "Se te otorgarán " +  (4 + 3 * canjesrojo) + " fichas por este canje.";
} else if (canjesrojo > 2){
fichascanjerojo.textContent = "Se te otorgarán " + (10 + 5 * (canjesrojo-2)) + " fichas por este canje.";
};
} else if(color === "Azul"){
if(2 >= canjesazul){
fichascanjeazul.textContent = "Se te otorgarán " +  (4 + 3 * canjesazul) + " fichas por este canje.";
} else if (canjesazul > 2){
fichascanjeazul.textContent = "Se te otorgarán " + (10 + 5 * (canjesazul-2)) + " fichas por este canje.";
};
} else if(color === "Amarillo"){
if(2 >= canjesamarillo){
fichascanjeamarillo.textContent = "Se te otorgarán " +  (4 + 3 * canjesamarillo) + " fichas por este canje.";
} else if (canjesamarillo > 2){
fichascanjeamarillo.textContent = "Se te otorgarán " + (10 + 5 * (canjesamarillo-2)) + " fichas por este canje.";
};
} else if(color === "Verde"){
if(2 >= canjesverde){
fichascanjeverde.textContent = "Se te otorgarán " +  (4 + 3 * canjesverde) + " fichas por este canje.";
} else if (canjesverde > 2){
fichascanjeverde.textContent = "Se te otorgarán " + (10 + 5 * (canjesverde-2)) + " fichas por este canje.";
};
} else if(color === "Magenta"){
if(2 >= canjesmagenta){
fichascanjemagenta.textContent = "Se te otorgarán " +  (4 + 3 * canjesmagenta) + " fichas por este canje.";
} else if (canjesmagenta > 2){
fichascanjemagenta.textContent = "Se te otorgarán " + (10 + 5 * (canjesmagenta-2)) + " fichas por este canje.";
};
} else if(color === "Negro"){
if(2 >= canjesnegro){
fichascanjenegro.textContent = "Se te otorgarán " +  (4 + 3 * canjesnegro) + " fichas por este canje.";
} else if (canjesnegro > 2){
fichascanjenegro.textContent = "Se te otorgarán " + (10 + 5 * (canjesnegro-2)) + " fichas por este canje.";
};
}
};

//Ejecutar canjes
function test25(color){
    if(color === "Rojo"){
    if(2 >= canjesrojo){
    fichasnuevas.rojo = fichasnuevas.rojo + 4 + 3 * canjesrojo;
    } else if (canjesrojo > 2){
    fichasnuevas.rojo = fichasnuevas.rojo + 10 + 5 * (canjesrojo-2);
    };
    canjesrojo++;
    while(tarjetasrojo[i241] != tselect1){
        i241++;
    };
    tarjetasrojo[i241].color = "";
    tarjetasrojo[i241].fichas = 2;
    tarjetareserva = tarjetasrojo[i241];
    tarjetasrojo.splice(i241, 1);
    mazo.push(tarjetareserva);
    tarjetareserva = 0;
    i241 = 0;
while(tarjetasrojo[i241] != tselect2){
        i241++;
    };
    tarjetasrojo[i241].color = "";
    tarjetasrojo[i241].fichas = 2;
    tarjetareserva = tarjetasrojo[i241];
    tarjetasrojo.splice(i241, 1);
    mazo.push(tarjetareserva);
    tarjetareserva = 0;
    i241 = 0;
    while(tarjetasrojo[i241] != tselect3){
        i241++;
    };
    tarjetasrojo[i241].color = "";
    tarjetasrojo[i241].fichas = 2;
    tarjetareserva = tarjetasrojo[i241];
    tarjetasrojo.splice(i241, 1);
    mazo.push(tarjetareserva);
    tarjetareserva = 0;
    i241 = 0;
    while(docTrojo.length > i241){
        docTrojo[i241].textContent = "";
        docTrojo[i241].classList.remove("tarjeta");
        docTrojo[i241].classList.remove("bordeAmarillo");
        docTrojo[i241].innerHTML = "";
        i241++;
    };
    i241 = 0;
} else if(color === "Azul"){
    if(2 >= canjesazul){
    fichasnuevas.azul = fichasnuevas.azul + 4 + 3 * canjesazul;
    } else if (canjesazul > 2){
    fichasnuevas.azul = fichasnuevas.azul + 10 + 5 * (canjesazul-2);
    };
    canjesazul++;
    while(tarjetasazul[i241] != tselect1){
        i241++;
    };
    tarjetasazul[i241].color = "";
    tarjetasazul[i241].fichas = 2;
    tarjetareserva = tarjetasazul[i241];
    tarjetasazul.splice(i241, 1);
    mazo.push(tarjetareserva);
    tarjetareserva = 0;
    i241 = 0;
while(tarjetasazul[i241] != tselect2){
        i241++;
    };
    tarjetasazul[i241].color = "";
    tarjetasazul[i241].fichas = 2;
    tarjetareserva = tarjetasazul[i241];
    tarjetasazul.splice(i241, 1);
    mazo.push(tarjetareserva);
    tarjetareserva = 0;
    i241 = 0;
    while(tarjetasazul[i241] != tselect3){
        i241++;
    };
    tarjetasazul[i241].color = "";
    tarjetasazul[i241].fichas = 2;
    tarjetareserva = tarjetasazul[i241];
    tarjetasazul.splice(i241, 1);
    mazo.push(tarjetareserva);
    tarjetareserva = 0;
    i241 = 0;
    while(docTazul.length > i241){
    docTazul[i241].textContent = "";
    docTazul[i241].classList.remove("tarjeta");
    docTazul[i241].classList.remove("bordeAmarillo");
    docTazul[i241].innerHTML = "";
    i241++;
    };
    i241 = 0;
}  else if(color === "Amarillo"){
    if(2 >= canjesamarillo){
    fichasnuevas.amarillo = fichasnuevas.amarillo + 4 + 3 * canjesamarillo;
    } else if (canjesamarillo > 2){
    fichasnuevas.amarillo = fichasnuevas.amarillo + 10 + 5 * (canjesamarillo-2);
    };
    canjesamarillo++;
    while(tarjetasamarillo[i241] != tselect1){
        i241++;
    };
    tarjetasamarillo[i241].color = "";
    tarjetasamarillo[i241].fichas = 2;
    tarjetareserva = tarjetasamarillo[i241];
    tarjetasamarillo.splice(i241, 1);
    mazo.push(tarjetareserva);
    tarjetareserva = 0;
    i241 = 0;
while(tarjetasamarillo[i241] != tselect2){
        i241++;
    };
    tarjetasamarillo[i241].color = "";
    tarjetasamarillo[i241].fichas = 2;
    tarjetareserva = tarjetasamarillo[i241];
    tarjetasamarillo.splice(i241, 1);
    mazo.push(tarjetareserva);
    tarjetareserva = 0;
    i241 = 0;
    while(tarjetasamarillo[i241] != tselect3){
        i241++;
    };
    tarjetasamarillo[i241].color = "";
    tarjetasamarillo[i241].fichas = 2;
    tarjetareserva = tarjetasamarillo[i241];
    tarjetasamarillo.splice(i241, 1);
    mazo.push(tarjetareserva);
    tarjetareserva = 0;
    i241 = 0;
    while(docTamarillo.length > i241){
    docTamarillo[i241].textContent = "";
    docTamarillo[i241].classList.remove("tarjeta");
    docTamarillo[i241].classList.remove("bordeAmarillo");
    docTamarillo[i241].innerHTML = "";    
    i241++;
    };
    i241 = 0;
}  else if(color === "Verde"){
    if(2 >= canjesverde){
    fichasnuevas.verde = fichasnuevas.verde + 4 + 3 * canjesverde;
    } else if (canjesverde > 2){
    fichasnuevas.verde = fichasnuevas.verde + 10 + 5 * (canjesverde-2);
    };
    canjesverde++;
    while(tarjetasverde[i241] != tselect1){
        i241++;
    };
    tarjetasverde[i241].color = "";
    tarjetasverde[i241].fichas = 2;
    tarjetareserva = tarjetasverde[i241];
    tarjetasverde.splice(i241, 1);
    mazo.push(tarjetareserva);
    tarjetareserva = 0;
    i241 = 0;
while(tarjetasverde[i241] != tselect2){
        i241++;
    };
    tarjetasverde[i241].color = "";
    tarjetasverde[i241].fichas = 2;
    tarjetareserva = tarjetasverde[i241];
    tarjetasverde.splice(i241, 1);
    mazo.push(tarjetareserva);
    tarjetareserva = 0;
    i241 = 0;
    while(tarjetasverde[i241] != tselect3){
        i241++;
    };
    tarjetasverde[i241].color = "";
    tarjetasverde[i241].fichas = 2;
     tarjetareserva = tarjetasverde[i241];
    tarjetasverde.splice(i241, 1);
    mazo.push(tarjetareserva);
    tarjetareserva = 0;
    i241 = 0;
    while(docTverde.length > i241){
    docTverde[i241].textContent = "";
    docTverde[i241].classList.remove("tarjeta");
    docTverde[i241].classList.remove("bordeAmarillo");
    docTverde[i241].innerHTML = "";    
    i241++;
    };
    i241 = 0;
}  else if(color === "Magenta"){
    if(2 >= canjesmagenta){
    fichasnuevas.magenta = fichasnuevas.magenta + 4 + 3 * canjesmagenta;
    } else if (canjesmagenta > 2){
    fichasnuevas.magenta = fichasnuevas.magenta + 10 + 5 * (canjesmagenta-2);
    };
    canjesmagenta++;
    while(tarjetasmagenta[i241] != tselect1){
        i241++;
    };
    tarjetasmagenta[i241].color = "";
    tarjetasmagenta[i241].fichas = 2;
    tarjetareserva = tarjetasmagenta[i241];
    tarjetasmagenta.splice(i241, 1);
    mazo.push(tarjetareserva);
    tarjetareserva = 0;
    i241 = 0;
while(tarjetasmagenta[i241] != tselect2){
        i241++;
    };
    tarjetasmagenta[i241].color = "";
    tarjetasmagenta[i241].fichas = 2;
    tarjetareserva = tarjetasmagenta[i241];
    tarjetasmagenta.splice(i241, 1);
    mazo.push(tarjetareserva);
    tarjetareserva = 0;
    i241 = 0;
    while(tarjetasmagenta[i241] != tselect3){
        i241++;
    };
    tarjetasmagenta[i241].color = "";
    tarjetasmagenta[i241].fichas = 2;
    tarjetareserva = tarjetasmagenta[i241];
    tarjetasmagenta.splice(i241, 1);
    mazo.push(tarjetareserva);
    tarjetareserva = 0;
    i241 = 0;
    while(docTmagenta.length > i241){
    docTmagenta[i241].textContent = "";
    docTmagenta[i241].classList.remove("tarjeta");
    docTmagenta[i241].classList.remove("bordeAmarillo");
    docTmagenta[i241].innerHTML = "";    
    i241++;
    };
    i241 = 0;
}  else if(color === "Negro"){
    if(2 >= canjesnegro){
    fichasnuevas.negro = fichasnuevas.negro + 4 + 3 * canjesnegro;
    } else if (canjesnegro > 2){
    fichasnuevas.negro = fichasnuevas.negro + 10 + 5 * (canjesnegro-2);
    };
    canjesnegro++;
    while(tarjetasnegro[i241] != tselect1){
        i241++;
    };
    tarjetasnegro[i241].color = "";
    tarjetasnegro[i241].fichas = 2;
    tarjetareserva = tarjetasnegro[i241];
    tarjetasnegro.splice(i241, 1);
    mazo.push(tarjetareserva);
    tarjetareserva = 0;
    i241 = 0;
while(tarjetasnegro[i241] != tselect2){
        i241++;
    };
    tarjetasnegro[i241].color = "";
    tarjetasnegro[i241].fichas = 2;
    tarjetareserva = tarjetasnegro[i241];
    tarjetasnegro.splice(i241, 1);
    mazo.push(tarjetareserva);
    tarjetareserva = 0;
    i241 = 0;
    while(tarjetasnegro[i241] != tselect3){
        i241++;
    };
    tarjetasnegro[i241].color = "";
    tarjetasnegro[i241].fichas = 2;
    tarjetareserva = tarjetasnegro[i241];
    tarjetasnegro.splice(i241, 1);
    mazo.push(tarjetareserva);
    tarjetareserva = 0;
    i241 = 0;
    while(docTnegro.length > i241){
    docTnegro[i241].textContent = "";
    docTnegro[i241].classList.remove("tarjeta");
    docTnegro[i241].classList.remove("bordeAmarillo");
    docTnegro[i241].innerHTML = "";    
    i241++;
    };
    i241 = 0;
}
tselect1 = 0;
tselect2 = 0;
tselect3 = 0;
fichascanjearray.forEach(f => {
f.textContent = "";
});
test22(color);
actualizarInstrucciones(fase);
guardarPartida();
}

function test24(color){
if(color === turno && fase === "Incorporar"){
if(tselect1 != 0 && tselect2 != 0 && tselect3 != 0){
if(tselect1.simbolo === "Comodin" || tselect2.simbolo === "Comodin" || tselect3.simbolo === "Comodin"){
test25(color);
} else if (tselect1.simbolo === tselect2.simbolo && tselect2.simbolo === tselect3.simbolo){
test25(color);
} else if (tselect1.simbolo != tselect2.simbolo && tselect2.simbolo != tselect3.simbolo && tselect3.simbolo != tselect1.simbolo){
test25(color);
};
};
};
};

//cambio de Turno y Fase
function test12(colorturno) {
    i121 = 0;
    i122 = 0;
    i123 = 0;
    i124 = 0;
    i125 = 0;
    i126 = 0;
    i127 = 0;
    tarjetareserva = 0;
    copiapais = null;
    if (colorturno === turno) {
        copiapaises = [];
        if (fase === "Atacar") {
            while(paises.length > i127){
            copiapais = {
            nombre: paises[i127].nombre,
            fichas: paises[i127].fichas,
            colorfichas: paises[i127].colorfichas
            }
            copiapaises.push(copiapais);
            i127++;
            };
            copiapaises = JSON.parse(JSON.stringify(copiapaises));
            i127= 0;
            fase = "Reagrupar";
            currentphase.textContent = "Fase: " + fase;
        } 
    else if(fase === "Primera Incorporación"){
        i121 = 0;
        while (colores[i121] != colorturno){
            i121++;
        };
    if (colores[i121] === "Rojo" && fichasnuevas.rojo === 0){
                i121++;
                } else if (colores[i121] === "Azul" && fichasnuevas.azul === 0) {
                i121++;
                } else if (colores[i121] === "Amarillo" && fichasnuevas.amarillo === 0) {
                i121++;
                } else if (colores[i121] === "Verde" && fichasnuevas.verde === 0) {
                    i121++;
                } else if (colores[i121] === "Magenta" && fichasnuevas.magenta === 0) {
                i121++;
                } else if (colores[i121] === "Negro" && fichasnuevas.negro === 0) {
                i121++;
                };
        if(i121 < colores.length){
            turno = colores[i121];
            currentturn.textContent = "Turno: " + turno;
        } 
    else if (i121 === colores.length){
        i121 = 0;
        fase = "Segunda Incorporación";
        turno = colores[i121];
        currentturn.textContent = "Turno: " + turno;
        currentphase.textContent = "Fase: " + fase;
        fichasnuevas.rojo = 3;
        fichasnuevas.azul = 3;
        fichasnuevas.amarillo = 3;
        fichasnuevas.verde = 3;
        fichasnuevas.magenta = 3;
        fichasnuevas.negro = 3;
    };
    }
    else if(fase === "Segunda Incorporación"){
    i121 = 0;
       while (colores[i121] != colorturno){
            i121++;
        };
                if (colores[i121] === "Rojo" && fichasnuevas.rojo === 0){
                i121++;
                } else if (colores[i121] === "Azul" && fichasnuevas.azul === 0) {
                i121++;
                } else if (colores[i121] === "Amarillo" && fichasnuevas.amarillo === 0) {
                i121++;
                } else if (colores[i121] === "Verde" && fichasnuevas.verde === 0) {
                    i121++;
                } else if (colores[i121] === "Magenta" && fichasnuevas.magenta === 0) {
                i121++;
                } else if (colores[i121] === "Negro" && fichasnuevas.negro === 0) {
                i121++;
                };
        if(i121 < colores.length){
            turno = colores[i121];
            currentturn.textContent = "Turno: " + turno;
        }
        else if (i121 === colores.length){
        i121 = 0;
        fase = "Atacar";
        turno = colores[i121];
        currentturn.textContent = "Turno: " + turno;
        currentphase.textContent = "Fase: " + fase;
        localStorage.setItem("cargarPartidaInicio", "true");
    };
    }
    else if (fase === "Reagrupar"){
        i121 = 0;
        i122 = 0;
        if(colorturno === "Rojo"){
            if((2 >= canjesrojo && conquista.rojo >= 1) || (canjesrojo >= 3 && conquista.rojo >= 2)){
            if(tarjetasrojo.length < 5){
                tarjetareserva = mazo.shift();
                tarjetareserva.color = "Rojo"
                tarjetasrojo.push(tarjetareserva);
                cnuevatarjeta.textContent = "Se añadió " + tarjetareserva.pais.nombre + " a tus tarjetas."
                dnuevatarjeta.showModal();
                tarjetareserva = 0;
            };
        };
            while (tarjetasrojo.length > i121){
                if(tarjetasrojo[i121].fichas > 0){
                    while(paises.length > i122 && paises[i122] != tarjetasrojo[i121].pais){
                        i122++;
                    };
                if(paises[i122] === tarjetasrojo[i121].pais && paises[i122].colorfichas === tarjetasrojo[i121].color){
                    paises[i122].fichas = paises[i122].fichas + tarjetasrojo[i121].fichas;
                    test26(paises[i122]);
                    tarjetasrojo[i121].fichas = 0;
                };
                };
                i121++;
                i122 = 0;
            };
        } else if(colorturno === "Azul"){
            if((2 >= canjesazul && conquista.azul >= 1) || (canjesazul >= 3 && conquista.azul >= 2)){
            if(tarjetasazul.length < 5){
                tarjetareserva = mazo.shift();
                tarjetareserva.color = "Azul"
                tarjetasazul.push(tarjetareserva);
                cnuevatarjeta.textContent = "Se añadió " + tarjetareserva.pais.nombre + " a tus tarjetas."
                dnuevatarjeta.showModal();
                tarjetareserva = 0;
            };
        };
            while (tarjetasazul.length > i121){
                if(tarjetasazul[i121].fichas > 0){
                    while(paises.length > i122 && paises[i122] != tarjetasazul[i121].pais){
                        i122++;
                    };
                if(paises[i122] === tarjetasazul[i121].pais && paises[i122].colorfichas === tarjetasazul[i121].color){
                    paises[i122].fichas = paises[i122].fichas + tarjetasazul[i121].fichas;
                    test26(paises[i122]);
                    tarjetasazul[i121].fichas = 0;
                };
                };
                i121++;
                i122 = 0;
            };
        } else if(colorturno === "Amarillo"){
            if((2 >= canjesamarillo && conquista.amarillo >= 1) || (canjesamarillo >= 3 && conquista.amarillo >= 2)){
            if(tarjetasamarillo.length < 5){
                tarjetareserva = mazo.shift();
                tarjetareserva.color = "Amarillo"
                tarjetasamarillo.push(tarjetareserva);
                cnuevatarjeta.textContent = "Se añadió " + tarjetareserva.pais.nombre + " a tus tarjetas."
                dnuevatarjeta.showModal();
                tarjetareserva = 0;
            };
        };
            while (tarjetasamarillo.length > i121){
                if(tarjetasamarillo[i121].fichas > 0){
                    while(paises.length > i122 && paises[i122] != tarjetasamarillo[i121].pais){
                        i122++;
                    };
                if(paises[i122] === tarjetasamarillo[i121].pais && paises[i122].colorfichas === tarjetasamarillo[i121].color){
                    paises[i122].fichas = paises[i122].fichas + tarjetasamarillo[i121].fichas;
                    test26(paises[i122]);
                    tarjetasamarillo[i121].fichas = 0;
                };
                };
                i121++;
                i122 = 0;
            };
        } else if(colorturno === "Verde"){
            if((2 >= canjesverde && conquista.verde >= 1) || (canjesverde >= 3 && conquista.verde >= 2)){
            if(tarjetasverde.length < 5){
                tarjetareserva = mazo.shift();
                tarjetareserva.color = "Verde"
                tarjetasverde.push(tarjetareserva);
                cnuevatarjeta.textContent = "Se añadió " + tarjetareserva.pais.nombre + " a tus tarjetas."
                dnuevatarjeta.showModal();
                tarjetareserva = 0;
            };
        };
            while (tarjetasverde.length > i121){
                if(tarjetasverde[i121].fichas > 0){
                    while(paises.length > i122 && paises[i122] != tarjetasverde[i121].pais){
                        i122++;
                    };
                if(paises[i122] === tarjetasverde[i121].pais && paises[i122].colorfichas === tarjetasverde[i121].color){
                    paises[i122].fichas = paises[i122].fichas + tarjetasverde[i121].fichas;
                    test26(paises[i122]);
                    tarjetasverde[i121].fichas = 0;
                };
                };
                i121++;
                i122 = 0;
            };
        } else if(colorturno === "Magenta"){
            if((2 >= canjesmagenta && conquista.magenta >= 1) || (canjesmagenta >= 3 && conquista.magenta >= 2)){
            if(tarjetasmagenta.length < 5){
                tarjetareserva = mazo.shift();
                tarjetareserva.color = "Magenta"
                tarjetasmagenta.push(tarjetareserva);
                cnuevatarjeta.textContent = "Se añadió " + tarjetareserva.pais.nombre + " a tus tarjetas."
                dnuevatarjeta.showModal();
                tarjetareserva = 0;
            };
        };
            while (tarjetasmagenta.length > i121){
                if(tarjetasmagenta[i121].fichas > 0){
                    while(paises.length > i122 && paises[i122] != tarjetasmagenta[i121].pais){
                        i122++;
                    };
                if(paises[i122] === tarjetasmagenta[i121].pais && paises[i122].colorfichas === tarjetasmagenta[i121].color){
                    paises[i122].fichas = paises[i122].fichas + tarjetasmagenta[i121].fichas;
                    test26(paises[i122]);
                    tarjetasmagenta[i121].fichas = 0;
                };
                };
                i121++;
                i122 = 0;
            };
        } else if(colorturno === "Negro"){
            if((2 >= canjesnegro && conquista.negro >= 1) || (canjesnegro >= 3 && conquista.negro >= 2)){
            if(tarjetasnegro.length < 5){
                tarjetareserva = mazo.shift();
                tarjetareserva.color = "Negro"
                tarjetasnegro.push(tarjetareserva);
                cnuevatarjeta.textContent = "Se añadió " + tarjetareserva.pais.nombre + " a tus tarjetas."
                dnuevatarjeta.showModal();
                tarjetareserva = 0;
            };
        };
            while (tarjetasnegro.length > i121){
                if(tarjetasnegro[i121].fichas > 0){
                    while(paises.length > i122 && paises[i122] != tarjetasnegro[i121].pais){
                        i122++;
                    };
                if(paises[i122] === tarjetasnegro[i121].pais && paises[i122].colorfichas === tarjetasnegro[i121].color){
                    paises[i122].fichas = paises[i122].fichas + tarjetasnegro[i121].fichas;
                    test26(paises[i122]);
                    tarjetasnegro[i121].fichas = 0;
                };
                };
                i121++;
                i122 = 0;
            };
        };
        test22(colorturno);
        i121 = 0;
        i122 = 0;
        conquista.rojo = 0;
        conquista.azul = 0;
        conquista.amarillo = 0;
        conquista.verde = 0;
        conquista.magenta = 0;
        conquista.negro = 0;
            while (colores[i121] != colorturno) {
                i121++;
            };
            i121++;
            if (i121 < colores.length) {
            fase = "Atacar";
            turno = colores[i121];
            currentturn.textContent = "Turno: " + turno;
            currentphase.textContent = "Fase: " + fase;
                }
            else if (i121 === colores.length) {
                reserva = "";
                reserva = colores.shift();
                colores.push(reserva);
                fichasnuevas.rojo = 0;
                fichasnuevas.azul = 0;
                fichasnuevas.amarillo = 0;
                fichasnuevas.verde = 0;
                fichasnuevas.magenta = 0;
                fichasnuevas.negro = 0;
                fnoceania.color = "";
                fnafrica.color = "";
                fnsudamerica.color = "";
                fnasia.color = "";
                fneuropa.color = "";
                fnnorteamerica.color = "";
                i122 = 0;
                i123 = 0;
                while (paises.length > i122) {
                    if (paises[i122].colorfichas === "Rojo") {
                        fichasnuevas.rojo++;
                    } else if (paises[i122].colorfichas === "Azul") {
                        fichasnuevas.azul++;
                    } else if (paises[i122].colorfichas === "Amarillo") {
                        fichasnuevas.amarillo++;
                    } else if (paises[i122].colorfichas === "Verde"){
                        fichasnuevas.verde++;
                    } else if (paises[i122].colorfichas === "Magenta"){
                        fichasnuevas.magenta++;
                    } else if (paises[i122].colorfichas === "Negro"){
                        fichasnuevas.negro++;
                    }
                    i122++;
                    };
                    if (fichasnuevas.rojo % 2 === 1) {
                        fichasnuevas.rojo--;
                    };
                    if (fichasnuevas.azul % 2 === 1) {
                        fichasnuevas.azul--;
                    };
                    if (fichasnuevas.amarillo % 2 === 1) {
                        fichasnuevas.amarillo--;
                    };
                    if (fichasnuevas.verde % 2 === 1) {
                        fichasnuevas.verde--;
                    };
                    if (fichasnuevas.magenta % 2 === 1) {
                        fichasnuevas.magenta--;
                    };
                    if (fichasnuevas.negro % 2 === 1) {
                        fichasnuevas.negro--;
                    };
                    fichasnuevas.rojo = fichasnuevas.rojo / 2;
                    fichasnuevas.azul = fichasnuevas.azul / 2;
                    fichasnuevas.amarillo = fichasnuevas.amarillo / 2;
                    fichasnuevas.verde = fichasnuevas.verde / 2;
                    fichasnuevas.magenta = fichasnuevas.magenta / 2;
                    fichasnuevas.negro = fichasnuevas.negro / 2;
                    if (fichasnuevas.rojo < 3) {
                        fichasnuevas.rojo = 3;
                    };
                    if (fichasnuevas.azul < 3) {
                        fichasnuevas.azul = 3;
                    };
                    if (fichasnuevas.amarillo < 3) {
                        fichasnuevas.amarillo = 3;
                    };
                    if (fichasnuevas.verde < 3) {
                        fichasnuevas.verde = 3;
                    };
                    if (fichasnuevas.magenta < 3) {
                        fichasnuevas.magenta = 3;
                    };
                    if (fichasnuevas.negro < 3) {
                        fichasnuevas.negro = 3;
                    };
                    while (colores.length > i124){
                        while (oceania.length > i125){
                            if(oceania[i125].colorfichas === colores[i124]){
                                i126++;
                            };
                            i125++;
                        };
                        if(i126 === oceania.length){
                            fnoceania.fichas = 2;
                            fnoceania.color = colores[i124];
                        };
                        i125 = 0;
                        i126 = 0;
                        while (africa.length > i125){
                            if(africa[i125].colorfichas === colores[i124]){
                                i126++;
                            };
                            i125++;
                        };
                        if(i126 === africa.length){
                            fnafrica.fichas = 3;
                            fnafrica.color = colores[i124];
                        };
                        i125 = 0;
                        i126 = 0;
                        while (sudamerica.length > i125){
                            if(sudamerica[i125].colorfichas === colores[i124]){
                                i126++;
                            };
                            i125++;
                        };
                        if(i126 === sudamerica.length){
                            fnsudamerica.fichas = 3;
                            fnsudamerica.color = colores[i124];
                        };
                        i125 = 0;
                        i126 = 0;
                        while (asia.length > i125){
                            if(asia[i125].colorfichas === colores[i124]){
                                i126++;
                            };
                            i125++;
                        };
                        if(i126 === asia.length){
                            fnasia.fichas = 7;
                            fnasia.color = colores[i124];
                        };
                        i125 = 0;
                        i126 = 0;
                        while (europa.length > i125){
                            if(europa[i125].colorfichas === colores[i124]){
                                i126++;
                            };
                            i125++;
                        };
                        if(i126 === europa.length){
                            fneuropa.fichas = 5;
                            fneuropa.color = colores[i124];
                        };
                        i125 = 0;
                        i126 = 0;
                        while (norteamerica.length > i125){
                            if(norteamerica[i125].colorfichas === colores[i124]){
                                i126++;
                            };
                            i125++;
                        };
                        if(i126 === norteamerica.length){
                            fnnorteamerica.fichas = 5;
                            fnnorteamerica.color = colores[i124];
                        };
                        i125 = 0;
                        i126 = 0;
                        i124++;
                    };
                    fase = "Incorporar";
                    i121 = 0;
                    i122 = 0;
                    turno = colores[i121];
                    currentturn.textContent = "Turno: " + turno;
                    currentphase.textContent = "Fase: " + fase;
                    };
                }
            else if (fase === "Incorporar"){
                stop = false;
                i121 = 0;
                i122 = 0;
                while (colores[i121] != colorturno) {
                i121++;
                };
                while(fncontinentes.length > i122 && stop === false){
                    if(fncontinentes[i122].color === colores[i121] && fncontinentes[i122].fichas > 0){
                        stop = true;
                    };
                i122++;
                };
                if(stop === false){
                if (colores[i121] === "Rojo" && fichasnuevas.rojo === 0){
                i121++;
                tselect1 = 0;
                tselect2 = 0;
                tselect3 = 0;
                fichascanjerojo.textContent = "";
                } else if (colores[i121] === "Azul" && fichasnuevas.azul === 0) {
                i121++;
                tselect1 = 0;
                tselect2 = 0;
                tselect3 = 0;
                fichascanjeazul.textContent = "";
                } else if (colores[i121] === "Amarillo" && fichasnuevas.amarillo === 0) {
                i121++;
                tselect1 = 0;
                tselect2 = 0;
                tselect3 = 0;
                fichascanjeamarillo.textContent = "";
                } else if (colores[i121] === "Verde" && fichasnuevas.verde === 0) {
                i121++;
                tselect1 = 0;
                tselect2 = 0;
                tselect3 = 0;
                fichascanjeverde.textContent = "";
                } else if (colores[i121] === "Magenta" && fichasnuevas.magenta === 0) {
                i121++;
                tselect1 = 0;
                tselect2 = 0;
                tselect3 = 0;
                fichascanjemagenta.textContent = "";
                } else if (colores[i121] === "Negro" && fichasnuevas.negro === 0) {
                i121++;
                tselect1 = 0;
                tselect2 = 0;
                tselect3 = 0;
                fichascanjenegro.textContent = "";
                };
            };
                if (i121 < colores.length){
                    turno = colores[i121];
                    currentturn.textContent = "Turno: " + turno;
                }
                else if (i121 === colores.length) {
                    fase = "Atacar";
                    i121 = 0;
                    turno = colores[i121];
                    currentturn.textContent = "Turno: " + turno;
                    currentphase.textContent = "Fase: " + fase;
    
                };
                stop = false;
                i121 = 0;
                i122 = 0;
            };
            actualizarInstrucciones(fase);
            guardarPartida();
            paisseleccionado = 0;
            paises.forEach((p)=>{
            p.idsvg.style.stroke = "black";
            p.idsvg.parentElement.style.zIndex = 0;
            p.idsvg.parentElement.style.cursor = "default";
            p.id.style.cursor = "default";
            })
            test22("Rojo");
            test22("Azul");
            test22("Amarillo");
            test22("Verde");
            test22("Magenta");
            test22("Negro");
            sectores.forEach((s) => {
                if(s.classList.contains("sectorturno")){
                s.classList.remove("sectorturno");
                s.classList.add("elsesector");
                };
            });
            if(turno === "Rojo"){
                sectorrojo.classList.add("sectorturno");
                sectorrojo.classList.remove("elsesector");
            } else if(turno === "Azul"){
                sectorazul.classList.add("sectorturno");
                sectorazul.classList.remove("elsesector");
            } else if(turno === "Amarillo"){
                sectoramarillo.classList.add("sectorturno");
                sectoramarillo.classList.remove("elsesector");
            } else if(turno === "Verde"){
                sectorverde.classList.add("sectorturno");
                sectorverde.classList.remove("elsesector");
            } else if(turno === "Magenta"){
                sectormagenta.classList.add("sectorturno");
                sectormagenta.classList.remove("elsesector");
            } else if(turno === "Negro"){
                sectornegro.classList.add("sectorturno");
                sectornegro.classList.remove("elsesector");
            }
            };
        };

//seleccionar pais
function test14(pais) {
    i141 = 0;
    i142 = 0;
    if (fase === "Atacar") {
        if(pais === paisseleccionado){
            paises.forEach((p)=>{
                if(p!== paisseleccionado){
                p.idsvg.style.stroke = "black";
                p.idsvg.parentElement.style.zIndex = 0;
                p.idsvg.parentElement.style.cursor = "default";
                p.id.style.cursor = "default";
                }});
                paisseleccionado = 0;
                paisatacado = 0;
            } else if (turno === pais.colorfichas && pais.fichas > 1) {
            paisseleccionado = pais;
            paisatacado = 0;
            paises.forEach((p)=>{
                if(p!== paisseleccionado){
            p.idsvg.style.stroke = "black";
            p.idsvg.parentElement.style.zIndex = 0;
            p.idsvg.parentElement.style.cursor = "default";
            p.id.style.cursor = "default";
            }})
            paisseleccionado.idsvg.parentElement.style.zIndex = 3;
            if(paisseleccionado.colorfichas === "Rojo"){
            paisseleccionado.idsvg.style.stroke = "red";
            } else if(paisseleccionado.colorfichas === "Azul"){
            paisseleccionado.idsvg.style.stroke = "blue";
            } else if(paisseleccionado.colorfichas === "Amarillo"){
            paisseleccionado.idsvg.style.stroke = "yellow";
            } else if(paisseleccionado.colorfichas === "Verde"){
            paisseleccionado.idsvg.style.stroke = "green";
            } else if(paisseleccionado.colorfichas === "Magenta"){
            paisseleccionado.idsvg.style.stroke = "magenta";
            } else if(paisseleccionado.colorfichas === "Negro"){
            paisseleccionado.idsvg.style.stroke = "#444444";
            };
            paisseleccionado.limitrofes.forEach((l)=>{
            if(l.colorfichas != paisseleccionado.colorfichas){
            l.idsvg.parentElement.style.zIndex = 1;
            l.idsvg.parentElement.style.cursor = "pointer";
            l.id.style.cursor = "pointer";
            if(l.colorfichas === "Rojo"){
            l.idsvg.style.stroke = "red";
            } else if(l.colorfichas === "Azul"){
            l.idsvg.style.stroke = "blue";
            } else if(l.colorfichas === "Amarillo"){
            l.idsvg.style.stroke = "yellow";
            } else if(l.colorfichas === "Verde"){
            l.idsvg.style.stroke = "green";
            } else if(l.colorfichas === "Magenta"){
            l.idsvg.style.stroke = "magenta";
            } else if(l.colorfichas === "Negro"){
            l.idsvg.style.stroke = "#444444";
            };
            };
            })
        } else if (turno != pais.colorfichas && paisseleccionado.colorfichas != pais.colorfichas) {
            i141 = 0;
            while (pais.limitrofes.length > i141 && paisseleccionado != pais.limitrofes[i141]) {
                i141++;
            };
            if (pais.limitrofes[i141] === paisseleccionado) {
                paisatacado = pais;
                paises.forEach((p)=>{
                p.idsvg.style.stroke = "black";
                p.idsvg.parentElement.style.zIndex = 0;
                if(p!== paisseleccionado && p!== paisatacado && paisseleccionado.limitrofes.includes(p) === false){
                p.id.style.cursor = "default";
                p.idsvg.parentElement.style.cursor = "default";
            }})
                paisseleccionado.idsvg.parentElement.style.zIndex = 3;
                paisatacado.idsvg.parentElement.style.zIndex = 1;
                paisatacado.idsvg.parentElement.style.cursor = "pointer";
                paisatacado.id.style.cursor = "pointer";
                if(paisseleccionado.colorfichas === "Rojo"){
                paisseleccionado.idsvg.style.stroke = "red";
                } else if(paisseleccionado.colorfichas === "Azul"){
                paisseleccionado.idsvg.style.stroke = "blue";
                } else if(paisseleccionado.colorfichas === "Amarillo"){
                paisseleccionado.idsvg.style.stroke = "yellow";
                } else if(paisseleccionado.colorfichas === "Verde"){
                paisseleccionado.idsvg.style.stroke = "green";
                } else if(paisseleccionado.colorfichas === "Magenta"){
                paisseleccionado.idsvg.style.stroke = "magenta";
                } else if(paisseleccionado.colorfichas === "Negro"){
                paisseleccionado.idsvg.style.stroke = "#444444";
                };
                if(paisatacado.colorfichas === "Rojo"){
                paisatacado.idsvg.style.stroke = "red";
                } else if(paisatacado.colorfichas === "Azul"){
                paisatacado.idsvg.style.stroke = "blue";
                } else if(paisatacado.colorfichas === "Amarillo"){
                paisatacado.idsvg.style.stroke = "yellow";
                } else if(paisatacado.colorfichas === "Verde"){
                paisatacado.idsvg.style.stroke = "green";
                } else if(paisatacado.colorfichas === "Magenta"){
                paisatacado.idsvg.style.stroke = "magenta";
                } else if(paisatacado.colorfichas === "Negro"){
                paisatacado.idsvg.style.stroke = "#444444";
                };
            };
        };
    };
    i141 = 0;
    if (fase === "Reagrupar") {
        if(pais === paisseleccionado){
            paises.forEach((p)=>{
                if(p!== paisseleccionado){
                p.idsvg.style.stroke = "black";
                p.idsvg.parentElement.style.zIndex = 0;
                p.idsvg.parentElement.style.cursor = "default";
                p.id.style.cursor = "default";
                }});
                paisseleccionado = 0;
            } else if (turno === pais.colorfichas) {
            i141 = 0;
            while (pais.limitrofes.length > i141 && paisseleccionado != pais.limitrofes[i141]) {
                i141++;
            };
            if (pais.limitrofes[i141] != paisseleccionado && pais.fichas > 1) {
                while(copiapaises.length > i142 && copiapaises[i142].nombre != pais.nombre){
                    i142++;
                };
                if(copiapaises[i142].nombre === pais.nombre && copiapaises[i142].fichas > 1){
                paisseleccionado = pais;
                paises.forEach((p)=>{
                    p.idsvg.style.stroke = "black";
                    p.idsvg.parentElement.style.zIndex = 0;
                    p.id.style.cursor = "default";
                    p.idsvg.parentElement.style.cursor = "default";
                    })
                paisseleccionado.idsvg.parentElement.style.zIndex = 3;
                paisseleccionado.idsvg.parentElement.style.cursor = "pointer";
                paisseleccionado.id.style.cursor = "pointer";
                    if(paisseleccionado.colorfichas === "Rojo"){
                    paisseleccionado.idsvg.style.stroke = "red";
                    } else if(paisseleccionado.colorfichas === "Azul"){
                    paisseleccionado.idsvg.style.stroke = "blue";
                    } else if(paisseleccionado.colorfichas === "Amarillo"){
                    paisseleccionado.idsvg.style.stroke = "yellow";
                    } else if(paisseleccionado.colorfichas === "Verde"){
                    paisseleccionado.idsvg.style.stroke = "green";
                    } else if(paisseleccionado.colorfichas === "Magenta"){
                    paisseleccionado.idsvg.style.stroke = "magenta";
                    } else if(paisseleccionado.colorfichas === "Negro"){
                    paisseleccionado.idsvg.style.stroke = "#444444";
                    };
                    paisseleccionado.limitrofes.forEach((l)=>{
                        if(l.colorfichas === paisseleccionado.colorfichas){
                        l.idsvg.parentElement.style.zIndex = 1;
                        if(l.colorfichas === "Rojo"){
                        l.idsvg.style.stroke = "red";
                        } else if(l.colorfichas === "Azul"){
                        l.idsvg.style.stroke = "blue";
                        } else if(l.colorfichas === "Amarillo"){
                        l.idsvg.style.stroke = "yellow";
                        } else if(l.colorfichas === "Verde"){
                        l.idsvg.style.stroke = "green";
                        } else if(l.colorfichas === "Magenta"){
                        l.idsvg.style.stroke = "magenta";
                        } else if(l.colorfichas === "Negro"){
                        l.idsvg.style.stroke = "#444444";
                        };
                        };
                        })
                };
            };
        }; 
        if (turno === pais.colorfichas && paisseleccionado.colorfichas === pais.colorfichas) {
            i141 = 0;
            while (pais.limitrofes.length > i141 && paisseleccionado != pais.limitrofes[i141]) {
                i141++;
            };
            if (pais.limitrofes[i141] === paisseleccionado) {
                paisreceptor = pais;
            }
        };
        i142 = 0;
        if (paisreceptor === pais) {
            while(copiapaises.length > i142 && copiapaises[i142].nombre != paisseleccionado.nombre){
            i142++;
            };
            if(copiapaises[i142].nombre === paisseleccionado.nombre){
            copiapaises[i142].fichas--;
            };
            paisseleccionado.fichas--;
            paisreceptor.fichas++;
            test26(paisseleccionado);
            test26(paisreceptor);
            paisseleccionado = 0;
            paises.forEach((p)=>{
                p.idsvg.style.stroke = "black";
                p.idsvg.parentElement.style.zIndex = 0;
                if(p!== paisreceptor){
                p.idsvg.parentElement.style.cursor = "default";
                p.id.style.cursor = "default";
        }})
                paisreceptor = 0;
        };
    };
    i141 = 0;
    if (fase === "Primera Incorporación" || fase === "Segunda Incorporación") {
        if (turno === pais.colorfichas){
            if (turno === "Rojo"){
            if (fichasnuevas.rojo > 0){
            paisseleccionado = pais;
            paisseleccionado.fichas++;
            fichasnuevas.rojo--;
            };
            };
            if (turno === "Azul"){
            if (fichasnuevas.azul > 0){
            paisseleccionado = pais;
            paisseleccionado.fichas++;
            fichasnuevas.azul--;
            };
            };
            if (turno === "Amarillo"){
            if (fichasnuevas.amarillo > 0){
            paisseleccionado = pais;
            paisseleccionado.fichas++;
            fichasnuevas.amarillo--;
            };
            };
            if (turno === "Verde"){
            if (fichasnuevas.verde > 0){
            paisseleccionado = pais;
            paisseleccionado.fichas++;
            fichasnuevas.verde--;
            };
            };
            if (turno === "Magenta"){
            if (fichasnuevas.magenta > 0){
            paisseleccionado = pais;
            paisseleccionado.fichas++;
            fichasnuevas.magenta--;
            };
            };
            if (turno === "Negro"){
            if (fichasnuevas.negro > 0){
            paisseleccionado = pais;
            paisseleccionado.fichas++;
            fichasnuevas.negro--;
            };
            };
            if(paisseleccionado != 0){
            test26(paisseleccionado);
            paisseleccionado = 0;
            };
            };
            };
        i141 = 0;
        if (fase === "Incorporar") {
        if (turno === pais.colorfichas){
        while(fncontinentes[i141].continente != pais.continente){
        i141++;
        };
            if (turno === "Rojo"){
            if(fncontinentes[i141].color === "Rojo" && fncontinentes[i141].fichas > 0){
            paisseleccionado = pais;
            paisseleccionado.fichas++;
            fncontinentes[i141].fichas--;
            } else if (fichasnuevas.rojo > 0){
            paisseleccionado = pais;
            paisseleccionado.fichas++;
            fichasnuevas.rojo--;
            };
            };
            if (turno === "Azul"){
            if(fncontinentes[i141].color === "Azul" && fncontinentes[i141].fichas > 0){
            paisseleccionado = pais;
            paisseleccionado.fichas++;
            fncontinentes[i141].fichas--;
            } else if (fichasnuevas.azul > 0){
            paisseleccionado = pais;
            paisseleccionado.fichas++;
            fichasnuevas.azul--;
            };
            };
            if (turno === "Amarillo"){
            if(fncontinentes[i141].color === "Amarillo" && fncontinentes[i141].fichas > 0){
            paisseleccionado = pais;
            paisseleccionado.fichas++;
            fncontinentes[i141].fichas--;
            } else if (fichasnuevas.amarillo > 0){
            paisseleccionado = pais;
            paisseleccionado.fichas++;
            fichasnuevas.amarillo--;
            };
            };
            if (turno === "Verde"){
            if(fncontinentes[i141].color === "Verde" && fncontinentes[i141].fichas > 0){
            paisseleccionado = pais;
            paisseleccionado.fichas++;
            fncontinentes[i141].fichas--;
            } else if (fichasnuevas.verde > 0){
            paisseleccionado = pais;
            paisseleccionado.fichas++;
            fichasnuevas.verde--;
            };
            };
            if (turno === "Magenta"){
            if(fncontinentes[i141].color === "Magenta" && fncontinentes[i141].fichas > 0){
            paisseleccionado = pais;
            paisseleccionado.fichas++;
            fncontinentes[i141].fichas--;
            } else if (fichasnuevas.magenta > 0){
            paisseleccionado = pais;
            paisseleccionado.fichas++;
            fichasnuevas.magenta--;
            };
            };
            if (turno === "Negro"){
            if(fncontinentes[i141].color === "Negro" && fncontinentes[i141].fichas > 0){
            paisseleccionado = pais;
            paisseleccionado.fichas++;
            fncontinentes[i141].fichas--;
            } else if (fichasnuevas.negro > 0){
            paisseleccionado = pais;
            paisseleccionado.fichas++;
            fichasnuevas.negro--;
            };
            };
            if(paisseleccionado != 0) {
            test26(paisseleccionado);
            paisseleccionado = 0;
            };
            };
            };
            actualizarInstrucciones(fase);
            guardarPartida();
            i141 = 0;
            };

//Checkear ganador
function test17(colour){
    i171 = 0;
    i172 = 0;
    i173 = 0;
    i174 = 0;
    ioceania = 0;
    iafrica = 0;
    isudamerica = 0;
    iasia = 0;
    ieuropa = 0;
    inorteamerica = 0;
    while (paises.length > i171){
        if (paises[i171].colorfichas === colour){
            i172++;
        };
        i171++;
    };
    if(nobjetivos === "true" || nobjetivos === "false" || nobjetivos === "destruccion"){
    if (i172 >= 30){
        pasarfichas1.close();
        pasarfichas2.close();
        mensajefinal.textContent = "El " + colour + " completó el objetivo común de 30 países.";
        ganador = true;
        setTimeout(function() {
            sonarMusicaVictoria();
            fin.showModal();
        }, 1000); 
        
        
    };
    };
    if(nobjetivos === "dominacion"){
    if (i172 === 50){
        pasarfichas1.close();
        pasarfichas2.close();
        mensajefinal.textContent = "El " + colour + " logró la dominación mundial";
        ganador = true;
        setTimeout(function() {
            sonarMusicaVictoria();
            fin.showModal();
        }, 1000); 
    };
    };
    if(nobjetivos === "true" || nobjetivos === "destruccion"){
    while (objetivos.length > i173 && objetivos[i173].color != colour) {
        i173++;
    };
    while (oceania.length > i174){
        if (oceania[i174].colorfichas === colour){
            ioceania++;
        };
        i174++;
    };
    i174 = 0;
    while (africa.length > i174){
        if(africa[i174].colorfichas === colour){
            iafrica++;
        };
    i174++;
    };
    i174 = 0;
    while (sudamerica.length > i174){
        if(sudamerica[i174].colorfichas === colour){
            isudamerica++;
        };
    i174++;
    };
    i174 = 0;
    while (asia.length > i174){
        if(asia[i174].colorfichas === colour){
            iasia++;
        };
    i174++;
    };
    i174 = 0;
    while (europa.length > i174){
        if(europa[i174].colorfichas === colour){
            ieuropa++;
        };
    i174++;
    };
    i174 = 0;
    while (norteamerica.length > i174){
        if(norteamerica[i174].colorfichas === colour){
            inorteamerica++;
        };
    i174++;
    };
    i174 = 0;
    if(!desobjetivos.includes(objetivos[i173])){
        if(ioceania >= objetivos[i173].oceania && iafrica >= objetivos[i173].africa && isudamerica >= objetivos[i173].sudamerica && iasia >= objetivos[i173].asia && ieuropa >= objetivos[i173].europa && inorteamerica >= objetivos[i173].norteamerica){
        pasarfichas1.close();
        pasarfichas2.close();
        mensajefinal.textContent = "El " + colour + " completó su objetivo secreto: " + objetivos[i173].string;
        ganador = true;
        setTimeout(function() {
            sonarMusicaVictoria();
            fin.showModal();
        }, 1000); 
    };
};
};
return(ganador);
};

//Dialogs pasar fichas
function test18() {
        if (parseInt(selectpasarfichas1.value) === 2){
        paisconquistador.fichas--;
        paisconquistado.fichas++;
    };
    test26(paisconquistador);
    test26(paisconquistado);
    guardarPartida();
    paisconquistado = 0;
    paisconquistador = 0;
    selectpasarfichas1.selectedIndex = 0;
    resultadodados.showModal();
};
function test19() {
    if(parseInt(selectpasarfichas2.value) === 2){
        paisconquistador.fichas--;
        paisconquistado.fichas++;
    } else if (parseInt(selectpasarfichas2.value) === 3){
        paisconquistador.fichas = paisconquistador.fichas - 2;
        paisconquistado.fichas = paisconquistado.fichas + 2;
    };
    test26(paisconquistador);
    test26(paisconquistado);
    guardarPartida();
    paisconquistado = 0;
    paisconquistador = 0;
    selectpasarfichas2.selectedIndex = 0;
    resultadodados.showModal();
};

//Conquistas por turno
function test21(color){
if(color === "Rojo"){
    conquista.rojo++;
};
if(color === "Azul"){
    conquista.azul++;
};
if(color === "Amarillo"){
    conquista.amarillo++;
};
if(color === "Verde"){
    conquista.verde++;
};
if(color === "Magenta"){
    conquista.magenta++;
};
if(color === "Negro"){
    conquista.negro++;
};
};

//Actualizar país
function test26(pais) {
         if (pais.colorfichas === "Rojo") {
            pais.id.style.backgroundColor = "red";
            pais.id.style.color = "black";
        } else if (pais.colorfichas === "Azul") {
            pais.id.style.backgroundColor = "blue";
            pais.id.style.color = "black";
        } else if (pais.colorfichas === "Amarillo") {
            pais.id.style.backgroundColor = "yellow"; 
            pais.id.style.color = "black";
        } else if (pais.colorfichas === "Verde") {
            pais.id.style.backgroundColor = "green";
            pais.id.style.color = "black";
        } else if (pais.colorfichas === "Magenta") {
            pais.id.style.backgroundColor = "magenta";
            pais.id.style.color = "black";
        } else if (pais.colorfichas === "Negro") {
            pais.id.style.backgroundColor = "black";
            pais.id.style.color = "white";
        };
        pais.id.textContent = pais.fichas;
};

function test27(color){
    i271 = 0;
    i272 = 0;
    i273 = 0;
    npaises = 0;
    while(paises.length > i271){
        if(paises[i271].colorfichas === color){
            npaises++;
        };
        i271++;
    };
    if (npaises === 0){
    if(color === "Rojo"){
        tarjetasrojo.forEach((t)=>{
            t.fichas = 2;
            t.color = "";
            mazo.push(t);
    });
    tarjetasrojo = [];
    } else if(color === "Azul"){
        tarjetasazul.forEach((t)=>{
            t.fichas = 2;
            t.color = "";
            mazo.push(t);
        });
        tarjetasazul = [];
    } else if(color === "Amarillo"){
        tarjetasamarillo.forEach((t)=>{
            t.fichas = 2;
            t.color = "";
            mazo.push(t);
        });
        tarjetasamarillo = [];
    } else if(color === "Verde"){
        tarjetasverde.forEach((t)=>{
            t.fichas = 2;
            t.color = "";
            mazo.push(t);
        });
        tarjetasverde = [];
    } else if(color === "Magenta"){
        tarjetasmagenta.forEach((t)=>{
            t.fichas = 2;
            t.color = "";
            mazo.push(t);
        });
        tarjetasmagenta = [];
    } else if(color === "Negro"){
        tarjetasnegro.forEach((t)=>{
            t.fichas = 2;
            t.color = "";
            mazo.push(t);
        });
        tarjetasnegro = [];
    };
    while(colores.length > i272 && colores[i272] != color){
        i272++;
    };
    if(colores[i272] === color){
    colores.splice(i272, 1);
    };
    if(nobjetivos === "destruccion"){
        while(objetivos.length > i273 && objetivos[i273].color != turno){
            i273++;
        };
        if(objetivos[i273].color === turno && desobjetivos.includes(objetivos[i273])){
        if(objetivos[i273].destruir === color){
        pasarfichas1.close();
        pasarfichas2.close();
        mensajefinal.textContent = "El " + turno + " completó su objetivo secreto: " + objetivos[i273].string;
        ganador = true;
        setTimeout(function() {
            sonarMusicaVictoria();
            fin.showModal();
        }, 1000); 
    };
};
};
};
    i271 = 0;
    i272 = 0;
    i273 = 0;
    npaises = 0;
};

//Simular ataques
function test16(color) {
    i161 = 0;
    i162 = 0;
    paisconquistado = 0;
    paisconquistador = 0;
    dresultadosatacante.textContent = "";
    dresultadosdefensor.textContent = "";
    if (color === turno && color === paisseleccionado.colorfichas && paisatacado != 0) {   
        explocionAnimacion();
        dadosatacante = paisseleccionado.fichas - 1;
        dadosdefensor = paisatacado.fichas;
        if (dadosatacante > 3) {
            dadosatacante = 3;
        };
        if (dadosdefensor > 3) {
            dadosdefensor = 3;
        };
        while (dadosatacante > 0) {
            dado = Math.floor(Math.random() * 6) + 1;
            resultadosatacante.push(dado);
            dadosatacante--;
        };
        while (dadosdefensor > 0) {
            dado = Math.floor(Math.random() * 6) + 1;
            resultadosdefensor.push(dado);
            dadosdefensor--;
        };
        if (resultadosatacante.length > 1) {
            while (resultadosatacante[0] < resultadosatacante[1] || resultadosatacante[0] < resultadosatacante[2]) {
                dado = resultadosatacante.shift();
                resultadosatacante.push(dado);
            };
            if (resultadosatacante.length === 3) {
                if (resultadosatacante[1] < resultadosatacante[2]) {
                    dado = resultadosatacante.pop();
                    dadoreserva = resultadosatacante.pop();
                    resultadosatacante.push(dado);
                    resultadosatacante.push(dadoreserva);
                };
            };
        };
        if (resultadosdefensor.length > 1) {
            while (resultadosdefensor[0] < resultadosdefensor[1] || resultadosdefensor[0] < resultadosdefensor[2]) {
                dado = resultadosdefensor.shift();
                resultadosdefensor.push(dado);
            };
            if (resultadosdefensor.length === 3) {
                if (resultadosdefensor[1] < resultadosdefensor[2]) {
                    dado = resultadosdefensor.pop();
                    dadoreserva = resultadosdefensor.pop();
                    resultadosdefensor.push(dado);
                    resultadosdefensor.push(dadoreserva);
                };
            };
        };
        while(resultadosatacante.length > i162){
            dresultadosatacante.textContent = dresultadosatacante.textContent + resultadosatacante[i162] + " ";
            i162++;
        };
        i162 = 0;
        while(resultadosdefensor.length > i162){
            dresultadosdefensor.textContent = dresultadosdefensor.textContent + resultadosdefensor[i162] + " ";
            i162++;
        };
        i162 = 0;
        i161 = 0;
        while (resultadosatacante.length > i161 && resultadosdefensor.length > i161) {
            if (resultadosdefensor[i161] >= resultadosatacante[i161]) {
                paisseleccionado.fichas--;
            } else if (resultadosatacante[i161] > resultadosdefensor[i161]) {
                paisatacado.fichas--;
            };
            i161++;
        };
        resultadodados.showModal();
        if (paisatacado.fichas === 0) {
            paisatacado.fichas++;
            paisseleccionado.fichas--;
            coloratacado = paisatacado.colorfichas;
            paisatacado.colorfichas = paisseleccionado.colorfichas;
        if(paisseleccionado.fichas === 2){
        paisconquistador = paisseleccionado;
        paisconquistado = paisatacado;
        pasarfichas1.showModal();
        resultadodados.close();
        } else if (paisseleccionado.fichas >= 3){
        paisconquistador = paisseleccionado;
        paisconquistado = paisatacado;
        pasarfichas2.showModal();
        resultadodados.close();
        };
        test17(color);
        test21(color);
        test27(coloratacado);
        if(ganador === true){
        resultadodados.close();
        };
    };
        test26(paisseleccionado);
        test26(paisatacado);
        guardarPartida();
        paisseleccionado = 0;
        paisatacado = 0;
        resultadosatacante = [];
        resultadosdefensor = [];
        paises.forEach((p)=>{
        p.idsvg.style.stroke = "black";
        p.idsvg.parentElement.style.zIndex = 0;
        p.idsvg.parentElement.style.cursor = "default";
        p.id.style.cursor = "default";
        })
    };
};

//Event Listeners x país
australia.idsvg.addEventListener("click", () => test14(australia));
sumatra.idsvg.addEventListener("click", () => test14(sumatra));
java.idsvg.addEventListener("click", () => test14(java));
borneo.idsvg.addEventListener("click", () => test14(borneo));
india.idsvg.addEventListener("click", () => test14(india));
malasia.idsvg.addEventListener("click", () => test14(malasia));
china.idsvg.addEventListener("click", () => test14(china));
iran.idsvg.addEventListener("click", () => test14(iran));
japon.idsvg.addEventListener("click", () => test14(japon));
gobi.idsvg.addEventListener("click", () => test14(gobi));
mongolia.idsvg.addEventListener("click", () => test14(mongolia));
kamchatka.idsvg.addEventListener("click", () => test14(kamchatka));
turquia.idsvg.addEventListener("click", () => test14(turquia));
israel.idsvg.addEventListener("click", () => test14(israel));
arabia.idsvg.addEventListener("click", () => test14(arabia));
siberia.idsvg.addEventListener("click", () => test14(siberia));
taimir.idsvg.addEventListener("click", () => test14(taimir));
tartaria.idsvg.addEventListener("click", () => test14(tartaria));
aral.idsvg.addEventListener("click", () => test14(aral));
rusia.idsvg.addEventListener("click", () => test14(rusia));
suecia.idsvg.addEventListener("click", () => test14(suecia));
polonia.idsvg.addEventListener("click", () => test14(polonia));
alemania.idsvg.addEventListener("click", () => test14(alemania));
italia.idsvg.addEventListener("click", () => test14(italia));
francia.idsvg.addEventListener("click", () => test14(francia));
españa.idsvg.addEventListener("click", ()=> test14(españa));
granbretaña.idsvg.addEventListener("click", ()=> test14(granbretaña));
islandia.idsvg.addEventListener("click", () => test14(islandia));
alaska.idsvg.addEventListener("click", () => test14(alaska));
canada.idsvg.addEventListener("click", () => test14(canada));
yukon.idsvg.addEventListener("click", () => test14(yukon));
oregon.idsvg.addEventListener("click", () => test14(oregon));
nuevayork.idsvg.addEventListener("click", () => test14(nuevayork));
terranova.idsvg.addEventListener("click", () => test14(terranova));
labrador.idsvg.addEventListener("click", () => test14(labrador));
groenlandia.idsvg.addEventListener("click", () => test14(groenlandia));
california.idsvg.addEventListener("click", () => test14(california));
mexico.idsvg.addEventListener("click", () => test14(mexico));
chile.idsvg.addEventListener("click", () => test14(chile));
peru.idsvg.addEventListener("click", () => test14(peru));
argentina.idsvg.addEventListener("click", () => test14(argentina));
uruguay.idsvg.addEventListener("click", () => test14(uruguay));
brasil.idsvg.addEventListener("click", () => test14(brasil));
colombia.idsvg.addEventListener("click", () => test14(colombia));
sahara.idsvg.addEventListener("click", () => test14(sahara));
egipto.idsvg.addEventListener("click", () => test14(egipto));
etiopia.idsvg.addEventListener("click", () => test14(etiopia));
zaire.idsvg.addEventListener("click", () => test14(zaire));
sudafrica.idsvg.addEventListener("click", () => test14(sudafrica));
madagascar.idsvg.addEventListener("click", () => test14(madagascar));
australia.id.addEventListener("click", () => test14(australia));
sumatra.id.addEventListener("click", () => test14(sumatra));
java.id.addEventListener("click", () => test14(java));
borneo.id.addEventListener("click", () => test14(borneo));
india.id.addEventListener("click", () => test14(india));
malasia.id.addEventListener("click", () => test14(malasia));
china.id.addEventListener("click", () => test14(china));
iran.id.addEventListener("click", () => test14(iran));
japon.id.addEventListener("click", () => test14(japon));
gobi.id.addEventListener("click", () => test14(gobi));
mongolia.id.addEventListener("click", () => test14(mongolia));
kamchatka.id.addEventListener("click", () => test14(kamchatka));
turquia.id.addEventListener("click", () => test14(turquia));
israel.id.addEventListener("click", () => test14(israel));
arabia.id.addEventListener("click", () => test14(arabia));
siberia.id.addEventListener("click", () => test14(siberia));
taimir.id.addEventListener("click", () => test14(taimir));
tartaria.id.addEventListener("click", () => test14(tartaria));
aral.id.addEventListener("click", () => test14(aral));
rusia.id.addEventListener("click", () => test14(rusia));
suecia.id.addEventListener("click", () => test14(suecia));
polonia.id.addEventListener("click", () => test14(polonia));
alemania.id.addEventListener("click", () => test14(alemania));
italia.id.addEventListener("click", () => test14(italia));
francia.id.addEventListener("click", () => test14(francia));
españa.id.addEventListener("click", ()=> test14(españa));
granbretaña.id.addEventListener("click", ()=> test14(granbretaña));
islandia.id.addEventListener("click", () => test14(islandia));
alaska.id.addEventListener("click", () => test14(alaska));
canada.id.addEventListener("click", () => test14(canada));
yukon.id.addEventListener("click", () => test14(yukon));
oregon.id.addEventListener("click", () => test14(oregon));
nuevayork.id.addEventListener("click", () => test14(nuevayork));
terranova.id.addEventListener("click", () => test14(terranova));
labrador.id.addEventListener("click", () => test14(labrador));
groenlandia.id.addEventListener("click", () => test14(groenlandia));
california.id.addEventListener("click", () => test14(california));
mexico.id.addEventListener("click", () => test14(mexico));
chile.id.addEventListener("click", () => test14(chile));
peru.id.addEventListener("click", () => test14(peru));
argentina.id.addEventListener("click", () => test14(argentina));
uruguay.id.addEventListener("click", () => test14(uruguay));
brasil.id.addEventListener("click", () => test14(brasil));
colombia.id.addEventListener("click", () => test14(colombia));
sahara.id.addEventListener("click", () => test14(sahara));
egipto.id.addEventListener("click", () => test14(egipto));
etiopia.id.addEventListener("click", () => test14(etiopia));
zaire.id.addEventListener("click", () => test14(zaire));
sudafrica.id.addEventListener("click", () => test14(sudafrica));
madagascar.id.addEventListener("click", () => test14(madagascar));

//Event listeners juego
atacarrojo.addEventListener("click", () => test16("Rojo"));
atacarazul.addEventListener("click", () => test16("Azul"));
atacaramarillo.addEventListener("click", () => test16("Amarillo"));
atacarverde.addEventListener("click", () => test16("Verde"));
atacarmagenta.addEventListener("click", () => test16("Magenta"));
atacarnegro.addEventListener("click", () => test16("Negro"));
skiprojo.addEventListener("click", () => test12("Rojo"));
skipazul.addEventListener("click", () => test12("Azul"));
skipamarillo.addEventListener("click", () => test12("Amarillo"));
skipverde.addEventListener("click", () => test12("Verde"));
skipmagenta.addEventListener("click", () => test12("Magenta"));
skipnegro.addEventListener("click", () => test12("Negro"));
botonGuardar.addEventListener("click", () => clickGuardar());
cerrarpasarfichas1.addEventListener("click", ()=> pasarfichas1.close());
cerrarpasarfichas2.addEventListener("click", ()=> pasarfichas2.close());
cerrarpasarfichas1.addEventListener("click", ()=> test18());
cerrarpasarfichas2.addEventListener("click", ()=> test19());
botonPausa.addEventListener("click", ()=> abrirMenuPausa());
reanudar.addEventListener("click", ()=> menuPausa.close());
actRapidaIns.addEventListener("click", ()=> cambiarInstructor());

mostrarrojo.addEventListener("click", function(){
    if(turno === "Rojo" && (nobjetivos === "true" || nobjetivos === "destruccion")){
        objetivorojo.showModal()};
    });
cerrarrojo.addEventListener("click",()=> objetivorojo.close());
mostrarazul.addEventListener("click", function(){
    if(turno === "Azul" && (nobjetivos === "true" || nobjetivos === "destruccion")){
        objetivoazul.showModal()};
    });
cerrarazul.addEventListener("click",()=> objetivoazul.close());
mostraramarillo.addEventListener("click", function(){
    if(turno === "Amarillo" && (nobjetivos === "true" || nobjetivos === "destruccion")){
        objetivoamarillo.showModal()};
    });
cerraramarillo.addEventListener("click",()=> objetivoamarillo.close());
mostrarverde.addEventListener("click", function(){
    if(turno === "Verde" && (nobjetivos === "true" || nobjetivos === "destruccion")){
        objetivoverde.showModal()};
    });
cerrarverde.addEventListener("click",()=> objetivoverde.close());
mostrarmagenta.addEventListener("click", function(){
    if(turno === "Magenta" && (nobjetivos === "true" || nobjetivos === "destruccion")){
        objetivomagenta.showModal()};
    });
cerrarmagenta.addEventListener("click",()=> objetivomagenta.close());
mostrarnegro.addEventListener("click", function(){
    if(turno === "Negro" && (nobjetivos === "true" || nobjetivos === "destruccion")){
        objetivonegro.showModal()};
    });
cerrarnegro.addEventListener("click",()=> objetivonegro.close());
cerrardados.addEventListener("click",()=> resultadodados.close());
mostrarTrojo.addEventListener("click",()=> dialogTrojo.showModal());
cerrarTrojo.addEventListener("click",()=> dialogTrojo.close());
mostrarTazul.addEventListener("click",()=> dialogTazul.showModal());
cerrarTazul.addEventListener("click",()=> dialogTazul.close());
mostrarTamarillo.addEventListener("click",()=> dialogTamarillo.showModal());
cerrarTamarillo.addEventListener("click",()=> dialogTamarillo.close());
mostrarTverde.addEventListener("click",()=> dialogTverde.showModal());
cerrarTverde.addEventListener("click",()=> dialogTverde.close());
mostrarTmagenta.addEventListener("click",()=> dialogTmagenta.showModal());
cerrarTmagenta.addEventListener("click",()=> dialogTmagenta.close());
mostrarTnegro.addEventListener("click",()=> dialogTnegro.showModal());
cerrarTnegro.addEventListener("click",()=> dialogTnegro.close());
cerrarnuevatarjeta.addEventListener("click",()=> dnuevatarjeta.close());

configuracion.addEventListener("click", ()=> abrirMenuConfig());
configuracion.addEventListener("click", ()=> menuPausa.close());
atrasConfig.addEventListener("click", ()=> menuConfig.close());
atrasConfig.addEventListener("click", ()=> abrirMenuPausa());
botonSonido.addEventListener("click", ()=> toggleSonido());

//event listeners tarjetas (no hay forma de que escriba mas event listeners que funciones)
contenidoTrojo1.addEventListener("click",()=> test23(tarjetasrojo[0]));
contenidoTrojo2.addEventListener("click",()=> test23(tarjetasrojo[1]));
contenidoTrojo3.addEventListener("click",()=> test23(tarjetasrojo[2]));
contenidoTrojo4.addEventListener("click",()=> test23(tarjetasrojo[3]));
contenidoTrojo5.addEventListener("click",()=> test23(tarjetasrojo[4]));
contenidoTazul1.addEventListener("click",()=> test23(tarjetasazul[0]));
contenidoTazul2.addEventListener("click",()=> test23(tarjetasazul[1]));
contenidoTazul3.addEventListener("click",()=> test23(tarjetasazul[2]));
contenidoTazul4.addEventListener("click",()=> test23(tarjetasazul[3]));
contenidoTazul5.addEventListener("click",()=> test23(tarjetasazul[4]));
contenidoTamarillo1.addEventListener("click",()=> test23(tarjetasamarillo[0]));
contenidoTamarillo2.addEventListener("click",()=> test23(tarjetasamarillo[1]));
contenidoTamarillo3.addEventListener("click",()=> test23(tarjetasamarillo[2]));
contenidoTamarillo4.addEventListener("click",()=> test23(tarjetasamarillo[3]));
contenidoTamarillo5.addEventListener("click",()=> test23(tarjetasamarillo[4]));
contenidoTverde1.addEventListener("click",()=> test23(tarjetasverde[0]));
contenidoTverde2.addEventListener("click",()=> test23(tarjetasverde[1]));
contenidoTverde3.addEventListener("click",()=> test23(tarjetasverde[2]));
contenidoTverde4.addEventListener("click",()=> test23(tarjetasverde[3]));
contenidoTverde5.addEventListener("click",()=> test23(tarjetasverde[4]));
contenidoTmagenta1.addEventListener("click",()=> test23(tarjetasmagenta[0]));
contenidoTmagenta2.addEventListener("click",()=> test23(tarjetasmagenta[1]));
contenidoTmagenta3.addEventListener("click",()=> test23(tarjetasmagenta[2]));
contenidoTmagenta4.addEventListener("click",()=> test23(tarjetasmagenta[3]));
contenidoTmagenta5.addEventListener("click",()=> test23(tarjetasmagenta[4]));
contenidoTnegro1.addEventListener("click",()=> test23(tarjetasnegro[0]));
contenidoTnegro2.addEventListener("click",()=> test23(tarjetasnegro[1]));
contenidoTnegro3.addEventListener("click",()=> test23(tarjetasnegro[2]));
contenidoTnegro4.addEventListener("click",()=> test23(tarjetasnegro[3]));
contenidoTnegro5.addEventListener("click",()=> test23(tarjetasnegro[4]));
canjearrojo.addEventListener("click",()=> test24("Rojo"));
canjearazul.addEventListener("click",()=> test24("Azul"));
canjearamarillo.addEventListener("click",()=> test24("Amarillo"));
canjearverde.addEventListener("click",()=> test24("Verde"));
canjearmagenta.addEventListener("click",()=> test24("Magenta"));
canjearnegro.addEventListener("click",()=> test24("Negro"));

//restablecer seleccion de tarjetas
restablecer1.addEventListener("click", function(){
    if(turno === "Rojo"){
    tselect1 = 0;
    tselect2 = 0;
    tselect3 = 0;
    fichascanjerojo.textContent = "";
    test22("Rojo");
};
});
restablecer2.addEventListener("click", function(){
    if(turno === "Azul"){
        tselect1 = 0;
        tselect2 = 0;
        tselect3 = 0;
        fichascanjeazul.textContent = "";
        test22("Azul");
    };
});restablecer3.addEventListener("click", function(){
    if(turno === "Amarillo"){
        tselect1 = 0;
        tselect2 = 0;
        tselect3 = 0;
        fichascanjeamarillo.textContent = "";
        test22("Amarillo");
    };
});restablecer4.addEventListener("click", function(){
    if(turno === "Verde"){
        tselect1 = 0;
        tselect2 = 0;
        tselect3 = 0;
        fichascanjeverde.textContent = "";
        test22("Verde");
    };
});restablecer5.addEventListener("click", function(){
    if(turno === "Magenta"){
        tselect1 = 0;
        tselect2 = 0;
        tselect3 = 0;
        fichascanjemagenta.textContent = "";
        test22("Magenta");
    };
});restablecer6.addEventListener("click", function(){
    if(turno === "Negro"){
        tselect1 = 0;
        tselect2 = 0;
        tselect3 = 0;
        fichascanjenegro.textContent = "";
        test22("Negro");
    };
});
salir.addEventListener("click", function(){
window.location.href = "../INICIO/inicio.html"
})

//event listener stokes
paises.forEach((v)=>{
    v.idsvg.addEventListener("mouseenter", function(){
    if(v.colorfichas === turno){
        if(v !== paisseleccionado){
        v.idsvg.parentElement.style.zIndex = 2;
        };
        v.idsvg.parentElement.style.cursor = "pointer";
        if(v.colorfichas === "Rojo"){
        v.idsvg.style.stroke = "red";
        } else if(v.colorfichas === "Azul"){
            v.idsvg.style.stroke = "blue";
        } else if(v.colorfichas === "Amarillo"){
            v.idsvg.style.stroke = "yellow";
        } else if(v.colorfichas === "Verde"){
            v.idsvg.style.stroke = "green";
        } else if(v.colorfichas === "Magenta"){
            v.idsvg.style.stroke = "magenta";
        } else if(v.colorfichas === "Negro"){
            v.idsvg.style.stroke = "#444444";
        }
    };
    })
    v.id.addEventListener("mouseenter", function(){
    if(v.colorfichas === turno){
        if(v !== paisseleccionado){
        v.idsvg.parentElement.style.zIndex = 2;
        };
        v.id.style.cursor = "pointer";
        if(v.colorfichas === "Rojo"){
        v.idsvg.style.stroke = "red";
        } else if(v.colorfichas === "Azul"){
            v.idsvg.style.stroke = "blue";
        } else if(v.colorfichas === "Amarillo"){
            v.idsvg.style.stroke = "yellow";
        } else if(v.colorfichas === "Verde"){
            v.idsvg.style.stroke = "green";
        } else if(v.colorfichas === "Magenta"){
            v.idsvg.style.stroke = "magenta";
        } else if(v.colorfichas === "Negro"){
            v.idsvg.style.stroke = "#444444";
        }
    };
    })
    v.idsvg.addEventListener("mouseleave", function(){
        if(fase === "Atacar"){
        if((paisseleccionado === 0) || (paisseleccionado != 0 && paisseleccionado !== v && (!paisseleccionado.limitrofes.includes(v) || v.colorfichas === paisseleccionado.colorfichas))){
        v.idsvg.style.stroke = "black";
        v.idsvg.parentElement.style.zIndex = 0;
        v.idsvg.parentElement.style.cursor = "default";
        }} else if (fase === "Reagrupar"){
        if((paisseleccionado === 0) || (paisseleccionado != 0 && paisseleccionado !== v && (!paisseleccionado.limitrofes.includes(v) || v.colorfichas != paisseleccionado.colorfichas))){
        v.idsvg.style.stroke = "black";
        v.idsvg.parentElement.style.zIndex = 0;
        v.idsvg.parentElement.style.cursor = "default";
        }} else {
        v.idsvg.style.stroke = "black";
        v.idsvg.parentElement.style.zIndex = 0;
        v.idsvg.parentElement.style.cursor = "default";
        }
    })
    v.id.addEventListener("mouseleave", function(){
        if(fase === "Atacar"){
        if((paisseleccionado === 0) || (paisseleccionado != 0 && paisseleccionado !== v && (!paisseleccionado.limitrofes.includes(v) || v.colorfichas === paisseleccionado.colorfichas))){
        v.idsvg.style.stroke = "black";
        v.idsvg.parentElement.style.zIndex = 0;
        v.id.style.cursor = "default";
        }} else if (fase === "Reagrupar"){
        if((paisseleccionado === 0) || (paisseleccionado != 0 && paisseleccionado !== v && (!paisseleccionado.limitrofes.includes(v) || v.colorfichas != paisseleccionado.colorfichas))){
        v.idsvg.style.stroke = "black";
        v.idsvg.parentElement.style.zIndex = 0;
        v.id.style.cursor = "default";
        }} else {
        v.idsvg.style.stroke = "black";
        v.idsvg.parentElement.style.zIndex = 0;
        v.id.style.cursor = "default";
        }
    })
    })

//funcion guardar partida
function obtenerEstadoJuego() {
    let paisesLimpios = paises.map(p => ({
      nombre: p.nombre,
      fichas: p.fichas,
      color: p.colorfichas,
    }));

    let tarjetasLimpias = tpaises.map(t => ({
      pais: t.pais.nombre,
      simbolo: t.simbolo,
      color: t.color,
      fichas: t.fichas,
    }));
  
    let fncontinentesLimpios = fncontinentes.map(c => ({
      fichas: c.fichas,
      color: c.color,
    }));

    let Arrcanjes = {
        canjesrojo: canjesrojo,
        canjesazul: canjesazul,
        canjesamarillo: canjesamarillo,
        canjesverde: canjesverde,
        canjesmagenta: canjesmagenta,
        canjesnegro: canjesnegro,
    }

    let objconquistas = {
        conquistasrojo: conquista.rojo,
        conquistasazul: conquista.azul,
        conquistasamarillo: conquista.amarillo,
        conquistasverde: conquista.verde,
        conquistasmagenta: conquista.magenta,
        conquistasnegro: conquista.negro,
    };
    return {
      turno: turno,  
      fase: fase, 
      paises: paisesLimpios,
      tarjetasLimpias: tarjetasLimpias,
      fncontinentesLimpios: fncontinentesLimpios,
      fichasnuevas: fichasnuevas,
      obj1: obj1.color,
      obj2: obj2.color,
      obj3: obj3.color,
      obj4: obj4.color,
      obj5: obj5.color,
      obj6: obj6.color,
      obj7: obj7.color,
      obj8: obj8.color,
      obj9: obj9.color,
      obj10: obj10.color,
      obj11: obj11.color,
      obj12: obj12.color,
      obj13: obj13.color,
      obj14: obj14.color,
      obj15: obj15.color,
      Acolores: colores,
      ninstructor: ninstructor,
      nobjetivos: nobjetivos,
      njugadores: njugadores,
      Arrcanjes: Arrcanjes,
      objconquistas: objconquistas, 
      copiapaises: copiapaises,
    };
  };

function guardarPartida() {
    let estado = obtenerEstadoJuego();
    localStorage.setItem("estadoJuego", JSON.stringify(estado));
    icarg = 0;
};

function confirmarGuardado() {
    guardadoListo.showModal(); 
    setTimeout(function() {
        guardadoListo.close();
    }, 1000); 
};

function clickGuardar() {
    guardarPartida();
    confirmarGuardado();
}

//funcion cargar partida
function cargarPartida() {    
    let estadoGuardado = localStorage.getItem("estadoJuego");
    if (!estadoGuardado) return; 
    let estado = JSON.parse(estadoGuardado);
    
    turno = estado.turno;
    fase = estado.fase;
    currentturn.textContent = "Turno: " + turno;
    currentphase.textContent = "Fase: " + fase;

        obj1.color = estado.obj1;
        obj2.color = estado.obj2;
        obj3.color = estado.obj3;
        obj4.color = estado.obj4;
        obj5.color = estado.obj5;
        obj6.color = estado.obj6;
        obj7.color = estado.obj7;
        obj8.color = estado.obj8;
        obj9.color = estado.obj9;
        obj10.color = estado.obj10;
        obj11.color = estado.obj11;
        obj12.color = estado.obj12;
        obj13.color = estado.obj13;
        obj14.color = estado.obj14;
        obj15.color = estado.obj15;

        icarg5 = 0;
        if(estado.nobjetivos === "destruccion"){
        while(estado.njugadores > icarg5){
        if(!objetivos.includes(desobjetivos[icarg5])){
        objetivos.push(desobjetivos[icarg5]);
        }
        icarg5++;
        };
    };

        icarg5 = 0;
while(objetivos.length > icarg5 && objetivos[icarg5].color != "Rojo"){
    icarg5++;
};
if (objetivos.length > icarg5 && objetivos[icarg5].color === "Rojo"){
contenidorojo.textContent = objetivos[icarg5].string;}
icarg5 = 0;
while(objetivos.length > icarg5 && objetivos[icarg5].color != "Azul"){
    icarg5++;
};
if (objetivos.length > icarg5 && objetivos[icarg5].color === "Azul"){
    contenidoazul.textContent = objetivos[icarg5].string;}
icarg5 = 0;
while(objetivos.length > icarg5 && objetivos[icarg5].color != "Amarillo"){
    icarg5++;
};
if (objetivos.length > icarg5 && objetivos[icarg5].color === "Amarillo"){
    contenidoamarillo.textContent = objetivos[icarg5].string;}
icarg5 = 0;
while(objetivos.length > icarg5 && objetivos[icarg5].color != "Verde"){
    icarg5++;
};
if (objetivos.length > icarg5 && objetivos[icarg5].color === "Verde"){
    contenidoverde.textContent = objetivos[icarg5].string;}
icarg5 = 0;
while(objetivos.length > icarg5 && objetivos[icarg5].color != "Magenta"){
    icarg5++;
};
if (objetivos.length > icarg5 && objetivos[icarg5].color === "Magenta"){
    contenidomagenta.textContent = objetivos[icarg5].string;}
icarg5 = 0;
while(objetivos.length > icarg5 && objetivos[icarg5].color != "Negro"){
    icarg5++;
};
if (objetivos.length > icarg5 && objetivos[icarg5].color === "Negro"){
    contenidonegro.textContent = objetivos[icarg5].string;}
icarg5 = 0;

        icarg1 = 0;
        
        while(fncontinentes.length > icarg1){
        fncontinentes[icarg1].fichas = estado.fncontinentesLimpios[icarg1].fichas;
        fncontinentes[icarg1].color = estado.fncontinentesLimpios[icarg1].color;
        icarg1++
        };
        icarg1 = 0;
        fichasnuevas = estado.fichasnuevas;

        ninstructor = estado.ninstructor;
        nobjetivos = estado.nobjetivos;
        njugadores = estado.njugadores;
        canjesrojo = estado.Arrcanjes.canjesrojo
        canjesazul = estado.Arrcanjes.canjesazul;
        canjesamarillo = estado.Arrcanjes.canjesamarillo;
        canjesverde = estado.Arrcanjes.canjesverde;
        canjesmagenta = estado.Arrcanjes.canjesmagenta;
        canjesnegro = estado.Arrcanjes.canjesnegro;
        tarjetasLimpias = estado.tarjetasLimpias;
        paisesLimpios = estado.paises;
        conquista.rojo = estado.objconquistas.conquistasrojo;
        conquista.azul = estado.objconquistas.conquistasazul;
        conquista.amarillo = estado.objconquistas.conquistasamarillo;
        conquista.verde = estado.objconquistas.conquistasverde;
        conquista.magenta = estado.objconquistas.conquistasmagenta;
        conquista.negro = estado.objconquistas.conquistasnegro; 
        copiapaises = estado.copiapaises;
        colores = estado.Acolores;
       
         for (let icarg = 0; icarg < estado.paises.length; icarg++) {
            paises[icarg].fichas = estado.paises[icarg].fichas;
            paises[icarg].colorfichas = estado.paises[icarg].color;
            paises[icarg].id.textContent = estado.paises[icarg].fichas;
          }

          tarjetasrojo = [];
          tarjetasazul = [];
          tarjetasamarillo = [];
          tarjetasverde = [];
          tarjetasmagenta = [];
          tarjetasnegro = [];
          mazo = [];
          mazoreserva = [];

          icarg2 = 0;
          while (tpaises.length > icarg2) {
            tpaises[icarg2].fichas = estado.tarjetasLimpias[icarg2].fichas;
            tpaises[icarg2].color = estado.tarjetasLimpias[icarg2].color;
            tpaises[icarg2].simbolo = estado.tarjetasLimpias[icarg2].simbolo;
          
            if (tpaises[icarg2].color === "Rojo") {
              tarjetasrojo.push(tpaises[icarg2]);
            } else if (tpaises[icarg2].color === "Azul") {
              tarjetasazul.push(tpaises[icarg2]);
            } else if (tpaises[icarg2].color === "Amarillo") {
              tarjetasamarillo.push(tpaises[icarg2]);
            } else if (tpaises[icarg2].color === "Verde") {
              tarjetasverde.push(tpaises[icarg2]);
            } else if (tpaises[icarg2].color === "Magenta") {
              tarjetasmagenta.push(tpaises[icarg2]);
            } else if (tpaises[icarg2].color === "Negro") {
              tarjetasnegro.push(tpaises[icarg2]);
            } else {
              mazoreserva.push(tpaises[icarg2]);
            }
          
            icarg2++;
          }
          randomizador = 0;
          while(mazoreserva.length > 0){
          randomizador = Math.floor(Math.random() * mazoreserva.length);
          mazo.push(mazoreserva[randomizador]);
          mazoreserva.splice(randomizador, 1);
          };
          
          test22("Rojo");
          test22("Azul");
          test22("Amarillo");
          test22("Verde");
          test22("Magenta");
          test22("Negro");
        
          icarg3 = 0;
          while (paises.length > icarg3) {
            test26(paises[icarg3]);
            icarg3++;
          }
        actualizarInstrucciones(estado.fase);
sectores.forEach((s) => {
    if(s.classList.contains("sectorturno")){
    s.classList.remove("sectorturno");
    s.classList.add("elsesector")
    };
});
if(turno === "Rojo"){
sectorrojo.classList.add("sectorturno");
sectorrojo.classList.remove("elsesector");
} else if(turno === "Azul"){
sectorazul.classList.add("sectorturno");
sectorazul.classList.remove("elsesector");
} else if(turno === "Amarillo"){
sectoramarillo.classList.add("sectorturno");
sectoramarillo.classList.remove("elsesector");
} else if(turno === "Verde"){
sectorverde.classList.add("sectorturno");
sectorverde.classList.remove("elsesector");
} else if(turno === "Magenta"){
sectormagenta.classList.add("sectorturno");
sectormagenta.classList.remove("elsesector");
} else if(turno === "Negro"){
sectornegro.classList.add("sectorturno");
sectornegro.classList.remove("elsesector");
}
};


//cargar al reiniciar pagina
window.onload = function() {
    if(localStorage.getItem("cargarPartidaInicio") === "true") {
    cargarPartida();
    instrucciones.textContent = "";
    actualizarInstrucciones(fase);
    }};
actualizarInstrucciones(fase);