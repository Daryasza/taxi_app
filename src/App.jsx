import React, { Component } from "react"

import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";
import PrivateRoute from "./router/PrivateRoute";

import { connect } from "react-redux";

import { ConnectedLoginPage } from "./pages/LoginPage/LoginPage"
import { ConnectedProfilePage } from './pages/ProfilePage/ProfilePage'
import { ConnectedMapPage } from './pages/MapPage/MapPage'
import { ConnectedSignUpPage } from './pages/SignUpPage/SignUpPage' 
import { NotFound404 } from './pages/NotFound404/NotFound404'

import './App.scss'


class App extends Component {
  
  render() {
    return (
      <HashRouter>
        <Routes>
          <Route path='/login' element={ <ConnectedLoginPage /> }/>
          <Route path='/signup' element={ <ConnectedSignUpPage /> }/>
          <Route path="/profile" element={<PrivateRoute><ConnectedProfilePage /></PrivateRoute>}/>
          <Route path="/" element={<PrivateRoute><ConnectedMapPage /></PrivateRoute>}/>
          <Route path="*" element={<NotFound404/> }/>
        </Routes>
      </HashRouter>
    )
  }
}

export default connect(
  state => ({isLoggedIn: state.authReducer.isLoggedIn})
)(App);
