// Cart.js
import React from 'react';

const Cart = ({ cart, removeFromCart }) => (
  <div className="cart">
    <h2>Cart Page</h2>
    <ul>
      {cart.map(item => (
        <li key={item.id}>
          <div className="product-item">
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default Cart;
