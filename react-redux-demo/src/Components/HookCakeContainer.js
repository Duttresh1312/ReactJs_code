import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buycake } from '../Redux'

function HookCakeContainer() {
    const numOfCakes = useSelector(state=> state.cake.numOfCakes)
    const dispatch = useDispatch()
  return (
    <div><h2>Number of Cake - {numOfCakes}</h2>
    <button onClick={()=> dispatch(buycake())}>Buy cake</button> </div>
  )
}
export default HookCakeContainer


