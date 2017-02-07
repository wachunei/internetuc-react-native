import React from 'react';
import {
  Animated,
  Easing,
  TouchableOpacity,
} from 'react-native';

import WUCText from './WUCText';
import WUCSpinner from './WUCSpinner';

import buttonStyle from '../styles/WUCLoadingButton';

export default class WUCLoadingButton extends React.Component {
  constructor(props) {
    super(props);
    this.animateLoading = this.animateLoading.bind(this);

    this.state = {
      rotation: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this.animateLoading();
  }

  animateLoading() {
    this.state.rotation.setValue(0);
    Animated.timing(this.state.rotation, {
      toValue: 1,
      easing: Easing.linear,
      duration: 1500,
    }).start(() => this.animateLoading());
  }

  render() {
    const {
      text,
      isLoading,
      disabled,
      onPress,
    } = this.props;

    const renderLoading = isLoading ? (
      <Animated.View
        style={[
          { justifyContent: 'center', alignItems: 'center' },
          { transform: [
            { rotate: this.state.rotation.interpolate({
              inputRange: [0, 0.5, 1],
              outputRange: ['0deg', '100deg', '360deg'],
            }) },
          ] },
        ]}
      >
        <WUCSpinner size={15} />
      </Animated.View>
    ) : null;

    const disabledStyle = disabled ? buttonStyle.disabled : null;

    return (
      <TouchableOpacity
        style={[buttonStyle.wrapper, disabledStyle]}
        disabled={disabled}
        onPress={onPress}
      >
        {renderLoading}
        <WUCText style={buttonStyle.text}>{text.toUpperCase()}</WUCText>
      </TouchableOpacity>
    );
  }
}

WUCLoadingButton.defaultProps = {
  isLoading: false,
  disabled: false,
  onPress: f => f,
};

WUCLoadingButton.propTypes = {
  text: React.PropTypes.string.isRequired,
  onPress: React.PropTypes.func,
  isLoading: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
};
