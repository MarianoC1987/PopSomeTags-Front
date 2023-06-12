import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import SobreNosotros from "./components/sobreNosotros";
import ComoFunciona from "./components/comoFunciona";
import Blog from "./components/blog";

function App() {
  return (
    <>
      <Header />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
