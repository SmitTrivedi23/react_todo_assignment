import React from "react";
import TodoCard from "./TodoCard";

const TodoList = ({ todos, completeTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} completeTodo={completeTodo} />
      ))}
    </div>
  );
};

export default TodoList;
