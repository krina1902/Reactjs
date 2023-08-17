import React, { createContext } from "react";
import Compone from "./Compone";
const Lname = createContext()
const Usecontext = () => {

    const user = {
        name : 'krina',
        age : 25
    }
    return ( 
        <>
        <Lname.Provider value={user.name + user.age}>
        <Compone/>
        </Lname.Provider>
        </>
     );
}
 
export default Usecontext;
export {Lname}