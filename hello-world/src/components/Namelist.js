import React from 'react'
import Person from './Person'

function Namelist() {
    const names= ['bruce','clark','diana','bruce']
    const persons = [
        {
            id: 1,
            name : 'Bruce',
            age: 25,
            skill: 'React'
        },
        {
            id: 2,
            name : 'Clark',
            age: 21,
            skill: 'C++'
        },
        {
            id: 3,
            name : 'Diana',
            age: 28,
            skill: 'Vue'
        }
    ]
    const namelist = names.map((name, index) => <h2 key={index}>{index} {name} </h2>)
    return <div>{namelist}</div>
}

export default Namelist
