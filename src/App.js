import './App.scss'
import React, { Component } from "react";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from './pages/ProfilePage/ProfilePage';
import MapPage from './pages/MapPage/MapPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { page: 'login' }
    this.navigateTo.bind(this)
  }

  pages = {
    login: LoginPage,
    profile: ProfilePage,
    map: MapPage,
    signin: SignUpPage
  }
 
  navigateTo = (page) => {
    this.setState({ page })
  }

  render() {
    const Page = this.pages[this.state.page]

    return (
      <div>
        <Page navigateTo={this.navigateTo}/>
      </div>
    )
  }
}

export default App;
