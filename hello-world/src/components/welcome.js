import react, {Component} from 'react'

class Welcome extends Component {
    render(){
        const {name,heroname} = this.props
        return <h1>Welcome {name} A.K.A {heroname} </h1>
    }
}
export default Welcome;