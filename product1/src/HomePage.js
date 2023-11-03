import React from 'react';
import ProductList from './Components/ProductList';
import styled from 'styled-components';

const MainContainer = styled.div`
  background-color:#807191; 
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  color: #333;
`;

const HomePage = () => {
  return (
    <MainContainer>
      <Title>WELCOME TO OUR ONLINE STORE</Title>
      <ProductList />
    </MainContainer>
  );
};

export default HomePage;
