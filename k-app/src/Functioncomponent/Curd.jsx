import React, { useState } from "react";
import "./Curd.css"

const Curd = () => {
    const [name , setName] = useState("")
    const[list , setList] = useState([])
    const handle  = () => {
        // console.log(name);
        if(name.length !== 0){
        setList(newdata => [...newdata,name])
        setName("")
        }
    }
    console.log(list);
    return ( 
        <>
        <div className="form">
        <input type="text" value={name} onChange={(e)=> setName(e.target.value)}></input>
        <button onClick={handle}>Insert</button>
        </div>
        {
            list.map((val)=>
            <div className="form">
            <h1>{val}</h1>
            <button className="edit">Edit</button>
            <button className="del">Delete</button>
            </div>
            )

        }
        </>
     );
}
 
export default Curd;