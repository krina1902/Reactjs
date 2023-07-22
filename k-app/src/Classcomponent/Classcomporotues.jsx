import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Classcompomenu from "./Classcompomenu";
import Classcompointro from "./Classcompointro";
import Classcompojsx from "./Classcompojsx";
import Classcompoprops from "./Classcompoprops";
import Classcompostate from "./Classcompostate";
import Classcompostatelife from "./Classcompostatelife";

class Classcomporoutes extends Component{
    render(){
        return(
            <Routes>
                <Route path="/" element={<Classcompomenu />}>
                    <Route path="classcompointro" element={<Classcompointro />}/>
                    <Route path="classcompojsx" element={<Classcompojsx />}/>
                    <Route path="classcompoprops" element={<Classcompoprops />}/>
                    <Route path="classcompostate" element={<Classcompostate />}/>
                    <Route path="classcompostatelife" element={<Classcompostatelife />}/>

                    

                </Route>
            </Routes>
        )
    }
}
export default Classcomporoutes;