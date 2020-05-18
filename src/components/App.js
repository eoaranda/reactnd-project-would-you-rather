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
          <Switch>
            {authUser === null ? (
              <Fragment>
                <Route path="/" exact component={Login} />
              </Fragment>
            ) : (
              <Fragment>
                <Route path="/" exact component={Home} />
                <Route path="/leaderboard" exact component={LeaderBoard} />
                <Route path="/new" component={NewQuestion} />
                <Route path="/questions/:id" component={QuestionDetails} />
                <Route exact path="/logout" component={Logout} />
              </Fragment>
            )}
          </Switch>
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
