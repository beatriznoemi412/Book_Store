import { useState } from "react";
import "./checkoutForm.css";

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleConfirm = (e) => {
        e.preventDefault()

        const userData = {
            name, phone, email
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>

                <button className="submit" type="submit">Crear Orden</button>
            </form>
        </div>
        );
    };

export default CheckoutForm;