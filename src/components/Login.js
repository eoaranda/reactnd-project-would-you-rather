import React, { Component } from "react";
import { connect } from "react-redux";
//actions
import { setAuthUser } from "../actions/authUser";
//style related
import logo from "../utils/logo.svg";
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardHeader,
  Form,
  FormGroup,
  Input,
  Container,
} from "reactstrap";

class Login extends Component {
  state = {
    userId: "",
  };

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange = (e) => {
    this.setState({ userId: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { userId } = this.state;
    const { authenticate } = this.props;
    if (userId !== null) {
      authenticate(userId);
    }
  };

  render() {
    const { userId } = this.state;
    const { users } = this.props;

    return (
      <Container className="login-container">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Card>
              <CardHeader>Welcome to the Would Your Rather App!</CardHeader>
              <CardBody>
                <img width="50%" src={logo} alt="Login Logo" />
                <CardText className="text-left">
                  Select a User:
                  <Input
                    id="userSelect"
                    type="select"
                    name="select"
                    value={userId}
                    onChange={this.onChange}
                  >
                    <option value="" disabled>
                      User list...
                    </option>
                    {Object.keys(users).map((user) => (
                      <option key={user} value={user}>
                        {users[user].name}
                      </option>
                    ))}
                  </Input>
                </CardText>
                <Button
                  type="submit"
                  value="submit"
                  color="success"
                  size="lg"
                  disabled={userId === ""}
                >
                  Login
                </Button>
              </CardBody>
            </Card>
          </FormGroup>
        </Form>
      </Container>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authenticate: (id) => {
      dispatch(setAuthUser(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
