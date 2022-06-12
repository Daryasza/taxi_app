import React, { Component } from "react"
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

import { ConnentedSignUpForm } from '../../components/SignUpForm/SignUpForm'

import './SignUpPage.scss'
import map from '../../assets/map.svg'
import logo from '../../assets/logo.svg'


export class SignUpPage extends Component {
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
          <ConnentedSignUpForm/>
        </div>
      </div>
    )
  }
}

export const ConnectedSignUpPage = connect(
  (state) => ({isLoggedIn: state.authReducer.isLoggedIn})
)(SignUpPage)
