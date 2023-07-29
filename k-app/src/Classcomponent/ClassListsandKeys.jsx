import React from "react";
import { Component } from "react";

class ClassListsandKeys extends Component {
    constructor(){
        super()
        this.state={
            items : [1,2,3,4,5,6]
        }
    }
    add = () => {
       this.setState({
        items : [7,1,2,3,4,5,6]
       })
    }
    
    render() { 
        const listitems = this.state.items.map((x,index)=><li key={x.toString()}>{x}</li>)
        return (
           
            <>
            <ul>
                {listitems}
            </ul>
            <button onClick={()=>this.add()}>Add-items</button>
            </>
        );
    }
}
 
export default ClassListsandKeys;