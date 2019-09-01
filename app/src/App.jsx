/*
 * Copyright (c) 2019.  Olli-Pekka Wallin All rights reserved
*/

import React, {Component} from 'react';
import Map from './Components/Map';

import './App.css';
import Control from "./Components/Control";
import quakesData from './assets/quakes';


class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            quakes: quakesData
        };

    }

    render () {
        return (
            <div>
                <Map/>
                <Control quakes = {this.state.quakes}/>
            </div>
        );
    }
}

export default App;
