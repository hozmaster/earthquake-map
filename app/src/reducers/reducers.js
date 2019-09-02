/*
 * Copyright (c) 2019.  Olli-Pekka Wallin All rights reserved
 */

import { combineReducers } from 'redux'

import {
    GET_QUAKES,
    ADD_NOTE
} from '../actions/actions'

function quakesOps(state = [], action) {
    switch (action.type) {
        case GET_QUAKES:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case ADD_NOTE:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]

        default:
            return state
    }
}


const quakesApp = combineReducers({
    quakesOps
});

export default quakesApp