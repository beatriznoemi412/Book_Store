import "./footer.css";
import instagram from "./assets/instagram.png";
import email from "./assets/email.png";
import whatsapp from "./assets/whatsapp.png";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer>
        <div>
        <Link to="/" className="option">
        <h1 className="navbarLogo">BOOKSTORE</h1>
        </Link>
        </div>
        <div>
        <h3>Comunicate!!!</h3>
        </div>
        <div className="networks">
        <div>
        <a href="https://wa.me/2494697346">
        <img className="msg" src={whatsapp} alt="WhatsApp" />
        </a>
        <p> 2494697346 // </p> 
        </div>
      <div>
      <a href="mailto:bookstore@gmail.com">
        <img className="msg" src={email} alt="Email" />
        </a>
        <p>bookstore@gmail.com </p>
      </div>
      <div>
        <a href="https://www.instagram.com/">
        <img className="msg" src={instagram} alt="Instagram" />
        </a>
      </div>
      </div>
      <div>
        <p>Derechos de autor © 2023 BOOKSTORE</p>
      </div>
    </footer>
  )
}

export default Footer