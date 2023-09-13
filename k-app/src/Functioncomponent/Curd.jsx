import React, { useState } from "react";
import "./Curd.css"

const Curd = () => {
    const [name , setName] = useState("")
    const handle  = () => {
        console.log(name);
        setName("")
    }
    return ( 
        <>
        <div className="form">
        <input type="text" value={name} onChange={(e)=> setName(e.target.value)}></input>
        <button onClick={handle}>Insert</button>
        </div>
        </>
     );
}
 
export default Curd;