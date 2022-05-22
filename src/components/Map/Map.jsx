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

    // this.map.scrollZoom.sdisable()
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    const style = {
      width: '100%',
      height: '100%'
    };

    return <div className='map' style={style} ref={el => this.mapContainer = el} />;
  }
}

