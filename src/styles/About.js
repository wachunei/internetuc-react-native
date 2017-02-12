import {
  StyleSheet,
} from 'react-native';

import colors from '../config/colors';

export default StyleSheet.create({
  aboutBox: {
    alignItems: 'center',
  },
  currentUserBox: {
    alignSelf: 'stretch',
    marginVertical: 10,
    paddingBottom: 20,
    borderBottomColor: colors.separatorColor,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  currentUserBoxFullNameWrapper: {
    padding: 5,
    marginVertical: 5,
  },
  currentUserBoxFullName: {
    textAlign: 'center',
    fontSize: 20,
  },
  logoutButton: {
    backgroundColor: '#aaa',
    alignSelf: 'center',
  },
  section: {
    margin: 10,
    paddingVertical: 5,
  },
  title: {
    marginVertical: 5,
  },
  paragraph: {
    marginVertical: 10,
  },
});
