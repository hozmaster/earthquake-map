/*
 * Copyright (c) 2020.  Olli-Pekka Wallin All rights reserved
 */

import React, {Component} from 'react';
import {TileLayer} from "react-leaflet";

export default class BaseLayer extends Component {
    render() {
        return (
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        )
    }
}