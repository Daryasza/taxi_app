import React from "react"
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { authenticate } from "../../app/actions";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import './LoginForm.scss'


export function LoginForm(props) {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  
  const onSubmit = (data) => {
    const { email, password } = data
    dispatch(authenticate(email, password))
  }

  return (
    <div className="form-wrapper">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="container">
          <h1 className="form__title">Войти:</h1>
          <label className="form__input input">
            <div className="input__name">Email:</div>
            <input
              placeholder="mail@mail.ru"
              type="email"
              {...register("email")}
              autoComplete="username"
              required
            />
          </label>
          <label className="form__input input">
            <div className="input__name">Пароль:</div>
            <input
              placeholder="************"
              type="password"
              {...register("password")}
              autoComplete="current-password"
              required
            />
          </label> 
          <div className="form__forgottenPass-wrapper">
            <Link to={`/signup`} className="form__forgottenPass link">Забыли пароль?</Link>
          </div>
          <input type="submit" className="submit" value='Войти' id='enter'/> 
        </div>
      </form>
      <div className="new-user"> Новый пользователь? 
        <Link to={`/signup`} className="link">Регистрация</Link>
      </div>
    </div>
  ) 
}

export const ConnectedLoginForm = connect(
  null,
  { authenticate }
)(LoginForm)
