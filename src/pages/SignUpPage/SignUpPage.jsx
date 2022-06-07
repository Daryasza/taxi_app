import React, { Component } from "react"
import { Link, Navigate } from "react-router-dom";

import { connect } from "react-redux";
import { sign_up } from "../../app/actions";

import './SignUpPage.scss'
import map from '../../assets/map.svg'
import logo from '../../assets/logo.svg'


export class SignUpPage extends Component {
  constructor(props) {
    super(props)
    this.state = { email: "", name: "", password: "" }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { email, name, password } = e.target
    const [firstName, secondName] = name.value.split(' ')
    
    this.props.sign_up(email.value, password.value, firstName, secondName)
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render () {
    const { isLoggedIn } = this.props;

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
            <form className="form form--signup" onSubmit={this.handleSubmit}>
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
                    required
                  />
                </label>
                <label className="form__input input">
                  <div className="input__name">Как вас зовут?* <span className="input__name--grey">(имя и фамилия)</span></div>
                  <input
                    placeholder="Петр Александров"
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    autoComplete="username"
                    required="required"
                    pattern="^\S+\s\S+$"
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
        </div>
      </div>
    )
  }
}

export const WithAuthSignUpPage = connect(
  (state) => ({isLoggedIn: state.authReducer.isLoggedIn}),
  {sign_up}
)(SignUpPage)
