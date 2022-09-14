import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Duttresh'
        }
        console.log('LifecycleA constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log(' lifecycleA getDerivedStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('lifecycleA componentDidMount');
    }

    shouldComponentUpdate(){
        console.log('LifecycleA  shouldComponentUpdate');
        return true
    } 

    getSnapshotBeforeUpdate(){
        console.log('LifecycleA getSnapshotBeforeUpdate');
        return null
    }

    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate');
    }

    changestate = () => {
        this.setState({
            name: 'codeEvolution'
        })
    }

    render() {
        console.log('lifecycleA render');
        return (<div>
            <div>LifecycleA</div>
            <button onClick={this.changestate}>Change State</button>
            <LifecycleB />
        </div>

        )
    }
}

export default LifecycleA
