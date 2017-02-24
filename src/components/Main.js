import React from 'react';
import {
  Dimensions,
  Keyboard,
  ScrollView,
  View,
} from 'react-native';

import Devices from '../containers/Devices';
import Form from '../containers/Form';
import About from '../containers/About';

import style from '../styles/Main';

const windowWidth = Dimensions.get('window').width;

const scenes = ['form', 'devices', 'about'];

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.handleScrollScene = this.handleScrollScene.bind(this);
  }

  componentDidMount() {
    this.scrollView.scrollTo({
      x: scenes.indexOf(this.props.scene) * windowWidth,
      animated: false,
    });
  }

  componentWillUpdate(nextProps) {
    this.scrollView.scrollTo({
      x: scenes.indexOf(nextProps.scene) * windowWidth,
      animated: true,
    });
  }

  handleScrollScene(event) {
    Keyboard.dismiss();
    const currentX = event.nativeEvent.contentOffset.x;
    if (currentX % windowWidth !== 0) {
      return;
    }

    const sceneIndex = Math.floor(currentX / windowWidth);
    const currentScene = scenes[sceneIndex];
    if (currentScene && this.props.scene !== currentScene) {
      this.props.setScene(currentScene);
    }
  }

  render() {
    return (
      <ScrollView
        ref={sv => (this.scrollView = sv)}
        horizontal
        pagingEnabled
        directionalLockEnabled
        keyboardShouldPersistTaps="handled"
        onScroll={this.handleScrollScene}
        scrollEventThrottle={0}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        decelerationRate="fast"
        keyboardDismissMode="on-drag"
        style={style.wrapper}
      >
        <View style={style.item}>
          <Form />
        </View>
        <View style={style.item}>
          <Devices />
        </View>
        <View style={style.item}>
          <About />
        </View>
      </ScrollView>
    );
  }
}

Main.defaultProps = {
  scene: 'devices',
};

Main.propTypes = {
  scene: React.PropTypes.string,
  setScene: React.PropTypes.func.isRequired,
};
