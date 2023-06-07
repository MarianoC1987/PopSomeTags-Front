import { useEffect, useState } from "react";
import "./saleModule.css";
import BackForwardButtons from "./others/BackForwardButtons";
import Header from "../header";
import Footer from "../footer";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { getCurrentSessionUser } from "../../api/Rule_users";

function SaleModule() {
  const [user, setUser] = useState();
  const [btText, setBtText] = useState("Siguiente");
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

  const getUsers = async () => {
    await getCurrentSessionUser().then((result) => {
      setUser(result);
    });
  };

  useEffect(() => {
    nav("category-selection");
    getUsers();
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
          if (imgs.length > 0) {
            setBtText("Confirmar");
            return "confirmation";
          } else {
            alert("Debes agregar al menos una imagen");
            break;
          }
        case "confirmation":
          //aca va la funcion qu manda todo slos datos a la base de datos
          //y que mande las fotos a firebase
          //y redirecciona a la pagina de finalizar compra
          brake;
      }
    } else if (e.target.name === "back") {
      switch (location.pathname.split("/")[2]) {
        case "product-description":
          return "category-selection";
        case "add-picture":
          return "product-description";
        case "confirmation":
          setBtText("Siguiente");
          return "add-picture";
      }
    }
  };

  return (
    <main className="sale-module">
      <Header />
      <Outlet context={[data, manageData, imgs, setImgs, user]} />
      <BackForwardButtons
        backBt={(e) => {
          nav(renderSwitch(e));
        }}
        forwardBt={(e) => {
          setData({ ...data, imgs: imgs });
          nav(renderSwitch(e));
        }}
        btText={btText}
      />
      <Footer />
    </main>
  );
}

export default SaleModule;
