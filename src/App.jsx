import React, { Component } from "react"

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import PrivateRoute from "./router/PrivateRoute";

import { connect } from "react-redux";

import { WithAuthLoginPage } from "./pages/LoginPage/LoginPage"
import { WithAuthProfilePage } from './pages/ProfilePage/ProfilePage'
import { WithAuthMapPage } from './pages/MapPage/MapPage'
import { WithAuthSignUpPage } from './pages/SignUpPage/SignUpPage' 
import { NotFound404 } from './pages/NotFound404/NotFound404'

import './App.scss'


class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={ <WithAuthLoginPage /> }/>
          <Route path='/signup' element={ <WithAuthSignUpPage /> }/>
          <Route path="/profile" element={<PrivateRoute><WithAuthProfilePage /></PrivateRoute>}/>
          <Route path="/" element={<PrivateRoute><WithAuthMapPage /></PrivateRoute>}/>
          <Route path='/' element={ <WithAuthMapPage /> }/>
          <Route path="*" element={<NotFound404/> }/>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default connect(
  state => ({isLoggedIn: state.authReducer.isLoggedIn})
)(App);
