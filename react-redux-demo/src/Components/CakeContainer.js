import React from 'react'
import { connect } from 'react-redux'
import { buycake } from '../Redux'

 function CakeContainer(props) {
  return (  
    <div>
    <h2>Number of Cake - {props.numOfCakes}</h2>
    <button onClick={props.buycake}>Buy cake</button> 
    </div>
  )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buycake: () => dispatch(buycake()) 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer) 