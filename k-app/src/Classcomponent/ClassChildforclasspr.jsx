import React from "react";
import { Component } from "react";

class ClassChildforclasspr extends Component {
    render() { 
        return (
            <>
            <h3>Class Child For Props</h3>
            <p>{this.props.fname}</p>
            <p>{this.props.lname}</p>

            </>
        );
    }
}
 
export default ClassChildforclasspr;