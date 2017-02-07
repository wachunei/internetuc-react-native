import React from 'react';
import {
  TextInput,
  View,
} from 'react-native';

import inputStyle from '../styles/WUCTextInput';

export default function WUCTextInput({
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

WUCTextInput.propTypes = {
  style: View.propTypes.style,
};

WUCTextInput.defaultProps = {
  style: null,
};
