import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

function WishlistPage() {
  const [wishlist] = useState(
    JSON.parse(localStorage.getItem('wishlist')) || []
  );


  return (
    <div className="wishlist-page">
      <h1>Wishlist</h1>
      <div className="product-list">
        {wishlist.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default WishlistPage;
