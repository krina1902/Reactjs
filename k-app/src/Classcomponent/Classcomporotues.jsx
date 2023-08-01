import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Classcompomenu from "./Classcompomenu";
import Classcompointro from "./Classcompointro";
import Classcompojsx from "./Classcompojsx";
import Classcompoprops from "./Classcompoprops";
import Classcompostate from "./Classcompostate";
import Classcompostatelife from "./Classcompostatelife";
import Classconditionrendering from "./Classconditionrendering";
import Classcompouncontrolled from "./Classcompouncontrolled";
import Classcompocontrolled from "./Classcompocontrolled";
import ClassListsandKeys from "./ClassListsandKeys";
import Stateliftingchild from "../Statelifting/Stateliftingchild";
import ClassCompotionandInheritance from "./ClassCompotionandInheritance";
import Classhoc from "../HOC/Classhoc";

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
                    <Route path="classconditionrendering" element={<Classconditionrendering />}/>
                    <Route path="classcompouncontrolled" element={<Classcompouncontrolled />}/>
                    <Route path="classcompocontrolled" element={<Classcompocontrolled />}/>
                    <Route path="classlistsandkeys" element={<ClassListsandKeys />}/>
                    <Route path="stateliftingchild" element={<Stateliftingchild/>}/>
                    <Route path="classcompotionandinheritance" element={<ClassCompotionandInheritance/>}/>
                    <Route path="classhoc" element={<Classhoc/>}/>

                    

                </Route>
            </Routes>
        )
    }
}
export default Classcomporoutes;