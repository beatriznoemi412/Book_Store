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
    <div className="buttons">
      <button className="button" onClick={addOne}>+</button>
      <h1 className="number">{amount}</h1>
      <button className="button" onClick={subtract}>-</button>
    </div>
    <div>
      <button className="amount" id="btn" onClick={()=> onAdd(amount)} disabled={!stock}>
        Agregar Carrito
      </button>
    </div>
    </div>
  );
}
export default ItemCount;
