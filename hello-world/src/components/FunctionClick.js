import React from 'react'

function FunctionClick() {
    function Clickhandler()
       { console.log('Button Clicked');}
       
    return (
        <div>
            <button onClick={Clickhandler}>Click</button>
        </div>
    )
}

export default FunctionClick
