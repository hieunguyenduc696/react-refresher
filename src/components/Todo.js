const Todo = (props) => {
  return (
    <li className="todo-item">
      <h2>{props.text}</h2>
      <button className="btn">Delete</button>
    </li>
  );
};

export default Todo;
