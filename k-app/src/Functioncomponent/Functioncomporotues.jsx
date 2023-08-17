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
import Context from "./Context";
import Usecontext from "./Usecontext";
import Usereducer from "./Usereducer";

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
                    <Route path="/context" element={<Context />}/>
                    <Route path="/usecontext" element={<Usecontext />}/>
                    <Route path="/usereducer" element={<Usereducer />}/>
                </Route>
            </Routes>
            </>
        )
    }
export default Functioncomporoutes;