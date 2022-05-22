import React, { Component } from "react";

export const MyContext = React.createContext();

class AuthContextProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false
    }
    this.login.bind(this)
    this.logout.bind(this)
  }
  
  logout = () => {
    this.setState({ isLoggedIn: false })
  }

  login = (email, password) => {
    if (email !== 'v@e' || password !== 'c') {
      console.log('CREDENTIALS: email: "v@e"; password: "c"; ')
      return
    }

    this.setState({ isLoggedIn: true}) 
  }

  render() {
    return (
      <MyContext.Provider value={{ isLoggedIn: this.state.isLoggedIn, logout: this.logout, login: this.login }} >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

const withAuth = (WrappedComponent) => {
  return class extends Component {
    render () {
      return (
        <MyContext.Consumer>
        {
          (value) => {
            return <WrappedComponent {...value} {...this.props}/>
          }
        }
        </MyContext.Consumer>
      )
    }
  }
}

export { AuthContextProvider, withAuth }
