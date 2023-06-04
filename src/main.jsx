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
import SobreNosotros from "./components/SobreNosotros";
import ComoFunciona from "./components/ComoFunciona";
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
    element: isAuth ? <Profile /> : <Navigate replace to="login" />,
  },

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
        element: <AddPicture />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
