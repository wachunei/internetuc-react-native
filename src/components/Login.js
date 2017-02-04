import React from 'react';
import {
  KeyboardAvoidingView,
  View,
} from 'react-native';
import WUCText from './WUCText';
import WUCTextInput from './WUCTextInput';
import WUCLogo from './WUCLogo';

import style from '../styles/Login';
import commonStyle from '../styles/common';

export default function Login({
  username,
  password,
  isLoading,
  }) {
  return (
    <KeyboardAvoidingView style={style.wrapper} behavior="padding">
      <View style={style.logoHeader}>
        <WUCLogo size="90" />
      </View>
      <View style={[commonStyle.innerBox, style.loginBox]}>
        <WUCText title>Iniciar Sesión</WUCText>
        <WUCText>Inicia sesión usando tu usuario y contraseña uc</WUCText>

        <View style={style.formBox}>
          <WUCTextInput
            autoFocus
            selectTextOnFocus
            placeholder="usuario"
            autoCapitalize="none"
            autoCorrect={false}
            value={username}
          />
          <WUCTextInput
            selectTextOnFocus
            secureTextEntry
            enablesReturnKeyAutomatically
            placeholder="contraseña"
            returnKeyType="go"
            value={password}

          />
        </View>
      </View>
      <View style={style.bottomSpacer} />
    </KeyboardAvoidingView>
  );
}

Login.defaultProps = {
  username: '',
  password: '',
  isLoading: false,
};

Login.propTypes = {
  username: React.PropTypes.string,
  password: React.PropTypes.string,
  isLoading: React.PropTypes.bool,
};
