import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider } from "react-router-dom"; 
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { CartProvider } from "./context/cartContext";


import Navbar from "./components/navbar/navbar";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer";
import Cart from "./components/cart/cart";
import Checkout from "./components/checkout/checkout";
import Footer from "./components/footer/footer";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};

// Initialize Firebase
initializeApp(firebaseConfig);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <ItemListContainer greeting="BookStore, los mejores libros, al mejor precio." />
        <Footer />
      </>
    ),
  },
 
  {
    path: "/category/:categoryId",
    element: (
      <>
        <Navbar />
        <ItemListContainer greeting="BookStore, los mejores libros, al mejor precio." />
        <Footer />
      </>
    ),
  },
  {
    path: "/item/:itemId",
    element: (
      <>
        <Navbar />
        <ItemDetailContainer />
        <Footer />
      </>
    ),
  },
  {
    path: "/cart",
    element: (
      <>
      <Navbar />
      <Cart />
      <Footer />
      </>
    ),
  },
  {
    path: "/checkout",
    element: (
      <>
      <Navbar />
      <Checkout />
      <Footer />
      </>
    ),
  },
  {
    path: "*",
    element: <h1>404 NOT FOUND</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <React.StrictMode>
    <CartProvider value={[]}>
    <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>,
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
