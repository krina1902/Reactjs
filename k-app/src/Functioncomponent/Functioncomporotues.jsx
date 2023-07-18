import React, { Component } from "react";
import { Routes,Route } from "react-router-dom";
import Functioncompomenu from "./Functioncompomenu";
import Functioncompointro from "./Functioncompointro";

class Functioncomporoutes extends Component{
    render(){
        return(
            <>
            <Routes>
                <Route path="/" element={<Functioncompomenu />}>
                    <Route path="/functioncompointro" element={<Functioncompointro />}/>
                </Route>
            </Routes>
            </>
        )
    }
}
export default Functioncomporoutes;