import PropTypes from 'prop-types';
import React from 'react';
import {
  Linking,
  Text,
} from 'react-native';

import fontStyle from '../styles/fontStyle';

export default function WUCText({
  title,
  children,
  centered,
  small,
  href,
  style,
  onPress,
}) {
  const titleStyle = title ? fontStyle.title : null;
  const linkStyle = href ? fontStyle.link : null;
  const smallStyle = small ? fontStyle.small : null;
  const hrefOnPress = href ? (() => Linking.canOpenURL(href).then((supported) => {
    if (!supported) {
      return;
    }

    Linking.openURL(href);
  }).catch(f => f)
  ) : null;
  return (
    <Text
      style={[
        fontStyle.baseFont,
        titleStyle,
        linkStyle,
        smallStyle,
        style,
        (centered ? { textAlign: 'center' } : null),
      ]}
      onPress={onPress || hrefOnPress}
    >{children}</Text>
  );
}

WUCText.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.bool,
  centered: PropTypes.bool,
  small: PropTypes.bool,
  href: PropTypes.string,
  style: Text.propTypes.style,
  onPress: PropTypes.func,
};

WUCText.defaultProps = {
  title: false,
  centered: false,
  small: false,
  style: null,
  href: '',
  onPress: null,
};
