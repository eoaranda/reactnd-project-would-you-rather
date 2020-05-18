import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import AvatarImage from "./AvatarImage";
import { Card, Button, CardTitle, Col, Row } from "reactstrap";

class QuestionCard extends Component {
  constuctor() {
    this.loadQuestionDetails = this.routeChange.bind(this);
  }
  loadQuestionDetails(e, questionId) {
    let path = `/questions/` + questionId;
    this.props.history.push(path);
  }
  render() {
    const { users, question } = this.props;
    return (
      <div>
        <Card onClick={(e) => this.loadQuestionDetails(e, question.id)} body>
          <Row>
            <Col md="3">
              <AvatarImage
                user={users[question.author]}
                classStyle="avatar-big"
              />
            </Col>
            <Col md="6">
              <CardTitle>Would you rather ?</CardTitle>
              <div>1) {question.optionOne.text}</div>
              <div>2) {question.optionTwo.text}</div>
              <br></br>
              <Button
                onClick={(e) => this.loadQuestionDetails(e, question.id)}
                color="info"
                outline
              >
                {" "}
                View Detail
              </Button>
            </Col>
          </Row>
        </Card>
        <br></br>
      </div>
    );
  }
}

function mapStateToProps(state, { id }) {
  return {
    users: state.users,
    question: state.questions[id],
  };
}

export default withRouter(connect(mapStateToProps, null)(QuestionCard));
