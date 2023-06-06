import { useEffect, useState } from "react";
import ItemDetail from "../itemDetail/itemDetail";
import { useParams } from "react-router-dom";
import "./itemDetailContainer.css";

import { getDoc, doc, getFirestore } from "firebase/firestore";
import "firebase/firestore";

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const docRef = doc(db, "items", itemId);
    getDoc(docRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProduct({ id: snapshot.id, ...snapshot.data() });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [itemId]);

  return (
    <div className="item-detail-container">
      <ItemDetail {...product} />
    </div>
  );
}

export default ItemDetailContainer;
