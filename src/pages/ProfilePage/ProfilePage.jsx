import React, { Component } from "react"
import {bool, func} from 'prop-types'

import { Link } from "react-router-dom"

import { connect } from "react-redux"
import { sendcard } from "../../app/actions"

import Header from "../../components/Header/Header"

import './ProfilePage.scss'
import map from '../../assets/map.svg'
import logoMin from '../../assets/logoMin.svg'
import cardChip from '../../assets/cardChip.svg'
import MCIcon from '../../assets/MCIcon.svg'

export class ProfilePage extends Component {
  state = { name: "", card: "", date: "", cvc: "" }

  static propTypes = {
    isLoggedIn: bool,
    login: func,
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = e => {
    e.preventDefault();
    
    let { name, card, date, cvc } = e.target

    date = date.value.toString().split('-').join('/');

    this.props.sendcard(card.value, date, name.value, cvc.value )
  }

  onInputCard = e => {
    e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
  }

  onInputDate = e => {
    e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/^(.{2})(.{1})(.*)/g, '$1/$2$3').trim();
  }

  render () {
    const {cardAdded} = this.props
  
    return (
      <div className="profile-page">
        <Header />
        <main className="profile-main">
          <div className="profile-wrapper"  style={{backgroundImage: `url(${ map })`}}>

            {cardAdded 
            ? (
              <div className="modal">
                <h1 className="form__title">Профиль</h1>
                <div className="form__subtitle">Платёжные данные обновлены. Теперь вы можете заказывать такси.</div>
                <Link to={`/`} className="payform-btn" >Перейти на карту</Link>
              </div>
              )

            : (
              <form className="payform"  onSubmit={this.handleSubmit}>
                <h1 className="form__title">Профиль</h1>
                <div className="form__subtitle">Ввeдите платежные данные</div>
                <div className="payform__main">
                  <div className="payform-leftcol">
                    <label className="payform__input">
                      <div className="payformInput__name">Имя владельца</div>
                      <input
                        placeholder="Иван Иванов"
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        autoComplete="username"
                        required
                      />
                    </label>
                    <label className="payform__input">
                      <div className="payformInput__name">Номер карты</div>
                      <input
                        maxLength="19" 
                        placeholder="5545  2300  3432  4521"
                        type="text"
                        name="card"
                        value={this.state.card}
                        onChange={this.handleChange}
                        onInput={this.onInputCard}
                        required
                      />
                    </label>
                    <div className="payform__input-oneline">
                    <label className="payform__input payform__input--oneline">
                      <div className="payformInput__name">MM/YYYY</div>
                      <input
                        placeholder="05/2025"
                        maxLength="7"
                        type="text"
                        name="date"
                        value={this.state.date}
                        onChange={this.handleChange}
                        onInput={this.onInputDate}
                        required
                      />
                    </label>
                    <label className="payform__input payform__input--oneline">
                      <div className="payformInput__name">CVC</div>
                      <input
                        placeholder="667"
                        type="text"
                        name="cvc"
                        value={this.state.cvc}
                        onChange={this.handleChange}
                        autoComplete="username"
                        required
                      />
                    </label>
                    </div>
                  </div>      
                  <div className="payform-rightcol">
                    <div className="card">
                      <div className="card__topline">
                        <img src={logoMin} className="small-logo" alt="logMin"></img>
                        <div className="card__mounth">{this.state.date}</div>
                      </div>
                      <div className="card__number">{this.state.card}</div>
                      <div className="card__footline">
                        <img src={cardChip} className="card__chip" alt="card-chip"></img>
                        <img src={MCIcon} className="card__logo" alt="card-logo"></img>
                      </div>
                    </div>
                  </div>
                </div>
                <input type="submit" className="payform-btn" value='Сохранить'/>
              </form>
              )
            }
          </div>
        </main>
      </div>
    )
  }
}

export const WithAuthProfilePage = connect((state => ({cardAdded: state.cardReducer.cardAdded})), {sendcard})(ProfilePage)