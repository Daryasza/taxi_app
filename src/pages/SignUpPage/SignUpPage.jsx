import React, { Component } from "react"
import {bool, func} from 'prop-types'
import './SignUpPage.scss'
import map from '../../assets/map.svg'
import logo from '../../assets/logo.svg'
import Header from '../../components/Header/Header'


class SignUpPage extends Component {
  static propTypes = {
    navigateTo: func,
    isLoggedIn: bool,
    login: func,
    logout: func,
  }

  constructor(props) {
    super(props)
    this.state = { email: "", name: "", password: "" }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render () {
    const { navigateTo } = this.props

    return (
      <div className="wrapper">
      <div className="left-col">
       <img className='logo' src={logo} alt='logo'/>
      </div>
      <Header />
      <div className="right-col" style={{backgroundImage: `url(${ map })`}}>
        <div className="form-wrapper">
          <form className="form form--signup" onSubmit={() => navigateTo('map')}>
            <div className="container">
              <h1 className="form__title">Регистрация</h1>
              <label className="form__input input">
                <div className="input__name">Email*</div>
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
                <div className="input__name">Как вас зовут?*</div>
                <input
                  placeholder="Петр Александрович"
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  autoComplete="username"
                />
              </label>
              <label className="form__input input">
                <div className="input__name">Придумайте пароль</div>
                <input
                  placeholder="************"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  autoComplete="current-password"
                />
              </label>
              <input type="submit" className="submit" value='Зарегистрироваться' />
            </div>
          </form>
          <div className="new-user"> Уже зарегестрированы? <button className="link" onClick={(e) => navigateTo('login')}>Войти</button></div>
        </div>
      </div>
    </div>
    )
  }
}

export default SignUpPage;
