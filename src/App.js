import Todo from "./components/Todo";

function App() {
  return <div className="todo">
    <header className="header">Todo App</header>
    <div className="card">
      <input type="text" className="add-todo" placeholder="Enter title"/>
      <button className="btn">Add</button>
    </div>
    <ul className="todo-list">
      <Todo />
    </ul>
  </div>;     
}

export default App;
