class Pelicula {
	constructor(nombre, id) {
		this.nombre = nombre;
		this.id = id;
	}

	reproducir() {
		return `La peli ${this.nombre} esta en vivo y su id es ${this.id}`;
	}
}

// const peliculaClase = new Pelicula("Spiderman", 1);

// console.log(peliculaClase);
// console.log(peliculaClase.reproducir());

// const peliculaClase2 = new Pelicula("LOTR", 2);

// console.log(peliculaClase2);
// console.log(peliculaClase2.reproducir());

//Extender

class Serie extends Pelicula {
	constructor(nombre, id, capitulo) {
		super(nombre, id);
		this.capitulo = capitulo;
	}
	reproducirCapitulo() {
		return `Reproduciendo capitulo ${this.capitulo} de la serie ${this.nombre}`;
	}
}

const you = new Serie("You", 3, 15);

// console.log(you);
// console.log(you.reproducirCapitulo());
// console.log(you.reproducir());

class Precuela extends Serie {
	constructor(nombre, id, capitulo, año) {
		super(nombre, id, capitulo);
		this.año = año;
	}
}

// const ROP = new Precuela("ROP", 4, 65, 2022);
// console.log(ROP);

//Prototypes

class Persona {
	constructor(name, lastname) {
		this.name = name;
		this.lastname = lastname;
		this.displayName = function () {
			return `${this.name} ${this.lastname}`;
		};
	}
}

const lionel = new Persona("Lionel", "Messi");

// lionel.name = "Leo";
// console.log(lionel.displayName());
// lionel.saludar = function () {};
// console.log(lionel.saludar());

const cristiano = new Persona("Cristiano", "Ronaldo");

// console.log(cristiano.name);
// console.log(cristiano.displayName());
// console.log(cristiano.saludar());

Persona.prototype.saludar = function () {
	return `Hola! Soy ${this.name} ${this.lastname}`;
};

// console.log(cristiano.saludar());

// console.log(typeof "holis");
// console.log(typeof 100);
// console.log(typeof false);

// console.log(typeof {});
// console.log(typeof []);
// console.log(typeof new Date());
// console.log(typeof new RegExp());

// console.log(new Number(100));
// console.log(new String("Holis"));
// console.log(new Boolean(true));

Array.prototype.getLastItem = function () {
	return this[this.length - 1];
};

const arrayEjemplo = [1, 2, 3, 4, 5, 6];

// console.log(arrayEjemplo.getLastItem());

// call - apply - bind

const usuario = {
	name: "Rubén",
};

const producto = {
	name: "Joystick",
};

function showInfo(pedidos, cuotas) {
	return `${this.name} tiene ${pedidos} pedidos en ${cuotas} cuotas`;
}

console.log(showInfo(1, 3));

// console.log(showInfo.call(usuario, 1, 3));

const parametros = [1, 3];

// console.log(showInfo.apply(usuario, parametros));

console.log(showInfo.bind(usuario));

const nuevaFuncion = showInfo.bind(usuario);

console.log(nuevaFuncion(2, 6));
