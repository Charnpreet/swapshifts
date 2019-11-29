import {
  EMAIL_CHANGED,
  PASS_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
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
    dispatch({type: LOGIN_USER, payload: password});
  };
}

// const loginuserSuccess = (dispatch, user) => {
//   dispatch({
//     type: LOGIN_USER_SUCCESS,
//     payload: user
//   });
