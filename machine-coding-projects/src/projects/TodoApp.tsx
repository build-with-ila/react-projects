import React, { useState } from 'react';
import './styles.css';

const TodoApp: React.FC = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [editId, setEditId] = useState(0);

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(editId) {
            //const editTodo = todos.find((i)=>i.id === editId);
            const updatedTodos = todos.map((t)=>t.id === editId ? (t = {id: t.id, todo}) : {id: t.id, todo: t.todo});
            setTodos(updatedTodos);
            setEditId(0);
            setTodo('');
            return;
        }

        if(todo) {
            setTodos([{ id: `${todo}-${Date.now()}` , todo }, ...todos]);
            setTodo('');
        }
    }

    const handleDelete = (id)=>{
        const delTodo = todos.filter((t)=> t.id !== id);
        setTodos([...delTodo]);
    }

    const handleEdit = (id)=>{
        const editTodo = todos.find((t)=>t.id === id);
        setTodo(editTodo.todo);
        setEditId(id);
    }

  return (
    <div className="App">
        <div className="container">
        <h1>To Do App</h1>
            <form className="TodoForm" onSubmit={handleSubmit}>
                <input type="text" className="textInput" value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder="Enter a task" />
                <button type="submit" className="button">{editId ? "Edit" : "Go" }</button>
            </form>
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
        </div>
    </div>
  )
}

export default TodoApp