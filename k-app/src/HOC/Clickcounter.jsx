import React from "react";
import { Component } from "react";

class Clickcounter extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    increment=()=>{
        this.setState({count:this.state.count + 1})
    }
    
    render() { 
        return (
            <>
            <p>Clickcounter</p>
            <button onClick={this.increment}>{this.state.count}</button>
            </>
        );
    }
}
 
export default Clickcounter;