import React, { useEffect, useState } from "react";
import useCustomhook from "./useCustomhook";

const Compotwocustom = () => {
    const [count,setCount] = useState(0)

    // useEffect(()=>{
    //     document.title = `Count ${count}`
    // },[count])

    useCustomhook(count)

    return ( 
        <>
        <h4>compotwo</h4>
        <button onClick={()=>setCount(count+1)}>Count:{count}</button>
        </>
     );
}
 
export default Compotwocustom;