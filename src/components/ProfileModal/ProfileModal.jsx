import React, { Component } from "react"
import { Link } from "react-router-dom"

import './ProfileModal.scss'


export class ProfileModal extends Component {

  render () {  
    return (
      <div className="modal">
        <h1 className="form__title">Профиль</h1>
        <div className="form__subtitle">Платёжные данные обновлены. Теперь вы можете заказывать такси.</div>
        <Link to={`/`} className="payform-btn" >Перейти на карту</Link>
      </div>
    )
  }
}
