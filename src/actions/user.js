import {
  Actions,
} from 'react-native-router-flux';
import {
  capitalize,
} from '../utils';
import actions from './constants';
import UCLogin from '../utils/UCLogin';
import PortalDevices from '../utils/PortalDevices';

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
    return Promise.all([
      UCLogin.logout(),
      PortalDevices.logout(),
    ]).then(() => {
      dispatch(logOut());
      setLoggingOut(false);
      Actions.Login();
    }).catch(() => {
      dispatch(setLoggingOut(false));
    });
  };
}

export function setFullNameRequest() {
  return (dispatch) => {
    UCLogin.current()
      .then((data) => {
        if (data.props && data.props.distinguishedName) {
          dispatch(setFullName(capitalize(data.props.distinguishedName)));
        }
      });
  };
}
