/*
 * Copyright (c) 2019.  Olli-Pekka Wallin All rights reserved
 */

import React,{ Component } from 'react';

import QuakeListing from "./QuakeListing";

class Quakes extends Component {
    constructor(props) {
        super(props);
        this.state = {quakes: []};
    }
    componentDidMount() {
        fetch('http://localhost:3007/quakes')
            .then(data => data.json())
            .then((data) => { this.setState({ quakes: data }) });
    }
    render() {
        return < QuakeListing quakes={this.state.quakes} />;
    }
}

export default Quakes;