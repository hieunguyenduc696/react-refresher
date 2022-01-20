const Todo = (props) => {
  const deleteHandler = () => {
      console.log('Click')
  }
  return (
    <li className="todo-item">
      <h2>{props.text}</h2>
      <button className="btn" onClick={deleteHandler}>Delete</button>
    </li>
  );
};

export default Todo;
