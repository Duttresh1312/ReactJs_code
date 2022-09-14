import {useState} from 'react'

function useCounter(initialcount = 0, value) {
    const[ count, setCount ] = useState(initialcount);

    const increment = () => {
        setCount(prevCount => prevCount + value)
    }

    const decrement = () => {
        setCount(prevCount => prevCount - value)
    }

    const reset = () => {
        setCount(initialcount)
    }
    
    return [ count, setCount,increment,decrement,reset];
}

export default useCounter