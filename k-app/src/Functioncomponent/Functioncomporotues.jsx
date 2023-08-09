import React from "react";
import { Routes,Route } from "react-router-dom";
import Functioncompomenu from "./Functioncompomenu";
import Functioncompointro from "./Functioncompointro";
import Usestate from "./Usestate";
import Userprops from "./Userprops";
import Useeffect from "./Useeffect";
import Uselayouteffect from "./Uselayouteffect";
import Usememo from "./Usememo";
import Usecallback from "./Usecallback";

const Functioncomporoutes = () =>{
        return(
            <>
            <Routes>
                <Route path="/" element={<Functioncompomenu />}>
                    <Route path="/functioncompointro" element={<Functioncompointro />}/>
                    <Route path="/usestate" element={<Usestate />}/>
                    <Route path="/userprops" element={<Userprops />}/>
                    <Route path="/useeffect" element={<Useeffect />}/>
                    <Route path="/uselayouteffect" element={<Uselayouteffect />}/>
                    <Route path="/usememo" element={<Usememo />}/>
                    <Route path="/usecallback" element={<Usecallback />}/>





                </Route>
            </Routes>
            </>
        )
    }
export default Functioncomporoutes;