import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import ItemCount from "../itemCount/itemCount";
import "./itemDetail.css";

const ItemDetail = ({
  id,
  title,
  author,
  price,
  category,
  img,
  stock,
  description,
}) => {
  const [amountEntered, setAmountEntered] = useState(0);
  const { addItem } = useContext(CartContext);

  const handleEntered = (amount) => {
    setAmountEntered(amount);

    const item = {
      id,
      title,
      author,
      price,
      img,
    };
    addItem(item, amount);
  };

  return (
    <div className="itContainer">
      <section className="itemSection">
        <div className="item-image">
          <img src={img} alt={title} />
        </div>

        <div className="item-info">
          <h2>{title}</h2>
          <div>Precio: {price}</div>
          <div>Categoría: {category}</div>
          <div>Descripción: {description}</div>

          {amountEntered > 0 ? (
            <Link to="/cart" className="linkEnd">
              Terminar Compra
            </Link>
          ) : (
            <ItemCount initial={1} stock={stock} onAdd={handleEntered} />
          )}
        </div>
      </section>
    </div>
  );
};

export default ItemDetail;
