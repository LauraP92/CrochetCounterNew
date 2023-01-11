import Svg, {Path} from 'react-native-svg';
import {IconProps} from './IconProps';
import React, {FC, useEffect, useRef, useState} from 'react';

const CloseIcon = ({color, size, style}) => {
  const ratio = 24 / 24;
  return (
    <Svg
      width={size}
      height={size && size / ratio}
      viewBox="0 0 24 24"
      fill="none"
      style={style}>
      <Path
        d="M18 6 6 18M6 6l12 12"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={color || '#fff'}
      />
    </Svg>
  );
};

export default CloseIcon;
