// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Components/Navbar.jsx';
import Home from './Components/Home.jsx';
import Cart from './Components/Cart.jsx';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch products from the API
    axios.get('https://63c68758dcdc478e15c364c2.mockapi.io/products/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const addToCart = (product) => {
    console.log('Adding to cart:', product);
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <div className="App">
      <Navbar />
      <h1>Shopping Cart</h1>

      <Home products={products} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;
