import React from 'react';
import {
  KeyboardAvoidingView,
  View,
  TextInput,
} from 'react-native';
import WUCText from './WUCText';

import style from '../styles/Login';
import commonStyle from '../styles/common';

export default function Login() {
  return (
    <KeyboardAvoidingView style={style.wrapper} behavior="padding">
      <View style={[commonStyle.innerBox, style.loginBox]}>
        <WUCText title>Iniciar Sesión</WUCText>
        <WUCText>Inicia sesión usando tu usuario y contraseña uc</WUCText>

        <TextInput style={{ height: 40 }} placeholder="usuario" />
        <TextInput style={{ height: 40 }} placeholder="contraseña" />
      </View>
    </KeyboardAvoidingView>
  );
}
