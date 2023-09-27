import React, { useState, useEffect } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import ResetButton from "./components/ResetButton";

function App() {
  const [todos, setTodos] = useState(() => {
    // Initialize todos from localStorage or an empty array if there's no data
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    return storedTodos || [];
  });

  // Save TODOs to localStorage whenever the todos state changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  const addTodo = (text) => {
    const newTodo = { text, completed: false, id: Date.now() };
    setTodos([newTodo, ...todos]);
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: true } : todo
    );
    const sortedTodos = updatedTodos.sort((a, b) => {
      if (a.completed && !b.completed) {
        return 1;
      }
      if (!a.completed && b.completed) {
        return -1;
      }
      return 0;
    });
    setTodos(sortedTodos)
  };
  
  const resetTodos = () =>{
    setTodos([]);
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoInput addTodo={addTodo}/>
      <TodoList todos={todos} completeTodo={completeTodo} />
      <ResetButton resetTodos={resetTodos} />
    </div>
  );
}

export default App;
