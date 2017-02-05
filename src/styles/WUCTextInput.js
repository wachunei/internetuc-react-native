import {
  StyleSheet,
} from 'react-native';
import colors from '../config/colors';

import fontStyle from './fontStyle';

export default StyleSheet.create({
  wrapper: {
    marginVertical: 5,
    borderColor: colors.inputBorderBottom,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 20,
  },
  input: {
    padding: 10,
    height: 35,
    textAlign: 'center',
    fontFamily: StyleSheet.flatten(fontStyle.baseFont).fontFamily,
    fontSize: StyleSheet.flatten(fontStyle.baseFont).fontSize,
    color: StyleSheet.flatten(fontStyle.baseFont).color,
  },
});
