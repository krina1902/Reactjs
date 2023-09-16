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
    const handledel = (index) => {
        // console.log("k");
        console.log(index);
        list.splice(index,1)
        setList([...list])
    }
    return ( 
        <>
        <div className="form">
        <input type="text" value={name} onChange={(e)=> setName(e.target.value)}></input>
        <button onClick={handle}>Insert</button>
        </div>
        {
            list.map((val,i)=>
            <div className="form">
            <h1>{val}</h1>
            <button className="edit">Edit</button>
            <button className="del" onClick={() => handledel(i)}>Delete</button>
            </div>
            )

        }
        </>
     );
}
 
export default Curd;