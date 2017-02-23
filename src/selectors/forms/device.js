import {
  createSelector,
} from 'reselect';

import {
  macFormat,
  matchesMac,
  cleanMac,
} from '../../utils';

const getDeviceForm = state => state.forms.device;

export const getDeviceFormDevice = createSelector(
  getDeviceForm,
  (form) => {
    if (matchesMac(form.device.mac)) {
      return {
        ...form.device,
        mac: macFormat(form.device.mac),
      };
    }
    return form.device;
  },
);

export const getCleanDeviceFormDevice = createSelector(
  getDeviceForm,
  form => ({
    ...form.device,
    mac: cleanMac(form.device.mac),
  }),
);

export const getFormType = createSelector(
  getDeviceForm,
  form => form.type,
);

export const getFormIsLoading = createSelector(
  getDeviceForm,
  form => form.isLoading,
);

export const getIsValidForm = createSelector(
  getDeviceFormDevice,
  device => device.name.trim().length > 0 && matchesMac(device.mac),
);
