import React, { useState } from "react";

const TodoInput = ({addTodo}) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown =(e) =>{
    if(e.key === 'Enter' && text.trim() !== ''){
        addTodo(text);
        setText('')
    }
  }
  return (
    <input
      type="text"
      placeholder="Add a new todo here..."
      value={text}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default TodoInput;
