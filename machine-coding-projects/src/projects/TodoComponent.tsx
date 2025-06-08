import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './styles.css';

const TodoComponent: React.FC = () => {
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
            <TodoForm handleSubmit={handleSubmit} todo={todo} setTodo={setTodo} editId={editId} />
            <TodoList todos={todos} handleEdit={handleEdit} handleDelete={handleDelete} />
        </div>
    </div>
  )
}

export default TodoComponent