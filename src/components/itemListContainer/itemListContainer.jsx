import { useState, useEffect } from "react";
import ItemList from "../itemList/itemList";
import { useParams } from "react-router-dom";
import {
  getDocs,
  collection,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const banner = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "84vh",
    backgroundImage: `url(${"https://cdn.pixabay.com/photo/2018/04/16/09/30/literature-3324023_1280.jpg"})`,
  };
  const bannerContainer = {
    textAlign: "center",
    padding: "15% 0",
    color: "white",
    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)",
    fontSize: "2rem",
    fontFamily: "'EB Garamond', serif",
  };

  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const collectionRef = categoryId
      ? query(collection(db, "items"), where("category", "==", categoryId))
      : collection(db, "items");

    getDocs(collectionRef)
      .then((snapshot) => {
        setProducts(() =>
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryId]);
  return (
    <>
      <div className="banner" style={banner}>
        <div className="bannerContainer" style={bannerContainer}>
          {greeting}
        </div>
      </div>
      <ItemList products={products} />
    </>
  );
};
export default ItemListContainer;
