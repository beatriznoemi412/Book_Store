import "./cart.css";
import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import CartItem from "../cartItem/cartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, removeItem, calculateTotal, calculateItemSubtotal } =
    useContext(CartContext);

  const handleRemove = (itemId) => {
    removeItem(itemId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const total = calculateTotal();

  return (
    <div className="cart" id="cart">
      {cart.length === 0 ? (
        <div className="cart-container">
          <div className="cartOne cart-empty">
            <h2>No hay libros en el carrito</h2>
            <Link to="/" className="prod">
              Productos
            </Link>
          </div>
        </div>
      ) : (
        <>
          {cart.map((prod) => (
            <div key={prod.id} className="item-row">
              <div className="item">
                <CartItem
                  {...prod}
                  handleRemove={handleRemove}
                  calculateItemSubtotal={calculateItemSubtotal}
                />
              </div>
              <div>
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
              <h3 className="total">Total: $ {total}</h3>
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
        </>
      )}
    </div>
  );
};

export default Cart;
