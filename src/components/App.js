import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";

// custom components
import NavBar from "./NavBar";
import Home from "./Home";
import LeaderBoard from "./LeaderBoard";
import Login from "./Login";
import NewQuestion from "./NewQuestion";
import QuestionDetails from "./QuestionDetails";
import Logout from "./Logout";
import NotFround from "./NotFound";

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }
  render() {
    const { authUser } = this.props;

    return (
      <Router>
        <Fragment>
          <NavBar />
          {authUser === null ? (
            <Switch>
              <Route path="/" exact component={Login} />
              <Route component={NotFround} />
            </Switch>
          ) : (
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/leaderboard" exact component={LeaderBoard} />
              <Route path="/add" component={NewQuestion} />
              <Route path="/questions/:id" component={QuestionDetails} />
              <Route exact path="/logout" component={Logout} />
              <Route component={NotFround} />
            </Switch>
          )}
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authUser }) {
  return {
    authUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleInitialData: () => {
      dispatch(handleInitialData());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
