import { useEffect, useState } from "react";
import CategorySelection from "./CategorySelection";
import "./saleModule.css";
import BackForwardButtons from "./others/BackForwardButtons";
import Header from "../header";
import Footer from "../footer";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

function SaleModule() {
  const [data, setData] = useState({
    category: "brrr",
    description: "",
    brand: "",
    size: "",
    color: "",
  });
  let count = 0;
  const nav = useNavigate();

  const categorySelect = (e) => {
    setData({ ...data, category: e.target.value });
  };

  useEffect(() => {
    nav("category-selection");
  }, []);
  const location = useLocation();

  console.log(location.pathname.split("/")[2]);

  const renderSwitch = () => {
    switch (location.pathname.split("/")[2]) {
      case "category-selection":
        return "product-description";
      case "product-description":
        return "add-picture";
    }
  };

  return (
    <main className="sale-module">
      <Header />
      <Outlet context={[data, setData]} />
      <BackForwardButtons
        backBt={""}
        forwardBt={() => {
          nav(renderSwitch());
        }}
      />
      <Footer />
    </main>
  );
}

export default SaleModule;
