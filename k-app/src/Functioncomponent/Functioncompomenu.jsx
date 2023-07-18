import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";

class Functioncompomenu extends Component{
    render(){
        return(
            <>
            <div className="container">
                <div className="row">
                    <div className="col-6"></div>
                    <div className="col-6">
                    <ul>
                        <li><Link to="functioncompointro">Function Compo Intro</Link></li>
                    </ul>
                    </div>
                </div>
            </div>
            <Outlet></Outlet>
            </>
            
        )
    }
}
export default Functioncompomenu;