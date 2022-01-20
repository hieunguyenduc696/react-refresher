import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import Todo from "./components/Todo";

function App() {
  return <div className="todo">
    <header className="header">Todo App</header>
    <div className="card">
      <input type="text" className="add-todo" placeholder="Enter title"/>
      <button className="btn">Add</button>
    </div>
    <ul className="todo-list">
      <Todo text='Learn React' />
      <Todo text='Master React' />
      <Todo text='Explore the full React feature' />
      <Modal />
      <Backdrop />
    </ul>
  </div>;     
}

export default App;
