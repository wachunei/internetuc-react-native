import React from 'react';
import {
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import WUCText from './WUCText';

import buttonStyle from '../styles/IconButton';

export default function IconButton({
  iconName,
  displayIcon,
  displayText,
  text,
  onPress,
  disabled,
  color,
  style,
}) {
  const renderText = displayText ? (
    <WUCText
      style={[
        buttonStyle.text,
        color ? { color } : null,
        disabled ? buttonStyle.disabled : null,
      ]}
    >
      {text.toUpperCase()}
    </WUCText>
  ) : null;

  const renderIcon = displayIcon ? (
    <Icon
      name={iconName}
      style={[buttonStyle.icon, color ? { color } : null, disabled ? buttonStyle.disabled : null]}
    />
  ) : null;
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[buttonStyle.button, style]}
    >
      {renderText}
      {renderIcon}
    </TouchableOpacity>
  );
}

IconButton.defaultProps = {
  iconName: '',
  displayIcon: false,
  displayText: false,
  disabled: false,
  text: '',
  onPress: null,
  style: null,
  color: null,
};

IconButton.propTypes = {
  iconName: React.PropTypes.string,
  displayIcon: React.PropTypes.bool,
  displayText: React.PropTypes.bool,
  text: React.PropTypes.string,
  color: React.PropTypes.string,
  onPress: React.PropTypes.func,
  disabled: React.PropTypes.bool,
  style: View.propTypes.style,
};
