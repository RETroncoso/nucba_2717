const hola = () => {
	console.log("Hola");
};

const nucba = () => {
	console.log("Nucba");
};

const main = () => {
	hola();
	nucba();
};

main();

const obj1 = {
	valor: 12,
};

const obj2 = {
	...obj1,
};

console.log(obj1 === obj2);

obj2.valor = 24;

console.log("Obj1 " + obj1.valor);
console.log("Obj2 " + obj2.valor);

// () => {} !== () => {}
// {}       !== {}
// []       !== []

console.log("Antes de timeout");

setTimeout(() => {
	console.log("Hola");
}, 2000);

console.log("Después de timeout");

const llamada = fetch("https://pokeapi.co/api/v2/pokemon/pikachu");

console.log(llamada);
