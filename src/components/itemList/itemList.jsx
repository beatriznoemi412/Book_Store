import Item from "../item/item";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



const ItemList = ({ products }) => {
  return (
    <Container fluid>
      <Row className="row-cols-lg-4 mt-2">
      {products.map(prod => 
        <Col key={prod.id} className="col mb-4">
        <Item{...prod} />
        </Col>
      )}
   </Row>
   </Container>
  )
};



export default ItemList;
