import React, { Component } from "react"
import { connect } from "react-redux"

import { ConnectedHeader } from "../../components/Header/Header"
import { ProfileModal } from "../../components/ProfileModal/ProfileModal"
import { ConnectedCardForm } from "../../components/CardForm/CardForm"

import './ProfilePage.scss'
import map from '../../assets/map.svg'

export class ProfilePage extends Component {
  render () {
    const {cardAdded} = this.props
  
    return (
      <div className="profile-page">
        <ConnectedHeader />
        <main className="profile-main">
          <div className="profile-wrapper"  style={{backgroundImage: `url(${ map })`}}>

            {cardAdded 
              ? <ProfileModal/>
              : <ConnectedCardForm/>
            }
          </div>
        </main>
      </div>
    )
  }
}

export const ConnectedProfilePage = connect((state => ({cardAdded: state.cardReducer.cardAdded})))(ProfilePage)