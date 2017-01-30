import {
  StyleSheet,
} from 'react-native';
import colors from '../config/colors';

import fontStyle from './fontStyle';

export default StyleSheet.create({
  wrapper: {
    marginVertical: 5,
    borderBottomColor: colors.inputBorderBottom,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  input: {
    padding: 0,
    height: 30,
    fontFamily: StyleSheet.flatten(fontStyle.baseFont).fontFamily,
    fontSize: StyleSheet.flatten(fontStyle.baseFont).fontSize,
    color: StyleSheet.flatten(fontStyle.baseFont).color,
  },
});
