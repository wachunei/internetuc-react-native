import React from 'react';
import {
  Animated,
  View,
  Text,
} from 'react-native';

import WUCLogo from './WUCLogo';

import style from '../styles/SplashScreen';

export default class SplashScreen extends React.Component {

  constructor(props) {
    super(props);
    this.initialize = this.initialize.bind(this);
    this.logoOpacity = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.spring(
      this.logoOpacity,
      { toValue: 1, duration: 1000 },
    ).start(this.initialize);
  }

  initialize() {
    // Here we initialize the app
  }

  render() {
    return (
      <View style={style.wrapper}>
        <Animated.View
          style={[
            { opacity: this.logoOpacity },
          ]}
        >
          <WUCLogo size={200} />
        </Animated.View>
      </View>
    );
  }
}
