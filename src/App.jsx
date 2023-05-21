import "./App.css";
import Header from "./components/header";
import CategorySelection from "./components/saleModule/CategorySelection";
import AddPicture from "./components/saleModule/addPicture";
import ProductDescription from "./components/saleModule/productDescription";
import Footer from "./components/footer";
import SobreNosotros from "./components/sobreNosotros";
import ComoFunciona from "./components/comoFunciona";
import Confirmation from "./components/saleModule/confirmation";
import SaleModule from "./components/saleModule/SaleModule";

function App() {
  return (
    <>
      <Header />
      <SaleModule />

      <Footer />
    </>
  );
}

export default App;
