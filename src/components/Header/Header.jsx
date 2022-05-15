import React, { Component } from 'react';
import './Header.scss'
import logo from '../../assets/logo.svg'

class Header extends Component {

  render() {
    const { navigateTo } = this.props

    return (
      <header className='header'>

        <div className='header__right-col'>
          <img className='logo' src={logo} alt='logo'/>
        </div>

        <nav className='header__left-col'>
          <button onClick={() => navigateTo('map')} className='header__btn'>Карта</button> 
          <button onClick={() => navigateTo('profile')} className='header__btn'>Профиль</button>
          <button onClick={() => navigateTo('login')} className='header__btn'>Выйти</button>
        </nav>
      </header>
    )
  }
}

export default Header
