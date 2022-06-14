import React from 'react'
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { logout } from '../../app/actions';

import './Header.scss'
import logo from '../../assets/logo.svg'


export function Header (props) {
  const onLogOut = (e) => {
    e.preventDefault()
    localStorage.removeItem('isLogged')
    // localStorage.removeItem('CARD')
    props.logout()
  }

  return (
    <header className='header'>
      <div className='header__right-col'>
        <img className='logo' src={logo} alt='logo'/>
      </div>
      <nav className='header__left-col'>
        <Link to={`/`} className='header__btn'>Карта</Link>
        <Link to={`/profile`} className='header__btn'>Профиль</Link>
        <a onClick={onLogOut} className='header__btn' href='/'>Выйти</a>
      </nav>
    </header>
  )
}

export const ConnectedHeader =  connect(
  (state) => ({isLoggedIn: state.authReducer.isLoggedIn}),
  {logout}
)(Header)
