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
      onPress={hrefOnPress}
    >{children}</Text>
  );
}

WUCText.propTypes = {
  children: React.PropTypes.node.isRequired,
  title: React.PropTypes.bool,
  centered: React.PropTypes.bool,
  small: React.PropTypes.bool,
  href: React.PropTypes.string,
  style: Text.propTypes.style,
};

WUCText.defaultProps = {
  title: false,
  centered: false,
  small: false,
  style: null,
  href: '',
};
