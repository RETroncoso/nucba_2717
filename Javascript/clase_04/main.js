// let resultado;
// let numero1 = 1;
// let numero2 = 2;

// resultado = numero1 + numero2;

// console.log(`El resultado es ${resultado}`);

function sumar(num1, num2) {
	return num1 + num2;
}

// console.log(`El resultado es ${sumar(2, 5)}`);

function descripcion(nombre, edad = 25) {
	console.log(`Hola! Mi nombre es ${nombre} y tengo ${edad} años`);
}

// descripcion("Rodrigo");

let suma = (numero1, numero2) => numero1 + numero2;

// let suma = (numero1, numero2) => {
//     return numero1 + numero2
// }

// console.log(suma(5, 6));

const saludar = (nombre) => {
	return console.log(`Hola ${nombre}, como te va?`);
};

// saludar("Mati");

// for (let i = 5; i >= 0; i--) {
// 	console.log(i);
// }

let cuentaAtras = (numero) => {
	if (numero === 0) {
		return 0;
	}

	console.log(numero);
	return cuentaAtras(numero - 1);
};

// cuentaAtras(5);

const duplicar = (num) => {
	num = num + num;
	console.log(num);

	if (num > 100) {
		return console.log("Terminé");
	}

	return duplicar(num);
};

// duplicar(2);

// let logSaludo = (nombre) => {
// 	console.log(`Hola ${nombre}`);
// };

// let procesarEntradaUsuario = (callback) => {
// 	let nombre = prompt("Por favor ingresa tu nombre");
// 	callback(nombre);
// };

// procesarEntradaUsuario(logSaludo);

const generarFuncion = () => {
	const nombre = "Mozilla";
	const mostrarNombre = () => {
		return alert(nombre);
	};
	return mostrarNombre;
};

generarFuncion();
