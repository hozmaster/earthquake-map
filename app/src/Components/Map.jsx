/*
 * Copyright (c) 2019.  Olli-Pekka Wallin All rights reserved
*/

import React from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const style = {
    width: '100%',
    height: '100vh'
};

class Map extends React.Component {
    componentDidMount() {
        // create map
        this.map = L.map('map', {
            center: [49.8419, 24.0315],
            zoom: 16,
            layers: [
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }),
            ]
        });
        // this.marker = L.marker(this.props.markerPosition).addTo(this.map);
    }

    render() {
        return <div id="map" style={style}/>
    }
}

export default Map;