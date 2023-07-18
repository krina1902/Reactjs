import React, { Suspense } from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Help from './Help';
import Header from './Cm-cop/Header';
import Product from "./Product";
import Example from "./Example";
const Classcomporoutes = React.lazy(()=>import("./Classcomponent/Classcomporotues"))
const Functioncomporoutes = React.lazy(()=>import("./Functioncomponent/Functioncomporotues"))




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
        path:"/example" ,
        element:<><Header /><Example /></>,
        children:[
            {
                path:"classcomponent/*",
                element:<><Suspense fallback={<h1>Loading....</h1>}><Classcomporoutes /></Suspense></>
            },
            {
                path:"functioncomponent/*",
                element:<><Suspense fallback={<h1>Loading....</h1>}><Functioncomporoutes/></Suspense></>
            }
        ]
    },
    {
        path:"/help" ,
        element:<><Header /><Help /></>
    }
    
])

export default Mainrouter;