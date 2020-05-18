import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAnswer } from "../actions/shared";
import User from "./User";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Button,
  Row,
  Col,
  CustomInput,
  Progress,
} from "reactstrap";

class QuestionDetails extends Component {
  state = {
    selectedOption: "",
  };

  radioSelected = (e) => {
    this.setState({
      selectedOption: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.saveQuestionAnswer(this.state.selectedOption);
  };

  render() {
    const {
      question,
      questionAuthor,
      answer,
      optionOneTotal,
      optionTwoTotal,
      total,
      percOne,
      percTwo,
    } = this.props;
    const { selectedOption } = this.state;

    return (
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Card>
            <CardHeader>
              <User id={questionAuthor.id} />
            </CardHeader>
            <CardBody>
              <CardTitle>Would you Rather...</CardTitle>
              {answer ? (
                <FormGroup tag="fieldset">
                  <CustomInput
                    type="radio"
                    id="optionOne"
                    checked={answer === "optionOne"}
                    readOnly
                    label={question.optionOne.text}
                  />
                  <Progress striped color="success" value={percOne}>
                    {percOne}%
                  </Progress>
                  <p className="text-center">
                    {optionOneTotal} out of {total} votes{" "}
                  </p>

                  <CustomInput
                    type="radio"
                    id="optionTwo"
                    checked={answer === "optionTwo"}
                    readOnly
                    label={question.optionTwo.text}
                  />
                  <Progress striped value={percTwo}>
                    {percTwo}%
                  </Progress>
                  <p className="text-center">
                    {optionTwoTotal} out of {total} votes{" "}
                  </p>
                </FormGroup>
              ) : (
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup tag="fieldset">
                    <CustomInput
                      type="radio"
                      value="optionOne"
                      name="radio1"
                      id="optionOne"
                      onChange={this.radioSelected}
                      label={question.optionOne.text}
                    />
                    <CustomInput
                      type="radio"
                      value="optionTwo"
                      name="radio1"
                      id="optionTwo"
                      onChange={this.radioSelected}
                      label={question.optionTwo.text}
                    />
                  </FormGroup>
                  <Button color="primary" disabled={selectedOption === ""}>
                    Submit
                  </Button>
                </Form>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps({ questions, users, authUser }, { match }) {
  let answer, percOne, percTwo, optionOneTotal, optionTwoTotal, total;

  const answers = users[authUser].answers;
  const { id } = match.params;
  const question = questions[id];

  answer = answers.hasOwnProperty(question.id) ? answers[question.id] : null;

  const questionAuthor = users[question.author];
  
  optionOneTotal = question.optionOne.votes.length;
  optionTwoTotal = question.optionTwo.votes.length;
  total = optionOneTotal + optionTwoTotal;
  percOne = parseInt((optionOneTotal / total) * 100);
  percTwo = parseInt((optionTwoTotal / total) * 100);

  return {
    question,
    questionAuthor,
    answer,
    optionOneTotal,
    optionTwoTotal,
    total,
    percOne,
    percTwo,
  };
}

function mapDispatchToProps(dispatch, props) {
  const { id } = props.match.params;

  return {
    saveQuestionAnswer: (answer) => {
      dispatch(handleAnswer(id, answer));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetails);
