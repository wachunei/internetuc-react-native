import actions from '../constants';
import {
  getCleanDeviceFormDevice,
} from '../../selectors/forms/device';

import {
  setScene,
} from '../scenes';

import {
  addDevice,
} from '../devices';

export function updateName(name) {
  return {
    type: actions.forms.device.updateName,
    name,
  };
}

export function updateMac(mac) {
  return {
    type: actions.forms.device.updateMac,
    mac,
  };
}

export function setEditDevice(device) {
  return {
    type: actions.forms.device.setEditDevice,
    device,
  };
}

export function setFormType(formType) {
  return {
    type: actions.forms.device.setFormType,
    formType,
  };
}

export function clear() {
  return {
    type: actions.forms.device.clear,
  };
}

export function isFormLoading(isLoading) {
  return {
    type: actions.forms.device.isFormLoading,
    isLoading,
  };
}

export function editDevice(device) {
  return {
    type: actions.forms.device.editDevice,
    device,
  };
}


export function addDeviceRequest() {
  return (dispatch, getState) => {
    const state = getState();
    const newDevice = getCleanDeviceFormDevice(state);
    dispatch(isFormLoading(true));
    dispatch(addDevice(newDevice));
    dispatch(setScene('devices'));
    dispatch(isFormLoading(false));
    dispatch(clear());
  };
}

export function cancelForm() {
  return (dispatch) => {
    dispatch(setScene('devices'));
    dispatch(clear());
  };
}
