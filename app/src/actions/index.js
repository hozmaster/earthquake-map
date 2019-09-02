/*
 * Copyright (c) 2019.  Olli-Pekka Wallin All rights reserved
 */

let nextTodoId = 0

export const getQuakes= text => ({
    type: 'GET_QUAKES',
    id: nextTodoId++,
    text
})

