import Changeno from "./Changeno";
import Textchange from "./Textchange";
import {combineReducers} from "redux";
import Background from "./Background";

const rootreducer = combineReducers({
    Changeno,
    Textchange,
    Background
}
)
export default rootreducer 
