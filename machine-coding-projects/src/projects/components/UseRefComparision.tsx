import {useState, useRef} from 'react'

const UseRefComparision = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);
    const incrementState = ()=>setCount(count+1);       // Re-renders component everytime

    const incrementRef = ()=>{
        countRef.current += 1;
        console.log('Ref count: ', countRef.current);   // Does not re-render component but value is still incremented, so value persists across re-renders
    }

    return (
        <div>
            <h2>useRef vs useState</h2>
            <div>
                <h3>useState:</h3>
                <p>State Count: {count}</p>
                <button onClick={incrementState}>Increment State</button>
            </div>

            <div>
                <h3>useRef:</h3>
                <p>Ref Count: {countRef.current}</p>
                <button onClick={incrementRef}>Increment Ref</button>
            </div>
        </div>
    )
}

export default UseRefComparision