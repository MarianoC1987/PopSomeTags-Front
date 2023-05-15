import "./saleModule.css";

function CategorySelection() {
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
      <select>
        <option value="0">Seleccionar</option>
        {categories.map((c, k) => {
          return (
            <option key={k} value={c}>
              {c}
            </option>
          );
        })}
      </select>
      <div className="back-forward">
        <button>Volver</button>
        <button>Siguiente</button>
      </div>
    </section>
  );
}

export default CategorySelection;
