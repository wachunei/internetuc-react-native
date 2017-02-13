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
} from '../selectors/devices';

function mapStateToProps(state) {
  return {
    devices: getDevicesData(state),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...devicesActions }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DevicesComponent);
