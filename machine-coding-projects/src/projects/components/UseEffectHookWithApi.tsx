import {useState, useEffect} from 'react'

interface todoItem {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
}

const UseEffectHookWithApi = () => {

    const [todos, setTodos] = useState<todoItem[]>([]);
    const fetchValue = ()=>{
        const url = 'https://dummyjson.com/todos?limit=5';
        fetch(url).then((res)=>res).then((data)=> data.json()).then((d) => setTodos(d.todos as todoItem[]));
    }
    useEffect(()=>{
        fetchValue();
    },[]); 
    return (
        <div>
            <h2>useEffect Hook With Data Fetching from Api</h2>
            {
                todos.length > 0 && (
                    <ul>
                    {
                        todos.map((t)=> (
                            <li><span>{t.todo}</span></li>
                        ))

                    }
                    </ul>
                )
            }
        </div>
    )
}

export default UseEffectHookWithApi