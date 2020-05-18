import React, { Component } from "react";
import { connect } from "react-redux";
// custom components
import QuestionCard from "./QuestionCard";
// style components
import classnames from "classnames";
import {
  Container,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Badge,
} from "reactstrap";

class Home extends Component {
  state = {
    activeTab: "1",
  };

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    const { unansweredQuestions, answeredQuestions } = this.props;
    const { activeTab } = this.state;
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              Unanswered Questions{" "}
              <Badge color="primary" pill>
                {unansweredQuestions.length}
              </Badge>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              Answered Questions{" "}
              <Badge color="success" pill>
                {answeredQuestions.length}
              </Badge>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane className="cards-container" tabId="1">
            <Container>
              {unansweredQuestions.map((qid) => (
                <QuestionCard key={qid} id={qid} />
              ))}
            </Container>
          </TabPane>
          <TabPane className="cards-container" tabId="2">
            <Container>
              {answeredQuestions.map((qid) => (
                <QuestionCard key={qid} id={qid} />
              ))}
            </Container>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authUser }) {
  const user = users[authUser];
  const answeredQuestions = Object.keys(user.answers).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );
  const unansweredQuestions = Object.keys(questions)
    .filter((qid) => !answeredQuestions.includes(qid))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

  return {
    unansweredQuestions: unansweredQuestions,
    answeredQuestions: answeredQuestions,
  };
}

export default connect(mapStateToProps)(Home);
