/*
 * Copyright (c) 2019.  Olli-Pekka Wallin All rights reserved
*/

import React from 'react';
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
import TileLayer from "./TileLayer";
import quakeMarkerLayer from "./QuakeLayer"

import quakesData from '../assets/quakes'
import {Container} from "semantic-ui-react";

const style = {
    width: '100%',
    height: '100vh'
};

const baseMapLayer = TileLayer.osm ({ });
const quakeLayer = quakeMarkerLayer.osm({});

const mapParams = {
    center : [0.00, 0.00],
    zoomControl: false,
    zoom: 7,
    layers: [baseMapLayer, quakeLayer]
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
        this.map = L.map('map', mapParams);

        // to be ability disable/enable control
        const baseMaps = {
            'map': baseMapLayer
        };

        const overlayMaps = {
            "Quakes 4+": quakeLayer
        };

        // L.control.layers(baseMaps,overlayMaps).addTo(this.map);

        // we do want a zoom control
        L.control
            .zoom({
                position: 'topright'
            })
        .addTo(this.map);

        quakeLayer.insertMarker(quakesData[0]);

    }
    
    render() {
        return(
            <div>
                <div id="map" style={style}> </div>
            </div>
        )
    }
}

export default Map;