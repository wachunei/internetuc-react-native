import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';

// TODO these should be containers :)
import Devices from './Devices';
import Form from './Form';
import About from '../containers/About';

import style from '../styles/Main';


const window = Dimensions.get('window');

const windowStyle = StyleSheet.create({
  item: {
    flex: 1,
    height: window.height,
    width: window.width,
  },
});

export default class Main extends React.Component {

  componentDidMount() {
    this.scrollView.scrollTo({ x: window.width, animated: false });
  }

  render() {
    return (
      <ScrollView
        ref={sv => (this.scrollView = sv)}
        horizontal
        pagingEnabled
        directionalLockEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        decelerationRate="fast"
        style={style.wrapper}
      >
        <View style={windowStyle.item}>
          <Form />
        </View>
        <View style={windowStyle.item}>
          <Devices />
        </View>
        <View style={windowStyle.item}>
          <About />
        </View>
      </ScrollView>
    );
  }
}
