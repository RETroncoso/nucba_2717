// Spread operator con arrays

const numeros = [1, 2, 3, 4];
// const numerosCopiados = numeros;
const numerosCopiados = [...numeros];

numerosCopiados[0] = 10;
// console.log(numeros, numerosCopiados);

const otrosNumeros = [5, 6, 7, 8];
// console.log([100, ...numeros, 'holis', ...otrosNumeros, 999]);

// Spread con objetos
const user = {
  name: 'Pepe',
  age: 23,
};

const userContact = {
  phone: '123456789',
  email: 'asd@asd.com',
};

let copyUser = { ...user };
// console.log(user);
// copyUser.web = 'www.pepe.com';
// console.log(copyUser);

const fullUser = { ...user, ...userContact, web: 'google.com' };
// console.log(fullUser);

// METODOS DE STRING

// Length
const string = 'Hola mundo';

// Gallina Tiene Huevo
// console.log(string.length);
// if (string.length === 8) console.log('Tuki');

// toUpperCase, toLowerCase
// console.log(string.toUpperCase());
// console.log(string.toLowerCase());

// replace
const stringModificado = string.replace('mundo', 'Messi');
// console.log(stringModificado);
// console.log(string);

// trim
const stringConEspacios = '     Hola mundo      ';
// console.log(stringConEspacios.trim());

// Ejercicio 1
const stringEjercicio1 = 'Hola MuNDo';
// console.log(stringEjercicio1.replace('mundo', 'pepito'));// Esto no lo modifica

// console.log(stringEjercicio1.toLowerCase().replace('mundo', 'pepito'));

// split
const stringSplit = 'Hola mundo, soy un string, holis, como va, tuki, messi';
const resultadoSplit = stringSplit.split(' ');
// console.log(resultadoSplit);

// typeof
// console.log(typeof stringSplit);
// console.log(typeof resultadoSplit);

// ARRAYS

// indexOf()
const arrGenerico = [1, 2, 3, 4, 5];
// console.log(arrGenerico.indexOf(3));

// pop()
// console.log(arrGenerico);
// const pop = arrGenerico.pop();
// console.log(arrGenerico);
// console.log(pop);

// shift()
// const shift = arrGenerico.shift();
// console.log(shift);
// console.log(arrGenerico);

// unshift()
// console.log(arrGenerico.unshift('Messi'));
// console.log(arrGenerico);

// reverse()
// console.log(arrGenerico.reverse());

// toString()
const arrToString = arrGenerico.toString();
// console.log(arrToString);

// push()
const animales = ['perro', 'gato', 'conejo'];

const count = animales.push('tortuga');
// console.log(count);
// console.log(animales);

// join()
// console.log(animales.join('*'));

// concat()
// console.log(animales.concat(arrGenerico));

// slice()
const nombres = ['Jose', 'Angel', 'Agus', 'Ruben', 'Tuki', 'Messi'];

const corte = nombres.slice(0, 3);
// console.log(corte);

// includes()
// console.log(nombres.includes('Tuki'));

// forEach()
// nombres.forEach(nombre => console.log(nombre));

nombres.forEach(nombre => {
  console.log('Estamos recorriendo');
  console.log(nombre);
  console.log('---------');
});
