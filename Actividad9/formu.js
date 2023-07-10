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
    var Letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
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

campEdad = document.getElementById('Edad');
campEdad.addEventListener('blur',comprobarEdad);
campEdad.addEventListener('focus',limpEdad);
lblEdad = document.getElementById('lblEdad')

function comprobarEdad(){
    campEdadVal = document.getElementById('Edad').value;
    if(isNaN(campEdadVal)){
        lblEdad.textContent = "EL CAMPO DEBE SER UN NUMERO";
        campEdad.style.borderColor = "Red";
    }else if(!validaEntero(campEdadVal)){
        lblEdad.textContent = "EL NUMERO DEBE SER ENTERO";
        campEdad.style.borderColor = "Red";
    }else if(campEdadVal<18){
        lblEdad.textContent = "LA PERSONA TIENE QUE SER MAYOR DE 18 AÑOS";
        campEdad.style.borderColor = "Red";
    }else{
        console.log("Edad correcta")
    }
}

function limpEdad(){
    campEdad.style.borderColor = 'lightgray';
    lblEdad.textContent = ' ';
}

function validaEntero(a){
    let num1p = parseFloat(a);
    if(isNaN(num1p)){
        return NaN;
    }else{
        if(Number.isInteger(num1p)){
            return true;
        }else{
            return false;
        }
    }
}

//COMPROBAR TELEFONO

var campTel = document.getElementById('Tel');
campTel.addEventListener('blur',compTel);
campTel.addEventListener('focus',limpTel);
lblTel = document.getElementById('lblTel');

function compTel(){
    campTelVal = campTel.value;
    
    if(campTelVal.length<7){
        lblTel.textContent = "EL TELEFONO DEBE TENER AL MENOS 7 CARACTERES";
        campTel.style.borderColor = "Red";
    }else if(!comprobarNumeros(campTelVal)){
        lblTel.textContent = "EL TELEFONO DEBEN SER SOLO NUMEROS";
        campTel.style.borderColor = "Red";
    }else{
        console.log("El telefono esta ok")
    }
}
function limpTel(){
    campTel.style.borderColor = 'lightgray';
    lblTel.textContent = ' ';
}

function comprobarNumeros(a){
    var Numeros = ['1','2','3','4','5','6','7','8','9','0'];
    var T = 0;    
    for(i=0;i<=a.length;i++){
        if(Numeros.indexOf(a.charAt(i)) != -1){
            T++;
        }
    }
    if(T==a.length){
        return true;
    }else{
        return false;
    }
}

//COMPROBAR DIRECCION
campDir = document.getElementById('Dire');
campDir.addEventListener('blur',compDir);
campDir.addEventListener('focus',limpDir);
lblDir = document.getElementById('lblDire');

function compDir(){
    var Letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var Numeros = ['1','2','3','4','5','6','7','8','9','0'];
    var valorDireccion = campDir.value;
    //LIMPIO CADENA
    valorDireccion = valorDireccion.toLowerCase();
    valorDireccion = removeAccents(valorDireccion);
    valorDireccion = valorDireccion.trimEnd();
    console.log(valorDireccion);
    //COMPARO SI TIENE ESPACIO
    var Esp = 0;
    for(i=0;i<=valorDireccion.length;i++){
        if(valorDireccion.charAt(i) == " "){
            Esp ++;
        }
    }
    //COMPARO SI TIENE LETRAS
    var contLet = 0;
    for(i=0;i<=valorDireccion.length;i++){
        if(Letras.indexOf(valorDireccion.charAt(i)) != -1){
            contLet ++;
        }
    }
    //COMPARO SI TIENE NUMEROS
    var contNum = 0;
    for(i=0;i<=valorDireccion.length;i++){
        if(Numeros.indexOf(valorDireccion.charAt(i)) != -1){
            contNum ++;
        }
    }
    
    if(valorDireccion.length<5){
        lblDir.textContent = "la direccion debe tener al menos 5 caracteres";
        campDir.style.borderColor = 'Red';
    }else if(Esp!=1){
        lblDir.textContent = "la direccion debe tener 1 solo espacio";
        campDir.style.borderColor = 'Red';
    }else if(contLet<1){
        lblDir.textContent = "la direccion debe tener al menos una letra";
        campDir.style.borderColor = 'Red';
    }else if(contNum<1){
        lblDir.textContent = "la direccion debe tener al menos 1 numero";
        campDir.style.borderColor = 'Red';
    }else if(Esp+contLet+contNum!=valorDireccion.length){
        lblDir.textContent = "la direccion debe tener solo letras , numeros y un solo espacio, hay un caracter que no debe existir";
        campDir.style.borderColor = 'Red';
    }else{
        console.log(valorDireccion);
    }
}

//FUNCION PARA SACAR ACENTOS AL COMPARAR
const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

function limpDir(){
    campDir.style.borderColor = 'lightgray';
    lblDir.textContent = ' ';
}

//COMPROBAR CIUDAD
var campCiud = document.getElementById('Ciudad');
campCiud.addEventListener('blur',compCiud);
campCiud.addEventListener('focus',limpCiud);
lblCiud = document.getElementById('lblCiudad');

function compCiud(){    
    var contCiud = campCiud.value;
    if(contCiud.length<3){
        campCiud.style.borderColor = 'Red';
    lblCiud.textContent = 'La ciudad debe tener al menos 3 caracteres';
    }
}

function limpCiud(){
    campCiud.style.borderColor = 'lightgray';
    lblCiud.textContent = ' ';
}

//COMPROBAR COD POSTAL
var campCod = document.getElementById('Cod');
campCod.addEventListener('blur',compCod);
campCod.addEventListener('focus',limpCod);
lblCod = document.getElementById('lblCod');

function compCod(){
    
    var contCod = campCod.value;
    if(contCod.length<3){
        campCod.style.borderColor = 'Red';
    lblCod.textContent = 'El codigo postal debe tener al menos 3 caracteres';
    }
}

function limpCod(){
    campCod.style.borderColor = 'lightgray';
    lblCod.textContent = ' ';
}
//COMPROBAR DNI
 var campDni = document.getElementById('dni');
 campDni.addEventListener('blur',compDni);
 campDni.addEventListener('focus',limpDni);
 lblDni = document.getElementById('lbldni');

 function compDni(){    
    var valorDni = campDni.value;
    if(valorDni.length==7 || valorDni.length==8){
        if(comprobarNumeros(valorDni)){
            console.log(valorDni);
        }else{
            campDni.style.borderColor = 'Red';
            lblDni.textContent = 'El dni deben ser solo numeros';
        }
    }else{
            campDni.style.borderColor = 'Red';
            lblDni.textContent = 'El dni deben ser 7 u 8 numeros';
    }
 }

 function limpDni(){
    campDni.style.borderColor = 'lightgray';
    lblDni.textContent = ' ';
 }

//BOTON ALERT SI ALGUNA ESTA MAL MOSTRARLA IGUAL PERO COMO ERRONEA
var botonEnv = document.getElementById('botoncito');
botonEnv.addEventListener('click',funBoton);

function funBoton(){   
   var inputs = document.getElementsByTagName('input');   
   var arrayContenidoForm = [];
   for(i=0;i<=9;i++){    
    if(inputs[i].style.borderColor == "red")
    {
        inputs[i].value += " X"
    }
    arrayContenidoForm += inputs[i].value;
    arrayContenidoForm += "\n";
    
   }
   alert("Los elementos del formulario se marcaran con un X si estan incorrectos \n" + arrayContenidoForm);
}


