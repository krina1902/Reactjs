import React from "react";
import { useState } from "react";

const Usestate = () =>{
    const[count,setState]=useState(1000)
    return(
        <>
        <div className="row">
                <div className="col-6"></div>
                <div className="col-6">
                    <h1>Usestate</h1>
                    <button onClick={()=>(setState(count+1))}>{count}</button>
                </div>
            </div>
        </>
    )

}
export default Usestate;