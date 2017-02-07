import actions from './constants';

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

export function clearData() {
  return {
    type: actions.user.clearData,
  };
}
