import React from 'react'

function MemoComp({name}) {
    console.log('MemoComp Rendering');
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp)
