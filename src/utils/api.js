import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "./_DATA.js";

//Based on the example of chirper-app
export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  );
}

export function saveQuestion(data) {
  return _saveQuestion(data);
}

export function saveQuestionAnswer(data) {
  return _saveQuestionAnswer(data);
}
