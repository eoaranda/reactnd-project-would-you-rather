import { SET_AUTHED_USER, UNSET_AUTHED_USER } from "../actions/authUser";

export default function authUser(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.id;
    case UNSET_AUTHED_USER:
      return null;
    default:
      return state;
  }
}
