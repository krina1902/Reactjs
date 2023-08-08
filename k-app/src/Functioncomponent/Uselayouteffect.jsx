import React, { useLayoutEffect } from "react";
import { useEffect } from "react";


const Uselayouteffect = () => {
    useEffect(()=>{
        alert("useeffect");
    })
    useLayoutEffect(()=>{
        alert("layout effect")
    })
   
    return ( 
        <div className="row">
                <div className="col-6"></div>
                <div className="col-6">
                    <h1>Uselayouteffect</h1>
                    
                </div>
        </div>
     );
}
 
export default Uselayouteffect;