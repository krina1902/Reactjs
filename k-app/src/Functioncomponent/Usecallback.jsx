import React, { useCallback, useState } from "react";
import Userchild from "./Userchild";


const Usecallback = () =>{
    const [count,setCount]=useState(0)
    const loadcall = useCallback(function load(){

    },[])
    
    return(
        <>
        <div className="row">
                <div className="col-6"></div>
                <div className="col-6">
                    <h1>Usecallback</h1>
                    <Userchild loading={loadcall} />
                    <h3>{count}</h3>
                    <button onClick={()=>setCount(count+1)}>count</button>
                </div>
            </div>
        </>
    )

}
export default Usecallback;