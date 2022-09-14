import { combineReducers } from "redux";
import  cakeReducer  from './cake/Cakereducer'
import  IcecreamReducer  from './IceCream/IceCreamreducer'
import  UserReducer  from "./user/UserReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: IcecreamReducer,
    user: UserReducer
})

export default rootReducer