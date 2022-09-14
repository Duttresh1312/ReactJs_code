import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: ' ',
            comment: ' ',
            topic: ' ',
        }
    }

    handleusernamechange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentschange = event => {
        this.setState({
            comment: event.target.value
        })
    }

    handleTopicchange = event => {
        this.setState({
            topic: event.target.value
        })
    }

    handlesubmit = event => {
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handlesubmit}>
                <div>
                    <label> Username </label>
                    <input type="text" value={this.state.username} onChange={this.handleusernamechange} />
                </div>
                <div>
                <label>Comment</label>
                    <textarea value={this.state.comment} onChange={this.handleCommentschange}></textarea>
                </div>
                <div>
                <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handleTopicchange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
             <button type='submit'>Submit</button>

            </form>
        )
    }
}

export default Form
