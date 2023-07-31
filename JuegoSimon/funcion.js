console.log("BIENVENIDO A LA CONSOLA DEL JUEGO SIMON")

var secuencia = [];
secuencia = [];
secJugador = [];
var secuenciaJugador = [];
var botonPlay = document.getElementById('iniciar');
botonPlay.addEventListener('click',jugar);
botonPlay.addEventListener('click',timer);
var botonRePlay = document.getElementById('replay');
botonRePlay.addEventListener('click',reiniciarTodo);

var controlClick = 0;
var score = 0;
var posArray = 0;
var nivel = 0;
var tiempo = 0;
var scoreFinal = 0;
var tiempoJugador = 0;
var TimerFin;

//ME TRAIGO LOS BOTONES
//array de botones
var boton = [];
boton[0] = document.getElementById('0');
boton[1] = document.getElementById('1');
boton[2] = document.getElementById('2');
boton[3] = document.getElementById('3');

botonPresionado();

function disparar(){
    do{        
        var nuevoNumero = random(0,3)
    }while(nuevoNumero == secuencia[secuencia.length-1])        
    secuencia.push(nuevoNumero);
    var i = 0;
    var interval = setInterval(function(){
    val = secuencia[i];    
    cambiaColores(val);    
    i++;
    if(i === secuencia.length){
        clearInterval(interval);
    } 
}, 500);    
}

function jugar(){
    if(nivel!=6){
    controlClick = 0;
    posArray = 0;
    nivel++;   
    disparar();
    console.log(secuencia);
    cambiarNivel();    
    }else{
        tiempoJugador = tiempo;
        puntajeFinal();       
        abriModalFinal();
    }       
}


function botonPresionado(){    
    boton.forEach((btn) => {
    btn.addEventListener('click', e => {
    secJugador.push(e.target.id)
    secuencia[posArray]
    if(secuencia[posArray]!=null){
        if(e.target.id == secuencia[posArray]){
            score = score + 10;
        }else{
            abriModalError();
        }
        posArray++;
        controlClick++;
        controlJuego();
        cambiarScore();
    }else{
        console.log("no esta jugando");      
    }   
    
  });
});
}

function colorCero(){
    conTiempo = setTimeout(function(){
        boton[0].style.backgroundColor = "#cfd21a";
        conTiempo = setTimeout(function(){
        boton[0].style.backgroundColor = "yellow"   
        },500)        
    },500);    
}

function colorUno(){
    conTiempo = setTimeout(function(){
        boton[1].style.backgroundColor = "#0e0cb2";
        conTiempo = setTimeout(function(){
        boton[1].style.backgroundColor = "blue"   
        },500)        
    },500); 
}

function colorDos(){
    conTiempo = setTimeout(function(){
        boton[2].style.backgroundColor = "#d2201a";
        conTiempo = setTimeout(function(){
        boton[2].style.backgroundColor = "red"   
        },500)        
    },500); 
}

function colorTres(){
    conTiempo = setTimeout(function(){
        boton[3].style.backgroundColor = "#55bd19";
        conTiempo = setTimeout(function(){
        boton[3].style.backgroundColor = "green"   
        },500)        
    },500); 
}

function cambiaColores(a){    
    valor = a;
    if(valor == 0){
        colorCero();   
    }else if(valor == 1){
        colorUno();
    }else if(valor == 2){
        colorDos();
    }else if(valor == 3){
        colorTres();
    } 
}

function random(min, max) {
    var conComa = Math.floor(Math.random() * (max - min + 1) + min);
    return Math.round(conComa);
}

function cambiarScore(){
    scor = document.getElementById('score');
    scor.textContent = score;
}

function cambiarNivel(){    
    lev = document.getElementById('level');
    lev.textContent = nivel;
    botonPlay.style.visibility = 'hidden';
}

function reiniciarTimer(){
    var l = document.getElementById("timer");
    l.textContent = tiempo;
}

function reiniciarTodo(){
    score = 0;
    posArray = 0;
    controlClick = 0;
    nivel = 0;
    tiempo = 0;
    reiniciarTimer();
    cambiarNivel();
    cambiarScore();
    botonPlay.style.visibility = 'visible';
    secuencia = [];
}

function controlJuego(){
    if(controlClick == secuencia.length){        
        jugar();
    }
}

function timer(){    
    var l = document.getElementById("timer");
    TimerFin = window.setInterval(function(){
      l.textContent = tiempo;
      tiempo++;
    },1000);
}

// Ventana modal funcionamiento

var modal = document.getElementById("ventanaModal");
var cerrarMod = document.getElementById("cerrarModal");;
cerrarMod.addEventListener("click",function() {
    var lblJug = document.getElementById("lblJugador");
    var conForm = document.getElementById('nomJugador').value;
    if(conForm.length>3){
        modal.style.display = "none";    
        lblJug.textContent = conForm;
    }else{
        var lbladv = document.getElementById("advertencia");
        lbladv.style.color = "red";
        lbladv.textContent = "EL NOMBRE DEBE TENER MAS DE 3 CARACTERES"
    }    
  });
  
function abriModal(){    
    modal.style.display = "flex";
}
abriModal();

// Ventana modal Fin del juego funcionamiento

var modalFin = document.getElementById("ventanaModalFin");
var cerrarMod = document.getElementById("cerrarModalVictoria");

cerrarMod.addEventListener("click",function() {    
    reiniciarTodo();
    modalFin.style.display = "none"; 
    });
  
function abriModalFinal(){
    guardarPuntaje();
    clearInterval(TimerFin);
    modalFin.style.display = "flex";
        
}

//ventana modal error de secuencia

var modalError = document.getElementById("ventanaModalError");
var cerrarModError = document.getElementById("cerrarModalError");

cerrarModError.addEventListener("click",function() {    
    reiniciarTodo();
    modalError.style.display = "none"; 
    });
  
function abriModalError(){
    clearInterval(TimerFin);
    modalError.style.display = "flex";
        
}

function puntajeFinal(){
    var lblScore = document.getElementById("puntos");
    var lblTiempo = document.getElementById("tiempo");
    var lblScoreFinal = document.getElementById("scoreFinal");
    lblScore.textContent = score;
    lblTiempo.textContent = tiempoJugador;
    lblScoreFinal.textContent = score - tiempoJugador;    
}

function guardarPuntaje(){
    debugger;
    console.log("Consola para guardar puntuacion");
    var puntuacion = [];       
    var nombre = document.getElementById('nomJugador').value;
    var puntos = document.getElementById("scoreFinal").textContent;
    var fecha = new Date();
    puntuacion = [nombre+'@'+puntos+'&'+fecha.toDateString()];
    console.log(puntuacion);
    localStorage.setItem(fecha,puntuacion);
}

//pop up ranking
var ranking = document.getElementById("popUpRanking");
var btnRanking = document.getElementById("botonRanking");
btnRanking.addEventListener('click',abrirRanking);

function abrirRanking(){
    ranking.style.display = "flex";
    var btnPorFecha = document.getElementById("porFecha");
    btnPorFecha.addEventListener('click',ordenarPorFecha);
    var btnPorValor = document.getElementById("porValor");
    btnPorValor.addEventListener('click',ordenarPorPuntos);
    var btnCerrar = document.getElementById("cerrarRanking");
    btnCerrar.addEventListener('click',cerrarRanking);
    ordenarPorPuntos();    
}

function traerStorage() {    
    var valores = [];    
    claves = Object.keys(localStorage),
    i = claves.length;
    while ( i-- ) {
        var enArray = [];
        var elemento = localStorage.getItem(claves[i]);
        enArray['nombre'] = elemento.substring(0,elemento.indexOf('@'));
        enArray['puntos'] = elemento.substring(elemento.indexOf('@')+1,elemento.indexOf('&'));
        enArray['fecha'] = elemento.substring(elemento.indexOf('&')+1,elemento.length);
        valores.push(enArray);
    }  
    return valores;
}

function cerrarRanking(){
    ranking.style.display = "none";
}

function ordenarPorPuntos(){
    var lista = document.getElementById("listaPuntos");
    lista.innerHTML = ``;
    var valoresEnRanking = traerStorage();
    console.log(valoresEnRanking.sort((a, b) => a.puntos < b.puntos));    
    for(i=0;i<valoresEnRanking.length;i++){
        var paraLista = "Nombre: " + valoresEnRanking[i].nombre + " Puntos: " + valoresEnRanking[i].puntos + " Fecha : " + valoresEnRanking[i].fecha;
        lista.innerHTML += `<li>${paraLista}</li>`;
    }
}

function ordenarPorFecha(){
    var lista = document.getElementById("listaPuntos");
    lista.innerHTML = ``;
    var valoresEnRanking = traerStorage();
    console.log(valoresEnRanking.sort((a, b) => a.fecha < b.fecha));    
    for(i=0;i<valoresEnRanking.length;i++){
        var paraLista = "Nombre: " + valoresEnRanking[i].nombre + " Puntos: " + valoresEnRanking[i].puntos + " Fecha : " + valoresEnRanking[i].fecha;
        lista.innerHTML += `<li>${paraLista}</li>`;
    }
}

