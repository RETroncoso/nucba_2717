import React from 'react'
import { ButtonContainerStyled, ProductsContainer, ProductsWrapper } from './ProductsStyles'
import {products} from "../../data/Products"
import ProductCard from './ProductCard'
import Button from '../UI/Button/Button'

const Products = () => {
  return (
    <ProductsWrapper>
        <h2>Nuestros Productos</h2>
        <ProductsContainer>
            {
                products.map((product) => {
                    return <ProductCard
                        {...product}
                        key={product.id}
                    />
                })
            }
        </ProductsContainer>
        <ButtonContainerStyled>
            <Button>
                Ver menos
            </Button>
            <Button
                disabled
            >
                Ver mas
            </Button>
        </ButtonContainerStyled>
    </ProductsWrapper>
  )
}

export default Products