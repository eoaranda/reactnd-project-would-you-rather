import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import User from "./User";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";

class NavBar extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const { authUser } = this.props;

    return (
      <div>
        {authUser && (
          <Navbar light expand="md">
            <NavbarBrand tag={Link} to="/">
              Hello, <User id={authUser} />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink tag={Link} to="/">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/add">
                    New Question
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/leaderboard">
                    Leaderboard
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/logout">
                    Logout
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        )}
      </div>
    );
  }
}

function mapStateToProps({ authUser }) {
  return {
    authUser,
  };
}

export default withRouter(connect(mapStateToProps, null)(NavBar));
