import {
  createSelector,
} from 'reselect';

export const getDevices = state => state.devices;

export const getDevicesIsForceUpdating = createSelector(
  getDevices,
  devices => devices.isForceUpdating,
);

export const getDevicesData = createSelector(
  getDevices,
  devices => devices.data,
);
