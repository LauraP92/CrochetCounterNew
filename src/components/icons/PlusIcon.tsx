import Svg, { Path } from 'react-native-svg';
import { IconProps } from './IconProps';
import React, { FC, useEffect, useRef, useState } from 'react';

const PlusIcon: React.FC<IconProps> = ({
    color,
    size,
    style
}) => {
    const ratio = 30 / 28;
    return (
        <Svg
            width={size}
            height={size && size / ratio}
            viewBox="0 0 30 28"
            fill="none"
            style={style}
        >
            <Path
                d="m15.2 23.45 7.13 4.296c1.305.788 2.903-.377 2.559-1.849l-1.89-8.08 6.305-5.444c1.151-.993.533-2.876-.98-2.996l-8.297-.702L16.78 1.04c-.584-1.387-2.576-1.387-3.16 0l-3.247 7.618-8.298.702c-1.512.12-2.13 2.003-.979 2.996L7.401 17.8l-1.89 8.08c-.344 1.472 1.254 2.637 2.56 1.849l7.129-4.28Z"
                fill={color}
            />
        </Svg>
    );
};

export default PlusIcon;