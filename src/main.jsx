import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Login from "./components/Login.jsx";
import Modal from "./components/Modal";

const router = createBrowserRouter([
  { name: "Home", path: "/", element: <App /> },
  { name: "Login", path: "login", element: <Modal /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
