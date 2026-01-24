import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  function handleAdd() {
    const trimmed = text.trim();
    if (!trimmed) return;

    const newTodos = { text: trimmed, done: false };
    setTodos([...todos, newTodos]);
    setText("");
  }
  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.done ? "☑️" : ""}
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
