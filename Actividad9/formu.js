console.log("BIENVENIDO A LA CONSOLA DEL FORMULARIO");

//ESPACIO PARA COMPROBAR NOMBRE COMPLETOS
var nombre = document.getElementById('Nom');
nombre.addEventListener('blur', comprobarNombre);
nombre.addEventListener('focus', limpiarCampoNombre);

function comprobarNombre(){
    var nomb = document.getElementById('Nom').value;
    var tieneEspacio = nomb.indexOf(' ');    
    if(nomb.length<6 || tieneEspacio<=0){
        nombre.style.borderColor = 'red'
        var lab = document.getElementById('lblNom');
        lab.textContent = 'EL NOMBRE DEBE TENER MAS DE 6 LETRAS Y UN ESPACIO';
    }
}

function limpiarCampoNombre(){
        nombre.style.borderColor = 'lightgray';
        var lab = document.getElementById('lblNom');
        lab.textContent = ' ';  
}

//ESPACIO PARA COMPROBAR EMAIL

 var correo = document.getElementById('Mail');
 correo.addEventListener('blur', comprobarMail);
 correo.addEventListener('focus', limpiarCampoMail);

 function comprobarMail(){
    var valor = document.getElementById('Mail').value;
    var tieneEspacio = valor.indexOf(' ');
    var tieneArroba = valor.indexOf('@');
    var tienePunto = valor.indexOf('.');
    debugger;
    if(tieneArroba==-1){
        correo.style.borderColor = 'red'
        var labMail = document.getElementById('lblMail');
        labMail.textContent = 'EL MAIL DEBE TENER ARROBA';
    }else if(tienePunto==-1){
        correo.style.borderColor = 'red'
        var labMail = document.getElementById('lblMail');
        labMail.textContent = 'EL MAIL DEBE TENER UN PUNTO COMO MINIMO';
    }else if(tieneEspacio!=-1){
        correo.style.borderColor = 'red'
        var labMail = document.getElementById('lblMail');
        labMail.textContent = 'EL MAIL NO DEBE TENER ESPACIOS';
    }else{
        console.log('Mail es Correcto');
    }
}

function limpiarCampoMail(){
        correo.style.borderColor = 'lightgray';
        var labMail = document.getElementById('lblMail');
        labMail.textContent = ' ';  
}

//ESPACIO PARA COMPROBAR CONTRASEÑAS
var cont = document.getElementById('Cont');
cont.addEventListener('blur',comprobarPass);
cont.addEventListener('focus',limpiarPass);


function comprobarPass(){
    var contra = document.getElementById('Cont').value;
    var Letras = ['a','b','c','d','i','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var Numeros = ['1','2','3','4','5','6','7','8','9','0'];
    var L = 0;
    var N = 0;

    for(i=0;i<=contra.length;i++){        
        if(Letras.indexOf(contra.charAt(i)) != -1){
            L++;
        }

        if(Numeros.indexOf(contra.charAt(i)) != -1){
            N++;
        }
    }
    
    if(contra.length >= 8){
       if(L > 0){
        console.log('TieneLetras');
            if(N > 0){
                console.log('TIENE NUMEROS');
            }
            else{
                cont.style.borderColor = 'Red';
                var lblCont = document.getElementById('lblCont');
                lblCont.textContent = 'La contraseña debe tener al menos un numero';
            }
        
       }
       else{
        cont.style.borderColor = 'Red';
        var lblCont = document.getElementById('lblCont');
        lblCont.textContent = 'La contraseña debe tener al menos una letra';
       }      
    }else{
        cont.style.borderColor = 'Red';
        var lblCont = document.getElementById('lblCont');
        lblCont.textContent = 'La contraseña debe tener 8 caracteres o mas';
    }
}

function limpiarPass(){
    cont.style.borderColor = 'lightgray';
    var lblCont = document.getElementById('lblCont');
    lblCont.textContent = ' ';
}

//comprobar si la contraseña son iguales
var contra2 = document.getElementById('ContR');
contra2.addEventListener('blur',comprobarRep);
contra2.addEventListener('focus',limpiarRep);

function comprobarRep(){
    contra2val = document.getElementById('ContR').value;
    contra1 = document.getElementById('Cont').value;
    haydif = 0;

    for(i=0;i<=contra1.length;i++){
        debugger
        if(contra2val.charAt(i) != contra1.charAt(i)){
            haydif++;
        }
    }
    if(haydif != 0){
        contra2.style.borderColor = 'Red';
        var lblContR = document.getElementById('lblContR');
        lblContR.textContent = 'La contraseña deben ser iguales';
    }
}

function limpiarRep(){
    contra2.style.borderColor = 'lightgray';
    var lblCont2 = document.getElementById('lblContR');
    lblCont2.textContent = ' ';
}

//COMPROBAR EDAD

//COMPROBAR TELEFONO

//COMPROBAR DIRECCION

//COMPROBAR CIUDAD

//COMPROBAR COD POSTAL

//COMPROBAR DNI

//BOTON ALERT SI ALGUNA ESTA MAL MOSTRARLA IGUAL PERO COMO ERRONEA