import {
  bindActionCreators,
} from 'redux';
import {
  connect,
} from 'react-redux';
import DevicesComponent from '../components/Devices';

import * as devicesActions from '../actions/devices';
import {
  setEditDevice,
} from '../actions/forms/device';
import setScene from '../actions/scenes';

import {
  getDevicesData,
  getDevicesIsUpdating,
  getDevicesIsForceUpdating,
  getDevicesEditMode,
  getDevicesError,
} from '../selectors/devices';

function mapStateToProps(state) {
  return {
    devices: getDevicesData(state),
    isUpdating: getDevicesIsUpdating(state),
    isForceUpdating: getDevicesIsForceUpdating(state),
    editMode: getDevicesEditMode(state),
    error: getDevicesError(state),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...devicesActions, setScene, setEditDevice }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DevicesComponent);
