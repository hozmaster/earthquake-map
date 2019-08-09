/*
 * Copyright (c) 2019.  Olli-Pekka Wallin All rights reserved
 */

import React,{ Component } from 'react';

import './QuekeListing'

class Quakes extends Component {
    constructor(props) {
        super(props);
        this.state = {books: []};
    }
    componentDidMount() {
        fetch('http://localhost:8090/quakes')
            .then(data => data.json())
            .then((data) => { this.setState({ books: data }) });
    }
    render() {
        return <QuakeListing books={this.state.quakes} />;
    }
}

export default Quakes;