import {
  StyleSheet,
} from 'react-native';

import colors from '../config/colors';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center',
  },
  logoHeader: {
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 30,
    flex: 1,
    justifyContent: 'flex-end',
  },
  loginHeader: {
    marginBottom: 10,
  },
  errorWrapper: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.errorWrapperBorder,
    padding: 5,
    marginVertical: 5,
    borderRadius: 15,
  },
  errorText: {
    color: colors.errorTextColor,
    textAlign: 'center',
  },
  submitWrapper: {
    marginTop: 10,
  },
  formBox: {
    marginTop: 5,
  },
  bottomSpacer: {
    flex: 1,
  },
});
