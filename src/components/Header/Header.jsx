import React, { useContext } from 'react'
import {bool, func} from 'prop-types'
import './Header.scss'
import logo from '../../assets/logo.svg'
import { MyContext } from '../../AuthContext/AuthContext'

function Header (props) {
  const { navigateTo } = props
  const value = useContext(MyContext);

  const onLogOut = async (e) => {
    e.preventDefault()
    
    await value.logout()
    navigateTo('login')
  }

  return (
    <header className='header'>

      <div className='header__right-col'>
        <img className='logo' src={logo} alt='logo'/>
      </div>

      <nav className='header__left-col'>
        <button onClick={() => navigateTo('map')} className='header__btn'>Карта</button> 
        <button onClick={() => navigateTo('profile')} className='header__btn'>Профиль</button>
        <button onClick={onLogOut} className='header__btn'>Выйти</button>
      </nav>

    </header>
  )
}


Header.propTypes = {
  navigateTo: func,
  isLoggedIn: bool,
  login: func,
  logout: func,
}

export default Header
