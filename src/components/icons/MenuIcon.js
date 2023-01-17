import Svg, {Rect} from 'react-native-svg';
import React from 'react';

const MenuIcon = ({color, size, style}) => {
  const ratio = 20 / 4;
  return (
    <Svg
      width={size}
      height={size && size / ratio}
      viewBox="0 0 20 4"
      fill="none"
      style={style}>
      <Rect
        y={4}
        width={4}
        height={4}
        rx={2}
        transform="rotate(-90 0 4)"
        fill={color || '#fff'}
      />
      <Rect
        x={8}
        y={4}
        width={4}
        height={4}
        rx={2}
        transform="rotate(-90 8 4)"
        fill={color || '#fff'}
      />
      <Rect
        x={16}
        y={4}
        width={4}
        height={4}
        rx={2}
        transform="rotate(-90 16 4)"
        fill={color || '#fff'}
      />
    </Svg>
  );
};

export default MenuIcon;
