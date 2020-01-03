import {
  EMAIL_CHANGED,
  PASS_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  EMAIL_BLANK,
  LOGIN_USER_FAIL,
  PASS_BLANK,
  AFTER_LOGIN_SCREEN,
  BLANK_INPUT_ERROR
} from './ActionTypes';
import firebase from 'firebase';
export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};
export const NavigateToAfterLoginState = navigate => {
  navigate.navigate(AFTER_LOGIN_SCREEN);
};
export const passwordChanged = text => {
  return {
    type: PASS_CHANGED,
    payload: text
  };
};

// need to fix this
// this should connect with firebase
export const loginUser = ({email, password},navigate) => {
  return dispatch => {
    if (email === ' '){
      dispatch(EmailError);
    } else if (password === ' ') {
      dispatch(PasswordError);
    } else {
      dispatch({type: LOGIN_USER});
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => loginuserSuccess(dispatch, user, navigate))
        .catch(() => loginUserFail(dispatch));
    }
  };
};

// email error , can use switch statement to capture more than one error
// need to define errors
const EmailError = dispatch => {
  dispatch({
    type: EMAIL_BLANK,
    payload: BLANK_INPUT_ERROR
  });
};

const loginUserFail = dispatch => {
  dispatch({type: LOGIN_USER_FAIL});
};

// password error , can use switch statement to capture more than one error
// need to define errors
const PasswordError = dispatch => {
  dispatch({
    type: PASS_BLANK,
    payload: BLANK_INPUT_ERROR
  });
};

const loginuserSuccess = (dispatch, user, navigate) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: navigate
  });
  NavigateToAfterLoginState(navigate);
};
