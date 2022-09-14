import React, { Component } from 'react'

export class ClassClick extends Component {
    classhandler(){
        console.log('Ahhh ..u Clicked Hard');
    }
    render() {
        return (
            <div>
                <button onClick={this.classhandler}>Click Me</button>
            </div>
        )
    }
}

export default ClassClick
