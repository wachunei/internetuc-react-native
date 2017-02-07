/* global fetch */
import {
  headers,
  JSONtoForm,
  METHODS,
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
    );
  }

  static logout() {
    return fetch(URL.logout);
  }
}
