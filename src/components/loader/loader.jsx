import "./loader.css";
import { useState, useEffect } from "react";
import iconGif from "./assets/icon.gif";

const Loader = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return loading ? (
    <div className="loader">
      <img src={iconGif} alt="gif" />
    </div>
  ) : null;
};

export default Loader;
