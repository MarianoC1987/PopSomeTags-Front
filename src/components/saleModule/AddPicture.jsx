import "./saleModule.css";
import percha from "../../assets/percha.png";
import upload from "../../assets/upload.png";
import BackForwardButtons from "./others/BackForwardButtons";

function AddPicture() {
  return (
    <section className="add-picture">
      <p>Agregá fotos reales y actuales de te prenda (máx. 4 fotos)</p>
      <div>
        <img src={percha} />
        <label htmlFor="ap-uploadimage">
          <img src={upload} />
          Cargar foto
          <input id="ap-uploadimage" type="file" accept="image/*" />
        </label>
      </div>
    </section>
  );
}

export default AddPicture;
