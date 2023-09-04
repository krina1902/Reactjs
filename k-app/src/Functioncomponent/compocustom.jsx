import React, { useEffect, useState } from "react";

const Compocustom = () => {
    const [count,setCount] = useState(0)

    useEffect(()=>{
        document.title = `Count ${count}`
    },[count])
    return ( 
        <>
        <h4>compoone</h4>
        <button onClick={()=>setCount(count+1)}>Count:{count}</button>
        </>
     );
}
 
export default Compocustom;