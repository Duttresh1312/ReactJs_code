import react from 'react'
// function Greet(){
//     return <h1>Hello Dutt</h1>
// }

const Greet = ({name,heroname}) => {
    return (
        <div>
    <h1>Hello {name} a.k.a {heroname}</h1>
    </div>
    )
}
export default Greet;