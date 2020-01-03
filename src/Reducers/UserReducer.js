import {
  USER_FETECH_SUCCESS,
  USER_AVAILABILITY_FETECHED_SUCCESSFULLY,
  USER_TEMP_AVAILABILITY_FETECHED_SUCCESSFULLY,
  SEARCHING_AN_EMPLOYEE,
  USERS_SUCESSFULLY_FOUND,
  NO_USER_FOUND,
  AVAILABLE_USERS_FETECH_SUCCESSFULLY,
  START_FETECH_AVAIL_USERS,
} from '../Actions/ActionTypes';
const INITIAL_STATE = {
  currentUser: null,
  PermanentAvailability:null,
  CasualAvailability:null,
  loading: false,
  choosenDate: null,
  selectedShift: null,
  availbleUsers: null,
  useravailbles: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_FETECH_SUCCESS:
      return {...state, currentUser:action.payload};
    case USER_AVAILABILITY_FETECHED_SUCCESSFULLY:
      return {...state, PermanentAvailability: action.payload};
    case USER_TEMP_AVAILABILITY_FETECHED_SUCCESSFULLY:
      return {...state, CasualAvailability: action.payload, reload: true};
    case SEARCHING_AN_EMPLOYEE:
      return {...state, loading: true};
    case USERS_SUCESSFULLY_FOUND:
      return {...state, loading: false};
    case NO_USER_FOUND:
      return {...state, loading: false};
    case START_FETECH_AVAIL_USERS:
      return {...state, useravailbles: false};
    case AVAILABLE_USERS_FETECH_SUCCESSFULLY:
    return {...state, availbleUsers: action.payload, useravailbles: true};
    default:
      return state;
  }
};
