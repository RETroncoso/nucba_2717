import React from 'react';
import {useLocation, useParams} from 'react-router-dom'

const Product = props => {

  const {product} = useParams();

  // const {name, year} = useLocation().state;

  return (
    <div>
      <h2>Bienvenidos a la página de {product}</h2>
    </div>
  );
};

export default Product;
