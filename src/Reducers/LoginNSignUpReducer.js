import {
  EMAIL_CHANGED,
  PASS_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  EMAIL_BLANK,
  PASS_BLANK,
  LOGIN_USER_FAIL
} from '../Actions/ActionTypes';
//insital state of signup and login screen
const INTIAL_STATE = {
  email: '',
  password: '',
  user: null,
  userNameError: '',
  passwordError: '',
  authError:'',
  loading: false,
  Navigator: null,
};
export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return {...state, email: action.payload, authError: ''};
    case EMAIL_BLANK:
      return {...state, userNameError: action.payload};
    case PASS_BLANK:
      return {...state, passwordErrors: action.payload};
    case PASS_CHANGED:
      return {...state, password: action.payload, authError: ''};
    case LOGIN_USER:
      return {...state, loading: true, authError: ''};
    case LOGIN_USER_SUCCESS:
      return {...state, ...INTIAL_STATE, Navigator:action.payload};
    case LOGIN_USER_FAIL:
      return {
        ...state,
        authError: 'Failed To Log in',
        password: '',
        loading: false
      };
    default:
      return state;
  }
};
