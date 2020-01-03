// this is file where we combine all reducers in placeholder
import {combineReducers} from 'redux';
import AuthReducer from './LoginNSignUpReducer';
import UserReducer from './UserReducer';
export default combineReducers({
  auth: AuthReducer, // auth is nickname AuthReducer
  UserReducer: UserReducer,
});
