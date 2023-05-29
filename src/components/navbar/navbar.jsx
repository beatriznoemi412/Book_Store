import "./navbar.css";
import CartWidget from "../cartWidget/cartWidget";
import { NavLink, Link } from "react-router-dom";
import Loader from "../loader/loader";

const Navbar = () => {
  return (
    <div className="navContainer">
      <nav className="navbar">
        <Link to="/" className="option">
        <h1 className="navbarLogo">BOOKSTORE</h1>
        </Link>
        <div className="navLink">
          <NavLink id="navLink" to={"/category/Infantiles"} className={({ isActive})=> isActive ? "ActiveOption" : "Option"}>Infantiles</NavLink>
          <NavLink id="navLink" to={"/category/Clasicos"} className={({ isActive})=> isActive ? "ActiveOption" : "Option"}>Clásicos</NavLink>
          <NavLink id="navLink" to={"/category/Autoayuda"} className={({ isActive})=> isActive ? "ActiveOption" : "Option"}>Autoayuda</NavLink>
        </div>
        <div className="right-section">
        <CartWidget />
        <Loader />
        </div>
      </nav>
    </div>
  )
};

export default Navbar;