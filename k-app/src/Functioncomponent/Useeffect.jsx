import React from "react";
import { useEffect,useState } from "react";


const Useeffect = () => {
    const [count,setCount]=useState(0)
    const [data,setData]=useState(0)
    useEffect(()=>{
        console.log("countdata");
    },[count])
    return ( 
        <div className="row">
                <div className="col-6"></div>
                <div className="col-6">
                    <h1>Useeffect</h1>
                    <button onClick={()=>setCount(count+1)}>{count}</button>
                    <button onClick={()=>setData(data-1)}>{data}</button>
                       
                </div>
        </div>
     );
}
 
export default Useeffect;