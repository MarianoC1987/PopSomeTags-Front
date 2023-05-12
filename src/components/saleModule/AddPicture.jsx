import "./saleModule.css";

function AddPicture() {
  return (
    <section>
      <p>Agregá fotos reales y actuales de te prenda (máx. 4 fotos)</p>
      <input type="file" accept="image/*" />
    </section>
  );
}

export default AddPicture;
