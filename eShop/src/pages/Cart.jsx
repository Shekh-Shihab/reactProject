import React from "react";
import './cart.css';

const Cart = () => {
  let cart = [];
  let totalPrice = 0;
  const cartitems = JSON.parse(localStorage.getItem("cart")) || {};
  console.log(cartitems);
  Object.values(cartitems).forEach((item) => {
    cart.push(item);
  });

  return (
    <>
      {cart.map((item) => {
        totalPrice += item.quantity * item.price;
        return (
          <div className="cart-item" key={item.id}>
            <h3>{item.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>Price: {item.quantity * item.price}$</p>
          </div>
        );
      })}
      <div className="cart-price">
        <h3>Total Price: {totalPrice}$</h3>
      </div>
    </>
  );
};

export default Cart;
