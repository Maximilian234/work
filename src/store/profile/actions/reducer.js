import { EXAMPLE_ACTION } from "./actions"

const initialState ={
    showName:false,
    name:"Meshcheryakov Maxim"
}

const profileReducer = ( state = initialState, action) => {
    switch(action.type) {
        case EXAMPLE_ACTION:
            console.log(state)
            return {
                ...state,
                showName: !state.showName

            }
            default: 
             return state;
    }
}

export default profileReducer;