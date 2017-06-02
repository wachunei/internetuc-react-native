import PropTypes from 'prop-types';
import React from 'react';
import {
  TouchableOpacity,
  ViewPropTypes,
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
  iconPosition,
  color,
  style,
}) {
  const renderText = displayText ? (
    <WUCText
      key="text"
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
      key="icon"
      name={iconName}
      style={[buttonStyle.icon, color ? { color } : null, disabled ? buttonStyle.disabled : null]}
    />
  ) : null;

  const renderButton = iconPosition === 'left' ? [renderIcon, renderText] : [renderText, renderIcon];
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[buttonStyle.button, style]}
    >
      {renderButton}
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
  iconPosition: 'right',
};

IconButton.propTypes = {
  iconName: PropTypes.string,
  iconPosition: PropTypes.string,
  displayIcon: PropTypes.bool,
  displayText: PropTypes.bool,
  text: PropTypes.string,
  color: PropTypes.string,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  style: ViewPropTypes.style,
};
