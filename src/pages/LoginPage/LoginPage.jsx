import React, { PureComponent } from "react"

import { Link, Navigate } from "react-router-dom";

import { connect } from "react-redux";
import { authenticate } from "../../app/actions";

import './LoginPage.scss'
import map from '../../assets/map.svg'
import logo from '../../assets/logo.svg'


export class LoginPage extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { email: "", password: "" }
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = async (e) => {
    e.preventDefault();
    
    const { email, password } = e.target

    this.props.authenticate(email.value, password.value)
  }

  render () {
    const {isLoggedIn} = this.props
    
    return (
      <div className="wrapper">

        {isLoggedIn && (
          <Navigate to="/" replace={true} />
        )}

        <div className="left-col">
          <img className='logo' src={logo} alt='logo'/>
        </div>
        
        <div className="right-col" style={{backgroundImage: `url(${ map })`}}>
          <div className="form-wrapper">
            <form className="form" onSubmit={this.handleSubmit}>
              <div className="container">
                <h1 className="form__title">Войти:</h1>
                <label className="form__input input">
                  <div className="input__name">Email:</div>
                  <input
                    placeholder="mail@mail.ru"
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    autoComplete="username"
                    required
                  />
                </label>
                <label className="form__input input">
                  <div className="input__name">Пароль:</div>
                  <input
                    placeholder="************"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
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
        </div>
      </div>
    ) 
  }
}

export const WithAuthLoginPage = connect(
  (state) => ({isLoggedIn: state.authReducer.isLoggedIn}),
  {authenticate}
)(LoginPage)

