import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { productList } from '../../data/productsData';
import { Button } from '../Login/Login';

const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const Card = styled.div`
  background-color: #16161a;
  padding: 5px 5px 20px;
  color: #fffffe;
  border-radius: 10px;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  img {
    border-radius: 8px;
    width: 100%;
  }

  h2 {
    color: #3da9fc;
  }

  span {
    font-weight: 800;
    font-size: 1.2rem;
  }
`;


const LinkItem = styled(Link)`
  color: #3da9fc;
  border: 1px solid #3da9fc;
  border-radius: 20px;
  padding: 5px 15px;
  transition: all 0.3s ease;

  :hover {
    background: #3da9fc;
    color: #fff;
  }
`;

const Title = styled.h1`
  padding: 3rem 0;
  text-align: center;
`;
const Products = () => {

  const navigate = useNavigate()

  return (
    <>
      <Title>Puede ser pa?</Title>
      <ProductContainer>
        {productList?.map(product => (
          <Card key={product.id}>
            <img src={product.src} alt='' />
            <h2>{product.name}</h2>
            <span>{product.year}</span>
            <LinkItem to={product.name} >Ver Más</LinkItem>
            {/* <Button onClick={() => navigate(product.name, {state: product})} >Ver Más</Button> */}
          </Card>
        ))}
      </ProductContainer>
    </>
  );
};

export default Products;
