import "./item.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Item({ id, title, author, price, category, img, stock }) {
  try {
    return (
      <Card
        className="card bg-warning mt-5"
        style={{ width: "18rem", height: "40rem" }}
      >
        <Card.Img variant="top" src={img} className="img" />
        <Card.Body>
          <Card.Title className="text-center">{title}</Card.Title>
          <Card.Text className="text-center">
            <div>Autor: {author}</div>
            <div>Precio: {price}</div>
            <div>Categoría: {category}</div>
            <div>Stock: {stock}</div>

            <Link to={`/item/${id}`} className="option text-center">
              Ver Detalle
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default Item;
