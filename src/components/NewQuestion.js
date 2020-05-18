import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/shared";
import { Redirect } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Form,
  FormGroup,
  Input,
  Row,
  Container,
  CardHeader,
  CardText,
} from "reactstrap";

class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
    redirect: false,
  };

  handleOptionOneChange = (event) => {
    event.preventDefault();
    this.setState({
      optionOne: event.target.value,
    });
  };

  handleOptionTwoChange = (event) => {
    event.preventDefault();
    this.setState({
      optionTwo: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { optionOne, optionTwo } = this.state;
    this.props.addQuestion(optionOne, optionTwo);
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    const { optionOne, optionTwo } = this.state;
    return (
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Card>
              <CardHeader>Create a New Question</CardHeader>
              <CardBody>
                <CardTitle>Complete the questions:</CardTitle>
                <br></br>
                <CardText>Would you rather...</CardText>
                <Form onSubmit={this.handleSubmit} className="text-center">
                  <FormGroup>
                    <Input
                      type="text"
                      name="optionOne"
                      value={optionOne}
                      onChange={this.handleOptionOneChange}
                      placeholder="Enter Option One Text Here"
                    />
                    <div className="text-center">OR</div>
                    <Input
                      type="text"
                      name="optionTwo"
                      value={optionTwo}
                      onChange={this.handleOptionTwoChange}
                      placeholder="Enter Option Two Text Here"
                    />
                  </FormGroup>
                  <Button
                    color="success"
                    disabled={optionOne === "" || optionTwo === ""}
                  >
                    Submit
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addQuestion: (optionOne, optionTwo) => {
      dispatch(handleAddQuestion(optionOne, optionTwo));
    },
  };
}

export default connect(null, mapDispatchToProps)(NewQuestion);
