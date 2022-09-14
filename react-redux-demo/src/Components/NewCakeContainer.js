import React,{ useState } from 'react'
import { connect } from 'react-redux'
import { buycake } from '../Redux'

 function CakeContainer(props) {
     const [ number,setNumber ] = useState(1);
  return (  
    <div>
    <h2>Number of Cake - {props.numOfCakes}</h2>
    <input type='text' value={number} onChange={e => setNumber(e.target.value)}></input>
    <button onClick={()=> props.buycake(number)}>Buy {number} cake</button> 
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
        buycake: (number) => dispatch(buycake(number)) 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer) 