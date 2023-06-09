import { useContext, useState } from "react";
import {
  Timestamp,
  collection,
  query,
  where,
  getDocs,
  addDoc,
  getFirestore,
  doc,
  updateDoc,
  documentId,
} from "firebase/firestore";

import { CartContext } from "../../context/cartContext";
import CheckoutForm from "../checkoutForm/checkoutForm";
import { Link } from "react-router-dom";
import "./checkout.css";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");

  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email, confirmEmail }) => {
    setLoading(true);
    try {
      if (email !== confirmEmail) {
        console.log("Los correos electrónicos no coinciden");
        return;
      }

      const objOrder = {
        buyer: {
          name,
          phone,
          email,
          confirmEmail,
        },
        items: cart,
        total: total,
        date: Timestamp.fromDate(new Date()),
      };
      const db = getFirestore();

      const ids = cart.map((prod) => prod.id);
      const querySnapshot = await getDocs(
        query(collection(db, "items"), where(documentId(), "in", ids))
      );

      const products = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      const batch = [];

      cart.forEach((item) => {
        const currentItem = products.find((product) => product.id === item.id);
        if (currentItem && currentItem.stock !== undefined) {
          const finalStock = currentItem.stock - item.amount;
          const itemRef = doc(db, "items", item.id);
          batch.push(updateDoc(itemRef, { stock: finalStock }));
          console.log(`Stock final: ${finalStock}`);
        }
      });
      await Promise.all(batch);

      const orderRef = await addDoc(collection(db, "orders"), objOrder);
      setOrderId(orderRef.id);
      clearCart();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="loading">
        <h1>Creando orden...</h1>
        <h2 className="wait">Por favor, espere.</h2>
      </div>
    );
  }

  if (orderId) {
    return (
      <div className="containerCheck">
        <div className="loading">
          <h1>El ID de su orden es: {orderId}</h1>
        </div>
        <div>
          <Link to="/" className="prod">
            Ir a Home/Productos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="containerCheck">
      <h2>Checkout</h2>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
};

export default Checkout;
