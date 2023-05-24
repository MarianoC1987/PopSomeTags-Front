import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Modal from "./pages/Modal";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  { name: "Home", path: "/", element: <App /> },
  { name: "Login", path: "login", element: <Modal /> },
  { name: "Detail", path: "usuarios/:id", element: <Profile /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
