import "./cartWidget.css";
import carrito  from "./assets/carrito.png";
import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalUnits } = useContext(CartContext);
  
  return (
    <div className="cart">
      <Link to="/cart" style={{ display: totalUnits > 0 ? "block" : "none" }}>
      <img className="cartIcon" src= {carrito} alt="cartWidget" />
        <span className="cart-count">{totalUnits}</span>
      </Link>
    </div>
  );
};

export default CartWidget;
