import "./index.css";
import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
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
import Blog from "./components/blog";
import { isAuth } from "./api/Rule_auth_users";

const router = createBrowserRouter([
  //HOME
  { name: "Home", path: "/", element: <App /> },
  { name: "About", path: "acercade", element: <SobreNosotros /> },
  { name: "How-it-works", path: "comofunciona", element: <ComoFunciona /> },

  //USUARIOS
  { name: "Login-and-register", path: "login", element: <Modal /> },
  {
    name: "Profile",
    path: "usuarios/:id",
    element: isAuth ? <Profile /> : <Navigate replace to="/" />,
  },

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
  { name: "Detail", path: "usuarios/:id", element: <Profile /> },
  { name: "Blog", path: "blog/lista", element: <Blog /> },
  { name: "ComoFunciona", path: "comoFunciona", element: <ComoFunciona /> },
  { name: "SobreNosotros", path: "sobreNosotros", element: <SobreNosotros /> },
  { name: "Store", path: "store", element: <StoreModule /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
