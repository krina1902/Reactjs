import React from "react";
import { Component } from "react";
import Updatecounter from "./HOC";

class Hovercounter extends Component {
    
    render() {
        const {count,increment} = this.props 
        return (
            <>
            <p>Hovercounter</p>
            <p onMouseOver={increment}>{count}</p>
            </>
        );
    }
}
 
export default Updatecounter(Hovercounter);