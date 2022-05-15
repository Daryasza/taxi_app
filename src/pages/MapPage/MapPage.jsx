import React, { Component } from "react";
import Header from "../../components/Header/Header";
import './MapPage.scss'

class MapPage extends Component {
  
  render () {
    const { navigateTo } = this.props 
    return (
      <div>
      <Header navigateTo={navigateTo} />
      <h1>Hello, it's a <strong>map</strong> page</h1>
      </div>
    )
  }
}

export default MapPage 