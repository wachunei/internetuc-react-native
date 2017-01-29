import React from 'react';
import {
  Text,
} from 'react-native';

import fontStyle from '../styles/fontStyle';

export default function MUCText({
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

MUCText.propTypes = {
  children: React.PropTypes.node.isRequired,
  title: React.PropTypes.bool,
  style: Text.propTypes.style,
};

MUCText.defaultProps = {
  title: false,
  style: null,
};
