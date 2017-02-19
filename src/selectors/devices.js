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

export const getDevicesEditMode = createSelector(
  getDevices,
  devices => devices.editMode,
);

export const getDevicesData = createSelector(
  getDevices,
  devices => devices.data,
);
