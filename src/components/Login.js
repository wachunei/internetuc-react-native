import React from 'react';
import {
  KeyboardAvoidingView,
  View,
  TextInput,
} from 'react-native';
import WUCText from './WUCText';
import WUCLogo from './WUCLogo';

import style from '../styles/Login';
import commonStyle from '../styles/common';

export default function Login() {
  return (
    <KeyboardAvoidingView style={style.wrapper} behavior="padding">
      <View style={style.logoHeader}>
        <WUCLogo size="90" />
      </View>
      <View style={[commonStyle.innerBox, style.loginBox]}>
        <WUCText title>Iniciar Sesión</WUCText>
        <WUCText>Inicia sesión usando tu usuario y contraseña uc</WUCText>

        <TextInput style={{ height: 40 }} placeholder="usuario" />
        <TextInput style={{ height: 40 }} placeholder="contraseña" />
      </View>
      <View style={style.bottomSpacer} />
    </KeyboardAvoidingView>
  );
}
