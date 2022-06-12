import React, { Component } from "react"
import { Link } from "react-router-dom"

import './MapModal.scss'

export class MapModal extends Component {

  render () {  
    return (
      <div className="modal modal--map">
        <h1 className="form__title">Карта</h1>
        <div className="form__subtitle">Платёжные данные не были добавлены. Вы пока не можете вызвать такси. </div>
        <Link to={`/profile`} className="payform-btn" >Перейти в профиль</Link>
      </div>
    )
  }
}
