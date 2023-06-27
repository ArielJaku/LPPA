console.log("Ejercicio numero 3 Arrays");

console.log("Ejercicio a");

var a = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log("Los meses solicitados son " + a[4] + " y " + a[10]);

console.log("Ejercicio b");

var b = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var c = b.sort()

console.log(c);

console.log("Ejercicio c");

var d = "alPrincipio";

var e = "alFinal";

a.unshift(d);

a.push(e);

console.log(a);

console.log("Ejercicio d");

a.shift(d);

a.pop(e);

console.log(a);

console.log("Ejercicio e");

a.reverse();

console.log(a);

console.log("Ejercicio f");

console.log(a.join(' - '));

console.log("Ejercicio g");

var h = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var g = h.slice(4,11);

console.log(g);