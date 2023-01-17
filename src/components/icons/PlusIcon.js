import Svg, {Path} from 'react-native-svg';
import React from 'react';

const PlusIcon = ({color, size, style}) => {
  const ratio = 33 / 33;
  return (
    <Svg
      width={size}
      height={size && size / ratio}
      viewBox="0 0 33 33"
      fill="none"
      style={style}>
      <Path
        d="M32.542 18.792h-13.75v13.75h-4.584v-13.75H.458v-4.584h13.75V.458h4.584v13.75h13.75v4.584Z"
        fill={color || '#fff'}
      />
    </Svg>
  );
};

export default PlusIcon;
