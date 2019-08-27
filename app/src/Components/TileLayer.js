/*
 * Copyright (c) 2019.  Olli-Pekka Wallin All rights reserved
 */
import 'leaflet/dist/leaflet.css';
import * as L from "leaflet";
import {TileLayer} from "leaflet/dist/leaflet-src.esm";

let tileMapLayer = {};

tileMapLayer.OSM = L.TileLayer.extend({

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

    // appendMarker: function appnedMarker(quake) {
    //
    //     let marker = L.circleMarker(quake.point, {
    //         radius: quake.properties.mag * 2,
    //         fillColor: "#616161", color: "#616161"
    //     });
    //
    //     this.addLayer(marker);
    //
    // },
    //
    // addMarkers: function addmarkers(quakes) {
    //     this.clearLayers();
    //     this.map_markers = [];
    //     quakes.forEach(quake => {
    //         this.appendMarker(quake);
    //     });
    // },

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

TileLayer.osm = function (opts) {
    return new tileMapLayer.OSM(opts);
};

export default TileLayer;