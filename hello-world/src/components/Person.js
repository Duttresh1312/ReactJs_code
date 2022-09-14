import React from 'react'

function Person({person}) {
    return (
        <div>
             <h2>I am {person.name} i am {person.age} years old. my skill is {person.skill}. </h2>
        </div>
    )
}

export default Person
