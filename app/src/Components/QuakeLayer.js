/*
 * Copyright (c) 2019.  Olli-Pekka Wallin All rights reserved
 */

import * as L from "leaflet";

import {marker} from "leaflet/dist/leaflet-src.esm";

let quakeMarkerLayer = {};

quakeMarkerLayer.OSM = L.LayerGroup.extend({

    options: {},

    quake_markers: [],

    initialize: function initialize(options) {

        const t_options = L.setOptions(this, options);
        L.LayerGroup.prototype.initialize.call(this, t_options);

    },

    onAdd: function onAdd(map) {
        L.LayerGroup.prototype.onAdd.call(this, map);
    },

    onRemove: function onRemove(map) {
        L.LayerGroup.prototype.onRemove.call(this, map);
    }

});

quakeMarkerLayer.osm = function (opts) {
    return new quakeMarkerLayer.OSM(opts);
};

export default quakeMarkerLayer;