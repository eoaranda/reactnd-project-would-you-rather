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
import PrivateRoute from "./PrivateRoute";

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }
  render() {
    return (
      <Router>
        <Fragment>
          <NavBar />
          <Switch>
            <PrivateRoute path="/" exact component={Home} />
            <PrivateRoute path="/leaderboard" exact component={LeaderBoard} />
            <PrivateRoute path="/add" component={NewQuestion} />
            <PrivateRoute path="/questions/:id" component={QuestionDetails} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/not-found" component={NotFround} />
            <Route component={NotFround} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    handleInitialData: () => {
      dispatch(handleInitialData());
    },
  };
}

export default connect(null, mapDispatchToProps)(App);
