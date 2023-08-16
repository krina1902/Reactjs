import React from "react";
import { Fname } from "./Context";

const Compc = () => {
    return ( 
        
        <div className="row">
                <div className="col-6"></div>
                <div className="col-6">
        <h1>Context without hook</h1>
        <Fname.Consumer>
            {
            (a) => {
                return <h1>{a} Antala</h1>
            }
            }
        </Fname.Consumer>
        </div>
        </div>
     );
}
 
export default Compc;