import React from "react";
import { Component } from "react";
import Clickcounter from "./Clickcounter";

class Classhoc extends Component {
    render() { 
        return (
            <>
            <h1>Higher Order Component</h1>
            <Clickcounter />
            </>
        );
    }
}
 
export default Classhoc;