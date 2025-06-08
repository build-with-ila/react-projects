import {useEffect} from 'react'

const HookExample = () => {

    useEffect(()=>{
        console.log('rerendered');

        // Clean Up function: runs when our component is unmounted
        return ()=> console.log('unmounted');
            
    },[]); 

  return (
    <div>HookExample</div>
  )
}

export default HookExample