import React from 'react';
import {PRIMARY, WHITE} from '../constants/COLOUR';
import Box from './Box';
import TemplateIcon from './icons/TemplateIcon';

const CircleButton = ({
  size = 50,
  onPress,
  iconName,
  iconFamily,
  ...restProps
}) => (
  <Box
    onPress={onPress}
    backgroundColor={PRIMARY}
    aspectRatio={1}
    width={size}
    radius={size / 2}
    center
    {...restProps}>
    <TemplateIcon
      name={iconName || 'PlusIcon'}
      size={size * 0.6}
      color={WHITE}
    />
  </Box>
);

export default CircleButton;
