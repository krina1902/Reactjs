import React, { useRef } from "react";

const Useref = () => {
    const input = useRef(null)

    const inputfunction = () => {
        console.log(input);
        // input.current.value=100
        input.current.focus()
        input.current.style.color="red"
    }
    return ( 
        <>
         <div className="row">
                <div className="col-6"></div>
                <div className="col-6">
        <h1>Useref</h1>
        <input type="text" ref={input}></input>
        <button onClick={inputfunction}>update</button>
        </div>
        </div>
        </>
     );
}
 
export default Useref;