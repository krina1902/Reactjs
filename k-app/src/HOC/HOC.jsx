import React from "react";
import { Component } from "react";
import Clickcounter from "./Clickcounter";

const Updatecounter = Originalcomponent => {
    class Newcompo extends Component {
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
                <Originalcomponent increment={this.increment} count={this.state.count} />
                </>
            );
        }
    }
     
    return Newcompo
}
export default Updatecounter;