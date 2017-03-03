import React from 'react';
import {
  Alert,
  View,
  ScrollView,
} from 'react-native';
import WUCText from './WUCText';
import WUCLoadingButton from './WUCLoadingButton';
import colors from '../config/colors';
import commonStyle from '../styles/common';
import style from '../styles/About';

function logoutAlert(success) {
  Alert.alert(
    'Cerrar sesión',
    'Si cierras sesión se olvidarán todos los dispositivos ¿Estás seguro?',
    [
      { text: 'Cancelar', onPress: f => f, style: 'cancel' },
      { text: 'Sí, estoy seguro', onPress: success, style: 'destructive' },
    ],
    { cancelable: true },
  );
}

export default function About({
  fullName,
  username,
  logoutStart,
  loggingOut,
}) {
  return (
    <View style={commonStyle.viewWrapper}>
      <View style={[commonStyle.innerBox, commonStyle.itemInnerBox]}>
        <ScrollView contentContainerStyle={style.aboutBox}>
          <View style={style.currentUserBox}>
            <View style={style.currentUserBoxFullNameWrapper}>
              <WUCText
                style={style.currentUserBoxFullName}
                numberOfLines={1}
                ellipsizeMode="middle"
              >
                {fullName || username}
              </WUCText>
            </View>
            <WUCLoadingButton
              text="Cerrar Sesión"
              isLoading={loggingOut}
              disabled={loggingOut}
              onPress={() => logoutAlert(logoutStart)}
              color={colors.WUCLoadingButtonGray}
              style={style.logoutButton}
            />
          </View>
          <View style={style.section}>
            <WUCText title centered style={style.title}>Acerca de</WUCText>
            <WUCText centered style={style.paragraph}>
              Esta aplicación no es oficial ni tiene relación alguna con la
              Pontifica Universidad Católica de Chile.
            </WUCText>
          </View>
          <View style={style.section}>
            <WUCText title centered style={style.title}>Código abierto</WUCText>
            <WUCText centered style={style.paragraph}>
              El código de esta aplicación es abierto y se puede
              {' '}
              <WUCText href="https://github.com/wachunei/internetuc-react-native">
                encontrar en Github.
              </WUCText>
            </WUCText>
          </View>

          <View style={style.section}>
            <WUCText centered small style={style.paragraph}>
              Desarrollada por Pedro Pablo Aste Kompen (ppaste@uc.cl)
            </WUCText>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

About.defaultProps = {
  fullName: null,
  loggingOut: false,
};

About.propTypes = {
  fullName: React.PropTypes.string,
  username: React.PropTypes.string.isRequired,
  loggingOut: React.PropTypes.bool,
  logoutStart: React.PropTypes.func.isRequired,
};
