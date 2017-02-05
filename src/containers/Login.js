import {
  bindActionCreators,
} from 'redux';
import {
  connect,
} from 'react-redux';

import LoginComponent from '../components/Login';

import {
  getUsername,
  getPassword,
  getIsLoading,
  getError,
  getValidData,
} from '../selectors/forms/login';

import * as loginFormActions from '../actions/forms/login';

function mapStateToProps(state) {
  return {
    username: getUsername(state),
    password: getPassword(state),
    isLoading: getIsLoading(state),
    error: getError(state),
    buttonEnabled: getValidData(state),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...loginFormActions }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginComponent);
