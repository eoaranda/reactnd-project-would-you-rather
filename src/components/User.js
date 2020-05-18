import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import AvatarImage from "./AvatarImage";

class User extends Component {
  render() {
    const { user } = this.props;
    return (
      <Fragment>
        <AvatarImage user={user} />
        {user.name}
      </Fragment>
    );
  }
}

function mapStateToProps({ users }, { id }) {
  return {
    user: users[id],
  };
}

export default connect(mapStateToProps)(User);
