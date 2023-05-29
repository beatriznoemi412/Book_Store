import "./itemDetail.css";
import Card from "react-bootstrap/Card";
import ItemCount from "../itemCount/itemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";

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
   
  const{ addItem } = useContext(CartContext);
  
  const handleEntered = (amount) =>{
    setAmountEntered(amount)

    const item = {
      id, title, price
    }
   addItem (item, amount);
   }

  return (
    <Card
      className="card bg-warning mt-5"
      id="cardTwelve"
      style={{ width: "25rem", height: "56rem" }}
    >
      <Card.Img variant="top" src={img} className="img" id="img" />
     
      <Card.Body className="item-actions">
        <div className="text-center">{title}</div>
        <div className="text-center">
          <div>Autor: {author}</div>
          <div>Precio: {price}</div>
          <div>Categoría: {category}</div>
          <div>Stock: {stock}</div>
          <div>Descripción: {description}</div>
        </div>
        
        {amountEntered > 0 ? (
          <Link id="navLink" to="/cart" >Terminar Compra</Link>
        ) : (
        <ItemCount
          initial={1}
          stock={stock}
          onAdd={(handleEntered)}
        />
        )
}
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;
