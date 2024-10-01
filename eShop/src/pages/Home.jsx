import React from 'react';
import { useNavigate } from 'react-router-dom';
import Products from '../assets/product.json';
import './home.css';

const Home = () => {
  const navigate = useNavigate() ;
// console.log(Products)
const showProductDetails = (productId) => {
  // console.log(productId)
  navigate(`/product/${productId}`);
}
  return (
  <>
    <h1>Welcome to eStore</h1>
    <h4 className="align-content-center">
      This a new e-commerce website. You can get your all types of necessary
      things here
    </h4>
    <div id="product-list">
      <h2>Our Products</h2>
      <ul id="product-list-items"></ul>
    </div>
      <ul id="product-list-items">
        {Products.map(product =>{
          return(
          <li key={product.id}>
          <h3>{product.name}</h3>
          <img src={product.image} alt={product.name} />
          <h3>Price: {product.price}$</h3>
            <button onClick = {()=>showProductDetails(product.id)}>View Details</button>
          </li>
          )
        })}
      </ul>
    </>
  )
}

export default Home
