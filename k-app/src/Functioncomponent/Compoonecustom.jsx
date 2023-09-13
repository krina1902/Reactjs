import React, { useEffect, useState } from "react";
import useCustomhook from "./useCustomhook";

const Compoonecustom = () => {
    const [count,setCount] = useState(0)

    // useEffect(()=>{
    //     document.title = `Count ${count}`
    // },[count])

    useCustomhook(count)

    return ( 
        <>
        <h4>compoone</h4>
        <button onClick={()=>setCount(count+1)}>Count:{count}</button>
        </>
     );
}
 
export default Compoonecustom;