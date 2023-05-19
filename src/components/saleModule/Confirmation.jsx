import "./saleModule.css";

function Confirmation() {
  return (
    <section className="confirmation">
      <p>Para finalizar, confirmá que los datos sean correctos</p>
      <div className="confirmation-data">
        <div className="clothes-data">
          <strong>Datos de la prenda</strong>
          <label htmlFor="c-cathegory">Categoría:</label>
          <input type="text" id="c-cathegory" />
          <label htmlFor="c-description">
            Descripción/Tipo de tela o material:
          </label>
          <input type="text" id="c-description" />
          <div>
            <label htmlFor="c-brand">Marca:</label>
            <input type="text" id="c-brand" />
            <label htmlFor="c-size">Talle:</label>
            <input type="text" id="c-size" />
          </div>
          <div>
            <label htmlFor="c-color">Color:</label>
            <input type="text" id="c-color" />
            <label htmlFor="c-sex">Género:</label>
            <input type="text" id="c-sex" />
          </div>
        </div>
        <div className="contact-data">
          <strong>Datos de contacto:</strong>
          <label htmlFor="c-name">Nombre:</label>
          <input type="text" id="c-name" />
          <label htmlFor="c-mail">E-mail:</label>
          <input type="text" id="c-mail" />
          <label htmlFor="c-phone">Teléfono:</label>
          <input type="text" id="c-phone" />
        </div>
      </div>
    </section>
  );
}

export default Confirmation;
