console.log("Ejercicio numero 6 Funciones");

console.log("Ejercicio a");

alert("Ejercicio a , suma sin validacion de numeros");

var num1 = prompt("Introduzca un numero")

var num2 = prompt("Introduzca un numero")

var res = suma(num1,num2);

console.log(res);

console.log("Ejercicio b");

alert("Ejercicio b , con validacion de numeros");

var num3 = prompt("Introduzca un numero")

var num4 = prompt("Introduzca un numero")

var res2 = sumaConValidacion(num3,num4);

if(isNaN(res2)){
    alert("Uno de los valores no es un numero");
    console.log(res2);
}else{
    console.log(res2);
}

console.log("Ejercicio c"); 

alert("Ejercicio c , valida si es entero");

var num5 = prompt("Introduzca un numero");

var res3 = validaEntero(num5);

console.log(res3);

console.log("Ejercicio d"); 

alert("Ejercicio d , valida si es numero y entero");

var num6 = prompt("Introduzca un numero");

var num7 = prompt("Introduzca un numero");

var res4 = sumaConValidacionEnteros(num6,num7);

console.log(res4);

console.log("Ejercicio e"); 

alert("Ejercicio e , valida si es numero y entero");

var num7 = prompt("Introduzca un numero");

var num8 = prompt("Introduzca un numero");

var res5 = sumaFinal(num6,num7);

console.log(res5);


//FUNCIONES

function suma(a,b){
    var num1 = parseInt(a);
    var num2 = parseInt(b);
    return num1 + num2;
}

function sumaConValidacion(a,b){
    var numero1 = parseInt(a);
    var numero2 = parseInt(b);
    if(!isNaN(numero1) && !isNaN(numero2)){
        return numero1 + numero2;
    }else{
        return NaN;
    }
}

function validaEntero(a){
    let num1 = parseFloat(a);
    if(isNaN(num1)){
        return NaN;
    }else{
        if(Number.isInteger(num1)){
            return true;
        }else{
            return false;
        }
    }
}

function sumaConValidacionEnteros(a,b){
    var num1 = parseFloat(a);
    var num2 = parseFloat(b);
    if(!isNaN(num1) && !isNaN(num2)){
        if(!Number.isInteger(num1)){
            alert("El primer numero no es entero");
            num1 = Math.round(num1);
        }
        if(!Number.isInteger(num2)){
            alert("El segundo numero no es entero");
            num2= Math.round(num2);
        }
        return num1 + num2;
    }else{
        alert("Uno de los valores no es un numero");
        return NaN;
    }
}

function sumaFinal(a,b){
    return sumaConValidacionEnteros(a,b);
    
}