import React from 'react'

function ChildComp(props) {
    return (
        <div>
            <button onClick={() => props.greethandler('child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComp
