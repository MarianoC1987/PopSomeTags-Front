import { useEffect, useState } from "react";
import "./saleModule.css";
import BackForwardButtons from "./others/BackForwardButtons";
import Header from "../header";
import Footer from "../footer";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

function SaleModule() {
  const [data, setData] = useState({
    category: "",
    description: "",
    brand: "",
    size: "",
    color: "",
    sex: "",
    imgs: [],
  });
  const [imgs, setImgs] = useState([]);

  const nav = useNavigate();
  const location = useLocation();

  const manageData = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    nav("category-selection");
  }, []);

  const renderSwitch = (e) => {
    if (e.target.name === "forward") {
      switch (location.pathname.split("/")[2]) {
        case "category-selection":
          if (data.category !== "") {
            return "product-description";
          } else {
            alert("Debes seleccionar una categoría");
            brake;
          }
        case "product-description":
          if (
            data.description !== "" &&
            data.brand !== "" &&
            data.size !== "" &&
            data.color !== "" &&
            data.sex !== ""
          ) {
            return "add-picture";
          } else {
            alert("Debes completar los datos");
            brake;
          }
        case "add-picture":
          return "confirmation";
      }
    } else if (e.target.name === "back") {
      switch (location.pathname.split("/")[2]) {
        case "product-description":
          return "category-selection";
        case "add-picture":
          return "product-description";
        case "confirmation":
          return "add-picture";
      }
    }
  };

  return (
    <main className="sale-module">
      <Header />
      <Outlet context={[data, manageData, imgs, setImgs]} />
      <BackForwardButtons
        backBt={(e) => {
          nav(renderSwitch(e));
        }}
        forwardBt={(e) => {
          setData({ ...data, imgs: imgs });
          nav(renderSwitch(e));
        }}
      />
      <Footer />
    </main>
  );
}

export default SaleModule;
