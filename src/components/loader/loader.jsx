import "./loader.css";
import { useState, useEffect} from "react";
import downArrowGif from "./assets/icon.gif";
import iconGif from "./assets/down-arrow.gif";
const Loader =() =>{
  
    const [loading, setLoading] = useState(true);
    useEffect(() => {
    setTimeout(() => {
        setLoading(false);
      }, 1000);
    }, []);
  

    return loading ? (
      <div className="loader">
      <img src={downArrowGif} alt="gif" />
      <img src={iconGif} alt="gif" />
      </div>
    ) : null;
    
  };

  export default Loader;

  
  
