import React from "react";
import { useReducer } from "react";
import Reducer from "./Reducer";


const initialstate = 0

const Usereducer = () => {
    <Reducer />
    const [state, dispatch] = useReducer(Reducer , initialstate)
    return ( 
        <>
        <div className="row">
                <div className="col-6"></div>
                <div className="col-6">
        <h1>{state}</h1>
        <button onClick={() => dispatch({type : "Increment"})}>+</button>
        <button onClick={() => dispatch({type : "Decrement"})}>-</button>
        <button onClick={() => dispatch({type : "Multiplication"})}>*</button>
        <button onClick={() => dispatch({type : "Division"})}>/</button>
        </div>
        </div>
        </>
     );
}
 
export default Usereducer;