import {
  StyleSheet,
} from 'react-native';

import colors from '../config/colors';

export default StyleSheet.create({
  baseFont: {
    color: colors.fontColor,
    fontFamily: 'Lato-Regular',
    fontSize: 14,
  },
  title: {
    fontFamily: 'VarelaRound-Regular',
    fontSize: 25,
  },
  link: {
    color: colors.fontHyperlink,
    textDecorationLine: 'underline',
    textDecorationColor: colors.fontHyperlink,
  },
  small: {
    fontSize: 12,
  },
});
