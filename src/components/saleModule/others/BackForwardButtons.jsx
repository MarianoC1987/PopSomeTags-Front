import "./others.css";

function BackForwardButtons({ backBt, forwardBt }) {
  return (
    <aside className="back-forward">
      <button name="back" onClick={backBt}>
        Volver
      </button>
      <button name="forward" onClick={forwardBt}>
        Siguiente
      </button>
    </aside>
  );
}

export default BackForwardButtons;
