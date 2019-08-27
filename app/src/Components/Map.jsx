/*
 * Copyright (c) 2019.  Olli-Pekka Wallin All rights reserved
*/

import React from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import QuakerLayer from "./QuakeLayer";

import quakesData from '../assets/quakes'

const style = {
    width: '100%',
    height: '100vh'
};

const quakesLayer = QuakerLayer.osm ({
    scheme: 'reduced.day'
});

const mapParams = {
    center : [0.00, 0.00],
    zoomControl: false,
    zoom: 7,
    layers: [
        quakesLayer
    ]
};

class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = {quakes: []};
    }

    componentDidMount() {

        // fetch('http://localhost:3007/quakes')
        //     .then(data => data.json())
        //     .then((data) => { this.setState({ quakes: data }) });
        
        // create map
        this.map = L.map('map',  mapParams);

        const baseMaps = {
            "Quakes": quakesLayer
        };

        L.control.layers(baseMaps).addTo(this.map);

        quakesData.forEach (function (quake, index) {
            console.log (quake);
        });

        // we do want a zoom control
        L.control
            .zoom({
                position: 'topright'
            })
        .addTo(this.map);

    }
    
    render() {
        return <div id="map" style={style}> </div>
    }
}

export default Map;