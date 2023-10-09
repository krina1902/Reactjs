const initialState = {
    color: 'white'
  }
let randomColor = Math.floor(Math.random() * 16777215).toString(16);
const Changecolor = (state=initialState,action) => {
    switch(action.type){ 
      case "COLOR": return {...state, color:randomColor}
        
        default: return state

    }

}
export default Changecolor;