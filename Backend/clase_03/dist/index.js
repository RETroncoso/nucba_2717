"use strict";
console.log("Hola mundo con TS!");
console.log("Hola otro mundo con TS!");
console.log("Hola tercer mundo con TS!");
console.log("Hola cuarto mundo con TS!");
console.log("Hola quinto mundo con TS!");
let precio;
let cantidad;
precio = 25;
cantidad = 3;
let precioTotal = precio + cantidad;
console.log(precioTotal);
let nombre = "Juan";
let apellido = "Perez";
let mensaje = `Hola, mi nombre es ${nombre}`;
console.log(nombre + apellido);
let esMayorDeEdad;
esMayorDeEdad = 25 > 25;
if (esMayorDeEdad) {
    console.log("Sos mayor");
}
else {
    console.log("sos menor");
}
;
let dato;
dato = 25;
dato = "Holis";
dato = true;
function saludar(nombre) {
    console.log(`Hola, ${nombre}`);
}
;
saludar("Hola");
function sumar(a, b) {
    return a + b;
}
;
let resultado;
resultado = sumar(10, 15);
console.log(resultado);
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let nombres = ["Messi", "Dibu", "Enzo"];
;
let persona = {
    nombre: "Messi",
    edad: 36,
};
let calculadora = {
    sumar(a, b) {
        return a + b;
    },
    restar(a, b) {
        return a - b;
    },
};
;
class GoldenRetriever {
    constructor(nombre) {
        this.nombre = nombre;
    }
    sonido() {
        console.log("Woof!");
    }
    ladrar() {
        console.log("Guau, guau");
    }
}
let perro = new GoldenRetriever("Pupi");
perro.sonido();
perro.ladrar();
;
let productos;
productos = [
    {
        nombre: "nombre",
        img: "ulr de img",
        id: 24,
        desc: "descripcion de producto"
    },
    {
        nombre: "nombre",
        img: "ulr de img",
        id: 24,
        desc: "descripcion de producto"
    },
    {
        nombre: "nombre",
        img: "ulr de img",
        id: 24,
        desc: "descripcion de producto"
    },
    {
        nombre: "nombre",
        img: "ulr de img",
        id: 24,
        desc: "descripcion de producto"
    },
];
let ejemplo = "Hola mundo!";
let longitud = ejemplo.length;
let valor = "100";
let numero = valor;
let id;
// function imprimirData(data: number | string) {
//     console.log(data);   
// }
// imprimirData("hola")
function imprimirData(data) {
    if (typeof data === "number") {
        console.log("Metiste un numero");
    }
    else if (typeof data === "string") {
        console.log("Metiste un string");
    }
    else {
        console.log("Tipo de dato no válido");
    }
}
;
imprimirData(5);
imprimirData("Holis");
// imprimirData(true);
//# sourceMappingURL=index.js.map