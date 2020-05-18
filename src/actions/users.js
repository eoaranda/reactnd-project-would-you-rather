export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_USER_QUESTION = "ADD_USER_QUESTION";
export const ADD_USER_ANSWER = "ADD_USER_ANSWER";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function addUserQuestion(authUser, qid) {
  return {
    type: ADD_USER_QUESTION,
    authUser,
    qid,
  };
}

export function saveUserAnswer(auth, qid, option) {
  return {
    type: ADD_USER_ANSWER,
    auth,
    qid,
    option,
  };
}
