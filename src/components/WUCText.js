import React from 'react';
import {
  Text,
} from 'react-native';

import fontStyle from '../styles/fontStyle';

export default function WUCText({
  title,
  children,
  style,
}) {
  const titleStyle = title ? fontStyle.title : null;
  return (
    <Text
      style={[
        fontStyle.baseFont,
        titleStyle,
        style,
      ]}
    >{children}</Text>
  );
}

WUCText.propTypes = {
  children: React.PropTypes.node.isRequired,
  title: React.PropTypes.bool,
  style: Text.propTypes.style,
};

WUCText.defaultProps = {
  title: false,
  style: null,
};
