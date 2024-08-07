import "./modal.scss";

function Modal({ children, prop }) {
  return (
    <>
      <div className="modal-wrapper">{children}</div>
      <div className="modal-bg" onClick={() => prop(false)}></div>
    </>
  );
}

export default Modal;
