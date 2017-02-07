import actions from '../constants';
import UCLogin from '../../utils/UCLogin';

import {
  getUsername,
  getPassword,
  getValidData,
} from '../../selectors/forms/login';

import {
  setUsername,
  setPassword,
} from '../user';

export function updateUsername(username) {
  return {
    type: actions.forms.login.updateUsername,
    username,
  };
}

export function updatePassword(password) {
  return {
    type: actions.forms.login.updatePassword,
    password,
  };
}

export function displayGenericError() {
  return {
    type: actions.forms.login.displayGenericError,
    error: 'Hubo un error intentando iniciar sesión',
  };
}

export function displayError(error) {
  return {
    type: actions.forms.login.displayError,
    error,
  };
}

export function clearError() {
  return {
    type: actions.forms.login.clearError,
  };
}

export function clear() {
  return {
    type: actions.forms.login.clear,
  };
}

export function clearUsername() {
  return {
    type: actions.forms.login.clearUsername,
  };
}

export function cleanUsername() {
  return {
    type: actions.forms.login.cleanUsername,
  };
}


export function clearPassword() {
  return {
    type: actions.forms.login.clearPassword,
  };
}

export function isFormLoading(isLoading) {
  return {
    type: actions.forms.login.isFormLoading,
    isLoading,
  };
}

export function submit() {
  return (dispatch, getState) => {
    const state = getState();
    const username = getUsername(state);
    const password = getPassword(state);
    const validData = getValidData(state);

    if (!validData) {
      return Promise.reject();
    }

    dispatch(isFormLoading(true));
    dispatch(clearError());
    return UCLogin.login(username, password)
    .then(() => {
      dispatch(setUsername(username));
      dispatch(setPassword(password));
      dispatch(clearPassword());
      dispatch(isFormLoading(false));
    })
    .catch(() => {
      dispatch(displayGenericError());
      dispatch(isFormLoading(false));
    });
  };
}
