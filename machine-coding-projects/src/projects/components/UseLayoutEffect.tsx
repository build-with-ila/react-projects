import {useState, useEffect, useLayoutEffect} from 'react'

const UseLayoutEffect = () => {
    const [effectValue, setEffectValue] = useState('initial');
    const [layoutEffectValue, setLayoutEffectValue] = useState('initial');

    useEffect(()=>{
        console.log('useEffect');
        setEffectValue('updated');
    },[]);          // Runs after the first render

    useLayoutEffect(()=>{
        console.log('useLayoutEffect');
        setLayoutEffectValue('updated');
    },[]);          // Runs after the first render but before Browser paints
    return (
        <div>
            <p>useEffect Value: {effectValue}</p>
            <p>useLayoutEffect Value: {layoutEffectValue}</p>
        </div>
    )
}

export default UseLayoutEffect