import "./App.css";
import Header from "./components/header";
import CategorySelection from "./components/saleModule/CategorySelection";
import AddPicture from "./components/saleModule/addPicture";
import ProductDescription from "./components/saleModule/productDescription";
import Footer from "./components/footer";
import SobreNosotros from "./components/sobreNosotros";
import ComoFunciona from "./components/comoFunciona";
import Blog from "./components/blog";

function App() {
  return (
    <>
      <Header />
      {/* <SobreNosotros /> */}
      {/* <ComoFunciona /> */}
      {/* <ProductDescription /> */}
      <Blog />
      <Footer />
    </>
  );
}

export default App;
