function App() {
  return <div className="todo">
    <header className="header">Todo App</header>
    <div className="card">
      <input type="text" className="add-todo" placeholder="Enter title"/>
      <button className="btn">Add</button>
    </div>
    <ul className="todo-list">
      <li className="todo-item">
        <h2>Title</h2>
        <button className="btn">Delete</button>
      </li>
      <li className="todo-item">
        <h2>Title</h2>
        <button className="btn">Delete</button>
      </li>
      <li className="todo-item">
        <h2>Title</h2>
        <button className="btn">Delete</button>
      </li>
    </ul>
  </div>;     
}

export default App;
