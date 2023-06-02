import React from "react";
import { Link } from "react-router-dom";
import "./item.css";

function Item({ id, title, author, price, category, img, stock }) {
  try {
    return (
      <div className="container">
      <div className="card">
        <img src={img} alt={title} className="img" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div className="card-details">
            <h6>Autor: {author}</h6>
            <h6>Precio: {price}</h6>
            <h6>Categoría: {category}</h6>
            <h6>Stock: {stock}</h6>

            <Link to={`/item/${id}`} className="option">
              Ver Detalle
            </Link>
          </div>
        </div>
      </div>
      </div>
    );
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default Item;
