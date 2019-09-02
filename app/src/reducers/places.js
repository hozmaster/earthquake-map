/*
 * Copyright (c) 2019.  Olli-Pekka Wallin All rights reserved
 */

const places = (state = [], action) => {
    switch (action.type) {
        case 'GET_QUAKES':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        default:
            return state
    }
}

export default places