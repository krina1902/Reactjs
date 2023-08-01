import React from "react";
import { Component } from "react";
import Updatecounter from "./HOC";

class Clickcounter extends Component {
    
    render() { 
        const {count,increment} = this.props
        return (
            <>
            <p>Clickcounter</p>
            <button onClick={increment}>{count}</button>
            </>
        );
    }

}
export default Updatecounter(Clickcounter);