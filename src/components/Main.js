import React from 'react';
import {
  Dimensions,
  Keyboard,
  Platform,
  ScrollView,
  View,
  ViewPagerAndroid,
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
    if (Platform.OS === 'android') {
      this.viewPager.setPage(scenes.indexOf(this.props.scene));
    } else {
      this.scrollView.scrollTo({
        x: scenes.indexOf(this.props.scene) * windowWidth,
        animated: false,
      });
    }
  }

  componentWillUpdate(nextProps) {
    if (Platform.OS === 'android') {
      this.viewPager.setPage(scenes.indexOf(nextProps.scene));
    } else {
      this.scrollView.scrollTo({
        x: scenes.indexOf(nextProps.scene) * windowWidth,
        animated: true,
      });
    }
  }

  handleScrollScene(event) {
    Keyboard.dismiss();

    if (Platform.OS === 'android') {
      const currentScene = scenes[event.nativeEvent.position];
      if (currentScene && this.props.scene !== currentScene) {
        this.props.setScene(currentScene);
      }
    } else {
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
  }

  render() {
    const pagerItems = [
      <View style={style.item} key="formScene">
        <Form />
      </View>,
      <View style={style.item} key="devicesScene">
        <Devices />
      </View>,
      <View style={style.item} key="aboutScene">
        <About />
      </View>,
    ];

    if (Platform.OS === 'android') {
      return (
        <ViewPagerAndroid
          ref={vp => (this.viewPager = vp)}
          initialPage={1}
          keyboardDismissMode="on-drag"
          onPageSelected={this.handleScrollScene}
          style={style.wrapper}
        >
          {pagerItems}
        </ViewPagerAndroid>
      );
    }

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
        {pagerItems}
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
