import {useState, useEffect} from 'react'


const UseEffectHookTutorialBasic = () => {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState('');
    
    useEffect(()=>{
            console.log('rerendered');
    
        },[count]);     //dependency array

    return (
        
        <div>
            <h2>Example 1 of useState Hook</h2>
            <p>You clicked {count} times.</p>
            
            <button onClick={()=>setCount(count+1)}>Increment</button>

            <h2>Example 2 of useState Hook</h2>
            <input type="text" placeholder="Type something..." onChange={(e)=>setInputValue(e.target.value)} />
            <p>You Typed: {inputValue} </p>
        </div>
    )
}

export default UseEffectHookTutorialBasic