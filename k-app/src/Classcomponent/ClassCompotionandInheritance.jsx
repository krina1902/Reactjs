import React from "react";
import { Component } from "react";
import Childcompo from "./Childcompo";

class ClassCompotionandInheritance extends Component {
    
    render() { 
        return (
            <>
            <h1>ClassCompotionandInheritance</h1>
            <Childcompo>
                <h2>Krina</h2>
                <h3>Antala</h3>
            </Childcompo>
            </>
        );
    }
}
 
export default ClassCompotionandInheritance;