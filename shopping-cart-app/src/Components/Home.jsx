// Home.js
import React from 'react';
import "../Css/Home.css"
const Home = ({ products, addToCart }) => (
  <div className="home">
    <h2>Home Page</h2>
    <div  className='maind'>
      {products.map(product => (
        <div  key={product.id}>
          <div className="product-item">
            <img  width="400px"  src={product.image} alt={product.name} />
            <div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Type: {product.Type}</p>
              <button  className="btn"    onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Home;
