import React, { Component } from "react"
import { connect } from "react-redux";

import {ConnectedHeader} from "../../components/Header/Header"
import { ConnectedRouteForm } from "../../components/RouteForm/RouteForm"
import { ConnectedMap} from "../../components/Map/Map"
import { MapModal } from "../../components/MapModal/MapModal"

import './MapPage.scss'


export class MapPage extends Component {
    render () {
    const {cardAdded} = this.props

    return (
      <div className="mapPage">
        <ConnectedHeader />
        <div className="map"><ConnectedMap/></div>
        { 
          cardAdded
          ? <ConnectedRouteForm/>
          : <MapModal/>
        }
      </div>
    )
  }
}

export const ConnectedMapPage = connect(
  (state) => ({cardAdded: state.cardReducer.cardAdded}))(MapPage)