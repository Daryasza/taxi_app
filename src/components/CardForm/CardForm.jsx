import React, {useState} from "react"
import { connect } from "react-redux"
import { send_card } from "../../app/actions"
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import './CardForm.scss'
import logoMin from '../../assets/logoMin.svg'
import cardChip from '../../assets/cardChip.svg'
import MCIcon from '../../assets/MCIcon.svg'

export function CardForm({ useDispatchHook = useDispatch }) {
  const dispatch = useDispatchHook();
  const { register, handleSubmit } = useForm();
  const [date, setDate] = useState();
  const [card, setCard] = useState();

  const onInputCard = e => {
    e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim()
    setCard(e.target.value)
  }

  const onInputDate = e => {
    e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/^(.{2})(.{1})(.*)/g, '$1/$2$3').trim()
    setDate(e.target.value)
  }
  
  const onSubmit = (data) => {
    const { name, card, date, cvc } = data
    dispatch(send_card(card, date, name, cvc))
  }

  return (
    <form className="payform"  onSubmit={handleSubmit(onSubmit)}>
      <h1 className="form__title">Профиль</h1>
      <div className="form__subtitle">Ввeдите платежные данные</div>
      <div className="payform__main">
        <div className="payform-leftcol">
          <label className="payform__input">
            <div className="payformInput__name">Имя владельца</div>
            <input
              placeholder="Иван Иванов"
              type="text"
              {...register("name")}
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
              {...register("card")}
              onInput={onInputCard}
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
              {...register("date")}
              onInput={onInputDate}
              required
            />
          </label>
          <label className="payform__input payform__input--oneline">
            <div className="payformInput__name">CVC</div>
            <input
              placeholder="667"
              maxLength={3}
              type="text"
              {...register("cvc")}
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
              <div className="card__mounth">{date}</div>
            </div>
            <div className="card__number">{card}</div>
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

export const ConnectedCardForm = connect(
  null,
  {send_card}
)(CardForm)

