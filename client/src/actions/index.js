

import * as types from '../constants/ActionTypes'


export const  addParagraph = (text) => {

    return {
        type: types.ADD_PARAGRAPH,
        text
    }

}