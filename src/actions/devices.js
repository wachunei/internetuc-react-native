import actions from './constants';
import PortalDevices from '../utils/PortalDevices';

import {
  getUsername,
  getPassword,
} from '../selectors/user';

export function setIsUpdating(isUpdating) {
  return {
    type: actions.devices.setIsUpdating,
    isUpdating,
  };
}
export function updateDevices(devices) {
  return {
    type: actions.devices.updateDevices,
    devices,
  };
}

export function setErrorMessage(error) {
  return {
    type: actions.devices.setErrorMessage,
    error,
  };
}

export function clearErrorMessage() {
  return {
    type: actions.devices.clearErrorMessage,
  };
}

export function setDeviceStatus(device, status) {
  return {
    type: actions.devices.setDeviceStatus,
    device,
    status,
  };
}

export function addDevice(device) {
  return {
    type: actions.devices.addDevice,
    device,
  };
}

export function removeDevice(device) {
  return {
    type: actions.devices.removeDevice,
    device,
  };
}

export function setDeviceName(device, name) {
  return {
    type: actions.devices.setDeviceName,
    device,
    name,
  };
}


export function updateDevicesRequest() {
  return (dispatch, getState) => {
    const state = getState();
    const username = getUsername(state);
    const password = getPassword(state);
    dispatch(setIsUpdating(true));
    return PortalDevices.getDevices(username, password)
    .then((devices) => {
      dispatch(updateDevices(devices));
      setIsUpdating(false);
    }).catch((data) => {
      if (data.portalError) {
        dispatch(setErrorMessage(data.error));
        setTimeout(() => dispatch(clearErrorMessage()), 2000);
      }
      dispatch(setIsUpdating(false));
    });
  };
}
