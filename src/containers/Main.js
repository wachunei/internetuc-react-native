import {
  bindActionCreators,
} from 'redux';
import {
  connect,
} from 'react-redux';

import MainComponent from '../components/Main';

import {
  getScene,
} from '../selectors/scenes';

import * as scenesActions from '../actions/scenes';

function mapStateToProps(state) {
  return {
    scene: getScene(state),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...scenesActions }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainComponent);
