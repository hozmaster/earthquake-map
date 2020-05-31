
import React, {Component} from 'react';
import './App.css';
import {Map, Marker, Popup} from "react-leaflet";
import BaseLayer from "./Components/BaseLayer";

// type
// State = {
//     lat: number,
//     lng: number,
//     zoom: number,
// }

const style = {
    width: '100%',
    height: '100vh'
};

//
// const outer = [
//     [50.505, -29.09],
//     [52.505, 29.09],
// ]
// const inner = [
//     [49.505, -2.09],
//     [53.505, 2.09],
// ]

export default class App extends Component {
    state = {
        lat: 51.505,
        lng: -0.09,
        zoom: 13,
        render: true
    }


    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        const position = [this.state.lat, this.state.lng]
        return (
            <Map center={position} zoom={this.state.zoom} style={style}>
                <BaseLayer/>
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br/> Easily customizable.
                    </Popup>
                </Marker>
            </Map>
        )
    }
}

