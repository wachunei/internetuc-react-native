import {
  StyleSheet,
} from 'react-native';

import colors from '../config/colors';

export default StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  text: {
    color: colors.iconButtonColor,
    marginHorizontal: 4,
    fontSize: 12,
  },
  icon: {
    color: colors.iconButtonColor,
    marginHorizontal: 4,
    fontSize: 20,
  },
  disabled: {
    opacity: 0.4,
  },
});
