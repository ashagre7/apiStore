import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

function CategoryPage() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/category/${category}`)
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, [category]);

  return (
    <div className="category-page">
      <h1>{category} Products</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
