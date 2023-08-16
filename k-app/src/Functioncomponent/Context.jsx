import React, { createContext } from "react";
import Compa from "./Compa";
const Fname = createContext()

const Context = () => {
    return ( 
        <>
        <Fname.Provider value={'Krina'}>
        <Compa />
        </Fname.Provider>
        </>
     );
}
 
export default Context;
export {Fname}