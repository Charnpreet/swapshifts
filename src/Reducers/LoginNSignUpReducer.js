import {
  EMAIL_CHANGED,
  PASS_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  EMAIL_BLANK,
  PASS_BLANK
} from '../Actions/ActionTypes';
//insital state of signup and login screen
const INTIAL_STATE = {
  email: '',
  password: '',
  user: null,
  userNameError: '',
  passwordError: ''
};
export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return {...state, email: action.payload};
    case EMAIL_BLANK:
      return {...state, userNameError: action.payload};
    case PASS_BLANK:
      return {...state, passwordErrors: action.payload};
    case PASS_CHANGED:
      return {...state, password: action.payload};
    case LOGIN_USER:
      return {...state, ...INTIAL_STATE, email: action.payload};
    case LOGIN_USER_SUCCESS:
      return {...state, ...INTIAL_STATE, user: action.payload};
    default:
      return state;
  }
};
// case LOGIN_USER_FAIL:
//       return {
//         ...state,
//         error: 'Authentication failed',
//         password: '',
