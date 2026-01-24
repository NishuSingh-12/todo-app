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

  function toggleTodo(index) {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, done: !todo.done } : todo,
      ),
    );
  }

  function deleteTodo(index) {
    setTodos(todos.filter((_, i) => i !== index));
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
          <li
            key={index}
            onClick={() => toggleTodo(index)}
            style={{ cursor: "pointer" }}
          >
            {todo.done ? "☑️" : ""}
            {todo.text}
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteTodo(index);
              }}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
