import BackForwardButtons from "./others/BackForwardButtons";
import "./saleModule.css";

function CategorySelection({ category, categorySelect }) {
  const categories = [
    "Abrigos/Camperas",
    "Accesorios",
    "Camisas",
    "Calzado",
    "Pantalones",
    "Polleras",
    "Remeras/Buzos",
    "Vestidos",
    "Otros",
  ];

  return (
    <section className="category-selection">
      <p>Para empezar elije la categoría de tu prenda</p>
      <select value={category} onChange={(e) => categorySelect(e)}>
        <option value="0">Seleccionar</option>
        {categories.map((c, k) => {
          return (
            <option key={k} value={c}>
              {c}
            </option>
          );
        })}
      </select>
    </section>
  );
}

export default CategorySelection;
