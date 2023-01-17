import Svg, {Path} from 'react-native-svg';
import React from 'react';

const MinusIcon = ({color, size, style}) => {
  const ratio = 32 / 6;
  return (
    <Svg
      width={size}
      height={size && size / ratio}
      viewBox="0 0 32 6"
      fill="none"
      style={style}>
      <Path d="M31.75 5.25H.25V.75h31.5v4.5Z" fill={color || '#fff'} />
    </Svg>
  );
};

export default MinusIcon;
