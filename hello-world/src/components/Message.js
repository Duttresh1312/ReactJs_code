import react, { Component } from 'react'

class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: "Welcome Visitor"
        }

    }
    changemessage(){
        this.setState({
      message: "Thanks For Subscribing"
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button color="red" onClick= { () => this.changemessage()}>Subscribe</button>
            </div>
        )
    }
}
export default Message;