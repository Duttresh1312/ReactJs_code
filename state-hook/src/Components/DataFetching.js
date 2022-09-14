import React, { useEffect, useState } from 'react'
import axios from 'axios'


function DataFetching() {
    const [ post, setPost ] = useState({})
    const [ id, setId ] = useState(1)
    const [ idFromButtonClick, setidFromButtonClick ] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
         .then(res => {console.log(res)
                  setPost(res.data)   
        })
         .catch(err => console.log(err));
    }, [idFromButtonClick])

    const handleclick = () =>{
        setidFromButtonClick(id)
    }
  return (
    <div>
    <input type='text' value={id} onChange={e => {setId(e.target.value)}} ></input>
    <button type='button' onClick={handleclick}>Fetch Data</button>
    <div>{post.title}</div>
         <ul>
            {post.map(post => <li key={post.id}>
                {post.title}
            </li>)},
            {console.log(post.title)}
        </ul> 
    </div>
  )
}

export default DataFetching