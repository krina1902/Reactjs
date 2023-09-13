import React from "react";
import { useEffect } from "react";

function useCustomhook (count){
    
    return(
        
    useEffect(()=>{
        document.title = `Count ${count}`
    },[count])

)}
export default useCustomhook;