import {
  RECEIVE_USERS,
  ADD_USER_ANSWER,
  ADD_USER_QUESTION,
} from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };

    case ADD_USER_ANSWER:
      const { auth, qid, option } = action;
      return {
        ...state,
        [auth]: {
          ...state[auth],
          answers: {
            ...state[auth].answers,
            [qid]: option,
          },
        },
      };

    case ADD_USER_QUESTION:
      const { authUser, id } = action;
      return {
        ...state,
        [authUser]: {
          ...state[authUser],
          questions: state[authUser].questions.concat([id]),
        },
      };

    default:
      return state;
  }
}
