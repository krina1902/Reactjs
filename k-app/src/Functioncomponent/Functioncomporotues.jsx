import React from "react";
import { Routes,Route } from "react-router-dom";
import Functioncompomenu from "./Functioncompomenu";
import Functioncompointro from "./Functioncompointro";
import Usestate from "./Usestate";

const Functioncomporoutes = () =>{
        return(
            <>
            <Routes>
                <Route path="/" element={<Functioncompomenu />}>
                    <Route path="/functioncompointro" element={<Functioncompointro />}/>
                    <Route path="/usestate" element={<Usestate />}/>

                </Route>
            </Routes>
            </>
        )
    }
export default Functioncomporoutes;