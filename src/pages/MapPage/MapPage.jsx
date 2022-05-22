import React, { Component } from "react"
import {bool, func} from 'prop-types'
import Header from "../../components/Header/Header"
import {Map} from "../../components/Map/Map"
import './MapPage.scss'
import { withAuth } from '../../AuthContext/AuthContext'

export class MapPage extends Component {
  static propTypes = {
    navigateTo: func,
    isLoggedIn: bool,
    login: func,
    logout: func,
  }
  
  render () {
    const { navigateTo } = this.props

    return (
      <div className="mapPage">
        <Header navigateTo={navigateTo} />
          <div className="map"><Map></Map></div>
      </div>
    )
  }
}

export const WithAuthMapPage = withAuth(MapPage) 