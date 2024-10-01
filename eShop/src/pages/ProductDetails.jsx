import React from "react";
import { useParams } from "react-router-dom";
import Products from "../assets/product.json";
import './productDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  // console.log(id);
  const product = Products.find((p) => p.id === parseInt(id));
  // console.log(product);
  const addToCart = () => {
      console.log(product.id)
      // Get the cart data from localStorage (or create an empty object if it doesn't exist)
      let cart = JSON.parse(localStorage.getItem('cart')) || {};
      // Check if the product is already in the cart
      const existingProduct = cart[id];
    
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        cart[id] = { id:product.id, name:product.name, price: product.price, quantity: 1 }; // Create new entry with id as key
      }
      // Update the cart data in localStorage
      localStorage.setItem('cart', JSON.stringify(cart));
      alert('Product added to cart');
    // console.log("Added to cart");
  };
  return (
    <>
      {product && (
        <div id="product-details">
        <h2>{product.name}</h2>
            <img src={product.image}/>
            <h2>Price: {product.price}$</h2>
            <p>{product.description}</p>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
