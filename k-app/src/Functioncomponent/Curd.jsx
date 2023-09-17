import React, { useState } from "react";
import "./Curd.css"

const Curd = () => {
    const [name , setName] = useState("")
    const[list , setList] = useState([])
    const[show , setShow] = useState(false)
    const [edit , setEdit] = useState("")
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
    const handleedit = (i) => {
        console.log("k");
        setName(list[i])
        setShow(true)
    }
    const update = (i) => {
        list.splice(edit,1,name)
        setShow(false)
        setEdit(i)
    
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
            {!show ? <h1>{val}</h1> : <input type="text" value={name} onChange={(e)=> setName(e.target.value)}></input>
            }
            <button className="edit" onClick={() => handleedit(i)}>Edit</button>
            <button className="del" onClick={() => handledel(i)}>Delete</button>
            <button onClick={() => update(i)}>Update</button>

            </div>
            )

        }
        </>
     );
}
 
export default Curd;