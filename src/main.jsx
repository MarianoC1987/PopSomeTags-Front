import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Modal from "./pages/Modal";
import Profile from "./pages/Profile";
import SobreNosotros from "./components/SobreNosotros";
import ComoFunciona from "./components/ComoFunciona";

const router = createBrowserRouter([
  //HOME
  { name: "Home", path: "/", element: <App /> },
  { name: "About", path: "acercade", element: <SobreNosotros /> },
  { name: "How-it-works", path: "comofunciona", element: <ComoFunciona /> },

  //USUARIOS
  { name: "Login-and-register", path: "login", element: <Modal /> },
  { name: "Profile", path: "usuarios/:id", element: <Profile /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
