console.log("BIENVENIDO A LA CONSOLA DEL JUEGO SIMON")

var secuencia = [];
secuencia = [1,3,2,0];
secJugador = [];
var secuenciaJugador = [];
var botonPlay = document.getElementById('iniciar');
botonPlay.addEventListener('click',jugar);
var botonRePlay = document.getElementById('replay');
botonRePlay.addEventListener('click',reiniciarTodo);

score = 0;
var posArray = 0;
var nivel = 0;

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
        debugger;
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
    posArray = 0;
    nivel++;   
    disparar();
    console.log(secuencia);
    cambiarNivel();
    if(nivel==6){
        alert("A finalizado el juego, su puntuacion es de: " + score);
    }       
}


function botonPresionado(){    
    boton.forEach((btn) => {
    btn.addEventListener('click', e => {
    secJugador.push(e.target.id)
    secuencia[posArray]
    if(secuencia[posArray]!=null){
        if(e.target.id == secuencia[posArray]){
            score++
        }
        posArray++;
        cambiarScore();
    }else{
        alert("La secuencia termino, pase al proximo nivel");        
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
    botonPlay.value = "Proximo Nivel";
}

function reiniciarTodo(){
    score = 0;
    posArray = 0;
    nivel = 0;
    cambiarNivel();
    cambiarScore();
    botonPlay.value = "Play";
    secuencia = [1,3,2,0];
}
