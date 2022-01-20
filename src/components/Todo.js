import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

const Todo = (props) => {
  const [showModal, setShowModal] = useState(false);
  const deleteHandler = () => {
    setShowModal(true);
  };
  const closeModalHandler = () => {
    setShowModal(false)
  }
  return (
    <li className="todo-item">
      <h2>{props.text}</h2>
      <button className="btn" onClick={deleteHandler}>
        Delete
      </button>
      {showModal && <Modal onClick={closeModalHandler} />}
      {showModal && <Backdrop onClick={closeModalHandler} />}
    </li>
  );
};

export default Todo;
