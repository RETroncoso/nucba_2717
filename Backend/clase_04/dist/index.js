"use strict";
const sumar = (a, b) => {
    return a + b;
};
// console.log(sumar(5,3));
// const objeto = {
//     nombre: "Juan",
//     saludar: () => {
//         console.log(`Hola! Soy ${this.nombre}`);
//     }
// }
// objeto.saludar()
function obtenerPrimerElemento(array) {
    return array[0];
}
const obtenerPrimerElemento2 = (array) => {
    return array[0];
};
const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
const nombres = ["Agus", "Elias", "Facu"];
obtenerPrimerElemento2(numeros);
obtenerPrimerElemento2(nombres);
const punto = {
    x: 10,
    y: 20,
    color: 'rojo'
};
;
function actualizarPersona(persona, cambios) {
    return Object.assign(Object.assign({}, persona), cambios);
}
;
const persona = {
    direccion: "Calle falsa 123",
    edad: 30,
    nombre: "Juan"
};
const cambios = {
    nombre: "Agustin",
};
const personaActualizada = actualizarPersona(persona, cambios);
console.log(personaActualizada);
;
const crearAuto = (auto) => {
    console.log(auto);
};
const auto = {
    marca: "Ford",
    modelo: "Mustang",
    puertas: 2
};
crearAuto(auto);
const comida = {
    nombre: "Pizza",
    origen: "Italia",
    ingredientes: ["Masa", "Salsa", "Queso"]
};
// comida.nombre = "Fideos";
console.log(comida);
const puntuaciones = {
    Juan: 85,
    Maria: 90,
    Pedro: 78
};
console.log(puntuaciones);
;
const productoParaUsuario = {
    nombre: "Camiseta",
    precio: 29.99,
    // categoria: "Ropa"
};
const omitParaUsuario = {
    nombre: "Camiseta",
    categoria: "Ropita",
    descripcion: "Una camiseta re zarpada",
    precio: 50.24,
    // id: 25
};
