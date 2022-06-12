import React from "react"
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { sign_up } from "../../app/actions";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import './SignUpForm.scss'

export function SignUpForm({ useDispatchHook = useDispatch }) {
  const dispatch = useDispatchHook();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { email, name, password } = data
    const [firstName, secondName] = name.split(' ')
    dispatch(sign_up(email, firstName, secondName, password))
  }

  return (
    <div className="form-wrapper">
      <form className="form form--signup" onSubmit={handleSubmit(onSubmit)}>
        <div className="container">
          <h1 className="form__title">Регистрация</h1>
          <label className="form__input input">
            <div className="input__name">Email*</div>
            <input
              placeholder="mail@mail.ru"
              type="email"
              {...register("email")}
              autoComplete="username"
              required
            />
          </label>
          <label className="form__input input">
            <div className="input__name">Как вас зовут?* <span className="input__name--grey">(имя и фамилия)</span></div>
            <input
              placeholder="Петр Александров"
              type="text"
              {...register("name")}
              required
              pattern="^\S+\s\S+$"
            />
          </label>
          <label className="form__input input">
            <div className="input__name">Придумайте пароль</div>
            <input
              placeholder="************"
              type="password"
              {...register("password")}
              autoComplete="current-password"
              required
            />
          </label>
          <input type="submit" className="submit" value='Зарегистрироваться' />
        </div>
      </form>
      <div className="new-user"> Уже зарегестрированы? 
      <Link to={`/`} className="link">Войти</Link>
      </div>
    </div>
  )
}

export const ConnentedSignUpForm = connect(
  null,
  {sign_up}
)(SignUpForm)
