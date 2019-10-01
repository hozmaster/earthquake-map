/*
 * Copyright (c) 2019.  Olli-Pekka Wallin All rights reserved
*/

import quakesData from './../assets/quakes';

import { combineReducers } from 'redux'

import {
    GET_QUAKES,
    FETCH_QUAKES,
    ADD_NOTE,
} from '../actions/actions'

const initialState = {
    quakes: quakesData
};

function quakesOps(state = initialState, action) {

    switch (action.type) {
        case GET_QUAKES:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case FETCH_QUAKES:
            return {
                ...state,
                quakesResults: action.results,
                isFetching: false
            }
        // case ADD_NOTE:
        //     return [
        //         ...state,
        //         {
        //             text: action.text,
        //             completed: false
        //         }
        //     ]
        default:
            return state
    }
}


const quakesApp = combineReducers({
    quakesOps
});

export default quakesApp