import React from 'react'

const TodoForm = ({handleSubmit, todo, setTodo, editId}) => {
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
        <input type="text" className="textInput" value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder="Enter a task" />
        <button type="submit" className="button">{editId ? "Edit" : "Go" }</button>
    </form>
  )
}

export default TodoForm