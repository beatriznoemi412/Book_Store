import { useState } from "react";
import "./checkoutForm.css";

const CheckoutForm = ({ onConfirm, outOfStockItems }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState("");
    
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
      const handleConfirmEmailChange = (e) => {
        setConfirmEmail(e.target.value);
      };
    

    const handleConfirm = (e) => {
        e.preventDefault()

        if (email !== confirmEmail) {
            console.log("Los correos electrónicos no coinciden");
            return;
          }

        const userData = {
            name, phone, email, confirmEmail
        };
        onConfirm(userData)
        };
       
        return (
            <div className="container">
            <form onSubmit={handleConfirm} className="form">
                <label className="label">
                    Nombre
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>

                <label className="label">
                    Teléfono
                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </label>

                <label className="label">
                    Email
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange=  {handleEmailChange}
                    />
                </label>
                <label className="label">
          Confirmar Email
          <input
            type="email"
            id="confirmEmail"
            value={confirmEmail}
            onChange={handleConfirmEmailChange} 
          />
          </label>
          <button className="submit" type="submit">Crear Orden</button>
            </form>
            {outOfStockItems && outOfStockItems.length > 0 && (
        <div className="outOfStock">
          <h3>Productos sin stock:</h3>
          <ul>
            {outOfStockItems.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
    

export default CheckoutForm;