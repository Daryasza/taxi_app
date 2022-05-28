import React from 'react'
import {bool, func} from 'prop-types'
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { logout } from '../../app/actions';

import './Header.scss'
import logo from '../../assets/logo.svg'


function Header (props) {
  const onLogOut = (e) => {
    e.preventDefault()
    localStorage.removeItem('isLogged')
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

Header.propTypes = {
  isLoggedIn: bool,
  logout: func,
}

export default connect(
  (state) => ({isLoggedIn: state.authReducer.isLoggedIn}),
  {logout}
)(Header)
