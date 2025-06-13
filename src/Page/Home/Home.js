import React, { useState, useEffect } from 'react';
import Owl from '../owl/owl';
import CustomCard from '../../Components/CustomCard';

const Home = ({ searchTerm }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://backend-crud-one.vercel.app/product')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(console.error);
  }, []);

  // Filter products by name or director (case-insensitive)
  const filteredProducts = products.filter(product =>
    product.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.director?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Owl />
      <CustomCard products={filteredProducts} />
    </>
  );
};

export default Home;
