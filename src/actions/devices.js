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

export function setIsForceUpdating(isForceUpdating) {
  return {
    type: actions.devices.setIsForceUpdating,
    isForceUpdating,
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

const showAndClearMessage = (message, dispatch) => {
  dispatch(setErrorMessage(message));
  setTimeout(() => dispatch(clearErrorMessage()), 2000);
};

export function setDeviceStatus(device, status) {
  return {
    type: actions.devices.setDeviceStatus,
    device,
    status,
  };
}

export function setDeviceUpdating(device, updating) {
  return {
    type: actions.devices.setDeviceUpdating,
    device,
    updating,
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

export function clearDevicesUpdating() {
  return (dispatch) => {
    dispatch(setIsUpdating(false));
    dispatch(setIsForceUpdating(false));
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
      dispatch(clearDevicesUpdating());
    }).catch((data) => {
      if (data.portalError) {
        showAndClearMessage(data.error, dispatch);
      } else {
        showAndClearMessage(data.message, dispatch);
      }
      dispatch(clearDevicesUpdating());
    });
  };
}

export function updateForcedDevicesRequest() {
  return (dispatch) => {
    dispatch(setIsForceUpdating(true));
    dispatch(updateDevicesRequest());
  };
}

export function toggleDeviceRequest(device) {
  return (dispatch, getState) => {
    const state = getState();
  }
}
