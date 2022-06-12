import React, { PureComponent } from "react"
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

import { ConnectedLoginForm } from "../../components/LoginForm/LoginForm";

import './LoginPage.scss'
import map from '../../assets/map.svg'
import logo from '../../assets/logo.svg'


export class LoginPage extends PureComponent {

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
          <ConnectedLoginForm/>
        </div>
      </div>
    ) 
  }
}

export const ConnectedLoginPage = connect(
  (state) => ({isLoggedIn: state.authReducer.isLoggedIn})
)(LoginPage)

