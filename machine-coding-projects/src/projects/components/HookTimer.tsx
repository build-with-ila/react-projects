import {useState, useEffect} from 'react'

const HookTimer = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);

        //Cleanup function: Clear interval before unmount or re-run
        return () =>{
            clearInterval(interval);
            console.log('Interval cleared');
        };
    }, []);         // Run effect only on mount
  return (
    <p>Seconds Elapsed: {seconds}</p>
  )
}

export default HookTimer