import './App.scss'
import React, { Component } from "react"
import { WithAuthLoginPage } from "./pages/LoginPage/LoginPage"
import { WithAuthProfilePage } from './pages/ProfilePage/ProfilePage'
import { WithAuthMapPage } from './pages/MapPage/MapPage'
import SignUpPage from './pages/SignUpPage/SignUpPage'

import { withAuth } from "./AuthContext/AuthContext";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { page: 'login' }
    this.navigateTo = this.navigateTo.bind(this)
  }

  pages = {
    login: (props) => <WithAuthLoginPage {...props}/>,
    profile: (props) => <WithAuthProfilePage {...props}/>,
    map: (props) => <WithAuthMapPage {...props}/>,
    signin: (props) => <SignUpPage {...props}/>,
  }
 
  navigateTo = (page) => {
    this.setState({ 
      page: page ==='signin' || this.props.isLoggedIn ? page : 'login' 
    })
  }
  

  render() {
    const Page = this.pages[this.state.page]

    return (
      <Page navigateTo={this.navigateTo}/>
    )
  }
}

export default withAuth(App);
