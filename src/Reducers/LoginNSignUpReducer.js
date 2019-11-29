import {
  EMAIL_CHANGED,
  PASS_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
} from '../Actions/ActionTypes';
//insital state of signup and login screen
const INTIAL_STATE = {
  email: '',
  password: '',
  user: null
};
export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return {...state, email: action.payload};
    case PASS_CHANGED:
      return {...state, password: action.payload};
    case LOGIN_USER:
      return {...state, ...INTIAL_STATE, user: action.payload};
      case LOGIN_USER_SUCCESS:
        return {...state, ...INTIAL_STATE, user: action.payload};
    default:
      return state;
  }
};
