import {useState, useEffect, useRef} from 'react';

const UseRefHook = () => {
    const [inputValue, setInputValue] = useState('');

    const inputRef = useRef(null);

    useEffect(()=>{
        //console.log('here', inputRef.current);
        inputRef.current && inputRef.current.focus();
    }, []);

    return (
        <div>
            <h2>Example 2 of useState Hook</h2>
            <input type="text" placeholder="Type something..." value={inputValue} onChange={(e)=>setInputValue(e.target.value)}  ref={inputRef} />
            <p>You Typed: <strong>{inputValue}</strong> </p>
        </div>
    )
}

export default UseRefHook