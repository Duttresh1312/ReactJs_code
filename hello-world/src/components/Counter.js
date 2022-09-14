import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    increment() {
        // this.setState({
        //     count: this.state.count + 1
        // }, () => { console.log('Call Back Value', this.state.count); })

        this.setState((pstate) => ({
            count: pstate.count + 1
        })) 
        console.log(this.state.count);
    }

    incrementfive(){
        this.increment();
         this.increment();
         this.increment();
         this.increment();
         this.increment();
    }

    render() {
        return (
            <div>
                <div>
                    Count - {this.state.count} </div>
                <button onClick={() => this.incrementfive()}>Increment</button>

            </div>
        )
    }
}

export default Counter
