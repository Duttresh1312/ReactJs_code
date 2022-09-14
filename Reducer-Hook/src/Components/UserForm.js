import React,{ useState } from 'react'
import useInput from '../Hooks/useInput'

function UserForm() {

    const [firstName,bindFirstName,resetFirstName] = useInput('')
    const [lastName,bindLastName,resetLastName] = useInput('')

    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>FirstName</label>
                    <input type='text' {...bindFirstName} />
                </div>
                <div>
                    <label>LastName</label>
                    <input type='text'  {...bindLastName} />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UserForm