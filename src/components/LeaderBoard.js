import React, { Fragment } from "react";
import { connect } from "react-redux";
import UserCard from "./UserCard";
import { Container } from "reactstrap";

function Leaderboard(props) {
  const { users } = props;

  return (
    <Fragment>
      <Container>
        {users.map((user, index) => (
          <UserCard key={index} user={user} position={index}></UserCard>
        ))}
      </Container>
    </Fragment>
  );
}

const mapStateToProps = ({ users }) => {
  const userScore = (user) =>
    Object.keys(user.answers).length + user.questions.length;
  return {
    users: Object.values(users).sort((a, b) => userScore(b) - userScore(a)),
  };
};

export default connect(mapStateToProps)(Leaderboard);
