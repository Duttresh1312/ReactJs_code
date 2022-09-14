import React,{ useState } from 'react'

function HookCounter2() {
    const intialconut = 0;
    const [ count, setCount] = useState(intialconut)
  return (
    <div>
    Count: {count}
        <button onClick={() => setCount(intialconut)}>reset</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
    </div>
  )
}

export default HookCounter2