import React, { Component } from 'react'
import { connect } from "react-redux";
import './Map.scss'

import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

import {access} from '../../env.js'

mapboxgl.accessToken = access.accessToken

export class Map extends Component {
  map = null;

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: access.mapStyleLink,
      testMode: true,
    })
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    const isRoute = this.props.isRoute;
    const MyRoute = this.props.MyRoute;

    return  (
      <div className='map-main'> 
       <div className='map' ref={el => this.mapContainer = el} /> 
        { 
          isRoute && drawRoute(this.map, MyRoute)
        }
      </div>
    )
  }
}

export const ConnectedMap = connect(
  (state) => ({isRoute: state.routeReducer.isRoute, MyRoute: state.routeReducer.MyRoute})
)(Map)

const drawRoute = (map, coordinates) => {
  try {
    const mapLayer = map.getLayer('route')

    if(coordinates.length > 0) {
      map.flyTo({
        center: coordinates[0],
        zoom: 15
      })

      if(mapLayer) {
        map.removeLayer('route').removeSource('route')
      }

      map.addLayer({
        id: "route",
        type: "line",
        source: {
          type: "geojson",
          data: {
            type: "Feature",
            properties: {},
            geometry: {
              type: "LineString",
              coordinates
            }
          }
        },
        layout: {
          "line-join": "round",
          "line-cap": "round"
        },
        paint: {
          "line-color": "#ffc617",
          "line-width": 6
        }
      })
    }
  } catch (error) {
    console.log(error)
  }
}