// console.log({});
// console.log([]);
// console.log({ String });

// console.log(fetch("https://pokeapi.co/api/v2/pokemon/ditto"));

const getLetter = (ms, value) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const letras = {
				a: 1,
				b: 2,
				c: 3,
				d: 4,
				e: 5,
			};

			const l = letras[value];

			if (!l) {
				reject("No se encontró la letra");
			} else {
				resolve(l);
			}
		}, ms);
	});
};

// getLetter(3000, "T")
// 	.then((response) => console.log(response))
// 	.catch((error) => console.log(error));

fetch("https://pokeapi.co/api/v2/pokemon/gengar")
	.then((res) => res.json())
	.then((data) => console.log(data))
	.then(console.log("Un log"))
	.then(console.log("otro log"))
	.catch((err) => console.log(err));

const miPromesa = () => {
	return new Promise((resolve, reject) => {
		// resolve("Respuesta de la promesa");
		reject("Rompimo todo");
	});
};

const miPromesaThen = () => {
	miPromesa()
		.then((res) => console.log(res))
		.catch((err) => console.error(err));
};

miPromesaThen();

// Try/catch -------- async/await

const miPromesaTry = async () => {
	try {
		const res = await miPromesa();
		console.log(res);
		console.log("ejecucion");
	} catch (error) {
		console.log(error);
	}
};

miPromesaTry();

console.log("Estoy afuera de la funcion");
