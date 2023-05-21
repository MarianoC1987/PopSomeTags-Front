import { useState } from "react";
import CategorySelection from "./CategorySelection";
import "./saleModule.css";
import BackForwardButtons from "./others/BackForwardButtons";

function SaleModule() {
  const [data, setData] = useState({
    category: "",
    description: "",
    brand: "",
    size: "",
    color: "",
  });
  const [show, setShow] = useState(
    <CategorySelection
      category={data.category}
      categorySelect={categorySelect}
    />
  );
  let count = 0;

  

  const categorySelect = (e) => {
    setData({ ...data, category: e.target.value });
  };

  // switch (count) {
  //   case 0:
  //     none;
  // }
  return (
    <main className="sale-module">
      {show}
      <BackForwardButtons backBt={""} forwardBt={() => count++} />
    </main>
  );
}

export default SaleModule;
