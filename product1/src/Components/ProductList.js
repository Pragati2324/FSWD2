import React, { useState } from 'react';
import Product from './Product';
import Filter from './Filter';
import Pagination from './Pagination';
import productsData from '../Data/products';
import styled from 'styled-components';

const ProductListWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-evenly;
`;

const ProductList = () => {
  const [products, setProducts] = useState(productsData);
  const [FilterData, setFilterData] = useState(productsData);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8); // Number of products per page

  // Function to handle pagination
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // Get current products based on pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = FilterData.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <ProductListWrapper>
      <Filter products={products} setProducts={setFilterData} />
      <ProductsContainer>
        {FilterData.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </ProductsContainer>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
      />
    </ProductListWrapper>
  );
};

export default ProductList;
