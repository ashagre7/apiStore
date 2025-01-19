import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Cart() {
    const { cart, removeFromCart } = useContext(CartContext);

    return (
        <div>
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cart.map((item) => (
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <p>${item.price}</p>
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        <button onClick={() => alert('Payment Successful!')}>Proceed to Payment</button>

                    </div>
                ))
            )}
        </div>
    );
}

export default Cart;
