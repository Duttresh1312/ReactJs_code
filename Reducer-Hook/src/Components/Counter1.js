import React, { useState } from 'react'
import useCounter from '../Hooks/useCounter'

function Counter1() {
   const [count,setCount,increment,decrement,reset] = useCounter(0, 12)
  return (
    <div>
        <h2>Count = {count}</h2>
        <button onClick={increment}>Incremnet</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter1