import {
  bindActionCreators,
} from 'redux';
import {
  connect,
} from 'react-redux';

import FormComponent from '../components/Form';

import {
  getDeviceFormDevice,
  getFormType,
  getFormIsLoading,
} from '../selectors/forms/device';

import * as deviceFormActions from '../actions/forms/device';

function mapStateToProps(state) {
  return {
    device: getDeviceFormDevice(state),
    formType: getFormType(state),
    isLoading: getFormIsLoading(state),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...deviceFormActions }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormComponent);
