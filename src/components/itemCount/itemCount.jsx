
import { useState } from "react";
import "./itemCount.css";

const ItemCount = ({stock, initial, onAdd}) =>{
  const [amount, setAmount] = useState(initial);

  const addOne = () => {
    amount < stock && setAmount(amount + 1);
    
  };

  const subtract = () => {
    amount > 1 &&  setAmount(amount - 1); 
  };

  return (
    <div className="count">
    <div className="d-flex align-items-center justify-content-center p-3">
      <button className="m-2" onClick={addOne}>+</button>
      <h1>{amount}</h1>
      <button className="m-2" onClick={subtract}>-</button>
    </div>
    <div>
      <button className="amount btn text-light" id="btn" onClick={()=> onAdd(amount)} disabled={!stock}>
        Agregar Carrito
      </button>
    </div>
    </div>
  );
}
export default ItemCount;
