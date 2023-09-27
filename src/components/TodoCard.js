import React from 'react'

const TodoCard = ({todo, completeTodo}) => {
  const {text, completed, id} = todo
    return (
    <div className={`todo-card ${completed ? 'completed':''}`}
    onClick={() => completeTodo(id)}>{text}</div>
  )
}

export default TodoCard