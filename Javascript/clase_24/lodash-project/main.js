import _ from "lodash";

const arraySegmentado = _.chunk(["a", "b", "c", "d", "e", "f"], 2);
console.log("Array segmentado en arrays de 2 elementos: ", arraySegmentado);

const duplicados = _.map([1, 2, 3, 4, 5, 6, 7, 8], (n) => n * 2);
console.log("Duplicados: ", duplicados);

const suma = _.reduce([1, 2, 3, 4, 5, 6, 7, 8], (acc, n) => acc + n, 0);
console.log(suma);

const obtenerAleatorio = _.sample([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(obtenerAleatorio);

const ordenAleatorio = _.shuffle([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(ordenAleatorio);
