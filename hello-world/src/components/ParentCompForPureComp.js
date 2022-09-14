import React, { Component } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentCompForPureComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'DUTT'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'DUTT'
            })
        }, 2000)
    }
    render() {
        console.log('ParentCompForPureComp');
        return (
            <div>
                ParentCompForPureComp
                <MemoComp name={this.state.name} />
                {/* <RegComp name={this.state.name}></RegComp> */}
                {/* <PureComp name={this.state.name}></PureComp> */}
            </div>
        )
    }
}

export default ParentCompForPureComp
