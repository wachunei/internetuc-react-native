import PropTypes from 'prop-types';
import React from 'react';
import Svg, {
  Path,
  G,
} from 'react-native-svg';

import colors from '../config/colors';

export default function WUCSpinner({
  fillColor,
  size,
  }) {
  return (
    <Svg
      viewBox="0 0 30 30"
      width={size}
      height={size}
    >
      <G fill={fillColor}>
        <Path
          d="M22.5,1.9l-2.3,3.9c3.2,1.8,5.3,5.2,5.3,9.1c0,5.8-4.7,10.5-10.5,10.5S4.5,20.7,4.5,14.9
          c0-3.9,2.1-7.3,5.2-9.1L7.5,2C3,4.6,0,9.4,0,14.9c0,8.3,6.7,15,15,15s15-6.7,
          15-15C30,9.4,27,4.5,22.5,1.9z"
        />
      </G>
    </Svg>
  );
}

WUCSpinner.propTypes = {
  fillColor: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

WUCSpinner.defaultProps = {
  fillColor: colors.defaultSpinnerColor,
  size: 30,
};
