/*
 * Copyright (c) 2019.  Olli-Pekka Wallin All rights reserved
 */

import * as L from "leaflet";

let markerLayers = {};


// {
//     "geometry": {
//     "$reql_type$": "GEOMETRY",
//         "coordinates": [
//         102.2613,
//         -5.9329
//     ],
//         "type": "Point"
// },
//     "id": "us600056d8",
//     "properties": {
//     "alert": null,
//         "cdi": null,
//         "code": "600056d8",
//         "detail": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us600056d8.geojson",
//         "dmin": 1.708,
//         "felt": null,
//         "gap": 98,
//         "ids": ",us600056d8,",
//         "mag": 4.5,
//         "magType": "mb",
//         "mmi": null,
//         "net": "us",
//         "nst": null,
//         "place": "193km WSW of Kuripan, Indonesia",
//         "rms": 1.04,
//         "sig": 312,
//         "sources": ",us,",
//         "status": "reviewed",
//         "time": 1566031867182,
//         "title": "M 4.5 - 193km WSW of Kuripan, Indonesia",
//         "tsunami": 0,
//         "type": "earthquake",
//         "types": ",geoserve,origin,phase-data,",
//         "tz": 420,
//         "updated": 1566043476040,
//         "url": "https://earthquake.usgs.gov/earthquakes/eventpage/us600056d8"
// },
//     "type": "Feature"
// },

markerLayers.OSM = L.LayerGroup.extend({

    options: {},
    quekes: [],

    initialize: function initialize(options) {

    },

    appendMarker: function appnedMarker(quake) {
        // let marker = L.marker(item.latlng, {
        //     title: quake.name,
        //     draggable: false,
        //     riseOnHover: true
        // }).bindPopup("<b>" + item.title + "</b><br>" + item.name);
    },
    
    addMarkers: function addmarkers(quakes) {
        this.clearLayers();
        this.map_markers = [];
        quakes.forEach(quake => {
            this.appendMarker(quake);
        });
    },
});

markerLayers.osm = function (opts) {
    return new markerLayers.OSM(opts);
};

export default markerLayers;