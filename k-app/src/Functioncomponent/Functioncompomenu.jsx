import React from "react";
import { Link, Outlet } from "react-router-dom";

const Functioncompomenu = () =>{
        return(
            <>
            <div className="container">
                <div className="row">
                    <div className="col-6"></div>
                    <div className="col-6">
                    <ul>
                        <li><Link to="functioncompointro">Function Compo Intro</Link></li>
                        <li><Link to="usestate">Usestate</Link></li>
                        <li><Link to="userprops">Userprops</Link></li>
                        <li><Link to="useeffect">Useeffect</Link></li>
                        <li><Link to="uselayouteffect">Uselayouteffect</Link></li>
                        <li><Link to="usememo">Usememo</Link></li>
                        <li><Link to="usecallback">Usecallback</Link></li>
                        <li><Link to="context">Context</Link></li>
                        <li><Link to="usecontext">UseContext</Link></li>
                        <li><Link to="usereducer">Usereducer</Link></li>
                        <li><Link to="api">API</Link></li>
                        <li><Link to="useref">Useref</Link></li>
                        <li><Link to="apipost">Apipost</Link></li>
                        <li><Link to="custom">Custom</Link></li>
                        <li><Link to="curd">Crud</Link></li>
                        <li><Link to="apiaxios">Axios</Link></li>





                    </ul>
                    </div>
                </div>
            </div>
            <Outlet></Outlet>
            </>
            
        )
        }
export default Functioncompomenu;