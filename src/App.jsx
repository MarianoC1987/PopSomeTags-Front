import "./App.css";
import Header from "./components/header";
import CategorySelection from "./components/saleModule/CategorySelection";
import AddPicture from "./components/saleModule/addPicture";
import ProductDescription from "./components/saleModule/productDescription";
import Footer from "./components/footer";
import SobreNosotros from "./components/sobreNosotros";

function App() {
  return (
    <>
      <Header />
      <SobreNosotros />
      {/* <ProductDescription /> */}
      <Footer />
    </>
  );
}

export default App;
