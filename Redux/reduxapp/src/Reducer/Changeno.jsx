const initialstate = 0
const Changeno = (state=initialstate,action) => {
    switch(action.type){
        case "INCREMENT": return state + 1;
        case "DECREMENT": return state - 1;
        default: return state

    }

}
export default Changeno;