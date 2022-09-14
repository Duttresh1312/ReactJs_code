import React, { useMemo, useState } from 'react'

function Counter() {
    const [counterOne, setcounterOne] = useState(0)
    const [counterTwo, setcounterTwo] = useState(0)

    const incrementOne = () => {
        return setcounterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        setcounterTwo(counterTwo + 1)
    }
   
    const isEven = useMemo( () => {
        let i;
        while (i < 2000000000000000) i++
        return counterOne % 2 === 0
    },[counterOne])
    

    return (
        <div>
            <div>
                <button onClick={incrementOne}>Count A - {counterOne}</button>
                <span>{isEven? 'Even' : 'Odd'}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>Count B - {counterTwo}</button>
            </div>
        </div>
    )
}

export default Counter