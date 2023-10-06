const initialstate = ""
const Textchange = (state=initialstate,action) => {
    switch(action.type){
        case "HEADING": return state = "Heading Text";
        
        default: return state

    }

}
export default Textchange;