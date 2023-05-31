import { products } from '../data/Products';

export const pickRandomProducts = (cantidad) => {
  const nuevoArray = [];

  while (nuevoArray.length < cantidad) {
    const indexRandom = Math.floor(Math.random() * products.length);

    if (!nuevoArray.length) {
      nuevoArray.push(products[indexRandom]);
    }

    const productoExistente = nuevoArray.find((newProduct) => {
      return newProduct.id === products[indexRandom].id;
    });

    if (!productoExistente) {
      nuevoArray.push(products[indexRandom]);
    }
  }

  return nuevoArray;
};
