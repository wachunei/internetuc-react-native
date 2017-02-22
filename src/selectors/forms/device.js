import {
  createSelector,
} from 'reselect';

const getDeviceForm = state => state.forms.device;

export const getDeviceFormDevice = createSelector(
  getDeviceForm,
  form => form.device,
);

export const getFormType = createSelector(
  getDeviceForm,
  form => form.type,
);

export const getFormIsLoading = createSelector(
  getDeviceForm,
  form => form.isLoading,
);
