import {
  Actions,
} from 'react-native-router-flux';

import actions from './constants';
import UCLogin from '../utils/UCLogin';

export function setUsername(username) {
  return {
    type: actions.user.setUsername,
    username,
  };
}

export function setPassword(password) {
  return {
    type: actions.user.setPassword,
    password,
  };
}

export function setFullName(fullName) {
  return {
    type: actions.user.setFullName,
    fullName,
  };
}

export function setLoggingOut(loggingOut) {
  return {
    type: actions.user.setLoggingOut,
    loggingOut,
  };
}

export function logOut() {
  return {
    type: actions.user.logOut,
  };
}

export function logoutStart() {
  return (dispatch) => {
    dispatch(setLoggingOut(true));
    return UCLogin.logout().then(() => {
      dispatch(logOut());
      setLoggingOut(false);
      Actions.Login();
    }).catch(() => {
      dispatch(setLoggingOut(false));
    });
  };
}
