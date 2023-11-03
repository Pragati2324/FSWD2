import React, { useState, useEffect } from 'react';

const Filter = ({ products, setProducts }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');

  useEffect(() => {
    filterProducts(selectedCategory, selectedPrice);
  }, [selectedCategory, selectedPrice, products]); 

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
  };

  const handlePriceChange = (event) => {
    const priceRange = event.target.value;
    setSelectedPrice(priceRange);
  };

  const filterProducts = (category, priceRange) => {
    let filteredProducts = [...products];

    if (category !== 'all') {
      filteredProducts = filteredProducts.filter(product => product.category === category);
    }

    if (priceRange !== 'all') {
      const [minPrice, maxPrice] = priceRange.split('-');
      filteredProducts = filteredProducts.filter(
        product => product.price >= parseFloat(minPrice) && product.price <= parseFloat(maxPrice)
      );
    }

    setProducts(filteredProducts);
  };

  return (
    <div>
      <select name="category" value={selectedCategory} onChange={handleCategoryChange}>
        <option value="all">All Categories</option>
        <option value="Category 1">Category 1</option>
        <option value="Category 2">Category 2</option>
        {/* Add other category options dynamically */}
      </select>

      <select name="price" value={selectedPrice} onChange={handlePriceChange}>
        <option value="all">All Prices</option>
        <option value="0-20">0 - 20</option>
        <option value="20-30">20 - 30</option>
        <option value="30-40">30 - 40</option>
        {/* Add other price options dynamically */}
      </select>
    </div>
  );
};

export default Filter;
