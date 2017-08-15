import PropTypes from 'prop-types';
import React from 'react';
import {
  Animated,
  AsyncStorage,
  LayoutAnimation,
  View,
} from 'react-native';
import {
  persistStore,
} from 'redux-persist';
import store from '../store/configureStore';


import WUCLogo from './WUCLogo';

import style from '../styles/SplashScreen';

export default class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    this.initialize = this.initialize.bind(this);
    this.handleRehydration = this.handleRehydration.bind(this);
    this.logoOpacity = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.spring(
      this.logoOpacity,
      { toValue: 1, duration: 500 },
    ).start(this.initialize);
  }

  initialize() {
    persistStore(
      store,
      {
        storage: AsyncStorage,
      },
      this.handleRehydration,
    );
  }

  handleRehydration() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    if (this.props.isLoggedIn) {
      this.props.onLoggedIn();
    } else {
      this.props.onLoggedOut();
    }
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

SplashScreen.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  onLoggedIn: PropTypes.func.isRequired,
  onLoggedOut: PropTypes.func.isRequired,
};
