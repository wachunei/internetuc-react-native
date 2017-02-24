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
  getIsValidForm,
} from '../selectors/forms/device';

import * as deviceFormActions from '../actions/forms/device';

function mapStateToProps(state) {
  return {
    device: getDeviceFormDevice(state),
    type: getFormType(state),
    isLoading: getFormIsLoading(state),
    isValid: getIsValidForm(state),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...deviceFormActions }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormComponent);
