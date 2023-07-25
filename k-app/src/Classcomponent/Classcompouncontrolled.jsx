import React from "react";
import { Component } from "react";
class Classcompouncontrolled extends Component {
    constructor(){
        super()
        this.inputref=React.createRef()
    }
    login = (event) => {
        event.preventDefault()
        console.log(this.inputref.current.value);}
    render() { 
        return (
            <>
            <form onSubmit={(event)=>this.login(event)}>
                <input type="text" ref={this.inputref} />
                <input type="submit" value='login'/>
            </form>
            </>
        );
    }
}
 
export default Classcompouncontrolled;