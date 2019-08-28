/*
 * Copyright (c) 2019.  Olli-Pekka Wallin All rights reserved
*/

import React, {Component} from 'react';
import Map from './Components/Map';

import './App.css';
import Control from "./Components/Control";

class App extends React.Component {
    render () {
        return (
            <div>
                <Map/>
                <Control/>
            </div>
        );
    }
}

export default App;
