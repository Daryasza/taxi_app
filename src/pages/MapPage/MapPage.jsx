import React, { Component } from "react"
import {bool, func} from 'prop-types'

import Header from "../../components/Header/Header"
import {Map} from "../../components/Map/Map"

import './MapPage.scss'

export class MapPage extends Component {
  static propTypes = {
    isLoggedIn: bool,
    login: func,
    logout: func,
  }
  
  render () {
    return (
      <div>
        <div className="mapPage">
          <Header />
          <div className="map"><Map/></div>
        </div>
      </div>
    )
  }
}

export const WithAuthMapPage = (MapPage) 