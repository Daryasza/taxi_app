import React, { Component } from "react"
import Header from "../../components/Header/Header"
import { ConnectedRouteForm } from "../../components/RouteForm/RouteForm"
import { ConnectedMap} from "../../components/Map/Map"

import { Link } from "react-router-dom";

import { connect } from "react-redux";
import {get_address} from '../../app/actions'

import './MapPage.scss'

export class MapPage extends Component {
  handleClick = () => {
    this.props.get_address()
  }
  
  render () {
    const {cardAdded} = this.props

    return (
      <div className="mapPage">
        <Header />
        <div className="map"><ConnectedMap/></div>
        { 
          cardAdded
          ? <ConnectedRouteForm/>
          : <div className="modal modal--map">
              <h1 className="form__title">Карта</h1>
              <div className="form__subtitle">Платёжные данные не были добавлены. Вы пока не можете вызвать такси. </div>
              <Link to={`/profile`} className="payform-btn" >Перейти в профиль</Link>
            </div>
        }
      </div>
    )
  }
}

export const WithAuthMapPage = connect(
  (state) => ({cardAdded: state.cardReducer.cardAdded}), 
  {get_address}
)(MapPage)