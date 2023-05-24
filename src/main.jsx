import "./index.css";
import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Modal from "./pages/Modal";
import SaleModule from "./components/saleModule/SaleModule";
import CategorySelection from "./components/saleModule/CategorySelection";
import ProductDescription from "./components/saleModule/ProductDescription";
import AddPicture from "./components/saleModule/addPicture";
import Profile from "./pages/Profile";
import Confirmation from "./components/saleModule/Confirmation";

const router = createBrowserRouter([
  { name: "Home", path: "/", element: <App /> },
  { name: "Login", path: "login", element: <Modal /> },
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
      {
        name: "Confirmation",
        path: "confirmation",
        element: <Confirmation />,
      },
    ],
  },
  { name: "Detail", path: "usuarios/:id", element: <Profile /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
