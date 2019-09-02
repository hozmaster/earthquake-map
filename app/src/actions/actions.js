/*
 * Copyright (c) 2019.  Olli-Pekka Wallin All rights reserved
 */

export const GET_QUAKES = 'GET_QUAKES'
export const ADD_NOTE = 'ADD_NOTE'

export function getQuakes(text) {
    return { type: GET_QUAKES, text }
}

export function addNote(text) {
    return { type: ADD_NOTE, text }
}
