import {
  createSelector,
} from 'reselect';

export const getDevices = state => state.devices;

export const getDevicesData = createSelector(
  getDevices,
  devices => devices.data,
);
