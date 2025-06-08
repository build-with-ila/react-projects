import {useState, useEffect} from 'react';
import useFetch from '../hooks/use-fetch'

const DataFetcher = ()=>{
    const [data, setData] = useState([]);

    const fetchPosts = () => 
        fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json());
    const {data, error, loading, fn} = useFetch(fetchPosts);
    

    useEffect(()=>{
        fn();
    },[]);

    return (
        <div>
            <h1>Posts</h1>
            {
                loading ? "Loading..." : 
                (
                    <ul>
                        {
                            data.map((post) => (
                                <li key={post.id}>{post.title}</li>
                            ))
                        }
                    </ul>
                )
            }
        </div>
    )
}

export default DataFetcher;