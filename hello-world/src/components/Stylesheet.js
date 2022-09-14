import React from 'react'
import './mystyle.css'
function Stylesheet() {
    const heading={
        color:"blue",
        fontSize:'72px'
    }
    return (
        <div>
            <h2  style={heading}>  HELLOOO </h2>
        </div>
    )
}

export default Stylesheet
