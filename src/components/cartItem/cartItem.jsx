const CartItem = ({ title, img, price, amount, calculateItemSubtotal }) => {
  const subtotal = calculateItemSubtotal(price, amount);

  return (
    <div className="cartItem">
      <h3>{title}</h3>
      <img className="selectedProd" src={img} alt={title} />
      <p>Precio: $ {price}</p>
      <p>Cantidad: {amount}</p>
      <p>Subtotal: $ {subtotal}</p>
    </div>
  );
};

export default CartItem;
