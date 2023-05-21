import "./others.css";

function BackForwardButtons({ backBt, forwardBt }) {
  return (
    <aside className="back-forward">
      <button onClick={backBt}>Volver</button>
      <button onClick={forwardBt}>Siguiente</button>
    </aside>
  );
}

export default BackForwardButtons;
