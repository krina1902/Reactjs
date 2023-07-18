import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Classcompomenu from "./Classcompomenu";
import Classcompointro from "./Classcompointro";

class Classcomporoutes extends Component{
    render(){
        return(
            <Routes>
                <Route path="/" element={<Classcompomenu />}>
                    <Route path="classcompointro" element={<Classcompointro />}/>

                </Route>
            </Routes>
        )
    }
}
export default Classcomporoutes;