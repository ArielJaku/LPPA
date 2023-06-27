console.log("Ejercicio numero 5 For");

console.log("Ejercicio a");

var a = ["enero", "febrero", "marzo", "abril", "mayo"];

for(var i = 0; i < a.length; i++){

    alert(a[i]);
}

console.log("Ejercicio b");

alert("Cambio de primera letra a mayuscula");

for(var i = 0; i < a.length; i++){

    alert(a[i].substring(0,1).toUpperCase()+a[i].substring(1,a[i].length).toLowerCase());

}

console.log("Ejercicio c");

var sentence = "";

for(var i = 0; i < a.length; i++){

    sentence = sentence + a[i] + " ";
}

alert(sentence);

console.log("Ejercicio D");

var vacio = [];

for(var i = 0; i < 10; i++){

    vacio[i] = i;
}

alert(vacio);
console.log(vacio);