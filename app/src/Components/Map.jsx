/*
 * Copyright (c) 2019.  Olli-Pekka Wallin All rights reserved
*/

import React from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import QuakerLayer from "./QuakeLayer";

const style = {
    width: '100%',
    height: '100vh'
};

let quakesLayer = QuakerLayer.osm ({});


const mapParams = {
    center : [0.00, 0.00],
    zoomControl: true,
    zoom: 7,
    layers: [
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }),
        quakesLayer
    ]
};

class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = {quakes: []};
    }

    componentDidMount() {

        const overlays = {
            "quakes": quakesLayer
        };

        fetch('http://localhost:3007/quakes')
            .then(data => data.json())
            .then((data) => { this.setState({ quakes: data }) });

        // create map
        this.map = L.map('map',  mapParams);

        // L.control.layers(quakesLayer).addTo(this.map);
        
        // quakes[i].marker = L.circleMarker(quakes[i].point, {
        //     radius: quakes[i].properties.mag * 2,
        //     fillColor: "#616161", color: "#616161"
        // });

    }

    render() {
        return <div id="map" style={style}/>
    }
}

export default Map;