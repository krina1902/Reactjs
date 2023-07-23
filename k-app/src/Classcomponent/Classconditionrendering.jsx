import React from "react";
import { Component } from "react";

class Classconditionrendering extends Component {
    constructor(){
        super()
        this.state={
            islogin : true
        }   
    } 
    render() {
            // if (this.state.islogin){
            // return <><h1>True Event</h1></>}
            // else{
            //     return <><h1>False Event</h1></>

        //    return(this.state.islogin) ? <><h1>True Event</h1></> : <><h1>False Event</h1></>

        // let msg
        // if (this.state.islogin){
        // msg = <><h1>True Event</h1></>}
        // else{
        // msg = <><h1>False Event</h1></>
        //     }
        // return msg

        return (this.state.islogin) && <><h1>True Event</h1></>
        }
    }
export default Classconditionrendering;