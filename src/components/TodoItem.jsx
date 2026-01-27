function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="flex justify-between items-center border-b py-1">
      <span
        onClick={onToggle}
        className={`cursor-pointer ${todo.done ? "line-through text-gray-400" : ""}`}
      >
        {todo.text}
      </span>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
        className="text-red-500 text-sm"
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
