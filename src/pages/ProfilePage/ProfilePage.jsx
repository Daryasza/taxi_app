import React, { Component } from "react"
import {bool, func} from 'prop-types'
import Header from "../../components/Header/Header"
import './ProfilePage.scss'
import { withAuth } from "../../AuthContext/AuthContext"

export class ProfilePage extends Component {
  static propTypes = {
    navigateTo: func,
    isLoggedIn: bool,
    login: func,
    logout: func,
  }
  
  render () {
    const { navigateTo } = this.props

    return (
      <div>
        <Header navigateTo={navigateTo}/>
        <h1>Hello, it's a <strong>profile</strong> page</h1>
      </div>
    )
  }
}

export const WithAuthProfilePage = withAuth(ProfilePage)