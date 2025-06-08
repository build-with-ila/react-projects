// Custom Hooks are very powerful as they have access to all the resources of React, be it useState, useEffect, etc
// When we fetch data from an API, we need 3 things majorly:
// 1) Ability to store its data
// 2) Show the Loading indicators
// 3) Show the Errors

import {useState} from 'react';

const useFetch = (cb: React.FC) => {
    const [data, setData] = useState(undefined);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    const fn = async (...args: unknown[])=>{
        setLoading(true);
        setError(null);

        try{
            const response = await cb(...args);
            setData(response);
            setError(null);
        }
        catch(error) {
            setError(error);
            window.alert(error.message);
        }
        finally {
            setLoading(false);
        }
    };
    return {loading, data, error, fn}
}

export default useFetch;