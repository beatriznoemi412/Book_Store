import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../itemDetail/itemDetail";
import { useParams } from "react-router-dom";


function ItemDetailContainer() {
    const [product, setProduct] = useState(null)
    
    const { itemId } = useParams()

    useEffect(()=>{
        getProductById(itemId)
           .then(response =>{
            setProduct(response)
           })
           .catch(error => {
            console.error(error)
           })
    }, [itemId])
    return (
      <Row className="row-cols-lg-1">
      <Col>
    <div className=" col mb-1 ">
        <ItemDetail {...product}/>
    </div>
    </Col>
       </Row>
  )
}

export default ItemDetailContainer