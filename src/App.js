import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo.trim(), checked: false }]);
      setNewTodo("");
    }
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleToggle = (index) => {
    const newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="container">
        <h2> Todo list</h2>
        <div className="topBox">
          <input
            type="text"
            value={newTodo}
            placeholder="What is your Task for today"
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button onClick={handleAddTodo} type="submit">
            Add
          </button>
        </div>

        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => handleToggle(index)}
              />
              <span
                style={{
                  marginRight: "10px",
                  textDecoration: todo.checked ? "line-through" : "none",
                }}
              >
                {todo.text}{" "}
              </span>
              <button
                style={{ margin: "5px" }}
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
