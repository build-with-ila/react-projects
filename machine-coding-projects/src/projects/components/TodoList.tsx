import React from 'react'

const TodoList = ({todos, handleEdit, handleDelete}) => {
  return (
    <ul className="allTodos">
        {
            todos.map((t)=>(                        
                <li className="singleTodo">
                    <span className="todoText">{t.todo}</span>
                    <button className="button" onClick={()=>handleEdit(t.id)}>Edit</button>
                    <button className="button" onClick={()=>handleDelete(t.id)}>Delete</button>
                </li>
            ))
        }
    </ul>
  )
}

export default TodoList