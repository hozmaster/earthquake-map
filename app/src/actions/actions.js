/*
 * Copyright (c) 2019.  Olli-Pekka Wallin All rights reserved
 */

import quakesData from './../assets/quakes';

export const GET_QUAKES = 'GET_QUAKES'
export const FETCH_QUAKES = 'FETCH_QUAKES'
export const ADD_NOTE = 'ADD_NOTE'

export function getQuakes(text) {
    return { type: GET_QUAKES, text }
}

export const fetch_quakes = payload => ({
    type: FETCH_QUAKES,
    ...payload
})

export function addNote(text) {
    return { type: ADD_NOTE, text }
}
