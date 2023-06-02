import "./cart.css";
import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import CartItem from "../cartItem/cartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, totalAmount, removeItem, calculateTotal, calculateItemSubtotal  } = useContext(CartContext);

  if (totalAmount === 0) {
    return (
      <div className="cart-container">
        <div className="cartOne cart-empty">
          <h2>No hay libros en el carrito</h2>
          <Link to="/" className="prod">
            Productos
          </Link>
        </div>
      </div>
    );
  }

  const handleRemove = (itemId) => {
    removeItem(itemId);
  };

  const handleClearCart = () => {
    clearCart();
  };

 
 
  const total = calculateTotal();

  return (
    <div className="cart">
      {cart.map((prod) => (
        <div key={prod.id} className="item-row">
          <div className="item">
            <CartItem {...prod} handleRemove={ handleRemove} calculateItemSubtotal={calculateItemSubtotal}/>
          </div>
          <div className="remove-button">
            <button onClick={() => handleRemove(prod.id)}>
              <span role="img" aria-label="Remove">
                ❌
              </span>
            </button>
        </div>
        </div>
      ))}
      <div className="actions">
      <div>
        <h3>Total: $ {total}</h3>
      </div>
      <div>
        <button onClick={handleClearCart} className="button">
          Limpiar Carrito
        </button>
      </div>
      <Link to="/checkout" className="check">
        Checkout
      </Link>
    </div>
    </div>
  )
      };

export default Cart;
