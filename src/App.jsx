import "./App.css";
import Header from "./components/header";
import CategorySelection from "./components/saleModule/CategorySelection";
import AddPicture from "./components/saleModule/addPicture";
import ProductDescription from "./components/saleModule/productDescription";

function App() {
  return (
    <>
      <Header />
      <AddPicture />
    </>
  );
}

export default App;
