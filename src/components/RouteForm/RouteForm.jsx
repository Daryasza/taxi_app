import React, { Component } from "react"
import './RouteForm.scss'

import business from '../../assets/business.png'
import standard from '../../assets/standard.png'
import premium from '../../assets/premium.png'

import { connect } from "react-redux";
import { get_address, get_route } from '../../app/actions'

export class RouteForm extends Component {
  constructor(props) {
    super(props)
    this.toggleClick = this.toggleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.selectOnClick = this.selectOnClick.bind(this)
    this.selectOnChange = this.selectOnChange.bind(this)
    this.selectOptions = this.selectOptions.bind(this)
    this.selectFromOptions = this.selectFromOptions.bind(this)
    this.selectToOptions = this.selectToOptions.bind(this)
    this.state = {
      from: '', to: ''
    }
  }

  toggleClick = (e) => {
    e.preventDefault()

    function getChildren(n, currentEl){
      let siblings = []

      for ( ; n; n = n.nextSibling ) 
        if ( n.nodeType === 1 && n !== currentEl) {
          siblings.push( n )
        }
      return siblings
    }

    const selected = e.target.matches('li') ? e.target : e.target.parentNode
    const siblings =  getChildren(selected.parentNode.firstChild, selected)

    selected.classList.add('tariff__item--active')
    siblings.forEach(element => {
      element.classList.remove('tariff__item--active')
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {from, to}  = this.state
    this.props.get_route(from, to)
  }

  selectOnClick = () => {
    this.props.get_address()
  }

  selectOnChange = (e) => this.setState({ [e.target.name]: e.target.value })

  selectOptions = () => {
    const MyAdresses = this.props.MyAdresses

    return MyAdresses.map(val => ({label: val.toString(), value: val.toString(), id: val.toString()}))
  }

  selectFromOptions = () => this.selectOptions().filter(address => address.value !== this.state.to ? address : "")

  selectToOptions = () => this.selectOptions().filter(address => address.value !== this.state.from ? address : "")

  render () {

    return (
      <div className="routeForm">
        <form className="routeForm__form" id="routeForm" onSubmit={(e) => this.handleSubmit(e)}>
          <div className="routeForm__selectors">
            <select name="from" className="routeForm__select " onClick={this.selectOnClick} onChange={(e) => this.selectOnChange(e)}>
              <option value="" selected disabled>Откуда</option>
              {this.selectFromOptions().map((option) => (
                <option key={option.id} value={option.value}>{option.label}</option>
              ))}
            </select>
            <select name="to" className="routeForm__select routeForm__select--last" onClick={this.selectOnClick} onChange={(e) => this.selectOnChange(e)}>
              <option value="" selected disabled>Куда</option>
              {this.selectToOptions().map((option) => (
                <option key={option.id} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          <div className="tariffs">
            <ul className="tariff__list">
              <li className="tariff__item tariff__item--active" 
                  onClick={(e) => this.toggleClick(e)}>

                <div className="tariff__title">Стандарт</div>
                <div className="tariff__price-title">Cтоимость</div>
                <div className="tariff__price">150 ₽</div>
                <img src={standard} alt="standard"/>
              </li>
              <li className="tariff__item" 
                  onClick={(e) => this.toggleClick(e)}>

                <div className="tariff__title">Премиум</div>
                <div className="tariff__price-title">Cтоимость</div>
                <div className="tariff__price">250 ₽</div>
                <img src={premium} className="img-premium" alt="premium"/>
              </li>
              <li className="tariff__item" 
                  onClick={(e) => this.toggleClick(e)}>

                <div className="tariff__title">Бизнес</div>
                <div className="tariff__price-title">Cтоимость</div>
                <div className="tariff__price">300 ₽</div>
                <img src={business} alt="business"></img>
              </li>
            </ul>
            <input type='submit' className="routeForm-btn" value='Заказать'></input>
          </div>
        </form>
      </div>
    ) 
  }
}

export const ConnectedRouteForm = connect(
  (state) => ({isAddress: state.addressReducer.isAddress, MyAdresses: state.addressReducer.MyAdresses}),
  {get_address, get_route}
)(RouteForm)
