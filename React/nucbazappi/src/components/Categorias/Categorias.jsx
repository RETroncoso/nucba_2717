import React from 'react';

import Categoria from './Categoria';
import { CategoriasContainer } from './CategoriasStyles';
import { Categories } from '../../data/Categories';

const Categorias = () => {
  return (
    <CategoriasContainer>
      {
        Categories.map((category) => {
          return <Categoria {...category} key={category.id}/>
        })
      }
    </CategoriasContainer>
  );
};

export default Categorias;
