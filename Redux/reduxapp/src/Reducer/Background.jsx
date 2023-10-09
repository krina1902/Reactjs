

const Background = (state={initialstate: false},action) => {
    switch(action.type){
        case "BACKGROUND": return {...state,initialstate : !state.initialstate}
    
    
        
        default: return state

    }

}
export default Background;