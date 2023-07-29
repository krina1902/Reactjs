import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";

class Classcompomenu extends Component{
    render(){
        return(
            <>
            <ul>
                <li><Link to="classcompointro">Classcompointro</Link></li>
                <li><Link to="classcompojsx">Classcompojsx</Link></li>
                <li><Link to="classcompoprops">Classcompoprops</Link></li>
                <li><Link to="classcompostate">Classcompostate</Link></li>
                <li><Link to="classcompostatelife">Classcompostatelife</Link></li>
                <li><Link to="classconditionrendering">Classconditionrendering</Link></li>
                <li><Link to="classcompouncontrolled">Classcompouncontrolled</Link></li>
                <li><Link to="classcompocontrolled">Classcompocontrolled</Link></li>
                <li><Link to="classlistsandkeys">Class lists and keys</Link></li>
            </ul>
            <Outlet></Outlet>
            </>
        )
    }
}
export default Classcompomenu;