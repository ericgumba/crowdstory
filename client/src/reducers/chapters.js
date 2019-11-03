import * as types from '../constants/ActionTypes'


export default function chapter(state = [], action){ 

    switch (action.type){ 
        case types.ADD_PARAGRAPH: 
            let t = [...state, action.text] 
            return [
                ...state,  
                    action.text 
            ] 
        default: 
            return state
    } 
}