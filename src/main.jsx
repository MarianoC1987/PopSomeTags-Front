import "./index.css";
import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Modal from "./pages/Modal";
import SaleModule from "./components/saleModule/SaleModule";
import CategorySelection from "./components/saleModule/CategorySelection";
import ProductDescription from "./components/saleModule/productDescription";
import AddPicture from "./components/saleModule/addPicture";
import Profile from "./pages/Profile";
import SobreNosotros from "./components/sobreNosotros";
import ComoFunciona from "./components/comoFunciona";
import Confirmation from "./components/saleModule/Confirmation";
import StoreModule from "./components/storeModule/StoreModule";

const router = createBrowserRouter([
  //HOME
  { name: "Home", path: "/", element: <App /> },
  { name: "About", path: "acercade", element: <SobreNosotros /> },
  { name: "How-it-works", path: "comofunciona", element: <ComoFunciona /> },

  //USUARIOS
  { name: "Login-and-register", path: "login", element: <Modal /> },
  { name: "Profile", path: "usuarios/:id", element: <Profile /> },

  //VENTAS
  {
    name: "Sales",
    path: "sales",
    element: <SaleModule />,
    children: [
      {
        name: "CategorySelection",
        path: "category-selection",
        element: <CategorySelection />,
      },
      {
        name: "ProductDescription",
        path: "product-description",
        element: <ProductDescription />,
      },
      {
        name: "AddPicture",
        path: "add-picture",
        element: <AddPicture user={"ejemplo"} />,
      },
      {
        name: "Confirmation",
        path: "confirmation",
        element: <Confirmation />,
      },
    ],
  },

  //TIENDA
  { name: "Store", path: "/store", element: <StoreModule /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
