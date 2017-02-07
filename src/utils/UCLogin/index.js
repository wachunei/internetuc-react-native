/* global fetch */
import {
  headers,
  JSONtoForm,
  METHODS,
  handleError,
} from '../fetchUtils';
import {
  URL,
} from './utils';

export default class UCLogin {
  static login(username, password) {
    return fetch(
      URL.login,
      {
        headers,
        method: METHODS.POST,
        body: JSONtoForm({
          _username: username,
          _password: password,
        }),
      },
    ).then(handleError);
  }

  static logout() {
    return fetch(URL.logout);
  }
}
