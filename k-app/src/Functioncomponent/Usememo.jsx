import React, { useMemo, useState } from "react";



const Usememo = () => {
    const [count,setCount]=useState(1)
    const [item,setItem]=useState(0)
    const countwithmemo = useMemo(function count1(){
        console.log("count1");

        return count-2
    },[count])
   
    return ( 
        <div className="row">
                <div className="col-6"></div>
                <div className="col-6">
                    <h1>Usememo</h1>
                    <h3>{count}</h3>
                    <h3>{item}</h3>
                    <h3>{countwithmemo}</h3>
                    <button onClick={()=> setCount(count*2)}>count</button>
                    <button onClick={()=> setItem(item+2)}>item</button>

                    
                </div>
        </div>
     );
}
 
export default Usememo;