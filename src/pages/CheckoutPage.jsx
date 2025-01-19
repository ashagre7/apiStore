import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const CheckoutPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <div>
      <h1>Checkout</h1>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            <p>{product.title} - ${product.price}</p>
            <button onClick={() => removeFromCart(product.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default CheckoutPage;
