import {
  bindActionCreators,
} from 'redux';
import {
  connect,
} from 'react-redux';

import MainComponent from '../components/Main';

import getScene from '../selectors/scenes';

import {
  getDevicesData,
} from '../selectors/devices';

import setScene from '../actions/scenes';

function mapStateToProps(state) {
  return {
    scene: getScene(state),
    devices: getDevicesData(state),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setScene }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainComponent);
