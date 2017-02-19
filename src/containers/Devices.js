import {
  bindActionCreators,
} from 'redux';
import {
  connect,
} from 'react-redux';
import DevicesComponent from '../components/Devices';

import * as devicesActions from '../actions/devices';

import {
  getDevicesData,
  getDevicesIsUpdating,
  getDevicesIsForceUpdating,
  getDevicesEditMode,
} from '../selectors/devices';

function mapStateToProps(state) {
  return {
    devices: getDevicesData(state),
    isUpdating: getDevicesIsUpdating(state),
    isForceUpdating: getDevicesIsForceUpdating(state),
    editMode: getDevicesEditMode(state),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...devicesActions }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DevicesComponent);