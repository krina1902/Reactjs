import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Help from './Help';
import Header from './Cm-cop/Header';
import Product from "./Product";



const Mainrouter = createBrowserRouter([
    {
        path:"/" ,
        element:<><Header /></>
    },
    {
        path:"/home" ,
        element:<><Header /><Home /></>
    },
    {
        path:"/about" ,
        element:<><Header /><About /></>
    },
    {
        path:"/product" ,
        element:<><Header /><Product /></>
    },
    {
        path:"/contact" ,
        element:<><Header /><Contact /></>
    },
    {
        path:"/help" ,
        element:<><Header /><Help /></>
    }
])

export default Mainrouter;