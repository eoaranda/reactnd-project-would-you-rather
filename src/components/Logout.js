import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { unsetAuthUser } from "../actions/authUser";

class Logout extends Component {
  componentWillMount() {
    this.props.dispatch(unsetAuthUser());
  }
  render() {
    return <Redirect to="/" />;
  }
}

export default connect()(Logout);
