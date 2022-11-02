// let auto = {
// 	marca: "Fiat",
// 	modelo: "Uno",
// 	anio: 2002,
// 	combustible: "Nafta",
// 	seguro: true,
// 	color: ["Rojo", "Azul", "Negro"],
// };

// console.log(auto);

// let array = ["auto", "moto", "barco"];

// let peliculas = [
// 	{
// 		titulo: "Volver al futuro",
// 		anio: 1985,
// 		protagonista: "Michael Fox",
// 	},
// 	{
// 		titulo: "Harry Potter 1",
// 		año: 2001,
// 		protagonista: "Daniel Radcliffe",
// 	},
// ];

// console.log(peliculas[1]);

// console.log(auto.combustible);

class Auto {
	constructor(marca, modelo, anio, seguro) {
		(this.marca = marca),
			(this.modelo = modelo),
			(this.anio = anio),
			(this.seguro = seguro);
	}

	arrancar = function () {
		return "El auto arrancó";
	};

	getMarca = () => {
		return this.marca;
	};
}

let auto1 = new Auto("Fiat", "Uno", 2002, true);
let auto2 = new Auto("Audi", "a3", 2010, false);

auto1.marca = "Chevrolet";

// console.log(auto1);

class Robot {
	constructor(color, posicionX, posicionY) {
		(this.color = color),
			(this.posicionX = posicionX),
			(this.posicionY = posicionY);
	}

	pintar = function (color) {
		this.color = color;
	};

	desplazar = function (x, y) {
		(this.posicionX = x), (this.posicionY = y);
	};

	posicion = function () {
		console.log(
			`El robot ${this.color} está en X: ${this.posicionX} y en Y: ${this.posicionY}`
		);
	};
}

let robot1 = new Robot("Azul", 20, 40);
let robot2 = new Robot("Rojo", 10, 50);

// console.log(robot1);

robot1.posicion();

robot1.desplazar(80, 80);

robot1.posicion();

robot1.pintar("Amarillo");

robot1.posicion();
