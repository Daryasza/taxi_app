import React from "react";
import { Navigate } from "react-router-dom"
import { connect } from "react-redux";

const PrivateRoute = ({isLoggedIn, children }) => {
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default connect(state => ({isLoggedIn: state.authReducer.isLoggedIn}))(PrivateRoute)
