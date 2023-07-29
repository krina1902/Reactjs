import React from "react";
import { Component } from "react";
import Stateliftingparent from "./Stateliftingparent";

class Stateliftingchild extends Component {
    constructor(props){
        super(props)
        this.state = props
    }
    clickone=(data)=>{
        console.log(data);
        this.setState({
            data:data
        })
    }
    
    render() { 
        return (
            <>
            <h1>Stateliftingchild</h1>
            <Stateliftingparent clickme={this.clickone} />
            </>
        );
    }
}
 
export default Stateliftingchild;