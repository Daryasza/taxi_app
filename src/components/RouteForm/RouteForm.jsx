import React, { useState } from "react"
import { connect } from "react-redux"
import { get_address, get_route } from '../../app/actions'
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import business from '../../assets/business.png'
import standard from '../../assets/standard.png'
import premium from '../../assets/premium.png'
import './RouteForm.scss'

export function RouteForm(props) {
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const [from, setFrom] = useState()
  const [to, setTo] = useState()

  const toggleClick = (e) => {
    e.preventDefault()

    function getSiblings(el){
        let siblings = []
        let current = el.parentNode.firstChild
        
        while(current) { 
            if (current.nodeType === 1 && current !== el) {
                siblings.push(current)
            }
            current = current.nextSibling
        }
        return siblings
    }

    const selected = e.target.matches('li') ? e.target : e.target.parentNode
    const siblings =  getSiblings(selected)

    selected.classList.add('tariff__item--active')
    siblings.forEach(element => {
      element.classList.remove('tariff__item--active')
    })
  }

  const onSubmit = (data) => {
    const {from, to} = data
    dispatch(get_route(from, to))
  }

  const selectOnClick = () => {
    props.get_address()
  }

  const selectOptions = () => {
    const MyAdresses = props.MyAdresses
    return MyAdresses.map(val => ({label: val.toString(), value: val.toString(), id: val.toString()}))
  }

  const selectFromOptions = () => selectOptions().filter(address => address.value !== {to} ? address : "")
  const selectToOptions = () => selectOptions().filter(address => address.value !== {from} ? address : "")

  const selectOnChangeFrom = (e) => setFrom(e.target.value)
  const selectOnChangeTo = (e) => setTo(e.target.value)

  return (
    <div className="routeForm">
      <form className="routeForm__form" id="routeForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="routeForm__selectors">
          <select role="selectFrom" className="routeForm__select " onClick={selectOnClick} {...register("from")} onChange={(e)=> selectOnChangeFrom(e)}>
            <option value="" selected disabled>Откуда</option>
            {selectFromOptions().map((option) => (
              <option key={option.id} value={option.value}>{option.label}</option>
            ))}
          </select>
          <select className="routeForm__select routeForm__select--last" onClick={selectOnClick} {...register("to")} onChange={(e)=> selectOnChangeTo(e)}>
            <option value="" selected disabled>Куда</option>
            {selectToOptions().map((option) => (
              <option key={option.id} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
        <div className="tariffs">
          <ul className="tariff__list">
            <li className="tariff__item tariff__item--active" 
                onClick={(e) => toggleClick(e)}>

              <div className="tariff__title">Стандарт</div>
              <div className="tariff__price-title">Cтоимость</div>
              <div className="tariff__price">150 ₽</div>
              <img src={standard} alt="standard"/>
            </li>
            <li className="tariff__item" 
                onClick={(e) => toggleClick(e)}>

              <div className="tariff__title">Премиум</div>
              <div className="tariff__price-title">Cтоимость</div>
              <div className="tariff__price">250 ₽</div>
              <img src={premium} className="img-premium" alt="premium"/>
            </li>
            <li className="tariff__item" 
                onClick={(e) => toggleClick(e)}>

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

export const ConnectedRouteForm = connect(
  (state) => ({isAddress: state.addressReducer.isAddress, MyAdresses: state.addressReducer.MyAdresses}),
  {get_address, get_route}
)(RouteForm)
