import CardProducto from './CardProducto';
import Button from '../UI/Button/Button';

import { ProductosContainer } from './CardsProductosStyles';
import { ButtonContainerStyled } from '../../pages/Home/HomeStyles';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { INITIAL_LIMIT } from '../../utils';


const CardsProductos = () => {
  const [limit, setLimit] = useState(INITIAL_LIMIT)

  let products = useSelector(state => state.products.products)
  const selectedCategory = useSelector(state => state.categories.selectedCategory)
  const totalProducts = useSelector((state) => state.products.totalProducts)

  if(selectedCategory) {
    products = {
      [selectedCategory]: products[selectedCategory]
    }
  }

  return (
    <>
      <ProductosContainer>
        {
          Object.entries(products).map(([,foods]) => {
            return foods.map((food) => {
              if (limit >= food.id || selectedCategory){
                return <CardProducto {...food} key={food.id} />
              }
              return null
              
            })
          })
        }
      </ProductosContainer>

      {
        !selectedCategory && (
          <ButtonContainerStyled>
        <Button
          onClick={() => setLimit(prevLimit => prevLimit - INITIAL_LIMIT)}
          secondary='true'
          disabled={INITIAL_LIMIT === limit}
        >
          <span>Ver menos</span>
        </Button>
        <Button onClick={() =>setLimit(prevLimit => prevLimit + INITIAL_LIMIT)} disabled={totalProducts <= limit}>
          Ver más
        </Button>
      </ButtonContainerStyled>
        )
      }
      
    </>
  );
};

export default CardsProductos;
