import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const STORAGE_KEY = "todos_v1";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  function handleAdd() {
    const trimmed = text.trim();
    if (!trimmed) return;

    setTodos([...todos, { text: trimmed, done: false }]);
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

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setTodos(JSON.parse(saved));
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos, isLoaded]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
   
      <div className="bg-white p-6 rounded shadow w-full max-w-md">
        <h1 className="text-xl font-bold mb-4">Todo List</h1>

        <TodoInput text={text} setText={setText} onAdd={handleAdd} />

        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </div>
    </div>
  );
}

export default App;
