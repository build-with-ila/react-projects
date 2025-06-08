import {useState, useEffect} from 'react'
import HookExample from './HookExample'
import HookTimer from './HookTimer'

const UseEffectHookTutorialWithCleanUp = () => {
    const [toggle, setToggle] = useState(true);
    
    useEffect(()=>{
        console.log('rerendered');

        // Clean Up function: runs when our component is unmounted
        return ()=> {};

    },[]);     //dependency array

    return (
        <div>
            <h2>Example of UseEffect Hook With CleanUp function</h2>
            { toggle && <HookExample /> }
            <button onClick={()=>setToggle(!toggle)}>Toggle</button>

            { toggle && <HookTimer /> }
            <button onClick={()=>setToggle(!toggle)}>Toggle</button>
        </div>
    )
}

export default UseEffectHookTutorialWithCleanUp