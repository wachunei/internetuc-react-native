import actions from '../constants';

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
