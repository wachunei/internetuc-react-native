import React from 'react';
import {
  View,
} from 'react-native';
import WUCText from './WUCText';
import WUCLogo from './WUCLogo';

import commonStyle from '../styles/common';

export default function Devices() {
  return (
    <View style={commonStyle.viewWrapper}>
      <View style={[commonStyle.innerBox, commonStyle.itemInnerBox]}>
      <WUCText title>Agregar Dispositivo</WUCText>
      </View>
    </View>
  );
}

Devices.propTypes = {};
