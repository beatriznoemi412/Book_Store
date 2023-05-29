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


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <ItemListContainer greeting="BookStore, los mejores libros, al mejor precio." />
      </>
    ),
  },

  {
    path: "/category/:categoryId",
    element: (
      <>
        <Navbar />
        <ItemListContainer greeting="BookStore, los mejores libros, al mejor precio." />
        ,
      </>
    ),
  },
  {
    path: "/item/:itemId",
    element: (
      <>
        <Navbar />
        <ItemDetailContainer />
      </>
    ),
  },
  {
    path: "/cart",
    element: (
      <>
      <Navbar />
      <Cart />
    
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
