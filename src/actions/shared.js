import { getInitialData } from "../utils/api";
import { addQuestion, receiveQuestions, saveQuestionAnswer } from "./questions";
import { addUserQuestion, saveUserAnswer, receiveUsers } from "./users";
//@todo want to fix this...
import { _saveQuestionAnswer, _saveQuestion } from "../utils/_DATA";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveQuestions(questions));
      dispatch(receiveUsers(users));
    });
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authUser } = getState();
    return _saveQuestion({
      optionOneText,
      optionTwoText,
      author: authUser,
    }).then((question) => {
      dispatch(addQuestion(question));
      dispatch(addUserQuestion(authUser, question.id));
    });
  };
}

export function handleAnswer(qid, option) {
  return (dispatch, getState) => {
    const { authUser } = getState();
    const info = {
      authUser: authUser,
      qid,
      answer: option,
    };
    _saveQuestionAnswer(info).then(() => {
      dispatch(saveQuestionAnswer(authUser, qid, option));
      dispatch(saveUserAnswer(authUser, qid, option));
    });
  };
}
