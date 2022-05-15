import React, { Component } from "react";
import Header from "../../components/Header/Header";
import './ProfilePage.scss'

class ProfilePage extends Component {

  
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

export default ProfilePage;