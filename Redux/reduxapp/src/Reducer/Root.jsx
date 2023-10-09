import Changeno from "./Changeno";
import Textchange from "./Textchange";
import {combineReducers} from "redux";
import Background from "./Background";
import Changecolor from "./Changecolor";
import { bgkey } from "./Changecolor";


const rootreducer = combineReducers({
    Changeno,
    Textchange,
    Background,
    bgstore : Changecolor,
}
)
export default rootreducer 
