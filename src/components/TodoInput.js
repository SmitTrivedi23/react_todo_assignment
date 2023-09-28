import React, { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleAddTodo = () => {
    if (text.trim() !== "") {
      addTodo(text);
      setText("");
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && text.trim() !== "") {
      addTodo(text);
      setText("");
    }
  };
  return (
    <div className="todo-input-container">
      <input
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button className="add-button" onClick={handleAddTodo}>
        Add
      </button>
    </div>
  );
};

export default TodoInput;
