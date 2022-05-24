import React, { Component } from "react"
import {bool, func} from 'prop-types'
import './LoginPage.scss'
import map from '../../assets/map.svg'
import logo from '../../assets/logo.svg'
// import Header from '../../components/Header/Header'
import { withAuth } from "../../AuthContext/AuthContext"

export class LoginPage extends Component {
  static propTypes = {
    navigateTo: func,
    isLoggedIn: bool,
    login: func,
    logout: func,
  }

  constructor(props) {
    super(props)
    this.state = { email: "", password: "" };
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = e.target
    const { navigateTo } = this.props

    await this.props.login(email.value, password.value)
    navigateTo('map')
  }

  render () {
    const { navigateTo } = this.props

    return (
      <div className="wrapper">
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
                  />
                </label>
                <div className="form__forgottenPass-wrapper">
                  <button type="button" className="form__forgottenPass link" onClick={() => navigateTo('signup')}>Забыли пароль?</button>
                </div>
                <input type="submit" className="submit" value='Войти' id='enter'/>
              </div>
            </form>
            <div className="new-user"> Новый пользователь? <button type="button" className="link" onClick={() => navigateTo('signup')}>Регистрация</button></div>
          </div>
        </div>
      </div>
    ) 
  }
}

export const WithAuthLoginPage = withAuth(LoginPage)

