import {
  StyleSheet,
} from 'react-native';

import colors from '../config/colors';

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 8,
    height: 35,
    borderRadius: 20,
    marginVertical: 5,
    borderColor: colors.WUCLoadingButtonBorder,
    borderWidth: 0,
    backgroundColor: colors.WUCLoadingButtonBg,
    shadowColor: colors.WUCLoadingButtonShadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    shadowOpacity: 0.1,
  },
  text: {
    color: colors.WUCLoadingButton,
    margin: 5,
    fontSize: 12,
  },
  spinner: {
    margin: 5,
  },
  disabled: {
    backgroundColor: colors.WUCLoadingButtonDisabledBg,
    shadowOpacity: 0,
  },
});
