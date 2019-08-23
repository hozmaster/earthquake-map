/*
 * Copyright (c) 2019.  Olli-Pekka Wallin All rights reserved
 */

import React from 'react';

const QuakeListing = ({ quakes }) => {
    return <ul>
        {quakes.map(quake => <li key={quake.id}> {quake.id}, {quake.type}</li>)}
    </ul>
};

export default QuakeListing;