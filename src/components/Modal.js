const Modal = () => {
  return (
    <div className="modal">
      <h2>Are you sure?</h2>
      <div className="actions">
        <button className="btn btn--alt">Cancel</button>
        <button className="btn">Confirm</button>
      </div>
    </div>
  );
};

export default Modal;
