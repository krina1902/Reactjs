import React from "react";

const Reducer = (state,action) => {
    
    if(action.type === "Increment"){
        return state + 1
    }
    if(action.type === "Decrement"){
        return state - 1
    }
    if(action.type === "Multiplication"){
        return state * 10
    }
    if(action.type === "Division"){
        return state / 10
    }
    return state

}
 
export default Reducer;