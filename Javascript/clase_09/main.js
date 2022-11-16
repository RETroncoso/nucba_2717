// console.log(document);

const logo = document.getElementById("logo");
const div = document.getElementById("header");

// console.log(logo.innerHTML);
// console.log(div.innerHTML);

const logoClase = document.getElementsByClassName("logo");

// console.log(logoClase[0].innerHTML);

// for (let i = 0; i < logoClase.length; i++) {
// 	console.log(logoClase[i].innerHTML);
// }

const pTag = document.getElementsByTagName("p");

// console.log(pTag[0].innerHTML);

const aQuery = document.querySelector(".logo");

// console.log(aQuery);

const aAll = document.querySelectorAll("a");

//Aca hacemos lio

// logo.innerHTML = "Hola como estan?";

// let ejemplo1 = "Holita";
// let ejemplo2 = "Holita";

// console.log(ejemplo1 === ejemplo2);

// let ejemplo3 = {
// 	nombre: "Rodrigo",
// 	camada: 2717,
// };

// let ejemplo4 = {
// 	nombre: "Rodrigo",
// 	camada: 2717,
// };

// console.log(ejemplo3.nombre === ejemplo4.nombre);

// "" === ""

// {} !== {}

// [] !== []

// logo.innerHTML = "Estoy <b>agregando</b> algo";

setTimeout(() => {
	logo.innerHTML = "Estoy <b>agregando</b> algo";
}, 2000);

// setInterval(() => {
// 	console.log("Ejecutando");
// }, 3000);
