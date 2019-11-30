import {
  EMAIL_CHANGED,
  PASS_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  EMAIL_BLANK,
  PASS_BLANK
} from './ActionTypes';
export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = text => {
  return {
    type: PASS_CHANGED,
    payload: text
  };
};

// need to fix this
// this should connect with firebase
export const loginUser = ({email, password}) => {
  return dispatch => {
    if (email === ' '){
      dispatch(EmailError);
    } else if (password === 'c') {
      dispatch(PasswordError);
    } else {
      dispatch({type: LOGIN_USER, payload: password});
    }
  };
};

// email error , can use switch statement to capture more than one error
// need to define errors
const EmailError = dispatch => {
  dispatch({
    type: EMAIL_BLANK,
    payload: 'Dont Leave Me Blank'
  });
};

// password error , can use switch statement to capture more than one error
// need to define errors
const PasswordError = dispatch => {
  dispatch({
    type: PASS_BLANK,
    payload: 'Dont Leave Me Blank'
  });
};
// const loginuserSuccess = (dispatch, user) => {
//   dispatch({
//     type: LOGIN_USER_SUCCESS,
//     payload: user
//   });
