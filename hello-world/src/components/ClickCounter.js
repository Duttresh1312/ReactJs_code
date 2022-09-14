import React, { Component } from 'react'
import WithCounter from './WithCounter'
export class ClickCounter extends Component {
    render() {
        const { count, incrementCount } = this.props
        return <button onClick={incrementCount}>{this.props.name} Clicked {count} Times</button>
    }
}

export default WithCounter(ClickCounter, 5)
