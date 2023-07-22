import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Classcompomenu from "./Classcompomenu";
import Classcompointro from "./Classcompointro";
import Classcompojsx from "./Classcompojsx";
import Classcompoprops from "./Classcompoprops";

class Classcomporoutes extends Component{
    render(){
        return(
            <Routes>
                <Route path="/" element={<Classcompomenu />}>
                    <Route path="classcompointro" element={<Classcompointro />}/>
                    <Route path="classcompojsx" element={<Classcompojsx />}/>
                    <Route path="classcompoprops" element={<Classcompoprops />}/>

                </Route>
            </Routes>
        )
    }
}
export default Classcomporoutes;