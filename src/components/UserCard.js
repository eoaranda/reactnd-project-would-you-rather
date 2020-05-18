import React, { Component } from "react";
import AvatarImage from "./AvatarImage";
import { Card, CardText, CardTitle, Col, Row, Badge } from "reactstrap";

class UserCard extends Component {
  state = {};
  render() {
    const { user, position } = this.props;
    const userScore = Object.keys(user.answers).length + user.questions.length;

    const returnBadgeColor = (num) => {
      switch (num) {
        case 0:
          return "warning";
        case 1:
          return "secondary";
        case 2:
          return "danger";
        default:
          return "ligth";
      }
    };

    return (
      <div>
        <Card body>
          <Row>
            <Badge color={returnBadgeColor(position)}># {position + 1}</Badge>
          </Row>
          <Row md="3">
            <Col>
              <AvatarImage user={user} classStyle="avatar-big" />
            </Col>
            <Col md="6">
              <CardTitle>{user.name}</CardTitle>
              <CardText>Questions Asked: {user.questions.length}</CardText>
              <CardText>
                Questions Answered: {Object.keys(user.answers).length}
              </CardText>
            </Col>
            <Col>
              <Card className="score-card">
                <CardTitle>Score</CardTitle>
                <div className="score-circle">
                  <div className="score">{userScore}</div>
                </div>
              </Card>
            </Col>
          </Row>
        </Card>
        <br></br>
      </div>
    );
  }
}

export default UserCard;
