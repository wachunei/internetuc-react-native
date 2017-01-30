import React from 'react';
import {
  TextInput,
  View,
} from 'react-native';

import inputStyle from '../styles/WUCTextInput';

export default function WUCText({
  style,
  ...otherProps
}) {
  return (
    <View style={inputStyle.wrapper}>
      <TextInput
        underlineColorAndroid="transparent"
        style={[inputStyle.input, style]}
        {...otherProps}
      />
    </View>
  );
}

WUCText.propTypes = {
  style: View.propTypes.style,
};

WUCText.defaultProps = {
  style: null,
};
