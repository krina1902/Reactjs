const initial = {color: "#ffffff"}
// let randomColor = Math.floor(Math.random() * 16777215).toString(16);

 export const bgkey = "bgstore"
const Changecolor = (state=initial,action) => {
    switch(action.type){
        case "COLOR": return {color: "#" + Math.floor(Math.random() * 16777215).toString(16)} ;
        default: return state

    }

}
export default Changecolor;