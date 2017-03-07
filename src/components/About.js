import React from 'react';
import {
  Alert,
  View,
  ScrollView,
} from 'react-native';
import t from '../config/locales';
import WUCText from './WUCText';
import WUCLoadingButton from './WUCLoadingButton';
import IconButton from './IconButton';
import colors from '../config/colors';
import commonStyle from '../styles/common';
import style from '../styles/About';

function logoutAlert(success) {
  Alert.alert(
    t('about.logOutAlert.title'),
    t('about.logOutAlert.message'),
    [
      { text: t('about.logOutAlert.cancel'), onPress: f => f, style: 'cancel' },
      { text: t('about.logOutAlert.confirm'), onPress: success, style: 'destructive' },
    ],
    { cancelable: true },
  );
}

export default function About({
  fullName,
  username,
  logoutStart,
  loggingOut,
  setScene,
}) {
  return (
    <View style={commonStyle.viewWrapper}>
      <View style={[commonStyle.innerBox, commonStyle.itemInnerBox]}>
        <IconButton
          displayIcon
          displayText
          iconPosition="left"
          iconName="arrow-back"
          text={t('about.backToDevices')}
          onPress={() => setScene('devices')}
          key="backToDevicesButton"
        />
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
              text={t('about.logOut')}
              isLoading={loggingOut}
              disabled={loggingOut}
              onPress={() => logoutAlert(logoutStart)}
              color={colors.WUCLoadingButtonRed}
              outlined
              style={style.logoutButton}
            />
          </View>
          <View style={style.section}>
            <WUCText title centered style={style.title}>{t('about.about')}</WUCText>
            <WUCText centered style={style.paragraph}>{t('about.officialDisclaimer')}</WUCText>
          </View>
          <View style={style.section}>
            <WUCText title centered style={style.title}>{t('about.openSource')}</WUCText>
            <WUCText centered style={style.paragraph}>
              {t('about.openSourceText')}
              {' '}
              <WUCText href="https://github.com/wachunei/internetuc-react-native">
                {t('about.openSourceLink')}
              </WUCText>
            </WUCText>
          </View>

          <View style={style.section}>
            <WUCText centered small style={style.paragraph}>
              {t('about.credits')}
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
  setScene: React.PropTypes.func.isRequired,
};
