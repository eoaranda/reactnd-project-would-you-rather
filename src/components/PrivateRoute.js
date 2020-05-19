import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import Login from "./Login";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isUserAuthed = () => {
    const { authUser } = rest;
    return authUser !== null;
  };

  return (
    <Route
      {...rest}
      render={(props) => (
        <Fragment>
          {isUserAuthed() ? <Component {...props} /> : <Login />}
        </Fragment>
      )}
    />
  );
};

function mapStateToProps({ authUser }) {
  return {
    authUser,
  };
}

export default connect(mapStateToProps)(PrivateRoute);