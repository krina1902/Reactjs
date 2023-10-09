import Changeno from "./Changeno";
import Textchange from "./Textchange";
import {combineReducers} from "redux";
import Background from "./Background";
import Changecolor from "./Changecolor";

const rootreducer = combineReducers({
    Changeno,
    Textchange,
    Background,
    Changecolor
}
)
export default rootreducer 
