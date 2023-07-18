import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";

class Classcompomenu extends Component{
    render(){
        return(
            <>
            <ul>
                <li><Link to="classcompointro">Classcompointro</Link></li>
            </ul>
            <Outlet></Outlet>
            </>
        )
    }
}
export default Classcompomenu;