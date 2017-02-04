import {
  createSelector,
} from 'reselect';

const getLoginForm = state => state.forms.login;

export const getUsername = createSelector(
  getLoginForm,
  form => form.username,
);

export const getPassword = createSelector(
  getLoginForm,
  form => form.password,
);

export const getIsLoading = createSelector(
  getLoginForm,
  form => form.isLoading,
);

export const getError = createSelector(
  getLoginForm,
  form => form.error,
);
