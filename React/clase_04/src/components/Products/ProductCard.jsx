import React from 'react'
import { CardPrice, ContainerPrice, ProductsCard } from './ProductsStyles'
import Button from '../UI/Button/Button'

const ProductCard = ({img, title, desc, price}) => {
  return (
    <ProductsCard>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <p>{desc}</p>
        <ContainerPrice>
            <CardPrice>${price}</CardPrice>
            <Button>
                Agregar
            </Button>
        </ContainerPrice>
    </ProductsCard>
  )
}

export default ProductCard