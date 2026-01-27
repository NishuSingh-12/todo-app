function TodoInput({ text, setText, onAdd }) {
  return (
    <div className="flex gap-2 mb-4">
      <input
        className="flex-1 border px-2 py-1 rounded"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onAdd();
        }}
        placeholder="Enter todo"
      />
      <button className="bg-blue-500 text-white px-3 rounded" onClick={onAdd}>
        Add
      </button>
    </div>
  );
}

export default TodoInput;
