import {
  createSelector,
} from 'reselect';

export const getUser = state => state.user;

export const getUsername = createSelector(
  getUser,
  user => user.username,
);

export const getPassword = createSelector(
  getUser,
  user => user.password,
);

export const getFullName = createSelector(
  getUser,
  user => user.fullName,
);

export const getValidData = createSelector(
  getUsername,
  getPassword,
  (username, password) => password.length > 0 && username.length > 0,
);
