import React from "react";
import { Component } from "react";

class Childcompo extends Component {

    render() { 
        return (
            <>
            <p>Childcompo</p>
            <p>{this.props.children}</p>
            
            </>
        );
    }
}
 
export default Childcompo;