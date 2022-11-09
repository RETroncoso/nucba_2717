const saludar = (nombre) => {
	alert(`Hola ${nombre}`);
};

const procesarEntradaUsuario = (callback) => {
	const nombre = prompt("Por favor ingresa tu nombre");

	callback(nombre);
};

// procesarEntradaUsuario(saludar);

// repeat(n)
// const nombre = "Emiliano ";

// console.log(nombre.repeat(3));

// charAt()

// console.log(nombre.charAt(6));

// concat()

const nombre = "Gabriel, ";
// console.log(nombre.concat("holu"));

const arr = [1, 2, 3];
// console.log(arr.concat([4, 5, 6]));

// console.log(arr.concat("Nelson"));

// includes()
// console.log(nombre.includes("b"));

// console.log(arr.includes(3));

// slice();

// El start lo incluye. El end, no lo incluye
// >= start , < end

// console.log(nombre.slice(2, 5));

// 0: G
// 1: a
// 2: b
// 3: r
// 4: i
// 5: e
// 6: l

//  Map

// const numeros = [1, 2, 3, 4, 5, 6, 7];

// const numeroDoble = numeros.map((numero, i, arr) => {
// 	// console.log(i);
// 	// console.log(arr);
// 	return numero * 2;
// });

// console.log(numeros);
// console.log(numeroDoble);

// Filter

// const ejemplo = [1, 2, 3, 4, 5, 6, 7];

// const ejFiltrado = ejemplo.filter((item) => {
// 	// return item > 3;
// 	return item % 2 == 0;
// });

// console.log(ejFiltrado);

const arrayPalabras = ["Argentina", "Qatar", "Suiza", "Bélgica", "Portugal"];

// const arrayPalabrasFiltrado = arrayPalabras.filter((pais) => {
// 	return pais.includes("t");
// });

// console.log(arrayPalabrasFiltrado);

// find()

// const ejemplo = [1, 2, 3, 4, 5, 6, 7];

// const ejFind = ejemplo.find((item) => {
// 	return item > 4;
// });

// const palabrasFind = arrayPalabras.find((pais) => {
// 	return pais.includes("Q");
// });

// console.log(ejFind);
// console.log(palabrasFind);

// Reduce();

// const arrayReduce = [22, 76, 86];

// const reducido = arrayReduce.reduce((acc, val) => {
// 	acc = acc + val;
// 	return acc;
// }, 0);

// console.log(reducido);

// Sort();

// const arrDesordenado = [1, 3, 8, 2, 24, 12];

// console.log(arrDesordenado.sort());

// console.log(
// 	arrDesordenado.sort((a, b) => {
// 		return b - a;
// 	})
// );

// Every();

// const arrEvery = [1, 3, 8, 2, 24, 12];

// console.log(
// 	arrEvery.every((elemento) => {
// 		return elemento < 25;
// 	})
// );

// Some();

// const arrNum = [1, 2, 3, 4, 5, 6];

// console.log(
// 	arrNum.some((item) => {
// 		return item > 8;
// 	})
// );
