function saludar() {
	console.log("Hola, 2717");
}

// saludar();

function saludoPersonal(nombre) {
	console.log(`Hola ${nombre}`);
}

// saludoPersonal("Angel");
// saludoPersonal("Martin");

function descripcionPersonal(nombre, edad) {
	console.log(`Hola! Soy ${nombre} y tengo ${edad} años`);
}

let miNombre = "Cristian";

// descripcionPersonal(miNombre, 31);

function otraDescripcion(nombre, edad = 15, carrera = "abogacía") {
	console.log(
		`Hola! Mi nombre es ${nombre}. Tengo ${edad} años y estudio ${carrera}`
	);
}

// otraDescripcion("Enzo", "20", "Desarrollo web");

function sumar(a, b) {
	return a + b;
}

// console.log(sumar(2, 3));

// for (Inicio, condicion, actualizacion) {
//     Lo que tiene que hacer el bucle
// }

// for (let i = 0; i < 10; i++) {
// 	if (i === 4) {
// 		break;
// 	}
// 	console.log(`El numero que estamos iterando es ${i}`);
// }

// for (let i = 20; i > 10; i--) {
// 	if (i === 15) {
// 		continue;
// 	}
// 	console.log(`El numero que estamos iterando es ${i}`);
// }

// while (condicion) {
//     codigo a ejecutar
// }

let pConP = 0;

// while (pConP < 10) {
// 	console.log(pConP);

// 	pConP++;
// }

// do {
// 	console.log(pConP);
// 	pConP++;
// } while (pConP < 0);

// while (pConP < 20) {
// 	pConP++;
// 	if (pConP % 2 !== 0) {
// 		continue;
// 	}
// 	console.log(`El numero ${pConP} es par`);
// }

// Arrays

let miArray = [2, null, "Nucba", true, 25];
let nombre = "Gabriel";

// console.log(miArray[0]);
// console.log(miArray[3]);

// console.log(Array.isArray(miArray));
// console.log(Array.isArray(nombre));

for (let i = 0; i < miArray.length; i++) {
	console.log(miArray[i]);
}
