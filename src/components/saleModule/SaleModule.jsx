import { useEffect, useState } from "react";
import CategorySelection from "./CategorySelection";
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
  });
  let count = 0;
  const nav = useNavigate();
  const location = useLocation();

  const manageData = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  useEffect(() => {
    nav("category-selection");
  }, []);

  const renderSwitch = (e) => {
    if (e.target.name === "forward") {
      switch (location.pathname.split("/")[2]) {
        case "category-selection":
          return "product-description";
        case "product-description":
          return "add-picture";
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
      <Outlet context={[data, manageData]} />
      <BackForwardButtons
        backBt={(e) => {
          nav(renderSwitch(e));
        }}
        forwardBt={(e) => {
          nav(renderSwitch(e));
        }}
      />
      <Footer />
    </main>
  );
}

export default SaleModule;
