import React from 'react';
import {
  LayoutAnimation,
  View,
} from 'react-native';

import style from '../styles/DevicesListPlaceholder';


export default class DevicesListPlaceholder extends React.Component {
  componentWillUnmount() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }

  render() {
    const renderPlaceholders = Array(3).fill(0).map(() => (
      <View style={style.item} key={Math.random()}>
        <View style={style.itemData}>
          <View style={style.itemName} />
          <View style={style.itemMac} />
        </View>
        <View style={style.itemSwitchWrapper} >
          <View style={style.itemSwitch} />
        </View>
      </View>
    ));
    return (
      <View style={style.wrapper}>
        {renderPlaceholders}
      </View>
    );
  }
}
