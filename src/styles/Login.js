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
    marginTop: 40,
    flex: 1,
    justifyContent: 'flex-end',
  },
  loginBox: {
    flex: 0,
  },
  formBox: {
    marginTop: 15,
  },
  bottomSpacer: {
    flex: 1,
  },
});
