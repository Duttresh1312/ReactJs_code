import { BUY_ICECREAM } from "./IceCreamTypes";

const initialstate = {
    numOfIceCreams: 20
}

 const IcecreamReducer = (state = initialstate, action) => {
    switch(action.type){
        case BUY_ICECREAM: return{
            numOfIceCreams: state.numOfIceCreams - 1
        }

        default: return state
    }
}

export default IcecreamReducer