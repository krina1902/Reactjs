import React, { useContext } from "react";
import { Lname } from "./Usecontext";

const Compthree = () => {
    const a = useContext(Lname)
    return ( 
        <>
         <div className="row">
            <div className="col-6"></div>
                <div className="col-6">
                <h1>Usecontext</h1>
                 <h1>{a}</h1>
            </div>
        </div>
        
        
        </>
     );
}
 
export default Compthree;