import React from "react";
import { Component } from "react";

class Stateliftingparent extends Component {

    render() { 
        return (
            <>
            <h2>Stateliftingparent</h2>
            <button onClick={()=>this.props.clickme('krina')}>click</button>
            </>
        );
    }
}
 
export default Stateliftingparent;