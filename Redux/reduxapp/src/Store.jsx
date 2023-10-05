import { createStore } from "redux";
import rootreducer from "./Reducer/Root";

const Store = createStore(rootreducer)

export default Store