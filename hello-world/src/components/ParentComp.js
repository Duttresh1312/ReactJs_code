import React, { Component } from 'react'
import ChildComp from './ChildComp'
 class ParentComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parentname : 'Parent'
        }
        
        this.Parentgreet = this.Parentgreet.bind(this)
        
    }
    
    Parentgreet(childname){
        alert(`Hello  ${this.state.parentname} from ${childname}`)
      
    }
    
    render() {
        return (
            <div>
                <ChildComp greethandler={this.Parentgreet} />
            </div>
        )
    }
}

export default ParentComp
