import React, { Component } from 'react'

import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

import {access} from '../../env.js'


mapboxgl.accessToken = access.accessToken

export class Map extends Component {
  map = null

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: access.mapStyleLink,
      testMode: true,
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return <div className='map' ref={el => this.mapContainer = el} />;
  }
}

