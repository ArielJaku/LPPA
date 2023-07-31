console.log("Estoy adentro del formulario");
//traer boton y validar

var botonEnviar = document.getElementById('botonEnviar');
botonEnviar.addEventListener('click',validaciones);

function validaciones(){
    debugger; 
    var nombreOk = validarNombre();
    var correoOk = validarCorreo();
    var mensajeOk = validarMensaje();
    if(nombreOk && correoOk && mensajeOk){
        window.location = "mailto:ari@esteesunemail.com";
    }else{
        var advertencia = document.getElementById('advertenciaFormulario');
        advertencia.textContent = "Hay un error en el formulario. El nombre debe ser solo alfanumetico, el mail debe estar correcto y el mensaje debe tener mas de 5 caracteres";
    }
}

function validarNombre(){
    var Nombre = document.getElementById('NombreForm').value;    
    var Letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var Numeros = ['1','2','3','4','5','6','7','8','9','0'];
    var valor = Nombre;
    //LIMPIO CADENA
    valor = valor.toLowerCase();    
    valor = valor.trimEnd();
    console.log(valor);
    //COMPARO SI TIENE ESPACIO
    var Esp = 0;
    for(i=0;i<=valor.length;i++){
        if(valor.charAt(i) == " "){
            Esp ++;
        }
    }
    //COMPARO SI TIENE LETRAS
    var contLet = 0;
    for(i=0;i<=valor.length;i++){
        if(Letras.indexOf(valor.charAt(i)) != -1){
            contLet ++;
        }
    }
    //COMPARO SI TIENE NUMEROS
    var contNum = 0;
    for(i=0;i<=valor.length;i++){
        if(Numeros.indexOf(valor.charAt(i)) != -1){
            contNum ++;
        }
    }
    
    if(valor.length<3){        
        console.log("el nombre debe tener mas de 3 caracteres");
        return false        
    }else if(Esp>=1){       
        console.log("el nombre no debe tener espacios");
        return false       
    }else if(contLet<1){        
        console.log("el nombre debe tener al menos 1 letra");
        return false        
    }else if(contLet+contNum!=valor.length){
        console.log("la direccion debe tener solo letras , numeros, hay un caracter que no debe existir");
        return false        
    }else{
        console.log(valor);
        return true;
    }
}

function validarCorreo(){
    var Correo = document.getElementById('Correoform').value;
    var valor = Correo;
    var tieneEspacio = valor.indexOf(' ');
    var tieneArroba = valor.indexOf('@');
    var tienePunto = valor.indexOf('.');
    
    if(tieneArroba==-1){        
        console.log('EL MAIL DEBE TENER ARROBA');
        return false;
    }else if(tienePunto==-1){        
        console.log('EL MAIL DEBE TENER UN PUNTO COMO MINIMO');
        return false;
    }else if(tieneEspacio!=-1){       
       console.log('EL MAIL NO DEBE TENER ESPACIOS');
       return false;
    }else{
        console.log('Mail es Correcto');
        return true;
    }
}

function validarMensaje(){
    var Mensaje = document.getElementById('textoContacto').value;  
    if(Mensaje.length>5){
        return true;
    }else{
        return false;
    }
}
