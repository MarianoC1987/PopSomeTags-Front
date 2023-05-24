import "./saleModule.css";

function ProductDescription() {
  const brands = [
    "H&M",
    "Zara",
    "Forever 21",
    "Tommy Hilfiger",
    "Legacy",
    "Rapsodia",
    "Otras",
  ];
  const sizes = ["XS", "S", "M", "L", "XL"];
  return (
    <section className="product-description">
      <p>Ahora te pedimos agregar algunos datos sobre tu prenada</p>
      <form>
        <label htmlFor="pd-description">
          Descripción/Tipo de tela o material:
        </label>
        <input type="text" id="pd-description" />
        <span>Ejemplo: Campera de jean, remera de algodón</span>
        <label htmlFor="pd-brand">Marca:</label>
        <select id="pd-brand">
          <option value="0">Seleccionar</option>
          {brands.map((b, k) => {
            return (
              <option key={k} value={b}>
                {b}
              </option>
            );
          })}
        </select>
        <div>
          <div>
            <label htmlFor="pd-color">Color:</label>
            <input type="text" id="pd-color" />
          </div>
          <div>
            <label htmlFor="pd-size">Talle:</label>
            <select id="pd-size">
              <option value="0">Seleccionar</option>
              {sizes.map((s, k) => {
                return (
                  <option key={k} value={s}>
                    {s}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <label htmlFor="pd-sex">Seleccioná el género:</label>
        <div id="pd-sex">
          <button>Mujer</button>
          <button>Hombre</button>
          <button>Unisex</button>
        </div>
      </form>
    </section>
  );
}

export default ProductDescription;
