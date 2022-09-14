import React from 'react'
import {connect} from 'react-redux'
import { buycake, buyIceCream } from '../Redux'
function ItemContainer(props) {
  return (
    <div>Item - {props.item}
    <button onClick={props.buyItem}>Buy Items</button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? 
    state.cake.numOfCakes 
    :state.icecream.numOfIceCreams

    return{
        item: itemState,
    }
}

const mapDispatchToProps = (dispatch, ownProps ) => {
  const dispatchfunction = ownProps.cake ?
  () => dispatch(buycake()) : 
  () => dispatch(buyIceCream())

  return {
    buyItem: dispatchfunction
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)