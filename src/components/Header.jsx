import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/category/all">Products by Category</Link></li>
          <li><Link to="/checkout">Checkout</Link></li>
          <li><Link to="/wishlist">Wishlist</Link></li>
        </ul>
      </nav>
      <div className="cart-status">
        Cart: {cart ? cart.length : 0} items
      </div>
    </header>
  );
};

export default Header;
