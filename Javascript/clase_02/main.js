// function ejemplo() {
// 	let numero = 100;
// }

// console.log(numero);

var a = "Estoy global?";

function holu() {
	var b = "Estoy dentro de una funcion";
}

{
	var c = "Estoy en bloque";
}

{
	let d = "Estoy en bloque?";
}

{
	const e = "estoy en bloque const";
}

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// Operadores

// let uno = false;
// let dos = false;

// console.log(uno && dos);

// if (2 + 4 == 7) {
// 	console.log("Esto dio true");
// } else {
// 	console.log("Yyyyy, me parece que  2 + 4 no es 7");
// }

// let llueve = true;

// if (llueve) {
// 	console.log("Lleva paraguas");
// }

// let edad = 11;

// if (edad >= 18) {
// 	console.log("Puede tomar alcohol");
// } else if (edad === 17) {
// 	console.log("Que tome juguito");
// } else if (edad === 14) {
// 	console.log("Hola");
// } else if (edad === 13) {
// 	console.log("Anda al colegio");
// } else {
// 	console.log("Hace lo quieras");
// }

// console.log("Aca sigue el codigo");

// Switch

const mascota = "gato";

// if (mascota === "lagarto") {
// 	console.log("Tengo un lagarto");
// } else if (mascota === "perro") {
// 	console.log("Tengo un perro");
// } else if (mascota === "gato") {
// 	console.log("Tengo un gato");
// } else if (mascota === "iguana") {
// 	console.log("Tengo una iguana");
// } else {
// 	console.log("No tengo mascota :(");
// }

switch (mascota) {
	case "lagarto":
		console.log("Tengo un lagarto");
		break;
	case "perro":
		console.log("Tengo un perro");
		break;
	case "gato":
		console.log("Tengo un gato");
		break;
	case "iguana":
		console.log("Tengo una iguana");
		break;
	default:
		console.log("No tengo mascota :(");
		break;
}

console.log("Sigo ejecutando");
