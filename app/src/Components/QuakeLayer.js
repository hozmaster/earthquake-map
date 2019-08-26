/*
 * Copyright (c) 2019.  Olli-Pekka Wallin All rights reserved
 */
import 'leaflet/dist/leaflet.css';
import * as L from "leaflet";

let QuakeLayer = {};


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

QuakeLayer.OSM = L.TileLayer.extend({

    options: {
        minZoom: 2,
        maxZoom: 19,
    },
    
    initialize: function initialize(options) {
        options = L.setOptions(this, options);

        options.tileSize = 256;

        const path =
            "/{z}/{x}/{y}.png";
        const tileServer = "{s}.tile.openstreetmap.org";
        const tileUrl = "https://" + tileServer + path;

        L.TileLayer.prototype.initialize.call(this, tileUrl, options);

        this._attributionText = "";
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

    onClick: function onClick (event) {
        console.log (event);
    },
    
    onAdd: function onAdd(map) {
        L.TileLayer.prototype.onAdd.call(this, map);

        const attributions = [
            '<a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
        ];
        const attributionText = "© " + attributions.join(", ") + ". ";
        if (attributionText !== this._attributionText) {
            map.attributionControl.removeAttribution(this._attributionText);
            map.attributionControl.addAttribution(
                (this._attributionText = attributionText)
            );
        }

        map.on('click', this.onClick);

    },

    onRemove: function onRemove(map) {
        L.TileLayer.prototype.onRemove.call(this, map);

        L.TileLayer.prototype.onRemove.call(this, map);
        this._map.attributionControl.removeAttribution(this._attributionText);
        this._map.off("moveend zoomend resetview", this._findCopyrightBBox, this);
    }
});

QuakeLayer.osm = function (opts) {
    return new QuakeLayer.OSM(opts);
};

export default QuakeLayer;