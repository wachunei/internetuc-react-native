import {
  createSelector,
} from 'reselect';

export const getDevices = state => state.devices;

export const getDevicesIsUpdating = createSelector(
  getDevices,
  devices => devices.isUpdating,
);

export const getDevicesIsForceUpdating = createSelector(
  getDevices,
  devices => devices.isForceUpdating,
);

export const getDevicesData = createSelector(
  getDevices,
  devices => devices.data,
);
