import { useState } from "react";
import "./checkoutForm.css";

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("")
  

  const handleNameChange = (e) => {
    const value = e.target.value.replace(/[^A-Za-z ]/g, "");
    setName(value);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setPhone(value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleConfirmEmailChange = (e) => {
    setConfirmEmail(e.target.value);
  };

  const handleConfirm = (e) => {
    e.preventDefault();

    if (email !== confirmEmail) {
      setErrorMessage("Los correos electrónicos no coinciden");
      return;
    }
    if (!name || !phone || !email || !confirmEmail) {
      setErrorMessage("Por favor, complete todos los campos");
      return;
    }

    setErrorMessage(""); // limpia algún error previo mensaje

    const userData = {
      name,
      phone,
      email,
      confirmEmail,
    };
    onConfirm(userData);
  };

  return (
    <div className="container">
      <form onSubmit={handleConfirm} className="form">
        <label className="label">
          Nombre
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </label>

        <label className="label">
          Teléfono
          <input
            type="text"
            value={phone}
            onChange= {handlePhoneChange}//{(e) => setPhone(e.target.value)}
          />
        </label>

        <label className="label">
          Email
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
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

        {errorMessage && <p className="error">{errorMessage}</p>}

        <button className="submit" type="submit">
          Crear Orden
        </button>
      </form>
    </div>
  );
};
export default CheckoutForm;
